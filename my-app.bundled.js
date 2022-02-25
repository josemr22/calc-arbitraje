/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const o=window.trustedTypes,l=o?o.emptyScript:"",a=window.reactiveElementPolyfillSupport,h={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},c=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=u){var e,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:h.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,i){var s,e,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=o,this[o]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:d}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.2.3");const p=globalThis.trustedTypes,b=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,g="?"+f,w=`<${g}>`,S=document,y=(t="")=>S.createComment(t),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,O=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,_=/"/g,U=/^(?:script|style|textarea|title)$/i,k=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),x=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),T=new WeakMap,N=S.createTreeWalker(S,129,null,!1),D=(t,i)=>{const s=t.length-1,e=[];let n,r=2===i?"<svg>":"",o=A;for(let i=0;i<s;i++){const s=t[i];let l,a,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,a=o.exec(s),null!==a);)c=o.lastIndex,o===A?"!--"===a[1]?o=$:void 0!==a[1]?o=O:void 0!==a[2]?(U.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=j):void 0!==a[3]&&(o=j):o===j?">"===a[0]?(o=null!=n?n:A,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?j:'"'===a[3]?_:E):o===_||o===E?o=j:o===$||o===O?o=A:(o=j,n=void 0);const u=o===j&&t[i+1].startsWith("/>")?" ":"";r+=o===A?s+w:h>=0?(e.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+f+u):s+f+(-2===h?(e.push(void 0),i):u)}const l=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(l):l,e]};class R{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,h]=D(t,i);if(this.el=R.createElement(a,s),N.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=N.nextNode())&&l.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(f)){const s=h[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(f),i=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?L:"?"===i[1]?H:"@"===i[1]?J:B})}else l.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(U.test(e.tagName)){const t=e.textContent.split(f),i=t.length-1;if(i>0){e.textContent=p?p.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],y()),N.nextNode(),l.push({type:2,index:++n});e.append(t[i],y())}}}else if(8===e.nodeType)if(e.data===g)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(f,t+1));)l.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function z(t,i,s=t,e){var n,r,o,l;if(i===x)return i;let a=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const h=m(i)?void 0:i._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,e)),void 0!==e?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[e]=a:s._$Cu=a),void 0!==a&&(i=z(t,a._$AS(t,i.values),a,e)),i}class P{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);N.currentNode=n;let r=N.nextNode(),o=0,l=0,a=e[0];for(;void 0!==a;){if(o===a.index){let i;2===a.type?i=new I(r,r.nextSibling,this,t):1===a.type?i=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(i=new G(r,this,t)),this.v.push(i),a=e[++l]}o!==(null==a?void 0:a.index)&&(r=N.nextNode(),o++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class I{constructor(t,i,s,e){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=z(this,t,i),m(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return C(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==M&&m(this._$AH)?this._$AA.nextSibling.data=t:this.S(S.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=R.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new P(n,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new R(t)),i}A(t){C(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new I(this.M(y()),this.M(y()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class B{constructor(t,i,s,e,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,i,0),r=!m(t)||t!==this._$AH&&t!==x,r&&(this._$AH=t);else{const e=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=z(this,e[s+o],i,o),l===x&&(l=this._$AH[o]),r||(r=!m(l)||l!==this._$AH[o]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!e&&this.k(t)}k(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class L extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===M?void 0:t}}const q=p?p.emptyScript:"";class H extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==M?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends B{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=z(this,t,i,0))&&void 0!==s?s:M)===x)return;const e=this._$AH,n=t===M&&e!==M||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==M&&(e===M||n);n&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const K=window.litHtmlPolyfillSupport;null==K||K(R,I),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.1.3");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),W=new Map;class F{constructor(t,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=W.get(this.cssText);return V&&void 0===t&&(W.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Q=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new F(s,Z)},X=(t,i)=>{V?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=i.cssText,t.appendChild(s)}))},Y=V?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new F("string"==typeof t?t:t+"",Z))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var tt;const it=window.trustedTypes,st=it?it.emptyScript:"",et=window.reactiveElementPolyfillSupport,nt={toAttribute(t,i){switch(i){case Boolean:t=t?st:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},rt=(t,i)=>i!==t&&(i==i||t==t),ot={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:rt};class lt extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=ot){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ot}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(Y(t))}else void 0!==t&&i.push(Y(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return X(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ES(t,i,s=ot){var e,n;const r=this.constructor._$Eh(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:nt.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,i){var s,e,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,a=null!==(n=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==n?n:nt.fromAttribute;this._$Ei=o,this[o]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var at,ht;lt.finalized=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},null==et||et({ReactiveElement:lt}),(null!==(tt=globalThis.reactiveElementVersions)&&void 0!==tt?tt:globalThis.reactiveElementVersions=[]).push("1.2.3");class ct extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,n;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new I(i.insertBefore(y(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return x}}ct.finalized=!0,ct._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ct});const ut=globalThis.litElementPolyfillSupport;null==ut||ut({LitElement:ct}),(null!==(ht=globalThis.litElementVersions)&&void 0!==ht?ht:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var vt;null===(vt=window.HTMLSlotElement)||void 0===vt||vt.prototype.assignedElements;var pt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let bt=class extends ct{render(){return k`
      <header>
        <h1>Calculadora de Gastos Arbitrales del OSCE</h1>
      </header>
    `}};bt.styles=Q`
    h1 {
      text-align: center;
    }
  `,bt=pt([dt("app-header")],bt);var ft=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let gt=class extends ct{render(){return k`
      <p>
        Permite determinar el monto de los gastos arbitrales (honorarios de
        árbitros y gastos administrativos de la Secretaría Arbitral) que
        correponde asumir a las partes de los arbitrajes organizados y
        administrados por el OSCE, asi como en los arbitrajes ad hoc.
      </p>

      <a class="nav-link active" data-toggle="tab" href="calculadora.asp"
        >Directiva N° 007-2009-OSCE/CD</a
      >
      <a class="nav-link" data-toggle="tab" href="calculadoraTasa2016.asp"
        >Directiva N° 021-2016-OSCE/CD</a
      >

      <p>
        Los cálculos son realizados en base a lo establecido en la Directiva N°
        007-2009-OSCE/CD, para los procesos arbitrales iniciados hasta el 29 de
        junio de 2016. Puede acceder a esta Directiva
        <a
          href="http://www.osce.gob.pe/consucode/userfiles/file/DDA%20-%20NORMAS%20APLICABLES/Directiva%20N%20007-2009-OSCE%20-%20SUPUESTOS%20DE%20DEVOLUCIN%20DE%20HONORARIOS.pdf"
          target="_blank"
          >haciendo clic aquí</a
        >.<br /><br />
        Ingrese la información solicitada para realizar el cálculo de los gastos
        arbitrales que corresponde a su proceso.
      </p>
    `}};gt.styles=Q``,gt=ft([dt("app-description")],gt);var wt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let St=class extends ct{constructor(){super(...arguments),this._error=!1}render(){return k`
      <div>
        <label>Monto de la cuantía (S/)</label>
        <input type="number" @input=${this._changeAmount} />
        ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i,s){return t?i():null==s?void 0:s()}(this._error,(()=>k`<span>Ingrese el monto de la cuantía</span>`),(()=>k``))}
      </div>
      <button @click=${this._calculate}>Realizar cálculo</button>
    `}_changeAmount(t){const i=t.target;this._error=!1,this._amount=Number(i.value),this.requestUpdate()}_calculate(){if(!this._amount)return this._error=!0,void this.requestUpdate();const t=new CustomEvent("onCalculate",{detail:{amount:this._amount}});this.dispatchEvent(t)}};St.styles=Q`
    :host {
      display: block;
      text-align: center;
    }
    span {
      display: block;
      color: red;
    }
  `,St=wt([dt("app-input-cuantia")],St);var yt=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let mt=class extends ct{render(){return k`
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              Gastos arbitrales correspondientes a la siguiente cuantía
            </td>
          </tr>
          <tr>
            <td>Monto de Cuantía</td>
            <td>S/ ${this.results.montoCuantia.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Árbitro Único</td>
            <td>S/ ${this.results.arbitroUnico.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tribunal Arbitral</td>
            <td>S/ ${this.results.tribunalArbitral.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Centro de Arbitraje</td>
            <td>
              ${this.results.centroArbitraje?"S/ "+this.results.centroArbitraje.toFixed(2):"👀"}
            </td>
          </tr>
        </tbody>
      </table>
      <button @click=${this._navigateToBack}>Realizar otro cálculo</button>
    `}_navigateToBack(){this.dispatchEvent(new CustomEvent("onBack"))}get results(){let t;if(this.amount<=36e3)t={montoCuantia:this.amount,arbitroUnico:2500,tribunalArbitral:5512,centroArbitraje:2500};else if(this.amount<=72e3)t={montoCuantia:this.amount,arbitroUnico:3200,tribunalArbitral:9283,centroArbitraje:3200};else if(this.amount<=108e3)t={montoCuantia:this.amount,arbitroUnico:4660,tribunalArbitral:11519,centroArbitraje:500};else if(this.amount<=18e4){const i=this.amount-108e3;t={montoCuantia:this.amount,arbitroUnico:5e3+.0153*i,tribunalArbitral:11800+.04*i,centroArbitraje:4036+.02*i}}else if(this.amount<=36e4){const i=this.amount-18e4;t={montoCuantia:this.amount,arbitroUnico:7080+.006*i,tribunalArbitral:15284+.0126*i,centroArbitraje:4607+.0091*i}}else if(this.amount<=18e5){const i=this.amount-36e4;t={montoCuantia:this.amount,arbitroUnico:8518+.0063*i,tribunalArbitral:18092+.015*i,centroArbitraje:5889+.0062*i}}else if(this.amount<=36e5){const i=this.amount-18e5;t={montoCuantia:this.amount,arbitroUnico:20408+.0034*i,tribunalArbitral:42606+.0089*i,centroArbitraje:11679+.005*i}}else{const i=this.amount-36e5;t={montoCuantia:this.amount,arbitroUnico:30156+.0031*i,tribunalArbitral:62253+.0043*i,centroArbitraje:void 0}}return t}};mt.styles=Q`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    button {
      cursor: pointer;
    }
  `,mt=yt([dt("app-results")],mt);var Ct=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let At=class extends ct{render(){const t=k`
      <app-input-cuantia @onCalculate=${this._onCalculate}></app-input-cuantia>
    `,i=k`
      <app-results
        @onBack=${this._onBack}
        .amount=${this.amount}
      ></app-results>
    `;return this.amount?i:t}_onCalculate(t){this.amount=Number(t.detail.amount),this.requestUpdate()}_onBack(){this.amount=void 0,this.requestUpdate()}};At.styles=Q``,At=Ct([dt("app-calc")],At);var $t=function(t,i,s,e){for(var n,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(o=(r<3?n(o):r>3?n(i,s,o):n(i,s))||o);return r>3&&o&&Object.defineProperty(i,s,o),o};let Ot=class extends ct{render(){return k`
      <app-header></app-header>
      <div class="container">
        <app-description></app-description>
        <app-calc></app-calc>
      </div>
    `}};Ot.styles=Q`
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  `,Ot=$t([dt("my-app")],Ot);export{Ot as MyApp};