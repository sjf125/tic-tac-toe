'use strict';


const state = require('./state.js');

const check = require('./checks.js');

const resetGame = function() {
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
  // console.log(state.xWin + ' ' + state.oWin);
  // if (!state.xWin || !state.oWin) {
    $('.tokenator').one('click', function() {
      if ($(this).children().text() === '') {
        state.turn ? $(this).children().text(state.oToken) : $(this).children().text(state.xToken);
        ++state.moves;
        check.checkBoard();
        check.checkWin();
        state.turn = !state.turn;
        console.log('Moves taken: ' + state.moves);
      }
    });
  // } else {
  //   return console.log('A player has won, reset the game!');
  // }
};

const gameEnd = function() {
  $('.tokenator').off('click');
  console.log("The game has ended - reset the game!");
};

$('.start').on('click', function() {
  resetGame();
  newGame();
  console.log('Game started!');
});

// $('.cell').one('click', function(){
//   $(this).css('background-color', '#CBFAE2');
// });

module.exports = {
  resetGame,
  newGame,
  gameEnd,
};
