var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var setKey = true;
var tog = true;
var level = 0;
var clk = 1;

// Detect Keypress
$(document).keydown(function() {
  if (setKey) {
    nextSequence();
  }
  setKey = false;
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer((userClickedPattern.length) - 1,true);
});



// Sequence generator
function nextSequence() {
  tog = true;
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
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
 tog=true;
        nextSequence();
      }, 1000);

    }

  } else {

    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    level = 0;
    restart();

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
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function restart(){
  $(document).keydown(function() {
    if (tog) {
      nextSequence();
    }
    tog = false;
  });
}
