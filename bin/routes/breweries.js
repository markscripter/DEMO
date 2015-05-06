'use strict';
var appRoot = require('app-root-path');
var PATHS = require(appRoot + '/config.js').paths;

var breweriesJSON = require(PATHS.data + "breweries.json");

module.exports = function (app) {
  app.route('/api/breweries/')
    .get(function (req, res) {
      res.json(breweriesJSON);
    });
};