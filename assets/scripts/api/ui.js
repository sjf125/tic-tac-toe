'use strict';

const app = require('./apiurl.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
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
