'use strict';

const state = require('./state.js');
const score = require('./score.js');
const check = require('./checks.js');
const index = require('./index.js');

let isPlayerO = true;  //  false = X, true = O

const newRemoteGame = function() {
  debugger;
    $('.tokenator').one('click', function() {
      if ($(this).children().text() === '' && isPlayerO === state.turn) {
        !isPlayerO ? $(this).children().text(state.xToken) : $(this).children().text(state.oToken);
        ++state.moves;
        check.checkBoard();
        check.checkWin();
        if(!state.over) {
          state.turn = !state.turn;
          score.turnIndicate();
        }
        index.apiUpdate($(this).children().attr('id'), $(this).children().text());
      }
    });
};

module.exports = newRemoteGame;
