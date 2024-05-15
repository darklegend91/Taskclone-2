var currentQuestion = 0;
    var score = 0;

    var questions = [
        {
            question: "¿Cómo se dice 'hola' en español?",
            options: ["Hola", "Adiós", "Por favor", "Gracias"],
            correctAnswer: "Hola"
        },
        {
            question: "¿Cuál es la traducción de 'gracias'?",
            options: ["Perdón", "Hola", "Adiós", "Gracias"],
            correctAnswer: "Gracias"
        },
        {
            question: "¿Dónde está la ciudad de Madrid?",
            options: ["Italia", "Francia", "España", "Alemania"],
            correctAnswer: "España"
        },
        {
            question: "¿Qué significa 'por favor' en español?",
            options: ["Hola", "Adiós", "Gracias", "Por favor"],
            correctAnswer: "Por favor"
        },
        {
            question: "¿Cuál es la capital de México?",
            options: ["Buenos Aires", "Ciudad de México", "Madrid", "Lima"],
            correctAnswer: "Ciudad de México"
        }
    ];

    function loadQuestion() {
        var quizElement = document.getElementById('quiz');
        var optionsElement = document.getElementById('options');
        
        if (currentQuestion < questions.length) {
            var current = questions[currentQuestion];
            
            quizElement.textContent = current.question;
            
            optionsElement.innerHTML = "";
            for (var i = 0; i < current.options.length; i++) {
                var button = document.createElement('button');
                button.textContent = current.options[i];
                button.onclick = function () {
                    checkAnswer(this.textContent);
                };
                optionsElement.appendChild(button);
            }
        } else {
            quizElement.textContent = "¡Prueba terminada! Tu puntuación: " + score + " de " + questions.length;
            optionsElement.innerHTML = "";
        }
    }

    function checkAnswer(userAnswer) {
        var current = questions[currentQuestion];
        
        if (userAnswer === current.correctAnswer) {
            score++;
        }
        
        currentQuestion++;
        loadQuestion();
    }

    function nextQuestion() {
        loadQuestion();
    }

    // Initial load
    loadQuestion();