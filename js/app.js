/*-------------------------------- Constants --------------------------------*/
const winningCombos = []
  


/*---------------------------- Variables (state) ----------------------------*/
let winner,random, board, match



/*------------------------ Cached Element References ------------------------*/

const boardSquare = document.querySelector('.board')
const allSquares = document.querySelectorAll(".squares")
const statusMessage = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')





/*----------------------------- Event Listeners -----------------------------*/
// document.addEventListener("click", handleClick)
allSquares.forEach((square) => {
  square.addEventListener('click', handleClick)
})


/*-------------------------------- Functions --------------------------------*/

init()


function init () {

match = 1
random = null
board = [null,null, null, null, null, null, null, null, null,null]
winner = null


}
render()


function render() {
  if(match === 1) {
    
      }else if(match === -1) {
    
      }
  for (let i = 0; i < 10; i++) {
    if (board[i] === 1) {
      allSquares[i].style.backgroundColor = 'pink'
      allSquares[i].innerText = '1'
    } else if(board[i] === -1) {
      allSquares[i].style.backgroundColor = 'orange'
      allSquares[i].innerText = '2'

    }else {
      allSquares[i].style.backgroundColor = 'purple'
    }
  }
}

function handleClick(event) {
  let i = parseInt(event.target.id);
  if (board[i] === null) { //check if move is valid
    board[i] = match // update appropriate element with a 1 or -1
    render(); // render the changes made to our game state
    match = match * -1 // switch the value of turn
  }
}


getWinner()




function getWinner() {
  
  let tieCondition = board.includes(null)
  if (tieCondition === false && winner === null){
    winner = 'Tie'
  }
  for (let i = 0; i < winningCombos.length; i++) {
    let total = 0
    let winningCombo = winningCombos[i]
    for (let i = 0; i < winningCombo.length; i++) {
      total += board[winningCombo[i]]
      let winningValue = Math.abs(total)
      if (winningValue === 3) {
        winner = board[winningCombo[0]]
      }
    }
  }return 
}



