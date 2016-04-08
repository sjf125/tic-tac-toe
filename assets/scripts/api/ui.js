'use strict';

const app = require('./apiurl.js');
const state = require('../state.js');
const createWatcher = require('./game-watcher.js');

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

// Remote games


const joinGameSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    $('#game-id').text(data.game.id);
  });
  state.gameID = data.game.id;
  state.remote = true;
  createWatcher();
};

const hostGameSuccess = (data) => {
  console.log(data);
  $( document ).ready(function() {
    $('#game-id').text(data.game.id);
  });
  state.gameID = data.game.id;
  state.remote = true;
  createWatcher();
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
  hostGameSuccess,
};
