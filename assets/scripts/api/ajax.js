'use strict';

const api = require('./apiurl.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: api.url + '/sign-up',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: api.url + '/sign-in',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  // if (!app.user) bad;
  $.ajax({
    method: 'DELETE',
    url: api.url + '/sign-out/' + api.user.id,
    headers: {
      Authorization: 'Token token=' + api.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: api.url + '/change-password/' + api.user.id,
    headers: {
      Authorization: 'Token token=' + api.user.token,
    },
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
