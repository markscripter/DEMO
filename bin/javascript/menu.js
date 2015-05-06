'use strict';

(function () {
  var Menu = (function () {
    // singleton instance 
    var instance;

    // private variables;
    var trigger = document.querySelector('.menu-trigger[aria-haspopup="true"]');
    var content = document.querySelector('.menu-content[aria-hidden]');

    function init() {
      return {
        // public
        toggleMenu : function () {
          if (content) {

          }
        }
      };
    }

    return {
      getMenu : function () {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  })();

  document.addEventListener("DOMContentLoaded", function () {
    window.mainMenu = Menu.getMenu();
  });
});