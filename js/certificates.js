// Funcionalidad para renderizar certificados
function renderCertificates() {
    const certificatesContainer = document.getElementById('certificates-container');
    
    if (!certificatesContainer) return;
    
    certificatesContainer.innerHTML = '';
    
    if (certificates.length === 0) {
        certificatesContainer.innerHTML = `
            <div class="no-certificates" style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
                <div style="font-size: 4rem; color: #cbd5e1; margin-bottom: 20px;">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3 style="color: #64748b; margin-bottom: 10px;">No hay certificados disponibles</h3>
                <p style="color: #94a3b8;">Completa tus cursos para obtener certificados verificables</p>
                <a href="#cursos" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; text-decoration: none;">
                    <i class="fas fa-graduation-cap"></i> Explorar Cursos
                </a>
            </div>
        `;
        return;
    }
    
    certificates.forEach(cert => {
        const course = courses.find(c => c.id === cert.courseId);
        if (!course) return;
        
        const certCard = document.createElement('div');
        certCard.className = 'course-card card fade-in';
        certCard.innerHTML = `
            <div class="course-image" style="background: linear-gradient(135deg, ${course.color}, ${course.color}99); display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white;">
                <i class="fas fa-award"></i>
            </div>
            <div class="course-content">
                <span class="course-category" style="background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white;">
                    <i class="fas fa-certificate"></i> Certificado
                </span>
                <h3 class="course-title">${cert.title}</h3>
                <p style="color: #64748b; margin: 8px 0;">Emitido: ${new Date(cert.issueDate).toLocaleDateString('es-ES')}</p>
                <p style="color: #64748b; margin: 8px 0;">Calificación: <strong style="color: #16a34a;">${cert.score}%</strong></p>
                <div class="course-meta" style="margin-top: 12px;">
                    <span style="font-size: 0.85rem; color: #64748b;">
                        <i class="fas fa-qrcode"></i> ${cert.verificationCode}
                    </span>
                </div>
                <button class="btn-primary btn-view-certificate" data-cert-id="${cert.id}" style="width: 100%; margin-top: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <i class="fas fa-external-link-alt"></i> Ver Certificado
                </button>
            </div>
        `;
        certificatesContainer.appendChild(certCard);
    });
    
    // Agregar event listeners a los botones de ver certificado
    document.querySelectorAll('.btn-view-certificate').forEach(button => {
        button.addEventListener('click', function() {
            const certId = parseInt(this.getAttribute('data-cert-id'));
            abrirModalCertificado(certId);
        });
    });
}
