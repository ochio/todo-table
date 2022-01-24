(()=>{"use strict";var e={147:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,'/*! destyle.css v3.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */*,::before,::after{box-sizing:border-box;border-style:solid;border-width:0}html{font-size:62.5%;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{color:#222;margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:bold}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}[type=checkbox]{-webkit-appearance:checkbox;-moz-appearance:checkbox;appearance:checkbox}[type=radio]{-webkit-appearance:radio;-moz-appearance:radio;appearance:radio}button,[type=button],[type=reset],[type=submit]{cursor:pointer}button:disabled,[type=button]:disabled,[type=reset]:disabled,[type=submit]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit;border-collapse:collapse}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:bold}.contentsWrap{width:640px;padding-top:80px;margin:0 auto}.title{font-size:1.7rem;font-weight:600}.title::before{display:inline-block;width:10px;height:20px;margin-right:10px;vertical-align:middle;content:"";background:#222}.archivesList{height:70vh;margin-top:15px;overflow:scroll}.archivesList__item{padding:10px;font-size:1.3rem;border-bottom:1px solid #ddd}.toTableWrap{margin-left:auto}.toTable{padding:10px;font-size:1.4rem}.toTable::before{margin-right:10px;content:"<"}',""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},199:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(379),o=r.n(n),a=r(795),i=r.n(a),l=r(569),s=r.n(l),c=r(565),d=r.n(c),u=r(216),p=r.n(u),f=r(589),h=r.n(f),m=r(147),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(m.Z,b);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,n);n.byIndex=l,t.splice(l,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var s=n(e,o),c=0;c<a.length;c++){var d=r(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},190:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(199),(0,n(r(950)).default)()},950:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(314));t.default=function(){var e=o.default.fetch("archives");if("content"in document.createElement("template")){var t=document.getElementById("archivedItem-template");if(null==t)throw new Error("no template");for(var r=t.content,n=document.createDocumentFragment(),a=0;a<e.length;a++){var i=document.importNode(r,!0);i.querySelector('[data-js="archive"]').textContent=e[a].title,n.appendChild(i)}document.querySelector("#archivesList").appendChild(n)}else console.log("template要素に対応していません。")}},314:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n={fetch:function(e){return JSON.parse(localStorage.getItem(e)||"[]")},formated:function(){for(var e=n.fetch("todos"),t=e,r=0;r<e.length;r++)t[r].importance=Number(e[r].importance);return t},store:function(e,t){localStorage.setItem(e,JSON.stringify(t))},save:function(e){var t=n.fetch("todos"),o=r({},e);t.push(o),n.store("todos",t)},extract:function(e){return{id:e.dataset.id,title:e.querySelector('[data-js="title"]').value,deadline:e.querySelector('[data-js="deadline"]').value,importance:e.dataset.importance||"0"}},archive:function(e){var t=n.fetch("archives"),r=n.extract(e);t.push(r),n.store("archives",t)},update:function(e){var t=n.fetch("todos"),r=function(e){for(var r=0;r<t.length;r++)if(t[r].id===e)return r;return-1}(e.dataset.id);if(-1===r)throw new Error("invalid id");t[r].top=null!=e.dataset.top?e.dataset.top:"",t[r].left=null!=e.dataset.left?e.dataset.left:"";var o={deadline:e.querySelector('[data-js="deadline"]').value,title:e.querySelector('[data-js="title"]').value};t[r].title=o.title,t[r].deadline=o.deadline,n.store("todos",t)},delete:function(e){var t=n.fetch("todos"),r=o(e.dataset.id,t);if(-1===r)throw new Error("invalid id");t.splice(r,1),n.store("todos",t)},reset:{location:function(e){var t=n.fetch("todos"),r=o(e.dataset.id,t);if(-1===r)throw new Error("invalid id");delete t[r].top,delete t[r].left,n.store("todos",t),location.reload()}}};function o(e,t){void 0===e&&(e="-1");for(var r=0;r<t.length;r++)if(t[r].id===e)return r;return-1}t.default=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(190)})();