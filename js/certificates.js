// Funcionalidad para renderizar certificados
function renderCertificates() {
    const certificatesContainer = document.getElementById('certificates-container');
    
    if (!certificatesContainer) return;
    
    certificatesContainer.innerHTML = '';
    
    certificates.forEach(cert => {
        const course = courses.find(c => c.id === cert.courseId);
        const certCard = document.createElement('div');
        certCard.className = 'course-card card fade-in';
        certCard.innerHTML = `
            <div class="course-image" style="background: linear-gradient(135deg, ${course.color}, ${course.color}99);">
                <i class="fas fa-award"></i>
            </div>
            <div class="course-content">
                <span class="course-category">Certificado</span>
                <h3 class="course-title">${cert.title}</h3>
                <p>Emitido: ${new Date(cert.issueDate).toLocaleDateString('es-ES')}</p>
                <p>Calificación: ${cert.score}%</p>
                <div class="course-meta">
                    <span><i class="fas fa-qrcode"></i> ${cert.verificationCode}</span>
                </div>
                <button class="btn-primary btn-view-certificate" data-cert-id="${cert.id}" style="width: 100%; margin-top: 16px;">
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
