'use strict';

let gameID = null;

let turn = false;  //toggles between false (player X's turn) and true (player O's turn)
let moves = 0;  // counts total number of moves taken in the game (by both players)
let over = false;  // game not over = false, game over = true
let xWin = false;
let oWin = false;
let xToken = 'X';
let oToken = 'O';
let xScore = 0;
let oScore = 0;

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const boardMap = ['#a1', '#a2', '#a3',
                  '#b1', '#b2', '#b3',
                  '#c1', '#c2', '#c3'];

module.exports = {
  turn,
  moves,
  xWin,
  oWin,
  xToken,
  oToken,
  xScore,
  oScore,
  board,
  boardMap,
  over,
  gameID,
};
