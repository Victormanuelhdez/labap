window.TOPICS = [
  {
    "id": "online",
    "title": "APX Online",
    "shortTitle": "APX Online",
    "tag": "Transacciones, librerías y DTOs",
    "summary": "La transacción coordina; la librería resuelve; el DTO transporta.",
    "kicker": "La transacción coordina; la librería resuelve; el DTO transporta.",
    "color": "#2547ff",
    "bullets": [
      "Transacción y librería",
      "DTO",
      "Clase abstracta y parámetros"
    ],
    "concepts": [
      {
        "term": "Transacción y librería",
        "explanation": "La transacción es el punto de entrada de la operación Online y coordina el flujo. La librería contiene operaciones de negocio reutilizables y acceso a datos, expuestas mediante una interfaz.",
        "memory": "Transacción coordina; librería ejecuta.",
        "trap": "No concentres todo el negocio en un DTO ni dupliques una consulta en cada transacción.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "DTO",
        "explanation": "Un Data Transfer Object representa y transporta los datos de la operación entre componentes. En el ejemplo APX aparece como un Bean de entidad comercial.",
        "memory": "DTO = datos que viajan.",
        "trap": "DTO no equivale a tabla, conexión ni servicio de negocio.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Clase abstracta y parámetros",
        "explanation": "La clase abstracta de la transacción separa las operaciones de parámetros de entrada y salida de la lógica implementada por la transacción.",
        "memory": "Parámetros separados del flujo.",
        "trap": "No confundas la generación de acceso a parámetros con implementar reglas de negocio.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "setSeverity",
        "explanation": "setSeverity establece la gravedad de la notificación generada por una transacción.",
        "memory": "Severity = gravedad.",
        "trap": "No establece el país, el tipo de transacción ni los datos de entrada.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Online frente a Batch",
        "explanation": "Online se apoya en transacciones, librerías y DTOs. Batch utiliza Jobs, librerías y DTOs. Ambos son capacidades del entorno APX.",
        "memory": "Online: transacción. Batch: Job.",
        "trap": "Un Job no es una transacción Online.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "cli",
    "title": "APX CLI, Maven y OSGi",
    "shortTitle": "APX CLI, Maven",
    "tag": "Herramientas y despliegue",
    "summary": "CLI crea y opera; Maven construye; OSGi organiza módulos.",
    "kicker": "CLI crea y opera; Maven construye; OSGi organiza módulos.",
    "color": "#7c4dff",
    "bullets": [
      "APX CLI y entorno local",
      "Comandos de práctica",
      "JDBC Utility"
    ],
    "concepts": [
      {
        "term": "APX CLI y entorno local",
        "explanation": "CLI es una herramienta de línea de comandos para crear y operar componentes. El entorno local permite probar y depurar transacciones y Jobs antes de producción.",
        "memory": "CLI = comandos; local = pruebas.",
        "trap": "Local no significa entorno productivo.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Comandos de práctica",
        "explanation": "apx init du-lib inicializa una unidad de despliegue de librería. apx send req envía una solicitud. En apx deploy local --runtime=online --country=ESP -y, ESP es el país España.",
        "memory": "init crea; send envía; deploy despliega.",
        "trap": "ESP es país, no idioma. Los argumentos completos dependen del componente y versión de CLI.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "JDBC Utility",
        "explanation": "La dependencia se declara en pom.xml. El ejemplo corregido identifica library-arc-osgi.xml, library-arc.xml y pom.xml como archivos configurados al añadir JDBC Utility.",
        "memory": "JDBC conecta; pom declara dependencia.",
        "trap": "No cambies pom.xml por settings.xml en una pregunta de dependencias de la aplicación.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Ciclo Maven",
        "explanation": "compile compila; test ejecuta pruebas; package genera el artefacto; install además lo instala en el repositorio local. clean elimina normalmente target.",
        "memory": "package genera; install instala.",
        "trap": "package no equivale a despliegue productivo.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "OSGi y consola",
        "explanation": "OSGi administra módulos Java y su ciclo de vida. Import-Package declara paquetes requeridos. APX Operation Console es la herramienta web para operación, configuración y consulta de componentes y Jobs.",
        "memory": "OSGi módulos; Console operación.",
        "trap": "La consola de operación no es el compilador ni la CLI.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "batch",
    "title": "APX Batch y Spring Batch",
    "shortTitle": "APX Batch",
    "tag": "Jobs, Steps y chunks",
    "summary": "Job → Steps; en chunk: leer, procesar, escribir.",
    "kicker": "Job → Steps; en chunk: leer, procesar, escribir.",
    "color": "#00a59a",
    "bullets": [
      "Job y Step",
      "Reader, Processor y Writer",
      "Chunk y consistencia"
    ],
    "concepts": [
      {
        "term": "Job y Step",
        "explanation": "Un Job representa el proceso por lotes completo. Un Step representa una etapa de ese proceso. Puede implementarse orientado a chunks o con un Tasklet.",
        "memory": "Job = proceso; Step = etapa.",
        "trap": "JobRepository no es un tipo de Step.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Reader, Processor y Writer",
        "explanation": "Reader lee elementos. Processor transforma, valida o filtra. Writer escribe los resultados del bloque. Reader devuelve null al terminar; Processor puede devolver null para filtrar.",
        "memory": "Leer → procesar → escribir.",
        "trap": "null de Reader termina la entrada; null de Processor filtra un elemento.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Chunk y consistencia",
        "explanation": "Un chunk agrupa elementos en un bloque transaccional. Si la escritura falla, la configuración transaccional gobierna la reversión del bloque; chunks ya confirmados no se revierten automáticamente.",
        "memory": "Chunk = bloque de confirmación.",
        "trap": "No asumas un único rollback para todo el histórico del Job.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Tasklet",
        "explanation": "Tasklet permite ejecutar una tarea concreta dentro de un Step, por ejemplo una preparación o limpieza.",
        "memory": "Tasklet = tarea específica.",
        "trap": "No obliga a seguir Reader → Processor → Writer.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "JobRepository y JobLauncher",
        "explanation": "JobRepository guarda metadatos de ejecuciones y estados. JobLauncher inicia un Job con parámetros. Una JobInstance se identifica por el Job y sus parámetros identificadores.",
        "memory": "Repository registra; Launcher lanza.",
        "trap": "Los metadatos del proceso no son los datos comerciales procesados.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "java",
    "title": "Java y orientación a objetos",
    "shortTitle": "Java",
    "tag": "Ejecución, tipos y excepciones",
    "summary": "Primero: ¿compila? Después: ¿qué se ejecuta?",
    "kicker": "Primero: ¿compila? Después: ¿qué se ejecuta?",
    "color": "#e35929",
    "bullets": [
      "JDK, JRE y JVM",
      "Promoción numérica",
      "String e igualdad"
    ],
    "concepts": [
      {
        "term": "JDK, JRE y JVM",
        "explanation": "JDK agrupa herramientas de desarrollo y ejecución. JRE es el entorno de ejecución y bibliotecas. JVM ejecuta el bytecode. javac convierte fuente .java en .class. La distribución concreta del JRE depende del proveedor y versión.",
        "memory": "JDK desarrolla; JRE ejecuta; JVM interpreta bytecode.",
        "trap": "No uses javac como nombre de la máquina virtual.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Promoción numérica",
        "explanation": "byte y short se promocionan a int en operaciones aritméticas. Si interviene double, los operandos se promocionan a double. La división entre enteros descarta la parte fraccionaria.",
        "memory": "Tipos pequeños → int; double domina.",
        "trap": "byte + byte no produce automáticamente byte.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "String e igualdad",
        "explanation": "String es inmutable. Métodos como toUpperCase devuelven un nuevo valor. == compara referencias y equals compara contenido cuando la clase lo implementa de ese modo.",
        "memory": "== referencia; equals contenido.",
        "trap": "No ignores la asignación del resultado de un método que devuelve String.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Herencia y polimorfismo",
        "explanation": "Una clase extiende una sola clase y puede implementar varias interfaces. La sobrescritura de métodos de instancia permite ejecutar la implementación del objeto real. No se puede reducir visibilidad al sobrescribir.",
        "memory": "Tipo real elige el método sobrescrito.",
        "trap": "protected no puede reducirse a acceso de paquete en una sobrescritura.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Constructores",
        "explanation": "En Java 11, this(...) llama a otro constructor de la misma clase y super(...) al padre, como primera instrucción. El compilador genera un constructor por defecto únicamente si no declaras ningún constructor.",
        "memory": "this mismo; super padre.",
        "trap": "Declarar un constructor con parámetros elimina el constructor automático sin parámetros.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Excepciones",
        "explanation": "Checked exige capturar o declarar. RuntimeException es unchecked. throw lanza y throws declara. finally normalmente se ejecuta al salir del bloque; devolver desde finally puede ocultar un retorno o error.",
        "memory": "throw dispara; throws avisa.",
        "trap": "finally no es final. No trates salidas de System.out y System.err como un orden visual garantizado.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Interfaces funcionales y Optional",
        "explanation": "Una interfaz funcional tiene un único método abstracto. Predicate devuelve boolean; Function transforma; Consumer consume; Supplier produce. Optional representa presencia o ausencia; get sobre empty lanza una excepción.",
        "memory": "Predicate pregunta; Function transforma.",
        "trap": "Optional no elimina automáticamente todos los NullPointerException.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "colecciones",
    "title": "Colecciones, Streams y lambdas",
    "shortTitle": "Colecciones, Streams",
    "tag": "Datos, orden y transformación",
    "summary": "Lista conserva secuencia; Set evita duplicados; Map asocia claves.",
    "kicker": "Lista conserva secuencia; Set evita duplicados; Map asocia claves.",
    "color": "#de4276",
    "bullets": [
      "List, Set y Map",
      "Comparable y Comparator",
      "equals y hashCode"
    ],
    "concepts": [
      {
        "term": "List, Set y Map",
        "explanation": "List guarda una secuencia y admite duplicados. Set evita duplicados. Map asocia claves únicas a valores. ArrayList mantiene orden de inserción y admite cambios; no ordena por valor automáticamente.",
        "memory": "List secuencia; Set únicos; Map clave-valor.",
        "trap": "Orden de inserción no equivale a orden alfabético.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Comparable y Comparator",
        "explanation": "Comparable define compareTo y el orden natural en la clase. Comparator permite comparaciones externas distintas. TreeSet utiliza orden natural o un comparador.",
        "memory": "Comparable dentro; Comparator fuera.",
        "trap": "No asumas que HashSet itera en orden de inserción.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "equals y hashCode",
        "explanation": "Si dos objetos son iguales según equals, deben devolver el mismo hashCode. Un mismo hash puede corresponder a objetos diferentes.",
        "memory": "Iguales → mismo hash.",
        "trap": "Mismo hash no implica igualdad.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Streams",
        "explanation": "filter selecciona; map transforma; distinct elimina duplicados. Son operaciones intermedias. collect, count y reduce consumen el flujo. Los Streams se evalúan de forma perezosa y no se reutilizan tras consumirlos.",
        "memory": "Intermedias preparan; terminal consume.",
        "trap": "Stream.toList() no está disponible en Java 11; usa collect(Collectors.toList()).",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Arrays.asList",
        "explanation": "Devuelve una lista de tamaño fijo respaldada por el arreglo. Puedes cambiar elementos con set, pero add o remove no están soportados.",
        "memory": "Tamaño fijo ≠ totalmente inmutable.",
        "trap": "ArrayList y Arrays.asList no tienen la misma capacidad de modificar tamaño.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "patrones",
    "title": "Patrones y arquitectura",
    "shortTitle": "Patrones",
    "tag": "Responsabilidades y diseño",
    "summary": "Identifica el problema antes de elegir el patrón.",
    "kicker": "Identifica el problema antes de elegir el patrón.",
    "color": "#394ac6",
    "bullets": [
      "Singleton, Strategy y State",
      "Observer, Composite y Adapter",
      "Command y Builder"
    ],
    "concepts": [
      {
        "term": "Singleton, Strategy y State",
        "explanation": "Singleton controla una única instancia. Strategy representa algoritmos intercambiables. State permite cambiar el comportamiento según el estado interno.",
        "memory": "Singleton uno; Strategy algoritmo; State estado.",
        "trap": "Cambiar algoritmo y cambiar estado son necesidades distintas.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Observer, Composite y Adapter",
        "explanation": "Observer notifica suscriptores. Composite representa jerarquías parte-todo. Adapter hace compatible una interfaz existente con otra requerida.",
        "memory": "Observer avisa; Composite árbol; Adapter conecta.",
        "trap": "No confundir jerarquía de objetos con herencia de clases.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Command y Builder",
        "explanation": "Command encapsula una solicitud como objeto. Builder permite construir objetos complejos por pasos.",
        "memory": "Command acción; Builder construcción.",
        "trap": "Crear objetos por etapas no es notificar eventos.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "The Blob",
        "explanation": "El antipatrón concentra demasiadas responsabilidades en una clase o librería. El ejemplo propone redistribuir comportamiento según las entidades y responsabilidades para reducir acoplamiento y facilitar pruebas.",
        "memory": "Blob = demasiado en uno.",
        "trap": "No confundir el antipatrón con el tipo de dato binario BLOB.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "ASO y APX",
        "explanation": "En la arquitectura estudiada, ASO invoca APX y APX gobierna la operación y su acceso a datos. Un acceso directo de ASO que salta esa capa puede duplicar caminos y omitir reglas y controles.",
        "memory": "Respeta al responsable de la operación.",
        "trap": "Aclara primero si las flechas de un diagrama representan llamadas, dependencias o respuestas.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  },
  {
    "id": "pruebas",
    "title": "Pruebas, datos y transacciones",
    "shortTitle": "Pruebas, datos",
    "tag": "JUnit, Mockito, JDBC y ACID",
    "summary": "Preparar → ejecutar → verificar; todos los cambios o ninguno.",
    "kicker": "Preparar → ejecutar → verificar; todos los cambios o ninguno.",
    "color": "#159467",
    "bullets": [
      "Arrange, Act, Assert",
      "JUnit y Mockito",
      "ACID, commit y rollback"
    ],
    "concepts": [
      {
        "term": "Arrange, Act, Assert",
        "explanation": "Prepara datos y dependencias; ejecuta la unidad; verifica resultados, errores y efectos. Incluye casos positivos, negativos y límites relevantes.",
        "memory": "Preparar → ejecutar → verificar.",
        "trap": "Nombrar JUnit y Mockito no explica las etapas de una prueba.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "JUnit y Mockito",
        "explanation": "JUnit organiza pruebas y aserciones: assertEquals compara valores, assertSame identidad. Mockito simula dependencias: when/thenReturn prepara respuestas y verify comprueba interacciones.",
        "memory": "JUnit verifica; Mockito aísla.",
        "trap": "Un mock no demuestra que la integración real con base de datos funcione.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "ACID, commit y rollback",
        "explanation": "Atomicidad: todo o nada; consistencia: invariantes válidas; aislamiento: control de concurrencia; durabilidad: persistencia tras confirmación. COMMIT confirma y ROLLBACK revierte cambios no confirmados de su ámbito.",
        "memory": "ACID protege la transacción.",
        "trap": "Un rollback local no deshace automáticamente un abono en un sistema externo.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "Timeout e idempotencia",
        "explanation": "Un timeout no demuestra que la operación falló: pudo ejecutarse sin respuesta. Consulta el estado y usa la misma clave de idempotencia para reintentar sin duplicar el efecto.",
        "memory": "Misma operación, misma clave.",
        "trap": "Crear un ID nuevo en cada reintento impide detectar duplicados.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      },
      {
        "term": "JDBC, claves y HTTP",
        "explanation": "PreparedStatement parametriza valores SQL. Clave primaria identifica filas y clave foránea referencia otra clave. HTTP 401 indica ausencia de autenticación válida y 403 acceso prohibido.",
        "memory": "401 identidad; 403 permiso.",
        "trap": "Parametrizar valores no permite aceptar cualquier nombre dinámico de tabla.",
        "quickFacts": [
          "Fuente: exámenes APX adjuntos y README de contexto"
        ]
      }
    ]
  }
];
