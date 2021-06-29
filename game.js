var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];


$("button").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

});


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColour = buttonColours[randomNumber];

  gamePattern.push(randomColour)

  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColour);

}

function playSound(name) {
  var sound = new Audio("./sounds/" + name + ".mp3");
  sound.play();
}

Function animatePress(currentColour) {
  $("#" + currentColour).addClass(".pressed");
  setTimeOut(function() {
    $("#" + currentColour).removeClass(".pressed");
  }, 100);
}
