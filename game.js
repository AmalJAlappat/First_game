var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var setKey = true;
var level = 0;
var clk = 1;

// Detect Keypress
$(document).keydown(function() {
  if (setKey) {
    nextSequence();
  }
  setKey =false;
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
 checkAnswer((userClickedPattern.length)-1);
});



// Sequence generator
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColour = buttonColours[randomNumber];

  gamePattern.push(randomColour);

  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColour);
}



// checkAnswer
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){

          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);

        }

      } else {

        console.log("wrong");

      }


}



// Sound player
function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

// Animate press
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  },100);
}

// To check if arrays are equal

// function compareArrays(arr1,arr2) {
//   if (arr1.toString()==arr2.toString()) {
//     compareArr=true;
//   } else {
//     compareArr=false;
//   }
//   return compareArr;
// }
