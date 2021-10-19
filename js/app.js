const squaresArray = ['0','1','2','3','4','5','6','7','8','9'];


const colorsArray = ['blue', 'green', 'purple', 'orange', 'red'];


let blueArray = [],
  greenArray = [],
  purpleArray = [],
  orangeArray = [],
  redArray = [];


let lastColor = "";

let clicks = 0

let clickedSqaures = [];

let duplicateClicks = false;

let gameStart = false;


// Event Listener

// document.getElementById('start').addEventListener('click', startGame);

// document.getElementById('reset').addEventListener('click', resetGame);

// listen for each square
document.getElementById('square0').addEventListener('click', function(){
  squares('square0')
})

document.getElementById('square1').addEventListener('click', function(){
  squares('square1')
})
document.getElementById('square2').addEventListener('click', function(){
  squares('square2')
})
document.getElementById('square3').addEventListener('click', function(){
  squares('square3')
})
document.getElementById('square4').addEventListener('click', function(){
  squares('square4')
})
document.getElementById('square5').addEventListener('click', function(){
  squares('square5')
})
document.getElementById('square6').addEventListener('click', function(){
  squares('square6')
})
document.getElementById('square7').addEventListener('click', function(){
  squares('square7')
})
document.getElementById('square8').addEventListener('click', function(){
  squares('square8')
})
document.getElementById('square9').addEventListener('click', function(){
  squares('square9')
})

function startGame() {
  console.log('game started')
}

function resetGame() {
  console.log('game reset')
}

function squares(square) {
  console.log(square)
}