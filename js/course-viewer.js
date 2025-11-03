// Course Viewer JavaScript
let currentCourse = null;
let currentMaterialIndex = 0;

// Obtener el ID del curso de la URL
function getCourseIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('courseId'));
}

// Obtener el índice del material de la URL
function getMaterialIndexFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('materialIndex');
    return index !== null ? parseInt(index) : null;
}

// Cargar el curso al inicio
document.addEventListener('DOMContentLoaded', function() {
    const courseId = getCourseIdFromURL();
    if (courseId) {
        loadCourse(courseId);
    } else {
        alert('No se especificó un curso');
        window.location.href = 'index.html';
    }
});

// Cargar datos del curso
function loadCourse(courseId) {
    currentCourse = courses.find(c => c.id === courseId);
    
    if (!currentCourse) {
        alert('Curso no encontrado');
        window.location.href = 'index.html';
        return;
    }
    
    // Actualizar header
    document.getElementById('course-title').textContent = currentCourse.title;
    document.getElementById('course-category').textContent = currentCourse.category.charAt(0).toUpperCase() + currentCourse.category.slice(1);
    document.getElementById('course-level').textContent = currentCourse.level.charAt(0).toUpperCase() + currentCourse.level.slice(1);
    document.getElementById('course-duration').textContent = currentCourse.duration;
    
    // Actualizar estadísticas
    updateStats();
    
    // Renderizar materiales en sidebar
    renderSidebarMaterials();
    
    // Actualizar progreso
    updateProgress();
    
    // Si hay un materialIndex en la URL, cargar ese material automáticamente
    const materialIndex = getMaterialIndexFromURL();
    if (materialIndex !== null && materialIndex >= 0 && materialIndex < currentCourse.materials.length) {
        // Esperar un momento para que el DOM se actualice
        setTimeout(() => {
            loadMaterial(materialIndex);
        }, 100);
    }
}

// Actualizar estadísticas
function updateStats() {
    const materials = currentCourse.materials || [];
    
    const videos = materials.filter(m => m.type === 'video').length;
    const pdfs = materials.filter(m => m.type === 'pdf').length;
    const exercises = materials.filter(m => m.type === 'exercise').length;
    const quizzes = materials.filter(m => m.type === 'quiz').length;
    
    document.getElementById('total-videos').textContent = videos;
    document.getElementById('total-pdfs').textContent = pdfs;
    document.getElementById('total-exercises').textContent = exercises;
    document.getElementById('total-quizzes').textContent = quizzes;
}

// Renderizar materiales en el sidebar
function renderSidebarMaterials() {
    const sidebarContainer = document.getElementById('materials-sidebar');
    const materials = currentCourse.materials || [];
    
    sidebarContainer.innerHTML = materials.map((material, index) => {
        const icon = getMaterialIcon(material.type);
        const isCompleted = isMaterialCompleted(material);
        
        return `
            <div class="sidebar-material-item ${isCompleted ? 'completed' : ''}" onclick="loadMaterial(${index})">
                <div class="sidebar-material-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="sidebar-material-info">
                    <h4>${material.title}</h4>
                    <span>${getMaterialTypeLabel(material.type)}</span>
                </div>
                <div class="sidebar-material-check">
                    <i class="fas fa-check-circle"></i>
                </div>
            </div>
        `;
    }).join('');
}

// Cargar material específico
function loadMaterial(index) {
    currentMaterialIndex = index;
    const material = currentCourse.materials[index];
    
    // Actualizar sidebar activo
    document.querySelectorAll('.sidebar-material-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Mostrar contenido según el tipo
    const contentViewer = document.getElementById('content-viewer');
    
    switch (material.type) {
        case 'video':
            contentViewer.innerHTML = renderVideoViewer(material);
            break;
        case 'pdf':
            contentViewer.innerHTML = renderPDFViewer(material);
            break;
        case 'exercise':
            contentViewer.innerHTML = renderExerciseViewer(material);
            break;
        case 'quiz':
            contentViewer.innerHTML = renderQuizViewer(material);
            break;
    }
    
    // Mostrar controles de navegación
    document.getElementById('content-navigation').style.display = 'flex';
    updateNavigationButtons();
}

// Renderizar visor de video
function renderVideoViewer(material) {
    const videoUrl = material.url || '';
    const hasRealVideo = videoUrl.includes('youtube');
    
    return `
        <div class="video-viewer">
            <h2><i class="fas fa-play-circle"></i> ${material.title}</h2>
            <div class="video-container">
                ${hasRealVideo ? 
                    `<iframe 
                        width="100%" 
                        height="100%" 
                        src="${videoUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="aspect-ratio: 16/9; border-radius: 12px;">
                    </iframe>` :
                    `<div class="video-placeholder">
                        <div class="play-button" onclick="playVideo()">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>`
                }
            </div>
            <div class="video-info">
                <p><strong>Duración:</strong> ${material.duration}</p>
                <p>Este video te enseñará conceptos importantes sobre ${currentCourse.title}. Asegúrate de tomar notas y practicar lo aprendido.</p>
            </div>
        </div>
    `;
}

// Renderizar visor de PDF
function renderPDFViewer(material) {
    const pdfUrl = material.url || '#';
    const hasRealPDF = pdfUrl !== '#';
    
    return `
        <div class="pdf-viewer">
            <h2><i class="fas fa-file-pdf"></i> ${material.title}</h2>
            <div class="pdf-container">
                <div class="pdf-icon">
                    <i class="fas fa-file-pdf"></i>
                </div>
                <p><strong>Páginas:</strong> ${material.pages}</p>
                <p>Este documento contiene información detallada y ejemplos prácticos.</p>
                ${hasRealPDF ? 
                    `<button class="btn-download" onclick="window.open('${pdfUrl}', '_blank')">
                        <i class="fas fa-external-link-alt"></i>
                        Abrir Documento
                    </button>` :
                    `<button class="btn-download" onclick="downloadPDF('${material.title}')">
                        <i class="fas fa-download"></i>
                        Descargar PDF
                    </button>`
                }
            </div>
        </div>
    `;
}

// Renderizar visor de ejercicios
function renderExerciseViewer(material) {
    const completed = material.completed || 0;
    const total = material.exercises;
    const percentage = Math.round((completed / total) * 100);
    const tasks = material.tasks || [];
    const description = material.description || 'Completa estos ejercicios prácticos';
    
    let exercisesHTML = '';
    
    if (tasks.length > 0) {
        // Usar las tareas específicas del material
        tasks.forEach((task, i) => {
            const isCompleted = i < completed;
            exercisesHTML += `
                <div class="exercise-item ${isCompleted ? 'completed' : ''}">
                    <h4>Ejercicio ${i + 1}: ${task}</h4>
                    <p>${description}</p>
                    <button onclick="completeExercise(${i})">
                        ${isCompleted ? '<i class="fas fa-check"></i> Completado' : '<i class="fas fa-code"></i> Comenzar'}
                    </button>
                </div>
            `;
        });
    } else {
        // Generar ejercicios genéricos si no hay tareas específicas
        for (let i = 0; i < total; i++) {
            const isCompleted = i < completed;
            exercisesHTML += `
                <div class="exercise-item ${isCompleted ? 'completed' : ''}">
                    <h4>Ejercicio ${i + 1}</h4>
                    <p>Completa este ejercicio práctico para reforzar tus conocimientos.</p>
                    <button onclick="completeExercise(${i})">
                        ${isCompleted ? '<i class="fas fa-check"></i> Completado' : '<i class="fas fa-code"></i> Comenzar'}
                    </button>
                </div>
            `;
        }
    }
    
    return `
        <div class="exercise-viewer">
            <h2><i class="fas fa-pencil-alt"></i> ${material.title}</h2>
            <div class="exercise-progress-info">
                <p><strong>${description}</strong></p>
                <p><strong>Progreso:</strong> ${completed} de ${total} ejercicios completados (${percentage}%)</p>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
            <div class="exercise-list">
                ${exercisesHTML}
            </div>
        </div>
    `;
}

// Renderizar visor de quiz
function renderQuizViewer(material) {
    return `
        <div class="quiz-viewer">
            <h2><i class="fas fa-clipboard-check"></i> ${material.title}</h2>
            <div class="quiz-container">
                <div class="quiz-info">
                    <h3>Evaluación del Curso</h3>
                    <p>Demuestra lo que has aprendido respondiendo estas preguntas.</p>
                    <div class="quiz-stats">
                        <div class="quiz-stat">
                            <strong>${material.questions}</strong>
                            <span>Preguntas</span>
                        </div>
                        <div class="quiz-stat">
                            <strong>30</strong>
                            <span>Minutos</span>
                        </div>
                        <div class="quiz-stat">
                            <strong>70%</strong>
                            <span>Para aprobar</span>
                        </div>
                    </div>
                </div>
                <button class="btn-start-quiz" onclick="startQuiz()">
                    <i class="fas fa-pen"></i>
                    ${material.completed ? 'Ver Resultados' : 'Comenzar Evaluación'}
                </button>
            </div>
        </div>
    `;
}

// Funciones auxiliares
function getMaterialIcon(type) {
    const icons = {
        'video': 'fas fa-play-circle',
        'pdf': 'fas fa-file-pdf',
        'exercise': 'fas fa-pencil-alt',
        'quiz': 'fas fa-clipboard-check'
    };
    return icons[type] || 'fas fa-file';
}

function getMaterialTypeLabel(type) {
    const labels = {
        'video': 'Video',
        'pdf': 'Documento PDF',
        'exercise': 'Ejercicio Práctico',
        'quiz': 'Evaluación'
    };
    return labels[type] || 'Material';
}

function isMaterialCompleted(material) {
    if (material.type === 'exercise') {
        return material.completed === material.exercises;
    }
    return material.completed === true;
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnComplete = document.getElementById('btn-complete');
    
    btnPrev.disabled = currentMaterialIndex === 0;
    btnNext.disabled = currentMaterialIndex === currentCourse.materials.length - 1;
    
    const currentMaterial = currentCourse.materials[currentMaterialIndex];
    const isCompleted = isMaterialCompleted(currentMaterial);
    
    if (isCompleted) {
        btnComplete.innerHTML = '<i class="fas fa-check"></i> <span>Completado</span>';
        btnComplete.classList.add('completed');
    } else {
        btnComplete.innerHTML = '<i class="fas fa-check"></i> <span>Marcar como completado</span>';
        btnComplete.classList.remove('completed');
    }
}

// Navegación
document.getElementById('btn-prev').addEventListener('click', function() {
    if (currentMaterialIndex > 0) {
        loadMaterial(currentMaterialIndex - 1);
    }
});

document.getElementById('btn-next').addEventListener('click', function() {
    if (currentMaterialIndex < currentCourse.materials.length - 1) {
        loadMaterial(currentMaterialIndex + 1);
    }
});

document.getElementById('btn-complete').addEventListener('click', function() {
    const material = currentCourse.materials[currentMaterialIndex];
    
    if (material.type === 'exercise') {
        material.completed = material.exercises;
    } else {
        material.completed = true;
    }
    
    renderSidebarMaterials();
    updateNavigationButtons();
    updateProgress();
    
    // Verificar si se completó el curso
    checkCourseCompletion();
});

// Actualizar progreso
function updateProgress() {
    const materials = currentCourse.materials || [];
    const completedCount = materials.filter(m => isMaterialCompleted(m)).length;
    const total = materials.length;
    const percentage = Math.round((completedCount / total) * 100);
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const circumference = 2 * Math.PI * 25;
    const offset = circumference - (percentage / 100) * circumference;
    
    progressBar.style.strokeDashoffset = offset;
    progressText.textContent = percentage + '%';
}

// Verificar si se completó el curso
function checkCourseCompletion() {
    const materials = currentCourse.materials || [];
    const allCompleted = materials.every(m => isMaterialCompleted(m));
    
    if (allCompleted) {
        document.getElementById('completed-course-title').textContent = currentCourse.title;
        document.getElementById('completion-modal').classList.add('active');
    }
}

// Funciones de interacción
function playVideo() {
    alert('Reproduciendo video... (En una implementación real, aquí se cargaría el video)');
}

function downloadPDF(title) {
    alert(`Descargando: ${title}.pdf`);
}

function completeExercise(exerciseIndex) {
    const material = currentCourse.materials[currentMaterialIndex];
    openCodeEditor(exerciseIndex, material);
}

function startQuiz() {
    alert('Iniciando evaluación... (En una implementación real, aquí se cargaría el cuestionario)');
}

function descargarCertificado() {
    alert('Descargando certificado... (Se integraría con el generador de certificados PDF)');
    window.location.href = 'index.html';
}

function volverInicio() {
    window.location.href = 'index.html';
}
