var stampit = require('stampit');
var menu = require('./modules/menu.js');

// get base stamp (prototype)
var Menu = stampit.compose(menu);

// instantiate main menu
var mainMenu = Menu();
mainMenu.init(document.querySelector('.main'));

// instantiate utility menu
var utilityMenu = Menu();
utilityMenu.init(document.querySelector('.utility'));