'use strict';

const state = require('./state.js');

const update = function() {
  $('#x-score').text(String(state.xScore));
  $('#o-score').text(String(state.oScore));
};

const turnIndicate = function() {
  //  X's turn
  if(!state.turn) {
    $('#x-scoreboard').removeClass('inactive').addClass('active');
    $('#o-scoreboard').removeClass('active').addClass('inactive');
    $('#turn-indicator').removeClass('arrow-box, arrow-box-right').addClass('arrow-box-left');
  //  O's Turn
  } else if (state.turn) {
    $('#o-scoreboard').removeClass('inactive').addClass('active');
    $('#x-scoreboard').removeClass('active').addClass('inactive');
    $('#turn-indicator').removeClass('arrow-box, arrow-box-left').addClass('arrow-box-right');
  }
};

const endGame = function(result) {
  $('.tokenator').off('click');
  if(result === 'X') {
    $('.player.x').css('border-color', 'yellow');
    $('.player.o').css('border-color', 'gray');
  }
  else if (result === 'O') {
    $('.player.o').css('border-color', 'yellow');
    $('.player.x').css('border-color', 'gray');
  } else {
    $('.player').css('border-color', 'gray');
  }
  state.over = true;
};

module.exports = {
  update,
  turnIndicate,
  endGame,
};
