// Funcionalidad del modal de cursos
function openCourseModal(courseId) {
    const courseModal = document.getElementById('course-modal');
    const course = courses.find(c => c.id === courseId);
    
    if (!course || !courseModal) return;
    
    // Verificar si el curso ya está en favoritos
    const favorites = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');
    const isFavorite = favorites.some(fav => fav.id === course.id);
    
    document.getElementById('modal-course-title').textContent = course.title;
    
    const modalContent = document.getElementById('modal-course-content');
    modalContent.innerHTML = `
        <div style="margin-bottom: 20px;">
            <span class="badge badge-primary">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
            <span class="badge badge-secondary" style="margin-left: 8px;">${course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
            <span class="badge badge-accent" style="margin-left: 8px;">${course.duration}</span>
        </div>
        <p style="margin-bottom: 20px;">${course.longDescription}</p>
        <h3 style="margin-bottom: 16px;">Módulos del curso:</h3>
        <ul style="margin-bottom: 24px; padding-left: 20px;">
            ${course.modules.map(module => `<li style="margin-bottom: 8px;">${module}</li>`).join('')}
        </ul>
        ${renderMaterials(course)}
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px;">
            <button class="btn-primary btn-inscribir" data-course-id="${course.id}">
                <i class="fas fa-play-circle"></i> Iniciar curso
            </button>
            <button class="btn-outline btn-favorito" data-course-id="${course.id}" style="${isFavorite ? 'background-color: var(--accent); color: white; border-color: var(--accent);' : ''}">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${isFavorite ? 'Agregado a favoritos' : 'Agregar a favoritos'}
            </button>
        </div>
    `;
    
    courseModal.style.display = 'flex';
    
    // Agregar funcionalidad a los botones
    const btnInscribir = modalContent.querySelector('.btn-inscribir');
    const btnFavorito = modalContent.querySelector('.btn-favorito');
    
    if (btnInscribir) {
        btnInscribir.addEventListener('click', function() {
            inscribirseEnCurso(course);
        });
    }
    
    if (btnFavorito) {
        btnFavorito.addEventListener('click', function() {
            agregarAFavoritos(course);
        });
    }
}

function closeModal() {
    const courseModal = document.getElementById('course-modal');
    if (courseModal) {
        courseModal.style.display = 'none';
    }
}

function setupModal() {
    const closeModalBtn = document.querySelector('.close-modal');
    const courseModal = document.getElementById('course-modal');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Cerrar modal al hacer clic fuera
    if (courseModal) {
        window.addEventListener('click', function(event) {
            if (event.target === courseModal) {
                closeModal();
            }
        });
    }
}

// Función para inscribirse en un curso
function inscribirseEnCurso(course) {
    // Crear notificación de éxito
    mostrarNotificacion(
        '¡Curso iniciado!',
        `Has iniciado el curso "${course.title}". Redirigiendo...`,
        'success'
    );
    
    // Cerrar el modal y redirigir al visor del curso después de 1.5 segundos
    setTimeout(() => {
        closeModal();
        window.location.href = `course-viewer.html?courseId=${course.id}`;
    }, 1500);
}

// Función para agregar a favoritos
function agregarAFavoritos(course) {
    const btn = document.querySelector('.btn-favorito');
    
    // Obtener favoritos del localStorage
    let favorites = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');
    const courseIndex = favorites.findIndex(fav => fav.id === course.id);
    
    // Cambiar el icono y texto
    if (courseIndex === -1) {
        // Agregar a favoritos
        favorites.push(course);
        localStorage.setItem('favoriteCourses', JSON.stringify(favorites));
        
        btn.innerHTML = '<i class="fas fa-heart"></i> Agregado a favoritos';
        btn.style.backgroundColor = 'var(--accent)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--accent)';
        
        mostrarNotificacion(
            '¡Agregado a favoritos!',
            `El curso "${course.title}" ha sido agregado a tus favoritos.`,
            'success'
        );
        
        // Actualizar la sección de favoritos si está visible
        renderFavorites();
    } else {
        // Quitar de favoritos
        favorites.splice(courseIndex, 1);
        localStorage.setItem('favoriteCourses', JSON.stringify(favorites));
        
        btn.innerHTML = '<i class="far fa-heart"></i> Agregar a favoritos';
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'var(--primary)';
        btn.style.borderColor = 'var(--primary)';
        
        mostrarNotificacion(
            'Eliminado de favoritos',
            `El curso "${course.title}" ha sido eliminado de tus favoritos.`,
            'info'
        );
        
        // Actualizar la sección de favoritos si está visible
        renderFavorites();
    }
}

// Función para mostrar notificaciones
function mostrarNotificacion(titulo, mensaje, tipo = 'success') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.innerHTML = `
        <div class="notificacion-header">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'info' ? 'info-circle' : 'exclamation-circle'}"></i>
            <strong>${titulo}</strong>
        </div>
        <div class="notificacion-body">${mensaje}</div>
    `;
    
    // Agregar al body
    document.body.appendChild(notificacion);
    
    // Mostrar con animación
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
        notificacion.style.opacity = '1';
    }, 100);
    
    // Ocultar después de 4 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateX(400px)';
        notificacion.style.opacity = '0';
        
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 4000);
}
