var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "Was bedeutet 'Hallo' auf Deutsch?",
        options: ["Guten Tag", "Auf Wiedersehen", "Bitte", "Entschuldigung"],
        correctAnswer: "Guten Tag"
    },
    {
        question: "Wie sagt man 'Danke' auf Deutsch?",
        options: ["Hallo", "Danke", "Auf Wiedersehen", "Entschuldigung"],
        correctAnswer: "Danke"
    },
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        options: ["Berlin", "München", "Hamburg", "Köln"],
        correctAnswer: "Berlin"
    },
    {
        question: "Wie fragt man 'Wie geht es Ihnen?' auf Deutsch?",
        options: ["Wie heißt du?", "Was machst du?", "Wie alt bist du?", "Wie geht es Ihnen?"],
        correctAnswer: "Wie geht es Ihnen?"
    },
    {
        question: "Was bedeutet 'Auf Wiedersehen'?",
        options: ["Hallo", "Guten Morgen", "Tschüss", "Auf Wiedersehen"],
        correctAnswer: "Auf Wiedersehen"
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
        quizElement.textContent = "Test beendet! Ihr Ergebnis: " + score + " von " + questions.length;
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