var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];


$("button").click(function(event){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});


function nextSequence() {
  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=buttonColours[nextSequence()];

  gamePattern.push(randomColour)

  $("#"+randomColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var sound=new Audio("./sounds/"+randomColour+".mp3");
  sound.play();

}
