# QuizMaster – Mock Test & Quiz Application

A beginner-friendly, dynamic mock test and quiz application built with **HTML5, CSS3, and Vanilla JavaScript** (No external frameworks or libraries).

---

## 📌 Project Objective
To demonstrate core front-end web development skills including structured HTML5 markups, responsive CSS styling, dynamic DOM manipulation, array operations, timer events, state management, and score calculation for a college practical / viva examination.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic document structure, form controls, header, main, section, and input validation attributes.
- **CSS3**: Modern Flexbox, CSS Grid, Custom Variables (`:root`), transitions, card layouts, and responsive Media Queries.
- **Vanilla JavaScript (ES6+)**: Dynamic DOM manipulation, array operations, custom object structures, timer intervals (`setInterval`/`clearInterval`), state preservation, and event listeners.

---

## 📁 File Structure
```text
quizmaster/
│
├── index.html     # HTML structure with Start, Quiz, Result, and Review screens
├── style.css      # Custom styling, card layout, badges, progress bar, and media queries
├── script.js     # Question bank (40 items), state management, navigation, timer, scoring, and review logic
└── README.md      # Project documentation and Viva concept guide
```

---

## 🚀 Main Features
1. **Interactive Start Screen**:
   - Student name input field with empty validation.
   - Category dropdown (HTML & Web Basics, CSS Basics, JavaScript Basics, General Computer Science).
   - Difficulty level dropdown (All, Easy, Medium, Hard).
   - Question count selection (5 questions / 5 minutes, 10 questions / 10 minutes).

2. **Dynamic Quiz Engine**:
   - Random selection & shuffling of questions from the selected category.
   - One question rendered at a time with 4 multiple-choice options.
   - Real-time countdown timer (`Time Left: MM:SS`) with auto-submission on expiration.
   - Visual progress bar (`Question X of Y` and percentage completion).

3. **Question Navigation & State Preservation**:
   - Next and Previous buttons.
   - Previous button disabled on question 1.
   - Next button switches to "Submit Quiz 🏁" on the last question.
   - Selected answer persists when moving back and forth between questions.

4. **Result Calculation & Performance Breakdown**:
   - Instant calculation of total score, percentage, correct, incorrect, and unanswered counts.
   - Dynamic performance message based on percentage:
     - **80%+**: *"Excellent performance!"*
     - **60%–79%**: *"Good job! Keep practicing."*
     - **40%–59%**: *"Keep practicing and improve your score."*
     - **Below 40%**: *"Don't give up. Review the topics and try again."*

5. **Detailed Answer Review**:
   - Review screen displaying all test questions.
   - Clear display of student's choice vs. the correct answer.
   - Visual badges: **Correct (Green)**, **Incorrect (Red)**, **Unanswered (Orange)**.

6. **Complete Restart**:
   - Clears score, resets selection, stops active timers, and returns to home screen.

---

## ⚙️ How to Run the Project
1. Open the project folder `quizmaster`.
2. Double-click `index.html` to open it directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).
3. No server setup, Node.js, or npm installation required!

---

## 🎓 Viva Concepts Used

### 1. HTML Concepts
- **Semantic Elements**: `<header>`, `<main>`, `<section>`, `<form>`, `<label>`, `<select>`, `<button>`.
- **Form Controls & Validation**: `<input type="text">`, `<select>`, `<option>`, `required`, `placeholder`.
- **Accessibility**: Label association using `for` attribute matching input `id`.

### 2. CSS Concepts
- **CSS Custom Variables**: Centralized color themes (`:root { --primary-color: #4f46e5; }`).
- **Flexbox & CSS Grid**: Used for header, navigation buttons, question option list, and score card grid layout.
- **Card-Based UI**: `box-shadow`, `border-radius`, `padding`, and hover transitions.
- **Responsive Media Queries**: `@media (max-width: 600px)` for mobile and tablet adaptation.

### 3. JavaScript Concepts
- **Variables & Data Types**: `let`, `const`, strings, numbers, booleans, arrays, objects.
- **Data Structures**: Array of objects containing question details (`id`, `category`, `difficulty`, `question`, `options`, `answer`).
- **Functions**: `startQuiz()`, `loadQuestion()`, `selectAnswer()`, `nextQuestion()`, `previousQuestion()`, `updateProgress()`, `startTimer()`, `submitQuiz()`, `calculateResult()`, `showResults()`, `reviewAnswers()`, `restartQuiz()`.
- **DOM Selection & Manipulation**: `document.getElementById()`, `querySelector()`, `classList.add()`, `classList.remove()`, `textContent`, `innerHTML`.
- **Event Listeners**: `addEventListener("click", ...)` and `addEventListener("input", ...)`.
- **Timers**: `setInterval()` for countdown and `clearInterval()` for stopping the clock.
- **Conditionals & Loops**: `if/else`, `forEach()`, `filter()`, array iteration.
