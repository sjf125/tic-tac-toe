'use strict';

const state = require('./state.js');

const update = function() {
  $('.score.x').text(String(state.xScore));
  $('.score.o').text(String(state.oScore));
};

const turnIndicate = function() {
  if(!state.turn) {
    $('.player.x').css('border-color', 'yellow');
    $('.player.o').css('border-color', 'gray');
  } else {
    $('.player.o').css('border-color', 'yellow');
    $('.player.x').css('border-color', 'gray');
  }
};

const winIndicate = function () {
  if(state.xWin) {
    $('.player.x').css('border-color', 'yellow');
    $('.player.o').css('border-color', 'gray');
  } else if (state.oWin) {
    $('.player.o').css('border-color', 'yellow');
    $('.player.x').css('border-color', 'gray');
  } else {
    $('.player').css('border-color', 'gray');
  }
};

module.exports = {
  update,
  turnIndicate,
  winIndicate,
};
