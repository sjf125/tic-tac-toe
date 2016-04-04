'use strict';


const state = require('./state.js');

const check = require('./checks.js');

const resetGame = function() {
  state.turn = false;
  state.xWin = false;
  state.oWin = false;
  state.draw = false;
  for (let i = 0; i < state.board.length; i++) {
    state.board[i] = '';
  }
};

const newGame = function() {
  $('.mark').one('click', function() {
    if ($(this).children().text() === '') {
      state.turn ? $(this).text(state.xToken) : $(this).text(state.oToken);
      check.checkBoard();
      check.checkWin();
      state.turn = !state.turn;
      ++state.moves;
    }
  });
};

module.exports = {
  resetGame,
  newGame,
};
