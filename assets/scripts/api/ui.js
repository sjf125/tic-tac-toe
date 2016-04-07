'use strict';

const app = require('./apiurl.js');
const state = require('../state.js');
//const gameWatcher = require('./game-watcher.js')
const resourceWatcher = require('./resource-watcher.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $( document ).ready(function() {
    $('.loggedin-hide').fadeOut(500);
    $('.loggedout-hide').delay(500).fadeIn(500);
  });
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $( document ).ready(function() {
    $('.loggedout-hide').fadeOut(500);
    $('.loggedin-hide').delay(500).fadeIn(500);
  });
};

const createGameSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    $('#game-id').text(data.game.id);
  });
  state.gameID = data.game.id;
};

const findGameSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    $('#find-games-output').text(JSON.stringify(data.game));
  });
};

const findGamesSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    let result = '';
    for (var i = 0; i < data.games.length; i++) {
      result += JSON.stringify(data.games[i], null, "\t");
    }
    $('#find-games-output').text(result);
  });
};

const joinGameSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    $('#game-id').text(data.game.id);
  });
  state.gameID = data.game.id;
  console.log('grait suckseis');
  // const gameWatcher = resourceWatcher(app.api + '/games/' + state.gameID + '/watch/', {
  //       Authorization: 'Token token=' + app.user.token,
  // });
  //
  // gameWatcher.on('change', function (data) {
  //     console.log('Game Watcher is running!');
  //       if (data.timeout) { //not an error
  //         gameWatcher.close();
  //         return console.warn(data.timeout);
  //       } else if (data.game && data.game.cell) {
  //         let game = data.game;
  //         let cell = game.cell;
  //         $('#watch-index').val(cell.index);
  //         $('#watch-value').val(cell.value);
  //       } else {
  //         console.log(data);
  //       }
  //
  //     });
  //
  //     gameWatcher.on('error', function (e) {
  //       console.error('an error has occured with the stream', e);
  //     });
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  findGameSuccess,
  findGamesSuccess,
  joinGameSuccess,
  //hostGameSuccess,
};
