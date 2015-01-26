/*---------------------------------------------------------------
  :: DevnullAdapter
  -> adapter

  This adapter is for... `I don't know what` only!
---------------------------------------------------------------*/

var adapter = module.exports = require('sails-memory');

adapter.identity = 'sails-devnull';

adapter.create = function(conn, coll, values, cb) {

  // Well, it seems I'm kind enough to pass values to the callback.
  setTimeout(function() {
    cb(null, values);
  }, 0);
};
