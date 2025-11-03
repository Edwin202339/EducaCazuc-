# 🎓 EducaCazucá - Plataforma Educativa Digital

<div align="center">

**Plataforma educativa integral para reducir la brecha digital en Cazucá, Soacha**

![Estado](https://img.shields.io/badge/Estado-Activo-4CAF50?style=flat-square)
![Versión](https://img.shields.io/badge/Versión-1.0-FF5722?style=flat-square)
![Cursos](https://img.shields.io/badge/Cursos-12-2c5aa0?style=flat-square)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características-principales)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades-interactivas)
- [Personalización](#-personalización)
- [Roadmap](#-roadmap)

---

## 🚀 Acerca del Proyecto

**EducaCazucá** es una plataforma educativa web diseñada específicamente para la comunidad de Cazucá en Soacha, Colombia. Su objetivo es reducir la brecha digital mediante acceso gratuito a educación en tecnología.

### Áreas de Conocimiento

- 🔧 **Hardware** (12 cursos): Arduino, electrónica, robótica e IoT
- 💻 **Software** (18 cursos): Python, Linux, C++, bases de datos
- 🌐 **Desarrollo** (15 cursos): Web (HTML/CSS/JS/React) y móvil

### Objetivos del Proyecto

✅ Proporcionar acceso gratuito a educación tecnológica de calidad  
✅ Ofrecer rutas de aprendizaje estructuradas y progresivas  
✅ Certificados verificables para mejorar la empleabilidad  
✅ Crear una comunidad de aprendizaje inclusiva  
✅ Reducir la brecha digital en comunidades vulnerables

---

## ✨ Características Principales

### 🔓 Acceso Abierto
- ✅ Registro gratuito sin restricciones
- ✅ No requiere validación de email inicial
- ✅ Opción de registro social o código QR

### 📚 Educación Integral
- ✅ **12 cursos** en Hardware
- ✅ **18 cursos** en Programación
- ✅ **15 cursos** en Desarrollo Web/Móvil
- ✅ **8 cursos** en Bases de Datos

### 📊 Seguimiento Completo
- ✅ Dashboard personalizado de progreso
- ✅ Sistema de tareas y evaluaciones
- ✅ Reportes detallados
- ✅ Estadísticas en tiempo real

### 🏆 Certificación
- ✅ Certificados automáticos
- ✅ Código QR de verificación
- ✅ Descargables en PDF
- ✅ Insignias digitales

### 🎯 Rutas de Aprendizaje
1. **Técnico en Hardware**: 4 niveles progresivos
2. **Desarrollador Web**: De fundamentos a frameworks
3. **Especialista en Software**: Sistemas y bases de datos

---

## 📂 Estructura del Proyecto

```
EducaCazucá/
│
├── 📄 index.html                  # Página principal (¡ABRIR ESTE!)
├── 📄 README.md                   # Este archivo
├── 📄 .gitignore                  # Archivos ignorados por Git
│
├── 📁 css/                        # Estilos CSS (11 archivos)
│   ├── variables.css              # ← Variables globales (colores, tamaños)
│   ├── base.css                   # ← Estilos base, botones
│   ├── header.css                 # Navegación y logo
│   ├── hero.css                   # Sección principal
│   ├── cards.css                  # Tarjetas (features, paths, stats)
│   ├── sections.css               # Layout de secciones
│   ├── courses.css                # Cursos y filtros
│   ├── footer.css                 # Pie de página
│   ├── modal.css                  # Ventanas modales
│   ├── animations.css             # Animaciones
│   └── responsive.css             # Diseño responsivo
│
├── 📁 js/                         # JavaScript (8 archivos)
│   ├── data.js                    # ← Datos de cursos y certificados
│   ├── courses.js                 # Renderizado de cursos
│   ├── certificates.js            # Renderizado de certificados
│   ├── filters.js                 # Filtrado de cursos
│   ├── modal.js                   # Control de modales
│   ├── animations.js              # Animaciones de scroll
│   ├── hero.js                    # ← Funcionalidad botones hero
│   └── main.js                    # ← Inicialización principal
│
├── 📁 assets/                     # Recursos adicionales (futuro)
└── 📁 images/                     # Imágenes (futuro)
```

### 🔄 Flujo de Dependencias

```
index.html
    │
    ├─── CSS (en orden)
    │    variables.css → base.css → header.css → hero.css → 
    │    cards.css → sections.css → courses.css → footer.css → 
    │    modal.css → animations.css → responsive.css
    │
    └─── JavaScript (en orden)
         data.js → courses.js → certificates.js → filters.js → 
         modal.js → animations.js → hero.js → main.js
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid
- **JavaScript**: Vanilla JS (sin frameworks)

### Bibliotecas Externas
- **Font Awesome 6.4.0**: Iconografía
- **Google Fonts (Inter)**: Tipografía

### Características Técnicas
- ✅ 100% Responsive
- ✅ Sin dependencias pesadas
- ✅ Código modular y mantenible
- ✅ Accesible (WCAG)
- ✅ SEO optimizado

---

## 📥 Instalación

### Método 1: Clonar repositorio
```bash
git clone https://github.com/tu-usuario/educacazuca.git
cd educacazuca
```

### Método 2: Descargar ZIP
1. Descargar el proyecto como ZIP
2. Extraer en una carpeta
3. Navegar a la carpeta

### Método 3: Copiar archivos
1. Copiar toda la carpeta `EducaCazucá`
2. Pegar en la ubicación deseada

**No requiere instalación de dependencias ni compilación**

---

## 💡 Uso

### Abrir el Proyecto

**Opción 1: Doble clic**
- Hacer doble clic en `index.html`
- Se abre en el navegador predeterminado

**Opción 2: Arrastrar y soltar**
- Abrir el navegador
- Arrastrar `index.html` a la ventana

**Opción 3: Live Server (VS Code)**
```bash
# Instalar extensión Live Server en VS Code
# Click derecho en index.html → "Open with Live Server"
```

### Navegación

| Sección | Descripción |
|---------|-------------|
| **Inicio** | Vista general y hero section |
| **Cursos** | Catálogo con filtros interactivos |
| **Rutas** | Caminos de aprendizaje estructurados |
| **Dashboard** | Seguimiento de progreso (demo) |
| **Certificados** | Sistema de certificación |
| **Categorías** | Cursos por áreas de conocimiento |

---

## 🎮 Funcionalidades Interactivas

### 🎯 Botones del Hero Section

#### "Comenzar Ahora" (Botón Naranja)
- 📍 Navega automáticamente a "Rutas de Aprendizaje"
- ✨ Animación suave de scroll
- 🎨 Efecto de pulsación en las tarjetas de rutas

#### "Ver Cursos" (Botón Blanco)
- 📍 Navega a la sección "Cursos Destacados"
- ✨ Scroll suave
- 🎨 Resalta los filtros de cursos

### 🔍 Filtros de Cursos

**Por Categoría:**
- Hardware
- Software
- Desarrollo

**Por Nivel:**
- Principiante
- Intermedio
- Avanzado

**Funcionalidad:**
1. Click en cualquier filtro
2. Filtrado instantáneo
3. Contador de resultados

### 📖 Modal de Detalles

**Cómo usar:**
1. Click en "Comenzar" o "Continuar" en un curso
2. Ver detalles completos:
   - Descripción extendida
   - Módulos del curso
   - Duración y nivel
   - Opciones de inscripción

**Cerrar modal:**
- Click en la X
- Click fuera del modal
- Tecla ESC

### 📚 Cargar Más Cursos

- Muestra 8 cursos inicialmente
- Click en "Cargar Más Cursos"
- Añade 4 cursos adicionales
- Botón desaparece al mostrar todos

### ✨ Animaciones

- **Scroll**: Elementos aparecen al hacer scroll
- **Hover**: Efectos en tarjetas y botones
- **Transitions**: Cambios suaves de estado

---

## 🎨 Personalización

### Cambiar Colores

Editar `css/variables.css`:

```css
:root {
    --primary: #2c5aa0;        /* Azul - Color principal */
    --secondary: #4CAF50;      /* Verde - Color secundario */
    --accent: #FF5722;         /* Naranja - Color de acento */
    --dark: #2c3e50;          /* Gris oscuro - Textos */
    --light: #f5f7fa;         /* Gris claro - Fondos */
}
```

### Agregar Cursos

Editar `js/data.js`:

```javascript
const courses = [
    // ... cursos existentes
    {
        id: 13,                          // ID único
        title: "Nuevo Curso",
        category: "software",            // hardware, software, desarrollo
        level: "principiante",           // principiante, intermedio, avanzado
        duration: "4 semanas",
        progress: 0,                     // 0-100
        image: "fas fa-code",            // Icono Font Awesome
        color: "#3498db",               // Color del curso
        description: "Descripción corta",
        longDescription: "Descripción detallada del curso",
        modules: [
            "Módulo 1: Introducción",
            "Módulo 2: Fundamentos",
            // ... más módulos
        ],
        certificate: true                // true/false
    }
];
```

### Modificar Textos

Editar `index.html`:
- Buscar el texto a cambiar
- Editar directamente
- Guardar y recargar

### Cambiar Estilos

| Archivo CSS | Modifica |
|------------|----------|
| `variables.css` | Colores, tamaños, sombras |
| `base.css` | Botones, tipografía |
| `header.css` | Navegación |
| `hero.css` | Sección principal |
| `cards.css` | Tarjetas |
| `courses.css` | Cursos |

---

## 🗺️ Roadmap

### ✅ Versión 1.0 (Actual)
- [x] Diseño responsivo completo
- [x] 12 cursos con datos demo
- [x] Sistema de filtros funcional
- [x] Modales interactivos
- [x] Animaciones suaves
- [x] Botones hero funcionales ← **NUEVO**
- [x] Dashboard de progreso (demo)

### 🚧 Versión 2.0 (Próxima)
- [ ] Backend con Node.js/Express
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación
- [ ] Registro de usuarios real
- [ ] Login/Logout funcional
- [ ] API RESTful

### 📅 Versión 3.0 (Futuro)
- [ ] Generación de certificados PDF
- [ ] Sistema de evaluaciones
- [ ] Foros de discusión
- [ ] Video conferencias
- [ ] Gamificación
- [ ] App móvil (React Native)

---

## 🎯 Componentes y Responsabilidades

### Archivos CSS

| Archivo | Responsabilidad |
|---------|----------------|
| `variables.css` | Variables globales (colores, tamaños) |
| `base.css` | Reset, botones, contenedores, badges |
| `header.css` | Logo, navegación, perfil de usuario |
| `hero.css` | Sección principal con gradiente |
| `cards.css` | Todos los tipos de tarjetas |
| `sections.css` | Layout de secciones |
| `courses.css` | Cursos, filtros, barras de progreso |
| `footer.css` | Pie de página, enlaces, redes |
| `modal.css` | Ventanas modales |
| `animations.css` | Keyframes, fade-in |
| `responsive.css` | Media queries |

### Archivos JavaScript

| Archivo | Responsabilidad |
|---------|----------------|
| `data.js` | Arrays de cursos y certificados |
| `courses.js` | Renderizar cursos, "Cargar más" |
| `certificates.js` | Renderizar certificados |
| `filters.js` | Filtrado por categoría/nivel |
| `modal.js` | Abrir/cerrar modales |
| `animations.js` | Animaciones de scroll |
| `hero.js` | **Funcionalidad botones hero** ← **NUEVO** |
| `main.js` | Inicialización de todos los módulos |

---

## 📱 Diseño Responsivo

### Breakpoints

```css
/* Desktop Grande */
> 1200px: Layout completo

/* Desktop */
992px - 1200px: Layout estándar

/* Tablet */
768px - 992px: Grid adaptado, navegación ajustada

/* Mobile */
< 768px: Columna única, menú vertical
```

### Prueba Responsive

1. Abrir `index.html` en el navegador
2. Presionar `F12` (DevTools)
3. Click en icono de dispositivo móvil
4. Probar diferentes tamaños

---

## 🎨 Paleta de Colores

### Colores Principales

| Color | Código | Uso |
|-------|--------|-----|
| 🔵 Azul Principal | `#2c5aa0` | Navegación, botones primarios |
| 🟢 Verde | `#4CAF50` | Certificados, progreso |
| 🟠 Naranja | `#FF5722` | Botones de acción, acentos |
| ⚫ Gris Oscuro | `#2c3e50` | Textos, footer |
| ⚪ Gris Claro | `#f5f7fa` | Fondos |

### Colores Secundarios

- `--primary-light`: #4a7bc8
- `--secondary-light`: #6ec071
- `--accent-light`: #ff7a52
- `--gray`: #95a5a6
- `--gray-light`: #bdc3c7

---

## 📊 Estadísticas del Proyecto

- 📝 **Archivos**: 20 (1 HTML + 11 CSS + 8 JS)
- 📚 **Cursos disponibles**: 12
- 🎓 **Rutas de aprendizaje**: 3
- 🏆 **Certificados demo**: 5
- 🎯 **Secciones**: 6
- 📱 **100% Responsive**: ✅

---

## ❓ Preguntas Frecuentes

### ¿Necesito instalar algo?
No, solo un navegador web moderno.

### ¿Funciona sin internet?
Sí, excepto por Font Awesome y Google Fonts (puede usar local).

### ¿Puedo modificarlo?
Sí, está diseñado para ser personalizable.

### ¿Tiene backend?
No en esta versión. Planificado para v2.0.

### ¿Los cursos son reales?
Son datos demo. Se pueden reemplazar con cursos reales.

---

## 🚀 Próximos Pasos

### Para Desarrollo
1. Configurar servidor local (Live Server, XAMPP)
2. Implementar backend (Node.js, PHP)
3. Conectar base de datos
4. Sistema de autenticación
5. API de cursos

### Para Producción
1. Hosting web (Netlify, Vercel, GitHub Pages)
2. Dominio personalizado
3. SSL/HTTPS
4. Optimización de rendimiento
5. SEO avanzado

---

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

**Proyecto EducaCazucá**

- 📧 Email: info@educacazuca.org
- 📍 Ubicación: Cazucá, Soacha, Colombia
- 💻 GitHub: [github.com/educacazuca](#)

---

## 📜 Licencia

© 2025 EducaCazucá - Todos los derechos reservados

---

<div align="center">

**Hecho con ❤️ para la comunidad de Cazucá**

[⬆ Volver arriba](#-educacazucá---plataforma-educativa-digital)

</div>
