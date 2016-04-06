'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
const app = require('./apiurl.js');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    console.log('Click!');
    console.log(app.api);
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    console.log('Click!');
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('submit', function (event) {
    console.log('Click!');
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    console.log('Click!');
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
};

module.exports = {
  addHandlers,
};
