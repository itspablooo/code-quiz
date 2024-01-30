var quizContainer = document.querySelector('#quiz-container');
var currentQuestionIndex = 0;

// questions for the quiz
var quizQuestions = [
    {
        question: "Commonly used data types Do Not include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "Terminal/Bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console.log", correct: true},
        ]
    },
    {
        question: "String values must be eclosed with ____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parenthesis", correct: false},
        ]
    },
    {
        question: "Commonly used data types Do Not include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },
    {
        question: "Commonly used data types Do Not include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },
];


function startQuiz() {
    
    quizContainer.innerHTML = '';

    var quizStartTitle = document.createElement('h1');
    var quizDescribe = document.createElement('p');
    var startBtn = document.createElement('button');

    quizStartTitle.textContent = 'Code Quiz';
    quizDescribe.textContent = 'Try to answer the following code-related questions within the time limit.';
    startBtn.textContent = 'Start Quiz';

    startBtn.addEventListener('click', startNextQuestion);

    quizContainer.appendChild(quizStartTitle);
    quizContainer.appendChild(quizDescribe);
    quizContainer.appendChild(startBtn);
}





startQuiz();
