// Funcionalidad para filtros de cursos
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!filterButtons.length) return;
    
    // Función para filtrar cursos
    function filterCourses() {
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        let filteredCourses = courses;
        
        if (activeFilter !== 'all') {
            filteredCourses = courses.filter(course => 
                course.category === activeFilter || course.level === activeFilter
            );
        }
        
        renderCourses(filteredCourses, 8);
    }
    
    // Agregar event listeners a los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCourses();
        });
    });
}
