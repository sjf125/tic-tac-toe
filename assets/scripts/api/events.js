'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
// const resourceWatcher = require('./resource-watcher.js');
//  const app = require('./apiurl.js');
// const state = require('../state.js');

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
  $('#join-game').on('submit', function (event) {
    event.preventDefault();
    let id = getFormFields(this);
    console.log('join game: ' + id.game);
    authApi.joinGame(authUi.joinGameSuccess, authUi.failure, id.game);
  });

//   $('#host-game').on('click', function (event) {
//     event.preventDefault();
//     console.log('Event fired!');
//     authApi.createGame(authUi.hostGameSuccess, authUi.failure);
//   });
};

const autoUpdateGame = function(data) {
  authApi.updateGame(authUi.success, authUi.failure, data);
};

module.exports = {
  addHandlers,
  autoUpdateGame,
};
