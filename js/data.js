// Datos de cursos
const courses = [
    {
        id: 1,
        title: "Arduino Básico",
        category: "hardware",
        level: "principiante",
        duration: "4 semanas",
        progress: 30,
        image: "fas fa-microchip",
        color: "#2c5aa0",
        description: "Aprende los fundamentos de Arduino y electrónica con proyectos prácticos.",
        longDescription: "Este curso te introduce al mundo de la electrónica y programación con Arduino. Aprenderás conceptos básicos de electricidad, componentes electrónicos y programación en el entorno Arduino IDE.",
        modules: [
            "Introducción a Arduino y electrónica",
            "Componentes básicos: resistencias, LEDs, botones",
            "Programación básica: variables, funciones, bucles",
            "Proyecto final: Semáforo con Arduino"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Introducción a Arduino', duration: '15 min', completed: true, url: 'https://www.youtube.com/embed/nPOKOi1jIK0' },
            { id: 2, type: 'pdf', title: 'Guía de Componentes Electrónicos', pages: 24, completed: true, url: 'https://www.arduino.cc/en/uploads/Main/arduino_comic_v0004.pdf' },
            { id: 3, type: 'video', title: 'Configuración del IDE Arduino', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/NBm1QPu4EIE' },
            { id: 4, type: 'exercise', title: 'Práctica: LED Parpadeante', exercises: 5, completed: 3, description: 'Aprende a hacer parpadear un LED con Arduino', tasks: ['Conectar LED al pin 13', 'Escribir código digitalWrite', 'Usar delay() para el parpadeo', 'Modificar velocidad de parpadeo', 'Agregar más LEDs'] },
            { id: 5, type: 'video', title: 'Sensores y Actuadores', duration: '25 min', completed: false, url: 'https://www.youtube.com/embed/JMgz6dWSzzQ' },
            { id: 6, type: 'exercise', title: 'Proyecto: Semáforo Inteligente', exercises: 8, completed: 0, description: 'Construye un semáforo con Arduino', tasks: ['Conectar 3 LEDs (rojo, amarillo, verde)', 'Programar secuencia de luces', 'Agregar tiempos realistas', 'Añadir botón peatonal', 'Implementar modo noche', 'Agregar sensor de tráfico', 'Optimizar el código', 'Documentar el proyecto'] },
            { id: 7, type: 'pdf', title: 'Manual de Referencia Arduino', pages: 45, completed: false, url: 'https://www.arduino.cc/reference/en/' },
            { id: 8, type: 'quiz', title: 'Evaluación Final', questions: 20, completed: false }
        ]
    },
    {
        id: 2,
        title: "Python para Principiantes",
        category: "software",
        level: "principiante",
        duration: "6 semanas",
        progress: 75,
        image: "fab fa-python",
        color: "#4CAF50",
        description: "Domina los fundamentos de programación con Python, el lenguaje más versátil.",
        longDescription: "Python es uno de los lenguajes más populares y versátiles. En este curso aprenderás desde cero los conceptos fundamentales de programación aplicados a Python.",
        modules: [
            "Introducción a Python y configuración del entorno",
            "Variables, tipos de datos y operadores",
            "Estructuras de control: condicionales y bucles",
            "Funciones y módulos",
            "Estructuras de datos: listas, diccionarios, tuplas",
            "Proyecto final: Calculadora interactiva"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Bienvenida e Instalación de Python', duration: '18 min', completed: true, url: 'https://www.youtube.com/embed/chPhlsHoEPo' },
            { id: 2, type: 'video', title: 'Variables y Tipos de Datos', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/Kp4Mvapo5kc' },
            { id: 3, type: 'exercise', title: 'Ejercicios: Operaciones Básicas', exercises: 10, completed: 10, description: 'Practica operaciones básicas en Python', tasks: ['Suma y resta de números', 'Multiplicación y división', 'Operaciones con strings', 'Conversión de tipos', 'Operadores de comparación', 'Operadores lógicos', 'Variables y asignación', 'Input del usuario', 'Formateo de strings', 'Ejercicio integrador'] },
            { id: 4, type: 'pdf', title: 'Guía de Listas y Diccionarios', pages: 18, completed: true, url: 'https://docs.python.org/es/3/tutorial/datastructures.html' },
            { id: 5, type: 'video', title: 'Control de Flujo (if, for, while)', duration: '30 min', completed: true, url: 'https://www.youtube.com/embed/Zixd-G6VBQ8' },
            { id: 6, type: 'exercise', title: 'Práctica: Estructuras de Control', exercises: 12, completed: 8, description: 'Domina if, for y while', tasks: ['Condicional simple if-else', 'Condicionales anidados', 'Bucle for con range', 'Iterar sobre listas', 'Bucle while', 'Break y continue', 'Comprehension lists', 'Ejercicio: número primo', 'Ejercicio: tabla de multiplicar', 'Ejercicio: adivina el número', 'Ejercicio: validar entrada', 'Proyecto: menú interactivo'] },
            { id: 7, type: 'video', title: 'Funciones en Python', duration: '25 min', completed: true, url: 'https://www.youtube.com/embed/NSbOtYzIQI0' },
            { id: 8, type: 'exercise', title: 'Proyecto: Calculadora Avanzada', exercises: 6, completed: 4, description: 'Crea una calculadora completa', tasks: ['Funciones básicas (+, -, *, /)', 'Operaciones avanzadas (potencia, raíz)', 'Manejo de errores', 'Historial de operaciones', 'Interfaz de menú', 'Guardar resultados'] },
            { id: 9, type: 'pdf', title: 'POO en Python', pages: 32, completed: false, url: 'https://docs.python.org/es/3/tutorial/classes.html' },
            { id: 10, type: 'quiz', title: 'Evaluación Módulo 1-3', questions: 25, completed: true }
        ]
    },
    {
        id: 3,
        title: "Desarrollo Web con HTML/CSS",
        category: "desarrollo",
        level: "principiante",
        duration: "5 semanas",
        progress: 100,
        image: "fas fa-code",
        color: "#FF5722",
        description: "Crea sitios web atractivos y responsivos desde cero.",
        longDescription: "Aprende a construir páginas web modernas utilizando HTML5 y CSS3. Desde la estructura básica hasta el diseño responsivo que se adapta a cualquier dispositivo.",
        modules: [
            "Introducción a HTML5: etiquetas y estructura",
            "Formularios y tablas en HTML",
            "Fundamentos de CSS: selectores, propiedades y valores",
            "Diseño con Flexbox y Grid",
            "Diseño responsivo y Media Queries",
            "Proyecto final: Portafolio personal"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Estructura HTML5', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/rbuYtrNUxg4' },
            { id: 2, type: 'exercise', title: 'Práctica: Página de Perfil', exercises: 4, completed: 4, description: 'Crea tu primera página HTML', tasks: ['Estructura básica HTML5', 'Agregar encabezados y párrafos', 'Insertar imagen de perfil', 'Crear lista de habilidades'] },
            { id: 3, type: 'video', title: 'CSS Básico y Selectores', duration: '28 min', completed: true, url: 'https://www.youtube.com/embed/wZniZEbPAzk' },
            { id: 4, type: 'pdf', title: 'Guía de Propiedades CSS', pages: 35, completed: true, url: 'https://web.dev/learn/css/' },
            { id: 5, type: 'video', title: 'Flexbox Tutorial Completo', duration: '32 min', completed: true, url: 'https://www.youtube.com/embed/3YW65K6LcIA' },
            { id: 6, type: 'exercise', title: 'Layout con Flexbox', exercises: 6, completed: 6, description: 'Domina Flexbox', tasks: ['Container con flex', 'Alineación de items', 'Justificar contenido', 'Flex-direction', 'Flex-wrap', 'Navbar con Flexbox'] },
            { id: 7, type: 'video', title: 'CSS Grid: Sistema de Cuadrícula', duration: '35 min', completed: true, url: 'https://www.youtube.com/embed/EFafSYg-PkI' },
            { id: 8, type: 'exercise', title: 'Práctica: Galería Responsiva', exercises: 5, completed: 5, description: 'Galería con CSS Grid', tasks: ['Grid container básico', 'Grid template columns', 'Grid gap', 'Responsive con auto-fit', 'Hover effects'] },
            { id: 9, type: 'video', title: 'Diseño Responsivo y Media Queries', duration: '25 min', completed: true, url: 'https://www.youtube.com/embed/yU7jJ3NbPdA' },
            { id: 10, type: 'exercise', title: 'Proyecto Final: Portfolio', exercises: 10, completed: 7, description: 'Portfolio personal completo', tasks: ['Header con navegación', 'Sección Hero', 'Sobre mí', 'Proyectos con Grid', 'Habilidades', 'Formulario de contacto', 'Footer', 'Responsive mobile', 'Animaciones CSS', 'Deploy online'] },
            { id: 11, type: 'quiz', title: 'Evaluación Final HTML/CSS', questions: 30, completed: false }
        ]
    },
    {
        id: 4,
        title: "Bases de Datos con SQL",
        category: "software",
        level: "intermedio",
        duration: "4 semanas",
        progress: 10,
        image: "fas fa-database",
        color: "#9b59b6",
        description: "Aprende a diseñar y consultar bases de datos relacionales.",
        longDescription: "Las bases de datos son fundamentales en cualquier aplicación. En este curso aprenderás a diseñar bases de datos eficientes y a realizar consultas SQL avanzadas.",
        modules: [
            "Introducción a las bases de datos relacionales",
            "Diseño de bases de datos: entidades y relaciones",
            "SQL básico: SELECT, INSERT, UPDATE, DELETE",
            "Consultas avanzadas: JOIN, subconsultas, funciones",
            "Normalización y optimización",
            "Proyecto final: Sistema de gestión de biblioteca"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Conceptos de Bases de Datos', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/HXV3zeQKqGY' },
            { id: 2, type: 'pdf', title: 'Guía de Instalación MySQL', pages: 12, completed: true, url: 'https://dev.mysql.com/doc/mysql-getting-started/en/' },
            { id: 3, type: 'video', title: 'Consultas SELECT Básicas', duration: '26 min', completed: true, url: 'https://www.youtube.com/embed/5hzZtqCNQKk' },
            { id: 4, type: 'exercise', title: 'Práctica: Consultas SELECT', exercises: 15, completed: 8, description: 'Domina las consultas SELECT', tasks: ['SELECT básico', 'WHERE con condiciones', 'ORDER BY', 'LIMIT y OFFSET', 'DISTINCT', 'COUNT, SUM, AVG', 'GROUP BY', 'HAVING', 'LIKE y wildcards', 'IN y BETWEEN', 'IS NULL', 'Alias con AS', 'Subconsultas simples', 'CASE WHEN', 'Ejercicio integrador'] },
            { id: 5, type: 'video', title: 'INSERT, UPDATE, DELETE', duration: '20 min', completed: false, url: 'https://www.youtube.com/embed/b82YgeNShgo' },
            { id: 6, type: 'exercise', title: 'Manipulación de Datos', exercises: 10, completed: 0, description: 'CRUD completo en SQL', tasks: ['INSERT single row', 'INSERT multiple rows', 'UPDATE con WHERE', 'UPDATE múltiples columnas', 'DELETE con condición', 'TRUNCATE vs DELETE', 'Transacciones básicas', 'ROLLBACK y COMMIT', 'Validar antes de eliminar', 'Ejercicio CRUD completo'] },
            { id: 7, type: 'pdf', title: 'Normalización de BD', pages: 28, completed: false, url: 'https://www.studytonight.com/dbms/database-normalization.php' },
            { id: 8, type: 'video', title: 'JOINs y Relaciones', duration: '35 min', completed: false, url: 'https://www.youtube.com/embed/9yeOJ0ZMUYw' },
            { id: 9, type: 'exercise', title: 'Proyecto: Sistema de Ventas', exercises: 12, completed: 0, description: 'Base de datos completa', tasks: ['Diseñar tablas', 'Crear relaciones', 'Tabla clientes', 'Tabla productos', 'Tabla ventas', 'INNER JOIN', 'LEFT JOIN', 'Consultas complejas', 'Reportes de ventas', 'Inventario', 'Top productos', 'Optimización'] },
            { id: 10, type: 'quiz', title: 'Evaluación SQL Básico', questions: 20, completed: false }
        ]
    },
    {
        id: 5,
        title: "JavaScript Intermedio",
        category: "desarrollo",
        level: "intermedio",
        duration: "6 semanas",
        progress: 0,
        image: "fab fa-js-square",
        color: "#f1c40f",
        description: "Profundiza en JavaScript: funciones, objetos, APIs y más.",
        longDescription: "Lleva tus conocimientos de JavaScript al siguiente nivel. Aprende sobre programación orientada a objetos, manipulación del DOM, APIs y mucho más.",
        modules: [
            "Funciones avanzadas: closures y callbacks",
            "Programación orientada a objetos en JavaScript",
            "Manipulación avanzada del DOM",
            "Eventos y manejo de formularios",
            "APIs y AJAX",
            "Proyecto final: Aplicación de lista de tareas"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Repaso JavaScript Básico', duration: '18 min', completed: true, url: 'https://www.youtube.com/embed/hdI2bqOjy3c' },
            { id: 2, type: 'video', title: 'ES6: Let, Const, Arrow Functions', duration: '24 min', completed: true, url: 'https://www.youtube.com/embed/sjyJBL5fkp8' },
            { id: 3, type: 'exercise', title: 'Ejercicios ES6', exercises: 12, completed: 12, description: 'Practica ES6 moderno', tasks: ['Variables let y const', 'Arrow functions', 'Template literals', 'Default parameters', 'Rest parameters', 'Spread operator', 'Destructuring arrays', 'Destructuring objects', 'For...of loop', 'Map y Set', 'Clases ES6', 'Modules import/export'] },
            { id: 4, type: 'video', title: 'Destructuring y Spread Operator', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/NIq3qLaHCIs' },
            { id: 5, type: 'pdf', title: 'Guía de Array Methods', pages: 22, completed: true, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' },
            { id: 6, type: 'video', title: 'Promesas y Async/Await', duration: '32 min', completed: true, url: 'https://www.youtube.com/embed/V_Kr9OSfDeU' },
            { id: 7, type: 'exercise', title: 'Práctica: Programación Asíncrona', exercises: 8, completed: 4, description: 'Async/Await mastery', tasks: ['Crear Promesa básica', 'Promise.then() chain', 'Promise.catch() errors', 'async function', 'await keyword', 'try/catch con async', 'Promise.all()', 'Fetch con async/await'] },
            { id: 8, type: 'video', title: 'DOM Manipulation Avanzada', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/5fb2aPlgoys' },
            { id: 9, type: 'exercise', title: 'Proyecto: To-Do List Interactiva', exercises: 10, completed: 0, description: 'App completa de tareas', tasks: ['HTML estructura', 'Agregar tarea', 'Eliminar tarea', 'Marcar completada', 'Filtrar tareas', 'LocalStorage', 'Editar tarea', 'Contador de tareas', 'Animaciones', 'Responsive design'] },
            { id: 10, type: 'video', title: 'Fetch API y Consumo de APIs', duration: '30 min', completed: false, url: 'https://www.youtube.com/embed/cuEtnrL9-H0' },
            { id: 11, type: 'exercise', title: 'Proyecto: App del Clima', exercises: 8, completed: 0, description: 'Consumir API del clima', tasks: ['Obtener API key', 'Fetch básico', 'Mostrar datos', 'Buscar ciudad', 'Mostrar icono clima', 'Temperatura en C/F', 'Error handling', 'UI mejorada'] },
            { id: 12, type: 'quiz', title: 'Evaluación Final JavaScript', questions: 25, completed: false }
        ]
    },
    {
        id: 6,
        title: "Robótica con Arduino",
        category: "hardware",
        level: "intermedio",
        duration: "8 semanas",
        progress: 0,
        image: "fas fa-robot",
        color: "#34495e",
        description: "Construye y programa robots con Arduino y sensores avanzados.",
        longDescription: "Adéntrate en el mundo de la robótica con Arduino. Aprende a utilizar sensores, motores y actuadores para crear robots autónomos.",
        modules: [
            "Introducción a la robótica",
            "Sensores de proximidad y seguimiento de línea",
            "Motores DC y servomotores",
            "Control de movimiento y navegación",
            "Comunicación inalámbrica",
            "Proyecto final: Robot seguidor de línea"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Introducción a la Robótica', duration: '25 min', completed: true, url: 'https://www.youtube.com/embed/mMn12FHmlnY' },
            { id: 2, type: 'pdf', title: 'Lista de Componentes Necesarios', pages: 8, completed: true, url: 'https://www.arduino.cc/en/Main/RoboticsResources' },
            { id: 3, type: 'video', title: 'Sensores Ultrasónicos', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/6F1B_N6LuKw' },
            { id: 4, type: 'exercise', title: 'Práctica: Detector de Obstáculos', exercises: 5, completed: 2, description: 'Sensor ultrasónico HC-SR04', tasks: ['Conectar sensor HC-SR04', 'Leer distancia', 'Mostrar en Serial Monitor', 'Agregar LED indicador', 'Sistema de alarma'] },
            { id: 5, type: 'video', title: 'Servomotores y Motores DC', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/LXURLvga8bQ' },
            { id: 6, type: 'exercise', title: 'Control de Motores', exercises: 6, completed: 0, description: 'Controla servos y motores DC', tasks: ['Servomotor básico', 'Barrido automático', 'Control con potenciómetro', 'Motor DC con L298N', 'Control de velocidad PWM', 'Inversión de giro'] },
            { id: 7, type: 'pdf', title: 'Guía de Ensamblaje de Chasis', pages: 15, completed: false, url: 'https://howtomechatronics.com/projects/arduino-robot-car/' },
            { id: 8, type: 'video', title: 'Sensores de Línea', duration: '20 min', completed: false, url: 'https://www.youtube.com/embed/6gwNjV_8RG8' },
            { id: 9, type: 'exercise', title: 'Robot Seguidor de Línea', exercises: 8, completed: 0, description: 'Proyecto completo seguidor', tasks: ['Calibrar sensores IR', 'Lógica de seguimiento', 'Control de motores', 'Ajustar velocidad', 'Manejo de curvas', 'Detección de intersecciones', 'Optimizar código', 'Pruebas en circuito'] },
            { id: 10, type: 'video', title: 'Comunicación Bluetooth', duration: '24 min', completed: false, url: 'https://www.youtube.com/embed/DBJBQt8FmPk' },
            { id: 11, type: 'exercise', title: 'Proyecto Final: Robot Autónomo', exercises: 15, completed: 0, description: 'Robot con múltiples sensores', tasks: ['Integrar sensores', 'Evitar obstáculos', 'Seguir línea', 'Control remoto Bluetooth', 'Modos de operación', 'Batería y energía', 'Chasis completo', 'Pruebas sensor por sensor', 'Algoritmo de navegación', 'Optimización', 'Depuración', 'Calibración final', 'Presentación del proyecto', 'Documentación', 'Video demostración'] },
            { id: 12, type: 'quiz', title: 'Evaluación de Robótica', questions: 18, completed: false }
        ]
    },
    {
        id: 7,
        title: "Programación en C++",
        category: "software",
        level: "avanzado",
        duration: "10 semanas",
        progress: 0,
        image: "fas fa-copyright",
        color: "#004482",
        description: "Aprende programación orientada a objetos con C++.",
        longDescription: "C++ es un lenguaje poderoso utilizado en sistemas operativos, juegos y aplicaciones de alto rendimiento. Domina sus conceptos avanzados.",
        modules: [
            "Fundamentos de C++: sintaxis y tipos de datos",
            "Programación orientada a objetos: clases y objetos",
            "Herencia y polimorfismo",
            "Plantillas y programación genérica",
            "Manejo de memoria y punteros",
            "Proyecto final: Sistema de gestión de estudiantes"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Instalación y Configuración', duration: '15 min', completed: true, url: 'https://www.youtube.com/embed/vLnPwxZdW4Y' },
            { id: 2, type: 'video', title: 'Sintaxis Básica de C++', duration: '30 min', completed: true, url: 'https://www.youtube.com/embed/ZzaPdXTrSb8' },
            { id: 3, type: 'exercise', title: 'Ejercicios Básicos', exercises: 10, completed: 5, description: 'Fundamentos de C++', tasks: ['Hola Mundo', 'Variables y tipos', 'Entrada/Salida cin/cout', 'Operadores aritméticos', 'Condicionales if/else', 'Switch case', 'Bucle for', 'Bucle while', 'Arrays básicos', 'Funciones simples'] },
            { id: 4, type: 'pdf', title: 'Guía de Tipos de Datos', pages: 20, completed: false, url: 'https://www.learncpp.com/' },
            { id: 5, type: 'video', title: 'Funciones y Sobrecarga', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/V9zuox47zr0' },
            { id: 6, type: 'video', title: 'Clases y Objetos', duration: '35 min', completed: false, url: 'https://www.youtube.com/embed/wN0x9eZLix4' },
            { id: 7, type: 'exercise', title: 'POO: Clases Básicas', exercises: 12, completed: 0, description: 'Programación Orientada a Objetos', tasks: ['Crear clase simple', 'Constructor', 'Destructor', 'Métodos getter/setter', 'Encapsulación', 'Clase Persona', 'Clase Cuenta Bancaria', 'Arrays de objetos', 'this pointer', 'Constructor copia', 'Sobrecarga operadores', 'Proyecto: Biblioteca'] },
            { id: 8, type: 'pdf', title: 'Herencia y Polimorfismo', pages: 30, completed: false, url: 'https://www.learncpp.com/cpp-tutorial/introduction-to-inheritance/' },
            { id: 9, type: 'video', title: 'Punteros y Referencias', duration: '40 min', completed: false, url: 'https://www.youtube.com/embed/DTxHyVn0ODg' },
            { id: 10, type: 'exercise', title: 'Manejo de Memoria Dinámica', exercises: 8, completed: 0, description: 'Punteros y memoria', tasks: ['Declarar punteros', 'Operador *', 'Operador &', 'new y delete', 'Arrays dinámicos', 'Punteros a funciones', 'Referencias', 'Memory leaks'] },
            { id: 11, type: 'video', title: 'STL: Vectores y Listas', duration: '32 min', completed: false, url: 'https://www.youtube.com/embed/PocJ5jXv8No' },
            { id: 12, type: 'exercise', title: 'Proyecto: Sistema de Gestión', exercises: 15, completed: 0, description: 'Sistema completo con STL', tasks: ['Diseño del sistema', 'Clase base', 'Herencia', 'Vector de objetos', 'CRUD completo', 'Buscar estudiante', 'Ordenar por nota', 'Estadísticas', 'Archivo de entrada', 'Guardar en archivo', 'Validaciones', 'Menú interactivo', 'Manejo de errores', 'Optimización', 'Documentación'] },
            { id: 13, type: 'quiz', title: 'Evaluación C++ Avanzado', questions: 30, completed: false }
        ]
    },
    {
        id: 8,
        title: "Desarrollo de Apps Móviles",
        category: "desarrollo",
        level: "avanzado",
        duration: "12 semanas",
        progress: 0,
        image: "fas fa-mobile-alt",
        color: "#27ae60",
        description: "Crea aplicaciones móviles para Android e iOS con React Native.",
        longDescription: "Aprende a desarrollar aplicaciones móviles multiplataforma utilizando React Native. Crea apps nativas para iOS y Android con un solo código base.",
        modules: [
            "Introducción a React Native y configuración",
            "Componentes y JSX",
            "Navegación entre pantallas",
            "APIs nativas y permisos",
            "Publicación en tiendas de aplicaciones",
            "Proyecto final: App de clima con geolocalización"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Introducción a React Native', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/0-S5a0eXPoc' },
            { id: 2, type: 'pdf', title: 'Configuración del Entorno', pages: 18, completed: true, url: 'https://reactnative.dev/docs/environment-setup' },
            { id: 3, type: 'video', title: 'Componentes Básicos', duration: '30 min', completed: true, url: 'https://www.youtube.com/embed/ur6I5m2nTvk' },
            { id: 4, type: 'exercise', title: 'Práctica: Primera App', exercises: 6, completed: 3, description: 'Hello World en React Native', tasks: ['Crear proyecto nuevo', 'View y Text', 'Button component', 'Image component', 'ScrollView', 'StyleSheet básico'] },
            { id: 5, type: 'video', title: 'Estilos con StyleSheet', duration: '25 min', completed: false, url: 'https://www.youtube.com/embed/bJJRbLyJTBs' },
            { id: 6, type: 'video', title: 'React Navigation', duration: '35 min', completed: false, url: 'https://www.youtube.com/embed/nQVCkqvU1uE' },
            { id: 7, type: 'exercise', title: 'Navegación entre Pantallas', exercises: 8, completed: 0, description: 'Stack y Tab Navigator', tasks: ['Instalar React Navigation', 'Stack Navigator', 'Pasar parámetros', 'Tab Navigator', 'Drawer Navigator', 'Nested navigators', 'Custom header', 'Deep linking'] },
            { id: 8, type: 'pdf', title: 'Manejo de Estado con Hooks', pages: 28, completed: false, url: 'https://reactnative.dev/docs/intro-react' },
            { id: 9, type: 'video', title: 'Consumo de APIs', duration: '32 min', completed: false, url: 'https://www.youtube.com/embed/IjnTKmZbGTM' },
            { id: 10, type: 'exercise', title: 'App con API REST', exercises: 10, completed: 0, description: 'Fetch y mostrar datos', tasks: ['Fetch API básico', 'useState para datos', 'useEffect', 'Loading state', 'FlatList', 'Pull to refresh', 'Error handling', 'Axios alternativa', 'AsyncStorage', 'Cache de datos'] },
            { id: 11, type: 'video', title: 'Acceso a Cámara y Galería', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/1iBKP_3kN6M' },
            { id: 12, type: 'video', title: 'Preparación para Publicación', duration: '40 min', completed: false, url: 'https://www.youtube.com/embed/LE4Mqp1Ek8E' },
            { id: 13, type: 'exercise', title: 'Proyecto Final: App Completa', exercises: 20, completed: 0, description: 'App de notas completa', tasks: ['Diseño de UI', 'CRUD de notas', 'Navegación', 'Persistencia local', 'Categorías', 'Búsqueda', 'Ordenar notas', 'Tema claro/oscuro', 'Compartir nota', 'Backup/Restore', 'Notificaciones', 'Widgets', 'Optimización', 'Testing', 'Iconos y splash', 'Build APK', 'Build iOS', 'Google Play', 'App Store', 'Documentación'] },
            { id: 14, type: 'quiz', title: 'Evaluación React Native', questions: 25, completed: false }
        ]
    },
    {
        id: 9,
        title: "Electrónica Digital",
        category: "hardware",
        level: "intermedio",
        duration: "6 semanas",
        progress: 0,
        image: "fas fa-bolt",
        color: "#e67e22",
        description: "Fundamentos de electrónica digital y circuitos lógicos.",
        longDescription: "Comprende los principios de la electrónica digital, desde compuertas lógicas hasta circuitos secuenciales y microcontroladores.",
        modules: [
            "Sistemas numéricos: binario, hexadecimal",
            "Compuertas lógicas y álgebra booleana",
            "Circuitos combinacionales",
            "Flip-flops y circuitos secuenciales",
            "Introducción a microcontroladores",
            "Proyecto final: Contador digital"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Sistemas Binario y Hexadecimal', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/FFDMzbrEXaE' },
            { id: 2, type: 'exercise', title: 'Conversión de Sistemas', exercises: 12, completed: 12, description: 'Practica conversiones numéricas', tasks: ['Decimal a Binario', 'Binario a Decimal', 'Decimal a Hexadecimal', 'Hexadecimal a Decimal', 'Binario a Hexadecimal', 'Hexadecimal a Binario', 'Octal a Decimal', 'Suma binaria', 'Resta binaria', 'Complemento a 2', 'Números negativos', 'Ejercicios mixtos'] },
            { id: 3, type: 'video', title: 'Compuertas Lógicas Básicas', duration: '25 min', completed: true, url: 'https://www.youtube.com/embed/95kv5BF2Z9E' },
            { id: 4, type: 'pdf', title: 'Tabla de Verdad y Álgebra Booleana', pages: 22, completed: true, url: 'https://www.electronics-tutorials.ws/boolean/bool_1.html' },
            { id: 5, type: 'exercise', title: 'Simplificación con Karnaugh', exercises: 10, completed: 8, description: 'Mapas de Karnaugh', tasks: ['Tabla de verdad 2 variables', 'Mapa K de 2 variables', 'Tabla 3 variables', 'Mapa K de 3 variables', 'Tabla 4 variables', 'Mapa K de 4 variables', 'Simplificación con Xs', 'SOP y POS', 'Ejercicio integrador', 'Proyecto: Circuito optimizado'] },
            { id: 6, type: 'video', title: 'Circuitos Combinacionales', duration: '30 min', completed: true, url: 'https://www.youtube.com/embed/SV9ptl-3UeA' },
            { id: 7, type: 'exercise', title: 'Diseño de Sumadores', exercises: 6, completed: 3, description: 'Sumadores y restadores', tasks: ['Medio sumador', 'Sumador completo', 'Sumador de 4 bits', 'Medio restador', 'Restador completo', 'Comparador de magnitud'] },
            { id: 8, type: 'video', title: 'Flip-Flops y Latches', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/IykOrxVcdyg' },
            { id: 9, type: 'pdf', title: 'Contadores y Registros', pages: 25, completed: false, url: 'https://www.electronics-tutorials.ws/sequential/seq_1.html' },
            { id: 10, type: 'exercise', title: 'Proyecto: Contador Digital', exercises: 8, completed: 0, description: 'Contador con display', tasks: ['Flip-flop D', 'Flip-flop JK', 'Contador 0-9', 'Display 7 segmentos', 'Decoder BCD', 'Contador completo', 'Reset y control', 'Simulación Proteus'] },
            { id: 11, type: 'quiz', title: 'Evaluación Electrónica Digital', questions: 22, completed: false }
        ]
    },
    {
        id: 10,
        title: "Linux para Desarrolladores",
        category: "software",
        level: "intermedio",
        duration: "5 semanas",
        progress: 0,
        image: "fab fa-linux",
        color: "#333333",
        description: "Domina la línea de comandos y administración de sistemas Linux.",
        longDescription: "Linux es el sistema operativo preferido por desarrolladores. Aprende a utilizar la terminal, administrar procesos y configurar servidores.",
        modules: [
            "Introducción a Linux y distribuciones",
            "Terminal y comandos esenciales",
            "Administración de archivos y permisos",
            "Procesos y servicios",
            "Scripting en Bash",
            "Proyecto final: Script de automatización"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Introducción a Linux', duration: '18 min', completed: true, url: 'https://www.youtube.com/embed/V1y-mbWM3B8' },
            { id: 2, type: 'video', title: 'Navegación en Terminal', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/oxuRxtrO2Ag' },
            { id: 3, type: 'exercise', title: 'Práctica de Comandos Básicos', exercises: 15, completed: 15, description: 'Comandos esenciales de Linux', tasks: ['pwd - directorio actual', 'ls - listar archivos', 'cd - cambiar directorio', 'mkdir - crear carpeta', 'touch - crear archivo', 'cp - copiar', 'mv - mover/renombrar', 'rm - eliminar', 'cat - ver contenido', 'grep - buscar texto', 'find - buscar archivos', 'man - manual', 'clear - limpiar pantalla', 'history - historial', 'Navegación avanzada'] },
            { id: 4, type: 'pdf', title: 'Guía de Comandos Esenciales', pages: 30, completed: true, url: 'https://linuxcommand.org/tlcl.php' },
            { id: 5, type: 'video', title: 'Permisos y Propiedades', duration: '25 min', completed: true, url: 'https://www.youtube.com/embed/D-VqgvBMV7g' },
            { id: 6, type: 'exercise', title: 'Gestión de Permisos', exercises: 8, completed: 8, description: 'Permisos y usuarios', tasks: ['Ver permisos con ls -l', 'chmod numérico', 'chmod simbólico', 'chown cambiar dueño', 'chgrp cambiar grupo', 'sudo y privilegios', 'Crear usuario', 'Grupos de usuarios'] },
            { id: 7, type: 'video', title: 'Redirección y Pipes', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/bKzonnwoR2I' },
            { id: 8, type: 'video', title: 'Introducción a Bash Scripting', duration: '30 min', completed: true, url: 'https://www.youtube.com/embed/tK9Oc6AEnR4' },
            { id: 9, type: 'exercise', title: 'Scripts de Automatización', exercises: 10, completed: 4, description: 'Bash scripting práctico', tasks: ['Primer script .sh', 'Variables en bash', 'Condicionales if', 'Bucles for', 'Bucles while', 'Funciones', 'Parámetros $1 $2', 'Script backup', 'Script limpieza', 'Cron jobs'] },
            { id: 10, type: 'pdf', title: 'Administración de Paquetes', pages: 18, completed: false, url: 'https://www.debian.org/doc/manuals/debian-reference/ch02.en.html' },
            { id: 11, type: 'video', title: 'Procesos y Servicios', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/xHzpHt8f7PE' },
            { id: 12, type: 'exercise', title: 'Proyecto: Servidor Web', exercises: 12, completed: 0, description: 'Configurar servidor Apache', tasks: ['Instalar Apache', 'Iniciar servicio', 'Verificar status', 'Configurar firewall', 'Virtual hosts', 'Permisos www-data', 'index.html', 'Logs de acceso', 'Logs de error', 'SSL/HTTPS', 'Optimización', 'Seguridad básica'] },
            { id: 13, type: 'quiz', title: 'Evaluación Linux', questions: 20, completed: false }
        ]
    },
    {
        id: 11,
        title: "React.js Avanzado",
        category: "desarrollo",
        level: "avanzado",
        duration: "7 semanas",
        progress: 0,
        image: "fab fa-react",
        color: "#61dafb",
        description: "Patrones avanzados, hooks personalizados y optimización.",
        longDescription: "Lleva tus habilidades de React al siguiente nivel con patrones avanzados, hooks personalizados, renderizado optimizado y testing.",
        modules: [
            "Repaso de conceptos fundamentales",
            "Hooks avanzados y personalizados",
            "Context API y estado global",
            "Renderizado optimizado y memoización",
            "Testing con Jest y React Testing Library",
            "Proyecto final: E-commerce con carrito"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Repaso de React Básico', duration: '20 min', completed: true, url: 'https://www.youtube.com/embed/w7ejDZ8SWv8' },
            { id: 2, type: 'video', title: 'useEffect Avanzado', duration: '28 min', completed: true, url: 'https://www.youtube.com/embed/0ZJgIjIuY7U' },
            { id: 3, type: 'exercise', title: 'Hooks Personalizados', exercises: 8, completed: 6, description: 'Crea custom hooks', tasks: ['useToggle hook', 'useFetch hook', 'useLocalStorage hook', 'useDebounce hook', 'useWindowSize hook', 'useClickOutside hook', 'useForm hook', 'usePrevious hook'] },
            { id: 4, type: 'video', title: 'useReducer y Manejo de Estado', duration: '32 min', completed: true, url: 'https://www.youtube.com/embed/kK_Wqx3RnHk' },
            { id: 5, type: 'pdf', title: 'Patrones de Diseño en React', pages: 35, completed: false, url: 'https://www.patterns.dev/posts/reactpatterns/' },
            { id: 6, type: 'video', title: 'Context API Profundo', duration: '30 min', completed: false, url: 'https://www.youtube.com/embed/5LrDIWkK_Bc' },
            { id: 7, type: 'exercise', title: 'Estado Global con Context', exercises: 10, completed: 0, description: 'Context API completo', tasks: ['Crear Context', 'Provider component', 'useContext hook', 'Múltiples contexts', 'Context con useReducer', 'Theme context', 'Auth context', 'Shopping cart context', 'Optimizar renders', 'Proyecto integrador'] },
            { id: 8, type: 'video', title: 'React.memo y useMemo', duration: '25 min', completed: false, url: 'https://www.youtube.com/embed/uojLJFt9SzY' },
            { id: 9, type: 'video', title: 'Code Splitting y Lazy Loading', duration: '22 min', completed: false, url: 'https://www.youtube.com/embed/JU6sl_yyZqs' },
            { id: 10, type: 'pdf', title: 'Testing con Jest y React Testing Library', pages: 28, completed: false, url: 'https://testing-library.com/docs/react-testing-library/intro/' },
            { id: 11, type: 'exercise', title: 'Tests de Componentes', exercises: 12, completed: 0, description: 'Testing en React', tasks: ['Setup Jest', 'Primer test', 'Testing Library queries', 'Test eventos', 'Test async', 'Mock functions', 'Test custom hooks', 'Test Context', 'Coverage report', 'Integration tests', 'E2E básico', 'CI/CD tests'] },
            { id: 12, type: 'exercise', title: 'Proyecto: Dashboard Complejo', exercises: 15, completed: 0, description: 'Dashboard empresarial', tasks: ['Arquitectura del proyecto', 'Routing avanzado', 'Estado global', 'Autenticación', 'Gráficas con Recharts', 'Tablas dinámicas', 'Filtros avanzados', 'Exportar datos', 'Dark mode', 'Responsive design', 'Optimización', 'Testing', 'Deploy', 'Documentación', 'Presentación'] },
            { id: 13, type: 'quiz', title: 'Evaluación React Avanzado', questions: 28, completed: false }
        ]
    },
    {
        id: 12,
        title: "Internet de las Cosas (IoT)",
        category: "hardware",
        level: "avanzado",
        duration: "8 semanas",
        progress: 0,
        image: "fas fa-wifi",
        color: "#3498db",
        description: "Conecta dispositivos a internet y crea soluciones IoT.",
        longDescription: "Aprende a crear sistemas de Internet de las Cosas utilizando Arduino, ESP8266/ESP32 y plataformas en la nube para conectar dispositivos físicos.",
        modules: [
            "Introducción a IoT y casos de uso",
            "Microcontroladores para IoT: ESP8266/ESP32",
            "Protocolos de comunicación: MQTT, HTTP",
            "Plataformas en la nube para IoT",
            "Seguridad en sistemas IoT",
            "Proyecto final: Sistema de monitoreo ambiental"
        ],
        certificate: true,
        materials: [
            { id: 1, type: 'video', title: 'Introducción al IoT', duration: '22 min', completed: true, url: 'https://www.youtube.com/embed/LlhmzVL5bm8' },
            { id: 2, type: 'pdf', title: 'Ecosistema IoT y Casos de Uso', pages: 25, completed: true, url: 'https://www.ibm.com/cloud/learn/iot-platform' },
            { id: 3, type: 'video', title: 'ESP32: Configuración Inicial', duration: '26 min', completed: true, url: 'https://www.youtube.com/embed/xPlN_Tk3VLQ' },
            { id: 4, type: 'exercise', title: 'Primera Conexión WiFi', exercises: 4, completed: 3, description: 'Conecta ESP32 a WiFi', tasks: ['Instalar ESP32 en Arduino IDE', 'Primer sketch WiFi', 'Escanear redes', 'Conectar y verificar IP'] },
            { id: 5, type: 'video', title: 'Protocolo HTTP en ESP32', duration: '28 min', completed: false, url: 'https://www.youtube.com/embed/IHTk4c7w5oM' },
            { id: 6, type: 'exercise', title: 'Cliente HTTP y APIs', exercises: 6, completed: 0, description: 'Consumir APIs REST', tasks: ['GET request básico', 'Parsear JSON', 'POST request', 'API del clima', 'Headers personalizados', 'API authentication'] },
            { id: 7, type: 'video', title: 'MQTT: Mensajería IoT', duration: '32 min', completed: false, url: 'https://www.youtube.com/embed/EIxdz-2rhLs' },
            { id: 8, type: 'pdf', title: 'Seguridad en IoT', pages: 30, completed: false, url: 'https://www.cloudflare.com/learning/security/what-is-iot-security/' },
            { id: 9, type: 'video', title: 'Integración con Firebase', duration: '35 min', completed: false, url: 'https://www.youtube.com/embed/CeM7cMHoYoU' },
            { id: 10, type: 'exercise', title: 'Dashboard en Tiempo Real', exercises: 8, completed: 0, description: 'Dashboard con Firebase', tasks: ['Crear proyecto Firebase', 'ESP32 to Firebase', 'Leer sensores', 'Enviar datos', 'Dashboard web', 'Gráficas en tiempo real', 'Control remoto', 'Notificaciones'] },
            { id: 11, type: 'video', title: 'Low Power y Optimización', duration: '25 min', completed: false, url: 'https://www.youtube.com/embed/0T0f_4lgoew' },
            { id: 12, type: 'exercise', title: 'Proyecto: Estación Meteorológica IoT', exercises: 15, completed: 0, description: 'Proyecto completo IoT', tasks: ['Sensor DHT22', 'Sensor BMP180', 'Sensor de lluvia', 'Leer todos los sensores', 'WiFi connection', 'Enviar a ThingSpeak', 'MQTT broker', 'Dashboard web', 'Alertas', 'Histórico de datos', 'Gráficas', 'Control de riego', 'Batería solar', 'Case 3D', 'Documentación final'] },
            { id: 13, type: 'quiz', title: 'Evaluación IoT', questions: 24, completed: false }
        ]
    }
];

// Datos de certificados obtenidos
const certificates = [
    {
        id: 1,
        courseId: 2,
        title: "Python para Principiantes",
        issueDate: "2025-10-10",
        score: 92,
        verificationCode: "EDUCA-CAZ-2025-PYT-001"
    },
    {
        id: 2,
        courseId: 3,
        title: "Desarrollo Web con HTML/CSS",
        issueDate: "2025-09-15",
        score: 88,
        verificationCode: "EDUCA-CAZ-2025-WEB-002"
    },
    {
        id: 3,
        courseId: 1,
        title: "Arduino Básico",
        issueDate: "2025-08-22",
        score: 95,
        verificationCode: "EDUCA-CAZ-2025-ARD-003"
    },
    {
        id: 4,
        courseId: 10,
        title: "Linux para Desarrolladores",
        issueDate: "2025-07-30",
        score: 90,
        verificationCode: "EDUCA-CAZ-2025-LIN-004"
    },
    {
        id: 5,
        courseId: 4,
        title: "Bases de Datos con SQL",
        issueDate: "2025-06-18",
        score: 87,
        verificationCode: "EDUCA-CAZ-2025-SQL-005"
    },
    {
        id: 6,
        courseId: 5,
        title: "JavaScript Intermedio",
        issueDate: "2025-05-25",
        score: 91,
        verificationCode: "EDUCA-CAZ-2025-JS-006"
    }
];
