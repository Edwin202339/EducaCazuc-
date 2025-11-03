// Editor de código interactivo
let currentExercise = null;
let currentExerciseIndex = 0;

// Definir ejercicios con casos de prueba
const exerciseTemplates = {
    // Python exercises
    python_calculator: {
        language: 'python',
        instructions: 'Crea una función llamada sumar() que tome dos números y retorne su suma.',
        starterCode: '# Define la función sumar aquí\ndef sumar(a, b):\n    # Tu código aquí\n    pass\n\n# Prueba tu función\nresultado = sumar(5, 3)\nprint(resultado)',
        solution: 'def sumar(a, b):\n    return a + b\n\nresultado = sumar(5, 3)\nprint(resultado)',
        tests: [
            { input: 'sumar(5, 3)', expected: '8', name: 'Suma de 5 + 3' },
            { input: 'sumar(10, 20)', expected: '30', name: 'Suma de 10 + 20' },
            { input: 'sumar(-5, 5)', expected: '0', name: 'Suma de -5 + 5' }
        ],
        hints: [
            'Usa la palabra clave "return" para devolver el resultado',
            'La suma en Python se hace con el operador +'
        ]
    },
    
    // JavaScript exercises
    javascript_function: {
        language: 'javascript',
        instructions: 'Crea una función llamada multiplicar() que tome dos números y retorne su multiplicación.',
        starterCode: '// Define la función multiplicar aquí\nfunction multiplicar(a, b) {\n    // Tu código aquí\n}\n\n// Prueba tu función\nconsole.log(multiplicar(5, 3));',
        solution: 'function multiplicar(a, b) {\n    return a * b;\n}\n\nconsole.log(multiplicar(5, 3));',
        tests: [
            { input: 'multiplicar(5, 3)', expected: '15', name: 'Multiplicación 5 × 3' },
            { input: 'multiplicar(10, 2)', expected: '20', name: 'Multiplicación 10 × 2' },
            { input: 'multiplicar(0, 100)', expected: '0', name: 'Multiplicación con 0' }
        ],
        hints: [
            'Usa la palabra clave "return" para devolver el resultado',
            'La multiplicación en JavaScript se hace con el operador *'
        ]
    },

    // HTML/CSS exercises
    html_structure: {
        language: 'html',
        instructions: 'Crea una estructura HTML básica con un título h1 que diga "Hola Mundo" y un párrafo con tu nombre.',
        starterCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Mi Página</title>\n</head>\n<body>\n    <!-- Tu código aquí -->\n</body>\n</html>',
        solution: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Mi Página</title>\n</head>\n<body>\n    <h1>Hola Mundo</h1>\n    <p>Mi nombre es Estudiante</p>\n</body>\n</html>',
        tests: [
            { selector: 'h1', expected: 'Hola Mundo', name: 'Título H1 correcto' },
            { selector: 'p', exists: true, name: 'Párrafo existe' }
        ],
        hints: [
            'Usa la etiqueta <h1> para el título',
            'Usa la etiqueta <p> para el párrafo'
        ]
    },

    // SQL exercises
    sql_select: {
        language: 'sql',
        instructions: 'Escribe una consulta SELECT que obtenga todos los registros de la tabla "usuarios".',
        starterCode: '-- Escribe tu consulta SQL aquí\nSELECT ',
        solution: 'SELECT * FROM usuarios;',
        tests: [
            { contains: 'SELECT', name: 'Usa SELECT' },
            { contains: 'FROM usuarios', name: 'Selecciona de usuarios' }
        ],
        hints: [
            'Usa SELECT * para seleccionar todas las columnas',
            'No olvides FROM seguido del nombre de la tabla'
        ]
    }
};

// Abrir editor de código
function openCodeEditor(exerciseIndex, material) {
    currentExerciseIndex = exerciseIndex;
    currentExercise = material;
    
    const modal = document.getElementById('code-editor-modal');
    const title = document.getElementById('editor-exercise-title');
    const instructions = document.getElementById('editor-instructions');
    const codeInput = document.getElementById('code-input');
    const output = document.getElementById('code-output');
    
    // Determinar el tipo de ejercicio basado en el curso
    let exerciseType = 'python_calculator'; // Por defecto
    
    if (currentCourse.category === 'desarrollo') {
        if (currentCourse.title.toLowerCase().includes('javascript')) {
            exerciseType = 'javascript_function';
        } else if (currentCourse.title.toLowerCase().includes('html')) {
            exerciseType = 'html_structure';
        }
    } else if (currentCourse.category === 'software') {
        if (currentCourse.title.toLowerCase().includes('sql')) {
            exerciseType = 'sql_select';
        }
    }
    
    const template = exerciseTemplates[exerciseType];
    
    // Configurar el editor
    title.textContent = material.tasks[exerciseIndex];
    instructions.innerHTML = `
        <h4>Instrucciones:</h4>
        <p>${template.instructions}</p>
        <p><strong>Lenguaje:</strong> ${template.language.toUpperCase()}</p>
    `;
    
    codeInput.value = template.starterCode;
    output.innerHTML = '<div class="output-empty">Ejecuta tu código para ver los resultados...</div>';
    
    modal.classList.add('active');
    codeInput.focus();
}

// Cerrar editor
function closeCodeEditor() {
    document.getElementById('code-editor-modal').classList.remove('active');
}

// Ejecutar código
function runCode() {
    const codeInput = document.getElementById('code-input');
    const output = document.getElementById('code-output');
    const code = codeInput.value.trim();
    
    if (!code) {
        output.innerHTML = '<div class="output-line error">⚠️ Por favor escribe algo de código antes de ejecutar.</div>';
        return;
    }
    
    output.innerHTML = '<div class="output-line info">🔄 Ejecutando código...</div>';
    
    // Simular ejecución después de un breve delay
    setTimeout(() => {
        evaluateCode(code);
    }, 500);
}

// Evaluar código
function evaluateCode(code) {
    const output = document.getElementById('code-output');
    let resultHTML = '';
    
    // Determinar el tipo de ejercicio
    let exerciseType = 'python_calculator';
    
    if (currentCourse.category === 'desarrollo') {
        if (currentCourse.title.toLowerCase().includes('javascript')) {
            exerciseType = 'javascript_function';
        } else if (currentCourse.title.toLowerCase().includes('html')) {
            exerciseType = 'html_structure';
        }
    } else if (currentCourse.category === 'software') {
        if (currentCourse.title.toLowerCase().includes('sql')) {
            exerciseType = 'sql_select';
        }
    }
    
    const template = exerciseTemplates[exerciseType];
    const tests = template.tests;
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    resultHTML += '<div class="test-results">';
    
    // Evaluar cada caso de prueba
    tests.forEach(test => {
        let passed = false;
        
        if (template.language === 'python') {
            // Verificar Python
            if (code.includes('def ') && code.includes('return')) {
                passed = true;
            }
        } else if (template.language === 'javascript') {
            // Verificar JavaScript
            if (code.includes('function ') && code.includes('return')) {
                passed = true;
            }
        } else if (template.language === 'html') {
            // Verificar HTML
            if (test.selector === 'h1' && code.includes('<h1>') && code.includes('Hola Mundo')) {
                passed = true;
            } else if (test.selector === 'p' && code.includes('<p>')) {
                passed = true;
            }
        } else if (template.language === 'sql') {
            // Verificar SQL
            if (test.contains && code.toUpperCase().includes(test.contains.toUpperCase())) {
                passed = true;
            }
        }
        
        if (passed) passedTests++;
        
        resultHTML += `
            <div class="test-case ${passed ? 'passed' : 'failed'}">
                <div class="test-icon">
                    <i class="fas fa-${passed ? 'check-circle' : 'times-circle'}"></i>
                </div>
                <div class="test-details">
                    <div class="test-name">${test.name}</div>
                    <div class="test-info">
                        ${passed ? '✓ Prueba superada' : '✗ Prueba fallida'}
                    </div>
                </div>
            </div>
        `;
    });
    
    resultHTML += '</div>';
    
    // Mensaje de resultado general
    if (passedTests === totalTests) {
        resultHTML = `
            <div class="output-line success">
                <strong>🎉 ¡Excelente trabajo!</strong><br>
                Has completado el ejercicio correctamente (${passedTests}/${totalTests} pruebas superadas)
            </div>
        ` + resultHTML;
        
        // Marcar como completado
        setTimeout(() => {
            completeCurrentExercise();
        }, 2000);
    } else {
        resultHTML = `
            <div class="output-line error">
                <strong>❌ Algunas pruebas fallaron</strong><br>
                ${passedTests}/${totalTests} pruebas superadas. Sigue intentando!
            </div>
        ` + resultHTML;
    }
    
    output.innerHTML = resultHTML;
}

// Resetear código
function resetCode() {
    const codeInput = document.getElementById('code-input');
    const output = document.getElementById('code-output');
    
    let exerciseType = 'python_calculator';
    
    if (currentCourse.category === 'desarrollo') {
        if (currentCourse.title.toLowerCase().includes('javascript')) {
            exerciseType = 'javascript_function';
        } else if (currentCourse.title.toLowerCase().includes('html')) {
            exerciseType = 'html_structure';
        }
    } else if (currentCourse.category === 'software') {
        if (currentCourse.title.toLowerCase().includes('sql')) {
            exerciseType = 'sql_select';
        }
    }
    
    const template = exerciseTemplates[exerciseType];
    codeInput.value = template.starterCode;
    output.innerHTML = '<div class="output-empty">Código reseteado. Ejecuta tu código para ver los resultados...</div>';
}

// Mostrar pista
function showHint() {
    const output = document.getElementById('code-output');
    
    let exerciseType = 'python_calculator';
    
    if (currentCourse.category === 'desarrollo') {
        if (currentCourse.title.toLowerCase().includes('javascript')) {
            exerciseType = 'javascript_function';
        } else if (currentCourse.title.toLowerCase().includes('html')) {
            exerciseType = 'html_structure';
        }
    } else if (currentCourse.category === 'software') {
        if (currentCourse.title.toLowerCase().includes('sql')) {
            exerciseType = 'sql_select';
        }
    }
    
    const template = exerciseTemplates[exerciseType];
    const hints = template.hints;
    
    let hintsHTML = '<div class="output-line info"><strong>💡 Pistas:</strong></div>';
    hints.forEach((hint, index) => {
        hintsHTML += `<div class="output-line info">${index + 1}. ${hint}</div>`;
    });
    
    output.innerHTML = hintsHTML;
}

// Mostrar solución
function showSolution() {
    if (confirm('¿Estás seguro de que quieres ver la solución? Es mejor intentar resolver el ejercicio por ti mismo.')) {
        const codeInput = document.getElementById('code-input');
        const output = document.getElementById('code-output');
        
        let exerciseType = 'python_calculator';
        
        if (currentCourse.category === 'desarrollo') {
            if (currentCourse.title.toLowerCase().includes('javascript')) {
                exerciseType = 'javascript_function';
            } else if (currentCourse.title.toLowerCase().includes('html')) {
                exerciseType = 'html_structure';
            }
        } else if (currentCourse.category === 'software') {
            if (currentCourse.title.toLowerCase().includes('sql')) {
                exerciseType = 'sql_select';
            }
        }
        
        const template = exerciseTemplates[exerciseType];
        codeInput.value = template.solution;
        output.innerHTML = '<div class="output-line info">📝 Solución cargada. Ahora ejecuta el código para verificar.</div>';
    }
}

// Completar ejercicio actual
function completeCurrentExercise() {
    const material = currentCourse.materials[currentMaterialIndex];
    if (material.type === 'exercise' && currentExerciseIndex < material.exercises) {
        material.completed = Math.min((material.completed || 0) + 1, material.exercises);
        renderSidebarMaterials();
        updateProgress();
        
        // Cerrar el editor después de un momento
        setTimeout(() => {
            closeCodeEditor();
            loadMaterial(currentMaterialIndex); // Recargar para actualizar el progreso
        }, 3000);
    }
}

// Event listeners para atajos de teclado
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('code-input');
    
    if (codeInput) {
        // Ctrl/Cmd + Enter para ejecutar
        codeInput.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
        
        // Tab para indentación
        codeInput.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                const value = this.value;
                
                this.value = value.substring(0, start) + '    ' + value.substring(end);
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });
    }
});
