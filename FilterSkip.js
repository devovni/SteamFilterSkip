// ==UserScript==
//
// @name         Steam Filter Skip
// @namespace    Steam
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://steamcommunity.com/linkfilter/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.location = decodeURIComponent(window.location.toString().split('u=')[1])
