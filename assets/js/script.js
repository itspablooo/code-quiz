var quizContainer = document.querySelector('#quiz-container');
var currentQuestionIndex = 0;

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

// Call this function to start the quiz
startQuiz();

function startQuiz() {
    // Display quiz start content
    quizContainer.innerHTML = '';

    var quizStartTitle = document.createElement('h1');
    quizStartTitle.textContent = 'Code Quiz';

    var quizDescribe = document.createElement('p');
    quizDescribe.textContent = 'Test your knowledge with this coding quiz!';

    var startBtn = document.createElement('button');
    startBtn.textContent = 'Start Quiz';

    // Clear previous event listeners
    startBtn.removeEventListener('click', startNextQuestion);

    // Add event listener to start the quiz
    startBtn.addEventListener('click', startNextQuestion);

    // Append elements to the quiz container
    quizContainer.appendChild(quizStartTitle);
    quizContainer.appendChild(quizDescribe);
    quizContainer.appendChild(startBtn);
}

function startNextQuestion() {
    // Display quiz question
    var currentQuestion = quizQuestions[currentQuestionIndex];

    quizContainer.innerHTML = '';

    var questionTitle = document.createElement('h2');
    questionTitle.textContent = currentQuestion.question;

    var options = document.createElement('div');

    currentQuestion.answers.forEach(function(answer) {
        var option = document.createElement('button');
        option.textContent = answer.text;
        option.addEventListener('click', function() {
            handleAnswerClick(answer.correct);
        });
        options.appendChild(option);
    });

    // Append elements to the quiz container
    quizContainer.appendChild(questionTitle);
    quizContainer.appendChild(options);

    currentQuestionIndex++;
}

function handleAnswerClick(correct) {
    // Handle user's answer
    if (correct) {
        // Handle correct answer behavior
        console.log('Correct!');
    } else {
        // Handle incorrect answer behavior
        console.log('Incorrect!');
    }

    if (currentQuestionIndex < quizQuestions.length) {
        // Move to the next question
        startNextQuestion();
    } else {
        // End of the quiz
        endQuiz();
    }
}

function endQuiz() {
    // Display quiz end content
    quizContainer.innerHTML = '';

    var quizEndTitle = document.createElement('h1');
    quizEndTitle.textContent = 'Quiz Complete!';

    var finalScore = document.createElement('p');
    finalScore.textContent = 'Your Final Score: ' + calculateScore() + ' out of ' + quizQuestions.length;

    // Append elements to the quiz container
    quizContainer.appendChild(quizEndTitle);
    quizContainer.appendChild(finalScore);
}

function calculateScore() {
    // Calculate and return the user's score
    var correctAnswers = quizQuestions.filter(function(question) {
        return question.answers.find(function(answer) {
            return answer.correct;
        });
    });

    return correctAnswers.length;
}
