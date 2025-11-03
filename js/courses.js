// Funcionalidad para renderizar cursos
function renderCourses(coursesToRender, limit = null) {
    const coursesContainer = document.getElementById('courses-container');
    const loadMoreBtn = document.getElementById('load-more-courses');
    
    if (!coursesContainer) return;
    
    coursesContainer.innerHTML = '';
    
    const coursesToShow = limit ? coursesToRender.slice(0, limit) : coursesToRender;
    
    coursesToShow.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card card fade-in';
        courseCard.innerHTML = `
            ${course.certificate ? '<div class="course-badge">Certificado</div>' : ''}
            <div class="course-image" style="background: linear-gradient(135deg, ${course.color}, ${course.color}99);">
                <i class="${course.image}"></i>
            </div>
            <div class="course-content">
                <span class="course-category">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p>${course.description}</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${course.progress}%;"></div>
                </div>
                <div class="course-meta">
                    <span><i class="far fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-signal"></i> ${course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 16px;" data-course-id="${course.id}">
                    ${course.progress > 0 ? 'Continuar' : 'Comenzar'} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
    
    // Agregar event listeners a los botones de curso
    document.querySelectorAll('[data-course-id]').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-course-id'));
            openCourseModal(courseId);
        });
    });
    
    // Mostrar u ocultar botón "Cargar más"
    if (loadMoreBtn) {
        loadMoreBtn.style.display = coursesToRender.length > (limit || coursesToRender.length) ? 'block' : 'none';
    }
}

// Función para cargar más cursos
function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-courses');
    let visibleCourses = 8;
    
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', function() {
        visibleCourses += 4;
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        let filteredCourses = courses;
        
        if (activeFilter !== 'all') {
            filteredCourses = courses.filter(course => 
                course.category === activeFilter || course.level === activeFilter
            );
        }
        
        renderCourses(filteredCourses, visibleCourses);
        
        if (visibleCourses >= filteredCourses.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Función para renderizar cursos favoritos
function renderFavorites() {
    const favoritesContainer = document.getElementById('favorites-container');
    const noFavoritesMessage = document.getElementById('no-favorites-message');
    
    if (!favoritesContainer) return;
    
    // Obtener favoritos del localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');
    
    if (favorites.length === 0) {
        favoritesContainer.style.display = 'none';
        if (noFavoritesMessage) {
            noFavoritesMessage.style.display = 'block';
        }
        return;
    }
    
    favoritesContainer.style.display = 'grid';
    if (noFavoritesMessage) {
        noFavoritesMessage.style.display = 'none';
    }
    
    favoritesContainer.innerHTML = '';
    
    favorites.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card card fade-in';
        courseCard.innerHTML = `
            <div class="course-favorite-badge" onclick="removeFavorite(${course.id})" title="Quitar de favoritos">
                <i class="fas fa-heart"></i>
            </div>
            ${course.certificate ? '<div class="course-badge">Certificado</div>' : ''}
            <div class="course-image" style="background: linear-gradient(135deg, ${course.color}, ${course.color}99);">
                <i class="${course.image}"></i>
            </div>
            <div class="course-content">
                <span class="course-category">${course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p>${course.description}</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${course.progress}%;"></div>
                </div>
                <div class="course-meta">
                    <span><i class="far fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-signal"></i> ${course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
                </div>
                <button class="btn-primary favorite-course-btn" style="width: 100%; margin-top: 16px;" data-course-id="${course.id}">
                    ${course.progress > 0 ? 'Continuar' : 'Comenzar'} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        favoritesContainer.appendChild(courseCard);
    });
    
    // Agregar event listeners a los botones de curso
    document.querySelectorAll('.favorite-course-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = parseInt(this.getAttribute('data-course-id'));
            openCourseModal(courseId);
        });
    });
}

// Función para quitar un curso de favoritos
function removeFavorite(courseId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteCourses') || '[]');
    favorites = favorites.filter(fav => fav.id !== courseId);
    localStorage.setItem('favoriteCourses', JSON.stringify(favorites));
    
    const course = courses.find(c => c.id === courseId);
    if (course) {
        mostrarNotificacion(
            'Eliminado de favoritos',
            `"${course.title}" ha sido eliminado de tus favoritos.`,
            'info'
        );
    }
    
    renderFavorites();
}

