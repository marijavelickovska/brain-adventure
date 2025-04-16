/* jshint esversion: 11  -  JSHint directive to enable ES11 syntax support*/

let topic = null;
let currentIndex = 0;
let randomIndexes = [];
let quizTopic = [];
let correctAnswers = 0;

let questionElement = document.getElementById("showQuestion");
let answersElement = document.getElementById("answers");
let progressElement = document.getElementById("showProgress");


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn-topicImg");
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    for (let button of buttons) {
        button.addEventListener("click", function () {
            topic = this.getAttribute("data-topic");
            document.querySelector(".modal-body").innerHTML = `<span>You chose ${topic}. Ready to start?</span>`;
            modal.show();
        });
    }

    document.getElementById("confirmBtn").addEventListener("click", function () {
        modal.hide();
        startQuiz(topic);
    });
});

function startQuiz(topic) {
    changeContent(topic);
    getSelectedQuizTopicArray(topic);
    showNextQuestion(topic);
}


function changeContent(topic) {
    document.getElementById("topic-container").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide");
    document.getElementById("quiz-container").style.display = "flex";

    document.body.style.backgroundImage = `url("assets/images/${topic}.webp")`;
}

function getSelectedQuizTopicArray(topic) {
    //Code to convert a string value to variable 
    //let quizTopic;

    if (topic === "geography") {
        return quizTopic = geographyQuiz;
    } else if (topic === "history") {
        return quizTopic = historyQuiz;
    } else if (topic === "math") {
        return quizTopic = mathQuiz;
    }
}



function showNextQuestion(topic) {

    //let quizTopicQuestions = getSelectedQuizTopicArray(topic); //array of 30
    let randomIndexes = generateRandomIndexes(); //[27, 6, 10, 8, 24, 2, 12, 3, 26, 18, 9, 19, 21, 1, 23]

    let question = quizTopic[randomIndexes[currentIndex]].question;
    questionElement.innerHTML = `<h2>${question}</h2>`;

    answersElement.innerHTML = "";

    let letters = ["A", "B", "C", "D"];
        let i = 0;

    let answers = quizTopic[randomIndexes[currentIndex]].answers;
    for (let answer of answers) {
        let col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-5")

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


function generateRandomIndexes() {

    while (randomIndexes.length < 15) {
        let randomNum = Math.floor(Math.random() * 30); // 0 до 29

        if (!randomIndexes.includes(randomNum)) {
            randomIndexes.push(randomNum);
        }
    }

    return randomIndexes;
}


function handleAnswerClick() {
    let buttons = document.getElementsByClassName("answer-btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let correct = quizTopic[randomIndexes[currentIndex]].correct;
            let userAnswer = this.innerText;
            let answerText = userAnswer.split(". ")[1];
            console.log(userAnswer);
            console.log(correct);
            if (answerText === correct) {
                 correctAnswers++;
            }

            currentIndex++;
            isQuizComplete();
        });
    }
}



function isQuizComplete() {
    if (currentIndex < randomIndexes.length) {
        showNextQuestion(topic);
    } else {
        showScore(correctAnswers);
    }
}

function showScore(correctAnswers) {
    console.log(correctAnswers);
    document.getElementById("quiz-container").classList.add("hide");
    document.getElementById("result-container").classList.remove("hide");
    document.getElementById("result-container").style.display = "flex";

    let header = document.querySelector(".header");
    let score = document.querySelector(".score");
    let message = document.querySelector(".message");
    
    if(correctAnswers <= 5) {
        header.innerHTML = "Keep trying!";
        score.innerHTML = `You got only <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Don't worry, you can always try again!<span>💪</span>"
    } else if (correctAnswers <= 10) {
        header.innerHTML = "Good job!";
        score.innerHTML = `You scored <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Keep practicing!<span>🌟</span>"
    } else {
        header.innerHTML = "Congratulations!";
        score.innerHTML = `You scored <span class="orange">${correctAnswers}</span>  out of <span class="orange">15</span>.`;
        message.innerHTML = "Excellent work!<span>🏆</span>"
    }

}