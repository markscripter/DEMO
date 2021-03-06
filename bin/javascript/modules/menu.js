'use strict';
var stampit = require('stampit');

module.exports = stampit().enclose(function () {
  let el;
  let trigger;
  let content;
  let isHidden;

  this.toggelMenu = function toggelMenu(e) {
    if (content.hasAttribute('aria-hidden')) {
      isHidden = content.attributes['aria-hidden'].textContent;
      if (isHidden === "true") {
        content.attributes['aria-hidden'].textContent = false;
        e.preventDefault();

        // setup binding to close menu when anything but menu is clicked
        document.querySelector('body').addEventListener('click', (e)=> {
          if (!e.defaultPrevented) {
            content.attributes['aria-hidden'].textContent = true;
          }
        });
      } else {
        content.attributes['aria-hidden'].textContent = true;
      }
    }
  }

  this.bindContent = function bindContent(el) {
    if (!el) {
      return;
    }
    trigger = el.querySelector('.menu-trigger');
    content = el.querySelector('.menu-content');

    trigger.addEventListener('click', this.toggelMenu);
  }

  return stampit.mixIn(this, {
    init : function (elem) {
      if (!elem) {
        return;
      }
      el = elem;
      this.bindContent(el);
    }
  });
});