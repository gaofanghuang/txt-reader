(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={notfound:0,index:0},a={notfound:0,index:0},i=[];function s(e){return c.p+"static/js/"+({"bookshelf~reader":"bookshelf~reader",bookshelf:"bookshelf",reader:"reader",set:"set"}[e]||e)+"."+{"bookshelf~reader":"e02d5bf2",bookshelf:"8ed17eb6",reader:"4fc5671d",set:"3417d577"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={bookshelf:1,reader:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="static/css/"+({"bookshelf~reader":"bookshelf~reader",bookshelf:"bookshelf",reader:"reader",set:"set"}[e]||e)+"."+{"bookshelf~reader":"31d6cfe0",bookshelf:"a18d5d9d",reader:"8575e738",set:"31d6cfe0"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"000c":function(e,t,n){},"18a7":function(e,t,n){"use strict";var o=n("e74f"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={created:function(){"indexedDB"in window?console.log("当前浏览器支持 IndexedDB"):console.log("您的浏览器不支持 IndexedDB, 请升级或更换其他浏览器")}},s=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(s,r,a,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-wrap"},[n("div",{staticClass:"layout-sidebar"},[n("SideBar")],1),n("div",{staticClass:"layout-main"},[n("router-view")],1)])},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"side-bar"},e._l(e.list,(function(t){return n("li",{key:t.name,staticClass:"sider-item"},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),0)},g=[],b={data:function(){return{list:[{icon:"abc",name:"阅读",path:"/reader"},{icon:"abc",name:"书架",path:"/bookshelf"},{icon:"abc",name:"设置",path:"/set"}]}}},m=b,w=(n("a736"),Object(c["a"])(m,v,g,!1,null,null,null)),k=w.exports,y={name:"Home",components:{SideBar:k}},S=y,D=(n("18a7"),Object(c["a"])(S,h,p,!1,null,null,null)),O=D.exports;o["a"].use(f["a"]);var _=[{path:"/",component:O,redirect:"reader",children:[{path:"bookshelf",name:"bookshelf",component:function(){return Promise.all([n.e("bookshelf~reader"),n.e("bookshelf")]).then(n.bind(null,"71ec"))}},{path:"reader",name:"reader",component:function(){return Promise.all([n.e("bookshelf~reader"),n.e("reader")]).then(n.bind(null,"968f"))}},{path:"set",name:"set",component:function(){return n.e("set").then(n.bind(null,"eed2"))}}]}],j=new f["a"]({mode:"history",base:"/pc/",routes:_}),B=j,x=(n("4de4"),n("2f62")),C={setData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n?"sessionStorage":"localStorage";t=JSON.stringify(t),window[o][e]=t},getData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"sessionStorage":"localStorage";if(this.hasData(e,t))try{return JSON.parse(window[n][e])}catch(o){return window[n][e]}return null},hasData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"sessionStorage":"localStorage";try{if(window[n]&&window[n][e])return!0}catch(o){throw new Error(o)}return!1},removeData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"sessionStorage":"localStorage";window[n]&&window[n][e]&&window[n].removeItem(e)},clearData:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=e?"sessionStorage":"localStorage";window[t]&&window[t].clear()},addItem:function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=o?"sessionStorage":"localStorage";if(window[r]){var a=this.hasData(e,o)?this.getData(e,o):[];n&&"start"===n?a.unshift(t):(a.push(t),this.setData(e,a,o))}},getItem:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.getData(e,n);return o&&o[t]?o[t]:null}};o["a"].use(x["a"]);var E=new x["a"].Store({state:{books:C.getData("books")||[],curBook:C.getData("curBook")||null},mutations:{SaveBook:function(e,t){var n=e.books||[];n.push(t),e.books=n,C.setData("books",n)},DeleteBook:function(e,t){var n=e.books,o=t.id,r=n.filter((function(e){return e.id!==o}));e.books=r,C.setData("books",r)},SaveCurBook:function(e,t){e.curBook=t,C.setData("curBook",t)}},actions:{},modules:{}});n("000c");o["a"].config.productionTip=!1,new o["a"]({router:B,store:E,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},a0a6:function(e,t,n){},a736:function(e,t,n){"use strict";var o=n("a0a6"),r=n.n(o);r.a},e74f:function(e,t,n){}});