// 'use strict';
//
// const state = require('state.js');
//
// const checkBoard = function () {
//   for (var i = 0; i < state.board.length; i++) {
//     state.board[i] = $(state.boardMap[i]).html();
//   }
//   return console.log('Checked board');
// };
//
//
// const checkWin = function () {
//   const winner = function(cell) {
//     if(cell === state.xToken) {
//       console.log('Player X has won!');
//       state.xWin = true;
//       ++state.xScore;
//     }
//     else if (cell === state.oToken) {
//       console.log('Player O has won!');
//       state.oWin = true;
//       ++state.oScore;
//     }
//   };
//   //row and column win from top left cell
//   if (state.board[0] === state.board[1] && state.board[0] === state.board[2] ||
//       state.board[0] === state.board[3] && state.board[0] === state.board[6]) {
//       return winner(state.board[0]);
//     }
//   //row and column win from bottom right cell
//   else if (state.board[8] === state.board[5] && state.board[8] === state.board[2] ||
//            state.board[8] === state.board[7] && state.board[8] === state.board[6]) {
//       return winner(state.board[8]);
//     }
//   //row, column, and diagonal wins going through center cell
//   else if (state.board[3] === state.board[4] && state.board[4] === state.board[5] ||
//            state.board[1] === state.board[4] && state.board[4] === state.board[7] ||
//            state.board[0] === state.board[4] && state.board[4] === state.board[8] ||
//            state.board[2] === state.board[4] && state.board[4] === state.board[6]) {
//       return winner(state.board[4]);
//     }
//   else if (state.board.some(cell => cell !== '' || state.moves === 9)){
//       console.log('The game has ended in a draw!');
//       state.draw = true;
//     }
//   else {
//     return null;
//   }
// };
//
// module.exports = {
//   checkBoard,
//   checkWin,
// };
