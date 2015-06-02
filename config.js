var appRoot = require('app-root-path');

module.exports = {
  paths : {
    layout : appRoot + "/bin/layouts/",
    pages : appRoot + "/bin/pages/",
    less : appRoot + "/bin/less/",
    svg : appRoot + "/bin/svg/",
    routes : appRoot + "/bin/routes/",
    data : appRoot + "/bin/data/",
    pub : appRoot + "/public/",
    js : appRoot + "/bin/javascript/",
    images : appRoot + "/bin/images/",
    npm : appRoot + "node_modules/",
    bowerFiles : [
      appRoot + "/node_modules/angular/angular.min.js",
      appRoot + "/node_modules/lodash/index.js",
      appRoot + "/node_modules/stampit/dist/stampit.min.js",
    ],
    nodeModules : appRoot + "/node_modules/",
    mockData : appRoot + "/bin/mockdata.json"
  }
};