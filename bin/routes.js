'use strict';
var _ = require('lodash');
var appRoot = require('app-root-path');
var PATHS = require(appRoot + '/config.js').paths;
var glob = require('glob');


module.exports = function (app) {
  glob(PATHS.routes + '**.js', function (err, files) {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach(function (file) {
      require(file)(app);
    });
  });
};