!function(n,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["live/side-bar"]=r():n["live/side-bar"]=r()}(self,(function(){return function(){var n,r,t={510:function(n,r,t){var e=t(645)((function(n){return n[1]}));e.push([n.id,'.side-bar-cntr {\n  transition: 0.24s ease-out !important;\n  overflow: visible !important;\n  transform: translateZ(0) translateX(100%) !important;\n}\n.side-bar-cntr:hover {\n  transform: translateZ(0) !important;\n}\n.side-bar-cntr::after {\n  right: calc(100% + 4px);\n  transform: translateY(-50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  border: 4px solid #aaa;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\nbody.dark .side-bar-cntr::after {\n  border: 4px solid #eee;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.side-bar-cntr::before {\n  right: calc(100% - 8px);\n  transform: translateY(-50%);\n  width: 32px;\n  height: 48px;\n  border-radius: 8px 0 0 8px;\n  background-color: #fff;\n  border: 1px solid #e9eaec;\n}\nbody.dark .side-bar-cntr::before {\n  background-color: #222;\n  border-color: transparent;\n}\n.side-bar-cntr::before, .side-bar-cntr::after {\n  content: "";\n  transition: 0.24s ease-out;\n  cursor: pointer;\n  position: fixed;\n  top: 50%;\n}\n.side-bar-cntr:hover::after, .side-bar-cntr:hover::before {\n  opacity: 0;\n}',""]),n.exports=e},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
r.i=function(n,t,e){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},331:function(n,r,t){var e=t(510);e&&e.__esModule&&(e=e.default),n.exports="string"==typeof e?e:e.toString()}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}r=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var i=Object.create(null);o.r(i);var a={};n=n||[null,r({}),r([]),r(r)];for(var c=2&e&&t;"object"==typeof c&&!~n.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(n){a[n]=function(){return t[n]}}));return a.default=function(){return t},o.d(i,a),i},o.d=function(n,r){for(var t in r)o.o(r,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return t}});var n=coreApis.componentApis.define,r=coreApis.utils.urls;const t=(0,n.defineComponentMetadata)({name:"collapseLiveSideBar",entry:none,instantStyles:[{name:"collapseLiveSideBar",style:()=>Promise.resolve().then(o.t.bind(o,331,23))}],displayName:"自动收起直播侧栏",description:'自动收起直播间右边偏下的侧栏. (上面有个 "关注" 的面板)',tags:[componentsTags.live,componentsTags.style],urlInclude:r.liveUrls,commitHash:"478acfc8202577459a16c9e620165e27f4bbd072",coreVersion:"2.4.0"})}(),i=i.component}()}));