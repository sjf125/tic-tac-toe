'use strict';

const resourceWatcher = require('./resource-watcher.js');
const app = require('./apiurl.js');
const state = require('../state.js');

// Remote Game Handler
const gameWatcher = resourceWatcher(app.api + '/games/' + state.gameID + '/watch', {
      Authorization: 'Token token=' + app.user.token,
});

const watch = function() {
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
};

module.exports = watch;
