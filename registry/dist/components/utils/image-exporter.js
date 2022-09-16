!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/image-exporter"]=t():e["utils/image-exporter"]=t()}(self,(function(){return function(){var e,t,n={71:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{attrs:{name:"导出图片",icon:"mdi-export",disabled:e.busy},on:{click:function(t){return e.exportImages()}}})};o._withStripped=!0;var r=n(375),i=n(444),s=coreApis.settings,a=n(391),c=n(605),u=coreApis.utils.log,l=n(674),f=coreApis.ui;var d=function(e,t,n,o,r,i,s,a){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:u}}(Vue.extend({components:{DefaultWidget:f.DefaultWidget},data:()=>({busy:!1}),methods:{async exportImages(){const{columnFormat:e}=(0,s.getComponentSettings)("imageExporter").options,t=a.Toast.info("下载中...","导出图片");this.busy=!0;try{const n=[],o=dq(".banner-image .card-image__image"),s=(0,c.retrieveImageUrl)(o);s&&(n.push({...s,name:`${(0,l.formatTitle)(e,!1,{n:"1"})}${s.extension}`}),console.log(o,s,n));if(dqa('.article-content .img-box img:not([class*="cut-off-"])').forEach((t=>{const o=(0,c.retrieveImageUrl)(t);o&&n.push({...o,name:`${(0,l.formatTitle)(e,!1,{n:(n.length+1).toString()})}${o.extension}`})})),0===n.length)return void a.Toast.info("此页面没有检测到任何可导出图片.","图片导出");let u=0;const f=await Promise.all(n.map((async e=>{let{url:o}=e;const i=await(0,r.getBlob)(o);return u++,t.message=`下载中... (${u}/${n.length})`,i}))),d=new i.DownloadPackage;f.forEach(((e,t)=>d.add(n[t].name,e))),await d.emit(`${(0,l.formatTitle)(e,!1,{n:""})}.zip`)}catch(e){(0,u.logError)(e)}finally{this.busy=!1,t.close()}}}}),o,[],!1,null,null,null);d.options.__file="registry/lib/components/utils/image-exporter/Widget.vue";var p=d.exports},79:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=79,e.exports=t},87:function(e){"use strict";e.exports="可以批量导出某个地方的图片, 目前支持动态和专栏.\n\n动态文件名变量:\n- `user`: 用户名\n- `originalUser`: 被转发用户名, 如果不是转发类型的动态则等于 `user`\n- `id`: 动态 ID\n- `n`: 第 n 张图\n\n专栏文件名变量:\n- `title`: 专栏标题\n- `n`: 第 n 张图"},375:function(e){"use strict";e.exports=coreApis.ajax},444:function(e){"use strict";e.exports=coreApis.download},391:function(e){"use strict";e.exports=coreApis.toast},674:function(e){"use strict";e.exports=coreApis.utils.title},605:function(e){"use strict";e.exports=coreApis.utils}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return n[e]}}));return s.default=function(){return n},r.d(i,s),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return u}});var e=r(605),t=coreApis.utils.urls,n=coreApis.componentApis.feeds.api,o=r(375),s=r(444),a=r(391),c=r(674);const u={name:"imageExporter",displayName:"图片批量导出",tags:[componentsTags.feeds,componentsTags.utils],entry:async r=>{await(async r=>{let{settings:{options:i}}=r;if(!t.feedsUrls.some((t=>(0,e.matchUrlPattern)(t))))return;(0,n.forEachFeedsCard)({added:t=>{(0,n.addMenuItem)(t,{className:"image-export",text:"导出图片",action:async()=>{const n=[];if(dqa(t.element,".main-content .img-content, .bili-album__preview__picture__img").forEach((t=>{const o=(0,e.retrieveImageUrl)(t);o&&!n.some((e=>{let{url:t}=e;return t===o.url}))&&n.push(o)})),0===n.length)return void a.Toast.info("此条动态没有检测到任何图片.","导出图片");const r=a.Toast.info("下载中...","导出图片");let u=0;const l=await Promise.all(n.map((async e=>{let{url:t}=e;const i=await(0,o.getBlob)(t);return u++,r.message=`下载中... (${u}/${n.length})`,i}))),f=new s.DownloadPackage,{feedFormat:d}=i;l.forEach(((e,o)=>{const r={user:t.username,id:t.id,originalUser:t.repostUsername??t.username,n:(o+1).toString()};f.add(`${(0,c.formatTitle)(d,!1,r)}${n[o].extension}`,e)})),r.close();const p={user:t.username,id:t.id,originalUser:t.repostUsername??t.username,n:""};await f.emit(`${(0,c.formatTitle)(d,!1,p)}.zip`)}})}})})(r)},widget:{condition:()=>t.columnUrls.some((t=>(0,e.matchUrlPattern)(t))),component:()=>Promise.resolve().then(r.bind(r,71)).then((e=>e.default))},urlInclude:[...t.feedsUrls,...t.columnUrls],options:{columnFormat:{defaultValue:"[title][ - n]",displayName:"专栏图片命名格式"},feedFormat:{defaultValue:"[user][ - id][ - n]",displayName:"动态图片命名格式"}},commitHash:"478acfc8202577459a16c9e620165e27f4bbd072",coreVersion:"2.4.0",description:(()=>{const e=r(79);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,87,17)).then((e=>e.default))}})()}}(),i=i.component}()}));