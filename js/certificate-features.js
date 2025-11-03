// Funciones para las características de certificación

// Función para mostrar información sobre certificados automáticos
function mostrarInfoCertificadosAutomaticos() {
    const modal = document.getElementById('certificate-modal');
    const modalContent = document.getElementById('certificate-preview-content');
    
    modalContent.innerHTML = `
        <div style="padding: 30px; text-align: center;">
            <div style="width: 100px; height: 100px; margin: 0 auto 30px; background: linear-gradient(135deg, #2563eb, #1e40af); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);">
                <i class="fas fa-certificate"></i>
            </div>
            
            <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 2rem;">Certificados Automáticos</h2>
            
            <p style="color: #64748b; line-height: 1.8; margin-bottom: 30px; font-size: 1.1rem;">
                Nuestro sistema genera certificados de forma automática cuando cumples con los requisitos del curso.
            </p>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
                <h3 style="color: #1e40af; margin-bottom: 15px; font-size: 1.3rem;">
                    <i class="fas fa-check-circle"></i> Requisitos para Obtener el Certificado
                </h3>
                <ul style="text-align: left; color: #475569; line-height: 2; list-style: none; padding: 0;">
                    <li><i class="fas fa-star" style="color: #fbbf24; margin-right: 10px;"></i> Completar el 100% de los materiales del curso</li>
                    <li><i class="fas fa-star" style="color: #fbbf24; margin-right: 10px;"></i> Aprobar todos los ejercicios prácticos</li>
                    <li><i class="fas fa-star" style="color: #fbbf24; margin-right: 10px;"></i> Obtener una calificación mínima del 80%</li>
                    <li><i class="fas fa-star" style="color: #fbbf24; margin-right: 10px;"></i> Completar la evaluación final del curso</li>
                </ul>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 25px;">
                <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 20px; border-radius: 12px;">
                    <div style="font-size: 2.5rem; color: #2563eb; margin-bottom: 10px;">
                        <i class="fas fa-award"></i>
                    </div>
                    <h4 style="color: #1e40af; margin-bottom: 8px;">Calidad Profesional</h4>
                    <p style="color: #475569; font-size: 0.9rem;">Diseño profesional para tu portafolio</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); padding: 20px; border-radius: 12px;">
                    <div style="font-size: 2.5rem; color: #16a34a; margin-bottom: 10px;">
                        <i class="fas fa-download"></i>
                    </div>
                    <h4 style="color: #15803d; margin-bottom: 8px;">Descarga Inmediata</h4>
                    <p style="color: #475569; font-size: 0.9rem;">Disponible en formato PDF</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px;">
                    <div style="font-size: 2.5rem; color: #f59e0b; margin-bottom: 10px;">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h4 style="color: #d97706; margin-bottom: 8px;">100% Verificable</h4>
                    <p style="color: #475569; font-size: 0.9rem;">Código QR único de autenticación</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" onclick="document.getElementById('certificate-modal').style.display='none'; document.location.href='#cursos';" style="display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-graduation-cap"></i> Explorar Cursos
                </button>
                <button class="btn-outline" onclick="cerrarModalCertificado()" style="display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-times"></i> Cerrar
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Función para mostrar el verificador de certificados con QR
function mostrarVerificadorQR() {
    const modal = document.getElementById('certificate-modal');
    const modalContent = document.getElementById('certificate-preview-content');
    
    modalContent.innerHTML = `
        <div style="padding: 30px; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 100px; height: 100px; margin: 0 auto 20px; background: linear-gradient(135deg, #7c3aed, #6d28d9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);">
                    <i class="fas fa-qrcode"></i>
                </div>
                <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 2rem;">Verificador de Certificados</h2>
                <p style="color: #64748b; line-height: 1.6;">
                    Ingresa el código de verificación del certificado para validar su autenticidad
                </p>
            </div>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
                <label style="display: block; color: #1e293b; font-weight: 600; margin-bottom: 10px; font-size: 1.1rem;">
                    <i class="fas fa-fingerprint"></i> Código de Verificación
                </label>
                <input 
                    type="text" 
                    id="verification-code-input"
                    placeholder="Ej: EDUCA-CAZ-2025-PYT-001" 
                    style="width: 100%; padding: 15px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem; font-family: 'Courier New', monospace; text-transform: uppercase; transition: all 0.3s ease;"
                    onkeyup="this.value = this.value.toUpperCase()"
                />
                
                <button 
                    class="btn-primary" 
                    onclick="verificarCertificado()"
                    style="width: 100%; margin-top: 15px; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 1.1rem; padding: 15px;"
                >
                    <i class="fas fa-search"></i> Verificar Certificado
                </button>
            </div>
            
            <div id="verification-result" style="margin-bottom: 20px;"></div>
            
            <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 20px; border-radius: 12px; border-left: 4px solid #2563eb;">
                <h4 style="color: #1e40af; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-info-circle"></i> ¿Cómo verificar un certificado?
                </h4>
                <ol style="color: #475569; line-height: 1.8; padding-left: 20px; margin: 0;">
                    <li>Localiza el código QR en el certificado impreso o digital</li>
                    <li>Escanea el código QR con tu teléfono móvil</li>
                    <li>O ingresa manualmente el código de verificación que aparece debajo del QR</li>
                    <li>Verifica que los datos coincidan con la información del certificado</li>
                </ol>
            </div>
            
            <div style="text-align: center; margin-top: 25px;">
                <button class="btn-outline" onclick="cerrarModalCertificado()" style="display: inline-flex; align-items: center; gap: 8px;">
                    <i class="fas fa-times"></i> Cerrar
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Focus en el input
    setTimeout(() => {
        document.getElementById('verification-code-input').focus();
    }, 300);
}

// Función para verificar el certificado
function verificarCertificado() {
    const input = document.getElementById('verification-code-input');
    const code = input.value.trim();
    const resultDiv = document.getElementById('verification-result');
    
    if (!code) {
        resultDiv.innerHTML = `
            <div style="background: #fef2f2; border: 2px solid #fca5a5; padding: 20px; border-radius: 8px; color: #991b1b;">
                <i class="fas fa-exclamation-triangle"></i> Por favor ingresa un código de verificación
            </div>
        `;
        return;
    }
    
    // Buscar el certificado en la base de datos
    const certificado = certificates.find(c => c.verificationCode === code);
    
    if (certificado) {
        const curso = courses.find(c => c.id === certificado.courseId);
        const fechaEmision = new Date(certificado.issueDate).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        resultDiv.innerHTML = `
            <div style="background: linear-gradient(135deg, #dcfce7, #bbf7d0); border: 2px solid #86efac; padding: 25px; border-radius: 12px; animation: slideDown 0.5s ease;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; color: #16a34a; margin-bottom: 10px;">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 style="color: #15803d; font-size: 1.5rem; margin-bottom: 10px;">✓ Certificado Verificado</h3>
                    <p style="color: #166534; font-weight: 600;">Este certificado es auténtico y válido</p>
                </div>
                
                <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                    <h4 style="color: #1e293b; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">
                        <i class="fas fa-file-certificate"></i> Información del Certificado
                    </h4>
                    <div style="display: grid; gap: 12px; color: #475569;">
                        <div><strong style="color: #1e293b;">Curso:</strong> ${certificado.title}</div>
                        <div><strong style="color: #1e293b;">Estudiante:</strong> Edwin Puertas</div>
                        <div><strong style="color: #1e293b;">Fecha de Emisión:</strong> ${fechaEmision}</div>
                        <div><strong style="color: #1e293b;">Calificación:</strong> <span style="color: #16a34a; font-size: 1.2rem; font-weight: bold;">${certificado.score}%</span></div>
                        <div><strong style="color: #1e293b;">Duración:</strong> ${curso.duration}</div>
                        <div><strong style="color: #1e293b;">Código:</strong> <code style="background: #f1f5f9; padding: 5px 10px; border-radius: 4px; font-family: 'Courier New', monospace;">${certificado.verificationCode}</code></div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn-primary" onclick="abrirModalCertificado(${certificado.id})" style="display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fas fa-eye"></i> Ver Certificado Completo
                    </button>
                </div>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background: #fef2f2; border: 2px solid #fca5a5; padding: 25px; border-radius: 12px; text-align: center;">
                <div style="font-size: 3rem; color: #dc2626; margin-bottom: 15px;">
                    <i class="fas fa-times-circle"></i>
                </div>
                <h3 style="color: #991b1b; margin-bottom: 10px;">Certificado No Encontrado</h3>
                <p style="color: #b91c1c; margin-bottom: 20px;">
                    El código de verificación ingresado no corresponde a ningún certificado en nuestra base de datos.
                </p>
                <div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; text-align: left;">
                    <strong style="color: #1e293b; display: block; margin-bottom: 8px;">Verifica que:</strong>
                    <ul style="color: #64748b; margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>El código esté escrito correctamente</li>
                        <li>No haya espacios adicionales</li>
                        <li>Incluya todos los guiones y caracteres</li>
                    </ul>
                </div>
            </div>
        `;
    }
}

// Función para mostrar las insignias digitales
function mostrarInsignias() {
    const modal = document.getElementById('certificate-modal');
    const modalContent = document.getElementById('certificate-preview-content');
    
    // Insignias obtenidas (basadas en certificados completados)
    const insigniasObtenidas = [
        {
            nombre: "Maestro Python",
            descripcion: "Dominio completo de Python para Principiantes",
            icon: "fa-code",
            iconType: "fas",
            color: "#3776ab",
            bgGradient: "linear-gradient(135deg, #3776ab, #4b8bbe)",
            fecha: "Oct 2025"
        },
        {
            nombre: "Desarrollador Web",
            descripcion: "Experto en HTML, CSS y desarrollo web",
            icon: "fa-laptop-code",
            iconType: "fas",
            color: "#e44d26",
            bgGradient: "linear-gradient(135deg, #e44d26, #f16529)",
            fecha: "Sep 2025"
        },
        {
            nombre: "Pionero Arduino",
            descripcion: "Dominio de Arduino y electrónica básica",
            icon: "fa-microchip",
            iconType: "fas",
            color: "#00979d",
            bgGradient: "linear-gradient(135deg, #00979d, #00b4bd)",
            fecha: "Ago 2025"
        }
    ];
    
    const insigniasDisponibles = [
        {
            nombre: "Experto JavaScript",
            descripcion: "Completa JavaScript Moderno",
            icon: "fa-js-square",
            iconType: "fab",
            color: "#f7df1e",
            bgGradient: "linear-gradient(135deg, #f7df1e, #f0db4f)",
            bloqueado: true
        },
        {
            nombre: "Maestro React",
            descripcion: "Domina React JS",
            icon: "fa-atom",
            iconType: "fas",
            color: "#61dafb",
            bgGradient: "linear-gradient(135deg, #61dafb, #53c1fc)",
            bloqueado: true
        },
        {
            nombre: "Gurú de Datos",
            descripcion: "Completa todos los cursos de bases de datos",
            icon: "fa-database",
            iconType: "fas",
            color: "#336791",
            bgGradient: "linear-gradient(135deg, #336791, #4479a1)",
            bloqueado: true
        }
    ];
    
    modalContent.innerHTML = `
        <div style="padding: 30px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="width: 100px; height: 100px; margin: 0 auto 20px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);">
                    <i class="fas fa-trophy"></i>
                </div>
                <h2 style="color: #1e293b; margin-bottom: 15px; font-size: 2rem;">Insignias Digitales</h2>
                <p style="color: #64748b; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                    Gana insignias por completar cursos y demostrar dominio en competencias específicas
                </p>
            </div>
            
            <div style="margin-bottom: 40px;">
                <h3 style="color: #1e293b; margin-bottom: 20px; font-size: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-award" style="color: #fbbf24;"></i> Insignias Obtenidas (${insigniasObtenidas.length})
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
                    ${insigniasObtenidas.map(insignia => `
                        <div style="background: white; border: 3px solid ${insignia.color}; border-radius: 16px; padding: 30px; text-align: center; box-shadow: 0 8px 24px rgba(0,0,0,0.12); transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;" 
                             onmouseover="this.style.transform='translateY(-8px) scale(1.02)'; this.style.boxShadow='0 12px 32px rgba(0,0,0,0.2)';" 
                             onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)';">
                            
                            <!-- Efecto de brillo de fondo -->
                            <div style="position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: ${insignia.bgGradient}; opacity: 0.05; border-radius: 50%; z-index: 0;"></div>
                            
                            <!-- Icono principal -->
                            <div style="position: relative; z-index: 1; width: 90px; height: 90px; margin: 0 auto 20px; background: ${insignia.bgGradient}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; color: white; box-shadow: 0 6px 20px ${insignia.color}50, inset 0 -4px 8px rgba(0,0,0,0.2);">
                                <i class="${insignia.iconType} ${insignia.icon}" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.3);"></i>
                            </div>
                            
                            <!-- Título y descripción -->
                            <h4 style="position: relative; z-index: 1; color: #1e293b; margin-bottom: 10px; font-size: 1.2rem; font-weight: 700;">${insignia.nombre}</h4>
                            <p style="position: relative; z-index: 1; color: #64748b; font-size: 0.95rem; margin-bottom: 15px; line-height: 1.5;">${insignia.descripcion}</p>
                            
                            <!-- Badge de fecha -->
                            <div style="position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 6px; background: ${insignia.bgGradient}; color: white; padding: 8px 18px; border-radius: 25px; font-size: 0.9rem; font-weight: 700; box-shadow: 0 4px 12px ${insignia.color}40;">
                                <i class="fas fa-calendar-check"></i> ${insignia.fecha}
                            </div>
                            
                            <!-- Estrella decorativa -->
                            <div style="position: absolute; top: 15px; right: 15px; color: ${insignia.color}; font-size: 1.5rem; opacity: 0.3; z-index: 0;">
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin-bottom: 20px; font-size: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-lock" style="color: #94a3b8;"></i> Insignias Disponibles (${insigniasDisponibles.length})
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
                    ${insigniasDisponibles.map(insignia => `
                        <div style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border: 3px dashed #cbd5e1; border-radius: 16px; padding: 30px; text-align: center; position: relative; overflow: hidden;">
                            
                            <!-- Icono de candado grande en el fondo -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 8rem; color: #cbd5e1; opacity: 0.15; z-index: 0;">
                                <i class="fas fa-lock"></i>
                            </div>
                            
                            <!-- Icono principal bloqueado -->
                            <div style="position: relative; z-index: 1; width: 90px; height: 90px; margin: 0 auto 20px; background: linear-gradient(135deg, #cbd5e1, #94a3b8); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; color: white; box-shadow: 0 4px 16px rgba(0,0,0,0.15), inset 0 -4px 8px rgba(0,0,0,0.1); filter: grayscale(100%);">
                                <i class="${insignia.iconType} ${insignia.icon}"></i>
                            </div>
                            
                            <!-- Título y descripción -->
                            <h4 style="position: relative; z-index: 1; color: #64748b; margin-bottom: 10px; font-size: 1.2rem; font-weight: 700;">${insignia.nombre}</h4>
                            <p style="position: relative; z-index: 1; color: #94a3b8; font-size: 0.95rem; margin-bottom: 15px; line-height: 1.5;">${insignia.descripcion}</p>
                            
                            <!-- Badge de bloqueado -->
                            <div style="position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #94a3b8, #64748b); color: white; padding: 8px 18px; border-radius: 25px; font-size: 0.9rem; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                                <i class="fas fa-lock"></i> Bloqueada
                            </div>
                            
                            <!-- Overlay de progreso -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: #e2e8f0; z-index: 2;">
                                <div style="height: 100%; width: 0%; background: linear-gradient(90deg, #3b82f6, #2563eb); transition: width 0.5s ease;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="text-align: center; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" onclick="document.getElementById('certificate-modal').style.display='none'; document.location.href='#cursos';" style="display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-graduation-cap"></i> Desbloquear Más Insignias
                </button>
                <button class="btn-outline" onclick="cerrarModalCertificado()" style="display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-times"></i> Cerrar
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .certificate-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
    }
`;
document.head.appendChild(style);
