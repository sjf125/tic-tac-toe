'use strict';

const state = require('./state.js');

const update = function() {
  $('#x-score').text(String(state.xScore));
  $('#o-score').text(String(state.oScore));
};

const turnIndicate = function() {
  if(!state.turn) {
    $('.player.x').css('border-color', 'blue');
    $('.player.o').css('border-color', 'gray');
  } else if (state.turn) {
    $('.player.o').css('border-color', 'blue');
    $('.player.x').css('border-color', 'gray');
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
