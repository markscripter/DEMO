'use strict';
var inst;

export var menu = {
  trigger : document.querySelector('.menu-trigger[aria-haspopup="true"]'),
  content : document.querySelector('.menu-content[aria-hidden]'), 
  init(el) {
    this.el = el;
    return {
      openMenu() {
        if(this.content.hasAttribute('aria-hidden')){
          let isHidden = this.content.attributes['aria-hidden'].textContent;
          if(isHidden === "true") {
            this.content.attributes['aria-hidden'].textContent = false;
          }
        }
      },
      closeMenu(){
        if(this.content.hasAttribute('aria-hidden')){
          let isHidden = this.content.attributes['aria-hidden'].textContent;
          if(isHidden === "false") {
            this.content.attributes['aria-hidden'].textContent = true;
          }
        }
      },
    }
  }
}
