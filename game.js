var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];

function nextSequence() {
  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=buttonColours[nextSequence()];
  gamePattern.push(randomColour)
  $("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var sound=new Audio("./sounds/"+randomColour+".mp3");
}
