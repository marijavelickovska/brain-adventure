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
    document.getElementById("topic-container").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide")
    document.getElementById("quiz-container").style.display = "flex";


    document.body.style.backgroundImage = `url("assets/images/${quizTopic}.webp")`;
}


function startQuiz(quizTopic) {
    let questionElement = document.getElementById("showQuestion");
    let answersElement = document.getElementById("answers");
    let quizProgressElement = document.getElementById("showProgress");

    
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


    let i = 0;
    let randomIndexes = randomIndexes(); //[27, 6, 10, 8, 24, 2, 12, 3, 26, 18, 9, 19, 21, 1, 23]
    

    let question = topic[randomIndexes[i]].question;
    questionElement.innerHTML = `<h2>${question}</h2>`;
  

    let answers = topic[randomIndexes[i]].answers;
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

}

function randomIndexes(){
        let randomQuestionIndexes = [];

        while (randomQuestionIndexes.length < 15) {
            let randomIndex = Math.ceil(Math.random() * 29);

            if (randomQuestionIndexes.includes(randomIndex)) {
                continue;
            } else {
                randomQuestionIndexes.push(randomIndex);
            }
        }

        return randomQuestionIndexes;

}

