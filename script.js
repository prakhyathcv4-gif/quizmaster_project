/* ==========================================================================
   QuizMaster - JavaScript Application Logic
   Handles question bank, state management, timer, navigation, scoring,
   result rendering, answer review, and viva-ready clean code.
   ========================================================================== */

// ==========================================
// 1. QUESTION BANK DATA (40 Questions)
// ==========================================
const questionBank = [
    // --- HTML QUESTIONS (10) ---
    {
        id: 1,
        category: "html",
        difficulty: "easy",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        id: 2,
        category: "html",
        difficulty: "easy",
        question: "Which HTML element is used to define the main heading of a webpage?",
        options: ["<h6>", "<head>", "<h1>", "<header>"],
        answer: 2
    },
    {
        id: 3,
        category: "html",
        difficulty: "easy",
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<line>"],
        answer: 1
    },
    {
        id: 4,
        category: "html",
        difficulty: "medium",
        question: "Which attribute is used to specify alternate text for an image if it fails to load?",
        options: ["title", "src", "alt", "description"],
        answer: 2
    },
    {
        id: 5,
        category: "html",
        difficulty: "medium",
        question: "Which HTML element is used to embed an unordered bulleted list?",
        options: ["<ol>", "<list>", "<ul>", "<dl>"],
        answer: 2
    },
    {
        id: 6,
        category: "html",
        difficulty: "medium",
        question: "Which HTML5 semantic element represents independent, self-contained content?",
        options: ["<section>", "<article>", "<div>", "<aside>"],
        answer: 1
    },
    {
        id: 7,
        category: "html",
        difficulty: "hard",
        question: "What is the default display property of a <div> element?",
        options: ["inline", "block", "inline-block", "flex"],
        answer: 1
    },
    {
        id: 8,
        category: "html",
        difficulty: "hard",
        question: "Which HTML attribute specifies that an input field must be filled out before submitting?",
        options: ["validate", "important", "required", "placeholder"],
        answer: 2
    },
    {
        id: 9,
        category: "html",
        difficulty: "easy",
        question: "Which HTML tag is used to define an anchor link?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: 0
    },
    {
        id: 10,
        category: "html",
        difficulty: "hard",
        question: "Which HTML5 form element provides a slider control?",
        options: ["<input type='slider'>", "<input type='range'>", "<input type='number'>", "<input type='scroll'>"],
        answer: 1
    },

    // --- CSS QUESTIONS (10) ---
    {
        id: 11,
        category: "css",
        difficulty: "easy",
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Syntax"
        ],
        answer: 1
    },
    {
        id: 12,
        category: "css",
        difficulty: "easy",
        question: "Which CSS property is used to change the background color of an element?",
        options: ["color", "bg-color", "background-color", "canvas-color"],
        answer: 2
    },
    {
        id: 13,
        category: "css",
        difficulty: "easy",
        question: "How do you select an element with id='header' in CSS?",
        options: [".header", "#header", "*header", "header"],
        answer: 1
    },
    {
        id: 14,
        category: "css",
        difficulty: "medium",
        question: "Which CSS property controls the size of text?",
        options: ["text-style", "font-size", "font-style", "text-size"],
        answer: 1
    },
    {
        id: 15,
        category: "css",
        difficulty: "medium",
        question: "Which property is used to create space around elements outside of any defined borders?",
        options: ["padding", "spacing", "margin", "border-spacing"],
        answer: 2
    },
    {
        id: 16,
        category: "css",
        difficulty: "medium",
        question: "How do you make each word in a text start with a capital letter in CSS?",
        options: ["text-transform: capitalize", "text-style: capital", "transform: uppercase", "font-transform: capitalize"],
        answer: 0
    },
    {
        id: 17,
        category: "css",
        difficulty: "hard",
        question: "What is the default value of the CSS 'position' property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: 3
    },
    {
        id: 18,
        category: "css",
        difficulty: "hard",
        question: "Which CSS flexbox property aligns flex items along the main axis?",
        options: ["align-items", "justify-content", "align-content", "flex-direction"],
        answer: 1
    },
    {
        id: 19,
        category: "css",
        difficulty: "hard",
        question: "Which CSS selector targets all <p> elements inside a <div> element?",
        options: ["div + p", "div p", "div.p", "div > p"],
        answer: 1
    },
    {
        id: 20,
        category: "css",
        difficulty: "easy",
        question: "Which CSS property changes the text color of an element?",
        options: ["text-color", "font-color", "color", "fg-color"],
        answer: 2
    },

    // --- JAVASCRIPT QUESTIONS (10) ---
    {
        id: 21,
        category: "javascript",
        difficulty: "easy",
        question: "Inside which HTML element do we put JavaScript code?",
        options: ["<scripting>", "<js>", "<script>", "<javascript>"],
        answer: 2
    },
    {
        id: 22,
        category: "javascript",
        difficulty: "easy",
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        options: ["alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "console.log('Hello World');"],
        answer: 1
    },
    {
        id: 23,
        category: "javascript",
        difficulty: "easy",
        question: "Which keyword is used to declare a block-scoped variable in modern JavaScript?",
        options: ["var", "let", "dim", "set"],
        answer: 1
    },
    {
        id: 24,
        category: "javascript",
        difficulty: "medium",
        question: "What is the output of typeof 'JavaScript'?",
        options: ["'object'", "'string'", "'text'", "'undefined'"],
        answer: 1
    },
    {
        id: 25,
        category: "javascript",
        difficulty: "medium",
        question: "Which method adds a new element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "append()"],
        answer: 0
    },
    {
        id: 26,
        category: "javascript",
        difficulty: "medium",
        question: "How do you write a strict equality check in JavaScript?",
        options: ["x = 5", "x == 5", "x === 5", "x equals 5"],
        answer: 2
    },
    {
        id: 27,
        category: "javascript",
        difficulty: "hard",
        question: "Which built-in function converts a numeric string into an integer in JavaScript?",
        options: ["parseInteger()", "parseInt()", "Number.toInt()", "toInteger()"],
        answer: 1
    },
    {
        id: 28,
        category: "javascript",
        difficulty: "hard",
        question: "What will the expression (5 + '5') evaluate to in JavaScript?",
        options: ["10", "'55'", "NaN", "Error"],
        answer: 1
    },
    {
        id: 29,
        category: "javascript",
        difficulty: "hard",
        question: "Which method cancels a timer set by setInterval()?",
        options: ["stopInterval()", "clearInterval()", "cancelTimer()", "clearTimeout()"],
        answer: 1
    },
    {
        id: 30,
        category: "javascript",
        difficulty: "easy",
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"],
        answer: 1
    },

    // --- GENERAL COMPUTER SCIENCE QUESTIONS (10) ---
    {
        id: 31,
        category: "cs",
        difficulty: "easy",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Central Power Unit",
            "Computer Processing Utility",
            "Control Program Unit"
        ],
        answer: 0
    },
    {
        id: 32,
        category: "cs",
        difficulty: "easy",
        question: "Which computer hardware component acts as temporary volatile memory?",
        options: ["Hard Disk", "ROM", "RAM", "SSD"],
        answer: 2
    },
    {
        id: 33,
        category: "cs",
        difficulty: "easy",
        question: "What does HTTP stand for in web communication?",
        options: [
            "Hypertext Transfer Protocol",
            "High Transfer Text Protocol",
            "Hyperlink Text Terminal Protocol",
            "Home Transfer Test Protocol"
        ],
        answer: 0
    },
    {
        id: 34,
        category: "cs",
        difficulty: "medium",
        question: "Binary system uses which two numbers to represent data?",
        options: ["1 and 2", "0 and 1", "0 and 10", "1 and 10"],
        answer: 1
    },
    {
        id: 35,
        category: "cs",
        difficulty: "medium",
        question: "Which data structure follows the First In, First Out (FIFO) principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },
    {
        id: 36,
        category: "cs",
        difficulty: "medium",
        question: "Which of the following is an open-source Operating System?",
        options: ["Windows", "macOS", "Linux", "iOS"],
        answer: 2
    },
    {
        id: 37,
        category: "cs",
        difficulty: "hard",
        question: "What does IP stand for in network protocol terms?",
        options: ["Internal Path", "Internet Protocol", "Information Process", "Interconnected Port"],
        answer: 1
    },
    {
        id: 38,
        category: "cs",
        difficulty: "hard",
        question: "Which data structure operates on a Last In, First Out (LIFO) basis?",
        options: ["Array", "Queue", "Stack", "Linked List"],
        answer: 2
    },
    {
        id: 39,
        category: "cs",
        difficulty: "hard",
        question: "What does SQL stand for in database management?",
        options: [
            "Structured Query Language",
            "Sequential Query Logic",
            "System Quality Language",
            "Standard Question List"
        ],
        answer: 0
    },
    {
        id: 40,
        category: "cs",
        difficulty: "easy",
        question: "What is the primary function of an Operating System?",
        options: [
            "Managing hardware and software resources",
            "Designing graphics",
            "Writing program code",
            "Creating web pages"
        ],
        answer: 0
    }
];

// ==========================================
// 2. APPLICATION STATE VARIABLES
// ==========================================
let studentName = "";
let selectedCategory = "";
let selectedDifficulty = "";
let totalQuestionsCount = 10;
let currentQuestions = [];
let userAnswers = []; // Array storing selected option index (or null) for each question
let currentQuestionIndex = 0;

let timerInterval = null;
let totalTimeSeconds = 0;
let timeLeftSeconds = 0;

// Category Names Mapping for Display
const categoryNames = {
    html: "HTML & Web Basics",
    css: "CSS Basics",
    javascript: "JavaScript Basics",
    cs: "General Computer Science"
};

// ==========================================
// 3. DOM ELEMENT REFERENCES
// ==========================================
// Screens
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

// Start Screen Inputs
const studentNameInput = document.getElementById("student-name");
const nameErrorDiv = document.getElementById("name-error");
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const questionCountSelect = document.getElementById("question-count");
const startBtn = document.getElementById("start-btn");

// Quiz Screen Elements
const displayStudentName = document.getElementById("display-student-name");
const displayCategory = document.getElementById("display-category");
const timerDisplay = document.getElementById("timer-display");
const questionTracker = document.getElementById("question-tracker");
const progressPercent = document.getElementById("progress-percent");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Confirmation Modal Elements
const confirmModal = document.getElementById("confirm-modal");
const unansweredWarning = document.getElementById("unanswered-warning");
const cancelSubmitBtn = document.getElementById("cancel-submit-btn");
const confirmSubmitBtn = document.getElementById("confirm-submit-btn");

// Result Screen Elements
const resultStudentName = document.getElementById("result-student-name");
const scoreText = document.getElementById("score-text");
const percentageText = document.getElementById("percentage-text");
const correctCountEl = document.getElementById("correct-count");
const incorrectCountEl = document.getElementById("incorrect-count");
const unansweredCountEl = document.getElementById("unanswered-count");
const performanceMessage = document.getElementById("performance-message");
const reviewBtn = document.getElementById("review-btn");
const restartBtn = document.getElementById("restart-btn");

// Review Screen Elements
const reviewContainer = document.getElementById("review-container");
const backToResultsBtn = document.getElementById("back-to-results-btn");
const restartFromReviewBtn = document.getElementById("restart-from-review-btn");

// ==========================================
// 4. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    // Bind main action buttons
    startBtn.addEventListener("click", startQuiz);
    prevBtn.addEventListener("click", previousQuestion);
    nextBtn.addEventListener("click", nextQuestion);
    
    // Modal buttons
    cancelSubmitBtn.addEventListener("click", hideSubmitModal);
    confirmSubmitBtn.addEventListener("click", submitQuiz);

    // Result & Review Screen buttons
    reviewBtn.addEventListener("click", reviewAnswers);
    restartBtn.addEventListener("click", restartQuiz);
    backToResultsBtn.addEventListener("click", showResultsScreenFromReview);
    restartFromReviewBtn.addEventListener("click", restartQuiz);

    // Clear name error when user types
    studentNameInput.addEventListener("input", function () {
        if (studentNameInput.value.trim() !== "") {
            nameErrorDiv.classList.add("hidden");
        }
    });
});

// Utility to switch active screen visible to user
function showScreen(screenToShow) {
    const screens = [startScreen, quizScreen, resultScreen, reviewScreen];
    screens.forEach(screen => {
        if (screen === screenToShow) {
            screen.classList.remove("hidden");
            screen.classList.add("active");
        } else {
            screen.classList.add("hidden");
            screen.classList.remove("active");
        }
    });
}

// ==========================================
// 5. START QUIZ FUNCTIONALITY
// ==========================================
function startQuiz() {
    const enteredName = studentNameInput.value.trim();

    // 1. Name Validation
    if (enteredName === "") {
        nameErrorDiv.classList.remove("hidden");
        studentNameInput.focus();
        return;
    }
    nameErrorDiv.classList.add("hidden");

    studentName = enteredName;
    selectedCategory = categorySelect.value;
    selectedDifficulty = difficultySelect.value;
    totalQuestionsCount = parseInt(questionCountSelect.value, 10);

    // 2. Filter Questions by Category & Difficulty
    let filtered = questionBank.filter(q => q.category === selectedCategory);

    if (selectedDifficulty !== "all") {
        const byDifficulty = filtered.filter(q => q.difficulty === selectedDifficulty);
        // If enough questions match difficulty, use them; otherwise fallback to full category list
        if (byDifficulty.length >= totalQuestionsCount) {
            filtered = byDifficulty;
        }
    }

    // 3. Shuffle filtered questions using Fisher-Yates algorithm
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    // Pick required number of questions
    currentQuestions = filtered.slice(0, totalQuestionsCount);
    
    // Initialize user answers array with null values
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;

    // 4. Update Header Badge Info
    displayStudentName.textContent = studentName;
    displayCategory.textContent = categoryNames[selectedCategory] || selectedCategory;

    // 5. Start Countdown Timer (5 mins for 5 Qs, 10 mins for 10 Qs)
    startTimer(totalQuestionsCount);

    // 6. Display Quiz Screen and load first question
    showScreen(quizScreen);
    loadQuestion();
}

// ==========================================
// 6. QUESTION RENDER & NAVIGATION
// ==========================================
function loadQuestion() {
    const currentQ = currentQuestions[currentQuestionIndex];

    // Render Question Text
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;

    // Render Option Buttons dynamically
    optionsContainer.innerHTML = "";
    
    const prefixes = ["A", "B", "C", "D"];
    currentQ.options.forEach((optionText, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        
        // Highlight if option was previously selected by user
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add("selected");
        }

        btn.innerHTML = `
            <span class="option-prefix">${prefixes[index]}</span>
            <span class="option-text">${escapeHTML(optionText)}</span>
        `;

        // Click event listener to select option
        btn.addEventListener("click", function () {
            selectAnswer(index);
        });

        optionsContainer.appendChild(btn);
    });

    // Update Navigation Buttons (Prev / Next / Submit)
    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = "Submit Quiz 🏁";
    } else {
        nextBtn.textContent = "Next ➡️";
    }

    // Update Progress Bar
    updateProgress();
}

// Select answer for current question
function selectAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    // Re-render option buttons to update active CSS class styling
    const optionBtns = optionsContainer.querySelectorAll(".option-btn");
    optionBtns.forEach((btn, idx) => {
        if (idx === optionIndex) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
}

function nextQuestion() {
    // If on final question, prompt for submission confirmation
    if (currentQuestionIndex === currentQuestions.length - 1) {
        showSubmitModal();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ==========================================
// 7. PROGRESS BAR UPDATER
// ==========================================
function updateProgress() {
    const total = currentQuestions.length;
    const current = currentQuestionIndex + 1;
    const percentage = Math.round((current / total) * 100);

    questionTracker.textContent = `Question ${current} of ${total}`;
    progressPercent.textContent = `${percentage}%`;
    progressBarFill.style.width = `${percentage}%`;
}

// ==========================================
// 8. COUNTDOWN TIMER FUNCTIONALITY
// ==========================================
function startTimer(minutes) {
    clearInterval(timerInterval); // Reset any existing interval

    totalTimeSeconds = minutes * 60;
    timeLeftSeconds = totalTimeSeconds;

    updateTimerDisplay();

    timerInterval = setInterval(function () {
        timeLeftSeconds--;
        updateTimerDisplay();

        // When timer hits zero, auto-submit quiz
        if (timeLeftSeconds <= 0) {
            clearInterval(timerInterval);
            alert("⏰ Time is up! Your quiz will now be submitted automatically.");
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeftSeconds / 60);
    const seconds = timeLeftSeconds % 60;

    // Format MM:SS with leading zeroes
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// ==========================================
// 9. SUBMISSION & RESULT CALCULATION
// ==========================================
function showSubmitModal() {
    // Count unanswered questions to warn student
    let unansweredCount = 0;
    userAnswers.forEach(ans => {
        if (ans === null) unansweredCount++;
    });

    if (unansweredCount > 0) {
        unansweredWarning.textContent = `You have ${unansweredCount} unanswered question(s).`;
    } else {
        unansweredWarning.textContent = "All questions answered!";
    }

    confirmModal.classList.remove("hidden");
}

function hideSubmitModal() {
    confirmModal.classList.add("hidden");
}

function submitQuiz() {
    // Stop countdown timer
    clearInterval(timerInterval);
    hideSubmitModal();

    // Perform Score Calculations
    const results = calculateResult();

    // Show Results Screen
    showResults(results);
}

function calculateResult() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    currentQuestions.forEach((q, index) => {
        const userChoice = userAnswers[index];
        if (userChoice === null) {
            unansweredCount++;
        } else if (userChoice === q.answer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });

    const total = currentQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    // Performance Feedback Logic based on score percentage
    let performanceMsg = "";
    if (percentage >= 80) {
        performanceMsg = "🌟 Excellent performance! You demonstrated outstanding technical knowledge.";
    } else if (percentage >= 60) {
        performanceMsg = "👍 Good job! Keep practicing to achieve perfection.";
    } else if (percentage >= 40) {
        performanceMsg = "📘 Keep practicing and improve your score. Review the core concepts!";
    } else {
        performanceMsg = "💡 Don't give up. Review the topics thoroughly and try again.";
    }

    return {
        total,
        correctCount,
        incorrectCount,
        unansweredCount,
        percentage,
        performanceMsg
    };
}

function showResults(results) {
    resultStudentName.textContent = studentName;
    scoreText.textContent = `${results.correctCount} / ${results.total}`;
    percentageText.textContent = `${results.percentage}%`;
    correctCountEl.textContent = results.correctCount;
    incorrectCountEl.textContent = results.incorrectCount;
    unansweredCountEl.textContent = results.unansweredCount;
    performanceMessage.textContent = results.performanceMsg;

    showScreen(resultScreen);
}

function showResultsScreenFromReview() {
    showScreen(resultScreen);
}

// ==========================================
// 10. ANSWER REVIEW MODE
// ==========================================
function reviewAnswers() {
    reviewContainer.innerHTML = "";

    const prefixes = ["A", "B", "C", "D"];

    currentQuestions.forEach((q, index) => {
        const userChoice = userAnswers[index];
        const isCorrect = userChoice === q.answer;
        const isUnanswered = userChoice === null;

        let statusClass = "";
        let badgeHTML = "";

        if (isUnanswered) {
            statusClass = "status-unanswered";
            badgeHTML = `<span class="badge badge-warning">Unanswered</span>`;
        } else if (isCorrect) {
            statusClass = "status-correct";
            badgeHTML = `<span class="badge badge-success">Correct</span>`;
        } else {
            statusClass = "status-incorrect";
            badgeHTML = `<span class="badge badge-danger">Incorrect</span>`;
        }

        const userAnsText = isUnanswered ? "Not Answered" : `${prefixes[userChoice]}: ${q.options[userChoice]}`;
        const correctAnsText = `${prefixes[q.answer]}: ${q.options[q.answer]}`;

        const reviewCard = document.createElement("div");
        reviewCard.className = `review-item ${statusClass}`;

        reviewCard.innerHTML = `
            <div class="review-question-head">
                <div class="review-question-text">
                    ${index + 1}. ${escapeHTML(q.question)}
                </div>
                ${badgeHTML}
            </div>
            <div class="review-answers-info">
                <div><strong>Your Answer:</strong> <span class="${isCorrect ? 'text-success' : (isUnanswered ? 'text-warning' : 'text-danger')}">${escapeHTML(userAnsText)}</span></div>
                <div><strong>Correct Answer:</strong> <span class="text-success">${escapeHTML(correctAnsText)}</span></div>
            </div>
        `;

        reviewContainer.appendChild(reviewCard);
    });

    showScreen(reviewScreen);
}

// ==========================================
// 11. RESTART FUNCTION
// ==========================================
function restartQuiz() {
    // Stop any timer
    clearInterval(timerInterval);

    // Reset State Variables
    studentName = "";
    currentQuestions = [];
    userAnswers = [];
    currentQuestionIndex = 0;
    timeLeftSeconds = 0;

    // Reset Form Input
    studentNameInput.value = "";
    categorySelect.selectedIndex = 0;
    difficultySelect.selectedIndex = 0;
    questionCountSelect.selectedIndex = 1;
    nameErrorDiv.classList.add("hidden");

    // Return to Start Screen
    showScreen(startScreen);
}

// Helper utility function to prevent XSS output in template literals
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
