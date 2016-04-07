'use strict';

const state = require('./state.js');

// const index = require('./index.js');

const score = require('./score.js');

const checkBoard = function () {
  for (let i = 0; i < state.board.length; i++) {
    if($(state.boardMap[i]).text() === state.xToken) {
      state.board[i] = -1;
    }
    else if ($(state.boardMap[i]).text() === state.oToken) {
      state.board[i] = 1;
    }
  }
  return console.log('Checked board');
};

const winner = function(win) {
  if(win === 'X') {
    console.log('Player X has won!');
    state.xWin = true;
    score.endGame('X');
    ++state.xScore;
  }
  else if (win === 'O') {
    console.log('Player O has won!');
    state.oWin = true;
    score.endGame('O');
    ++state.oScore;
  }
  score.update();
};

const winStates = [[0, 1, 2],
                   [3, 4, 5],
                   [6, 7, 8],
                   [0, 3, 6],
                   [1, 4, 7],
                   [2, 5, 8],
                   [0, 4, 8],
                   [2, 4, 6]];

const checkWin = function () {
  for (var i = 0; i < winStates.length; i++) {
    let total = state.board[winStates[i][0]] + state.board[winStates[i][1]] + state.board[winStates[i][2]];
    if (total === -3) {
      console.log('X won!');
      return winner('X');
    }
    else if (total === 3) {
      console.log('O won!');
      return winner('O');
    }
    else if (state.moves === state.board.length) {
      console.log('The game has ended in a draw!');
      score.endGame();
    }
    else {
      console.log('Checked for a winner');
    }
  }
};

module.exports = {
  checkBoard,
  checkWin,
};
