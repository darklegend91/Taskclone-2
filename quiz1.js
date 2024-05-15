var currentQuestion = 0;
    var score = 0;

    var questions = [
        {
            question: "Quel est le mot français pour 'hello'?",
            options: ["Bonjour", "Merci", "Oui", "Bonne nuit"],
            correctAnswer: "Bonjour"
        },
        {
            question: "Comment dit-on 'merci' en français?",
            options: ["Hello", "Merci", "Au revoir", "S'il vous plaît"],
            correctAnswer: "Merci"
        },
        {
            question: "Quel est le nom de la tour emblématique à Paris?",
            options: ["Tour de Pise", "Tour Eiffel", "Tour de Londres", "Tour de Tokyo"],
            correctAnswer: "Tour Eiffel"
        },
        {
            question: "Quelle est la capitale de la France?",
            options: ["Berlin", "Paris", "Madrid", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Comment dit-on 'au revoir' en français?",
            options: ["Bonjour", "À bientôt", "Merci", "Au revoir"],
            correctAnswer: "Au revoir"
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
            quizElement.textContent = "Test terminé! Votre score: " + score + " sur " + questions.length;
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
