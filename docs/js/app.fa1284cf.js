(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},s={app:0},r=[];function o(t){return l.p+"js/"+({"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[t]||t)+"."+{"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"3b940789","dynamic-size":"4ca1361e","fixed-size":"463a787a",horizontal:"ae821526","infinite-loading":"6227116e","keep-state":"22b2e66a"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"dynamic-size":1,"fixed-size":1,horizontal:1,"infinite-loading":1,"keep-state":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state","dynamic-size":"dynamic-size","fixed-size":"fixed-size",horizontal:"horizontal","infinite-loading":"infinite-loading","keep-state":"keep-state"}[t]||t)+"."+{"dynamic-size~fixed-size~horizontal~infinite-loading~keep-state":"31d6cfe0","dynamic-size":"9013d8ce","fixed-size":"840ec49f",horizontal:"c4223f3f","infinite-loading":"4b238c18","keep-state":"23037f2b"}[t]+".css",s=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){c=h[o],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],d.parentNode.removeChild(d),i(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=s[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,i[1](h)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var d=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2345:function(t,e,i){"use strict";var n=i("67ef"),a=i.n(n);a.a},2395:function(t,e,i){},"2f31":function(t,e,i){},"3f05":function(t,e,i){"use strict";e["a"]=function(){var t=(location.hash||"").substr(2);return t?"https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/src/views/".concat(t,"/Main.vue"):"https://github.com/tangbc/vue-virtual-scroll-list"}},"3f57":function(t,e,i){"use strict";var n=i("caf6"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("b0c0"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("e832"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("home")]),i("router-link",{attrs:{to:"/fixed-size"}},[t._v("fixed size")]),i("router-link",{attrs:{to:"/dynamic-size"}},[t._v("dynamic size")]),i("router-link",{attrs:{to:"/horizontal"}},[t._v("horizontal")]),i("router-link",{attrs:{to:"/infinite-loading"}},[t._v("infinite loading")]),i("router-link",{attrs:{to:"/keep-state"}},[t._v("keep state")])],1),i("router-view")],1)},s=[],r=(i("7c55"),i("2877")),o={},l=Object(r["a"])(o,a,s,!1,null,null,null),c=l.exports,u=(i("d3b7"),i("8c4f")),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("github-corner"),t._m(0),t._m(1),i("h3",{staticClass:"title"},[t._v("What's news in v2.0")]),t._m(2),i("h3",{staticClass:"title"},[t._v("Todos")]),t._m(3)],1)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"name"},[i("a",{attrs:{href:"https://github.com/tangbc/vue-virtual-scroll-list"}},[t._v("vue-virtual-scroll-list")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head"},[i("img",{attrs:{alt:"Travis CI Status",src:"https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"}}),i("img",{attrs:{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg"}}),i("img",{attrs:{alt:"NPM version",src:"https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"}}),i("img",{attrs:{alt:"Vue version",src:"https://img.shields.io/badge/vue-%3E=2.3.0-brightgreen.svg"}}),i("img",{attrs:{alt:"Package quality",src:"https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Support header, footer slot, horizontal direction.")]),i("li",[t._v("Code structure is more reasonable and good maintainability.")]),i("li",[t._v("Abandoned v-for mode and variable mode, all condition unify into one mode.")]),i("li",[t._v("Don't have to care about each item size, in sometimes it's difficult to know that.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Improve calculate offset efficient.")]),i("li",[t._v("Support page scroll, table layout, unit test.")]),i("li",[t._v("......")])])}],f={name:"index",data:function(){return{}}},p=f,g=(i("d978"),Object(r["a"])(p,h,d,!1,null,"45d2e7ec",null)),v=g.exports;n["a"].use(u["a"]);var m=[{path:"/",name:"home",component:v},{path:"/fixed-size",name:"fixed-size",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("fixed-size")]).then(i.bind(null,"c227"))}},{path:"/dynamic-size",name:"dynamic-size",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("dynamic-size")]).then(i.bind(null,"960e"))}},{path:"/horizontal",name:"horizontal",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("horizontal")]).then(i.bind(null,"a2ab"))}},{path:"/infinite-loading",name:"infinite-loading",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("infinite-loading")]).then(i.bind(null,"077d"))}},{path:"/keep-state",name:"keep-state",component:function(){return Promise.all([i.e("dynamic-size~fixed-size~horizontal~infinite-loading~keep-state"),i.e("keep-state")]).then(i.bind(null,"0786"))}}];var y=new u["a"]({routes:m}),z=y,b=(i("99af"),i("d81d"),i("4ec9"),i("3ca3"),i("ddb0"),i("d4ec")),S=i("bee2"),C={FRONT:"FRONT",BEHIND:"BEHIND"},x={INIT:"INIT",FIXED:"FIXED",DYNAMIC:"DYNAMIC"},k=2,O=function(){function t(e,i){Object(b["a"])(this,t),this.init(e,i)}return Object(S["a"])(t,[{key:"init",value:function(t,e){this.param=t,this.callUpdate=e,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.lastCalcIndex=0,this.fixedSizeValue=0,this.calcType=x.INIT,this.offset=0,this.direction="",this.range=Object.create(null),t&&this.checkRange(0,t.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var t=Object.create(null);return t.start=this.range.start,t.end=this.range.end,t.padFront=this.range.padFront,t.padBehind=this.range.padBehind,t}},{key:"isBehind",value:function(){return this.direction===C.BEHIND}},{key:"isFront",value:function(){return this.direction===C.FRONT}},{key:"getOffset",value:function(t){return t<1?0:this.getIndexOffset(t)}},{key:"updateParam",value:function(t,e){this.param&&t in this.param&&(this.param[t]=e)}},{key:"saveSize",value:function(t,e){this.sizes.set(t,e),this.calcType===x.INIT?(this.fixedSizeValue=e,this.calcType=x.FIXED):this.calcType===x.FIXED&&this.fixedSizeValue!==e&&(this.calcType=x.DYNAMIC,delete this.fixedSizeValue),this.sizes.size<=this.param.keeps?(this.firstRangeTotalSize=this.firstRangeTotalSize+e,this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize}},{key:"handleDataSourcesChange",value:function(){var t=this.range.start;this.isFront()?t-=k:this.isBehind()&&(t+=k),t=Math.max(t,0),this.updateRange(this.range.start,this.getEndByStart(t))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(t){this.direction=t<this.offset?C.FRONT:C.BEHIND,this.offset=t,this.direction===C.FRONT?this.handleFront():this.direction===C.BEHIND&&this.handleBehind()}},{key:"handleFront",value:function(){var t=this.getScrollOvers();if(!(t>this.range.start)){var e=Math.max(t-this.param.buffer,0);this.checkRange(e,this.getEndByStart(e))}}},{key:"handleBehind",value:function(){var t=this.getScrollOvers();t<this.range.start+this.param.buffer||this.checkRange(t,this.getEndByStart(t))}},{key:"getScrollOvers",value:function(){var t=this.offset-this.param.slotHeaderSize;if(t<=0)return 0;if(this.isFixedType())return Math.floor(t/this.fixedSizeValue);var e=0,i=0,n=0,a=this.param.uniqueIds.length;while(e<=a){if(i=e+Math.floor((a-e)/2),n=this.getIndexOffset(i),n===t)return i;n<t?e=i+1:n>t&&(a=i-1)}return e>0?--e:0}},{key:"getIndexOffset",value:function(t){if(!t)return 0;for(var e=0,i=0,n=0;n<t;n++)i=this.sizes.get(this.param.uniqueIds[n]),e+=i||this.getEstimateSize();return this.lastCalcIndex=Math.max(this.lastCalcIndex,t-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),e}},{key:"isFixedType",value:function(){return this.calcType===x.FIXED}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(t,e){var i=this.param.keeps,n=this.param.uniqueIds.length;n<=i?(t=0,e=this.getLastIndex()):e-t<i-1&&(t=e-i+1),this.range.start!==t&&this.updateRange(t,e)}},{key:"updateRange",value:function(t,e){this.range.start=t,this.range.end=e,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}},{key:"getEndByStart",value:function(t){var e=t+this.param.keeps-1,i=Math.min(e,this.getLastIndex());return i}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var t=this.range.end,e=this.getLastIndex();return this.isFixedType()?(e-t)*this.fixedSizeValue:this.lastCalcIndex===e?this.getIndexOffset(e)-this.getIndexOffset(t):(e-t)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.firstRangeAverageSize||this.param.size}}]),t}(),T=(i("a9e3"),{size:{type:Number,required:!0},keeps:{type:Number,required:!0},dataKey:{type:String,required:!0},dataSources:{type:Array,required:!0},dataComponent:{type:[Object,Function],required:!0},extraProps:{type:Object},rootTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},wrapClass:{type:String,default:""},direction:{type:String,default:"vertical"},topThreshold:{type:Number,default:0},bottomThreshold:{type:Number,default:0},start:{type:Number,default:0},offset:{type:Number,default:0},itemTag:{type:String,default:"div"},itemClass:{type:String,default:""},headerTag:{type:String,default:"div"},headerClass:{type:String,default:""},footerTag:{type:String,default:"div"},footerClass:{type:String,default:""},disabled:{type:Boolean,default:!1}}),I={event:{type:String},tag:{type:String},horizontal:{type:Boolean},source:{type:Object},component:{type:[Object,Function]},uniqueKey:{type:String},extraProps:{type:Object}},E={event:{type:String},uniqueKey:{type:String},tag:{type:String},horizontal:{type:Boolean}},_={created:function(){this.hasInitial=!1,this.shapeKey=this.horizontal?"offsetWidth":"offsetHeight"},mounted:function(){var t=this;this.dispatchSizeChange(),"undefined"!==typeof ResizeObserver&&(this.resizeObserver=new ResizeObserver((function(){t.hasInitial?t.dispatchSizeChange():t.hasInitial=!0})),this.resizeObserver.observe(this.$el))},beforeDestroy:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},methods:{getCurrentSize:function(){return this.$el?this.$el[this.shapeKey]:0},dispatchSizeChange:function(){this.$parent.$emit(this.event,this.uniqueKey,this.getCurrentSize(),this.hasInitial)}}},w=n["a"].component("virtual-list-item",{mixins:[_],props:I,render:function(t){var e=this.component,i=this.itemProps,n=void 0===i?{}:i;return n.source=this.source,t(this.tag,{role:"item"},[t(e,{props:n})])}}),R=n["a"].component("virtual-list-slot",{mixins:[_],props:E,render:function(t){var e=this.uniqueKey;return t(this.tag,{attrs:{role:e}},this.$slots.default)}}),P={ITEM:"item_resize",SLOT:"slot_resize"},F={HEADER:"header",FOOTER:"footer"},$=n["a"].component("virtual-list",{props:T,data:function(){return{range:null}},watch:{dataSources:function(t,e){t.length!==e.length&&(this.virtual.updateParam("uniqueIds",this.getUniqueIdFromDataSources()),this.virtual.handleDataSourcesChange())},start:function(t){this.scrollToIndex(t)},offset:function(t){this.scrollToOffset(t)}},created:function(){this.isHorizontal="horizontal"===this.direction,this.directionKey=this.isHorizontal?"scrollLeft":"scrollTop",this.installVirtual(),this.$on(P.ITEM,this.onItemResized),(this.$slots.header||this.$slots.footer)&&this.$on(P.SLOT,this.onSlotResized)},activated:function(){this.scrollToOffset(this.virtual.offset)},mounted:function(){this.start?this.scrollToIndex(this.start):this.offset&&this.scrollToOffset(this.offset)},beforeDestroy:function(){this.virtual.destroy()},methods:{scrollToOffset:function(t){var e=this.$refs.root;e&&(e[this.directionKey]=t||0)},scrollToIndex:function(t){if(t>=this.dataSources.length-1)this.scrollToBottom();else{var e=this.virtual.getOffset(t);this.scrollToOffset(e)}},scrollToBottom:function(){var t=this,e=this.$refs.shepherd;e&&(e.scrollIntoView(!1),setTimeout((function(){t.getOffset()+t.getClientSize()<t.getScrollSize()&&t.scrollToBottom()}),3))},reset:function(){this.virtual.destroy(),this.scrollToOffset(0),this.installVirtual()},installVirtual:function(){this.virtual=new O({size:this.size,slotHeaderSize:0,slotFooterSize:0,keeps:this.keeps,buffer:Math.round(this.keeps/3),uniqueIds:this.getUniqueIdFromDataSources()},this.onRangeChanged),this.range=this.virtual.getRange()},getUniqueIdFromDataSources:function(){var t=this;return this.dataSources.map((function(e){return e[t.dataKey]}))},getOffset:function(){var t=this.$refs.root;return t?Math.ceil(t[this.directionKey]):0},getClientSize:function(){var t=this.$refs.root;return t?t[this.isHorizontal?"clientWidth":"clientHeight"]:0},getScrollSize:function(){var t=this.$refs.root;return t?t[this.isHorizontal?"scrollWidth":"scrollHeight"]:0},onItemResized:function(t,e){this.virtual.saveSize(t,e)},onSlotResized:function(t,e,i){t===F.HEADER?this.virtual.updateParam("slotHeaderSize",e):t===F.FOOTER&&this.virtual.updateParam("slotFooterSize",e),i&&this.virtual.handleSlotSizeChange()},onRangeChanged:function(t){this.range=t},onScroll:function(t){var e=this.getOffset(),i=this.getClientSize(),n=this.getScrollSize();e+i>n||!n||(this.virtual.handleScroll(e),this.emitEvent(e,i,n,t))},emitEvent:function(t,e,i,n){var a=this.virtual.getRange();this.virtual.isFront()&&this.dataSources.length&&t-this.topThreshold<=0?this.$emit("totop",n,a):this.virtual.isBehind()&&t+e+this.bottomThreshold>=i?this.$emit("tobottom",n,a):this.$emit("scroll",n,a)},getRenderSlots:function(t){for(var e=[],i=this.range,n=i.start,a=i.end,s=this.dataSources,r=this.dataKey,o=this.itemClass,l=this.itemTag,c=this.isHorizontal,u=this.extraProps,h=this.dataComponent,d=n;d<=a;d++){var f=s[d];f?f[r]?e.push(t(w,{class:o,props:{tag:l,event:P.ITEM,horizontal:c,uniqueKey:f[r],source:f,extraProps:u,component:h}})):console.warn("Cannot get the data-key '".concat(r,"' from data-sources.")):console.warn("Cannot get the index '".concat(d,"' from data-sources."))}return e}},render:function(t){var e=this.$slots,i=e.header,n=e.footer,a=this.range,s=a.padFront,r=a.padBehind,o=this.rootTag,l=this.headerClass,c=this.headerTag,u=this.wrapTag,h=this.wrapClass,d=this.footerClass,f=this.footerTag,p=this.isHorizontal?"0px ".concat(r,"px 0px ").concat(s,"px"):"".concat(s,"px 0px ").concat(r,"px");return t(o,{ref:"root",on:{"&scroll":this.onScroll}},[i?t(R,{class:l,props:{tag:c,event:P.SLOT,uniqueKey:F.HEADER}},i):null,t(u,{class:h,attrs:{role:"group"},style:{padding:p}},this.getRenderSlots(t)),n?t(R,{class:d,props:{tag:f,event:P.SLOT,uniqueKey:F.FOOTER}},n):null,t("div",{ref:"shepherd"})])}}),M=$,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"introduction",domProps:{innerHTML:t._s(t.description)}})},D=[],N={name:"introduction",props:{description:{type:String}}},j=N,q=(i("de3a"),Object(r["a"])(j,B,D,!1,null,"0c507b69",null)),L=q.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.code?i("pre",{class:t.type,domProps:{innerHTML:t._s(t.encode(t.code))}}):t._e()},H=[],A=(i("ac1f"),i("5319"),{name:"code-high-light",props:{type:{type:String,required:!0},code:{type:String,required:!0}},mounted:function(){"undefined"!==typeof window.hljs&&this.$el.textContent&&window.hljs.highlightBlock(this.$el)},methods:{encode:function(t){return"html"===this.type&&(t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;")),t=t.replace(/\s/,""),t}}}),K=A,U=(i("595a"),Object(r["a"])(K,V,H,!1,null,"99fd125a",null)),W=U.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isMobile?t._e():i("a",{staticClass:"github-corner",attrs:{href:t.url,"aria-label":"View source on GitHub"}},[i("svg",{staticStyle:{fill:"#9b4dca",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"1000"},attrs:{width:t.size,height:t.size,viewBox:"0 0 250 250","aria-hidden":"true"}},[i("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),i("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),i("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},Y=[],J=i("835c"),Z=i("3f05"),G={name:"github-corner",data:function(){return{url:"",size:80,isMobile:J["a"]}},mounted:function(){this.url=Object(Z["a"])()}},Q=G,tt=(i("3f57"),Object(r["a"])(Q,X,Y,!1,null,"821512e4",null)),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-item view",class:{active:t.isView},on:{click:t.eventClickView}},[t._v("VIEW")]),i("div",{staticClass:"tab-item code",class:{active:!t.isView},on:{click:t.eventClickCode}},[t._v("CODE")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!t.isView,expression:"!isView"}],staticClass:"complete-code-url",attrs:{target:"_blank",href:t.completeCodeUrl}},[t._v("COMPLETE CODE")])])},nt=[],at=i("b95e"),st={name:"tab",data:function(){return{completeCodeUrl:"",active:at["a"]}},computed:{isView:function(){return this.active===at["b"].VIEW}},mounted:function(){this.completeCodeUrl=Object(Z["a"])()},methods:{eventClickView:function(){this.active=at["b"].VIEW,this.emitEvent()},eventClickCode:function(){this.active=at["b"].CODE,this.emitEvent()},emitEvent:function(){this.$emit("tab-change",this.active)}}},rt=st,ot=(i("2345"),Object(r["a"])(rt,it,nt,!1,null,"13711752",null)),lt=ot.exports;n["a"].component("virtual-list",M),n["a"].component(L.name,L),n["a"].component(W.name,W),n["a"].component(et.name,et),n["a"].component(lt.name,lt),n["a"].config.devtools=!1,n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(c)}}).$mount("#app")},"595a":function(t,e,i){"use strict";var n=i("a5ff"),a=i.n(n);a.a},"67ef":function(t,e,i){},"7c55":function(t,e,i){"use strict";var n=i("2395"),a=i.n(n);a.a},"835c":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("ac1f"),i("466d");var n=navigator.userAgent,a=!!n.match(/Android/i),s=!!n.match(/iPhone|iPad|iPod/i),r=a||s},a5ff:function(t,e,i){},b120:function(t,e,i){},b95e:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));var n={VIEW:1,CODE:2},a=n.VIEW},caf6:function(t,e,i){},d978:function(t,e,i){"use strict";var n=i("b120"),a=i.n(n);a.a},de3a:function(t,e,i){"use strict";var n=i("2f31"),a=i.n(n);a.a}});
//# sourceMappingURL=app.fa1284cf.js.map