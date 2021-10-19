/*-------------------------------- Constants --------------------------------*/

  


/*---------------------------- Variables (state) ----------------------------*/
let winner,box1Value, box1Index, box2value, box2Index



/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')

const statusMessage = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')




/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener("click", function(event) {

})

resetBtn.addEventListener('click', function() {

})


/*-------------------------------- Functions --------------------------------*/

init()


function init () {

turn = 1

let board = ['A', 'B', 'C', 'D', 'E']

render()
}

function shuffle(){
  let boxesToShuffle = [];
  let boxToAdd;
  for(let i = i; i < board.length; i++){
    boxToAdd = board.splice(Math.random() * board.length + 1, 1);
    boxesToShuffle.push(boxToAdd.toString())
    boxesToShuffle.push(boxToAdd.toString())

  }
  shuffle(boxesToShuffle);
}







