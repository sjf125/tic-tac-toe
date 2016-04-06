'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
// const app = require('./apiurl.js');

const addHandlers = () => {
  $( document ).ready(function() {
    $('#sign-out, #change-pass-btn, #sign-in-success').hide();
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
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
  // Game Handlers
  $('#create-game').on('submit', function (event) {
    event.preventDefault();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
  });
  $('#find-game').on('submit', function (event) {
    event.preventDefault();
    authApi.findGame(authUi.success, authUi.failure/*/, id/*/);
  });
  $('#update-game').on('submit', function (event) {
    let data = //getFormFields(this);
    event.preventDefault();
    authApi.updateGame(authUi.success, authUi.failure, data);
  });
};

module.exports = {
  addHandlers,
};
