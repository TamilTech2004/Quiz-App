// Questions and options
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: 1
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1920", "1898", "1905"],
        answer: 0
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "H2O", "O2", "H2SO4"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsButtons = document.querySelectorAll('.option');
    const questionNumberElement = document.getElementById('question-number');

    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of 5`;

    optionsButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
    });

    // Reset option styles
    optionsButtons.forEach(button => {
        button.style.backgroundColor = '#00bcd4';
        button.disabled = false;
    });

    // Hide score display
    document.getElementById('score').style.display = 'none';
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsButtons = document.querySelectorAll('.option');

    // Disable all options after selection
    optionsButtons.forEach(button => {
        button.disabled = true;
    });

    // Check if selected option is correct
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

    // Highlight the correct option
    optionsButtons[currentQuestion.answer].style.backgroundColor = '#4caf50'; // Green for correct answer

    // Highlight the wrong answer
    if (selectedIndex !== currentQuestion.answer) {
        optionsButtons[selectedIndex].style.backgroundColor = '#f44336'; // Red for wrong answer
    }
    
    // Enable Next button
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    // Go to the next question or show the final score
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        // Show score when quiz ends
        showScore();
    }
}

function showScore() {
    document.querySelector('.quiz-body').style.display = 'none';
    document.querySelector('.quiz-footer').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('score-count').textContent = score;
}

// Initial setup
loadQuestion();
document.getElementById('next-button').disabled = true;
