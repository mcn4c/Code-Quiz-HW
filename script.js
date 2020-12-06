


//Timer Function

//assign html element to variable
var timeEl = document.querySelector(".time");

//var secondsLeft assigned value (starting time amount)
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
  setTime();








