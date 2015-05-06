'use strict';
var appRoot = require('app-root-path');
var PATHS = require(appRoot + '/config.js').paths;

var beersJSON = require(PATHS.data + "beers.json");

module.exports = function (app) {
  app.route('/api/beers/')
    .get(function (req, res) {
      res.json(beersJSON);
    });
};