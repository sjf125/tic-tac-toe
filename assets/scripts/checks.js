'use strict';

const state = require('./state.js');

const index = require('./index.js');

const score = require('./score.js');

const checkBoard = function () {
  for (let i = 0; i < state.board.length; i++) {
    state.board[i] = $(state.boardMap[i]).text();
  }
  return console.log('Checked board');
};

const winner = function(cell) {
  if(cell === state.xToken) {
    console.log('Player X has won!');
    state.xWin = true;
    ++state.xScore;
    $('.tokenator').off('click');
    score.winIndicate();
  }
  else if (cell === state.oToken) {
    console.log('Player O has won!');
    state.oWin = true;
    ++state.oScore;
    $('.tokenator').off('click');
    score.winIndicate();
  }
  score.update();
};

const checkWin = function () {
  //row and column win from top left cell
  if (state.board[0] === state.board[1] && state.board[0] === state.board[2] ||
      state.board[0] === state.board[3] && state.board[0] === state.board[6]) {
      return winner(state.board[0]);
    }
  //row and column win from bottom right cell
  else if (state.board[8] === state.board[5] && state.board[8] === state.board[2] ||
           state.board[8] === state.board[7] && state.board[8] === state.board[6]) {
      return winner(state.board[8]);
    }
  //row, column, and diagonal wins going through center cell
  else if (state.board[3] === state.board[4] && state.board[4] === state.board[5] ||
           state.board[1] === state.board[4] && state.board[4] === state.board[7] ||
           state.board[0] === state.board[4] && state.board[4] === state.board[8] ||
           state.board[2] === state.board[4] && state.board[4] === state.board[6]) {
      return winner(state.board[4]);
    }
  else if (state.moves === state.board.length){
      console.log('The game has ended in a draw!');
    }
  else {
    console.log('Checked for a winner');
    score.winIndicate();
    return null;
  }
};

module.exports = {
  checkBoard,
  checkWin,
};
