// Función para generar certificado PDF usando jsPDF
function generarCertificadoPDF(certificado) {
    // Obtener información del curso relacionado
    const curso = courses.find(c => c.id === certificado.courseId);
    
    if (!curso) {
        console.error('Curso no encontrado');
        return;
    }
    
    // Crear nuevo documento PDF en orientación horizontal
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });
    
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    
    // Colores
    const primaryColor = [44, 90, 160]; // Azul
    const accentColor = [255, 87, 34]; // Naranja
    const textColor = [44, 62, 80]; // Gris oscuro
    
    // Borde decorativo
    doc.setLineWidth(2);
    doc.setDrawColor(...primaryColor);
    doc.rect(10, 10, width - 20, height - 20);
    
    doc.setLineWidth(0.5);
    doc.setDrawColor(...accentColor);
    doc.rect(12, 12, width - 24, height - 24);
    
    // Logo y encabezado
    doc.setFontSize(32);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('EducaCazucá', width / 2, 30, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Plataforma Educativa para la Reducción de la Brecha Digital', width / 2, 38, { align: 'center' });
    
    // Línea divisoria
    doc.setLineWidth(0.5);
    doc.setDrawColor(...accentColor);
    doc.line(40, 45, width - 40, 45);
    
    // Título del certificado
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICADO DE FINALIZACIÓN', width / 2, 60, { align: 'center' });
    
    // Texto "Se certifica que"
    doc.setFontSize(14);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Este certificado se otorga a:', width / 2, 75, { align: 'center' });
    
    // Nombre del estudiante
    doc.setFontSize(26);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Edwin Puertas', width / 2, 90, { align: 'center' });
    
    // Línea bajo el nombre
    doc.setLineWidth(0.3);
    doc.setDrawColor(...primaryColor);
    doc.line(width / 2 - 50, 92, width / 2 + 50, 92);
    
    // Texto de reconocimiento
    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Por haber completado exitosamente el curso:', width / 2, 105, { align: 'center' });
    
    // Nombre del curso
    doc.setFontSize(18);
    doc.setTextColor(...accentColor);
    doc.setFont('helvetica', 'bold');
    doc.text(certificado.title, width / 2, 115, { align: 'center' });
    
    // Detalles del curso
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    
    const fechaEmision = new Date(certificado.issueDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    doc.text(`Fecha de finalización: ${fechaEmision}`, width / 2, 130, { align: 'center' });
    doc.text(`Calificación obtenida: ${certificado.score}%`, width / 2, 137, { align: 'center' });
    doc.text(`Duración del curso: ${curso.duration}`, width / 2, 144, { align: 'center' });
    
    // Código de verificación
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont('courier', 'normal');
    doc.text(`Código de verificación: ${certificado.verificationCode}`, width / 2, 155, { align: 'center' });
    
    // Línea divisoria inferior
    doc.setLineWidth(0.5);
    doc.setDrawColor(...accentColor);
    doc.line(40, 165, width - 40, 165);
    
    // Firmas
    const firmaY = 180;
    
    // Firma izquierda
    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Director Académico', width / 3, firmaY, { align: 'center' });
    doc.setLineWidth(0.3);
    doc.setDrawColor(...textColor);
    doc.line(width / 3 - 30, firmaY - 5, width / 3 + 30, firmaY - 5);
    
    // Firma derecha
    doc.text('Coordinador del Programa', (width / 3) * 2, firmaY, { align: 'center' });
    doc.line((width / 3) * 2 - 30, firmaY - 5, (width / 3) * 2 + 30, firmaY - 5);
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.setFont('helvetica', 'italic');
    doc.text('Cazucá, Soacha - Colombia', width / 2, height - 15, { align: 'center' });
    doc.text('www.educacazuca.org | info@educacazuca.org', width / 2, height - 10, { align: 'center' });
    
    // Guardar PDF
    doc.save(`Certificado_${certificado.title.replace(/\s+/g, '_')}_${certificado.verificationCode}.pdf`);
}

// Función para abrir modal de certificado
function abrirModalCertificado(certificadoId) {
    const certificado = certificates.find(c => c.id === certificadoId);
    const curso = courses.find(c => c.id === certificado.courseId);
    
    if (!certificado || !curso) {
        console.error('Certificado o curso no encontrado');
        return;
    }
    
    const modal = document.getElementById('certificate-modal');
    const modalContent = document.getElementById('certificate-preview-content');
    
    const fechaEmision = new Date(certificado.issueDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modalContent.innerHTML = `
        <div class="certificate-preview">
            <div class="certificate-border">
                <div class="certificate-inner">
                    <!-- Header -->
                    <div class="certificate-header">
                        <div class="certificate-logo">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h1 class="certificate-brand">EducaCazucá</h1>
                        <p class="certificate-subtitle">Plataforma Educativa para la Reducción de la Brecha Digital</p>
                    </div>
                    
                    <div class="certificate-divider"></div>
                    
                    <!-- Título -->
                    <h2 class="certificate-title-main">CERTIFICADO DE FINALIZACIÓN</h2>
                    
                    <!-- Contenido -->
                    <div class="certificate-content">
                        <p class="certificate-text">Este certificado se otorga a:</p>
                        <h3 class="certificate-student-name">Edwin Puertas</h3>
                        
                        <p class="certificate-text" style="margin-top: 20px;">Por haber completado exitosamente el curso:</p>
                        <h3 class="certificate-course-name">${certificado.title}</h3>
                        
                        <div class="certificate-details">
                            <div class="detail-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>Fecha: ${fechaEmision}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-chart-line"></i>
                                <span>Calificación: ${certificado.score}%</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span>Duración: ${curso.duration}</span>
                            </div>
                        </div>
                        
                        <div class="certificate-verification">
                            <i class="fas fa-qrcode"></i>
                            <span>Código: ${certificado.verificationCode}</span>
                        </div>
                    </div>
                    
                    <div class="certificate-divider"></div>
                    
                    <!-- Firmas -->
                    <div class="certificate-signatures">
                        <div class="signature">
                            <div class="signature-line"></div>
                            <p class="signature-name">Director Académico</p>
                        </div>
                        <div class="signature">
                            <div class="signature-line"></div>
                            <p class="signature-name">Coordinador del Programa</p>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div class="certificate-footer">
                        <p>Cazucá, Soacha - Colombia</p>
                        <p>www.educacazuca.org | info@educacazuca.org</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="certificate-actions">
            <button class="btn-primary" onclick="generarCertificadoPDF(certificates[${certificadoId - 1}])">
                <i class="fas fa-download"></i> Descargar PDF
            </button>
            <button class="btn-outline" onclick="cerrarModalCertificado()">
                <i class="fas fa-times"></i> Cerrar
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Función para cerrar modal de certificado
function cerrarModalCertificado() {
    const modal = document.getElementById('certificate-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
