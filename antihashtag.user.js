// ==UserScript== 
// @name Anti-Hashtag
// @namespace https://github.com/eblumpki
// @description Get rid of hashtags on Facebook. 
// @match https://www.facebook.com/*
// ==/UserScript== 
var hashtagelements = document.getElementsByClassName("_58cl");
[].slice.call(hashtagelements).forEach(function(span){
  span.innerHTML = '';
});
var hashvalueelements = document.getElementsByClassName("_58cm");
[].slice.call(hashvalueelements).forEach(function(span2){
	span2.innerHTML = '';
});
