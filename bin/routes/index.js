'use strict';
var appRoot = require('app-root-path');
var PATHS = require(appRoot + '/config.js').paths;
var _ = require('lodash');
var data;


module.exports = function (app) {
  app.route('/')
    .get(function (req, res) {
      data = require(PATHS.mockData);
      res.render('index/index', _.assign(data, require(PATHS.pages + "/index/index.json")));
    });
  app.route('/about')
    .get(function (req, res) {
      data = require(PATHS.mockData);
      res.render('index/index', _.assign(data, require(PATHS.pages + "/index/index.json")));
    });
  app.route('/contact')
    .get(function (req, res) {
      data = require(PATHS.mockData);
      res.render('index/index', _.assign(data, require(PATHS.pages + "/index/index.json")));
    });
    
    
};