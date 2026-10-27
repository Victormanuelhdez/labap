window.QUESTIONS = [
  {
    "id": 1,
    "topic": "online",
    "question": "¿Qué componentes pertenecen a APX Online? Selecciona tres.",
    "options": [
      "Librerías",
      "Jobs",
      "DTOs",
      "Transacciones"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Online utiliza transacciones, librerías y DTOs. Los Jobs corresponden al procesamiento Batch.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 2,
    "topic": "online",
    "question": "¿Qué componente encapsula lógica de negocio y acceso a datos y publica una interfaz reutilizable?",
    "options": [
      "DTO",
      "Librería",
      "JobRepository",
      "Archivo de solicitud"
    ],
    "answer": [
      1
    ],
    "explanation": "La librería encapsula operaciones reutilizables de negocio y acceso a datos; el DTO transporta datos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 3,
    "topic": "online",
    "question": "¿Qué componente representa datos de una entidad comercial en forma de Bean?",
    "options": [
      "Job",
      "Transacción",
      "DTO",
      "JobLauncher"
    ],
    "answer": [
      2
    ],
    "explanation": "El DTO es el objeto de transferencia de datos. No es el responsable de ejecutar el negocio.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 4,
    "topic": "online",
    "question": "¿Para qué sirve setSeverity() en una transacción APX?",
    "options": [
      "Elegir la base de datos",
      "Fijar la gravedad de la notificación",
      "Configurar el país",
      "Crear un DTO"
    ],
    "answer": [
      1
    ],
    "explanation": "setSeverity() establece la severidad o gravedad de la notificación de la transacción.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 5,
    "topic": "online",
    "question": "¿Qué separa la clase abstracta de una transacción APX?",
    "options": [
      "La base de datos del sistema operativo",
      "Los parámetros de entrada y salida de la lógica de la transacción",
      "El Job de su Step",
      "Maven de Java"
    ],
    "answer": [
      1
    ],
    "explanation": "La clase abstracta agrupa el manejo de parámetros de entrada y salida y lo separa de la lógica de ejecución.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 6,
    "topic": "online",
    "question": "¿Qué describe mejor una transacción APX Online?",
    "options": [
      "Proceso por lotes exclusivo",
      "Punto de entrada que coordina una operación",
      "Contenedor de metadatos Maven",
      "Tabla de persistencia"
    ],
    "answer": [
      1
    ],
    "explanation": "La transacción recibe los parámetros y coordina el flujo de la operación, apoyándose en librerías.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 7,
    "topic": "online",
    "question": "Se requiere reutilizar una consulta desde dos transacciones. ¿Dónde ubicar la operación?",
    "options": [
      "Duplicada en ambos DTOs",
      "En una librería con interfaz",
      "En el navegador del cliente",
      "En el archivo settings.xml"
    ],
    "answer": [
      1
    ],
    "explanation": "Una librería permite reutilizar la operación sin copiar la implementación en cada transacción.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 8,
    "topic": "online",
    "question": "¿Cuál es la función principal de OSGi?",
    "options": [
      "Administrar versiones Git",
      "Gestionar módulos Java y su ciclo de vida dinámico",
      "Reemplazar el compilador javac",
      "Definir consultas SQL"
    ],
    "answer": [
      1
    ],
    "explanation": "OSGi ofrece modularidad, gestión de dependencias entre módulos y despliegue dinámico de bundles.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 9,
    "topic": "online",
    "question": "¿Qué describe un DTO correctamente?",
    "options": [
      "Transporta datos entre capas",
      "Siempre ejecuta commits",
      "Es una conexión JDBC",
      "Es un patrón de concurrencia"
    ],
    "answer": [
      0
    ],
    "explanation": "Un DTO transporta información; no debe confundirse con la librería ni con el acceso a la base.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 10,
    "topic": "online",
    "question": "¿Qué capacidades aparecen como correctas en el ejemplo APX? Selecciona dos.",
    "options": [
      "Procesamiento transaccional",
      "Procesamiento Batch",
      "Ausencia de integración con seguridad",
      "Cold Deployment"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "El ejemplo identifica procesamiento transaccional y Batch como capacidades correctas.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 11,
    "topic": "online",
    "question": "¿Qué componente NO es propio de APX Online en la clasificación del material?",
    "options": [
      "Transacción",
      "DTO",
      "Job",
      "Librería"
    ],
    "answer": [
      2
    ],
    "explanation": "Job es la unidad de proceso por lotes, mientras Online utiliza transacciones.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 12,
    "topic": "online",
    "question": "¿Qué problema hay si un DTO realiza consultas y modifica la base directamente?",
    "options": [
      "Tiene demasiados campos únicamente",
      "Mezcla transporte de datos con acceso y lógica",
      "Impide usar getters",
      "Obliga a usar un Set"
    ],
    "answer": [
      1
    ],
    "explanation": "El DTO debe transportar datos. Ejecutar operaciones mezcla responsabilidades que corresponden a otras piezas.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 13,
    "topic": "cli",
    "question": "¿Qué es APX CLI?",
    "options": [
      "Herramienta de línea de comandos para trabajar con componentes APX",
      "Consola SQL",
      "Servidor de producción",
      "Biblioteca de pruebas unitarias"
    ],
    "answer": [
      0
    ],
    "explanation": "APX CLI es la herramienta de comandos utilizada para crear y operar el andamio de componentes APX.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 14,
    "topic": "cli",
    "question": "¿Dónde se declara la dependencia de JDBC Utility?",
    "options": [
      "config.yaml",
      "pom.xml",
      "settings.yaml",
      "package.json"
    ],
    "answer": [
      1
    ],
    "explanation": "Las dependencias Maven de la aplicación se declaran en pom.xml.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 15,
    "topic": "cli",
    "question": "¿Qué archivos configura APX CLI al agregar JDBC Utility? Selecciona tres.",
    "options": [
      "library-arc-osgi.xml",
      "library-arc.xml",
      "settings.xml",
      "pom.xml"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "La respuesta corregida del ejemplo señala library-arc-osgi.xml, library-arc.xml y pom.xml.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 16,
    "topic": "cli",
    "question": "En apx deploy local --runtime=online --country=ESP -y, ¿qué significa ESP?",
    "options": [
      "Idioma español de la interfaz",
      "País o región España para el despliegue",
      "Modo de depuración",
      "Tipo de Job"
    ],
    "answer": [
      1
    ],
    "explanation": "--country=ESP selecciona España; no define el idioma de los mensajes.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 17,
    "topic": "cli",
    "question": "¿Qué comando inicializa una unidad de despliegue de librería?",
    "options": [
      "apx init du-lib",
      "apx init du-batch",
      "apx send req",
      "apx show in"
    ],
    "answer": [
      0
    ],
    "explanation": "El ejemplo identifica apx init du-lib como inicialización de una unidad de despliegue de librería.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 18,
    "topic": "cli",
    "question": "¿Qué comando envía una solicitud de transacción?",
    "options": [
      "apx show in",
      "apx send req",
      "apx check --repair",
      "apx init dto"
    ],
    "answer": [
      1
    ],
    "explanation": "apx send req envía la solicitud; show in muestra información y los comandos init inicializan componentes.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 19,
    "topic": "cli",
    "question": "¿Qué es el entorno local APX?",
    "options": [
      "Entorno productivo bancario",
      "Entorno para probar y depurar transacciones y Jobs",
      "Repositorio Maven remoto",
      "Servicio exclusivo de autenticación"
    ],
    "answer": [
      1
    ],
    "explanation": "El entorno local está orientado a pruebas y depuración durante el desarrollo.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 20,
    "topic": "cli",
    "question": "¿Qué describe APX Operation Console?",
    "options": [
      "Herramienta web de gestión, configuración y consulta de componentes y Jobs",
      "Compilador Java",
      "Editor de DTOs únicamente",
      "Gestor de ramas Git"
    ],
    "answer": [
      0
    ],
    "explanation": "La consola de operación permite gestionar y verificar componentes y consultar Jobs ejecutados o en ejecución.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 21,
    "topic": "cli",
    "question": "¿Qué archivo configura dependencias, construcción y metadatos de un proyecto Maven?",
    "options": [
      "pom.xml",
      "package.json",
      "apx.yaml",
      "README.md"
    ],
    "answer": [
      0
    ],
    "explanation": "pom.xml es el descriptor Maven del proyecto.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 22,
    "topic": "cli",
    "question": "¿Qué fase Maven genera el JAR sin instalarlo en el repositorio local?",
    "options": [
      "compile",
      "clean",
      "package",
      "install"
    ],
    "answer": [
      2
    ],
    "explanation": "package produce el artefacto. install además lo instala en el repositorio Maven local.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 23,
    "topic": "cli",
    "question": "¿Qué hace mvn clean?",
    "options": [
      "Elimina normalmente el directorio target",
      "Borra el código fuente",
      "Publica el artefacto remoto",
      "Ejecuta solamente JUnit"
    ],
    "answer": [
      0
    ],
    "explanation": "clean elimina salidas generadas de construcciones anteriores; no elimina el código fuente.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 24,
    "topic": "cli",
    "question": "¿Dónde se declaran los plugins de construcción en pom.xml?",
    "options": [
      "En build/plugins",
      "En dependencies únicamente",
      "En el código de main",
      "En un DTO"
    ],
    "answer": [
      0
    ],
    "explanation": "Los plugins de construcción se configuran dentro de la sección build, normalmente en plugins.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 25,
    "topic": "cli",
    "question": "¿Qué hace mvn install además de las fases anteriores del ciclo?",
    "options": [
      "Instala el artefacto en el repositorio local",
      "Despliega automáticamente a producción",
      "Genera una rama Git",
      "Configura el lenguaje de APX"
    ],
    "answer": [
      0
    ],
    "explanation": "install instala el artefacto construido en el repositorio local para usarlo como dependencia.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 26,
    "topic": "cli",
    "question": "¿Para qué sirve Import-Package en un bundle OSGi?",
    "options": [
      "Declarar paquetes que necesita importar",
      "Configurar plugins Maven",
      "Definir una clave primaria",
      "Crear parámetros de Job"
    ],
    "answer": [
      0
    ],
    "explanation": "Import-Package expresa los paquetes externos que el bundle necesita para resolver sus dependencias.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 27,
    "topic": "batch",
    "question": "¿Qué componentes pertenecen a APX Batch? Selecciona tres.",
    "options": [
      "Librerías",
      "Jobs",
      "DTOs",
      "Transacciones Online"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "La respuesta corregida del ejemplo incluye librerías, Jobs y DTOs; no transacciones Online.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 28,
    "topic": "batch",
    "question": "¿Qué es un Job en Spring Batch?",
    "options": [
      "Una fila de negocio",
      "La entidad que encapsula el proceso por lotes",
      "Una interfaz de ordenación",
      "Un callback HTTP"
    ],
    "answer": [
      1
    ],
    "explanation": "Un Job representa el proceso por lotes completo y organiza sus Steps.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 29,
    "topic": "batch",
    "question": "¿Qué representa un Step?",
    "options": [
      "Una etapa independiente de un Job",
      "Todo el servidor APX",
      "Una colección Java",
      "Un repositorio Maven"
    ],
    "answer": [
      0
    ],
    "explanation": "Un Step encapsula una etapa del procesamiento de un Job.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 30,
    "topic": "batch",
    "question": "¿Cuáles son las dos formas de implementar un Step del ejemplo? Selecciona dos.",
    "options": [
      "Chunk",
      "Tasklet",
      "JobRepository",
      "DTO"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "El ejemplo distingue procesamiento orientado a chunks y ejecución mediante Tasklet.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 31,
    "topic": "batch",
    "question": "¿Para qué sirve JobRepository?",
    "options": [
      "Persistir metadatos de ejecución de Jobs y Steps",
      "Transformar cada elemento",
      "Ordenar una colección",
      "Compilar las clases"
    ],
    "answer": [
      0
    ],
    "explanation": "JobRepository conserva metadatos del procesamiento, como ejecuciones y estados; no sustituye el repositorio de negocio.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 32,
    "topic": "batch",
    "question": "¿Qué función desempeña un Tasklet?",
    "options": [
      "Ejecutar una tarea concreta dentro de un Step",
      "Representar todo el histórico",
      "Transportar datos al cliente",
      "Leer obligatoriamente una fila por llamada"
    ],
    "answer": [
      0
    ],
    "explanation": "Tasklet implementa una operación específica del Step, por ejemplo una tarea de preparación o limpieza.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 33,
    "topic": "batch",
    "question": "¿Cuál es el orden conceptual del procesamiento por chunks?",
    "options": [
      "Writer → Reader → Processor",
      "Reader → Processor → Writer",
      "Processor → Writer → Reader",
      "JobRepository → DTO → Maven"
    ],
    "answer": [
      1
    ],
    "explanation": "Reader lee, Processor transforma o valida y Writer escribe el resultado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 34,
    "topic": "batch",
    "question": "¿Qué devuelve normalmente ItemReader al agotarse la entrada?",
    "options": [
      "null",
      "Siempre una excepción",
      "Un Job nuevo",
      "Un DTO vacío obligatorio"
    ],
    "answer": [
      0
    ],
    "explanation": "El lector devuelve null para señalar el final de los datos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 35,
    "topic": "batch",
    "question": "¿Qué efecto tiene que ItemProcessor devuelva null para un elemento?",
    "options": [
      "Filtra ese elemento",
      "Finaliza todo el Job automáticamente",
      "Obliga a escribir null",
      "Hace un commit global"
    ],
    "answer": [
      0
    ],
    "explanation": "Un resultado null filtra el elemento: no se entrega al Writer como resultado procesado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 36,
    "topic": "batch",
    "question": "¿Qué controla el tamaño del chunk?",
    "options": [
      "Cuántos elementos se procesan por bloque transaccional",
      "Cuántas JVM existen",
      "Cuántas opciones tiene un reactivo",
      "El nombre del DTO"
    ],
    "answer": [
      0
    ],
    "explanation": "El tamaño del chunk fija el bloque de elementos trabajado antes del límite de confirmación configurado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 37,
    "topic": "batch",
    "question": "¿Qué componente se utiliza para lanzar un Job?",
    "options": [
      "JobLauncher",
      "ItemProcessor",
      "Comparator",
      "StringBuilder"
    ],
    "answer": [
      0
    ],
    "explanation": "JobLauncher inicia la ejecución de un Job con sus parámetros.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 38,
    "topic": "batch",
    "question": "¿Qué caracteriza un proceso Batch frente a uno Online?",
    "options": [
      "Trabajo por lotes y etapas",
      "Respuesta interactiva obligatoria por cada registro",
      "Ausencia total de transacciones",
      "Prohibición de persistencia"
    ],
    "answer": [
      0
    ],
    "explanation": "Batch procesa volúmenes por lotes; Online atiende operaciones interactivas o transaccionales.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 39,
    "topic": "batch",
    "question": "Un Writer falla al escribir un chunk. ¿Qué unidad debe conservar consistencia transaccional?",
    "options": [
      "El chunk afectado según la configuración",
      "Todos los Jobs históricos",
      "Solamente el último DTO",
      "El archivo pom.xml"
    ],
    "answer": [
      0
    ],
    "explanation": "El bloque transaccional afectado debe revertirse según su configuración. No implica deshacer chunks ya confirmados.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 40,
    "topic": "batch",
    "question": "¿Qué permite diferenciar lógicamente una instancia de Job?",
    "options": [
      "El Job y sus parámetros identificadores",
      "El color del log",
      "El número de DTOs",
      "El nombre del IDE"
    ],
    "answer": [
      0
    ],
    "explanation": "La identidad de JobInstance depende del Job y los parámetros identificadores. No equivale a cada intento de ejecución.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 41,
    "topic": "java",
    "question": "¿Qué ejecuta el bytecode de Java?",
    "options": [
      "JVM",
      "javac",
      "Maven exclusivamente",
      "Jira"
    ],
    "answer": [
      0
    ],
    "explanation": "La JVM ejecuta bytecode. javac compila archivos fuente a archivos .class.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 42,
    "topic": "java",
    "question": "¿Cuál es el propósito de javac?",
    "options": [
      "Compilar fuente Java a bytecode",
      "Ejecutar SQL",
      "Desplegar un Job APX",
      "Crear dependencias Maven"
    ],
    "answer": [
      0
    ],
    "explanation": "javac es el compilador; la ejecución corresponde a la JVM.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 43,
    "topic": "java",
    "question": "¿Qué incluye herramientas para desarrollar y compilar Java?",
    "options": [
      "JDK",
      "Solo JVM",
      "Un DTO",
      "JobRepository"
    ],
    "answer": [
      0
    ],
    "explanation": "El JDK incluye herramientas de desarrollo como javac y un entorno para ejecutar Java.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 44,
    "topic": "java",
    "question": "¿Qué caracteriza al JRE?",
    "options": [
      "Entorno de ejecución y bibliotecas",
      "Editor de código obligatorio",
      "Sistema de control de versiones",
      "Compilador exclusivamente"
    ],
    "answer": [
      0
    ],
    "explanation": "El JRE es el concepto de entorno para ejecutar Java: JVM y bibliotecas. El empaquetado varía según la distribución.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 45,
    "topic": "java",
    "question": "¿Qué tipo resulta de restar un short a un double?",
    "options": [
      "short",
      "int",
      "float",
      "double"
    ],
    "answer": [
      3
    ],
    "explanation": "La promoción numérica binaria convierte el short a double; el resultado es double.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 46,
    "topic": "java",
    "question": "¿Qué resultado tiene sumar dos valores byte sin un cast?",
    "options": [
      "byte",
      "short",
      "int",
      "long obligatorio"
    ],
    "answer": [
      2
    ],
    "explanation": "Los operandos byte se promocionan a int en la operación aritmética.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 47,
    "topic": "java",
    "question": "¿Qué palabras clave están relacionadas con excepciones?",
    "options": [
      "try, catch, finally, throw, throws",
      "try, catch, final, throw",
      "Error, Exception, Throwable",
      "public, static, void"
    ],
    "answer": [
      0
    ],
    "explanation": "finally es el bloque de cierre; final es un modificador diferente.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 48,
    "topic": "java",
    "question": "¿Qué exige una excepción checked?",
    "options": [
      "Capturarla o declararla si puede propagarse",
      "Ignorarla siempre",
      "Heredar de Error",
      "Usar finally obligatorio"
    ],
    "answer": [
      0
    ],
    "explanation": "El compilador exige tratamiento o declaración de las checked que pueden propagarse.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 49,
    "topic": "java",
    "question": "¿Qué diferencia hay entre throw y throws?",
    "options": [
      "throw lanza; throws declara",
      "throws lanza; throw declara",
      "Ambos crean un catch",
      "Ambos son clases"
    ],
    "answer": [
      0
    ],
    "explanation": "throw ejecuta el lanzamiento de una excepción; throws forma parte de la firma del método.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 50,
    "topic": "java",
    "question": "¿Qué afirmación es correcta sobre String?",
    "options": [
      "Es inmutable",
      "Es modificable con toUpperCase sin asignar",
      "Siempre usa la misma referencia",
      "Es un tipo primitivo"
    ],
    "answer": [
      0
    ],
    "explanation": "Las operaciones que cambian el contenido devuelven otro String; no cambian el original.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 51,
    "topic": "java",
    "question": "¿Cuándo genera el compilador un constructor sin parámetros?",
    "options": [
      "Cuando no se declara ningún constructor",
      "Siempre",
      "Solo si la clase es public",
      "Cuando hay un constructor con argumentos"
    ],
    "answer": [
      0
    ],
    "explanation": "Al declarar cualquier constructor, el compilador deja de generar automáticamente el constructor por defecto.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 52,
    "topic": "java",
    "question": "¿Cómo se llama a otro constructor de la misma clase en Java 11?",
    "options": [
      "this() como primera instrucción",
      "super() siempre",
      "new()",
      "this.constructor()"
    ],
    "answer": [
      0
    ],
    "explanation": "this(...) encadena constructores de la misma clase y debe ser la primera instrucción en Java 11.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 53,
    "topic": "java",
    "question": "¿Qué condición define una interfaz funcional?",
    "options": [
      "Un único método abstracto",
      "Ningún método implementado",
      "Una sola clase usuaria",
      "Todos los métodos static"
    ],
    "answer": [
      0
    ],
    "explanation": "Una interfaz funcional tiene un solo método abstracto; puede tener métodos default o static.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 54,
    "topic": "java",
    "question": "¿Qué interfaz recibe un valor y devuelve boolean?",
    "options": [
      "Predicate",
      "Consumer",
      "Supplier",
      "Runnable"
    ],
    "answer": [
      0
    ],
    "explanation": "Predicate<T> evalúa una condición sobre un valor y devuelve boolean.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 55,
    "topic": "java",
    "question": "¿Qué interfaz transforma un T en un R?",
    "options": [
      "Function<T,R>",
      "Consumer<T>",
      "Supplier<T>",
      "Runnable"
    ],
    "answer": [
      0
    ],
    "explanation": "Function<T,R> representa una transformación de entrada a salida.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 56,
    "topic": "java",
    "question": "¿Qué interfaz recibe un valor sin devolver resultado?",
    "options": [
      "Consumer",
      "Predicate",
      "Supplier",
      "Comparator"
    ],
    "answer": [
      0
    ],
    "explanation": "Consumer<T> acepta un valor y produce efectos sin devolver un resultado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 57,
    "topic": "java",
    "question": "¿Qué indica Optional.empty()?",
    "options": [
      "Ausencia de valor",
      "Un valor null que get devuelve",
      "Una lista vacía obligatoria",
      "Una excepción capturada"
    ],
    "answer": [
      0
    ],
    "explanation": "Optional.empty() representa ausencia. Llamar get() en él lanza NoSuchElementException.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 58,
    "topic": "java",
    "question": "¿Qué es encapsulamiento?",
    "options": [
      "Controlar el acceso al estado interno",
      "Crear dos clases idénticas",
      "Heredar de todas las clases",
      "Usar variables globales públicas"
    ],
    "answer": [
      0
    ],
    "explanation": "Encapsular protege el estado y expone operaciones controladas.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 59,
    "topic": "colecciones",
    "question": "¿Cuáles son propiedades de ArrayList? Selecciona dos.",
    "options": [
      "Tamaño fijo",
      "Mantiene orden de inserción",
      "Es mutable",
      "Prohíbe duplicados"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "ArrayList mantiene una secuencia ordenada por inserción y es mutable. No ordena automáticamente por valor.",
    "code": "",
    "type": "multiple",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 60,
    "topic": "colecciones",
    "question": "¿Qué estructura evita elementos duplicados según equals/hashCode?",
    "options": [
      "HashSet",
      "ArrayList",
      "LinkedList",
      "StringBuilder"
    ],
    "answer": [
      0
    ],
    "explanation": "HashSet utiliza igualdad y hash para evitar elementos duplicados.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 61,
    "topic": "colecciones",
    "question": "¿Qué representa un Map?",
    "options": [
      "Asociaciones clave-valor",
      "Una lista sin duplicados",
      "Una pila obligatoria",
      "Una interfaz funcional sin métodos"
    ],
    "answer": [
      0
    ],
    "explanation": "Map asocia claves únicas a valores; los valores sí pueden repetirse.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 62,
    "topic": "colecciones",
    "question": "¿Qué interfaz define el orden natural de una clase?",
    "options": [
      "Comparable",
      "Comparator",
      "Consumer",
      "Iterable"
    ],
    "answer": [
      0
    ],
    "explanation": "Comparable define compareTo en la clase. Comparator define una comparación externa.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 63,
    "topic": "colecciones",
    "question": "¿Qué interfaz permite distintas estrategias externas de ordenación?",
    "options": [
      "Comparator",
      "Comparable",
      "Serializable",
      "Runnable"
    ],
    "answer": [
      0
    ],
    "explanation": "Comparator permite definir órdenes distintos sin modificar el orden natural de la clase.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 64,
    "topic": "colecciones",
    "question": "Si equals dice que dos objetos son iguales, ¿qué debe cumplir hashCode?",
    "options": [
      "Devolver el mismo hash",
      "Devolver hashes distintos",
      "No existir",
      "Ser aleatorio siempre"
    ],
    "answer": [
      0
    ],
    "explanation": "Objetos iguales deben tener el mismo hash; hashes iguales no garantizan igualdad.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 65,
    "topic": "colecciones",
    "question": "¿Qué operación Stream transforma cada elemento?",
    "options": [
      "map",
      "filter",
      "count",
      "forEach"
    ],
    "answer": [
      0
    ],
    "explanation": "map transforma; filter selecciona elementos según un predicado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 66,
    "topic": "colecciones",
    "question": "¿Qué operación Stream selecciona elementos según una condición?",
    "options": [
      "filter",
      "map",
      "reduce",
      "sorted únicamente"
    ],
    "answer": [
      0
    ],
    "explanation": "filter deja pasar los elementos cuyo predicado resulta true.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 67,
    "topic": "colecciones",
    "question": "¿Cuál es una operación terminal de Stream?",
    "options": [
      "collect",
      "filter",
      "map",
      "distinct"
    ],
    "answer": [
      0
    ],
    "explanation": "collect consume el Stream y acumula un resultado. Las otras operaciones son intermedias.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 68,
    "topic": "colecciones",
    "question": "¿Cuándo se ejecutan normalmente las operaciones intermedias de un Stream?",
    "options": [
      "Al ejecutar la operación terminal",
      "En cuanto se declara cada una",
      "Solo al crear un List",
      "Nunca"
    ],
    "answer": [
      0
    ],
    "explanation": "Los Streams son perezosos: las operaciones intermedias se evalúan al consumir el flujo con una terminal.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 69,
    "topic": "colecciones",
    "question": "¿Se puede volver a consumir un Stream después de una operación terminal?",
    "options": [
      "No; hay que crear un nuevo Stream",
      "Sí, indefinidamente",
      "Solo si tiene map",
      "Solo si es paralelo"
    ],
    "answer": [
      0
    ],
    "explanation": "Un Stream se consume una sola vez. Reutilizarlo después de la terminal causa IllegalStateException.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 70,
    "topic": "colecciones",
    "question": "¿Qué estructura mantiene elementos ordenados por un comparador u orden natural?",
    "options": [
      "TreeSet",
      "HashSet",
      "HashMap",
      "ArrayList automáticamente"
    ],
    "answer": [
      0
    ],
    "explanation": "TreeSet mantiene orden y usa la comparación para decidir equivalencia de elementos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 71,
    "topic": "patrones",
    "question": "¿Qué patrón controla una única instancia y un punto de acceso global?",
    "options": [
      "Singleton",
      "Strategy",
      "Observer",
      "Factory Method"
    ],
    "answer": [
      0
    ],
    "explanation": "Singleton controla la creación de una instancia y ofrece acceso a ella.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 72,
    "topic": "patrones",
    "question": "¿Qué patrón permite variar un algoritmo usando implementaciones intercambiables?",
    "options": [
      "Strategy",
      "Singleton",
      "Composite",
      "State"
    ],
    "answer": [
      0
    ],
    "explanation": "Strategy encapsula algoritmos alternativos y permite elegir uno a través de un contrato común.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 73,
    "topic": "patrones",
    "question": "¿Qué patrón permite variar el comportamiento de un objeto cuando cambia su estado?",
    "options": [
      "State",
      "Observer",
      "Builder",
      "Adapter"
    ],
    "answer": [
      0
    ],
    "explanation": "State delega comportamiento a objetos que representan estados internos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 74,
    "topic": "patrones",
    "question": "¿Qué patrón notifica a suscriptores cuando un objeto cambia?",
    "options": [
      "Observer",
      "Singleton",
      "Factory",
      "Composite"
    ],
    "answer": [
      0
    ],
    "explanation": "Observer establece una relación de notificación entre el sujeto y sus observadores.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 75,
    "topic": "patrones",
    "question": "¿Qué patrón representa jerarquías parte-todo y trata hojas y grupos uniformemente?",
    "options": [
      "Composite",
      "Strategy",
      "Adapter",
      "Command"
    ],
    "answer": [
      0
    ],
    "explanation": "Composite organiza objetos en árboles y ofrece una interfaz común para elementos individuales y conjuntos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 76,
    "topic": "patrones",
    "question": "¿Qué patrón adapta una interfaz existente a otra requerida?",
    "options": [
      "Adapter",
      "Observer",
      "State",
      "Singleton"
    ],
    "answer": [
      0
    ],
    "explanation": "Adapter conecta interfaces incompatibles mediante un adaptador.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 77,
    "topic": "patrones",
    "question": "¿Qué patrón encapsula una solicitud como un objeto?",
    "options": [
      "Command",
      "Builder",
      "Composite",
      "Singleton"
    ],
    "answer": [
      0
    ],
    "explanation": "Command representa una acción o solicitud como objeto, facilitando colas y ejecución desacoplada.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 78,
    "topic": "patrones",
    "question": "¿Qué patrón facilita construir objetos complejos paso a paso?",
    "options": [
      "Builder",
      "State",
      "Observer",
      "Adapter"
    ],
    "answer": [
      0
    ],
    "explanation": "Builder separa el proceso de construcción y permite componer un objeto por pasos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 79,
    "topic": "patrones",
    "question": "¿Qué describe el antipatrón The Blob del material?",
    "options": [
      "Una clase o librería concentra demasiadas responsabilidades",
      "Una columna binaria siempre inválida",
      "Un Job con varios Steps",
      "Una interfaz funcional"
    ],
    "answer": [
      0
    ],
    "explanation": "The Blob concentra demasiada funcionalidad, aumenta el acoplamiento y dificulta las pruebas. No es lo mismo que un tipo BLOB en SQL.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 80,
    "topic": "patrones",
    "question": "¿Qué solución propone el material para The Blob?",
    "options": [
      "Redistribuir comportamiento entre librerías relacionadas según responsabilidades",
      "Agregar más métodos a la misma clase",
      "Eliminar todas las interfaces",
      "Crear variables globales"
    ],
    "answer": [
      0
    ],
    "explanation": "La solución es repartir responsabilidades entre componentes coherentes y reducir el acoplamiento.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 81,
    "topic": "patrones",
    "question": "En la arquitectura estudiada, ASO accede directamente a la base saltándose APX. ¿Qué riesgo aparece?",
    "options": [
      "Omitir validaciones y control transaccional de APX",
      "Mejorar automáticamente la consistencia",
      "Eliminar la necesidad de seguridad",
      "Obligar a usar SOAP"
    ],
    "answer": [
      0
    ],
    "explanation": "Ese acceso puede saltarse reglas y controles de la capa responsable y crear caminos de acceso duplicados.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 82,
    "topic": "patrones",
    "question": "¿Qué favorece una interfaz de librería bien definida?",
    "options": [
      "Reutilización y menor acoplamiento",
      "Exponer todos los detalles internos",
      "Duplicar reglas en los clientes",
      "Evitar todas las pruebas"
    ],
    "answer": [
      0
    ],
    "explanation": "Un contrato permite reutilizar operaciones sin depender de los detalles internos de implementación.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 83,
    "topic": "pruebas",
    "question": "¿Qué verifica assertEquals en JUnit?",
    "options": [
      "Igualdad de valores",
      "Identidad de referencia exclusivamente",
      "Tiempo máximo del Job",
      "Presencia de una excepción siempre"
    ],
    "answer": [
      0
    ],
    "explanation": "assertEquals comprueba igualdad. assertSame verifica identidad de referencia.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 84,
    "topic": "pruebas",
    "question": "¿Cuáles son las fases Arrange, Act, Assert?",
    "options": [
      "Preparar, ejecutar, verificar",
      "Compilar, desplegar, borrar",
      "Leer, procesar, escribir",
      "Crear, actualizar, eliminar"
    ],
    "answer": [
      0
    ],
    "explanation": "Arrange prepara datos y dependencias; Act ejecuta el método; Assert verifica el resultado o comportamiento.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 85,
    "topic": "pruebas",
    "question": "¿Para qué se utiliza Mockito?",
    "options": [
      "Simular dependencias y verificar interacciones",
      "Compilar Java",
      "Crear tablas SQL",
      "Sustituir todas las aserciones"
    ],
    "answer": [
      0
    ],
    "explanation": "Mockito crea dobles de prueba para aislar la unidad y controlar las respuestas de sus dependencias.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 86,
    "topic": "pruebas",
    "question": "¿Qué comprueba verify en Mockito?",
    "options": [
      "Una interacción esperada con un mock",
      "La cobertura total de clases",
      "El despliegue productivo",
      "El valor de una clave primaria"
    ],
    "answer": [
      0
    ],
    "explanation": "verify permite comprobar llamadas realizadas a un mock y, si se indica, su frecuencia.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 87,
    "topic": "pruebas",
    "question": "¿Qué hace when(...).thenReturn(...) en Mockito?",
    "options": [
      "Define una respuesta simulada",
      "Llama a un Job remoto",
      "Ejecuta un commit",
      "Valida una excepción checked"
    ],
    "answer": [
      0
    ],
    "explanation": "El stubbing configura qué devuelve una dependencia simulada para una llamada determinada.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 88,
    "topic": "pruebas",
    "question": "¿Qué prueba corresponde a una regla que rechaza un monto negativo?",
    "options": [
      "Caso negativo con verificación del rechazo",
      "Solo un caso exitoso",
      "Solo revisar el pom.xml",
      "Probar el navegador"
    ],
    "answer": [
      0
    ],
    "explanation": "Hay que preparar el monto inválido, ejecutar y verificar la excepción o rechazo y la ausencia de efectos indebidos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 89,
    "topic": "pruebas",
    "question": "¿Qué significa ACID?",
    "options": [
      "Atomicidad, consistencia, aislamiento, durabilidad",
      "Autenticación, caché, interfaces, datos",
      "Asincronía, compilación, inyección, despliegue",
      "Acceso, conexión, índice, DTO"
    ],
    "answer": [
      0
    ],
    "explanation": "ACID son las propiedades transaccionales: atomicidad, consistencia, aislamiento y durabilidad.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 90,
    "topic": "pruebas",
    "question": "¿Qué propiedad exige aplicar todas las operaciones de una transacción o ninguna?",
    "options": [
      "Atomicidad",
      "Durabilidad",
      "Herencia",
      "Polimorfismo"
    ],
    "answer": [
      0
    ],
    "explanation": "Atomicidad evita que una transacción quede aplicada parcialmente.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 91,
    "topic": "pruebas",
    "question": "¿Qué confirma los cambios de una transacción?",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "SELECT",
      "DROP"
    ],
    "answer": [
      0
    ],
    "explanation": "COMMIT confirma cambios; ROLLBACK revierte cambios pendientes de confirmación.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 92,
    "topic": "pruebas",
    "question": "¿Qué hace ROLLBACK en una transacción local?",
    "options": [
      "Revierte cambios no confirmados en su ámbito",
      "Revierte cualquier sistema externo automáticamente",
      "Restaura toda la base a ayer",
      "Elimina una tabla siempre"
    ],
    "answer": [
      0
    ],
    "explanation": "ROLLBACK actúa en el ámbito transaccional local. No revierte automáticamente operaciones de sistemas externos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 93,
    "topic": "pruebas",
    "question": "Un servicio externo da timeout después de recibir un abono. ¿Qué evita duplicarlo al reintentar?",
    "options": [
      "Una clave de idempotencia estable y consultar el estado",
      "Un nuevo identificador en cada intento",
      "Reintentos sin límite",
      "Suponer que nunca se ejecutó"
    ],
    "answer": [
      0
    ],
    "explanation": "El timeout deja un resultado incierto. Consultar el estado y reutilizar la misma clave permite evitar duplicados.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 94,
    "topic": "pruebas",
    "question": "¿Qué código HTTP indica falta de autenticación válida?",
    "options": [
      "401",
      "403",
      "404",
      "500"
    ],
    "answer": [
      0
    ],
    "explanation": "401 indica que falta autenticación válida; 403 indica que el acceso está prohibido.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 95,
    "topic": "pruebas",
    "question": "¿Qué código HTTP indica que el acceso está prohibido?",
    "options": [
      "403",
      "401",
      "201",
      "200"
    ],
    "answer": [
      0
    ],
    "explanation": "403 expresa que el servidor rechaza el acceso. En el caso típico estudiado, el usuario está autenticado pero no autorizado.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 96,
    "topic": "pruebas",
    "question": "¿Qué utilidad tiene un PreparedStatement?",
    "options": [
      "Parametrizar valores SQL y separar datos de la sentencia",
      "Concatenar entradas sin validar",
      "Hacer commits globales",
      "Eliminar la necesidad de conexión"
    ],
    "answer": [
      0
    ],
    "explanation": "Los parámetros evitan concatenar valores del usuario dentro del SQL. Los identificadores dinámicos requieren un tratamiento aparte.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 97,
    "topic": "pruebas",
    "question": "¿Qué identifica una clave primaria?",
    "options": [
      "De forma única una fila",
      "Una tabla externa obligatoriamente",
      "Una operación Maven",
      "Una excepción Java"
    ],
    "answer": [
      0
    ],
    "explanation": "La clave primaria identifica una fila de manera única y no admite valores nulos.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 98,
    "topic": "pruebas",
    "question": "¿Qué hace una clave foránea?",
    "options": [
      "Relaciona registros con una clave referenciada",
      "Duplica automáticamente todas las filas",
      "Sustituye la clave primaria en toda tabla",
      "Crea un índice en cualquier motor siempre"
    ],
    "answer": [
      0
    ],
    "explanation": "La clave foránea establece una referencia entre tablas y permite exigir integridad referencial.",
    "code": "",
    "type": "single",
    "difficulty": "Media",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 99,
    "topic": "java",
    "question": "¿Qué imprime este fragmento?",
    "options": [
      "message",
      "MESSAGE",
      "No compila",
      "Lanza una excepción"
    ],
    "answer": [
      0
    ],
    "explanation": "String es inmutable. toUpperCase devuelve otro valor que aquí se descarta.",
    "code": "String msg = \"message\";\nmsg.toUpperCase();\nSystem.out.println(msg);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 100,
    "topic": "java",
    "question": "¿Qué ocurre con esta fecha?",
    "options": [
      "1997-MAY-50",
      "1997-JUN-19",
      "Excepción en ejecución",
      "Error de compilación"
    ],
    "answer": [
      2
    ],
    "explanation": "LocalDate.of valida el día del mes; mayo no tiene un día 50. Lanza DateTimeException.",
    "code": "LocalDate date = LocalDate.of(1997, Month.MAY, 50);\nSystem.out.println(date);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 101,
    "topic": "java",
    "question": "¿Compila la sobrescritura del método?",
    "options": [
      "Sí e imprime Child",
      "No: reduce la visibilidad",
      "Sí e imprime Parent",
      "Falla solamente al ejecutar"
    ],
    "answer": [
      1
    ],
    "explanation": "Un método sobrescrito no puede reducir la visibilidad. De protected a acceso de paquete se reduce.",
    "code": "class Parent { protected void show() {} }\nclass Child extends Parent {\n    @Override void show() {}\n}",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 102,
    "topic": "java",
    "question": "¿Qué imprime el programa?",
    "options": [
      "true",
      "false",
      "No compila",
      "Sin salida"
    ],
    "answer": [
      0
    ],
    "explanation": "String es String, StringBuffer es Object y MyList hereda de ArrayList. Las tres condiciones son verdaderas.",
    "code": "String v = new String();\nStringBuffer sb = new StringBuffer();\nclass MyList extends java.util.ArrayList<Object> {}\nSystem.out.println((v instanceof String) &&\n    (sb instanceof Object) &&\n    (new MyList() instanceof java.util.ArrayList));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 103,
    "topic": "java",
    "question": "¿Qué imprime esta asignación?",
    "options": [
      "7",
      "8",
      "9",
      "No compila"
    ],
    "answer": [
      1
    ],
    "explanation": "x++ devuelve 3 y luego deja x en 4. ++x lo incrementa a 5 y devuelve 5. La suma es 8.",
    "code": "int x = 3;\nSystem.out.println(x++ + ++x);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 104,
    "topic": "java",
    "question": "¿Qué imprime la comparación?",
    "options": [
      "true true",
      "false true",
      "false false",
      "true false"
    ],
    "answer": [
      1
    ],
    "explanation": "new String crea otro objeto: == es false. equals compara contenido: true.",
    "code": "String a = \"APX\";\nString b = new String(\"APX\");\nSystem.out.println((a == b) + \" \" + a.equals(b));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 105,
    "topic": "java",
    "question": "¿Qué ocurre al compilar este fragmento?",
    "options": [
      "Imprime 3",
      "Imprime 0",
      "No compila",
      "ArithmeticException"
    ],
    "answer": [
      2
    ],
    "explanation": "a + b es int por promoción numérica. No se puede asignar a byte sin conversión explícita.",
    "code": "byte a = 1, b = 2;\nbyte c = a + b;\nSystem.out.println(c);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 106,
    "topic": "java",
    "question": "¿Qué imprime este bloque?",
    "options": [
      "ABC",
      "ACB",
      "AB",
      "No compila"
    ],
    "answer": [
      0
    ],
    "explanation": "Se imprime A, se captura la excepción y se imprime B; finally imprime C. Todo usa el mismo flujo de salida.",
    "code": "try {\n    System.out.print(\"A\");\n    throw new IllegalArgumentException();\n} catch (IllegalArgumentException e) {\n    System.out.print(\"B\");\n} finally {\n    System.out.print(\"C\");\n}",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 107,
    "topic": "java",
    "question": "¿Qué valor devuelve este método?",
    "options": [
      "1",
      "2",
      "No compila",
      "Ninguno"
    ],
    "answer": [
      1
    ],
    "explanation": "El return de finally sustituye al return pendiente del try. Evita esta práctica porque oculta resultados y errores.",
    "code": "static int value() {\n    try { return 1; }\n    finally { return 2; }\n}",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 108,
    "topic": "java",
    "question": "¿Qué imprime el polimorfismo?",
    "options": [
      "Parent",
      "Child",
      "ParentChild",
      "No compila"
    ],
    "answer": [
      1
    ],
    "explanation": "La llamada a un método de instancia sobrescrito se resuelve por el tipo real del objeto.",
    "code": "class Parent { void show() { System.out.print(\"Parent\"); } }\nclass Child extends Parent {\n    @Override void show() { System.out.print(\"Child\"); }\n}\n// Dentro de main:\nParent p = new Child();\np.show();",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 109,
    "topic": "java",
    "question": "¿Qué imprime el encadenamiento de constructores?",
    "options": [
      "AB",
      "BA",
      "A",
      "No compila"
    ],
    "answer": [
      1
    ],
    "explanation": "this(10) ejecuta primero el constructor con argumento que imprime B; después continúa y se imprime A.",
    "code": "class Test {\n    Test() { this(10); System.out.print(\"A\"); }\n    Test(int n) { System.out.print(\"B\"); }\n}\n// Dentro de main:\nnew Test();",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 110,
    "topic": "colecciones",
    "question": "¿Qué imprime el filtro?",
    "options": [
      "[apple]",
      "[apple, banana]",
      "[]",
      "No compila en Java 11"
    ],
    "answer": [
      0
    ],
    "explanation": "filter deja pasar solo cadenas que comienzan con a. collect(Collectors.toList()) funciona en Java 11.",
    "code": "List<String> items = Arrays.asList(\"apple\", \"banana\", \"cherry\");\nSystem.out.println(items.stream()\n    .filter(s -> s.startsWith(\"a\"))\n    .collect(Collectors.toList()));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 111,
    "topic": "colecciones",
    "question": "¿Qué imprime esta transformación?",
    "options": [
      "[2, 4, 6]",
      "[1, 2, 3]",
      "[3, 6, 9]",
      "No compila"
    ],
    "answer": [
      0
    ],
    "explanation": "map aplica n * 2 a cada elemento y collect reúne los valores en una lista.",
    "code": "List<Integer> values = Arrays.asList(1, 2, 3);\nSystem.out.println(values.stream().map(n -> n * 2)\n    .collect(Collectors.toList()));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 112,
    "topic": "colecciones",
    "question": "¿Qué imprime count()?",
    "options": [
      "2",
      "3",
      "4",
      "No compila"
    ],
    "answer": [
      1
    ],
    "explanation": "distinct elimina duplicados y count cuenta los valores distintos: 1, 2 y 3.",
    "code": "long n = java.util.stream.Stream.of(1, 1, 2, 3)\n    .distinct().count();\nSystem.out.println(n);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 113,
    "topic": "colecciones",
    "question": "¿Qué ocurre al agregar al resultado de Arrays.asList?",
    "options": [
      "La lista crece",
      "UnsupportedOperationException",
      "No compila",
      "Devuelve null"
    ],
    "answer": [
      1
    ],
    "explanation": "Arrays.asList crea una lista de tamaño fijo. Permite reemplazar posiciones, pero no añadir o quitar.",
    "code": "List<String> values = Arrays.asList(\"A\", \"B\");\nvalues.add(\"C\");",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 114,
    "topic": "colecciones",
    "question": "¿Qué imprime el tamaño del Set?",
    "options": [
      "3",
      "2",
      "1",
      "No compila"
    ],
    "answer": [
      1
    ],
    "explanation": "El segundo A no se agrega porque String define igualdad por contenido. El conjunto contiene A y B.",
    "code": "java.util.Set<String> s = new java.util.HashSet<>();\ns.add(\"A\"); s.add(\"A\"); s.add(\"B\");\nSystem.out.println(s.size());",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 115,
    "topic": "java",
    "question": "¿Qué devuelve el predicado?",
    "options": [
      "true",
      "false",
      "5",
      "No compila"
    ],
    "answer": [
      0
    ],
    "explanation": "Predicate.test devuelve boolean. El valor 5 cumple n > 3.",
    "code": "java.util.function.Predicate<Integer> p = n -> n > 3;\nSystem.out.println(p.test(5));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 116,
    "topic": "java",
    "question": "¿Qué ocurre con Optional.get()?",
    "options": [
      "Devuelve null",
      "Devuelve vacío",
      "NoSuchElementException",
      "No compila"
    ],
    "answer": [
      2
    ],
    "explanation": "get requiere un valor presente; Optional.empty() no lo contiene.",
    "code": "java.util.Optional<String> v = java.util.Optional.empty();\nSystem.out.println(v.get());",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 117,
    "topic": "java",
    "question": "¿Qué imprime la división?",
    "options": [
      "2",
      "2.5",
      "3",
      "No compila"
    ],
    "answer": [
      0
    ],
    "explanation": "Ambos operandos son int, por lo que la división entera trunca la parte fraccionaria.",
    "code": "System.out.println(5 / 2);",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  },
  {
    "id": 118,
    "topic": "colecciones",
    "question": "¿Qué imprime el Map?",
    "options": [
      "1 10",
      "2 10",
      "1 20",
      "2 20"
    ],
    "answer": [
      2
    ],
    "explanation": "put con la misma clave sustituye el valor anterior. Queda una sola entrada con valor 20.",
    "code": "java.util.Map<String,Integer> m = new java.util.HashMap<>();\nm.put(\"A\", 10); m.put(\"A\", 20);\nSystem.out.println(m.size() + \" \" + m.get(\"A\"));",
    "type": "single",
    "difficulty": "Alta",
    "source": "APX.pdf / MiGuiaAPX 2.pdf · adaptación del examen de práctica"
  }
];
