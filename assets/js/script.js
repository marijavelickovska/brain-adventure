/* jshint esversion: 11  -  JSHint directive to enable ES11 syntax support*/

let quizTopic = null;
let index = 0;

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn-topicImg");
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    for (let button of buttons) {
        button.addEventListener("click", function () {
            quizTopic = this.getAttribute("data-topic");
            document.querySelector(".modal-body").innerHTML = `<span>You chose ${quizTopic}. Ready to start?</span>`;
            modal.show();
        });
    }

    document.getElementById("confirmBtn").addEventListener("click", function () {
        modal.hide();
        //changeContent(quizTopic);
        startQuiz(quizTopic);
    });
});

function startQuiz(quizTopic) {
    changeContent(quizTopic);
    getSelectedQuizTopicArray(quizTopic);
    showNextQuestion(quizTopic);
}


function changeContent(quizTopic) {
    document.getElementById("topic-container").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide")
    document.getElementById("quiz-container").style.display = "flex";

    document.body.style.backgroundImage = `url("assets/images/${quizTopic}.webp")`;
}

function getSelectedQuizTopicArray(quizTopic) {
    //Code to convert a string value to variable 
    let topic;

    if (quizTopic === "geography") {
        return topic = geographyQuiz;
    } else if (quizTopic === "history") {
        return topic = historyQuiz;
    } else if (quizTopic === "math") {
        return topic = mathQuiz;
    }
}



function showNextQuestion(quizTopic) {
    let questionElement = document.getElementById("showQuestion");
    let answersElement = document.getElementById("answers");
    let quizProgressElement = document.getElementById("showProgress");

    let topic = getSelectedQuizTopicArray(quizTopic); //array of 30


    let randomIndexes = generateRandomIndexes(); //[27, 6, 10, 8, 24, 2, 12, 3, 26, 18, 9, 19, 21, 1, 23]


    let question = topic[randomIndexes[index]].question;
    questionElement.innerHTML = `<h2>${question}</h2>`;

    answersElement.innerHTML = "";

    let answers = topic[randomIndexes[index]].answers;
    for (let answer of answers) {
        let col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-5")

        let button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerText = answer;

        col.appendChild(button);
        answersElement.appendChild(col);
    }

    quizProgressElement.innerHTML = `<h5>Question 13 of 15</h5>`;

    increasmentIndex();

}


function generateRandomIndexes() {
    let randomQuestionIndexes = [];

    while (randomQuestionIndexes.length < 15) {
        let randomIndex = Math.floor(Math.random() * 30); // 0 до 29

        if (!randomQuestionIndexes.includes(randomIndex)) {
            randomQuestionIndexes.push(randomIndex);
        }
    }

    return randomQuestionIndexes;
}


function increasmentIndex() {
    let buttons = document.getElementsByClassName("answer-btn");

    for (const button of buttons) {
        button.addEventListener("click", function () {
            index ++;
            showNextQuestion(quizTopic)
        });
    }
}

function handleAnswerClick() {
    showNextQuestion(quizTopic);
}