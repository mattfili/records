'use strict';

var logger  = require('mm-node-logger')(module);
var pkg     = require('./package.json');
var config  = require(__dirname+ '/src/config/config');
var express = require('./src/config/express');
var mongodb = require('./src/config/mongoose');

mongodb(function startServer() {
    var app = express.init();

    app.listen(config.server.port, function () {
        logger.info("Home of the internet's hottest hip-hop and r&b");
    });
});

