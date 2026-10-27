(() => {
  const STORAGE_KEY = 'apxCertificationStudyState';
  const screens = {
    home: document.getElementById('screen-home'),
    study: document.getElementById('screen-study'),
    materials: document.getElementById('screen-materials'),
    flashcards: document.getElementById('screen-flashcards'),
    configure: document.getElementById('screen-configure'),
    exam: document.getElementById('screen-exam'),
    results: document.getElementById('screen-results'),
    mistakes: document.getElementById('screen-mistakes'),
    progress: document.getElementById('screen-progress')
  };

  const topicById = Object.fromEntries(TOPICS.map(t => [t.id, t]));
  const questionById = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));
  const exactSetsById = Object.fromEntries((window.EXACT_QUESTIONNAIRES || []).map(set => [set.id, set]));
  const flashcards = TOPICS.flatMap(topic => topic.concepts.map((concept, index) => ({
    id: `${topic.id}-${index}`,
    topicId: topic.id,
    topicTitle: topic.shortTitle || topic.title,
    question: concept.term,
    answer: concept.explanation,
    memory: concept.memory,
    trap: concept.trap
  })));

  let state = loadState();
  let currentRoute = 'home';
  let currentTopicId = TOPICS[0].id;
  let currentFlashIndex = 0;
  let filteredFlashcards = [...flashcards];
  let currentQuiz = null;
  let timerInterval = null;

  const refs = {
    body: document.body,
    navLinks: Array.from(document.querySelectorAll('[data-route]')),
    mobilePanel: document.getElementById('mobilePanel'),
    menuToggle: document.getElementById('menuToggle'),
    themeToggle: document.getElementById('themeToggle'),
    examDateInput: document.getElementById('examDateInput'),
    countdownBox: document.getElementById('countdownBox'),
    statAttempts: document.getElementById('statAttempts'),
    statAverage: document.getElementById('statAverage'),
    statBest: document.getElementById('statBest'),
    statMistakes: document.getElementById('statMistakes'),
    topicSidebar: document.getElementById('topicSidebar'),
    studyStage: document.getElementById('studyStage'),
    studySearch: document.getElementById('studySearch'),
    materialItems: Array.from(document.querySelectorAll('[data-material-target]')),
    materialPanels: Array.from(document.querySelectorAll('[data-material-panel]')),
    flashTopicSelect: document.getElementById('flashTopicSelect'),
    flashCard: document.getElementById('flashCard'),
    flashTopicLabel: document.getElementById('flashTopicLabel'),
    flashQuestion: document.getElementById('flashQuestion'),
    flashAnswer: document.getElementById('flashAnswer'),
    flashMemory: document.getElementById('flashMemory'),
    flashCounter: document.getElementById('flashCounter'),
    flashStatus: document.getElementById('flashStatus'),
    flashPrev: document.getElementById('flashPrev'),
    flashNext: document.getElementById('flashNext'),
    flashReview: document.getElementById('flashReview'),
    flashKnown: document.getElementById('flashKnown'),
    quizConfig: document.getElementById('quizConfig'),
    quizTopic: document.getElementById('quizTopic'),
    timerCheck: document.getElementById('timerCheck'),
    configTitle: document.getElementById('configTitle'),
    configText: document.getElementById('configText'),
    configGoal: document.getElementById('configGoal'),
    examModeBadge: document.getElementById('examModeBadge'),
    examProgressText: document.getElementById('examProgressText'),
    examProgressBar: document.getElementById('examProgressBar'),
    examTimer: document.getElementById('examTimer'),
    leaveExam: document.getElementById('leaveExam'),
    questionTopic: document.getElementById('questionTopic'),
    questionDifficulty: document.getElementById('questionDifficulty'),
    questionType: document.getElementById('questionType'),
    questionText: document.getElementById('questionText'),
    questionCode: document.getElementById('questionCode'),
    questionNavigator: document.getElementById('questionNavigator'),
    answerForm: document.getElementById('answerForm'),
    feedbackBox: document.getElementById('feedbackBox'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackText: document.getElementById('feedbackText'),
    feedbackSource: document.getElementById('feedbackSource'),
    prevQuestion: document.getElementById('prevQuestion'),
    mainQuestionAction: document.getElementById('mainQuestionAction'),
    resultScore: document.getElementById('resultScore'),
    resultStatus: document.getElementById('resultStatus'),
    resultTitle: document.getElementById('resultTitle'),
    resultSummary: document.getElementById('resultSummary'),
    retryQuiz: document.getElementById('retryQuiz'),
    topicBreakdown: document.getElementById('topicBreakdown'),
    resultAdviceTitle: document.getElementById('resultAdviceTitle'),
    resultAdviceText: document.getElementById('resultAdviceText'),
    answerReview: document.getElementById('answerReview'),
    mistakesList: document.getElementById('mistakesList'),
    practiceMistakes: document.getElementById('practiceMistakes'),
    progressAttempts: document.getElementById('progressAttempts'),
    progressAverage: document.getElementById('progressAverage'),
    progressBest: document.getElementById('progressBest'),
    progressCards: document.getElementById('progressCards'),
    progressTopics: document.getElementById('progressTopics'),
    historyList: document.getElementById('historyList'),
    clearProgress: document.getElementById('clearProgress'),
    toast: document.getElementById('toast')
  };

  function loadState() {
    const base = {
      examDate: '',
      theme: 'light',
      attempts: [],
      mistakes: [],
      topicStats: {},
      flashcardStats: {}
    };
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return { ...base, ...(parsed || {}) };
    } catch {
      return base;
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // The app still works in restricted previews; persistence is simply unavailable.
    }
  }

  function showToast(message) {
    refs.toast.textContent = message;
    refs.toast.classList.add('is-visible');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => refs.toast.classList.remove('is-visible'), 2200);
  }

  function setTheme(theme) {
    state.theme = theme;
    refs.body.classList.toggle('dark', theme === 'dark');
    saveState();
  }

  function navigate(route) {
    if (currentRoute === 'exam' && route !== 'exam' && currentQuiz && !currentQuiz.submitted) {
      if (!confirm('¿Descartar el examen en curso?')) return;
      stopTimer(); currentQuiz = null;
    }
    currentRoute = route;
    Object.entries(screens).forEach(([key, node]) => {
      node.classList.toggle('is-visible', key === route);
    });
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.toggle('is-active', btn.dataset.route === route));
    refs.mobilePanel.classList.remove('is-open');
    if (route === 'study') renderStudy();
    if (route === 'flashcards') renderFlashcard();
    if (route === 'mistakes') renderMistakes();
    if (route === 'progress') renderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function averageScore() {
    if (!state.attempts.length) return 0;
    const total = state.attempts.reduce((sum, a) => sum + a.score, 0);
    return Math.round(total / state.attempts.length);
  }

  function bestScore() {
    if (!state.attempts.length) return 0;
    return Math.max(...state.attempts.map(a => a.score));
  }

  function updateHomeStats() {
    refs.statAttempts.textContent = state.attempts.length;
    refs.statAverage.textContent = `${averageScore()}%`;
    refs.statBest.textContent = `${bestScore()}%`;
    refs.statMistakes.textContent = state.mistakes.length;
  }

  function updateCountdown() {
    refs.examDateInput.value = state.examDate || '';
    const target = state.examDate ? new Date(`${state.examDate}T00:00:00`) : null;
    if (!target || Number.isNaN(target.getTime())) {
      refs.countdownBox.innerHTML = '<article><strong>—</strong><small>Elige una fecha</small></article>';
      return;
    }
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      refs.countdownBox.innerHTML = '<article><strong>0</strong><small>días</small></article><article><strong>0</strong><small>horas</small></article><article><strong>0</strong><small>minutos</small></article><article><strong>0</strong><small>Ya es hoy</small></article>';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    refs.countdownBox.innerHTML = `
      <article><strong>${days}</strong><small>días</small></article>
      <article><strong>${hours}</strong><small>horas</small></article>
      <article><strong>${minutes}</strong><small>minutos</small></article>
      <article><strong>${seconds}</strong><small>segundos</small></article>
    `;
  }

  function renderTopicSidebar() {
    refs.topicSidebar.innerHTML = TOPICS.map((topic, index) => `
      <button class="study-chip ${topic.id === currentTopicId ? 'is-active' : ''}" data-topic-id="${topic.id}">
        <span class="study-chip-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="study-chip-copy"><strong>${topic.title}</strong><small>${topic.tag}</small></span>
        <span class="study-chip-arrow">↗</span>
      </button>
    `).join('');
    refs.topicSidebar.querySelectorAll('[data-topic-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTopicId = btn.dataset.topicId;
        refs.studySearch.value = '';
        renderStudy();
      });
    });
  }

  function renderStudy() {
    renderTopicSidebar();
    const topic = topicById[currentTopicId];
    const query = refs.studySearch.value.trim().toLowerCase();
    let concepts = topic.concepts;
    if (query) {
      concepts = topic.concepts.filter(c => [c.term, c.explanation, c.memory, c.trap, ...(c.quickFacts || [])].join(' ').toLowerCase().includes(query));
    }
    const topicIndex = TOPICS.findIndex(item => item.id === topic.id) + 1;
    refs.studyStage.innerHTML = `
      <div class="topic-hero editorial-topic-hero">
        <article class="topic-panel" style="--topic-color:${topic.color}">
          <span class="topic-watermark">${topic.shortTitle || topic.title}</span>
          <span class="section-kicker">BLOQUE ${String(topicIndex).padStart(2, '0')} · ${topic.tag}</span>
          <h2>${topic.title}</h2>
          <p>${topic.summary}</p>
          <div class="topic-bullets">
            ${topic.bullets.map(item => `<span>${item}</span>`).join('')}
          </div>
        </article>
        <article class="quick-panel">
          <span class="section-kicker">REGLA GENERAL</span>
          <h3>${topic.kicker}</h3>
          <p>Identifica la responsabilidad de cada componente. En código, revisa primero compilación, tipos y flujo; después calcula la salida.</p>
          <span class="quick-index">${String(topicIndex).padStart(2, '0')}/${String(TOPICS.length).padStart(2, '0')}</span>
        </article>
      </div>
      <div class="concept-stack editorial-concepts">
        ${concepts.length ? concepts.map((concept, index) => `
          <article class="concept-card ${index === 0 ? 'is-open' : ''}">
            <button class="concept-head" type="button">
              <span>${concept.term}</span>
              <span>${index === 0 ? '−' : '+'}</span>
            </button>
            <div class="concept-body">
              <p>${concept.explanation}</p>
              <div class="note-grid">
                <div class="note-box"><strong>Regla mental</strong><span>${concept.memory}</span></div>
                <div class="note-box"><strong>Trampa típica</strong><span>${concept.trap}</span></div>
                <div class="note-box"><strong>Dato rápido</strong><span>${(concept.quickFacts || []).join(' · ')}</span></div>
              </div>
            </div>
          </article>
        `).join('') : `<article class="concept-card is-open"><div class="concept-body" style="display:block"><p>No encontré coincidencias para <strong>${escapeHtml(query)}</strong> en este tema. Prueba otro término.</p></div></article>`}
      </div>
    `;

    refs.studyStage.querySelectorAll('.concept-card').forEach(card => {
      const head = card.querySelector('.concept-head');
      head.addEventListener('click', () => {
        const open = card.classList.toggle('is-open');
        head.lastElementChild.textContent = open ? '−' : '+';
      });
    });
  }

  function setupFlashcards() {
    refs.flashTopicSelect.innerHTML = `<option value="all">Todos los temas</option>${TOPICS.map(t => `<option value="${t.id}">${t.title}</option>`).join('')}`;
    applyFlashcardFilter();
  }

  function applyFlashcardFilter() {
    const value = refs.flashTopicSelect.value || 'all';
    filteredFlashcards = value === 'all' ? [...flashcards] : flashcards.filter(card => card.topicId === value);
    currentFlashIndex = 0;
    renderFlashcard();
  }

  function renderFlashcard() {
    const card = filteredFlashcards[currentFlashIndex];
    refs.flashCard.classList.remove('is-flipped');
    if (!card) {
      refs.flashTopicLabel.textContent = 'Sin resultados';
      refs.flashQuestion.textContent = 'No hay tarjetas para este filtro.';
      refs.flashAnswer.textContent = '';
      refs.flashMemory.textContent = '';
      refs.flashCounter.textContent = '0 / 0';
      refs.flashStatus.textContent = 'Sin evaluar';
      return;
    }
    refs.flashTopicLabel.textContent = card.topicTitle;
    refs.flashQuestion.textContent = card.question;
    refs.flashAnswer.textContent = card.answer;
    refs.flashMemory.textContent = `Regla mental: ${card.memory} · Trampa típica: ${card.trap}`;
    refs.flashCounter.textContent = `${currentFlashIndex + 1} / ${filteredFlashcards.length}`;
    const ghostCounter = document.querySelector('#screen-flashcards .inner-ghost-number');
    if (ghostCounter) ghostCounter.textContent = `${String(currentFlashIndex + 1).padStart(2, '0')}/${String(filteredFlashcards.length).padStart(2, '0')}`;
    const status = state.flashcardStats[card.id];
    refs.flashStatus.textContent = status === 'known' ? 'Estado: dominada' : status === 'review' ? 'Estado: repasar' : 'Estado: sin evaluar';
  }

  function updateConfigSummary() {
    const form = new FormData(refs.quizConfig);
    const mode = form.get('mode');
    const count = mode === 'real' ? 58 : Number(form.get('count'));
    const topic = mode === 'real' ? 'all' : refs.quizTopic.value;
    const modeLabel = mode === 'practice' ? 'Práctica' : mode === 'real' ? 'Como el real' : 'Simulación';
    const topicLabel = topic === 'all' ? 'Todos los temas' : topic === 'weak' ? 'Temas débiles' : topic === 'guia2' ? 'Solo MiGuiaAPX 2' : 'Solo errores';
    refs.configTitle.textContent = `${modeLabel} de ${count} preguntas`;
    refs.configText.textContent = `${topicLabel} · ${mode === 'practice' ? 'explicación inmediata' : 'sin retroalimentación hasta el final'}`;
    refs.configGoal.textContent = `Meta: ${Math.ceil(count * .8)} de ${count} · 80%`;
    refs.quizTopic.disabled = mode === 'real';
    document.querySelectorAll('[name=count]').forEach(input => input.disabled = mode === 'real');
  }

  function normalizeQuestionKey(question) {
    if (question.origin === 'guia2') return `guia2:${question.id}`;
    return `${String(question.question || '')} ${String(question.code || '')}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function uniqueQuestionPool(pool) {
    const seen = new Set();
    return pool.filter(question => {
      const key = normalizeQuestionKey(question);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function pickQuestionPool(topicMode) {
    let pool = [...QUESTIONS];
    if (topicMode === 'guia2') {
      pool = QUESTIONS.filter(q => q.origin === 'guia2');
    } else if (topicMode === 'mistakes') {
      pool = state.mistakes.map(id => questionById[id]).filter(Boolean);
    } else if (topicMode === 'weak') {
      const topicStats = Object.entries(state.topicStats)
        .map(([topicId, stats]) => ({ topicId, ratio: stats.total ? stats.correct / stats.total : 1 }))
        .sort((a, b) => a.ratio - b.ratio)
        .slice(0, 3)
        .map(x => x.topicId);
      pool = topicStats.length ? QUESTIONS.filter(q => topicStats.includes(q.topic)) : [...QUESTIONS];
    }
    if (!pool.length && topicMode !== 'guia2') pool = [...QUESTIONS];
    return shuffle(uniqueQuestionPool(pool));
  }

  function selectQuestions(pool, requestedCount) {
    const uniquePool = uniqueQuestionPool(pool);
    const count = Math.min(requestedCount, uniquePool.length);
    return shuffle(uniquePool).slice(0, count);
  }

  function startQuiz({ mode, count, topicMode, withTimer, exactSetId = null }) {
    if (mode === 'real') { count = 58; topicMode = 'all'; }
    const minutes = Number(document.getElementById('examMinutes').value);
    if (withTimer && mode !== 'practice' && (!Number.isFinite(minutes) || minutes < 1 || minutes > 300)) return showToast('Elige entre 1 y 300 minutos');
    const exactSet = exactSetId ? exactSetsById[exactSetId] : null;
    let questions;

    if (exactSet) {
      questions = exactSet.questionIds.map(id => questionById[id]).filter(Boolean);
      count = questions.length;
      withTimer = refs.timerCheck.checked;
    } else {
      const pool = pickQuestionPool(topicMode);
      if (mode === 'real') {
        const quotas = { online:9, cli:8, batch:9, java:13, colecciones:8, patrones:6, pruebas:5 };
        questions = shuffle(Object.entries(quotas).flatMap(([topic, n]) => selectQuestions(pool.filter(q => q.topic === topic), n)));
      } else questions = selectQuestions(pool, count);
    }

    questions = questions.map(q => {
      if (q.origin === 'guia2') return { ...q, options: [...q.options], answer: [...q.answer] };
      const order = shuffle(q.options.map((_, i) => i));
      return { ...q, options: order.map(i => q.options[i]), answer: order.map((old, index) => q.answer.includes(old) ? index : -1).filter(i => i >= 0).sort((a,b) => a-b) };
    });
    currentQuiz = {
      mode,
      count: questions.length,
      requestedCount: count,
      withTimer,
      topicMode: exactSet ? `exact:${exactSet.id}` : topicMode,
      exactSetId: exactSet?.id || null,
      exactSetTitle: exactSet?.title || null,
      questions,
      index: 0,
      responses: Array.from({ length: questions.length }, () => ({ selected: [], correct: false, checked: false, auto: false, flagged: false })),
      locked: false,
      submitted: false,
      timeLeft: mode === 'practice' ? 75 : Number(document.getElementById('examMinutes').value) * 60,
      deadline: null,
      createdAt: new Date().toISOString()
    };
    navigate('exam');
    renderQuestion();
    if (withTimer) startTimer(); else stopTimer();
  }

  function renderQuestionNavigator() {
    if (!currentQuiz || !refs.questionNavigator) return;
    refs.questionNavigator.innerHTML = currentQuiz.responses.map((response, index) => {
      const classes = ['question-nav-btn'];
      if (index === currentQuiz.index) classes.push('is-current');
      if (response.flagged) classes.push('is-flagged');
      if (currentQuiz.mode === 'practice' && response.checked) {
        classes.push(response.correct ? 'is-correct' : 'is-wrong');
      } else if (response.selected.length || response.checked) {
        classes.push('is-answered');
      }
      return `<button type="button" class="${classes.join(' ')}" data-question-index="${index}" aria-label="Ir a la pregunta ${index + 1}">${index + 1}</button>`;
    }).join('');

    refs.questionNavigator.querySelectorAll('[data-question-index]').forEach(button => {
      button.addEventListener('click', () => {
        const targetIndex = Number(button.dataset.questionIndex);
        if (!Number.isInteger(targetIndex) || targetIndex === currentQuiz.index) return;
        currentQuiz.index = targetIndex;
        if (currentQuiz.mode === 'practice') currentQuiz.timeLeft = 75;
        renderQuestion();
        if (currentQuiz.withTimer) restartTimer();
        const questionCard = refs.questionText.closest('.question-card');
        if (questionCard) questionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderQuestion() {
    if (!currentQuiz) return;
    const q = currentQuiz.questions[currentQuiz.index];
    const response = currentQuiz.responses[currentQuiz.index];
    refs.examModeBadge.textContent = currentQuiz.exactSetTitle ? `Simulación · ${currentQuiz.exactSetTitle}` : (currentQuiz.mode === 'practice' ? 'Práctica' : currentQuiz.mode === 'real' ? 'Como el real' : 'Simulación');
    refs.examProgressText.textContent = `Pregunta ${currentQuiz.index + 1} de ${currentQuiz.questions.length}`;
    refs.examProgressBar.style.width = `${((currentQuiz.index + 1) / currentQuiz.questions.length) * 100}%`;
    refs.questionTopic.textContent = topicById[q.topic]?.shortTitle || topicById[q.topic]?.title || q.topic;
    refs.questionDifficulty.textContent = q.difficulty;
    refs.questionType.textContent = q.type === 'multiple' ? `Selecciona ${q.answer.length} respuestas` : 'Respuesta única';
    document.getElementById('flagQuestion').textContent = response.flagged ? 'Quitar marca' : 'Marcar para revisar';
    document.getElementById('finishExam').hidden = currentQuiz.mode === 'practice';
    refs.questionText.textContent = q.question;
    if (q.code) {
      refs.questionCode.querySelector('code').textContent = q.code;
      refs.questionCode.classList.remove('hidden');
    } else {
      refs.questionCode.querySelector('code').textContent = '';
      refs.questionCode.classList.add('hidden');
    }
    renderQuestionNavigator();
    const questionCard = refs.questionText.closest('.question-card');
    if (questionCard) questionCard.dataset.number = String(currentQuiz.index + 1).padStart(2, '0');
    refs.answerForm.innerHTML = q.options.map((option, i) => {
      const checked = response.selected.includes(i) ? 'checked' : '';
      const type = q.type === 'multiple' ? 'checkbox' : 'radio';
      return `
        <label class="answer-option ${response.selected.includes(i) ? 'is-selected' : ''}">
          <input type="${type}" name="answer" value="${i}" ${checked}>
          <span>${escapeHtml(option)}</span>
        </label>
      `;
    }).join('');

    refs.feedbackBox.classList.add('hidden');
    refs.feedbackTitle.textContent = '';
    refs.feedbackText.textContent = '';
    refs.feedbackSource.textContent = '';

    refs.answerForm.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', handleAnswerSelection);
      if (response.checked) input.disabled = true;
    });
    if (response.checked) {
      paintReviewedOptions(q, response);
      if (currentQuiz.mode === 'practice') {
        refs.feedbackBox.classList.remove('hidden');
        refs.feedbackTitle.textContent = response.correct ? 'Correcta' : response.auto ? 'Tiempo agotado' : 'Incorrecta';
        refs.feedbackText.textContent = q.explanation;
        refs.feedbackSource.textContent = `Fuente: ${q.source}`;
      }
    }

    refs.prevQuestion.disabled = currentQuiz.index === 0;

    if (currentQuiz.mode === 'practice') {
      refs.mainQuestionAction.textContent = response.checked
        ? (currentQuiz.index === currentQuiz.questions.length - 1 ? 'Ver resultados' : 'Siguiente')
        : 'Comprobar';
    } else {
      refs.mainQuestionAction.textContent = currentQuiz.index === currentQuiz.questions.length - 1 ? 'Finalizar' : 'Guardar y siguiente';
    }
    updateTimerUI();
  }

  function handleAnswerSelection() {
    if (!currentQuiz) return;
    const q = currentQuiz.questions[currentQuiz.index];
    const selected = Array.from(refs.answerForm.querySelectorAll('input:checked')).map(input => Number(input.value)).sort((a,b)=>a-b);
    currentQuiz.responses[currentQuiz.index].selected = selected;
    refs.answerForm.querySelectorAll('.answer-option').forEach(option => {
      const input = option.querySelector('input');
      option.classList.toggle('is-selected', input.checked);
    });
    renderQuestionNavigator();
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((item, i) => item === b[i]);
  }

  function checkCurrentQuestion(auto = false) {
    const q = currentQuiz.questions[currentQuiz.index];
    const response = currentQuiz.responses[currentQuiz.index];
    response.selected = [...response.selected].sort((a,b)=>a-b);
    response.correct = arraysEqual(response.selected, [...q.answer].sort((a,b)=>a-b));
    response.checked = true;
    response.auto = auto;
    paintReviewedOptions(q, response);
    renderQuestionNavigator();

    if (currentQuiz.mode === 'practice') {
      refs.feedbackBox.classList.remove('hidden');
      refs.feedbackTitle.textContent = response.correct ? 'Correcta' : auto ? 'Tiempo agotado' : 'Incorrecta';
      refs.feedbackText.textContent = q.explanation;
      refs.feedbackSource.textContent = `Fuente: ${q.source}`;
    }
  }

  function paintReviewedOptions(q, response) {
    refs.answerForm.querySelectorAll('.answer-option').forEach((label, index) => {
      label.classList.remove('is-selected', 'is-correct', 'is-wrong');
      const input = label.querySelector('input');
      input.disabled = true;
      const isSelected = response.selected.includes(index);
      const isCorrect = q.answer.includes(index);
      if (isCorrect) label.classList.add('is-correct');
      if (isSelected && !isCorrect) label.classList.add('is-wrong');
    });
  }

  function nextQuestionOrFinish() {
    if (currentQuiz.index < currentQuiz.questions.length - 1) {
      currentQuiz.index += 1;
      if (currentQuiz.mode === 'practice') currentQuiz.timeLeft = 75;
      renderQuestion();
      if (currentQuiz.withTimer) restartTimer();
    } else {
      requestFinish();
    }
  }

  function requestFinish() {
    const unanswered = currentQuiz.responses.filter(r => !r.selected.length).length;
    const flagged = currentQuiz.responses.filter(r => r.flagged).length;
    if (confirm(`Entregar ${currentQuiz.count} preguntas: ${unanswered} sin responder y ${flagged} marcadas. Las omitidas cuentan como incorrectas. ¿Finalizar?`)) finishQuiz();
  }

  function finishQuiz() {
    if (!currentQuiz || currentQuiz.submitted) return;
    currentQuiz.submitted = true;
    stopTimer();
    const detailed = currentQuiz.questions.map((q, index) => {
      const response = currentQuiz.responses[index];
      if (!response.checked) {
        response.correct = arraysEqual(response.selected, [...q.answer].sort((a,b)=>a-b));
      }
      return {
        questionId: q.id,
        topic: q.topic,
        question: q.question,
        code: q.code || '',
        options: q.options,
        answer: q.answer,
        selected: response.selected,
        correct: response.correct,
        explanation: q.explanation,
        source: q.source
      };
    });
    const correctCount = detailed.filter(item => item.correct).length;
    const score = Math.round((correctCount / detailed.length) * 10000) / 100;
    const topicSummary = {};

    detailed.forEach(item => {
      if (!topicSummary[item.topic]) topicSummary[item.topic] = { correct: 0, total: 0 };
      topicSummary[item.topic].total += 1;
      if (item.correct) topicSummary[item.topic].correct += 1;

      if (!state.topicStats[item.topic]) state.topicStats[item.topic] = { correct: 0, total: 0 };
      state.topicStats[item.topic].total += 1;
      if (item.correct) state.topicStats[item.topic].correct += 1;

      if (item.correct) {
        state.mistakes = state.mistakes.filter(id => id !== item.questionId);
      } else if (!state.mistakes.includes(item.questionId)) {
        state.mistakes.push(item.questionId);
      }
    });

    const attempt = {
      date: new Date().toISOString(),
      mode: currentQuiz.mode,
      exactSetId: currentQuiz.exactSetId,
      exactSetTitle: currentQuiz.exactSetTitle,
      count: detailed.length,
      score,
      correct: correctCount,
      topicSummary,
      details: detailed
    };

    state.attempts.unshift(attempt);
    state.attempts = state.attempts.slice(0, 24);
    saveState();
    renderResults(attempt);
    updateHomeStats();
    navigate('results');
    showToast(`Resultado guardado: ${score}%`);
  }

  function renderResults(attempt) {
    refs.resultScore.textContent = `${attempt.score}%`;
    const required = Math.ceil(attempt.count * .8);
    const passed = attempt.correct >= required;
    refs.resultStatus.textContent = passed ? 'APROBADO' : 'NO APROBADO';
    refs.resultTitle.textContent = passed ? 'Alcanzaste la meta del 80%' : 'Todavía falta para el 80%';
    refs.resultSummary.textContent = `${attempt.exactSetTitle ? attempt.exactSetTitle + ' · ' : ''}${attempt.correct} aciertos de ${attempt.count} · ${attempt.score}%. Necesitas ${required} aciertos. ${passed ? 'Meta alcanzada en este intento.' : `Te faltaron ${required - attempt.correct} aciertos.`}`;

    refs.topicBreakdown.innerHTML = Object.entries(attempt.topicSummary).map(([topicId, stats]) => {
      const pct = Math.round((stats.correct / stats.total) * 100);
      return `<article class="break-item"><strong>${topicById[topicId]?.title || topicId}</strong><small>${stats.correct}/${stats.total} correctas · ${pct}%</small></article>`;
    }).join('');

    const worst = Object.entries(attempt.topicSummary)
      .map(([topicId, stats]) => ({ topicId, pct: stats.correct / stats.total }))
      .sort((a, b) => a.pct - b.pct)[0];
    if (worst) {
      refs.resultAdviceTitle.textContent = `Refuerza: ${topicById[worst.topicId]?.title || worst.topicId}`;
      refs.resultAdviceText.textContent = `Fue tu área más floja en este intento. Repásala desde el temario y luego vuelve a practicar con preguntas de errores.`;
    } else {
      refs.resultAdviceTitle.textContent = 'Buen trabajo';
      refs.resultAdviceText.textContent = 'Aún no hay suficiente detalle para recomendar un tema específico.';
    }

    refs.answerReview.innerHTML = attempt.details.map((item, index) => {
      const correctOptions = item.answer.map(i => item.options[i]).join(' · ');
      const selectedOptions = item.selected.length ? item.selected.map(i => item.options[i]).join(' · ') : 'Sin respuesta';
      return `
        <article class="review-item ${item.correct ? 'correct' : 'wrong'}">
          <strong>${index + 1}. ${escapeHtml(item.question)}</strong>
          ${item.code ? `<pre class="question-code review-code"><code>${escapeHtml(item.code)}</code></pre>` : ''}
          <p><strong>Tu respuesta:</strong> ${escapeHtml(selectedOptions)}</p>
          <p><strong>Correcta:</strong> ${escapeHtml(correctOptions)}</p>
          <p>${escapeHtml(item.explanation)}</p>
          <small>Fuente: ${escapeHtml(item.source)}</small>
        </article>
      `;
    }).join('');
  }

  function renderMistakes() {
    const questions = state.mistakes.map(id => questionById[id]).filter(Boolean);
    if (!questions.length) {
      refs.mistakesList.innerHTML = '<article class="mistake-card"><strong>Sin errores guardados</strong><p>Cuando falles preguntas en un quiz aparecerán aquí.</p></article>';
      return;
    }
    refs.mistakesList.innerHTML = questions.map(q => `
      <article class="mistake-card">
        <span class="section-kicker">${topicById[q.topic]?.title || q.topic}</span>
        <h3>${escapeHtml(q.question)}</h3>
        <p>${escapeHtml(q.explanation)}</p>
      </article>
    `).join('');
  }

  function renderProgress() {
    refs.progressAttempts.textContent = state.attempts.length;
    refs.progressAverage.textContent = `${averageScore()}%`;
    refs.progressBest.textContent = `${bestScore()}%`;
    refs.progressCards.textContent = Object.values(state.flashcardStats).filter(v => v === 'known').length;

    const topicEntries = Object.entries(state.topicStats);
    refs.progressTopics.innerHTML = topicEntries.length
      ? topicEntries
        .sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total))
        .map(([topicId, stats]) => `<article class="break-item"><strong>${topicById[topicId]?.title || topicId}</strong><small>${stats.correct}/${stats.total} correctas · ${Math.round((stats.correct / stats.total) * 100)}%</small></article>`)
        .join('')
      : '<article class="break-item"><strong>Aún no hay datos</strong><small>Termina un quiz para generar estadísticas por tema.</small></article>';

    refs.historyList.innerHTML = state.attempts.length
      ? state.attempts.slice(0, 8).map(attempt => `<article class="history-item"><strong>${attempt.score}% · ${attempt.correct}/${attempt.count} · ${attempt.correct >= Math.ceil(attempt.count * .8) ? 'Aprobado' : 'No aprobado'}</strong><small>${new Date(attempt.date).toLocaleString()} · ${attempt.exactSetTitle || (attempt.mode === 'practice' ? 'Práctica' : 'Simulación')}</small></article>`).join('')
      : '<article class="history-item"><strong>Sin historial</strong><small>Todavía no has terminado cuestionarios.</small></article>';
  }

  function startTimer() {
    stopTimer();
    if (!currentQuiz || !currentQuiz.withTimer) return;
    if (!currentQuiz.deadline || currentQuiz.mode === 'practice') currentQuiz.deadline = Date.now() + currentQuiz.timeLeft * 1000;
    const tick = () => {
      if (!currentQuiz || currentQuiz.submitted) return;
      currentQuiz.timeLeft = Math.max(0, Math.ceil((currentQuiz.deadline - Date.now()) / 1000));
      updateTimerUI();
      if (currentQuiz.timeLeft === 0) {
        stopTimer();
        if (currentQuiz.mode === 'practice') {
          if (!currentQuiz.responses[currentQuiz.index].checked) checkCurrentQuestion(true);
          refs.mainQuestionAction.textContent = currentQuiz.index === currentQuiz.questions.length - 1 ? 'Ver resultados' : 'Siguiente';
        } else { finishQuiz(); showToast('Tiempo agotado: examen entregado'); }
      }
    };
    timerInterval = setInterval(tick, 500);
    tick();
  }

  function restartTimer() {
    if (currentQuiz?.withTimer && currentQuiz.mode === 'practice') startTimer();
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    if (!currentQuiz || !currentQuiz.withTimer) refs.examTimer.classList.add('hidden');
  }

  function updateTimerUI() {
    if (!currentQuiz || !currentQuiz.withTimer) {
      refs.examTimer.classList.add('hidden');
      return;
    }
    refs.examTimer.classList.remove('hidden');
    const minutes = String(Math.floor(currentQuiz.timeLeft / 60)).padStart(2, '0');
    const seconds = String(currentQuiz.timeLeft % 60).padStart(2, '0');
    refs.examTimer.textContent = `${minutes}:${seconds}`;
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function hexToRgba(hex, alpha) {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function initRevealObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-shown');
      });
    }, { threshold: .15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function bindEvents() {
    document.addEventListener('click', e => {
      const routeBtn = e.target.closest('[data-route]');
      if (routeBtn) {
        e.preventDefault();
        navigate(routeBtn.dataset.route);
      }
      const topicShortcut = e.target.closest('[data-topic-shortcut]');
      if (topicShortcut) {
        currentTopicId = topicShortcut.dataset.topicShortcut;
        refs.studySearch.value = '';
        navigate('study');
      }

      const quick = e.target.closest('[data-quick]');
      if (quick) {
        const count = Number(quick.dataset.quick);
        startQuiz({ mode: count === 58 ? 'simulation' : 'practice', count, topicMode: 'all', withTimer: false });
      }

      const guideButton = e.target.closest('[data-guide-quiz]');
      if (guideButton) {
        const practice = guideButton.dataset.guideQuiz === 'practice';
        startQuiz({ mode: practice ? 'practice' : 'simulation', count: Number(document.getElementById('guideQuestionCount').value), topicMode: 'guia2', withTimer: false });
      }

      const exactQuizButton = e.target.closest('[data-exact-quiz]');
      if (exactQuizButton) {
        const form = new FormData(refs.quizConfig);
        startQuiz({
          mode: 'simulation',
          count: 58,
          topicMode: 'all',
          withTimer: false,
          exactSetId: exactQuizButton.dataset.exactQuiz
        });
      }
    });

    refs.menuToggle.addEventListener('click', () => refs.mobilePanel.classList.toggle('is-open'));
    refs.themeToggle.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
    refs.examDateInput.addEventListener('change', () => {
      state.examDate = refs.examDateInput.value;
      saveState();
      updateCountdown();
      showToast('Fecha del examen actualizada');
    });

    refs.studySearch.addEventListener('input', renderStudy);

    refs.materialItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.dataset.materialTarget;
        refs.materialItems.forEach(button => button.classList.toggle('is-active', button === item));
        refs.materialPanels.forEach(panel => {
          const active = panel.id === targetId;
          panel.classList.toggle('is-active', active);
          panel.hidden = !active;
        });
        const stage = document.querySelector('.material-html-stage');
        if (stage && window.innerWidth <= 900) {
          stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    refs.flashTopicSelect.addEventListener('change', applyFlashcardFilter);
    refs.flashCard.setAttribute('tabindex', '0');
    refs.flashCard.setAttribute('role', 'button');
    refs.flashCard.setAttribute('aria-label', 'Voltear tarjeta');
    refs.flashCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); refs.flashCard.click(); } });
    refs.flashCard.addEventListener('click', () => refs.flashCard.classList.toggle('is-flipped'));
    refs.flashPrev.addEventListener('click', () => {
      if (!filteredFlashcards.length) return;
      currentFlashIndex = (currentFlashIndex - 1 + filteredFlashcards.length) % filteredFlashcards.length;
      renderFlashcard();
    });
    refs.flashNext.addEventListener('click', () => {
      if (!filteredFlashcards.length) return;
      currentFlashIndex = (currentFlashIndex + 1) % filteredFlashcards.length;
      renderFlashcard();
    });
    refs.flashKnown.addEventListener('click', () => {
      const card = filteredFlashcards[currentFlashIndex];
      if (!card) return;
      state.flashcardStats[card.id] = 'known';
      saveState();
      renderFlashcard();
      updateHomeStats();
      showToast('Tarjeta marcada como dominada');
    });
    refs.flashReview.addEventListener('click', () => {
      const card = filteredFlashcards[currentFlashIndex];
      if (!card) return;
      state.flashcardStats[card.id] = 'review';
      saveState();
      renderFlashcard();
      showToast('Tarjeta marcada para repaso');
    });

    refs.quizConfig.addEventListener('change', updateConfigSummary);
    refs.quizConfig.addEventListener('submit', e => {
      e.preventDefault();
      const form = new FormData(refs.quizConfig);
      const minutes = Number(document.getElementById('examMinutes').value);
      if (refs.timerCheck.checked && form.get('mode') !== 'practice' && (!Number.isFinite(minutes) || minutes < 1 || minutes > 300)) return showToast('Elige entre 1 y 300 minutos');
      startQuiz({
        mode: form.get('mode'),
        count: form.get('mode') === 'real' ? 58 : Number(form.get('count')),
        topicMode: refs.quizTopic.value,
        withTimer: refs.timerCheck.checked
      });
    });

    document.getElementById('flagQuestion').addEventListener('click', () => {
      if (!currentQuiz) return;
      const r = currentQuiz.responses[currentQuiz.index]; r.flagged = !r.flagged; renderQuestion();
    });
    document.getElementById('finishExam').addEventListener('click', requestFinish);
    refs.leaveExam.addEventListener('click', () => {
      if (!confirm('¿Salir y descartar este intento sin guardarlo?')) return;
      stopTimer();
      currentQuiz = null;
      navigate('configure');
      showToast('Sesión cancelada');
    });

    refs.prevQuestion.addEventListener('click', () => {
      if (!currentQuiz || currentQuiz.index === 0) return;
      currentQuiz.index -= 1;
      if (currentQuiz.mode === 'practice') currentQuiz.timeLeft = 75;
      renderQuestion();
      if (currentQuiz.withTimer) restartTimer();
    });

    refs.mainQuestionAction.addEventListener('click', () => {
      if (!currentQuiz) return;
      const response = currentQuiz.responses[currentQuiz.index];
      if (currentQuiz.mode === 'practice') {
        if (!response.checked) {
          checkCurrentQuestion(false);
          refs.mainQuestionAction.textContent = currentQuiz.index === currentQuiz.questions.length - 1 ? 'Ver resultados' : 'Siguiente';
        } else {
          nextQuestionOrFinish();
        }
      } else {
        nextQuestionOrFinish();
      }
    });

    refs.retryQuiz.addEventListener('click', () => navigate('configure'));
    refs.practiceMistakes.addEventListener('click', () => {
      if (!state.mistakes.length) return showToast('No tienes errores guardados todavía');
      startQuiz({ mode: 'practice', count: Math.min(10, state.mistakes.length), topicMode: 'mistakes', withTimer: false });
    });

    refs.clearProgress.addEventListener('click', () => {
      if (!confirm('¿Seguro que quieres borrar tu progreso local?')) return;
      state = loadState();
      state.attempts = [];
      state.mistakes = [];
      state.topicStats = {};
      state.flashcardStats = {};
      saveState();
      updateHomeStats();
      renderProgress();
      renderMistakes();
      showToast('Progreso eliminado');
    });
  }

  function initTilt() {
    const tilt = document.querySelector('.tilt-card');
    if (!tilt) return;
    tilt.addEventListener('mousemove', e => {
      const rect = tilt.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;
      tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    tilt.addEventListener('mouseleave', () => {
      tilt.style.transform = 'rotateX(0) rotateY(0)';
    });
  }

  function init() {
    setTheme(state.theme);
    updateHomeStats();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    renderTopicSidebar();
    renderStudy();
    setupFlashcards();
    updateConfigSummary();
    renderMistakes();
    renderProgress();
    bindEvents();
  }

  init();
})();
