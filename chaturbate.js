// ==UserScript==
// @name         Chaturbate-online moded
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  chaturbate-online!
// @author       I
// @match        *://*chaturbate-online.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaturbate-online.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById('bChat').parentNode.remove();
    var plr = document.querySelector('.videoContainer')
    plr.parentNode.className = 'col-12';
    plr.style.height = 'auto';
    plr.style.maxHeight = '100vh';
    // document.getElementById('MainContainer').style.padding = '0';
    [...document.querySelectorAll('.col-12')].forEach(m => {
        m.style.padding = '0'
    });
    plr.scrollIntoView({
      behavior: 'smooth'
    });
})();
