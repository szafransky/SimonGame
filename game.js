// let buttonColors = ['red', 'blue', 'green', 'yellow'];
// let gamePattern = [];
// let userClickedPattern = [];
// let start = false;
// let level = 0;
//
//
//
// function nextSequence() {
//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChosenColor);
//   console.log(gamePattern);
//   console.log($(`#${randomChosenColor}`));
//   $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColor);
//   $('h1').text(`Level ${level}`);
//   level++;
//     // $(`#${randomChosenColor}`).
// }
//
// $('.btn').on('click', function(event) {
//   let userChosenColour = event.target.id;
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//   userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern);
//   checkAnswer(userClickedPattern.length - 1);
//   console.log(userClickedPattern.length - 1);
// })
//
//
// function playSound(colour) {
//   switch (colour) {
//
//     case 'blue':
//       let blue = new Audio(`sounds/${colour}.mp3`);
//       blue.play();
//       break;
//
//     case 'green':
//       let green = new Audio(`sounds/${colour}.mp3`);
//       green.play();
//       break;
//
//     case 'red':
//       let red = new Audio(`sounds/${colour}.mp3`);
//       red.play();
//       break;
//
//     case 'wrong':
//       let wrong = new Audio(`sounds/${colour}.mp3`);
//       wrong.play();
//       break;
//
//     case 'yellow':
//       let yellow = new Audio(`sounds/${colour}.mp3`);
//       yellow.play();
//       break;
//
//   }
// }
//
//
// function animatePress(currentColour) {
//   $(`#${currentColour}`).addClass('pressed');
//   setTimeout(function() {
//       $(`#${currentColour}`).removeClass('pressed');
//   },100)
// }
//
// if(level == 0){
//   $(document).on('keypress', nextSequence);
// }
//
//
// function checkAnswer(currentLevel) {
//   if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
//     console.log('success');
//     if(gamePattern.length == userClickedPattern.length) {
//       setTimeout(nextSequence, 1000);
//       userClickedPattern = [];
//     }
//   } else {
//     console.log('mistake');
//     playSound('wrong');
//     $('body').addClass('game-over');
//     $('h1').text('Game Over, Press Any Key to Restart');
//     restartGame();
//     setTimeout(function() {
//       $('body').removeClass('game-over');
//     },200);
//   }
//
// }
//
// function restartGame() {
// gamePattern = [];
// userClickedPattern = [];
// level = 0;
// }

let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let start = false;
let level = 0;



function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  console.log($(`#${randomChosenColor}`));
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  $('h1').text(`Level ${level}`);
  level++;
    // $(`#${randomChosenColor}`).
}

$('.btn').on('click', function(event) {
  let userChosenColour = event.target.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern.length - 1);
})


function playSound(colour) {
  switch (colour) {

    case 'blue':
      let blue = new Audio(`sounds/${colour}.mp3`);
      blue.play();
      break;

    case 'green':
      let green = new Audio(`sounds/${colour}.mp3`);
      green.play();
      break;

    case 'red':
      let red = new Audio(`sounds/${colour}.mp3`);
      red.play();
      break;

    case 'wrong':
      let wrong = new Audio(`sounds/${colour}.mp3`);
      wrong.play();
      break;

    case 'yellow':
      let yellow = new Audio(`sounds/${colour}.mp3`);
      yellow.play();
      break;

  }
}


function animatePress(currentColour) {
  $(`#${currentColour}`).addClass('pressed');
  setTimeout(function() {
      $(`#${currentColour}`).removeClass('pressed');
  },100)
}






function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    console.log('success');
    if(gamePattern.length == userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
    }
  } else {
    console.log('mistake');
    playSound('wrong');
    $('body').addClass('game-over');
    $('h1').text('Game Over, Press Any Key to Restart');
    restartGame();
    setTimeout(function() {
      $('body').removeClass('game-over');
    },200);
  }

}

function restartGame() {
gamePattern = [];
userClickedPattern = [];
level = 0;
}
