'use strict';

const app = require('./apiurl.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  // if (!api.user) bad;
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const createGame = (success, failure) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/games/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  }).done(success)
  .fail(failure);
};

const findGame = (success, failure, id) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const updateGame = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + app.games.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
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
  createGame,
  findGame,
  updateGame,
};
