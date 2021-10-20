const squaresArray = ['square0','square1','square2','square3','square4','square5','square6','square7','square8','square9'];


const colorsArray = ['blue', 'green', 'purple', 'orange', 'red'];


let blueArray = [],
  greenArray = [],
  purpleArray = [],
  orangeArray = [],
  redArray = [];


let lastColor = "";

let clicks = 0square

let clickedSquares = [];

let duplicateClicks = false;

let gameStart = false;


// Event Listener

document.getElementById('start').addEventListener('click', startGame);

document.getElementById('reset').addEventListener('click', resetGame);

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
  resetFlip()
  console.log('game started')
}

function resetGame() {
  resetFlip()
  console.log('game reset')
  
}

// reset if not match 
function resetFlip(){
  lastColor = '';
  clicks= 0;
  clickedSquares = [];
  duplicateClicks= false;
  startGame = true;

  for(let i = 0; i < 10; i++){
    let element = "square" + i;
    document.getElementById(element).style.backgroundColor = "brown";
  }
}

// main function
function squares(square) {
  console.log(square)
  if(gameStart){
    console.log('the game has started');
    // check if clicked
    for (let i = 0; i < clickedSquares.length; i++){
      if (square == clickedSquares[i]){
      duplicateClicks = true;
      console.log('duplicate click');
      }
    }
    if(duplicateClicks){
      clickedSquares.push(square);
    }
    duplicateClicks = false;
    console.log(duplicateClicks)

  }
  else{
    
  }
  }

// reset full game


// Reset variables associated with the randomization of tiles placement
function gameFullReset() {
      green = 0,
      purple = 0,
      orange = 0,
      red = 0;

  // empty the arrays to store new tiles
  blueArray = [],
  greenArray = [],
  purpleArray = [],
  orangeArray = [],
  redArray = [];

  for (let i = 0; i < 10; i++){
      let nmbr = Math.floor(Math.random() * 5);

      if (nmbr === 0){
          if (blue < 2){
              blue++;
              blueArray.push(squaresArray[i]);
          }
          else {
              i--;
          }
      }
      else if (nmbr === 1){
          if (green < 2){
              green++;
              greenArray.push(squaresArray[i]);
          }
          else {
              i--;
          }
      }
      else if (nmbr === 2){
          if (purple < 2){
              purple++;
              purpleArray.push(squaresArray[i]);
          }
          else {
              i--;
          }
      }
      else if (nmbr === 3){
          if (orange < 2){
              orange++;
              orangeArray.push(squaresArray[i]);
          }
          else {
              i--;
          }
      }
      else if (nmbr === 4){
          if (red < 2){
              red++;
              redArray.push(squaresArray[i]);
          }
          else {
              i--;
          }
      }
  }
}






