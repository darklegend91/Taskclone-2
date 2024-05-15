var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "‘नमस्ते’ का अर्थ है?",
        options: ["आप कैसे हैं?", "नमस्कार", "धन्यवाद", "बाय"],
        correctAnswer: "नमस्कार"
    },
    {
        question: "‘धन्यवाद’ का अर्थ है?",
        options: ["हाय", "धन्यवाद", "माफ़ कीजिए", "नमस्कार"],
        correctAnswer: "धन्यवाद"
    },
    {
        question: "हिंदी में 'सुप्रभात' का मतलब क्या है?",
        options: ["शुभ प्रभात", "सुंदर प्रभात", "आपका स्वागत है", "नमस्ते"],
        correctAnswer: "शुभ प्रभात"
    },
    {
        question: "‘कृपया’ का अर्थ है?",
        options: ["धन्यवाद", "कृपा करें", "माफ़ कीजिए", "सही है"],
        correctAnswer: "कृपा करें"
    },
    {
        question: "हिंदी में 'खुशी' का विलोम (उल्टा) क्या है?",
        options: ["दुख", "आनंद", "उल्लास", "प्रसन्नता"],
        correctAnswer: "दुख"
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
        quizElement.textContent = "परीक्षा समाप्त! आपका स्कोर: " + score + " में से " + questions.length;
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