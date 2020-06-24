var homeModal = document.querySelector(".home-modal");
var startQuizBtn = document.querySelector(".start-quiz");
var quizModal = document.querySelector(".quiz-modal-1");
var allDoneModalEl = document.querySelector(".all-done-modal");
var highScoreModalEl = document.querySelector(".high-scores-modal");
var questionContainer = document.querySelector("#question-container");
var timeEl = document.querySelector("#time");
var seconds = 60;
var secondDelay = 1;
var resultMessageEl = document.querySelector("#result-message");
var submitScoreBtn = document.querySelector("#submit")
var viewHighScores = document.querySelector("#view-scores");
var studentNameInput = document.querySelector("#student");
var goBackBtn = document.querySelector("#go-back");
var clearHighScoreBtn = document.querySelector("#clear-high-scores");

startQuizBtn.addEventListener("click", function (event) {
    homeModal.style.display = "none";
    quizModal.style.display = "block";
    startQuiz();
})

function startQuiz() {
    startTime();
}

function startTime() {
    interval = setInterval(function () {
        seconds--;
        timeEl.textContent = seconds;
        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
}

viewHighScores.addEventListener("click", function () {
    homeModal.style.display = "none";
    viewHighScores.style.display = "none";
    document.querySelector(".time-clock").style.display = "none";
    quizModal.style.display = "none";
    highScoreModalEl.style.display = "block";
})

questionOne();

function questionOne() {
    var btnAnswer = document.querySelector("#C");
    btnAnswer.addEventListener("click", function (event) {
        resultMessageEl.textContent = "You are correct!";
        clearInterval(interval);
        var secondDelay = 1;
        var secondInterval = setInterval(function () {
            secondDelay--;
            if (secondDelay === 0) {
                resultMessageEl.textContent = "";
                quizModal.style.display = "none";
                viewHighScores.style.display = "none";
                allDoneModalEl.style.display = "block";
                document.getElementById("student").setAttribute("placeholder", "Enter your initials");
                clearInterval(secondInterval);
            }
        }, 1000);
    })
}

submitScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (studentNameInput.value === "") {
        alert("Please enter your initials.");
        return;
    } else {
        allDoneModalEl.style.display = "none";
        viewHighScores.style.display = "none";
        document.querySelector(".time-clock").style.display = "none";
        highScoreModalEl.style.display = "block";
        addStudentToTally();
    }
})

goBackBtn.addEventListener("click", function () {
    homeModal.style.display = "block";
    viewHighScores.style.display = "block";
    document.querySelector(".time-clock").style.display = "block";
    highScoreModalEl.style.display = "none";
    document.getElementById("time").innerHTML = "0";
})

clearHighScoreBtn.onclick = () => {
    highScores = document.querySelector(".high-score-list");
    highScores.innerHTML = '';
  }


function addStudentToTally() {
    var scoresTally = [
        {
            studentName: studentNameInput.value.trim(),
            studentScore: 20
        },
        { studentName: "John", studentScore: 40 }

    ];

    localStorage.setItem("student", JSON.stringify(scoresTally));
    var lastStudent = JSON.parse(localStorage.getItem("student"));
    console.log(lastStudent);
    for (var i = 0; i < scoresTally.length; i++) {
        var highScoresBox = document.querySelector(".high-score-list");
        var newScorerEl = document.createElement("div");
        newScorerEl.textContent = lastStudent[i].studentName;
        highScoresBox.append(newScorerEl);
    }
}

function allDone() {

}

function clearMessage() {
    var secondInterval = setInterval(function () {
        secondDelay--;
        if (secondDelay === 0) {
            resultMessageEl.textContent = "";
            clearInterval(secondInterval);
        }
    }, 1000);
}

var questions = [
	{
		title: "Which of these is not an animal?",
		choices: ["cat", "dog", "bird", "tree"],
		answer: "tree"
	},
	{
		title: "Which of these is a State?",
		choices: ["Guam", "Kansas", "American Samoa", "Puerto Rico"],
		answer: "Kansas"
	}
]