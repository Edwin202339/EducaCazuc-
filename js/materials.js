// Funcionalidad de materiales didácticos
let currentCourseId = null;

function renderMaterials(course) {
    if (!course.materials || course.materials.length === 0) {
        return '';
    }
    
    // Guardar el ID del curso actual
    currentCourseId = course.id;

    const totalMaterials = course.materials.length;
    const completedMaterials = course.materials.filter(m => {
        if (m.type === 'exercise') {
            return m.completed === m.exercises;
        }
        return m.completed === true;
    }).length;

    const progressPercentage = Math.round((completedMaterials / totalMaterials) * 100);

    let materialsHTML = `
        <div class="course-materials">
            <div class="materials-header">
                <h3><i class="fas fa-book"></i> Material de Estudio</h3>
                <div class="materials-progress">
                    <span class="progress-text">${completedMaterials} de ${totalMaterials} completados (${progressPercentage}%)</span>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>
            </div>
            <div class="materials-list">
    `;

    course.materials.forEach((material, index) => {
        const icon = getMaterialIcon(material.type);
        const completionStatus = getMaterialCompletion(material);
        const isCompleted = completionStatus.completed;
        
        // Asignar courseId e índice al material
        material.courseId = course.id;
        material.index = index;
        
        materialsHTML += `
            <div class="material-item ${isCompleted ? 'completed' : ''}" data-material-id="${material.id}">
                <div class="material-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="material-info">
                    <h4>${material.title}</h4>
                    <div class="material-meta">
                        <span class="material-type">${getMaterialTypeLabel(material.type)}</span>
                        <span class="material-detail">${getMaterialDetail(material)}</span>
                    </div>
                    ${completionStatus.progressHTML}
                </div>
                <div class="material-action">
                    ${getMaterialButton(material, isCompleted)}
                </div>
            </div>
        `;
    });

    materialsHTML += `
            </div>
        </div>
    `;

    return materialsHTML;
}

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

function getMaterialDetail(material) {
    if (material.type === 'video') {
        return `<i class="far fa-clock"></i> ${material.duration}`;
    } else if (material.type === 'pdf') {
        return `<i class="far fa-file"></i> ${material.pages} páginas`;
    } else if (material.type === 'exercise') {
        return `<i class="fas fa-tasks"></i> ${material.exercises} ejercicios`;
    } else if (material.type === 'quiz') {
        return `<i class="fas fa-question-circle"></i> ${material.questions} preguntas`;
    }
    return '';
}

function getMaterialCompletion(material) {
    if (material.type === 'exercise') {
        const completed = material.completed || 0;
        const total = material.exercises;
        const percentage = Math.round((completed / total) * 100);
        
        return {
            completed: completed === total,
            progressHTML: `
                <div class="exercise-progress">
                    <div class="exercise-progress-bar">
                        <div class="exercise-progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="exercise-progress-text">${completed}/${total}</span>
                </div>
            `
        };
    }
    
    return {
        completed: material.completed === true,
        progressHTML: ''
    };
}

function getMaterialButton(material, isCompleted) {
    if (isCompleted) {
        return `<button class="btn-material completed" disabled>
                    <i class="fas fa-check-circle"></i> Completado
                </button>`;
    }
    
    const buttonLabels = {
        'video': '<i class="fas fa-play"></i> Ver Video',
        'pdf': '<i class="fas fa-download"></i> Descargar',
        'exercise': '<i class="fas fa-code"></i> Practicar',
        'quiz': '<i class="fas fa-pen"></i> Realizar'
    };
    
    // Obtener el índice del material en el array del curso
    const courseId = material.courseId || currentCourseId;
    const materialIndex = material.index !== undefined ? material.index : 0;
    
    return `<button class="btn-material" onclick="openMaterialInViewer(${courseId}, ${materialIndex})">
                ${buttonLabels[material.type] || 'Abrir'}
            </button>`;
}

function openMaterial(materialId, type) {
    // Simulación de apertura de material
    const actions = {
        'video': 'Reproduciendo video...',
        'pdf': 'Descargando PDF...',
        'exercise': 'Abriendo ejercicio...',
        'quiz': 'Iniciando evaluación...'
    };
    
    mostrarNotificacion(actions[type] || 'Abriendo material...', 'info');
    
    // Simular progreso después de 2 segundos
    setTimeout(() => {
        mostrarNotificacion('Material abierto correctamente', 'success');
    }, 2000);
}

// Nueva función para abrir material en el visor
function openMaterialInViewer(courseId, materialIndex) {
    // Redirigir al visor de curso con el curso y material específico
    window.location.href = `course-viewer.html?courseId=${courseId}&materialIndex=${materialIndex}`;
}

// Añadir estilos para los materiales cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Los materiales se renderizarán cuando se abra el modal del curso
});
