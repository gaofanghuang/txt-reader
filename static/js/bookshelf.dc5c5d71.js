(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bookshelf"],{1276:function(e,t,n){"use strict";var i=n("d784"),r=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),h=[].push,p=Math.min,v=4294967295,g=!d((function(){return!RegExp(v,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(s(this)),o=void 0===n?v:n>>>0;if(0===o)return[];if(void 0===e)return[i];if(!r(e))return t.call(i,e,o);var a,l,c,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,d+"g");while(a=f.call(g,i)){if(l=g.lastIndex,l>p&&(u.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&h.apply(u,a.slice(1)),c=a[0].length,p=l,u.length>=o))break;g.lastIndex===a.index&&g.lastIndex++}return p===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=s(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,n):i.call(String(r),t,n)},function(e,r){var s=n(i,e,this,r,i!==t);if(s.done)return s.value;var f=o(e),d=String(this),h=a(f,RegExp),b=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),k=new h(g?f:"^(?:"+f.source+")",m),x=void 0===r?v:r>>>0;if(0===x)return[];if(0===d.length)return null===u(k,d)?[d]:[];var w=0,C=0,R=[];while(C<d.length){k.lastIndex=g?C:0;var y,$=u(k,g?d:d.slice(C));if(null===$||(y=p(c(k.lastIndex+(g?0:C)),d.length))===w)C=l(d,C,b);else{if(R.push(d.slice(w,C)),R.length===x)return R;for(var I=1;I<=$.length-1;I++)if(R.push($[I]),R.length===x)return R;C=w=y}}return R.push(d.slice(w)),R}]}),!g)},"3d62":function(e,t,n){"use strict";var i=n("e999"),r=n.n(i);r.a},"44e7":function(e,t,n){var i=n("861d"),r=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==r(e))}},"71ec":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bookshelf-wrap"},[n("div",{staticClass:"bookshelf-import"},[e.reset?e._e():n("div",{staticClass:"bookshelf-import-input"},[n("input",{ref:"fileInp",attrs:{type:"file"},on:{change:e.getFile}})]),n("div",{staticClass:"bookshelf-import-btn",on:{click:e.importFile}},[e._v("导入")])]),n("div",{staticClass:"bookshelf-books"},e._l(e.books,(function(t,i){return n("div",{key:t.title+"-"+t.createdTime,staticClass:"bookshelf-book-item"},[n("div",{staticClass:"bookshelf-book-info",on:{click:function(t){return e.readerItem(i)}}},[n("div",{staticClass:"bookshelf-book-dot"}),n("div",{staticClass:"bookshelf-book-title"},[e._v(e._s(t.title))])]),n("span",{staticClass:"bookshelf-book-delete",on:{click:function(n){return e.deleteBook(t.id)}}},[e._v("删除")])])})),0)])},r=[],o=(n("b0c0"),n("ac1f"),n("5319"),n("1276"),n("5530")),s=(n("96cf"),n("1da1")),a=n("907c"),l={data:function(){return{reset:!1}},computed:{books:function(){return this.$store.state.books}},created:function(){},methods:{importFile:function(){this.$refs.fileInp.click()},getFile:function(e){var t=e.target.files[0],n=new FileReader,i=this;n.readAsText(t,"gb2312"),n.onload=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,s,l,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={title:t.name.split(".")[0],createdTime:(new Date).toLocaleDateString()},s=n.target.result,l=i.formatText(s),c=/第(.+?)章([\s\S]*?)\n/g,s=s.replace(c,'<div data-no="$1">第$1章 $2</div><br>'),e.next=7,a["a"].add(Object(o["a"])({},r,{content:s,menu:l,mark:[]}));case 7:u=e.sent,i.$store.commit("SaveBook",Object(o["a"])({},r,{id:u})),i.reset=!0,setTimeout((function(){i.reset=!1}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},formatText:function(e){var t,n=/第(.+?)章\s([\s\S]*?)\n/g,i=[];while(null!=(t=n.exec(e)))i.push({name:t[0],no:t[1]});return i},readerItem:function(e){this.$store.commit("toCurBid",this.books[e].id),this.$router.push("/reader")},deleteBook:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.$store.commit("DeleteBook",{id:e}),n.next=3,a["a"].remove(e);case 3:i=n.sent,console.log(i);case 5:case"end":return n.stop()}}),n)})))()},getList:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].all();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}}},c=l,u=(n("3d62"),n("2877")),f=Object(u["a"])(c,i,r,!1,null,null,null);t["default"]=f.exports},b0c0:function(e,t,n){var i=n("83ab"),r=n("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,l="name";i&&!(l in o)&&r(o,l,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},e999:function(e,t,n){}}]);