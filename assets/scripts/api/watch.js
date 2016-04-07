'use strict';

const resourceWatcher = function(url, conf) {
  var token = function(conf) {
    return conf && (conf = conf.Authorization) &&
      (conf = typeof conf === 'string' &&
        conf.split('=')) &&
      Array.isArray(conf) && conf[1];
  };
  url += '?token=' + token(conf);
  url += conf.timeout ? '&timeout=' + conf.timeout : '';
  var es = new EventSource(url);
  var close = function() {
    es.close();
  };

const makeHandler = function(handler, close) {
  return function(e) {
    if (close) {
      close();
    }
    return handler(e.data ? e.data : e);
  };
};

const on = function(event, handler) {
  switch (event) {
    case 'connect':
      es.onopen = makeHandler(handler);
      break;
    case 'change':
      es.onmessage = makeHandler(handler);
      break;
    case 'error':
      es.onerror = makeHandler(handler, close);
      break;
    default:
      console.error('Unknown event type:' + event);
      break;
    }
  };
  return {
    close: close,
    on: on
  };
};

let gameWatcher = resourceWatcher('<server>/games/:id/watch', {
      Authorization: 'Token token=<token>'[
      timeout: <timeout>]
});

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

module.exports = {
  resourceWatcher,
  gameWatcher,
};
