var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("questions-container");
var nextButton = document.getElementById("next-btn");
var questionIndex 
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons")
var timeEl = document.querySelector(".time");
var secondsLeft = 120;

// creating function setTime
function setTime() {
  // timerInterval assigned setInterval function
  var timerInterval = setInterval(function() {
    secondsLeft--;
    //timeEl will display seconds left in element with time class
    timeEl.textContent = "You have " + secondsLeft + " seconds left";

    //when seconds left is zero functions clearInterval(timerInterval) and timeIsUp() will run
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeIsUp();
    }

  }, 1000);
}

//when time is up "your time is up" will display in element with time class
function timeIsUp() {
    timeEl.textContent = "Your time is up! ";
  }

  //setTime();


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    questionIndex++;
    nextQuestion();
})

function startGame() {
    setTime();
    startButton.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    //shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    nextButton.classList.remove("hidden");
    nextQuestion()

}

function nextQuestion() {
    displayQuestion(questions[questionIndex]);
    reset()  


}

function displayQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        //else take time off the clock... add in later
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button);
    } )

}

/*function reset(){
    nextButton.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)  // this functionnot working
        
    }

}   */  


function selectAnswer(choice) {
    var selectedButton = choice.target;
    var correct = selectedButton.dataset.correct;
    setCorrect(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setCorrect(button, button.dataset.correct)
    })
    if (questions.length > questionIndex +1){
        nextButton.classList.remove("hidden");
    }
    else {
        nextButton.innerText = "Finish";
    }


}
function setCorrect(element, correct) {
    clearCorrect(element);
    if (correct) {
        element.classList.add("correct");
    }
    else {
        element.classList.add("wrong");
    }

}
function clearCorrect(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

/* function finishQuiz() { // add in later 

} */

var questions = [
    {
        question: "1) What is Kevin McCallister's father's name in 'Home Alone'?",
        answers: [
           {text: "Jacob", correct: false},
           {text: "Peter", correct: true},
           {text: "Paul", correct: false},
           {text: "Jonathan", correct: false}
        ]
    },

    {
        question: "2) Which department store is featured in Miracle on 34th Street?",
        answers: [
           {text: "Macy's", correct: true},
           {text: "Bloomingdale's", correct: false},
           {text: "Saks", correct: false},
           {text: "Neiman Marcus", correct: false}
        ]
    },

    {
        question: "3)  On whose Indiana childhood experiences is 'A Christmas Story' is based? ",
        answers: [
           {text: "Dan Quayle", correct: false},
           {text: "Gene Hackman", correct: false},
           {text: "Ron Howard", correct: false},
           {text: "Jean Shepherd", correct: true}
        ]
    },

    {
        question: "4) In the movie 'Elf' which toy scares and angers Buddy?",
        answers: [
           {text: "Rocking horse", correct: false},
           {text: "Jack-in-a-Box", correct: true},
           {text: "Toy robot", correct: false},
           {text: "Yo-Yo", correct: false}
        ]
    },
    
    {
        question: "5)  In 'Christmas Vacation', when Aunt Bethany is asked to say Grace, what does she do instead? ",
        answers: [
           {text: "Sing the national anthem", correct: false},
           {text: "Break wind", correct: false},
           {text: "Recite the Pledge of Allegiance", correct: true},
           {text: "Sing Amazing Grace", correct: false}
        ]
    }



]