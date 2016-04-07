'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
const resourceWatcher = require('./watch.js');
const app = require('./apiurl.js');

const addHandlers = () => {
  $( document ).ready(function() {
    $('.loggedout-hide').hide();
  });
  // Login handers
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
  // Game Handlers
  $('#create-game').on('click', function (event) {
    event.preventDefault();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
  });
  $('#find-game').on('submit', function (event) {
    event.preventDefault();
    let id = getFormFields(this);
    console.log(id.game);
    event.preventDefault();
    authApi.findGame(authUi.findGameSuccess, authUi.failure, id.game);
  });
  $('#find-games').on('submit', function (event) {
    let val = getFormFields(this);
    console.log(val.games);
    event.preventDefault();
    val.games !== '' ?
    authApi.findGames(authUi.findGamesSuccess, authUi.failure, '?over=' + val.games) :
    authApi.findGames(authUi.findGamesSuccess, authUi.failure, '/');
  });
  // $('#update-game').on('submit', function (event) {
  //   let data = //getFormFields(this);
  //   event.preventDefault();
  //   authApi.updateGame(authUi.success, authUi.failure, data);
  // });
};

const autoUpdateGame = function(data) {
  authApi.updateGame(authUi.success, authUi.failure, data);
};


// Remote Game Handler
const gameWatcher = resourceWatcher(app.api + '/games/:id/watch', {
      Authorization: 'Token token=<token>'
});

gameWatcher.on('change', function (data) {
      if (data.timeout) { //not an error
        gameWatcher.close();
        return console.warn(data.timeout);
      } else if (data.game && data.game.cell) {
        let game = data.game;
        let cell = game.cell;
        $('#watch-index').val(cell.index);
        $('#watch-value').val(cell.value);
      } else {
        console.log(data);
      }

    });

    gameWatcher.on('error', function (e) {
      console.error('an error has occured with the stream', e);
    });

module.exports = {
  addHandlers,
  autoUpdateGame,
  gameWatcher,
};
