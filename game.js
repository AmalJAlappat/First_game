var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var setKey = 0;
var level = 0;
var clk = 1;
var compareArr= true;

// Detect Keypress
$(document).keydown(function() {
  if (setKey == 0) {
    // $("#level-title").text("Level " + level);
    nextSequence();
  }
  setKey = 1;
});

// Sequence generator
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColour = buttonColours[randomNumber];

  gamePattern.push(randomColour)

  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColour);
  checkAnswer(level);
}



// checkAnswer
function checkAnswer(currentLevel){
  // Detect Click
  while (level==clk) {
    clk++;
    $(".btn").click(function() {
      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      animatePress(userChosenColour);

    });
  }

  if(compareArrays(gamePattern,userClickedPattern)){
    nextSequence();
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

function compareArrays(arr1,arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i]==arr2[i]) {

    }
    else {
       compareArr=false
    }
  }
  return compareArr;
}
