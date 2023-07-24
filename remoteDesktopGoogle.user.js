// ==UserScript==
// @name         RemoteDesktop.google.com moded
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remotedesktop.google.com!
// @author       I
// @match        *://*remotedesktop.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=remotedesktop.google.com
// @downloadURL https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/remoteDesktopGoogle.user.js
// @updateURL https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/remoteDesktopGoogle.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    [...document.querySelector('.GWYOGe').children].forEach(c => {
      c.style.padding = '6px';
    });
})();
