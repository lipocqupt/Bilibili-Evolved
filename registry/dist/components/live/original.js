!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/original"]=t():e["live/original"]=t()}(self,(function(){return function(){"use strict";var e={663:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.href,tabindex:"-1"}},[n("DefaultWidget",{attrs:{name:"返回原版直播间",icon:"mdi-arrow-left-circle-outline"}})],1)};o._withStripped=!0;var i=coreApis.ui;var r=function(e,t,n,o,i,r,a,c){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=s):i&&(s=c?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),s)if(l.functional){l._injectStyles=s;var d=l.render;l.render=function(e,t){return s.call(t),d(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:l}}(Vue.extend({components:{DefaultWidget:i.DefaultWidget},data(){const e=document.URL.match(/^https:\/\/live\.bilibili\.com\/([\d]+)/);return e?{href:`https://live.bilibili.com/blanc/${e[1]}`}:{href:document.URL}}}),o,[],!1,null,null,null);r.options.__file="registry/lib/components/live/original/Widget.vue";var a=r.exports}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.d(o,{component:function(){return i}});var e=coreApis.componentApis.define,t=coreApis.utils;const i=(0,e.defineComponentMetadata)({name:"originalLiveroom",displayName:"返回原版直播间",description:"在直播间中提供返回原版直播间的按钮, 原版直播间将无视活动皮肤, 强制使用标准的直播页面.",tags:[componentsTags.live],entry:none,urlInclude:[/^https:\/\/live\.bilibili\.com\/[\d]+/],widget:{component:()=>Promise.resolve().then(n.bind(n,663)).then((e=>e.default)),condition:()=>(0,t.matchUrlPattern)(/^https:\/\/live\.bilibili\.com\/([\d]+)/)},commitHash:"478acfc8202577459a16c9e620165e27f4bbd072",coreVersion:"2.4.0"})}(),o=o.component}()}));