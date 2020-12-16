// assign global variables
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var finishButton = document.getElementById("finish-btn");
var questionContainer = document.getElementById("question-container");
var currentQuestion = document.getElementById("question-div");
var answerButtonsElement = document.querySelector("#answer-choices");
var answerA = document.getElementById("a-choice");
var answerB = document.getElementById("b-choice");
var answerC = document.getElementById("c-choice");
var answerD = document.getElementById("d-choice");
var answerCorrect = document.getElementById("correct-choice");
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var resultsEl = document.querySelector(".results");
var secondsLeft = 60;
var score = 0;
var i = 1;

//Question content in array (chose christmas movie quiz so friends and family could try it out)
var questions = [
    {
        question: "1) What is Kevin McCallister's father's name in 'Home Alone'?",
    
           choiceA: "Jacob",
           choiceB: "Peter",
           choiceC: "Paul",
            choiceD: "Jonathan",
            correct: "Peter",
    },
    {
        question: "2) Which department store is featured in Miracle on 34th Street?",
    
           choiceA: "Macy's",
           choiceB: "Nordstrom",
           choiceC: "Saks",
            choiceD: "Neiman Marcus",
            correct: "Macy's",
    },
  
    {
        question: "3)  On whose Indiana childhood experiences is 'A Christmas Story'  based? ",
    
           choiceA: "Dan Quayle",
           choiceB: "Gene Hackman",
           choiceC: "Ron Howard",
            choiceD: "Jean Shepherd",
            correct: "Jean Shepherd",
    },
    {
        question: "4) In the movie 'Elf' which toy scares and angers Buddy?",
    
           choiceA: "Rocking Horse",
           choiceB: "Jack-in-the-box",
           choiceC: "Toy robot",
            choiceD: "Yo-Yo",
            correct: "Jack-in-the-box",
    },
    {
        question: "5)  Who plays Captain Bob Wallace in 'White Christmas'? ",
    
           choiceA: "Frank Sinatra",
           choiceB: "Bob Hope",
           choiceC: "Bing Crosby",
            choiceD: "Dean Martin",
            correct: "Bing Crosby",
    },
        ]


// three functions (timer, score and display question) called when start button clicked
function displayTimer(){
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.innerHTML = "You have " + secondsLeft + " seconds left";
            if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeEl.innerHTML = "Your time is up!";
             questionContainer.classList.add("hidden");  
             finishButton.classList.remove("hidden");          
          }
      
        }, 1000);
      }
//  the displayScore is not showing score increase for correct answer   
/*function displayScore(){
    scoreEl.innerHTML = "Your score: " + score;
}*/

function displayQuestion() {
       
        var q = questions[0];
        currentQuestion.innerHTML= "<p>" + q.question + "</p>";
        answerA.innerText = q.choiceA;
         answerB.innerText = q.choiceB;
        answerC.innerText = q.choiceC;
        answerD.innerText = q.choiceD;
        answerCorrect.innerText = q.correct;
        answerButtonsElement.classList.remove("hidden");
     
    }




//Start button to start game run three functions and display next button
function startGame() {

    displayQuestion();
    //displayScore(); this function is not working
    displayTimer();
    nextButton.classList.remove("hidden");
    startButton.classList.add("hidden");
    
    
}
startButton.addEventListener("click", function() {
    startGame()

})

// functions called when user clicks different radio button answers
function userAnswerA() {

    var a = answerA.innerText;
    if (a == answerCorrect.innerText){
        score++;
    }
    else {
        secondsLeft -7;
   
   console.log(a);
}
}

function userAnswerB() {

    var b = answerB.innerText;
    if (b == answerCorrect.innerText){
        score++;
    }
    else {
        secondsLeft -7;
    }
    console.log(b);
   
}
     
function userAnswerC() {
    var c = answerC.innerText;
    if (c == answerCorrect.innerText){
        score++;
    }
    else {
        secondsLeft -7;    
} 
console.log(c);
}
     
function userAnswerD() {

    var d = answerD.innerText;
    if (d === answerCorrect.innerText){
        score++;
    }
    else {
        secondsLeft -7;   
}
console.log(d);
}
//click event for next button
nextButton.addEventListener("click", function() {
        
        nextQuestion();
        
 })
 
   
function nextQuestion() {
    

    if (i < questions.length) {
    
    var q = questions[i++];
    currentQuestion.innerHTML= "<p>" + q.question + "</p>";
    answerA.innerText = q.choiceA;
    answerB.innerText = q.choiceB;
    answerC.innerText = q.choiceC;
    answerD.innerText = q.choiceD;
    answerCorrect.innerText  = q.correct;
    
 } 
    else {

    finishButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    currentQuestion.classList.add("hidden");
    answerButtonsElement.classList.add("hidden");
}

}
// click event for finish button
finishButton.addEventListener("click", function() {
    currentQuestion.classList.add("hidden"); 
    timeEl.classList.add("hidden");
         userInitials();
    
})

// prompt to get users initials and display user's final score
function userInitials(){
    var promptInitials = prompt("Type your initials here: ");
    
    resultsEl.innerHTML = promptInitials + ", your final score is " + score +".";
    finishButton.classList.add("hidden");
}


