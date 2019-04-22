/* 'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] == playerTurn) {
      printWinner();
    }
  } return false;
}

function verticalWin() {
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] == playerTurn && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
      printWinner();
    }
  } return false;
}

function diagonalWin() {
  if (board[1][1] == playerTurn) {
    if (board[0][0] == playerTurn && board [2][2] == playerTurn) {
      printWinner();
    } else if (board[0][2] == playerTurn && board[2][0] == playerTurn) {
      printWinner();
    } else 
    return true;
  } else 
  return false;
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalWin();
  return true;
}

function printWinner() {
  let declareWinner = document.getElementById('container');
  let winText = document.getElementById('printWin');
  winText.innerHTML = playerTurn + ' WINS';
  declareWinner.style.pointerEvents = 'none';
}

function ticTacToe(row, column) {
  if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
  } else {
    console.log('Try again! That place is already taken.');
    return playerTurn;
  }
  checkForWin();
  if (playerTurn == 'X') {
    playerTurn = 'O';
    let setX = document.getElementById('b'+row+column);
    setX.innerHTML = 'X';
    checkForWin();
    
  }
  else if (playerTurn == 'O') {
    playerTurn = 'X';
    let setO = document.getElementById('b'+row+column);
    setO.innerHTML = 'O';
    checkForWin();
  } 
}

/* function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
 */