// jshint esversion: 11
// JSHint directive to enable ES11 syntax support

let topic = null;
let currentIndex = 0;
let randomIndexes = [];
let quizTopic = [];
let correctAnswers = 0;

let questionElement = document.getElementById("showQuestion");
let answersElement = document.getElementById("answers");
let progressElement = document.getElementById("showProgress");
const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));


// On DOMContentLoaded: Add event listeners to get the selected topic and confirm the user's choice
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn-topicImg");

    for (let button of buttons) {
        button.addEventListener("click", getTopic);
    }

    document.getElementById("confirmBtn").addEventListener("click", confirmTopic);
});


// Get the value of the data-topic attribute and display a modal for confirmation
function getTopic() {
    topic = this.getAttribute("data-topic");
    document.querySelector(".modal-body").innerHTML = `<span>You chose ${topic}. Ready to start?</span>`;
    modal.show();
}


// Hide the modal and start the quiz using the selected topic
function confirmTopic() {
    modal.hide();
    startQuiz(topic);
}


/* Change the content of the container, retrieve the selected quiz topic array,
 and display the question */
function startQuiz(topic) {
    changeContent(topic);
    getSelectedQuizTopicArray(topic);
    showNextQuestion(topic);
}


// Change the content of the page by hiding the topic container and displaying the quiz container
function changeContent(topic) {
    document.getElementById("topic-container").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide");
    document.getElementById("quiz-container").style.display = "flex";

    document.body.style.backgroundImage = `url("assets/images/${topic}.webp")`;
}


/* Convert the string value retrieved from the data-topic attribute into a variable 
   and use it to access the corresponding array for the selected quiz topic */
function getSelectedQuizTopicArray(topic) {
    if (topic === "geography") {
        quizTopic = geographyQuiz;
    } else if (topic === "history") {
        quizTopic = historyQuiz;
    } else if (topic === "math") {
        quizTopic = mathQuiz;
    }
    return quizTopic;
}


/* Generate random indexes and use them to select a random question with its answers 
   from the corresponding array. Then create HTML elements to display the question and the answer options. 
   The progress element displays the current progress of the quiz. */
function showNextQuestion(topic) {
    randomIndexes = generateRandomIndexes(); 

    let question = quizTopic[randomIndexes[currentIndex]].question;
    questionElement.innerHTML = `<h2>${question}</h2>`;

    answersElement.innerHTML = "";

    let letters = ["A", "B", "C", "D"];
    let i = 0;

    let questionAnswers = quizTopic[randomIndexes[currentIndex]].answers;
    let answers = questionAnswers.sort(() => Math.random() - 0.5); // Code shown by my mentor for shuffling the answers

    for (let answer of answers) {
        let col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-5");

        let button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerHTML = `<span class="bold">${letters[i]}.</span> ${answer}`;

        col.appendChild(button);
        answersElement.appendChild(col);

        i++;
    }
    progressElement.innerHTML = `<h5>Question <span class="orange">${currentIndex + 1}</span>  of <span class="orange">${randomIndexes.length}</span></h5>`;
    handleAnswerClick();
}


// Generate random numbers from 0 to 29 and store them in an array
function generateRandomIndexes() {
    while (randomIndexes.length < 15) {
        let randomNum = Math.floor(Math.random() * 30);  // Generates a random number between 0 and 29

        if (!randomIndexes.includes(randomNum)) {
            randomIndexes.push(randomNum);  // Add the number to the array if it's not already included 
        }
    }
    return randomIndexes;
}


// On button click, call function to check if the answer is correct
function handleAnswerClick() {
    let buttons = document.getElementsByClassName("answer-btn");

    for (let button of buttons) {
        button.addEventListener("click", checkIfCorrect);
    }
}


/* Compare the user's answer with the correct answer. Create a table displaying the questions,
   the user's answer, and the correct answer. If the answer is correct, increment the correct answers count 
   by 1 and also increase the current index of the questions. Then, call a function to check if the quiz is complete. */
function checkIfCorrect() {
    let correct = quizTopic[randomIndexes[currentIndex]].correct;
    let userAnswer = this.innerText;
    let answerText = userAnswer.split(". ")[1]; //Splits the actual user answer from the letters before the answer

// Update the table with the question, user answer, and correct answer
    let tableBody = document.querySelector("tbody");

    let tr = document.createElement("tr");

    let tdIndex = document.createElement("td");
    tdIndex.innerText = currentIndex + 1;

    let tdQuestion = document.createElement("td");
    tdQuestion.innerText = quizTopic[randomIndexes[currentIndex]].question;

    let tdUserAnswer = document.createElement("td");
    tdUserAnswer.innerText = answerText;

    let tdCorrect = document.createElement("td");
    tdCorrect.innerText = correct;

    tr.appendChild(tdIndex);
    tr.appendChild(tdQuestion);
    tr.appendChild(tdUserAnswer);
    tr.appendChild(tdCorrect);

    if (answerText === correct) {  // Compare user answer with correct answer
        correctAnswers++;  // Increment correct answers count
        tr.classList.add('correct');
    } else {
        tr.classList.add('incorrect');
    }

    tableBody.appendChild(tr);

    currentIndex++; // Increment current index count
    isQuizComplete();
}


/* Check if all 15 questions from the quiz have been answered. If the quiz is completed, shows the results.
   If not, displays the next question */
function isQuizComplete() {
    if (currentIndex < randomIndexes.length) {
        showNextQuestion(topic);
    } else {
        showScore(correctAnswers);
    }
}


// Based on the number of correct answers, show the corresponding message and the user's score
function showScore(correctAnswers) {
    document.body.scrollTop = 0;   // Move view to the top for better user experience on mobile
    document.documentElement.scrollTop = 0;

    document.getElementById("quiz-container").classList.add("hide");
    document.getElementById("result-container").classList.remove("hide");
    document.getElementById("result-container").style.display = "flex";
    document.querySelector(".results-table").classList.remove("hide");
    document.querySelector(".results-table").style.display = "block";

    let header = document.querySelector(".header");
    let score = document.querySelector(".score");
    let message = document.querySelector(".message");

    if (correctAnswers <= 5) {
        header.innerHTML = "Keep trying!";
        score.innerHTML = `You got only <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Don't worry, you can always try again!<span class='emoji'>💪</span>";
    } else if (correctAnswers <= 10) {
        header.innerHTML = "Good job!";
        score.innerHTML = `You scored <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Keep practicing!<span class='emoji'>🌟</span>";
    } else {
        header.innerHTML = "Congratulations!";
        score.innerHTML = `You scored <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Excellent work!<span class='emoji'>🏆</span>";
    }
}


document.getElementById("startOver").addEventListener("click", playAgain);
document.getElementById("playAgain").addEventListener("click", playAgain);


/* Hide all containers and show the topic container so the user can choose a topic and play again.
   Also reset the values of all used variables to start the quiz from the beginning. */
function playAgain() {
    document.getElementById("result-container").classList.add("hide");
    document.getElementById("quiz-container").classList.add("hide");
    document.getElementById("topic-container").classList.remove("hide");
    document.querySelector(".results-table").classList.add("hide");

    document.body.style.backgroundImage = `url("assets/images/library.webp")`;
    document.querySelector("tbody").innerHTML = "";

    topic = null;
    correctAnswers = 0;
    currentIndex = 0;
    randomIndexes = [];
}