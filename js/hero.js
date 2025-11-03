// Funcionalidad para los botones del Hero
function setupHeroButtons() {
    const btnComenzar = document.getElementById('btn-comenzar');
    const btnVerCursos = document.getElementById('btn-ver-cursos');
    
    // Botón "Comenzar Ahora" - Lleva a la primera ruta de aprendizaje
    if (btnComenzar) {
        btnComenzar.addEventListener('click', function() {
            const rutasSection = document.getElementById('rutas');
            if (rutasSection) {
                rutasSection.scrollIntoView({ behavior: 'smooth' });
                
                // Pequeña animación para resaltar las rutas
                setTimeout(() => {
                    const pathCards = document.querySelectorAll('.path-card');
                    pathCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'scale(1.05)';
                            setTimeout(() => {
                                card.style.transform = 'scale(1)';
                            }, 300);
                        }, index * 100);
                    });
                }, 500);
            }
        });
    }
    
    // Botón "Ver Cursos" - Lleva a la sección de cursos
    if (btnVerCursos) {
        btnVerCursos.addEventListener('click', function() {
            const cursosSection = document.getElementById('cursos');
            if (cursosSection) {
                cursosSection.scrollIntoView({ behavior: 'smooth' });
                
                // Pequeña animación para resaltar los filtros
                setTimeout(() => {
                    const filters = document.querySelector('.courses-filter');
                    if (filters) {
                        filters.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            filters.style.transform = 'scale(1)';
                        }, 300);
                    }
                }, 500);
            }
        });
    }
}

// Funcionalidad para los botones "Comenzar Ruta"
function setupRutasButtons() {
    const rutaButtons = document.querySelectorAll('.btn-ruta');
    
    rutaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ruta = this.getAttribute('data-ruta');
            
            // Navegar a la sección de cursos
            const cursosSection = document.getElementById('cursos');
            if (cursosSection) {
                cursosSection.scrollIntoView({ behavior: 'smooth' });
                
                // Esperar a que termine el scroll y luego aplicar el filtro
                setTimeout(() => {
                    // Buscar el botón de filtro correspondiente
                    let filterToClick;
                    
                    if (ruta === 'hardware') {
                        filterToClick = document.querySelector('[data-filter="hardware"]');
                    } else if (ruta === 'desarrollo') {
                        filterToClick = document.querySelector('[data-filter="desarrollo"]');
                    } else if (ruta === 'software') {
                        filterToClick = document.querySelector('[data-filter="software"]');
                    }
                    
                    // Hacer click en el filtro correspondiente
                    if (filterToClick) {
                        filterToClick.click();
                        
                        // Animar los filtros
                        const filters = document.querySelector('.courses-filter');
                        if (filters) {
                            filters.style.transform = 'scale(1.05)';
                            setTimeout(() => {
                                filters.style.transform = 'scale(1)';
                            }, 300);
                        }
                    }
                }, 800);
            }
        });
    });
}
