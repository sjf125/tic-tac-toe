'use strict';

const app = require('./apiurl.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $( document ).ready(function() {
    $('#sign-in, #sign-up-btn').hide();
    $('#sign-in-success').show().fadeOut(1000);
    $('#sign-out, #change-pass-btn').delay(1000).show();
  });

};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $( document ).ready(function() {
    $('#sign-out, #change-pass-btn').fadeOut(500);
    $('#sign-in').delay(500).fadeIn(500);
  });
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
};
