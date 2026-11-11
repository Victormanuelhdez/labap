window.WORK_QUESTIONS = [
  {
    "id": "word-apx3-1",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "La arquitectura batch publica un conector WebService que no admite solicitudes para la ejecución de procesos batch ejecutadas a través del portal de desarrollo. Las aplicaciones que requieran la ejecución de procesos batch bajo demanda, también solicitan la ejecución a través de esta interfaz WebService. Este último escenario únicamente se está produciendo en entornos BBVA CIB.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "El conector permite solicitar ejecuciones batch; la negación «no admite» vuelve falsa la afirmación.",
    "source": "Banco de trabajo.docx · apx3-1",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-2",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Quién es el responsable de iniciar un Job?",
    "code": "",
    "options": [
      "JobExecution",
      "JobLauncher",
      "JobInstance",
      "JobBegginer"
    ],
    "answer": [
      1
    ],
    "explanation": "JobLauncher inicia un Job y produce su JobExecution.",
    "source": "Banco de trabajo.docx · apx3-2",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-3",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles son los dos tipos de step que existen en Batch APX?",
    "code": "",
    "options": [
      "Creator, Processor",
      "Processor,Task",
      "Chunk, Reader",
      "Chunk,Task"
    ],
    "answer": [
      3
    ],
    "explanation": "Los pasos se pueden implementar con procesamiento por chunks o como tareas (tasklets).",
    "source": "Banco de trabajo.docx · apx3-3",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-4",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "Las 3 principales partes de un task",
    "code": "",
    "options": [
      "Chunk, processing, output",
      "Input, processing, output",
      "Input, load, processing, Output",
      "Input, Load, Output"
    ],
    "answer": [
      1
    ],
    "explanation": "Las tres fases conceptuales de una tarea batch son entrada, procesamiento y salida.",
    "source": "Banco de trabajo.docx · apx3-4",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-5",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "En un step de tipo chunk, ¿qué componentes intervienen?",
    "code": "",
    "options": [
      "itemInput, itemProcessor y itemWriter",
      "itemReader, itemProcessor y itemWriter",
      "itemReader, itemProcessor y item Output"
    ],
    "answer": [
      1
    ],
    "explanation": "Un chunk lee mediante ItemReader, transforma mediante ItemProcessor y escribe mediante ItemWriter. No todos los steps son de tipo chunk; por eso se precisó el enunciado.",
    "source": "Banco de trabajo.docx · apx3-5",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-7",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué característica NO pertenece al BATCH?",
    "code": "",
    "options": [
      "Procesamiento generalmente grande volúmenes de información",
      "Interacción con usuario (directo)",
      "Procesamiento normal en una ventana de lote fuera de línea",
      "Requisitos no funcionales complejos"
    ],
    "answer": [
      1
    ],
    "explanation": "La interacción directa con el usuario no es propia del procesamiento batch.",
    "source": "Banco de trabajo.docx · apx3-7",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-8",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "Describe las Clases que implementan la lógica de cada uno de los steps en un proceso Batch",
    "code": "",
    "options": [
      "OPC, Processors, Readers",
      "Readers, Writers, Processors",
      "Processors, UID, OPC"
    ],
    "answer": [
      1
    ],
    "explanation": "Readers leen, Processors transforman y Writers escriben los elementos.",
    "source": "Banco de trabajo.docx · apx3-8",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-10",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál es el prefijo que debe utilizarse en la nomenclatura de los métodos que exponen las librerías para ser consumidos?",
    "code": "",
    "options": [
      "execute[Nombre_elegido_por_app] donde [Nombre_elegido_por_app] es opcional",
      "dependency[[Nombre_elegido_por_app] donde [Nombre_elegido_por_app] es opcional",
      "execute[Nombre_elegido_por_app] donde [Nombre_elegido_por_app] es obligatorio",
      "dependency[[Nombre_elegido_por_app] donde [Nombre_elegido_por_app] es obligatorio"
    ],
    "answer": [
      0
    ],
    "explanation": "Los métodos expuestos por librerías APX usan el prefijo execute; el sufijo identificativo es opcional.",
    "source": "Banco de trabajo.docx · apx3-10",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-13",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Para garantizar el comportamiento transaccional de APX, la arquitectura se basa en el estándar ____, por lo que los recursos administrados dentro de la transacción deben ser del tipo XA.",
    "code": "",
    "options": [
      "JT3",
      "JTX",
      "JPA",
      "JTA"
    ],
    "answer": [
      3
    ],
    "explanation": "JTA proporciona el estándar transaccional y XA permite coordinar recursos distribuidos.",
    "source": "Banco de trabajo.docx · apx3-13",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-14",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "El objeto _______ no debe manejarse directamente. No debe crear instancias, abrir o cerrar explícitamente conexiones a la base de datos.",
    "code": "",
    "options": [
      "Database",
      "Conection",
      "Datasource",
      "JDBC"
    ],
    "answer": [
      2
    ],
    "explanation": "El acceso a datos lo administra la arquitectura. La aplicación no debe gestionar directamente DataSource ni abrir o cerrar sus conexiones.",
    "source": "Banco de trabajo.docx · apx3-14",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-15",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "En las consultas a BBDD debe usar variables _______ para no afectar el rendimiento de la base de datos",
    "code": "",
    "options": [
      "Miembro",
      "Bind",
      "Locales",
      "Dynamic"
    ],
    "answer": [
      1
    ],
    "explanation": "Las variables bind parametrizan las consultas y evitan generar SQL distinto por cada valor.",
    "source": "Banco de trabajo.docx · apx3-15",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-16",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Indica a JUnit que la propiedad que usa esta anotación es una simulación y, por lo tanto, se inicializa como tal y es susceptible de ser inyectada por @InjectMocks.",
    "code": "",
    "options": [
      "Mockito",
      "Mock",
      "Inject",
      "InjectMock"
    ],
    "answer": [
      1
    ],
    "explanation": "@Mock identifica el objeto simulado que Mockito puede inyectar mediante @InjectMocks.",
    "source": "Banco de trabajo.docx · apx3-16",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-18",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "En un Batch cual es el step donde el desarrollador introducira la logica empresarial necesaria",
    "code": "",
    "options": [
      "Chunk",
      "JobLauncher",
      "ItemWriter",
      "Task"
    ],
    "answer": [
      3
    ],
    "explanation": "Task es la alternativa prevista para implementar una tarea de negocio que no sigue el modelo de chunks.",
    "source": "Banco de trabajo.docx · apx3-18",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-19",
    "topic": "online",
    "type": "multiple",
    "difficulty": "Media",
    "question": "¿Cuáles de las siguientes expansiones de APX son incorrectas? Selecciona tres.",
    "code": "",
    "options": [
      "Extended Platform Architecture",
      "Extended Programming Architecture",
      "Backend Extended Platform",
      "Extended Java Backend Architecture"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "La denominación utilizada en el material es Extended Java Backend Architecture. Las otras tres expansiones no coinciden; el original pedía una sola incorrecta aunque hay tres.",
    "source": "Banco de trabajo.docx · apx3-19",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-20",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué es APX Online?",
    "code": "",
    "options": [
      "Basada en Java, diseñada y construida por BBVA con ámbito local para ser utilizada en el Banco.",
      "Esta plataforma contiene capacidades Front y está dirigida a aplicaciones que necesiten crear lógica de negocio sin acoplamiento con la presentación. Es un Sistema de alto rendimiento, con fácil escalabilidad y disponibilidad garantizada",
      "Ejecución en entornos normales tipo R2 es la misma que la arquitectura diseñada y planteada para entornos Cloud. Las versiones que se generan son no duales por lo que cambia el empaquetado de la Arquitectura y la estrategia de aprovisionamiento de componentes aplicativos.",
      "Habilita los servicios bancarios transaccionales fuera del entorno de mainframe, pero brinda las mismas capacidades en el mundo distribuido, reduce los costos generales del sistema, se basa en tecnologías de código abierto, permite a los desarrolladores aprovechar todos los servicios extendidos provistos en la plataforma para construir servicios lo más rápido posible"
    ],
    "answer": [
      3
    ],
    "explanation": "APX habilita servicios transaccionales bancarios en el mundo distribuido desacoplados de los canales y del Mainframe.",
    "source": "Banco de trabajo.docx · apx3-20",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-21",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La Plataforma Extendida BackEnd Java APX nació con el requerimiento que pudiera funcionar en colaboración con el MainFrame o stand-alone (independientemente). Igualmente se pueden hacer uso de sus capacidades de Arquitectura Bancaría o no utilizarlas cuando las aplicaciones se salgan de este modelo",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "APX puede colaborar con Mainframe o funcionar de forma independiente.",
    "source": "Banco de trabajo.docx · apx3-21",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-22",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Dentro de los casos de uso de la Arquitectura de APX y con el fin de estandarizar las aplicaciones del banco se plantearon dos paradigmas compatibles con BBVA:1. Backend Banca Tradicional\n2. Servicios Distribuidos Backend",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "La afirmación distingue el backend bancario tradicional y los servicios distribuidos de backend.",
    "source": "Banco de trabajo.docx · apx3-22",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-23",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Las utilidades APX implementadas tanto para la arquitectura Online como para la arquitectura Batch son:",
    "code": "",
    "options": [
      "Communication Manager: Se crea una librería con la capacidad de invocar a G.U.C para el envío de notificaciones. Interbackend proxy: Se crea una librería con la capacidad de invocar a los conectores IMS (para acceso a Host).",
      "Compresión/Descompresión: Se crea una librería con la capacidad de comprimir y descomprimir archivos en zip. Generador de documentos: Se crea una librería con la capacidad de generar documentos."
    ],
    "answer": [
      1
    ],
    "explanation": "La compresión de archivos y la generación de documentos se presentan como capacidades compartidas entre Online y Batch.",
    "source": "Banco de trabajo.docx · apx3-23",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-24",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Las utilidades APX implementadas únicamente para la arquitectura Online son:",
    "code": "",
    "options": [
      "Communication Manager: Se crea una librería con la capacidad de invocar a G.U.C para el envío de notificaciones. Interbackend proxy: Se crea una librería con la capacidad de invocar a los conectores IMS (para acceso a Host).",
      "Compresión/Descompresión: Se crea una librería con la capacidad de comprimir y descomprimir archivos en zip. Generador de documentos: Se crea una librería con la capacidad de generar documentos."
    ],
    "answer": [
      0
    ],
    "explanation": "Communication Manager e Interbackend proxy se presentan como utilidades del ámbito Online.",
    "source": "Banco de trabajo.docx · apx3-24",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-25",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La descripción de la Capa de Control es: Componente recibe la información necesaria para hacer el distpach de la ejecución de transacciones. Se crea a la vez que la sesión de contexto transaccional, para permitir que la arquitectura pueda ejecutar la lógica de Negocio. Proporciona el ámbito transaccional por lo que es capaz de confirmar (commit) o deshacer (rooll-back) ejecuciones. Este componente es el que gestiona la definición de transacción de acuerdo con la petición y ejecuta las pre y post acciones relacionadas con la lógica de negocio.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "La capa de control gestiona el contexto, el despacho y las acciones de la transacción.",
    "source": "Banco de trabajo.docx · apx3-25",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-27",
    "topic": "online",
    "type": "multiple",
    "difficulty": "Media",
    "question": "De la lista siguiente marca 2 funcionalidades de servicios persistencia incluidas en APX",
    "code": "",
    "options": [
      "SFTP",
      "PS9",
      "JDBC",
      "JMS/RABBIT",
      "Two-Phase Commit",
      "JNDI"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "PS9 y JDBC corresponden a servicios de persistencia en la clasificación del material.",
    "source": "Banco de trabajo.docx · apx3-27",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-28",
    "topic": "online",
    "type": "multiple",
    "difficulty": "Media",
    "question": "De la lista siguiente marca 2 funcionalidades de servicios conectores incluidos en APX",
    "code": "",
    "options": [
      "Gestor de Eventos",
      "HTTP/HTTPs",
      "JDBC",
      "JMS/RABBIT",
      "Two-Phase Commit",
      "JNDI"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "HTTP/HTTPS y JMS/Rabbit permiten comunicación con otros servicios y sistemas.",
    "source": "Banco de trabajo.docx · apx3-28",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-30",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "En primer lugar, APX recibe la solicitud en uno de los protocolos físicos que admite (HTTP, JMS, REST,). Luego, crea un identificador único para la ________ y valide si los encabezados de solicitud están bien formateados de acuerdo con el protocolo lógico definido por Arquitectura",
    "code": "",
    "options": [
      "Pila de ejecución",
      "Solicitud",
      "Transacción",
      "Ejecución"
    ],
    "answer": [
      1
    ],
    "explanation": "El identificador único se asocia a la solicitud recibida.",
    "source": "Banco de trabajo.docx · apx3-30",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-31",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles son los campos que definen a una transacción en APX?",
    "code": "",
    "options": [
      "Aplicación, versión, país, paquete descripción",
      "Aplicación, dominio, país, paquete descripción",
      "Aplicación, transacción, versión, país, descripción",
      "Aplicación, transacción, dominio, versión, país, descripción"
    ],
    "answer": [
      2
    ],
    "explanation": "La transacción se identifica mediante aplicación, transacción, versión y país, junto con su descripción.",
    "source": "Banco de trabajo.docx · apx3-31",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-35",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La invocación síncrona no está permitida. En caso de que una transacción deba invocar a otra, solo se puede hacer de forma asíncrona",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "La arquitectura restringe las invocaciones síncronas entre transacciones; el mecanismo permitido es el asíncrono.",
    "source": "Banco de trabajo.docx · apx3-35",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-37",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Un ________ proporciona una solución a un problema de diseño. Debe cumplir con diferentes características, como la efectividad al resolver problemas similares en ocasiones anteriores. Por lo tanto, debe ser reutilizable, es decir, aplicable a diferentes problemas en diferentes circunstancias",
    "code": "",
    "options": [
      "Metodología",
      "Patrón de Diseño",
      "Anti patrón",
      "Reutilización de código"
    ],
    "answer": [
      1
    ],
    "explanation": "Un patrón de diseño es una solución reutilizable a un problema recurrente.",
    "source": "Banco de trabajo.docx · apx3-37",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-38",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Un anti patrón es un diseño que conduce a una mala solución de un problema. Como lo son el Blob y el contenedor mágico en librerías.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "Blob y contenedor mágico son antipatrónes de diseño de librerías.",
    "source": "Banco de trabajo.docx · apx3-38",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-39",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Se utilizará este patrón siempre que se requiera dividir un conjunto de datos en varios subconjuntos y adicionalmente se necesite acceder a ellas de forma aislada. El uso de este patrón es conveniente siempre para mejorar la eficiencia de consultas a orígenes de datos variados, obteniendo únicamente lo que se necesita.",
    "code": "",
    "options": [
      "Blob",
      "Contenedor magico",
      "Paginacion de librerias",
      "CRUD"
    ],
    "answer": [
      2
    ],
    "explanation": "La paginación divide los resultados y permite solicitar únicamente el subconjunto necesario.",
    "source": "Banco de trabajo.docx · apx3-39",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-43",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles son ejemplos de Patrones de diseño para APX?",
    "code": "",
    "options": [
      "Paginación en transacciones, paginación en librerías, paginación en componentes APX",
      "Paginación en librerías, CRUD en librerías, DTOs en componentes APX",
      "Paginación en transacciones, CRUD en librerías, CRUD en componentes APX, DTOs en componentes APX",
      "Paginación en componentes APX. CRUD en librerías, DTOs en componentes APX"
    ],
    "answer": [
      1
    ],
    "explanation": "El material diferencia los patrones paginación en librerías, CRUD en librerías y DTOs en componentes APX.",
    "source": "Banco de trabajo.docx · apx3-43",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-45",
    "topic": "patrones",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Selecciona dos aplicaciones que justifican el uso del patrón Data Transfer Object (DTO) es obligatorio cuando:",
    "code": "",
    "options": [
      "Se necesitan mapear demasiadas variables",
      "Se necesita una agrupación simple de datos basada en una funcionalidad asociada",
      "Desea intercambiar información entre diferentes componentes en APX de manera coherente, organizada y agrupada",
      "Se hace conexión a Bases de datos relacionales"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "Un DTO agrupa datos relacionados y permite intercambiarlos entre componentes de forma organizada.",
    "source": "Banco de trabajo.docx · apx3-45",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-46",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál es la restricción al generar una jerarquía de clases DTO?",
    "code": "",
    "options": [
      "Que las librerías solo tengan parámetros de entrada",
      "Que las clases no tengan dependencias circulares entre ellas.",
      "Que las agrupaciones no dependan entre ellas mismas",
      "Que los patrones sean simples"
    ],
    "answer": [
      1
    ],
    "explanation": "Las clases DTO deben evitar dependencias circulares.",
    "source": "Banco de trabajo.docx · apx3-46",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-48",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué son los Patrones de diseño en APX?",
    "code": "",
    "options": [
      "Diseño que sirve de apoyo para la búsqueda de soluciones a problemas comunes a la hora del desarrollo de software.",
      "Patrón de diseño que invariablemente conduce a una mala solución para un problema",
      "Diseño de software que tiene como objetivo el desarrollo único de código, es decir, debe ser aplicable únicamente a una solución específica."
    ],
    "answer": [
      0
    ],
    "explanation": "Los patrones ofrecen soluciones reutilizables a problemas recurrentes de diseño.",
    "source": "Banco de trabajo.docx · apx3-48",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-49",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál es el objetivo de trabajar con Patrones?",
    "code": "",
    "options": [
      "Los patrones de diseño sirven de apoyo para la búsqueda de soluciones a problemas comunes a la hora del desarrollo de software.",
      "Brindar una solución a un problema de diseño. Para que una solución se pueda considerar un patrón debe cumplir con diferentes características, como la efectividad a la hora de resolver problemas similares en ocasiones anteriores. Por ende, debe ser reutilizable, es decir, aplicable a diferentes problemas en distintas circunstancias.",
      "Estos componentes contienen información necesaria para la ejecución de la Transacción en APX y cualquier modificación al respecto podría alterar su comportamiento",
      "a y b",
      "a y c"
    ],
    "answer": [
      3
    ],
    "explanation": "Las dos primeras descripciones expresan el propósito y las propiedades de los patrones de diseño.",
    "source": "Banco de trabajo.docx · apx3-49",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-50",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Este patrón suele representarse en una librería que contiene un solo método “execute” con parámetros que actúan como filtros y que engloba diversas funcionalidades dispares en función de sus parámetros de entrada",
    "code": "",
    "options": [
      "Contenedor Mágico",
      "CRUD",
      "Paginacion",
      "Blob"
    ],
    "answer": [
      0
    ],
    "explanation": "El contenedor mágico usa un execute con parámetros que seleccionan funcionalidades dispares.",
    "source": "Banco de trabajo.docx · apx3-50",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-57",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "No puede incluir _______ o etiquetas similares. Estas anotaciones no reciben errores ni advertencias en el compilador en el momento de la compilación.",
    "code": "",
    "options": [
      "@SuppressWarnings",
      "@BlockWarnings",
      "@LeaveWarnings",
      "@ForbbidenWarnings"
    ],
    "answer": [
      0
    ],
    "explanation": "@SuppressWarnings suprime advertencias del compilador; el material no permite ocultarlas de este modo.",
    "source": "Banco de trabajo.docx · apx3-57",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-58",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La creación de hilos o su gestión por las aplicaciones está permitida.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "Las aplicaciones APX no deben crear ni gestionar hilos por su cuenta.",
    "source": "Banco de trabajo.docx · apx3-58",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-59",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Está prohibido poner las siguientes anotaciones de primavera en las clases de implementación de las bibliotecas APX: @Component, @Service, @Controller y @Repository, porque estas anotaciones causan conflictos en la resolución de classpath del paquete de la biblioteca y tienen el efecto de que la biblioteca no expone su servicio OSGI.",
    "code": "",
    "options": [
      "@Component, @Service, @Controller & @Bean",
      "@Component, @Service @Controller & @Repository",
      "@Component, @Override, @Controller & @Repository",
      "@Component, @Override, @Controller & @Configuration"
    ],
    "answer": [
      1
    ],
    "explanation": "Las anotaciones @Component, @Service, @Controller y @Repository interfieren con el mecanismo de publicación del servicio OSGi descrito.",
    "source": "Banco de trabajo.docx · apx3-59",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-60",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Está prohibido usar la propiedad \"resolution: = 'optional' \" en la definición de los paquetes en el paquete de importación, ya que puede causar errores en la implementación de la biblioteca y provocar fallas en otras bibliotecas que dependen de ella.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "Declarar imports como opcionales puede ocultar dependencias no satisfechas y producir fallos en ejecución.",
    "source": "Banco de trabajo.docx · apx3-60",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-62",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Que excepción no está permitida en APX?",
    "code": "",
    "options": [
      "com.bbva.apx.exception.business.BusinessException",
      "com.bbva.apx.exception.io.network.TimeoutException",
      "com.bbva.apx.exception.db.NullPointerException",
      "com.bbva.apx.exception.db.IncorrectResultSizeException",
      "com.bbva.apx.exception.db.NoResultException",
      "com.bbva.apx.exception.db.TimeoutException"
    ],
    "answer": [
      2
    ],
    "explanation": "NullPointerException no forma parte del modelo de excepciones de negocio controladas de APX; el paquete propuesto tampoco es el de java.lang.NullPointerException.",
    "source": "Banco de trabajo.docx · apx3-62",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-63",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La gestión de errores debe seguir el modelo definido por la Arquitectura. En caso de querer mandar un aviso desde una librería o transacción, sea del tipo que sea, se usará el método____.",
    "code": "",
    "options": [
      "addAdvice",
      "addError",
      "addSeverity",
      "addWarning"
    ],
    "answer": [
      0
    ],
    "explanation": "addAdvice incorpora el aviso a la transacción o librería.",
    "source": "Banco de trabajo.docx · apx3-63",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-66",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Los niveles más comunes son DEBUG, INFO, WARNING y ERROR?",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "DEBUG, INFO, WARN y ERROR son niveles comunes; WARNING se usa aquí como denominación de WARN.",
    "source": "Banco de trabajo.docx · apx3-66",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-70",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "WARN, son situaciones que impiden la ejecución correcta de una operación o transacción, pero sin afectar a otras operaciones o transacciones (error aislado o contenido)",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "La descripción corresponde a ERROR, no a WARN: la operación no puede completarse correctamente.",
    "source": "Banco de trabajo.docx · apx3-70",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-71",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "ERROR, información de situaciones, que aún sin ser de error, si son anómalas o no previstas, aunque el aplicativo tiene alternativas para solventarlas",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "Las situaciones anómalas recuperables corresponden a WARN; ERROR representa fallos que impiden completar la operación.",
    "source": "Banco de trabajo.docx · apx3-71",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-72",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La arquitectura APX maneja mensajes de errores de tipo fijos y variables",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "El material diferencia mensajes fijos y mensajes que admiten campos variables.",
    "source": "Banco de trabajo.docx · apx3-72",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-75",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "_________ fue creada para brindar una herramienta a los desarrolladores y administradores del entorno para gestionar las operaciones en la plataforma",
    "code": "",
    "options": [
      "Atenea",
      "Monitor APX",
      "Consola de Operaciones APX",
      "Kibana"
    ],
    "answer": [
      2
    ],
    "explanation": "La Consola de Operaciones APX permite gestionar y observar operaciones de la plataforma.",
    "source": "Banco de trabajo.docx · apx3-75",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-78",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Es una mala práctica capturar excepciones genéricas y totalmente prohibido sus tratamiento",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "Se deben gestionar excepciones específicas del modelo de la arquitectura, evitando capturas genéricas indiscriminadas.",
    "source": "Banco de trabajo.docx · apx3-78",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-79",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Quién gestiona la ejecución del Commit o Rollback para garantizar la transaccionalidad?",
    "code": "",
    "options": [
      "La Base de Datos",
      "La Lógica Aplicativa",
      "La Arquitectura APX",
      "La Arquitectura OSGI"
    ],
    "answer": [
      2
    ],
    "explanation": "La arquitectura APX delimita y coordina commit o rollback.",
    "source": "Banco de trabajo.docx · apx3-79",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-81",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La descripción de una transacción debe tener un significado técnico",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "La descripción de una transacción debe expresar su significado funcional, no limitarse a un detalle técnico.",
    "source": "Banco de trabajo.docx · apx3-81",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-82",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Es una contradicción al usar el patrón CRUD",
    "code": "",
    "options": [
      "Mantener todas las operaciones sobre la entidad encapsuladas en la librería",
      "Tener varias librerías parciales para una única entidad",
      "Centralizar en una librería de todas las operaciones básicas sobre una entidad",
      "Tener una implementación ligera, evitando extender la lógica más allá del objetivo de la operación"
    ],
    "answer": [
      1
    ],
    "explanation": "CRUD mantiene juntas las operaciones básicas de una entidad; repartirlas en librerías parciales contradice ese objetivo.",
    "source": "Banco de trabajo.docx · apx3-82",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-83",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "________________, información de nivel superior que permita hacer un seguimiento de la ejecución normal",
    "code": "",
    "options": [
      "WARNING",
      "INFO",
      "ERROR",
      "TRACE"
    ],
    "answer": [
      1
    ],
    "explanation": "INFO permite seguir la ejecución normal a un nivel superior.",
    "source": "Banco de trabajo.docx · apx3-83",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-85",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Una librería que no se despliega correctamente impide que los componentes que pueden consumirla se instalen correctamente. Cuando mayor sea el número de módulos dependientes, mayor será la probabilidad de falla",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "Una dependencia no resuelta puede impedir que los componentes consumidores se instalen o activen correctamente.",
    "source": "Banco de trabajo.docx · apx3-85",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-88",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿En una transacción cuál es la estructura que contiene los paquetes que definen las clases utilizadas para las pruebas unitarias de la transacción?",
    "code": "",
    "options": [
      "src\\test\\java",
      "src\\main\\java",
      "src\\main\\resources",
      "src\\test\\resources"
    ],
    "answer": [
      0
    ],
    "explanation": "Las clases de pruebas unitarias se sitúan en src/test/java. Se corrigió la transposición scr del documento.",
    "source": "Banco de trabajo.docx · apx3-88",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-90",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "En una librería, ¿Cuál es el archivo en donde se define la lógica del negocio?",
    "code": "",
    "options": [
      "UUAAR000Impl",
      "UUAAR001-app-osgi.xml y UUAAR001-app.xml",
      "UUAAR001-arq-osgi.xml y UUAAR001-arc.xml",
      "UUAAR000Abstract"
    ],
    "answer": [
      0
    ],
    "explanation": "La clase de implementación de la librería contiene la lógica del negocio; Abstract y los XML cumplen funciones de infraestructura y configuración.",
    "source": "Banco de trabajo.docx · apx3-90",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-92",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "No está permitido generar _________ para escribir de Logs. Tampoco se permite la escritura por ______, debe ser la arquitectura quien los escriba.",
    "code": "",
    "options": [
      "Archivos propios / sysout",
      "Archivos de control / system",
      "Archivos propios / sysin",
      "Archivos de lectura / sysout"
    ],
    "answer": [
      0
    ],
    "explanation": "El material exige usar el logging de la arquitectura; no archivos propios ni System.out.",
    "source": "Banco de trabajo.docx · apx3-92",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-93",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Los patrones de diseño apoyan la búsqueda de soluciones comunes en el desarrollo de software. Los patrones adoptados al ecosistema APX son Blob in libreries y Magic container in Librares",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      1
    ],
    "explanation": "Blob y contenedor mágico son antipatrónes, no patrones recomendados.",
    "source": "Banco de trabajo.docx · apx3-93",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-apx3-info",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "INFO, información de nivel superior que permita hacer un seguimiento de la ejecución normal",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [
      0
    ],
    "explanation": "INFO permite seguir la ejecución normal de la aplicación, sin el detalle técnico de DEBUG o TRACE.",
    "source": "Banco de trabajo.docx · apx3-info",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-1",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "interface Rideable {\n    String getGait();\n}\npublic class Camel implements Rideable {\n    int weight = 2;\n    String getGait() {\n        return \" mph, lope\";\n    }\n    void go(int speed) {\n        ++speed;\n        Weight++;\n        int walkrate = speed * weight;\n        System.out.print(walkrate + getGait());\n    }\n    public static void main(String[] args) {\n        new Camel().go(8);\n    }\n}",
    "options": [
      "16 mph, lope",
      "24 mph, lope.",
      "27 mph, lope.",
      "Compilation fails"
    ],
    "answer": [
      3
    ],
    "explanation": "getGait implementa un método público de interfaz y reduce su visibilidad. Además, Weight no coincide con weight: Java distingue mayúsculas. El fragmento no compila.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 1",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-2",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which three methods, inserted individually at line, will correctly complete class Two(Choose three)?",
    "code": "class One {\n    void foo() {\n    }\n}\nclass Two extends One {\n    // insert method here\n}",
    "options": [
      "int foo() { /* implementation */ }",
      "void foo() { /* implementation */ }",
      "public void foo() { /* implementation */ }",
      "private void foo() { /* implementation */ }",
      "protected void foo() { /* implementation */ }"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "explanation": "La sobrescritura debe conservar void y no reducir la visibilidad package-private. Son válidos void, public void y protected void; private reduce la visibilidad e int cambia el retorno.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 2",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-3",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which three are valid? (Choose three)",
    "code": "class ClassA {\n}\nclass ClassB extends ClassA {\n}\nclass ClassC extends ClassA {\n}\n// Declarations inside a method:\nClassA p0 = new ClassA();\nClassB p1 = new ClassB();\nClassC p2 = new ClassC();\nClassA p3 = new ClassB();\nClassA p4 = new ClassC();",
    "options": [
      "p0 = p1;",
      "p1 = p2;",
      "p2 = p4;",
      "p2 = (ClassC)p1;",
      "p1 = (ClassB)p3;",
      "p2 = (ClassC)p4;"
    ],
    "answer": [
      0,
      4,
      5
    ],
    "explanation": "p0 admite un ClassB por ampliación. p3 contiene un ClassB y p4 un ClassC, por lo que los casts correspondientes son válidos. ClassB y ClassC son clases hermanas.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 3",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-4",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class Feline {\n    public String type = \"f\";\n    public Feline() {\n        System.out.print(\"feline \");\n    }\n}\npublic class Cougar extends Feline {\n    public Cougar() {\n        System.out.print(\"cougar \");\n    }\n    void go() {\n        type = \"c\";\n        System.out.print(this.type + super.type);\n    }\n    public static void main(String[] args) {\n        new Cougar().go();\n    }\n}",
    "options": [
      "cougar c f",
      "feline cougar cc",
      "feline cougar cf",
      "Compilation fails."
    ],
    "answer": [
      1
    ],
    "explanation": "Primero se ejecuta el constructor de Feline, luego Cougar. Solo existe un campo type heredado: this.type y super.type son el mismo campo y ambos valen c.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 4",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-5",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which statement is true?",
    "code": "class ClassA {\n    public int numberOfInstances;\n    protected ClassA(int numberOfInstances) {\n        this.numberOfInstances = numberOfInstances;\n    }\n}\npublic class ExtendedA extends ClassA {\n    private ExtendedA(int numberOfInstances) {\n        super(numberOfInstances);\n    }\n    public static void main(String[] args) {\n        ExtendedA ext = new ExtendedA(420);\n        System.out.print(ext.numberOfInstances);\n    }\n}",
    "options": [
      "420 is the output.",
      "An exception is thrown at runtime.",
      "All constructors must be declared public.",
      "Constructors CANNOT use the private modifier.",
      "Constructors CANNOT use the protected modifier."
    ],
    "answer": [
      0
    ],
    "explanation": "El constructor privado se invoca desde la propia clase; el protegido de la superclase se llama con super. Se imprime 420.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 5",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-6",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class Test {\n    public static void main(String[] args) {\n        int b = 4;\n        b--;\n        System.out.print(--b);\n        System.out.println(b);\n    }\n}",
    "options": [
      "22",
      "12",
      "32",
      "33"
    ],
    "answer": [
      0
    ],
    "explanation": "b-- deja b en 3. --b lo cambia a 2 antes de imprimir; la siguiente impresión también usa 2. La primera llamada es print, por lo que ambas cifras quedan juntas.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 6",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-7",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class X {\n    public static void main(String[] args) {\n        String theString = \"Hello World\";\n        System.out.println(theString.charAt(11));\n    }\n}",
    "options": [
      "There is no output.",
      "d is output.",
      "A StringIndexOutOfBoundsException is thrown at runtime.",
      "An ArrayIndexOutOfBoundsException is thrown at runtime.",
      "A NullPointException is thrown at runtime.",
      "A StringArrayIndexOutOfBoundsException is thrown at runtime."
    ],
    "answer": [
      2
    ],
    "explanation": "Hello World tiene longitud 11 y sus índices van de 0 a 10. charAt(11) produce StringIndexOutOfBoundsException.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 7",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-8",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "How many times is 2 printed?",
    "code": "public static void main(String[] args) {\n    String[] table = {\n        \"aa\", \"bb\", \"cc\"\n    }\n    ;\n    int ii = 0;\n    for (String ss : table) {\n        while (ii < table.length) {\n            System.out.println(ii);\n            ii++;\n            break;\n        }\n    }\n}",
    "options": [
      "Zero.",
      "Once.",
      "Twice.",
      "Thrice.",
      "It is not printed because compilation fails."
    ],
    "answer": [
      1
    ],
    "explanation": "ii se comparte entre las tres iteraciones y toma 0, 1 y 2. El break sale solo del while. El 2 se imprime una vez.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 8",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-9",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class Bees {\n    public static void main(String[] args) {\n        try {\n            new Bees().go();\n        }\n        catch (Exception e) {\n            System.out.println(\"thrown to main\");\n        }\n    }\n    synchronized void go() throws InterruptedException {\n        Thread t1 = new Thread();\n        t1.start();\n        System.out.print(\"1 \");\n        t1.wait(5000);\n        System.out.print(\"2 \");\n    }\n}",
    "options": [
      "The program prints 1 then 2 after 5 seconds.",
      "The program prints: 1 thrown to main.",
      "The program prints: 1 2 thrown to main.",
      "The program prints:1 then t1 waits for its notification."
    ],
    "answer": [
      1
    ],
    "explanation": "El método sincroniza this, pero wait se invoca en t1 sin poseer su monitor. Se imprime 1 y luego IllegalMonitorStateException llega al catch de main.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 9",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-10",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class Test {\n    public static void main(String[] args) {\n        int[][] array = {\n            {\n                0\n            }\n            , {\n                0, 1\n            }\n            , {\n                0, 2, 4\n            }\n            , {\n                0, 3, 6, 9\n            }\n            , {\n                0, 4, 8, 12, 16\n            }\n        }\n        ;\n        System.out.println(array[4][1]);\n        System.out.println(array[1][4]);\n    }\n}",
    "options": [
      "4 Null.",
      "Null 4.",
      "An IllegalArgumentException is thrown at run time.",
      "4\nAn ArrayIndexOutOfBoundsException is thrown at run time."
    ],
    "answer": [
      3
    ],
    "explanation": "array[4][1] vale 4. array[1] tiene longitud 2, por lo que el índice 4 provoca ArrayIndexOutOfBoundsException.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 10",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-11",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the final value of w?",
    "code": "int a = 10;\nint b = 37;\nint z = 0;\nint w = 0;\nif (a == b) {\n    z = 3;\n}\nelse if (a > b) {\n    z = 6;\n}\nw = 10 * z;",
    "options": [
      "0",
      "30",
      "60"
    ],
    "answer": [
      0
    ],
    "explanation": "10 no es igual ni mayor que 37; z conserva 0 y w = 10 * 0 = 0. No hay ninguna instrucción de impresión.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 11",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-12",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public static void main(String[] args) {\n    String color = \"Red\";\n    switch (color) {\n        case \"Red\": System.out.println(\"Found Red\");\n        case \"Blue\": System.out.println(\"Found Blue\");\n        case \"White\": System.out.println(\"Found White\");\n        break;\n        default: System.out.println(\"Found Default\");\n    }\n}",
    "options": [
      "Found Red.",
      "Found Red\nFound Blue.",
      "Found Red\nFound Blue\nFound White.",
      "Found Red\nFound Blue\nFound White\nFound Default."
    ],
    "answer": [
      2
    ],
    "explanation": "El switch entra en Red y continúa en Blue y White hasta el break. Cada println agrega un salto de línea.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 12",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-13",
    "topic": "colecciones",
    "type": "single",
    "difficulty": "Media",
    "question": "In the Java collections framework a Set is:",
    "code": "",
    "options": [
      "A collection that cannot contain duplicate elements.",
      "An ordered collection that can contain duplicate elements",
      "An object that maps value key sets and cannot contain values Duplicates"
    ],
    "answer": [
      0
    ],
    "explanation": "Set no admite elementos duplicados; el orden depende de su implementación.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 13",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-14",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which three lines will compile and output \"Right on!\"?",
    "code": "public class Speak {\n    public static void main(String[] args) {\n        Speak speakIT = new Tell();\n        Tell tellIt = new Tell();\n        // Evaluate each candidate independently:\n        // 17: speakIT.tellItLikeItIs();\n        // 18: (Truth) speakIT.tellItLikeItIs();\n        // 19: ((Truth) speakIT).tellItLikeItIs();\n        // 20: tellIt.tellItLikeItIs();\n        // 21: (Truth) tellIt.tellItLikeItIs();\n        // 22: ((Truth) tellIt).tellItLikeItIs();\n    }\n}\nclass Tell extends Speak implements Truth {\n    @Override public void tellItLikeItIs() {\n        System.out.println(\"Right on!\");\n    }\n}\ninterface Truth {\n    public void tellItLikeItIs();\n}",
    "options": [
      "Line 17",
      "Line 18",
      "Line 19",
      "Line 20",
      "Line 21",
      "Line 22"
    ],
    "answer": [
      2,
      3,
      5
    ],
    "explanation": "Speak no declara el método. El cast debe aplicarse al receptor entre paréntesis antes de acceder al método. Tell ya declara el método público.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 14",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-15",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public static void main(String[] args) {\n    int[][] array2D = {\n        {\n            0, 1, 2\n        }\n        , {\n            3, 4, 5, 6\n        }\n    }\n    ;\n    System.out.print(array2D[0].length + \"\");\n    System.out.print(array2D[1].getClass().isArray() + \"\");\n    System.out.println(array2D[0][1]);\n}",
    "options": [
      "3false1",
      "2true3",
      "2false3",
      "3true1",
      "3false3",
      "2true1",
      "2false1"
    ],
    "answer": [
      3
    ],
    "explanation": "La primera fila tiene longitud 3, la segunda es un array (true) y array2D[0][1] vale 1. print concatena la salida sin separadores.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 15",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-16",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Whats is the result?",
    "code": "public static void main(String[] args) {\n    System.out.println(\"Result:\" + 3 + 5);\n    System.out.println(\"Result:\" + (3 + 5));\n}",
    "options": [
      "Result:8\nResult:8",
      "Result:35\nResult:8",
      "Result:8\nResult:35",
      "Result:35\nResult:35"
    ],
    "answer": [
      1
    ],
    "explanation": "Con una cadena a la izquierda, + concatena sucesivamente 3 y 5, formando 35. Los paréntesis fuerzan 3 + 5 = 8 antes de concatenar.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 16",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-17",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Whats is true about the class Wow?",
    "code": "public abstract class Wow {\n    private int wow;\n    public Wow(int wow) {\n        this.wow = wow;\n    }\n    public void wow() {\n    }\n    private void wowza() {\n    }\n}",
    "options": [
      "It compiles without error.",
      "It does not compile because an abstract class cannot have private methods",
      "It does not compile because an abstract class cannot have instance variables.",
      "It does not compile because an abstract class must have at least one abstract method.",
      "It does not compile because an abstract class must have a constructor with no arguments."
    ],
    "answer": [
      0
    ],
    "explanation": "Una clase abstracta puede tener estado, constructor con parámetros y métodos privados o concretos. No necesita declarar métodos abstractos.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 17",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-18",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public static void main(String[] args) {\n    int[] array = {\n        1, 2, 3, 4, 5\n    }\n    ;\n    System.arraycopy(array, 2, array, 1, 2);\n    System.out.print(array[1]);\n    System.out.print(array[4]);\n}",
    "options": [
      "14",
      "15",
      "24",
      "25",
      "34",
      "35"
    ],
    "answer": [
      5
    ],
    "explanation": "arraycopy copia los valores originales 3 y 4 sobre las posiciones 1 y 2; el array queda [1,3,4,4,5]. Se imprimen 3 y 5.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 18",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-19",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which is true?",
    "code": "class Building {\n}\npublic class Barn extends Building {\n    public static void main(String[] args) {\n        Building build1 = new Building(); // line 8\n        Barn barn1 = new Barn(); // line 9\n        Barn barn2 = (Barn) build1; // line 10\n        Object obj1 = (Object) build1; // line 11\n        String str1 = (String) build1; // line 12\n        Building build2 = (Building) barn1; // line 13\n    }\n}",
    "options": [
      "If line 10 is removed, the compilation succeeds.",
      "If line 11 is removed, the compilation succeeds.",
      "If line 12 is removed, the compilation succeeds.",
      "If line 13 is removed, the compilation succeeds.",
      "More than one line must be removed for compilation to succeed."
    ],
    "answer": [
      2
    ],
    "explanation": "Building y String son clases incompatibles para ese cast, por lo que la línea 12 no compila. El cast de la línea 10 sí compila, aunque lanzaría ClassCastException si se ejecutara.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 19",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-20",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the DTO pattern used for?",
    "code": "",
    "options": [
      "To implement the data access layer",
      "To exchange data between processes",
      "To implement the presentation layer."
    ],
    "answer": [
      1
    ],
    "explanation": "DTO transporta datos entre procesos o capas sin implementar persistencia o presentación.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 20",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-21",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "In Java the difference between throws and throw Is:",
    "code": "",
    "options": [
      "Throws throws an exception and throw indicates the type of exception that the method.",
      "Throws is used in methods and throw in constructors.",
      "Throws indicates the type of exception that the method does not handle and throw an exception."
    ],
    "answer": [
      2
    ],
    "explanation": "throws declara qué excepciones puede propagar un método; throw lanza una instancia de excepción.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 21",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-22",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which two options correctly describe the relationship between the classes? Select two.",
    "code": "class Class1 {\n    String v1;\n}\nclass Class2 {\n    Class1 c1;\n    String v2;\n}\nclass Class3 {\n    Class2 c1;\n    String v3;\n}",
    "options": [
      "Class2 has-a v3.",
      "Class1 has-a v2.",
      "Class2 has-a v2.",
      "Class3 has-a v1.",
      "Class2 has-a Class3.",
      "Class2 has-a Class1."
    ],
    "answer": [
      2,
      5
    ],
    "explanation": "Class2 tiene v2 y contiene una referencia Class1. No hereda v1 ni v3. Solo hay dos afirmaciones válidas; el documento pide tres por error.\n\nSe ajustó la cantidad de respuestas del enunciado para que coincida con las opciones válidas.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 22",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-23",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which code fragment is illegal?",
    "code": "",
    "options": [
      "class Base1 { abstract class Abs1 { } }",
      "abstract class Abs2 { void doit() { } }",
      "class Base2 { abstract class Abs3 extends Base2 { } }",
      "class Base3 { abstract int var1 = 89; }"
    ],
    "answer": [
      3
    ],
    "explanation": "abstract se aplica a clases o métodos, no a campos. Las otras declaraciones son válidas usando las palabras reservadas class y abstract en minúsculas.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 23",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-24",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class MyStuff {\n    String name;\n    MyStuff(String n) {\n        name = n;\n    }\n    public static void main(String[] args) {\n        MyStuff m1 = new MyStuff(\"guitar\");\n        MyStuff m2 = new MyStuff(\"tv\");\n        System.out.println(m2.equals(m1));\n    }\n    public boolean equals(Object o) {\n        MyStuff m = (MyStuff) o;\n        if (m.name != null) {\n            return true;\n        }\n        return false;\n    }\n}",
    "options": [
      "The output is true and MyStuff fulfills the Object.equals() contract",
      "The output is false and MyStuff fulfills the Object.equals() contract",
      "The output is true and MyStuff does NOT fulfill the Object.equals() contract.",
      "The output is false and MyStuff does NOT fulfill the Object.equals() contract"
    ],
    "answer": [
      2
    ],
    "explanation": "La instancia recibida tiene name no nulo y devuelve true. equals viola su contrato: hace cast sin comprobar tipo, falla con null y puede romper simetría y consistencia con hashCode.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 24",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-25",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Assume the default locale uses a dot as decimal separator. What is printed?",
    "code": "import java.text.*;\npublic class Align {\n    public static void main(String[] args) throws ParseException {\n        String[] sa = {\n            \"111.234\", \"222.5678\"\n        }\n        ;\n        NumberFormat nf = NumberFormat.getInstance();\n        nf.setMaximumFractionDigits(3);\n        for (String s : sa) {\n            System.out.println(nf.parse(s));\n        }\n    }\n}",
    "options": [
      "111.234\n222.567",
      "111.234\n222.568",
      "111.234\n222.5678",
      "An exception is thrown at runtime."
    ],
    "answer": [
      2
    ],
    "explanation": "setMaximumFractionDigits afecta al formato de salida, no limita la precisión de parse. Con configuración regional que usa punto decimal se leen 111.234 y 222.5678.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 25",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-26",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class Alpha {\n    String getType() {\n        return \"alpha\";\n    }\n}\nclass Beta extends Alpha {\n    String getType() {\n        return \"beta\";\n    }\n}\npublic class Gamma extends Beta {\n    String getType() {\n        return \"gamma\";\n    }\n    public static void main(String[] args) {\n        Gamma g1 = new Alpha();\n        Gamma g2 = new Beta();\n        System.out.println(g1.getType() + \" \" + g2.getType());\n    }\n}",
    "options": [
      "Alpha beta",
      "Beta beta.",
      "Gamma gamma.",
      "Compilation fails."
    ],
    "answer": [
      3
    ],
    "explanation": "Una referencia Gamma no puede recibir directamente una instancia Alpha ni Beta. Las asignaciones son incompatibles en compilación.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 26",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-27",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What changes will make this code compile?",
    "code": "class X {\n    X() {\n    }\n    private void one() {\n    }\n}\npublic class Y extends X {\n    Y() {\n    }\n    private void two() {\n        one();\n    }\n    public static void main(String[] args) {\n        new Y().two();\n    }\n}",
    "options": [
      "Adding the public modifier to the declaration of class X. (",
      "Adding the protected modifier to the X() constructor.",
      "Changing the private modifier on the declarationof the one() method to protected.",
      "Removing the Y() constructor",
      "Removing the private modifier from the two() method."
    ],
    "answer": [
      2
    ],
    "explanation": "one es private y no se hereda. Cambiarlo a protected permite que Y lo invoque. La visibilidad del constructor y de two no resuelve ese acceso.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 27",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-28",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class X {\n    String str = \"default\";\n    X(String s) {\n        str = s;\n    }\n    void print() {\n        System.out.println(str);\n    }\n    public static void main(String[] args) {\n        new X(\"hello\").print();\n    }\n}",
    "options": [
      "hello",
      "default",
      "Compilation fails.",
      "The program prints nothing.",
      "An exception is thrown at run time."
    ],
    "answer": [
      0
    ],
    "explanation": "El constructor guarda hello y print imprime ese valor. Se conserva la cadena en minúsculas del código original.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 28",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-29",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which two possible outputs?",
    "code": "public class Main {\n    public static void main(String[] args) throws Exception {\n        doSomething();\n    }\n    private static void doSomething() throws Exception {\n        System.out.println(\"Before if clause\");\n        if (Math.random() > 0.5) {\n            throw new Exception();\n        }\n        System.out.println(\"After if clause\");\n    }\n}",
    "options": [
      "Before if clause\nException in thread \"main\" java.lang.Exception at Main.doSomething (Main.java:21) at Main.main (Main.java:15).",
      "Before if clause\nException in thread \"main\" java.lang.Exception at Main.doSomething (Main.java:21) at Main.main (Main.java:15)\nAfter if clause.",
      "Exception in thread \"main\" java.lang.Exception at Main.doSomething (Main.java:21) at Main.main (Main.java:15).",
      "Before if clause\nAfter if clause."
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Primero se imprime Before if clause. Si Math.random() > 0.5 se propaga la excepción; en otro caso se imprime After if clause. Tras throw no se ejecuta la impresión final.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 29",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-30",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which statement, when inserted into line '' // TODO code application logic here\", is valid in compilation time change?",
    "code": "public class SampleClass {\n    public static void main(String[] args) {\n        AnotherSampleClass asc = new AnotherSampleClass();\n        SampleClass sc = new SampleClass();\n        // TODO code application logic here\n    }\n}\nclass AnotherSampleClass extends SampleClass {\n}",
    "options": [
      "asc = sc;",
      "sc = asc;",
      "asc = (Object) sc;",
      "asc= sc.clone();"
    ],
    "answer": [
      1
    ],
    "explanation": "AnotherSampleClass extiende SampleClass. La referencia de la superclase sc puede recibir asc por ampliación; la asignación inversa requiere un cast.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 30",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-31",
    "topic": "cli",
    "type": "single",
    "difficulty": "Media",
    "question": "The pom.xml file is the configuration file For:",
    "code": "",
    "options": [
      "Ant",
      "Gradle",
      "Maven"
    ],
    "answer": [
      2
    ],
    "explanation": "pom.xml es el descriptor de proyecto de Maven.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 31",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-32",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which two declarations will compile?",
    "code": "// Evaluate each declaration independently in main:\n// Line 15:\nInt a, b, c = 0;\n// Line 16:\nint a, b, c;\n// Line 17:\nint g, int h, int i = 0;\n// Line 18:\nint d, e, f;\n// Line 19:\nInt k, l, m, = 0;\n// Line 20 is the closing brace, not a declaration.",
    "options": [
      "Line 15.",
      "Line 16.",
      "Line 17.",
      "Line 18.",
      "Line 19.",
      "Line 20."
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "Las líneas 16 y 18 son declaraciones válidas. Int no es el tipo primitivo int; la línea 17 repite el tipo dentro de la lista y la 19 tiene una coma sobrante.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 32",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-33",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which set of three statements prints Shape: constructor, Shape: foo and Square: foo on separate lines?",
    "code": "public class SuperTest {\n    public static void main(String[] args) {\n        // statement1\n        // statement2\n        // statement3\n    }\n}\nclass Shape {\n    public Shape() {\n        System.out.println(\"Shape: constructor\");\n    }\n    public void foo() {\n        System.out.println(\"Shape: foo\");\n    }\n}\nclass Square extends Shape {\n    public Square() {\n        super();\n    }\n    public Square(String label) {\n        System.out.println(\"Square: constructor\");\n    }\n    public void foo() {\n        super.foo();\n    }\n    public void foo(String label) {\n        System.out.println(\"Square: foo\");\n    }\n}",
    "options": [
      "Square square = new Square (\"bar\");\nsquare.foo (\"bar\");\nsquare.foo();",
      "Square square = new Square (\"bar\");\nsquare.foo (\"bar\");\nsquare.foo (\"bar\");",
      "Square square = new Square ();\nsquare.foo ();\nsquare.foo(bar);",
      "Square square = new Square ();\nsquare.foo ();\nsquare.foo(\"bar\");",
      "Square square = new Square ();\nsquare.foo ();\nsquare.foo ();"
    ],
    "answer": [
      3
    ],
    "explanation": "new Square() ejecuta Shape(), foo() delega en super.foo() y foo(\"bar\") imprime Square: foo. Se evalúan las tres sentencias de cada opción como un conjunto.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 33",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-34",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public static void main(String[] args) {\n    System.out.println(\"Result: \" + 2 + 3 + 5);\n    System.out.println(\"Result: \" + 2 + 3 * 5);\n}",
    "options": [
      "Result: 10\nResult: 30",
      "Result: 25\nResult: 10",
      "Result: 235\nResult: 215",
      "Result: 215\nResult: 215",
      "Compilation fails."
    ],
    "answer": [
      2
    ],
    "explanation": "La primera expresión concatena 2,3,5 tras la cadena: 235. En la segunda, 3 * 5 se calcula antes: se concatenan 2 y 15, dando 215.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 34",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-35",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "The SINGLETON pattern allows:",
    "code": "",
    "options": [
      "Have a single instance of a class and this instance cannot be used by other classes",
      "Having a single instance of a class, while allowing all classes have access to that instance.",
      "Having a single instance of a class that can only be accessed by the first method that calls it."
    ],
    "answer": [
      1
    ],
    "explanation": "Singleton mantiene una única instancia y ofrece un punto de acceso compartido.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 35",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-36",
    "topic": "colecciones",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class MySort implements Comparator<Integer> {\n    public int compare(Integer x, Integer y) {\n        return y.compareTo(x);\n    }\n}\n// Code fragment inside a method; assume java.util imports:\nInteger[] primes = {\n    2, 7, 5, 3\n}\n;\nMySort ms = new MySort();\nArrays.sort(primes, ms);\nfor (Integer p2 : primes) {\n    System.out.print(p2 + \" \");\n}",
    "options": [
      "2 3 5 7",
      "2 7 5 3",
      "7 5 3 2",
      "Compilation fails."
    ],
    "answer": [
      2
    ],
    "explanation": "y.compareTo(x) invierte el orden natural; los enteros quedan 7 5 3 2.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 36",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-37",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which three implementations are valid?",
    "code": "interface SampleCloseable {\n    public void close() throws java.io.IOException;\n}",
    "options": [
      "class Test implements SampleCloseable { public void close() throws java.io.IOException { /* do something */ } }",
      "class Test implements SampleCloseable { public void close() throws Exception { /* do something */ } }",
      "class Test implements SampleCloseable { public void close() throws FileNotFoundException { /* do something */ } }",
      "class Test extends SampleCloseable { public void close() throws java.io.IOException { /* do something */ } }",
      "class Test implements SampleCloseable { public void close() { /* do something */ }}"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "La implementación puede declarar IOException, una subclase como FileNotFoundException o ninguna excepción. No puede ampliar a Exception, y una interfaz se implementa con implements.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 37",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-38",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What will make this code compile and run?",
    "code": "public class Simple {\n    public float price;\n    public static void main(String[] args) {\n        Simple price = new Simple();\n        price = 4; // line 7\n    }\n}",
    "options": [
      "Change line 3 to the following: public int price;",
      "Change line 7 to the following: int price = new Simple();",
      "Change line 7 to the following: float price = new Simple ();",
      "Change line 7 to the following: price = 4f;",
      "Change line 7 to the following: price.price = 4;"
    ],
    "answer": [
      4
    ],
    "explanation": "price es una referencia Simple; price.price accede a su campo float. Asignar 4 a la referencia es incompatible.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 38",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-39",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is printed out when the program is excuted?",
    "code": "public class MainMethod {\n    void main() {\n        System.out.println(\"one\");\n    }\n    static void main(String args) {\n        System.out.println(\"two\");\n    }\n    public static final void main(String[] args) {\n        System.out.println(\"three\");\n    }\n    void main(Object[] args) {\n        System.out.println(\"four\");\n    }\n}",
    "options": [
      "one",
      "two",
      "three",
      "four",
      "There is no output."
    ],
    "answer": [
      2
    ],
    "explanation": "El punto de entrada es public static void main(String[]). final está permitido y las otras sobrecargas no son el punto de entrada.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 39",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-40",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result if the integer value is 33?",
    "code": "public static void main(String[] args) {\n    // Assume an int variable value exists with value 33.\n    if (value >= 0) {\n        if (value != 0) {\n            System.out.print(\"the \");\n        }\n        else {\n            System.out.print(\"quick \");\n        }\n        if (value < 10) {\n            System.out.print(\"brown \");\n        }\n        if (value > 30) {\n            System.out.print(\"fox \");\n        }\n        else if (value < 50) {\n            System.out.print(\"jumps \");\n        }\n        else if (value < 10) {\n            System.out.print(\"over \");\n        }\n        else {\n            System.out.print(\"the \");\n        }\n        if (value > 10) {\n            System.out.print(\"lazy \");\n        }\n        else {\n            System.out.print(\"dog \");\n        }\n        System.out.print(\"... \");\n    }\n}",
    "options": [
      "the fox jumps lazy ...",
      "the fox lazy ...",
      "quick fox over lazy ..."
    ],
    "answer": [
      1
    ],
    "explanation": "Con 33 se imprime the, luego fox y luego lazy. El else-if de jumps ya no se evalúa al cumplirse value > 30.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 40",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-44",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class Person {\n    String name = \"No name\";\n    public Person(String nm) {\n        name = nm;\n    }\n}\nclass Employee extends Person {\n    String empID = \"0000\";\n    public Employee(String id) {\n        empID = id;\n    }\n    // line 18\n}\npublic class EmployeeTest {\n    public static void main(String[] args) {\n        Employee e = new Employee(\"4321\");\n        System.out.println(e.empID);\n    }\n}",
    "options": [
      "4321.",
      "0000.",
      "An exception is thrown at runtime.",
      "Compilation fails because of an error in line 18."
    ],
    "answer": [
      3
    ],
    "explanation": "Employee llama implícitamente super(), pero Person solo declara Person(String). Falta una llamada explícita super(id) u otro constructor adecuado.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 44",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-45",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class Atom {\n    Atom() {\n        System.out.print(\"atom \");\n    }\n}\nclass Rock extends Atom {\n    Rock(String type) {\n        System.out.print(type);\n    }\n}\npublic class Mountain extends Rock {\n    Mountain() {\n        super(\"granite \");\n        new Rock(\"granite \");\n    }\n    public static void main(String[] a) {\n        new Mountain();\n    }\n}",
    "options": [
      "Compilation fails.",
      "atom granite",
      "granite granite",
      "atom granite granite",
      "An exception is thrown at runtime.",
      "atom granite atom granite"
    ],
    "answer": [
      5
    ],
    "explanation": "super(\"granite \") crea la cadena Atom→Rock; new Rock(\"granite \") crea otra cadena Atom→Rock. Se imprime atom granite atom granite.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 45",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-46",
    "topic": "java",
    "type": "multiple",
    "difficulty": "Media",
    "question": "Which two statements about rolling back to the savepoints are correct? Select two.",
    "code": "try {\n    // Assume conn is a valid Connection and the transaction is active.\n    // Use SQL to add 10 to a checking account.\n    Savepoint s1 = conn.setSavepoint();\n    // Use SQL to add 100 to the same account.\n    Savepoint s2 = conn.setSavepoint();\n    // Use SQL to add 1000 to the same account.\n    // Insert a valid rollback invocation here.\n}\ncatch (Exception e) {\n}",
    "options": [
      "If conn.rollback(s1) is inserted, account will be incremented by 10.",
      "If conn.rollback(s1) is inserted, account will be incremented by 1010.",
      "If conn.rollback(s2) is inserted, account will be incremented by 100",
      "If conn.rollback(s2) is inserted, account will be incremented by 110.",
      "If conn.rollback(s2) is inserted, account will be incremented by 1110"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Rollback a s1 deshace +100 y +1000: queda +10. Rollback a s2 deshace +1000: queda +110. Se asume una transacción activa sin commits intermedios.\n\nSe ajustó la cantidad de respuestas del enunciado para que coincida con las opciones válidas.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 46",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-47",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class SampleClass {\n    public static void main(String[] args) {\n        AnotherSampleClass asc = new AnotherSampleClass();\n        SampleClass sc = new SampleClass();\n        sc = asc;\n        System.out.println(\"sc: \" + sc.getClass());\n        System.out.println(\"asc: \" + asc.getClass());\n    }\n}\nclass AnotherSampleClass extends SampleClass {\n}",
    "options": [
      "sc: class java.lang.Object\nasc: class AnotherSampleClass",
      "sc: class SampleClass\nasc: class AnotherSampleClass",
      "sc: class AnotherSampleClass\nasc: class SampleClass",
      "sc: class AnotherSampleClass\nasc: class AnotherSampleClass"
    ],
    "answer": [
      3
    ],
    "explanation": "sc y asc terminan apuntando al mismo objeto AnotherSampleClass; getClass muestra el tipo real, no el declarado.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 47",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-49",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What values of x, y, z produce the following output?\n1234\n1234\n1234\n---\n1234\n---",
    "code": "public static void main(String[] args) {\n    // insert code here\n    int j = 0, k = 0;\n    for (int i = 0; i < x; i++) {\n        do {\n            k = 0;\n            while (k < z) {\n                k++;\n                System.out.print(k + \"\");\n            }\n            System.out.println(\" \");\n            j++;\n        }\n        while (j < y);\n        System.out.println(\"---\");\n    }\n}",
    "options": [
      "int x = 4, y = 3, z = 2;",
      "int x = 3, y = 2, z = 3;",
      "int x = 2, y = 3, z = 3;",
      "int x = 4, y = 2, z= 3;",
      "int x = 2, y = 3, z = 4;"
    ],
    "answer": [
      4
    ],
    "explanation": "z=4 imprime 1234. x=2 produce dos separadores. y=3 produce tres líneas en la primera iteración; j no se reinicia, así que la segunda imprime una sola línea.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 49",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-50",
    "topic": "colecciones",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "import java.util.*;\npublic class App {\n    public static void main(String[] args) {\n        List p = new ArrayList();\n        p.add(7);\n        p.add(1);\n        p.add(5);\n        p.add(1);\n        p.remove(1);\n        System.out.println(p);\n    }\n}",
    "options": [
      "[7, 1, 5, 1]",
      "[7, 5, 1]",
      "[7, 5]",
      "[ 7, 1]"
    ],
    "answer": [
      1
    ],
    "explanation": "remove(1) selecciona el índice int, elimina el primer 1 de la posición 1 y deja [7,5,1].",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 50",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-51",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "public class DoWhile {\n    public static void main(String[] args) {\n        int ii = 2;\n        do {\n            System.out.println(ii);\n        }\n        while (--ii);\n    }\n}",
    "options": [
      "2 1 2",
      "1 0",
      "null",
      "An infinite loop.",
      "Compilation fails"
    ],
    "answer": [
      4
    ],
    "explanation": "--ii produce un int. Java exige boolean en la condición de do-while; no hay conversión de entero a boolean.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 51",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  },
  {
    "id": "word-java-52",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class X {\n    static void m(int i) {\n        i += 7;\n    }\n    public static void main(String[] args) {\n        int i = 12;\n        m(i);\n        System.out.println(i);\n    }\n}",
    "options": [
      "7",
      "12",
      "19",
      "Compilation fails.",
      "An exception is thrown at run time"
    ],
    "answer": [
      1
    ],
    "explanation": "Java pasa el int por valor. m modifica su copia local, por lo que el i de main sigue valiendo 12.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 52",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word"
  }
];
window.WORK_REVIEW_QUESTIONS = [
  {
    "id": "word-apx3-6",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál es la ubicación de archivos temporales utilizados en Batch?",
    "code": "",
    "options": [
      "/fichtemporal/datent",
      "/fichtemcomp/datent",
      "/temporalFiles/datent",
      "/datentJobs/datent"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-6",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-9",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "De la lista siguiente, indique cuales son las invocaciones restringidas en la Arquitectura Batch:",
    "code": "",
    "options": [
      "Invocación WebServices, servicios REST",
      "Acceso a recursos externos vía HTTP",
      "Uso de Pre y Post Acciones",
      "Escritura en Registro de Operaciones",
      "Escritura en el Diario Electrónico.",
      "a, b y c",
      "a, c y d",
      "Todas las anteriores"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-9",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-11",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Estos tipos de librerías se pueden combinar entre sí para tener una librería con diferentes capacidades o no elegir ninguno de las opciones anteriores.",
    "code": "",
    "options": [
      "Online y Batch",
      "Shell y JDBC"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-11",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-17",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál de las siguientes opciones son las consideraciones para tener en cuenta en la instalación en Entorno de Ejecución Local?",
    "code": "",
    "options": [
      "Descomprimir la carpeta arquitectura en la ruta raíz /, es probable que se requieran permisos de administrador (sudo).",
      "Dar permisos de ejecución a la carpeta y archivos del ENTORNO_LOCAL_APX: sudo chmod -R 777 /ENTORNO_LOCAL_APX",
      "La instalación debe realizarse sobre un ordenador de sobremesa del BBVA con sistema operativo Windows o Linux.",
      "Las rutas y urls proporcionadas serán exclusivamente para un entorno local"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-17",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-26",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Estos módulos encapsulan toda la funcionalidad relacionada con las operaciones bancarias como el diario o registro de operaciones. Hay dos puntos claves en relación con estos servicios:\n1. No deben afectar al rendimiento ejecución de la lógica de negocio por lo que el diario y el registro de las operaciones han de usar colas internas para desacoplar su propia ejecución de la ejecución de la lógica de negocio\n2. Estos módulos son responsables de datos que pueden ser almacenados en el diario del MainFrame o en el propio de la arquitectura. Por lo tanto, el servicio de diario tiene que ser capaz de almacenar los datos del diario en ambos sitios.",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-26",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-29",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "De la lista siguiente marca 2 funcionalidades de servicios Core incluidos en APX",
    "code": "",
    "options": [
      "Soporte transaccional",
      "Ejecución de reglas de negocio",
      "Casos restringidos",
      "Thread Affinity",
      "Soporte Transaccional JTA/XA",
      "Autorización y Perfilado"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-29",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-32",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Son dos de los protocolos físicos que APX admite en una solicitud.",
    "code": "",
    "options": [
      "JMS y REST",
      "MQ y TCP",
      "QP05 y MQ",
      "AQPG y PS9"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-32",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-33",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles son los protocolos físicos disponibles en APX Online?",
    "code": "",
    "options": [
      "HTTP/ SOAP",
      "HTTP/ REST / RESTFul (A través de Servicios Backend)",
      "AQPG (Formato Arquitectura Plataforma QP05: síncrono o asíncrono)",
      "PS9"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-33",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-34",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles son los protocolos lógicos disponibles en APX?",
    "code": "",
    "options": [
      "HTTP/ SOAP",
      "PS9",
      "HTTP/ REST / RESTFul (A través de Servicios Backend)",
      "AQPG (Formato Arquitectura Plataforma QP05: síncrono o asíncrono)"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-34",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-36",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Selecciona al menos dos restricciones que se tienen en APX en la invocación entre transacciones.",
    "code": "",
    "options": [
      "No se permite la invocación síncrona entre transacciones.",
      "No se permite la invocación asíncrona entre transacciones",
      "La invocación asíncrona entre transacciones es en casos de transacciones criticas",
      "La invocación asíncrona entre transacciones es casos de transacciones NO criticas",
      "Desde una transacción asíncrona no se puede invocar nuevamente a otra transacción asíncrona",
      "Desde una transacción asíncrona se puede invocar nuevamente a otra transacción asíncrona"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-36",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-40",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Este tipo de paginación es el que establece Arquitectura y Calidad como el más eficiente, tanto en consumo de recursos como en el tiempo de proceso para la consecución de la información, lo que redunda en un menor tiempo de espera por parte del usuario final.",
    "code": "",
    "options": [
      "Paginación en Librería",
      "Paginación en Transaccion",
      "Paginación en Batch",
      "Paginación en DTO"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-40",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-44",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué patrones de la siguiente lista son obligatorios del Data Transfer Object (DTO) en APX?",
    "code": "",
    "options": [
      "Se necesite una agrupación de datos simples en una clase con cierta funcionalidad asociada",
      "Se requiera intercambiar información entre diferentes componentes en APX de forma coherente, organizada y agrupada.",
      "Implementar un Servicio Backend",
      "Todas las anteriores",
      "Ninguna de las anteriores"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-44",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-47",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Los patrones de diseño sirven de apoyo para la búsqueda de soluciones a problemas comunes a la hora del desarrollo de software. De la siguiente lista, ¿cuál de los siguientes es un patrón de diseño?",
    "code": "",
    "options": [
      "Paginación en transacciones",
      "Paginación en librerías",
      "CRUD en librerías",
      "DTOs en componentes APX",
      "A, B y C",
      "Todas las anteriores",
      "Ninguna de las anteriores"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-47",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-51",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué causas no corresponden al patrón Contenedor Mágico?",
    "code": "",
    "options": [
      "Reparto de responsabilidades incorrecto",
      "Falta de cumplimiento de la arquitectura",
      "Intervención demasiado limitada",
      "Desacoplamiento entre librerías"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-51",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-52",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "La aplicación de este anti patrón de diseño en los desarrollos, causará la búsqueda y análisis de una mejor solución a un problema por medio de reingeniería",
    "code": "",
    "options": [
      "Paginación en transacciones",
      "Contenedor mágico",
      "Paginación Mágica",
      "Generador de Logs"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-52",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-53",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuáles de las siguientes oraciones forman parte de las mejores prácticas establecidas para acceder a Datos?",
    "code": "",
    "options": [
      "Una UUAA puede acceder a datos de terceros a través de librerías APX que el dueño del dato proporcione.",
      "En el caso de procesos batch no deben existir cesiones de ficheros entre UUAAs.",
      "En el caso de bases de datos relacionales, deberá utilizarse JPA.",
      "No se debe manejar el objeto Datasource directamente.",
      "No se deben instanciar, ni abrir, ni cerrar explícitamente conexiones a Base de datos",
      "Una UUAA solo puede acceder a los datos que ella misma custodia"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-53",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-54",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué nivel de profundidad es permitido al realizar invocaciones de librería a librería?",
    "code": "",
    "options": [
      "Profundidades a 3 niveles: Transacción > Librería > Librería > Librería",
      "Profundidades a 5 niveles: Transacción > Librería > Librería > Librería> Librería > Librería",
      "Profundidades a 7 niveles: Transacción > Librería > Librería > Librería> Librería > Librería> Librería > Librería",
      "Profundidades a 9 niveles: Transacción > Librería > Librería > Librería> Librería > Librería> Librería > Librería> Librería > Librería"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-54",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-55",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "Se debe evitar en una transacción o biblioteca, dentro de su lógica, invocar más de ____ librerías a la vez",
    "code": "",
    "options": [
      "7",
      "15",
      "5",
      "9",
      "12"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-55",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-56",
    "topic": "patrones",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Cuál es el número máximo de librerías a invocar desde una transacción o librería?",
    "code": "",
    "options": [
      "7 librerías",
      "3 librerías",
      "9 librerías",
      "12 librerías"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-56",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-61",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Las únicas excepciones que las aplicaciones pueden capturar y administrar son las siguientes, típicas de APX:",
    "code": "",
    "options": [
      "com.bbva.apx.exception.business.BusinessException",
      "com.bbva.apx.exception.business.NullPointerException",
      "com.bbva.apx.exception.business.IOException",
      "com.bbva.apx.exception.io.network.TimeoutException"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-61",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-65",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué niveles de Logs existen dentro de APX?",
    "code": "",
    "options": [
      "INFO, WARNING & ERROR.",
      "TRACE, DEBUG, INFO, WARNING & ERROR.",
      "DEBUG, TRACE WARNING & ERROR",
      "DEBUG, INFO, WARNING & ERROR"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-65",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-67",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Para información de muy bajo nivel, solo útil para depurar la aplicación tanto en el desarrollo como en el análisis de incidentes ¿A qué tipo de nivel de Log se refiere?",
    "code": "",
    "options": [
      "Trace",
      "Info",
      "Debug",
      "Low-Level"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-67",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-68",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Este nivel de Log tiene las siguientes características:-Paradas e inicios de servicios y sistemas.-Parámetros críticos o relevantes de configuración.-Inicio y fin de transacciones y operaciones completas.-Cambios del estado de las operaciones",
    "code": "",
    "options": [
      "Warning",
      "Error",
      "Info",
      "Trace"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-68",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-69",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "DEBUG, sirve para información de muy bajo nivel solo útil para el debug de la aplicación, tanto en el desarrollo como en el análisis de incidencias-Paradas y arranques de servicios y sistemas-Parámetros críticos o relevantes de configuración-Comienzo y fin de transacciones y operaciones completas-Cambios de estado de operaciones",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-69",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-73",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Las partes de un campo variable definidos por la cadena _$NMM$ son:",
    "code": "",
    "options": [
      "(N es el orden de la variable literal (1 o 2), MM la longitud máxima del campo informado en la variable (20 es el máximo)",
      "(N es el orden de la variable literal (1 a 4), MM la longitud máxima del campo informado en la variable (15 es el máximo)",
      "(N es el orden de la variable literal (1 o 2), MM la longitud máxima del campo informado en la variable (15 es el máximo)"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-73",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-74",
    "topic": "batch",
    "type": "single",
    "difficulty": "Media",
    "question": "¿Qué características ofrece la Arquitectura Batch?",
    "code": "",
    "options": [
      "Soporte Multi-BBDD, usando fuentes de datos configurables",
      "Acceso a conectores y utilidades APX: acceso DB MongoDB, Elasticsearch, Neo4J, motor de reglas, creador de documentos, etc.",
      "Ejecución de múltiples transacciones",
      "Invocación a Servicios Web"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-74",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-76",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Una de las acciones que realiza la Arquitectura APX previo a la ejecución de la lógica de negocio es:",
    "code": "",
    "options": [
      "Validar errores",
      "Escribir ROP",
      "Escribe Log de ejecución",
      "Se envía un evento con datos comerciales"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-76",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-80",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "La comunicación de APX a otros servicios NO APX se realiza UNICAMENTE a través de la utilidad APX _______",
    "code": "",
    "options": [
      "Certificados",
      "Conector APO genérico (APIConnector)",
      "Conectores",
      "JDBC"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-80",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-84",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Selecciona dos comunicaciones que deben ser validadas por el equipo de Arquitectura antes de.",
    "code": "",
    "options": [
      "Comunicación de APX a servicios NO APX",
      "Comunicación con Elastic Search",
      "Comunicación con Kibana",
      "Si la transacción APX debe invocar a Mainframe más de dos veces"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-84",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-apx3-89",
    "topic": "online",
    "type": "single",
    "difficulty": "Media",
    "question": "Está permitido que la aplicación modifique o informe una variable de entorno de la JVM",
    "code": "",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "answer": [],
    "explanation": "El documento no incluye una clave verificable para esta regla interna. Pendiente de contrastar con la documentación oficial de APX; no se utiliza para calificar exámenes.",
    "source": "Banco de trabajo.docx · apx3-89",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-java-41",
    "topic": "java",
    "type": "single",
    "difficulty": "Media",
    "question": "Which one is valid as a replacement for foo?",
    "code": "public static void main(String[] args) {\n    Boolean b1 = true;\n    Boolean b2 = false;\n    int i = 0;\n    while (foo) {\n    }\n}",
    "options": [
      "b1.compareTo(b2)",
      "i = 1",
      "i == 2? -1:0",
      "foo.equals(\"bar\")"
    ],
    "answer": [],
    "explanation": "No hay una solución única verificable a partir de las opciones del documento. Pendiente de validar; no se incluye en exámenes puntuados.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 41",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  },
  {
    "id": "word-java-53",
    "topic": "colecciones",
    "type": "single",
    "difficulty": "Media",
    "question": "What is the result?",
    "code": "class MyKeys {\n    Integer key;\n    MyKeys(Integer k) {\n        key = k;\n    }\n    public boolean equals(Object o) {\n        return ((MyKeys) o).key == this.key;\n    }\n}\n// Fragment inside a method; assume java.util imports:\nMap m = new HashMap();\nMyKeys m1 = new MyKeys(1);\nMyKeys m2 = new MyKeys(2);\nMyKeys m3 = new MyKeys(1);\nMyKeys m4 = new MyKeys(new Integer(2));\nm.put(m1, \"car\");\nm.put(m2, \"boat\");\nm.put(m3, \"plane\");\nm.put(m4, \"bus\");\nSystem.out.print(m.size());",
    "options": [
      "2",
      "3",
      "4",
      "Compilation fails."
    ],
    "answer": [],
    "explanation": "MyKeys sobrescribe equals sin hashCode y compara Integer por identidad. Viola el contrato requerido por HashMap; no conviene calificar un tamaño universal como garantizado. Pendiente de corregir el enunciado con una clave validada.",
    "source": "Banco de trabajo.docx · Java Examen · pregunta 53",
    "origin": "banco-trabajo",
    "contentRevision": "20261110-word",
    "validationStatus": "pending"
  }
];
window.WORK_QUESTION_SETS = [
  {
    "id": "v1",
    "title": "Cuestionario inicial",
    "questionIds": [
      "guia2-57",
      "guia2-39",
      "guia2-49",
      "guia2-56",
      "guia2-52",
      "guia2-6",
      "guia2-61",
      "guia2-9",
      "guia2-60",
      "guia2-27",
      "guia2-13",
      "guia2-31",
      "guia2-42",
      "guia2-8",
      "guia2-163",
      "guia2-3",
      "guia2-65",
      "guia2-37",
      "guia2-5",
      "guia2-11",
      "guia2-19",
      "guia2-34",
      "guia2-44",
      "guia2-47",
      "guia2-62",
      "guia2-33",
      "guia2-4",
      "guia2-17",
      "guia2-53",
      "guia2-1",
      "guia2-58",
      "guia2-40",
      "guia2-50",
      "guia2-63",
      "guia2-45",
      "guia2-18",
      "guia2-7",
      "guia2-48",
      "guia2-2",
      "guia2-20",
      "guia2-16",
      "guia2-46",
      "guia2-23",
      "guia2-24"
    ],
    "pendingIds": [],
    "sourceCount": 45
  },
  {
    "id": "v2",
    "title": "Simulación APX V2",
    "questionIds": [
      "guia2-65",
      "guia2-66",
      "guia2-68",
      "guia2-69",
      "guia2-71",
      "guia2-72",
      "guia2-74",
      "guia2-76",
      "guia2-36",
      "guia2-80",
      "guia2-79",
      "guia2-82",
      "guia2-83",
      "guia2-85",
      "guia2-86",
      "guia2-91",
      "guia2-96",
      "guia2-98",
      "guia2-100",
      "guia2-104",
      "guia2-105",
      "guia2-106",
      "guia2-109",
      "guia2-110",
      "guia2-113",
      "guia2-118",
      "guia2-119",
      "guia2-121",
      "guia2-122",
      "guia2-124",
      "guia2-125",
      "guia2-126b",
      "guia2-126",
      "guia2-128",
      "guia2-130",
      "guia2-132",
      "guia2-133",
      "guia2-134",
      "guia2-137",
      "guia2-142",
      "guia2-147",
      "guia2-148",
      "guia2-151",
      "guia2-154",
      "guia2-156"
    ],
    "pendingIds": [],
    "sourceCount": 45
  },
  {
    "id": "v3",
    "title": "Cuestionario APX V3",
    "questionIds": [
      "guia2-148",
      "guia2-152",
      "guia2-145",
      "guia2-135",
      "guia2-154",
      "guia2-211",
      "guia2-208",
      "guia2-212",
      "guia2-132",
      "guia2-161",
      "guia2-141",
      "guia2-55",
      "guia2-139",
      "guia2-188",
      "guia2-202",
      "guia2-181",
      "guia2-153",
      "guia2-136",
      "guia2-124",
      "guia2-123",
      "guia2-140",
      "guia2-138",
      "guia2-122",
      "guia2-164",
      "guia2-127",
      "guia2-120",
      "guia2-129",
      "guia2-131",
      "guia2-149",
      "guia2-155",
      "guia2-187",
      "guia2-165"
    ],
    "pendingIds": [],
    "sourceCount": 32
  },
  {
    "id": "v4",
    "title": "APX Simulación V4",
    "questionIds": [
      "guia2-9",
      "guia2-10",
      "guia2-12",
      "guia2-14",
      "guia2-15",
      "guia2-17",
      "guia2-19",
      "guia2-20",
      "guia2-21",
      "guia2-22",
      "guia2-26",
      "guia2-28",
      "guia2-29",
      "guia2-32",
      "guia2-40",
      "guia2-41",
      "guia2-51",
      "guia2-52",
      "guia2-54",
      "guia2-56",
      "guia2-57",
      "guia2-59",
      "guia2-63",
      "guia2-64",
      "guia2-78",
      "guia2-81",
      "guia2-82",
      "guia2-85",
      "guia2-89",
      "guia2-92",
      "guia2-94",
      "guia2-97",
      "guia2-99",
      "guia2-100",
      "guia2-103",
      "guia2-107",
      "guia2-108",
      "guia2-111",
      "guia2-112",
      "guia2-113",
      "guia2-119"
    ],
    "pendingIds": [],
    "sourceCount": 41
  },
  {
    "id": "apx3",
    "title": "Diagnóstico APX 3",
    "questionIds": [
      "word-apx3-1",
      "word-apx3-2",
      "word-apx3-3",
      "word-apx3-4",
      "word-apx3-5",
      "word-apx3-7",
      "word-apx3-8",
      "word-apx3-10",
      "guia2-82",
      "word-apx3-13",
      "word-apx3-14",
      "word-apx3-15",
      "word-apx3-16",
      "word-apx3-18",
      "word-apx3-19",
      "word-apx3-20",
      "word-apx3-21",
      "word-apx3-22",
      "word-apx3-23",
      "word-apx3-24",
      "word-apx3-25",
      "word-apx3-27",
      "word-apx3-28",
      "word-apx3-30",
      "word-apx3-31",
      "word-apx3-35",
      "word-apx3-37",
      "word-apx3-38",
      "word-apx3-39",
      "guia2-18",
      "guia2-46",
      "word-apx3-43",
      "word-apx3-45",
      "word-apx3-46",
      "word-apx3-48",
      "word-apx3-49",
      "word-apx3-50",
      "word-apx3-57",
      "word-apx3-58",
      "word-apx3-59",
      "word-apx3-60",
      "word-apx3-62",
      "word-apx3-63",
      "guia2-106",
      "word-apx3-66",
      "word-apx3-70",
      "word-apx3-71",
      "word-apx3-72",
      "word-apx3-75",
      "word-apx3-78",
      "word-apx3-79",
      "word-apx3-81",
      "word-apx3-82",
      "word-apx3-83",
      "word-apx3-85",
      "word-apx3-88",
      "word-apx3-90",
      "word-apx3-92",
      "word-apx3-93",
      "word-apx3-info"
    ],
    "pendingIds": [
      "word-apx3-6",
      "word-apx3-9",
      "word-apx3-11",
      "word-apx3-17",
      "word-apx3-26",
      "word-apx3-29",
      "word-apx3-32",
      "word-apx3-33",
      "word-apx3-34",
      "word-apx3-36",
      "word-apx3-40",
      "word-apx3-44",
      "word-apx3-47",
      "word-apx3-51",
      "word-apx3-52",
      "word-apx3-53",
      "word-apx3-54",
      "word-apx3-55",
      "word-apx3-56",
      "word-apx3-61",
      "word-apx3-65",
      "word-apx3-67",
      "word-apx3-68",
      "word-apx3-69",
      "word-apx3-73",
      "word-apx3-74",
      "word-apx3-76",
      "word-apx3-80",
      "word-apx3-84",
      "word-apx3-89"
    ],
    "sourceCount": 94
  },
  {
    "id": "java",
    "title": "Java Examen",
    "questionIds": [
      "word-java-1",
      "word-java-2",
      "word-java-3",
      "word-java-4",
      "word-java-5",
      "word-java-6",
      "word-java-7",
      "word-java-8",
      "word-java-9",
      "word-java-10",
      "word-java-11",
      "word-java-12",
      "word-java-13",
      "word-java-14",
      "word-java-15",
      "word-java-16",
      "word-java-17",
      "word-java-18",
      "word-java-19",
      "word-java-20",
      "word-java-21",
      "word-java-22",
      "word-java-23",
      "word-java-24",
      "word-java-25",
      "word-java-26",
      "word-java-27",
      "word-java-28",
      "word-java-29",
      "word-java-30",
      "word-java-31",
      "word-java-32",
      "word-java-33",
      "word-java-34",
      "word-java-35",
      "word-java-36",
      "word-java-37",
      "word-java-38",
      "word-java-39",
      "word-java-40",
      "guia2-192",
      "word-java-44",
      "word-java-45",
      "word-java-46",
      "word-java-47",
      "guia2-112",
      "word-java-49",
      "word-java-50",
      "word-java-51",
      "word-java-52"
    ],
    "pendingIds": [
      "word-java-41",
      "word-java-53"
    ],
    "sourceCount": 53
  }
];
window.WORK_SOURCE_REFERENCES = [
  {
    "key": "v1-1",
    "group": "v1",
    "number": 1,
    "questionId": "guia2-57",
    "status": "existing"
  },
  {
    "key": "v1-2",
    "group": "v1",
    "number": 2,
    "questionId": "guia2-39",
    "status": "existing"
  },
  {
    "key": "v1-3",
    "group": "v1",
    "number": 3,
    "questionId": "guia2-49",
    "status": "existing"
  },
  {
    "key": "v1-5",
    "group": "v1",
    "number": 5,
    "questionId": "guia2-56",
    "status": "existing"
  },
  {
    "key": "v1-6",
    "group": "v1",
    "number": 6,
    "questionId": "guia2-52",
    "status": "existing"
  },
  {
    "key": "v1-7",
    "group": "v1",
    "number": 7,
    "questionId": "guia2-6",
    "status": "existing"
  },
  {
    "key": "v1-8",
    "group": "v1",
    "number": 8,
    "questionId": "guia2-61",
    "status": "existing"
  },
  {
    "key": "v1-9",
    "group": "v1",
    "number": 9,
    "questionId": "guia2-9",
    "status": "existing"
  },
  {
    "key": "v1-10",
    "group": "v1",
    "number": 10,
    "questionId": "guia2-60",
    "status": "existing"
  },
  {
    "key": "v1-11",
    "group": "v1",
    "number": 11,
    "questionId": "guia2-27",
    "status": "existing"
  },
  {
    "key": "v1-12",
    "group": "v1",
    "number": 12,
    "questionId": "guia2-13",
    "status": "existing"
  },
  {
    "key": "v1-13",
    "group": "v1",
    "number": 13,
    "questionId": "guia2-31",
    "status": "existing"
  },
  {
    "key": "v1-14",
    "group": "v1",
    "number": 14,
    "questionId": "guia2-42",
    "status": "existing"
  },
  {
    "key": "v1-15",
    "group": "v1",
    "number": 15,
    "questionId": "guia2-8",
    "status": "existing"
  },
  {
    "key": "v1-16",
    "group": "v1",
    "number": 16,
    "questionId": "guia2-163",
    "status": "existing"
  },
  {
    "key": "v1-17",
    "group": "v1",
    "number": 17,
    "questionId": "guia2-3",
    "status": "existing"
  },
  {
    "key": "v1-18",
    "group": "v1",
    "number": 18,
    "questionId": "guia2-65",
    "status": "existing"
  },
  {
    "key": "v1-19",
    "group": "v1",
    "number": 19,
    "questionId": "guia2-37",
    "status": "existing"
  },
  {
    "key": "v1-20",
    "group": "v1",
    "number": 20,
    "questionId": "guia2-5",
    "status": "existing"
  },
  {
    "key": "v1-21",
    "group": "v1",
    "number": 21,
    "questionId": "guia2-11",
    "status": "existing"
  },
  {
    "key": "v1-22",
    "group": "v1",
    "number": 22,
    "questionId": "guia2-19",
    "status": "existing"
  },
  {
    "key": "v1-23",
    "group": "v1",
    "number": 23,
    "questionId": "guia2-34",
    "status": "existing"
  },
  {
    "key": "v1-24",
    "group": "v1",
    "number": 24,
    "questionId": "guia2-44",
    "status": "existing"
  },
  {
    "key": "v1-25",
    "group": "v1",
    "number": 25,
    "questionId": "guia2-47",
    "status": "existing"
  },
  {
    "key": "v1-26",
    "group": "v1",
    "number": 26,
    "questionId": "guia2-62",
    "status": "existing"
  },
  {
    "key": "v1-27",
    "group": "v1",
    "number": 27,
    "questionId": "guia2-60",
    "status": "existing"
  },
  {
    "key": "v1-28",
    "group": "v1",
    "number": 28,
    "questionId": "guia2-33",
    "status": "existing"
  },
  {
    "key": "v1-29",
    "group": "v1",
    "number": 29,
    "questionId": "guia2-4",
    "status": "existing"
  },
  {
    "key": "v1-30",
    "group": "v1",
    "number": 30,
    "questionId": "guia2-17",
    "status": "existing"
  },
  {
    "key": "v1-31",
    "group": "v1",
    "number": 31,
    "questionId": "guia2-53",
    "status": "existing"
  },
  {
    "key": "v1-32",
    "group": "v1",
    "number": 32,
    "questionId": "guia2-1",
    "status": "existing"
  },
  {
    "key": "v1-33",
    "group": "v1",
    "number": 33,
    "questionId": "guia2-58",
    "status": "existing"
  },
  {
    "key": "v1-34",
    "group": "v1",
    "number": 34,
    "questionId": "guia2-40",
    "status": "existing"
  },
  {
    "key": "v1-35",
    "group": "v1",
    "number": 35,
    "questionId": "guia2-50",
    "status": "existing"
  },
  {
    "key": "v1-36",
    "group": "v1",
    "number": 36,
    "questionId": "guia2-63",
    "status": "existing"
  },
  {
    "key": "v1-37",
    "group": "v1",
    "number": 37,
    "questionId": "guia2-45",
    "status": "existing"
  },
  {
    "key": "v1-38",
    "group": "v1",
    "number": 38,
    "questionId": "guia2-18",
    "status": "existing"
  },
  {
    "key": "v1-39",
    "group": "v1",
    "number": 39,
    "questionId": "guia2-7",
    "status": "existing"
  },
  {
    "key": "v1-40",
    "group": "v1",
    "number": 40,
    "questionId": "guia2-48",
    "status": "existing"
  },
  {
    "key": "v1-41",
    "group": "v1",
    "number": 41,
    "questionId": "guia2-2",
    "status": "existing"
  },
  {
    "key": "v1-42",
    "group": "v1",
    "number": 42,
    "questionId": "guia2-20",
    "status": "existing"
  },
  {
    "key": "v1-43",
    "group": "v1",
    "number": 43,
    "questionId": "guia2-16",
    "status": "existing"
  },
  {
    "key": "v1-44",
    "group": "v1",
    "number": 44,
    "questionId": "guia2-46",
    "status": "existing"
  },
  {
    "key": "v1-45",
    "group": "v1",
    "number": 45,
    "questionId": "guia2-23",
    "status": "existing"
  },
  {
    "key": "v1-46",
    "group": "v1",
    "number": 46,
    "questionId": "guia2-24",
    "status": "existing"
  },
  {
    "key": "v2-2",
    "group": "v2",
    "number": 2,
    "questionId": "guia2-65",
    "status": "existing"
  },
  {
    "key": "v2-3",
    "group": "v2",
    "number": 3,
    "questionId": "guia2-66",
    "status": "existing"
  },
  {
    "key": "v2-4",
    "group": "v2",
    "number": 4,
    "questionId": "guia2-68",
    "status": "existing"
  },
  {
    "key": "v2-5",
    "group": "v2",
    "number": 5,
    "questionId": "guia2-69",
    "status": "existing"
  },
  {
    "key": "v2-6",
    "group": "v2",
    "number": 6,
    "questionId": "guia2-71",
    "status": "existing"
  },
  {
    "key": "v2-7",
    "group": "v2",
    "number": 7,
    "questionId": "guia2-72",
    "status": "existing"
  },
  {
    "key": "v2-8",
    "group": "v2",
    "number": 8,
    "questionId": "guia2-74",
    "status": "existing"
  },
  {
    "key": "v2-9",
    "group": "v2",
    "number": 9,
    "questionId": "guia2-76",
    "status": "existing"
  },
  {
    "key": "v2-10",
    "group": "v2",
    "number": 10,
    "questionId": "guia2-36",
    "status": "existing"
  },
  {
    "key": "v2-11",
    "group": "v2",
    "number": 11,
    "questionId": "guia2-80",
    "status": "existing"
  },
  {
    "key": "v2-12",
    "group": "v2",
    "number": 12,
    "questionId": "guia2-79",
    "status": "existing"
  },
  {
    "key": "v2-13",
    "group": "v2",
    "number": 13,
    "questionId": "guia2-82",
    "status": "existing"
  },
  {
    "key": "v2-14",
    "group": "v2",
    "number": 14,
    "questionId": "guia2-83",
    "status": "existing"
  },
  {
    "key": "v2-15",
    "group": "v2",
    "number": 15,
    "questionId": "guia2-85",
    "status": "existing"
  },
  {
    "key": "v2-16",
    "group": "v2",
    "number": 16,
    "questionId": "guia2-86",
    "status": "existing"
  },
  {
    "key": "v2-17",
    "group": "v2",
    "number": 17,
    "questionId": "guia2-91",
    "status": "existing"
  },
  {
    "key": "v2-18",
    "group": "v2",
    "number": 18,
    "questionId": "guia2-96",
    "status": "existing"
  },
  {
    "key": "v2-19",
    "group": "v2",
    "number": 19,
    "questionId": "guia2-98",
    "status": "existing"
  },
  {
    "key": "v2-20",
    "group": "v2",
    "number": 20,
    "questionId": "guia2-100",
    "status": "existing"
  },
  {
    "key": "v2-21",
    "group": "v2",
    "number": 21,
    "questionId": "guia2-104",
    "status": "existing"
  },
  {
    "key": "v2-22",
    "group": "v2",
    "number": 22,
    "questionId": "guia2-105",
    "status": "existing"
  },
  {
    "key": "v2-23",
    "group": "v2",
    "number": 23,
    "questionId": "guia2-106",
    "status": "existing"
  },
  {
    "key": "v2-24",
    "group": "v2",
    "number": 24,
    "questionId": "guia2-109",
    "status": "existing"
  },
  {
    "key": "v2-25",
    "group": "v2",
    "number": 25,
    "questionId": "guia2-110",
    "status": "existing"
  },
  {
    "key": "v2-26",
    "group": "v2",
    "number": 26,
    "questionId": "guia2-113",
    "status": "existing"
  },
  {
    "key": "v2-27",
    "group": "v2",
    "number": 27,
    "questionId": "guia2-118",
    "status": "existing"
  },
  {
    "key": "v2-28",
    "group": "v2",
    "number": 28,
    "questionId": "guia2-119",
    "status": "existing"
  },
  {
    "key": "v2-29",
    "group": "v2",
    "number": 29,
    "questionId": "guia2-121",
    "status": "existing"
  },
  {
    "key": "v2-30",
    "group": "v2",
    "number": 30,
    "questionId": "guia2-122",
    "status": "existing"
  },
  {
    "key": "v2-31",
    "group": "v2",
    "number": 31,
    "questionId": "guia2-124",
    "status": "existing"
  },
  {
    "key": "v2-32",
    "group": "v2",
    "number": 32,
    "questionId": "guia2-125",
    "status": "existing"
  },
  {
    "key": "v2-33",
    "group": "v2",
    "number": 33,
    "questionId": "guia2-126b",
    "status": "existing"
  },
  {
    "key": "v2-34",
    "group": "v2",
    "number": 34,
    "questionId": "guia2-126",
    "status": "existing"
  },
  {
    "key": "v2-35",
    "group": "v2",
    "number": 35,
    "questionId": "guia2-128",
    "status": "existing"
  },
  {
    "key": "v2-36",
    "group": "v2",
    "number": 36,
    "questionId": "guia2-130",
    "status": "existing"
  },
  {
    "key": "v2-37",
    "group": "v2",
    "number": 37,
    "questionId": "guia2-132",
    "status": "existing"
  },
  {
    "key": "v2-38",
    "group": "v2",
    "number": 38,
    "questionId": "guia2-133",
    "status": "existing"
  },
  {
    "key": "v2-39",
    "group": "v2",
    "number": 39,
    "questionId": "guia2-134",
    "status": "existing"
  },
  {
    "key": "v2-40",
    "group": "v2",
    "number": 40,
    "questionId": "guia2-137",
    "status": "existing"
  },
  {
    "key": "v2-41",
    "group": "v2",
    "number": 41,
    "questionId": "guia2-142",
    "status": "existing"
  },
  {
    "key": "v2-42",
    "group": "v2",
    "number": 42,
    "questionId": "guia2-147",
    "status": "existing"
  },
  {
    "key": "v2-43",
    "group": "v2",
    "number": 43,
    "questionId": "guia2-148",
    "status": "existing"
  },
  {
    "key": "v2-44",
    "group": "v2",
    "number": 44,
    "questionId": "guia2-151",
    "status": "existing"
  },
  {
    "key": "v2-45",
    "group": "v2",
    "number": 45,
    "questionId": "guia2-154",
    "status": "existing"
  },
  {
    "key": "v2-46",
    "group": "v2",
    "number": 46,
    "questionId": "guia2-156",
    "status": "existing"
  },
  {
    "key": "v3-1",
    "group": "v3",
    "number": 1,
    "questionId": "guia2-148",
    "status": "existing"
  },
  {
    "key": "v3-2",
    "group": "v3",
    "number": 2,
    "questionId": "guia2-152",
    "status": "existing"
  },
  {
    "key": "v3-3",
    "group": "v3",
    "number": 3,
    "questionId": "guia2-145",
    "status": "existing"
  },
  {
    "key": "v3-4",
    "group": "v3",
    "number": 4,
    "questionId": "guia2-135",
    "status": "existing"
  },
  {
    "key": "v3-5",
    "group": "v3",
    "number": 5,
    "questionId": "guia2-154",
    "status": "existing"
  },
  {
    "key": "v3-6",
    "group": "v3",
    "number": 6,
    "questionId": "guia2-211",
    "status": "existing"
  },
  {
    "key": "v3-7",
    "group": "v3",
    "number": 7,
    "questionId": "guia2-208",
    "status": "existing"
  },
  {
    "key": "v3-8",
    "group": "v3",
    "number": 8,
    "questionId": "guia2-212",
    "status": "existing"
  },
  {
    "key": "v3-9",
    "group": "v3",
    "number": 9,
    "questionId": "guia2-132",
    "status": "existing"
  },
  {
    "key": "v3-10",
    "group": "v3",
    "number": 10,
    "questionId": "guia2-161",
    "status": "existing"
  },
  {
    "key": "v3-11",
    "group": "v3",
    "number": 11,
    "questionId": "guia2-141",
    "status": "existing"
  },
  {
    "key": "v3-12",
    "group": "v3",
    "number": 12,
    "questionId": "guia2-55",
    "status": "existing"
  },
  {
    "key": "v3-13",
    "group": "v3",
    "number": 13,
    "questionId": "guia2-139",
    "status": "existing"
  },
  {
    "key": "v3-14",
    "group": "v3",
    "number": 14,
    "questionId": "guia2-188",
    "status": "existing"
  },
  {
    "key": "v3-15",
    "group": "v3",
    "number": 15,
    "questionId": "guia2-202",
    "status": "existing"
  },
  {
    "key": "v3-16",
    "group": "v3",
    "number": 16,
    "questionId": "guia2-181",
    "status": "existing"
  },
  {
    "key": "v3-17",
    "group": "v3",
    "number": 17,
    "questionId": "guia2-153",
    "status": "existing"
  },
  {
    "key": "v3-18",
    "group": "v3",
    "number": 18,
    "questionId": "guia2-136",
    "status": "existing"
  },
  {
    "key": "v3-19",
    "group": "v3",
    "number": 19,
    "questionId": "guia2-124",
    "status": "existing"
  },
  {
    "key": "v3-20",
    "group": "v3",
    "number": 20,
    "questionId": "guia2-123",
    "status": "existing"
  },
  {
    "key": "v3-21",
    "group": "v3",
    "number": 21,
    "questionId": "guia2-140",
    "status": "existing"
  },
  {
    "key": "v3-22",
    "group": "v3",
    "number": 22,
    "questionId": "guia2-138",
    "status": "existing"
  },
  {
    "key": "v3-23",
    "group": "v3",
    "number": 23,
    "questionId": "guia2-122",
    "status": "existing"
  },
  {
    "key": "v3-24",
    "group": "v3",
    "number": 24,
    "questionId": "guia2-164",
    "status": "existing"
  },
  {
    "key": "v3-25",
    "group": "v3",
    "number": 25,
    "questionId": "guia2-127",
    "status": "existing"
  },
  {
    "key": "v3-26",
    "group": "v3",
    "number": 26,
    "questionId": "guia2-120",
    "status": "existing"
  },
  {
    "key": "v3-27",
    "group": "v3",
    "number": 27,
    "questionId": "guia2-129",
    "status": "existing"
  },
  {
    "key": "v3-28",
    "group": "v3",
    "number": 28,
    "questionId": "guia2-131",
    "status": "existing"
  },
  {
    "key": "v3-29",
    "group": "v3",
    "number": 29,
    "questionId": "guia2-149",
    "status": "existing"
  },
  {
    "key": "v3-30",
    "group": "v3",
    "number": 30,
    "questionId": "guia2-155",
    "status": "existing"
  },
  {
    "key": "v3-31",
    "group": "v3",
    "number": 31,
    "questionId": "guia2-187",
    "status": "existing"
  },
  {
    "key": "v3-32",
    "group": "v3",
    "number": 32,
    "questionId": "guia2-165",
    "status": "existing"
  },
  {
    "key": "v4-2",
    "group": "v4",
    "number": 2,
    "questionId": "guia2-9",
    "status": "existing"
  },
  {
    "key": "v4-3",
    "group": "v4",
    "number": 3,
    "questionId": "guia2-10",
    "status": "existing"
  },
  {
    "key": "v4-4",
    "group": "v4",
    "number": 4,
    "questionId": "guia2-12",
    "status": "existing"
  },
  {
    "key": "v4-5",
    "group": "v4",
    "number": 5,
    "questionId": "guia2-14",
    "status": "existing"
  },
  {
    "key": "v4-6",
    "group": "v4",
    "number": 6,
    "questionId": "guia2-15",
    "status": "existing"
  },
  {
    "key": "v4-7",
    "group": "v4",
    "number": 7,
    "questionId": "guia2-17",
    "status": "existing"
  },
  {
    "key": "v4-8",
    "group": "v4",
    "number": 8,
    "questionId": "guia2-19",
    "status": "existing"
  },
  {
    "key": "v4-9",
    "group": "v4",
    "number": 9,
    "questionId": "guia2-20",
    "status": "existing"
  },
  {
    "key": "v4-10",
    "group": "v4",
    "number": 10,
    "questionId": "guia2-21",
    "status": "existing"
  },
  {
    "key": "v4-11",
    "group": "v4",
    "number": 11,
    "questionId": "guia2-22",
    "status": "existing"
  },
  {
    "key": "v4-12",
    "group": "v4",
    "number": 12,
    "questionId": "guia2-26",
    "status": "existing"
  },
  {
    "key": "v4-13",
    "group": "v4",
    "number": 13,
    "questionId": "guia2-28",
    "status": "existing"
  },
  {
    "key": "v4-14",
    "group": "v4",
    "number": 14,
    "questionId": "guia2-29",
    "status": "existing"
  },
  {
    "key": "v4-15",
    "group": "v4",
    "number": 15,
    "questionId": "guia2-32",
    "status": "existing"
  },
  {
    "key": "v4-16",
    "group": "v4",
    "number": 16,
    "questionId": "guia2-40",
    "status": "existing"
  },
  {
    "key": "v4-17",
    "group": "v4",
    "number": 17,
    "questionId": "guia2-41",
    "status": "existing"
  },
  {
    "key": "v4-18",
    "group": "v4",
    "number": 18,
    "questionId": "guia2-51",
    "status": "existing"
  },
  {
    "key": "v4-19",
    "group": "v4",
    "number": 19,
    "questionId": "guia2-52",
    "status": "existing"
  },
  {
    "key": "v4-20",
    "group": "v4",
    "number": 20,
    "questionId": "guia2-54",
    "status": "existing"
  },
  {
    "key": "v4-21",
    "group": "v4",
    "number": 21,
    "questionId": "guia2-56",
    "status": "existing"
  },
  {
    "key": "v4-22",
    "group": "v4",
    "number": 22,
    "questionId": "guia2-57",
    "status": "existing"
  },
  {
    "key": "v4-23",
    "group": "v4",
    "number": 23,
    "questionId": "guia2-59",
    "status": "existing"
  },
  {
    "key": "v4-24",
    "group": "v4",
    "number": 24,
    "questionId": "guia2-63",
    "status": "existing"
  },
  {
    "key": "v4-25",
    "group": "v4",
    "number": 25,
    "questionId": "guia2-64",
    "status": "existing"
  },
  {
    "key": "v4-26",
    "group": "v4",
    "number": 26,
    "questionId": "guia2-78",
    "status": "existing"
  },
  {
    "key": "v4-27",
    "group": "v4",
    "number": 27,
    "questionId": "guia2-81",
    "status": "existing"
  },
  {
    "key": "v4-28",
    "group": "v4",
    "number": 28,
    "questionId": "guia2-82",
    "status": "existing"
  },
  {
    "key": "v4-29",
    "group": "v4",
    "number": 29,
    "questionId": "guia2-85",
    "status": "existing"
  },
  {
    "key": "v4-30",
    "group": "v4",
    "number": 30,
    "questionId": "guia2-89",
    "status": "existing"
  },
  {
    "key": "v4-31",
    "group": "v4",
    "number": 31,
    "questionId": "guia2-92",
    "status": "existing"
  },
  {
    "key": "v4-32",
    "group": "v4",
    "number": 32,
    "questionId": "guia2-94",
    "status": "existing"
  },
  {
    "key": "v4-33",
    "group": "v4",
    "number": 33,
    "questionId": "guia2-97",
    "status": "existing"
  },
  {
    "key": "v4-34",
    "group": "v4",
    "number": 34,
    "questionId": "guia2-99",
    "status": "existing"
  },
  {
    "key": "v4-35",
    "group": "v4",
    "number": 35,
    "questionId": "guia2-100",
    "status": "existing"
  },
  {
    "key": "v4-36",
    "group": "v4",
    "number": 36,
    "questionId": "guia2-103",
    "status": "existing"
  },
  {
    "key": "v4-37",
    "group": "v4",
    "number": 37,
    "questionId": "guia2-107",
    "status": "existing"
  },
  {
    "key": "v4-38",
    "group": "v4",
    "number": 38,
    "questionId": "guia2-108",
    "status": "existing"
  },
  {
    "key": "v4-39",
    "group": "v4",
    "number": 39,
    "questionId": "guia2-111",
    "status": "existing"
  },
  {
    "key": "v4-40",
    "group": "v4",
    "number": 40,
    "questionId": "guia2-112",
    "status": "existing"
  },
  {
    "key": "v4-41",
    "group": "v4",
    "number": 41,
    "questionId": "guia2-113",
    "status": "existing"
  },
  {
    "key": "v4-42",
    "group": "v4",
    "number": 42,
    "questionId": "guia2-119",
    "status": "existing"
  },
  {
    "key": "apx3-1",
    "group": "apx3",
    "number": 1,
    "questionId": "word-apx3-1",
    "status": "new"
  },
  {
    "key": "apx3-2",
    "group": "apx3",
    "number": 2,
    "questionId": "word-apx3-2",
    "status": "new"
  },
  {
    "key": "apx3-3",
    "group": "apx3",
    "number": 3,
    "questionId": "word-apx3-3",
    "status": "new"
  },
  {
    "key": "apx3-4",
    "group": "apx3",
    "number": 4,
    "questionId": "word-apx3-4",
    "status": "new"
  },
  {
    "key": "apx3-5",
    "group": "apx3",
    "number": 5,
    "questionId": "word-apx3-5",
    "status": "new"
  },
  {
    "key": "apx3-6",
    "group": "apx3",
    "number": 6,
    "questionId": "word-apx3-6",
    "status": "pending"
  },
  {
    "key": "apx3-7",
    "group": "apx3",
    "number": 7,
    "questionId": "word-apx3-7",
    "status": "new"
  },
  {
    "key": "apx3-8",
    "group": "apx3",
    "number": 8,
    "questionId": "word-apx3-8",
    "status": "new"
  },
  {
    "key": "apx3-9",
    "group": "apx3",
    "number": 9,
    "questionId": "word-apx3-9",
    "status": "pending"
  },
  {
    "key": "apx3-10",
    "group": "apx3",
    "number": 10,
    "questionId": "word-apx3-10",
    "status": "new"
  },
  {
    "key": "apx3-11",
    "group": "apx3",
    "number": 11,
    "questionId": "word-apx3-11",
    "status": "pending"
  },
  {
    "key": "apx3-12",
    "group": "apx3",
    "number": 12,
    "questionId": "guia2-82",
    "status": "existing"
  },
  {
    "key": "apx3-13",
    "group": "apx3",
    "number": 13,
    "questionId": "word-apx3-13",
    "status": "new"
  },
  {
    "key": "apx3-14",
    "group": "apx3",
    "number": 14,
    "questionId": "word-apx3-14",
    "status": "new"
  },
  {
    "key": "apx3-15",
    "group": "apx3",
    "number": 15,
    "questionId": "word-apx3-15",
    "status": "new"
  },
  {
    "key": "apx3-16",
    "group": "apx3",
    "number": 16,
    "questionId": "word-apx3-16",
    "status": "new"
  },
  {
    "key": "apx3-17",
    "group": "apx3",
    "number": 17,
    "questionId": "word-apx3-17",
    "status": "pending"
  },
  {
    "key": "apx3-18",
    "group": "apx3",
    "number": 18,
    "questionId": "word-apx3-18",
    "status": "new"
  },
  {
    "key": "apx3-19",
    "group": "apx3",
    "number": 19,
    "questionId": "word-apx3-19",
    "status": "new"
  },
  {
    "key": "apx3-20",
    "group": "apx3",
    "number": 20,
    "questionId": "word-apx3-20",
    "status": "new"
  },
  {
    "key": "apx3-21",
    "group": "apx3",
    "number": 21,
    "questionId": "word-apx3-21",
    "status": "new"
  },
  {
    "key": "apx3-22",
    "group": "apx3",
    "number": 22,
    "questionId": "word-apx3-22",
    "status": "new"
  },
  {
    "key": "apx3-23",
    "group": "apx3",
    "number": 23,
    "questionId": "word-apx3-23",
    "status": "new"
  },
  {
    "key": "apx3-24",
    "group": "apx3",
    "number": 24,
    "questionId": "word-apx3-24",
    "status": "new"
  },
  {
    "key": "apx3-25",
    "group": "apx3",
    "number": 25,
    "questionId": "word-apx3-25",
    "status": "new"
  },
  {
    "key": "apx3-26",
    "group": "apx3",
    "number": 26,
    "questionId": "word-apx3-26",
    "status": "pending"
  },
  {
    "key": "apx3-27",
    "group": "apx3",
    "number": 27,
    "questionId": "word-apx3-27",
    "status": "new"
  },
  {
    "key": "apx3-28",
    "group": "apx3",
    "number": 28,
    "questionId": "word-apx3-28",
    "status": "new"
  },
  {
    "key": "apx3-29",
    "group": "apx3",
    "number": 29,
    "questionId": "word-apx3-29",
    "status": "pending"
  },
  {
    "key": "apx3-30",
    "group": "apx3",
    "number": 30,
    "questionId": "word-apx3-30",
    "status": "new"
  },
  {
    "key": "apx3-31",
    "group": "apx3",
    "number": 31,
    "questionId": "word-apx3-31",
    "status": "new"
  },
  {
    "key": "apx3-32",
    "group": "apx3",
    "number": 32,
    "questionId": "word-apx3-32",
    "status": "pending"
  },
  {
    "key": "apx3-33",
    "group": "apx3",
    "number": 33,
    "questionId": "word-apx3-33",
    "status": "pending"
  },
  {
    "key": "apx3-34",
    "group": "apx3",
    "number": 34,
    "questionId": "word-apx3-34",
    "status": "pending"
  },
  {
    "key": "apx3-35",
    "group": "apx3",
    "number": 35,
    "questionId": "word-apx3-35",
    "status": "new"
  },
  {
    "key": "apx3-36",
    "group": "apx3",
    "number": 36,
    "questionId": "word-apx3-36",
    "status": "pending"
  },
  {
    "key": "apx3-37",
    "group": "apx3",
    "number": 37,
    "questionId": "word-apx3-37",
    "status": "new"
  },
  {
    "key": "apx3-38",
    "group": "apx3",
    "number": 38,
    "questionId": "word-apx3-38",
    "status": "new"
  },
  {
    "key": "apx3-39",
    "group": "apx3",
    "number": 39,
    "questionId": "word-apx3-39",
    "status": "new"
  },
  {
    "key": "apx3-40",
    "group": "apx3",
    "number": 40,
    "questionId": "word-apx3-40",
    "status": "pending"
  },
  {
    "key": "apx3-41",
    "group": "apx3",
    "number": 41,
    "questionId": "guia2-18",
    "status": "existing"
  },
  {
    "key": "apx3-42",
    "group": "apx3",
    "number": 42,
    "questionId": "guia2-46",
    "status": "existing"
  },
  {
    "key": "apx3-43",
    "group": "apx3",
    "number": 43,
    "questionId": "word-apx3-43",
    "status": "new"
  },
  {
    "key": "apx3-44",
    "group": "apx3",
    "number": 44,
    "questionId": "word-apx3-44",
    "status": "pending"
  },
  {
    "key": "apx3-45",
    "group": "apx3",
    "number": 45,
    "questionId": "word-apx3-45",
    "status": "new"
  },
  {
    "key": "apx3-46",
    "group": "apx3",
    "number": 46,
    "questionId": "word-apx3-46",
    "status": "new"
  },
  {
    "key": "apx3-47",
    "group": "apx3",
    "number": 47,
    "questionId": "word-apx3-47",
    "status": "pending"
  },
  {
    "key": "apx3-48",
    "group": "apx3",
    "number": 48,
    "questionId": "word-apx3-48",
    "status": "new"
  },
  {
    "key": "apx3-49",
    "group": "apx3",
    "number": 49,
    "questionId": "word-apx3-49",
    "status": "new"
  },
  {
    "key": "apx3-50",
    "group": "apx3",
    "number": 50,
    "questionId": "word-apx3-50",
    "status": "new"
  },
  {
    "key": "apx3-51",
    "group": "apx3",
    "number": 51,
    "questionId": "word-apx3-51",
    "status": "pending"
  },
  {
    "key": "apx3-52",
    "group": "apx3",
    "number": 52,
    "questionId": "word-apx3-52",
    "status": "pending"
  },
  {
    "key": "apx3-53",
    "group": "apx3",
    "number": 53,
    "questionId": "word-apx3-53",
    "status": "pending"
  },
  {
    "key": "apx3-54",
    "group": "apx3",
    "number": 54,
    "questionId": "word-apx3-54",
    "status": "pending"
  },
  {
    "key": "apx3-55",
    "group": "apx3",
    "number": 55,
    "questionId": "word-apx3-55",
    "status": "pending"
  },
  {
    "key": "apx3-56",
    "group": "apx3",
    "number": 56,
    "questionId": "word-apx3-56",
    "status": "pending"
  },
  {
    "key": "apx3-57",
    "group": "apx3",
    "number": 57,
    "questionId": "word-apx3-57",
    "status": "new"
  },
  {
    "key": "apx3-58",
    "group": "apx3",
    "number": 58,
    "questionId": "word-apx3-58",
    "status": "new"
  },
  {
    "key": "apx3-59",
    "group": "apx3",
    "number": 59,
    "questionId": "word-apx3-59",
    "status": "new"
  },
  {
    "key": "apx3-60",
    "group": "apx3",
    "number": 60,
    "questionId": "word-apx3-60",
    "status": "new"
  },
  {
    "key": "apx3-61",
    "group": "apx3",
    "number": 61,
    "questionId": "word-apx3-61",
    "status": "pending"
  },
  {
    "key": "apx3-62",
    "group": "apx3",
    "number": 62,
    "questionId": "word-apx3-62",
    "status": "new"
  },
  {
    "key": "apx3-63",
    "group": "apx3",
    "number": 63,
    "questionId": "word-apx3-63",
    "status": "new"
  },
  {
    "key": "apx3-64",
    "group": "apx3",
    "number": 64,
    "questionId": "guia2-106",
    "status": "existing"
  },
  {
    "key": "apx3-65",
    "group": "apx3",
    "number": 65,
    "questionId": "word-apx3-65",
    "status": "pending"
  },
  {
    "key": "apx3-66",
    "group": "apx3",
    "number": 66,
    "questionId": "word-apx3-66",
    "status": "new"
  },
  {
    "key": "apx3-67",
    "group": "apx3",
    "number": 67,
    "questionId": "word-apx3-67",
    "status": "pending"
  },
  {
    "key": "apx3-68",
    "group": "apx3",
    "number": 68,
    "questionId": "word-apx3-68",
    "status": "pending"
  },
  {
    "key": "apx3-69",
    "group": "apx3",
    "number": 69,
    "questionId": "word-apx3-69",
    "status": "pending"
  },
  {
    "key": "apx3-70",
    "group": "apx3",
    "number": 70,
    "questionId": "word-apx3-70",
    "status": "new"
  },
  {
    "key": "apx3-71",
    "group": "apx3",
    "number": 71,
    "questionId": "word-apx3-71",
    "status": "new"
  },
  {
    "key": "apx3-72",
    "group": "apx3",
    "number": 72,
    "questionId": "word-apx3-72",
    "status": "new"
  },
  {
    "key": "apx3-73",
    "group": "apx3",
    "number": 73,
    "questionId": "word-apx3-73",
    "status": "pending"
  },
  {
    "key": "apx3-74",
    "group": "apx3",
    "number": 74,
    "questionId": "word-apx3-74",
    "status": "pending"
  },
  {
    "key": "apx3-75",
    "group": "apx3",
    "number": 75,
    "questionId": "word-apx3-75",
    "status": "new"
  },
  {
    "key": "apx3-76",
    "group": "apx3",
    "number": 76,
    "questionId": "word-apx3-76",
    "status": "pending"
  },
  {
    "key": "apx3-77",
    "group": "apx3",
    "number": 77,
    "questionId": "word-apx3-63",
    "status": "duplicate"
  },
  {
    "key": "apx3-78",
    "group": "apx3",
    "number": 78,
    "questionId": "word-apx3-78",
    "status": "new"
  },
  {
    "key": "apx3-79",
    "group": "apx3",
    "number": 79,
    "questionId": "word-apx3-79",
    "status": "new"
  },
  {
    "key": "apx3-80",
    "group": "apx3",
    "number": 80,
    "questionId": "word-apx3-80",
    "status": "pending"
  },
  {
    "key": "apx3-81",
    "group": "apx3",
    "number": 81,
    "questionId": "word-apx3-81",
    "status": "new"
  },
  {
    "key": "apx3-82",
    "group": "apx3",
    "number": 82,
    "questionId": "word-apx3-82",
    "status": "new"
  },
  {
    "key": "apx3-83",
    "group": "apx3",
    "number": 83,
    "questionId": "word-apx3-83",
    "status": "new"
  },
  {
    "key": "apx3-84",
    "group": "apx3",
    "number": 84,
    "questionId": "word-apx3-84",
    "status": "pending"
  },
  {
    "key": "apx3-85",
    "group": "apx3",
    "number": 85,
    "questionId": "word-apx3-85",
    "status": "new"
  },
  {
    "key": "apx3-86",
    "group": "apx3",
    "number": 86,
    "questionId": "word-apx3-58",
    "status": "duplicate"
  },
  {
    "key": "apx3-87",
    "group": "apx3",
    "number": 87,
    "questionId": "word-apx3-7",
    "status": "duplicate"
  },
  {
    "key": "apx3-88",
    "group": "apx3",
    "number": 88,
    "questionId": "word-apx3-88",
    "status": "new"
  },
  {
    "key": "apx3-89",
    "group": "apx3",
    "number": 89,
    "questionId": "word-apx3-89",
    "status": "pending"
  },
  {
    "key": "apx3-90",
    "group": "apx3",
    "number": 90,
    "questionId": "word-apx3-90",
    "status": "new"
  },
  {
    "key": "apx3-91",
    "group": "apx3",
    "number": 91,
    "questionId": "word-apx3-4",
    "status": "duplicate"
  },
  {
    "key": "apx3-92",
    "group": "apx3",
    "number": 92,
    "questionId": "word-apx3-92",
    "status": "new"
  },
  {
    "key": "apx3-93",
    "group": "apx3",
    "number": 93,
    "questionId": "word-apx3-93",
    "status": "new"
  },
  {
    "key": "apx3-info",
    "group": "apx3",
    "number": "71b",
    "questionId": "word-apx3-info",
    "status": "new"
  },
  {
    "key": "java-1",
    "group": "java",
    "number": 1,
    "questionId": "word-java-1",
    "status": "new"
  },
  {
    "key": "java-2",
    "group": "java",
    "number": 2,
    "questionId": "word-java-2",
    "status": "new"
  },
  {
    "key": "java-3",
    "group": "java",
    "number": 3,
    "questionId": "word-java-3",
    "status": "new"
  },
  {
    "key": "java-4",
    "group": "java",
    "number": 4,
    "questionId": "word-java-4",
    "status": "new"
  },
  {
    "key": "java-5",
    "group": "java",
    "number": 5,
    "questionId": "word-java-5",
    "status": "new"
  },
  {
    "key": "java-6",
    "group": "java",
    "number": 6,
    "questionId": "word-java-6",
    "status": "new"
  },
  {
    "key": "java-7",
    "group": "java",
    "number": 7,
    "questionId": "word-java-7",
    "status": "new"
  },
  {
    "key": "java-8",
    "group": "java",
    "number": 8,
    "questionId": "word-java-8",
    "status": "new"
  },
  {
    "key": "java-9",
    "group": "java",
    "number": 9,
    "questionId": "word-java-9",
    "status": "new"
  },
  {
    "key": "java-10",
    "group": "java",
    "number": 10,
    "questionId": "word-java-10",
    "status": "new"
  },
  {
    "key": "java-11",
    "group": "java",
    "number": 11,
    "questionId": "word-java-11",
    "status": "new"
  },
  {
    "key": "java-12",
    "group": "java",
    "number": 12,
    "questionId": "word-java-12",
    "status": "new"
  },
  {
    "key": "java-13",
    "group": "java",
    "number": 13,
    "questionId": "word-java-13",
    "status": "new"
  },
  {
    "key": "java-14",
    "group": "java",
    "number": 14,
    "questionId": "word-java-14",
    "status": "new"
  },
  {
    "key": "java-15",
    "group": "java",
    "number": 15,
    "questionId": "word-java-15",
    "status": "new"
  },
  {
    "key": "java-16",
    "group": "java",
    "number": 16,
    "questionId": "word-java-16",
    "status": "new"
  },
  {
    "key": "java-17",
    "group": "java",
    "number": 17,
    "questionId": "word-java-17",
    "status": "new"
  },
  {
    "key": "java-18",
    "group": "java",
    "number": 18,
    "questionId": "word-java-18",
    "status": "new"
  },
  {
    "key": "java-19",
    "group": "java",
    "number": 19,
    "questionId": "word-java-19",
    "status": "new"
  },
  {
    "key": "java-20",
    "group": "java",
    "number": 20,
    "questionId": "word-java-20",
    "status": "new"
  },
  {
    "key": "java-21",
    "group": "java",
    "number": 21,
    "questionId": "word-java-21",
    "status": "new"
  },
  {
    "key": "java-22",
    "group": "java",
    "number": 22,
    "questionId": "word-java-22",
    "status": "new"
  },
  {
    "key": "java-23",
    "group": "java",
    "number": 23,
    "questionId": "word-java-23",
    "status": "new"
  },
  {
    "key": "java-24",
    "group": "java",
    "number": 24,
    "questionId": "word-java-24",
    "status": "new"
  },
  {
    "key": "java-25",
    "group": "java",
    "number": 25,
    "questionId": "word-java-25",
    "status": "new"
  },
  {
    "key": "java-26",
    "group": "java",
    "number": 26,
    "questionId": "word-java-26",
    "status": "new"
  },
  {
    "key": "java-27",
    "group": "java",
    "number": 27,
    "questionId": "word-java-27",
    "status": "new"
  },
  {
    "key": "java-28",
    "group": "java",
    "number": 28,
    "questionId": "word-java-28",
    "status": "new"
  },
  {
    "key": "java-29",
    "group": "java",
    "number": 29,
    "questionId": "word-java-29",
    "status": "new"
  },
  {
    "key": "java-30",
    "group": "java",
    "number": 30,
    "questionId": "word-java-30",
    "status": "new"
  },
  {
    "key": "java-31",
    "group": "java",
    "number": 31,
    "questionId": "word-java-31",
    "status": "new"
  },
  {
    "key": "java-32",
    "group": "java",
    "number": 32,
    "questionId": "word-java-32",
    "status": "new"
  },
  {
    "key": "java-33",
    "group": "java",
    "number": 33,
    "questionId": "word-java-33",
    "status": "new"
  },
  {
    "key": "java-34",
    "group": "java",
    "number": 34,
    "questionId": "word-java-34",
    "status": "new"
  },
  {
    "key": "java-35",
    "group": "java",
    "number": 35,
    "questionId": "word-java-35",
    "status": "new"
  },
  {
    "key": "java-36",
    "group": "java",
    "number": 36,
    "questionId": "word-java-36",
    "status": "new"
  },
  {
    "key": "java-37",
    "group": "java",
    "number": 37,
    "questionId": "word-java-37",
    "status": "new"
  },
  {
    "key": "java-38",
    "group": "java",
    "number": 38,
    "questionId": "word-java-38",
    "status": "new"
  },
  {
    "key": "java-39",
    "group": "java",
    "number": 39,
    "questionId": "word-java-39",
    "status": "new"
  },
  {
    "key": "java-40",
    "group": "java",
    "number": 40,
    "questionId": "word-java-40",
    "status": "new"
  },
  {
    "key": "java-41",
    "group": "java",
    "number": 41,
    "questionId": "word-java-41",
    "status": "pending"
  },
  {
    "key": "java-42",
    "group": "java",
    "number": 42,
    "questionId": "word-java-27",
    "status": "duplicate"
  },
  {
    "key": "java-43",
    "group": "java",
    "number": 43,
    "questionId": "guia2-192",
    "status": "existing"
  },
  {
    "key": "java-44",
    "group": "java",
    "number": 44,
    "questionId": "word-java-44",
    "status": "new"
  },
  {
    "key": "java-45",
    "group": "java",
    "number": 45,
    "questionId": "word-java-45",
    "status": "new"
  },
  {
    "key": "java-46",
    "group": "java",
    "number": 46,
    "questionId": "word-java-46",
    "status": "new"
  },
  {
    "key": "java-47",
    "group": "java",
    "number": 47,
    "questionId": "word-java-47",
    "status": "new"
  },
  {
    "key": "java-48",
    "group": "java",
    "number": 48,
    "questionId": "guia2-112",
    "status": "existing"
  },
  {
    "key": "java-49",
    "group": "java",
    "number": 49,
    "questionId": "word-java-49",
    "status": "new"
  },
  {
    "key": "java-50",
    "group": "java",
    "number": 50,
    "questionId": "word-java-50",
    "status": "new"
  },
  {
    "key": "java-51",
    "group": "java",
    "number": 51,
    "questionId": "word-java-51",
    "status": "new"
  },
  {
    "key": "java-52",
    "group": "java",
    "number": 52,
    "questionId": "word-java-52",
    "status": "new"
  },
  {
    "key": "java-53",
    "group": "java",
    "number": 53,
    "questionId": "word-java-53",
    "status": "pending"
  }
];
window.QUESTIONS.push(...window.WORK_QUESTIONS);
