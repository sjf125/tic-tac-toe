'use strict';

const api = require('../apiurl.js');

const signInSuccess = (data) => {
  api.user = data.user;
  console.log(api);
};

const signOutSuccess = () => {
  api.user = null;
  console.log(api);
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
