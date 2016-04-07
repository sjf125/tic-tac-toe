'use strict';

const state = require('./state.js');

const update = function() {
  $('#x-score').text(String(state.xScore));
  $('#o-score').text(String(state.oScore));
};

const turnIndicate = function() {
  //  X's turn
  if(!state.turn) {
    $('#x-scoreboard').removeClass('inactive winner').addClass('active');
    $('#o-scoreboard').removeClass('active winner').addClass('inactive');
    $('#turn-indicator').removeClass('arrow-box arrow-box-right').addClass('arrow-box-left');
    $('#message').text('Turn: player X');
  //  O's Turn
  } else if (state.turn) {
    $('#o-scoreboard').removeClass('inactive winner').addClass('active');
    $('#x-scoreboard').removeClass('active winner').addClass('inactive');
    $('#turn-indicator').removeClass('arrow-box, arrow-box-left').addClass('arrow-box-right');
    $('#message').text('Turn: player O');
  }
};

const endGame = function(result) {
  $('.tokenator').off('click');
  //  X wins
  if(result === 'X') {
    $('#x-scoreboard').removeClass('active inactive').addClass('winner');
    $('#message').text('Player X won!');
  }
  //  O wins
  else if (result === 'O') {
    $('#o-scoreboard').removeClass('active inactive').addClass('winner');
    $('#message').text('Player O won!');
  // Draw
  } else {
    $('.scoreboard').removeClass('active inactive winner').addClass('inactive');
    $('#message').text('The game has ended in a draw!');
  }
  state.over = true;
};

module.exports = {
  update,
  turnIndicate,
  endGame,
};
