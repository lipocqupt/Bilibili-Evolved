!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/download-audio"]=t():e["utils/download-audio"]=t()}(self,(function(){return function(){"use strict";var e,t,o={917:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{disabled:e.disabled||e.downloading,name:e.progress||"下载音频",icon:"mdi-download"},on:{click:function(t){return e.download()}}})};n._withStripped=!0;var r=coreApis.spinQuery,i=coreApis.observer,s=coreApis.download,d=coreApis.ui;function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class l{constructor(){a(this,"progress",null),a(this,"sid",void 0)}async getDownloadUrl(){const{getJsonWithCredentials:e}=await Promise.resolve().then(o.t.bind(o,663,23)),{Toast:t}=await Promise.resolve().then(o.t.bind(o,141,23)),n=`https://www.bilibili.com/audio/music-service-c/web/url?sid=${this.sid}&privilege=2&quality=2`,r=await e(n);return 0!==r.code?(t.error("获取下载链接失败, 请确保当前账号有下载权限.","下载音频",1e4),null):r.data.cdns.shift()}async download(){const e=await this.getDownloadUrl();return new Promise(((t,o)=>{const n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.addEventListener("load",(()=>t(n.response))),n.addEventListener("error",(()=>o(n.status))),n.addEventListener("progress",(e=>this.progress?.(100*e.loaded/e.total))),n.send()}))}}var c=function(e,t,o,n,r,i,s,d){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):r&&(a=d?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(l.functional){l._injectStyles=a;var c=l.render;l.render=function(e,t){return a.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:d.DefaultWidget},data:()=>({progress:"",disabled:!0,downloader:new l,downloading:!1}),async mounted(){const e=await(0,r.select)("#app"),t=this.downloader;t.progress=e=>{this.progress=`${Math.round(e)}%`},(0,i.childList)(e,(()=>{const e=document.URL.match(/bilibili\.com\/audio\/au([\d]+)/);e&&e[1]?(this.disabled=!1,[,t.sid]=e):this.disabled=!0}))},methods:{async download(){if(!this.downloading){this.downloading=!0;try{const e=this.downloader;if(null===e.sid)return;const t=await e.download(),o=`${(()=>{const e=document.querySelector(".song-title");return e?e.getAttribute("title"):"神秘音频"})()}.mp3`;this.progress="",await s.DownloadPackage.single(o,t)}finally{this.downloading=!1}}}}}),n,[],!1,null,null,null);c.options.__file="registry/lib/components/utils/download-audio/DownloadAudio.vue";var u=c.exports},663:function(e){e.exports=coreApis.ajax},141:function(e){e.exports=coreApis.toast}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var d=2&n&&o;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(e){s[e]=function(){return o[e]}}));return s.default=function(){return o},r.d(i,s),i},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){r.d(i,{component:function(){return e}});const e={name:"downloadAudio",displayName:"下载音频",entry:none,tags:[componentsTags.utils],description:{"zh-CN":"\n开启音频下载支持, 音频页面中可以在功能面板中下载当前音频.\n\n> 需要进入音频的详细信息页面才能下载, 在其他页面中此按钮将不可点击.\n    ".trim()},widget:{component:()=>Promise.resolve().then(r.bind(r,917)).then((e=>e.default))},urlInclude:["//www.bilibili.com/audio/"],commitHash:"16157b4de819f235d2ac1af2618408dccc3c3779"}}(),i=i.component}()}));