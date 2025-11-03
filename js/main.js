// Inicialización principal de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cursos
    renderCourses(courses, 8);
    
    // Inicializar favoritos
    renderFavorites();
    
    // Inicializar certificados
    renderCertificates();
    
    // Configurar filtros
    setupFilters();
    
    // Configurar botón "Cargar más"
    setupLoadMoreButton();
    
    // Configurar modal
    setupModal();
    
    // Configurar animaciones
    setupScrollAnimations();
    
    // Configurar botones del Hero
    setupHeroButtons();
    
    // Configurar botones de rutas de aprendizaje
    setupRutasButtons();
});
