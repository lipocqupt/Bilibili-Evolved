!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/comments/copy-link"]=e():t["utils/comments/copy-link"]=e()}(self,(function(){return function(){"use strict";var t,e,n={169:function(t){t.exports=coreApis.componentApis.utils.commentApis}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&n;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){c[t]=function(){return n[t]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return n}});var t=coreApis.utils,e=coreApis.utils.urls;const n={name:"copyCommentsLink",displayName:"复制评论链接",description:{"zh-CN":"开启后, 可在每条评论的菜单中选择复制链接."},entry:async()=>{const{forEachCommentItem:n,addMenuItem:o}=await Promise.resolve().then(r.t.bind(r,169,23));n({added:n=>{const r=n=>{n.forEach((n=>{o(n,{className:"copy-link",text:"复制链接",action:async()=>{const o=(n=>{if(document.URL.match(/\/\/t\.bilibili\.com\/(\d+)/))return"";if(e.feedsUrls.every((e=>!(0,t.matchUrlPattern)(e))))return"";let o=n;for(;null!==o&&o!==document.body;){if(o.hasAttribute("data-did"))return`https://t.bilibili.com/${o.getAttribute("data-did")}`;o=o.parentElement}return""})(n.element)||document.URL;await navigator.clipboard.writeText(`${o}#reply${n.id}`)}})}))};r([n,...n.replies]),n.onRepliesUpdate=t=>r(t)}})},tags:[componentsTags.utils],commitHash:"16157b4de819f235d2ac1af2618408dccc3c3779"}}(),i=i.component}()}));