/*-------------------------------- Constants --------------------------------*/

  


/*---------------------------- Variables (state) ----------------------------*/
let winner,secretBox, board, match



/*------------------------ Cached Element References ------------------------*/

const boardSquare = document.querySelector('.board')
const allSquares = document.querySelectorAll(".squares")
const statusMessage = document.querySelector('#message')
const resetBtn = document.querySelector('#reset-button')
const matchInput = document.querySelector('#match-input')




/*----------------------------- Event Listeners -----------------------------*/
// document.addEventListener("click", handleClick)
allSquares.forEach((square) => {
  square.addEventListener('click', handleClick)
})


/*-------------------------------- Functions --------------------------------*/

init()


function init () {

match = 1
secretBox= null
board = [null,null, null, null, null, null, null, null, null,null]
winner = null
secretBox = Math.floor(Math.random() * 5 + 1)
console.log(secretBox)
render()
}


function render() {
  if(match === secretBox) {
    return
      }else if(match === -1) {
    
      }
  for (let i = 0; i < board.length; i++) {
    if (board[i] === secretBox) {
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

console.log(board)


function handleClick(event) {
  let i = parseInt(event.target.id);
  if (board[i] === null) { //check if move is valid
    board[i] = match // update appropriate element with a 1 or -1
    render(); // render the changes made to our game state
    match = match * -1 // switch the value of turn
  }
}








