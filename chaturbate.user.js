// ==UserScript==
// @name         Chaturbate-online moded
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  chaturbate-online!
// @author       I
// @match        *://*chaturbate-online.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaturbate-online.ru
// @downloadURL https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/chaturbate.user.js
// @updateURL https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/chaturbate.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /*
    var hdr = document.querySelector('header');
    hdr.style.position = 'fixed';
    hdr.style.zIndex = '999';
    hdr.style.left = '0';
    hdr.style.right = '0';
    hdr.style.opacity = '0.5';
    */
    document.querySelector('.main-navbar').remove();
    [...document.querySelectorAll('.h5')].forEach(m => {m.remove();});
    document.getElementById('bChat').parentNode.remove();
    var plr = document.querySelector('.videoContainer')
    plr.parentNode.parentNode.setAttribute('style', 'margin:0 !important');
    plr.parentNode.className = 'col-12';
    plr.style.height = '100vh';
    plr.style.maxHeight = '100%';
    var mn = document.getElementById('MainContainer');
    mn.setAttribute('style', 'padding:0 !important;margin:0 !important');
    [...document.querySelectorAll('.col-12')].forEach(m => {
        m.setAttribute('style', 'padding:0 !important');
    });
    plr.scrollIntoView({
      behavior: 'instant'
    });
    const v = document.querySelector('video');
    v.volume = 0.5;
    v.muted = false;
})();
