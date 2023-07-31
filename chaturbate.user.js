// ==UserScript==
// @name         Chaturbate-online moded
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  chaturbate-online!
// @author       I
// @match        *://*chaturbate-online.ru/*
// @match        *://*chaturbate.com.ru/*
// @match        *://*chaturbate.com/*
// @match        *://*chaturbat.com.ru/*
// @supportURL   https://github.com/DeAlexPesh/tampermonkey/blob/main/chaturbate.user.js
// @downloadURL  https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/chaturbate.user.js
// @updateURL    https://raw.githubusercontent.com/DeAlexPesh/tampermonkey/main/chaturbate.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaturbate-online.ru
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

    document.querySelectorAll(`[href="/male-cams"]`).forEach(m => { m.remove(); });
    document.querySelectorAll(`[href="/trans-cams"]`).forEach(m => { m.remove(); });
    document.querySelectorAll(`[href="https://erovideochat.net/chat-roulete"]`).forEach(m => { m.remove(); });
    
    try {
        document.querySelector('.main-navbar').remove();
        [...document.querySelectorAll('.h5')].forEach(m => { m.remove(); });
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
        document.getElementById('RelatedModelsList').style.padding = '0 30px';
        /*
        setTimeout(() => {
            const v = document.querySelector('video');
            v.volume = 0.5;
            v.muted = false;
        }, 1500);
        */
    } catch(e) {}

    try {
        var isInViewport = (el) => {
            try {
                var rect = el.getBoundingClientRect();
                var html = document.documentElement;
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || html.clientHeight) &&
                    rect.right <= (window.innerWidth || html.clientWidth)
                );
            } catch(e) { return false; }
        }

        var ml = document.getElementById('ModelsList');
        if (typeof ml === 'undefined') {
            ml = document.getElementById('RelatedModelsList');
        }
        var mSorting = () => {
            var ms = [...ml.querySelectorAll(`div[id^="Model_id_"]`)];
            ms.sort(function (m1, m2) {
                return (Number(m1.querySelector('.viewing-users').innerText) > Number(m2.querySelector('.viewing-users').innerText)) ? -1 : 1;
            });
            ms.forEach(m => { m.remove(); });
            var cf = ml.querySelector('.clearfix');
            ms.forEach(m => { ml.insertBefore(m, cf); });
        }
        window.addEventListener('scroll', (e) => {
            try {
                var nx = ml.querySelector('.load-more:last-child');
                if (isInViewport(nx)) {
                    nx.click();
                    nx.classList.remove('load-more');
                    mSorting();
                }
            } catch(e) {}
        });
        mSorting();
    } catch(e) {}
})();
