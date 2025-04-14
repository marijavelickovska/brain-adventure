/* jshint esversion: 11  -  JSHint directive to enable ES11 syntax support*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));


    for (let button of buttons) {
        button.addEventListener("click", function () {
            let quizTopic = this.getAttribute("data-topic");

            document.querySelector(".modal-body").innerHTML = `<span>You chose ${quizTopic}. Ready to start?</span>`;
            modal.show();

            document.getElementById("confirmBtn").addEventListener("click", function () {
                modal.hide();
                changeContent(quizTopic);
                startQuiz(quizTopic);
            });
        });
    }
});





function changeContent(quizTopic) {
    document.getElementById("topic-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";

    document.body.style.backgroundImage = `url("assets/images/${quizTopic}.webp")`;


}

function startQuiz(quizTopic) {
    let questionElement = document.getElementById("question");
    let answersElement = document.getElementById("answers");
    let quizProgressElement = document.getElementById("quiz-progress");

    let currentIndex = 0;


    //getAttribute("data-type") returns a string like "quizTopic" 
    //Code to convert a string value to variable 
    let topic;

    if (quizTopic === "geography") {
        topic = geographyQuiz;
    } else if (quizTopic === "history") {
        topic = historyQuiz;
    } else if (quizTopic === "math") {
        topic = mathQuiz;
    }

    let question = topic[currentIndex].question;
    questionElement.innerHTML = `<h2>${question}</h2>`;

    let answers = topic[currentIndex].answers;

    for (let answer of answers) {
        let button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerText = answer;
        answersElement.appendChild(button);
    }
}