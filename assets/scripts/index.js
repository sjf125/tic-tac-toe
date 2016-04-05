'use strict';

const state = require('./state.js');
const score = require('./score.js');
const check = require('./checks.js');

const resetGame = function() {
  state.gameOver = false;
  state.turn = false;
  state.xWin = false;
  state.oWin = false;
  state.moves = 0;
  for (let i = 0; i < state.board.length; i++) {
    state.board[i] = '';
    $(state.boardMap[i]).text('');
  }
};

const newGame = function() {
    $('.tokenator').one('click', function() {
      if ($(this).children().text() === '') {
        !state.turn ? $(this).children().text(state.xToken) : $(this).children().text(state.oToken);
        ++state.moves;
        check.checkBoard();
        check.checkWin();
        if(!state.gameOver) {
          state.turn = !state.turn;
          score.turnIndicate();
        }
      }
    });
};

$('.start').on('click', function() {
  resetGame();
  newGame();
  score.turnIndicate();
  console.log('Game started!');
});

// $('.cell').one('click', function(){
//   $(this).css('background-color', '#CBFAE2');
// });

module.exports = {
  resetGame,
  newGame,
};
