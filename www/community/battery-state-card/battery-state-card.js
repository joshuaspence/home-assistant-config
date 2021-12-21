!function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}function e(t,e,i,s){return new(i||(i=Promise))((function(n,r){function o(t){try{l(s.next(t))}catch(t){r(t)}}function a(t){try{l(s.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}l((s=s.apply(t,e||[])).next())}))}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return i&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var l;const c=window.trustedTypes,h=c?c.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=g){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:u.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach((t,e)=>this._$ES(e,this[e],t)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.2");const y=globalThis.trustedTypes,m=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,$="?"+_,b=`<${$}>`,A=document,E=(t="")=>A.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,C=/>/g,U=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,k=/"/g,O=/^(?:script|style|textarea)$/i,T=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),H=new WeakMap,M=A.createTreeWalker(A,129,null,!1),z=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===S?"!--"===l[1]?o=N:void 0!==l[1]?o=C:void 0!==l[2]?(O.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=U):void 0!==l[3]&&(o=U):o===U?">"===l[0]?(o=null!=n?n:S,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?U:'"'===l[3]?k:P):o===k||o===P?o=U:o===N||o===C?o=S:(o=U,n=void 0);const d=o===U&&t[e+1].startsWith("/>")?" ":"";r+=o===S?i+b:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+_+d):i+_+(-2===c?(s.push(void 0),e):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==m?m.createHTML(a):a,s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=z(t,e);if(this.el=j.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=M.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?X:"@"===e[1]?G:W})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),M.nextNode(),a.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)a.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var n,r,o,a;if(e===I)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);M.currentNode=n;let r=M.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new D(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Q(r,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=M.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),x(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==I&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==R&&x(this._$AH)?this._$AA.nextSibling.data=t:this.S(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new B(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new j(t)),e}M(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new D(this.A(E()),this.A(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=L(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==I,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=L(this,s[i+o],e,o),a===I&&(a=this._$AH[o]),r||(r=!x(a)||a!==this._$AH[o]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.k(t)}k(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends W{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===R?void 0:t}}const J=y?y.emptyScript:"";class X extends W{constructor(){super(...arguments),this.type=4}k(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends W{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:R)===I)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const q=window.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var K,Z;null==q||q(j,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.2");class F extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new D(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return I}}F.finalized=!0,F._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:F});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)}console.info("%c BATTERY-STATE-CARD %c 2.0.1","color: white; background: forestgreen; font-weight: 700;","color: forestgreen; background: white; font-weight: 700;");const it=(t,e="warn")=>{console[e]("[battery-state-card] "+t)},st=t=>(t=t.replace("#",""),{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16)}),nt=t=>!isNaN(Number(t)),rt=t=>Array.isArray(t)?t:t?[t]:[],ot=t=>t&&T`<div class="secondary">${t}</div>`,at=(t,e)=>t&&T`<div class="icon"><ha-icon style="color:${e}" icon="${t}"></ha-icon></div>`,lt=t=>{return T`${at(t.icon,t.iconColor)}<div class="name truncate">${t.name} ${"string"==typeof t.secondaryInfo?ot(t.secondaryInfo):(e=t.hass,i=t.secondaryInfo,i&&T`<div class="secondary"><ha-relative-time .hass="${e}" .datetime="${i}"></ha-relative-time></div>`)}</div><div class="state">${t.state}${nt(t.state)?T` %`:""}</div>`;var e,i};class ct extends F{constructor(){super(...arguments),this.updateNotifyQueue=[],this.configUpdated=!1,this.hassUpdated=!1,this.triggerUpdate=function(t,e){let i;return(...e)=>{i&&(clearTimeout(i),i=null),i=setTimeout(()=>t.apply(null,e),100)}}(()=>{this.internalUpdate(this.configUpdated,this.hassUpdated),this.configUpdated=!1,this.hassUpdated=!1,this.updateNotifyQueue.forEach(t=>t()),this.updateNotifyQueue=[]})}set hass(t){this._hass=t,this.hassUpdated=!0,this.triggerUpdate()}get hass(){return this._hass}get cardUpdated(){return new Promise(t=>this.updateNotifyQueue.push(t))}setConfig(t){this.config=JSON.parse(JSON.stringify(t)),this.configUpdated=!0,this.triggerUpdate()}}var ht="\n.clickable {\n    cursor: pointer;\n}\n\n.truncate {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.name {\n    flex: 1;\n    margin: 0 6px;\n}\n\n.secondary {\n    color: var(--secondary-text-color);\n}\n\n.icon {\n    flex: 0 0 40px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 40px;\n    margin-right: 10px;\n    color: var(--paper-item-icon-color)\n}";const dt={"more-info":t=>{const e=new Event("hass-more-info",{composed:!0});e.detail={entityId:t.entityId},t.card.dispatchEvent(e)},navigate:t=>{if(!t.config.navigation_path)return void it("Missing 'navigation_path' for 'navigate' tap action");window.history.pushState(null,"",t.config.navigation_path);const e=new Event("location-changed",{composed:!0});e.detail={replace:!1},window.dispatchEvent(e)},"call-service":(t,e)=>{if(!t.config.service)return void it("Missing 'service' for 'call-service' tap action");const[i,s]=t.config.service.split(".",2),n=Object.assign({},t.config.service_data);e.callService(i,s,n)},url:t=>{t.config.url_path?window.location.href=t.config.url_path:it("Missing 'url_path' for 'url' tap action")}},ut=/\b([0-9]{1,3})\s?%/,pt=/^#[A-Fa-f0-9]{6}$/;class gt extends ct{static get styles(){return o([ht+":host {\n    display: flex;\n    align-items: center;\n}\n"])}internalUpdate(){this.name=ft(this.config,this.hass),this.state=yt(this.config,this.hass);const t=$t(this.config,this.state,this.hass);this.secondaryInfo=vt(this.config,this.hass,t),this.icon=mt(this.config,Number(this.state),t,this.hass),this.iconColor=_t(this.config,this.state,t)}connectedCallback(){super.connectedCallback(),this.setupAction(!0)}disconnectedCallback(){super.disconnectedCallback(),this.setupAction(!1)}render(){return lt(this)}setupAction(t=!0){t?this.config.tap_action&&!this.action&&(this.action=t=>{var e,i;t.stopPropagation(),e={card:this,config:this.config.tap_action,entityId:this.config.entity},i=this.hass,e.config&&"none"!=e.config.action&&(e.config.action in dt?dt[e.config.action](e,i):it("Unknown tap action type: "+e.config.action))},this.addEventListener("click",this.action),this.classList.add("clickable")):this.action&&(this.classList.remove("clickable"),this.removeEventListener("click",this.action),this.action=void 0)}}t([et({attribute:!1})],gt.prototype,"name",void 0),t([et({attribute:!1})],gt.prototype,"secondaryInfo",void 0),t([et({attribute:!1})],gt.prototype,"state",void 0),t([et({attribute:!1})],gt.prototype,"icon",void 0),t([et({attribute:!1})],gt.prototype,"iconColor",void 0),t([et({attribute:!1})],gt.prototype,"action",void 0);const ft=(t,e)=>{var i;if(t.name)return t.name;if(!e)return t.entity;let s=(null===(i=e.states[t.entity])||void 0===i?void 0:i.attributes.friendly_name)||t.entity;return rt(t.bulk_rename).forEach(t=>{s="/"==t.from[0]&&"/"==t.from[t.from.length-1]?s.replace(new RegExp(t.from.substr(1,t.from.length-2)),t.to||""):s.replace(t.from,t.to||"")}),s},vt=(t,e,i)=>{var s;if(t.secondary_info){if("charging"==t.secondary_info)return i?(null===(s=t.charging_state)||void 0===s?void 0:s.secondary_info_text)||"Charging":null;{let i=t.secondary_info;const s=null==e?void 0:e.states[t.entity];s&&(i=s[t.secondary_info]||(null==s?void 0:s.attributes[t.secondary_info])||t.secondary_info);const n=Date.parse(i);return isNaN(n)?i:new Date(n)}}return null},yt=(t,e)=>{var i;const s=(null==e?void 0:e.localize("state.default.unknown"))||"Unknown";let n;if(void 0!==t.value_override)return t.value_override;const r=null==e?void 0:e.states[t.entity];if(!r)return s;if(t.attribute)n=r.attributes[t.attribute],null==n&&(it(`Attribute "${t.attribute}" doesn't exist on "${t.entity}" entity`),n=s);else{const t=[r.attributes.battery_level,r.attributes.battery,r.state];n=(null===(i=t.find(t=>null!=t))||void 0===i?void 0:i.toString())||s}if(t.state_map){const e=t.state_map.find(t=>t.from===n);void 0===e?nt(n)||it(`Missing option for '${n}' in 'state_map'`):n=e.to.toString()}if(!nt(n)){const t=ut.exec(n);null!=t&&(n=t[1])}return t.multiplier&&nt(n)&&(n=(t.multiplier*Number(n)).toString()),nt(n)||(n=n.charAt(0).toUpperCase()+n.slice(1)),n},mt=(t,e,i,s)=>{var n;if(i&&(null===(n=t.charging_state)||void 0===n?void 0:n.icon))return t.charging_state.icon;if(t.icon){const e="attribute.";if(s&&t.icon.startsWith(e)){const i=t.icon.substr(e.length),n=s.states[t.entity].attributes[i];return n||(it(`Icon attribute missing in '${t.entity}' entity`,"error"),t.icon)}return t.icon}if(isNaN(e)||e>100||e<0)return"mdi:battery-unknown";const r=10*Math.round(e/10);switch(r){case 100:return i?"mdi:battery-charging-100":"mdi:battery";case 0:return i?"mdi:battery-charging-outline":"mdi:battery-outline";default:return(i?"mdi:battery-charging-":"mdi:battery-")+r}},_t=(t,e,i)=>{var s,n;const r="inherit",o=Number(e);if(i&&(null===(s=t.charging_state)||void 0===s?void 0:s.color))return t.charging_state.color;if(isNaN(o)||o>100||o<0)return r;if(t.color_gradient&&bt(t.color_gradient))return function(t,e){e/=100;const i=t.map((e,i)=>({pct:1/(t.length-1)*i,color:st(e)}));let s=1;for(s=1;s<i.length-1&&!(e<i[s].pct);s++);const n=i[s-1],r=i[s],o=r.pct-n.pct,a=(e-n.pct)/o,l=1-a,c=a,h={r:Math.floor(n.color.r*l+r.color.r*c),g:Math.floor(n.color.g*l+r.color.g*c),b:Math.floor(n.color.b*l+r.color.b*c)};return"rgb("+[h.r,h.g,h.b].join(",")+")"}(t.color_gradient,o);return(null===(n=(t.color_thresholds||[{value:20,color:"var(--label-badge-red)"},{value:55,color:"var(--label-badge-yellow)"},{value:101,color:"var(--label-badge-green)"}]).find(t=>o<=t.value))||void 0===n?void 0:n.color)||r},$t=(t,e,i)=>{const s=t.charging_state;if(!s||!i)return!1;let n=i.states[t.entity];if(s.entity_id){if(n=i.states[s.entity_id],!n)return it(`'charging_state' entity id (${s.entity_id}) not found`),!1;e=n.state}const r=rt(s.attribute);if(0!=r.length){const t=r.find(t=>null!=n.attributes[t.name]);return!!t&&(null==t.value||n.attributes[t.name]==t.value)}const o=rt(s.state);return 0==o.length?!!e:o.some(t=>t==e)},bt=t=>{if(!(t.length<2)){for(const e of t)if(!pt.test(e))return it("Color '${color}' is not valid. Please provide valid HTML hex color in #XXXXXX format."),!1;return!0}it("Value for 'color_gradient' should be an array with at least 2 colors.")},At=t=>{return T`<ha-card>${e=t.header,e&&T`<div class="card-header"><div class="truncate">${e}</div></div>`}<div class="card-content">${t.list.map(e=>Et(t.batteries[e]))} ${t.groups.map(e=>((t,e)=>(Math.random().toString().substr(2),T`<div class="expandWrapper entity-spacing"><div class="toggler" @click="${t=>t.currentTarget.classList.toggle("expanded")}">${at(t.icon,t.iconColor)}<div class="name truncate">${t.title} ${ot(t.secondaryInfo)}</div><div class="chevron">‹</div></div><div style="max-height:${50*Object.keys(e).length}">${t.batteryIds.map(t=>Et(e[t]))}</div></div>`))(e,t.batteries))}</div></ha-card>`;var e},Et=t=>T`<div class="entity-spacing">${t}</div>`,xt=["tap_action","state_map","charging_state","secondary_info","color_thresholds","color_gradient","bulk_rename","icon"],wt=/\/([^/]+)\/([igmsuy]*)/,St={exists:t=>void 0!==t,contains:(t,e)=>void 0!==t&&-1!=t.toString().indexOf(e.toString()),"=":(t,e)=>t==e,">":(t,e)=>Number(t)>e,"<":(t,e)=>Number(t)<e,">=":(t,e)=>Number(t)>=e,"<=":(t,e)=>Number(t)<=e,matches:(t,e)=>{if(void 0===t)return!1;let i;const s=(e=e.toString()).match(wt);return s?i=new RegExp(s[1],s[2]):-1!=e.indexOf("*")&&(i=new RegExp("^"+e.replace(/\*/g,".*")+"$")),i?i.test(t.toString()):t===e}};class Nt{constructor(t){this.config=t}get is_permanent(){return"state"!=this.config.name}isValid(t,e){const i=this.getValue(t,e);return this.meetsExpectations(i)}getValue(t,e){if(this.config.name)return 0==this.config.name.indexOf("attributes.")?t.attributes[this.config.name.substr(11)]:"state"==this.config.name&&void 0!==e?e:t[this.config.name];it("Missing filter 'name' property")}meetsExpectations(t){let e=this.config.operator;if(!e)if(void 0===this.config.value)e="exists";else{const t=this.config.value.toString();e=-1!=t.indexOf("*")||"/"==t[0]&&"/"==t[t.length-1]?"matches":"="}const i=St[e];return i?i(t,this.config.value):(it(`Operator '${this.config.operator}' not supported. Supported operators: ${Object.keys(St).join(", ")}`),!1)}}class Ct{constructor(t){var e,i,s,n;this.config=t,this.batteries={},this.groupsToResolve=[],this.groupsData={},this.initialized=!1,this.include=null===(i=null===(e=t.filter)||void 0===e?void 0:e.include)||void 0===i?void 0:i.map(t=>new Nt(t)),this.exclude=null===(n=null===(s=t.filter)||void 0===s?void 0:s.exclude)||void 0===n?void 0:n.map(t=>new Nt(t)),this.include||(this.initialized=!1),this.processExplicitEntities()}update(t){return e(this,void 0,void 0,(function*(){this.initialized||(this.initialized=!0,this.processGroupEntities(t),this.processIncludes(t)),this.processExcludes(t);const e=Object.keys(this.batteries).map(e=>{const i=this.batteries[e];return i.hass=t,i.cardUpdated});yield Promise.all(e)}))}getBatteries(){return this.batteries}createBattery(t){xt.filter(e=>null==t[e]).forEach(e=>t[e]=this.config[e]);const e=new gt;return e.entityId=t.entity,e.setConfig(t),e}processExplicitEntities(){let t=(this.config.entities||[]).map(t=>("string"==typeof t&&(t={entity:t}),t));t=t.filter(t=>{if(!t.entity)throw new Error("Invalid configuration - missing property 'entity' on:\n"+JSON.stringify(t));return!t.entity.startsWith("group.")||(this.groupsToResolve.push(t.entity),!1)}),this.config.collapse&&Array.isArray(this.config.collapse)&&this.config.collapse.forEach(e=>{e.group_id?-1==this.groupsToResolve.indexOf(e.group_id)&&this.groupsToResolve.push(e.group_id):e.entities&&e.entities.forEach(e=>{t.some(t=>t.entity==e)||t.push({entity:e})})}),t.forEach(t=>{this.batteries[t.entity]=this.createBattery(t)})}processIncludes(t){this.include&&Object.keys(t.states).forEach(e=>{var i;(null===(i=this.include)||void 0===i?void 0:i.some(i=>i.isValid(t.states[e])))&&!this.batteries[e]&&(this.batteries[e]=this.createBattery({entity:e}))})}processGroupEntities(t){this.groupsToResolve.forEach(e=>{const i=t.states[e];if(!i)return void it(`Group "${e}" not found`);const s=i.attributes;Array.isArray(s.entity_id)?(s.entity_id.forEach(t=>{this.batteries[t]||(this.batteries[t]=this.createBattery({entity:t}))}),this.groupsData[e]=s):it(`Entities not found in "${e}"`)}),this.groupsToResolve=[]}processExcludes(t){if(null==this.exclude)return;const e=this.exclude,i=[];Object.keys(this.batteries).forEach(s=>{const n=this.batteries[s];let r=!1;for(let o of e)if(o.isValid(t.states[s],n.state)){if(o.is_permanent){i.push(s);break}r=!0}n.isHidden=r}),i.forEach(t=>delete this.batteries[t])}}const Ut=(t,e,i)=>t.findIndex(t=>{var s,n;if(t.group_id&&!(null===(n=null===(s=i[t.group_id])||void 0===s?void 0:s.entity_id)||void 0===n?void 0:n.some(t=>e.entityId==t)))return!1;if(t.entities&&!t.entities.some(t=>e.entityId==t))return!1;const r=isNaN(Number(e.state))?0:Number(e.state);return r>=t.min&&r<=t.max});var Pt=t=>t.forEach(t=>{null==t.min&&(t.min=0),null!=t.max&&t.max<t.min?it("Collapse group min value should be lower than max.\n"+JSON.stringify(t,null,2)):null==t.max&&(t.max=100)});const kt=(t,e,i)=>{if((null==i?void 0:i.group_id)&&!t[i.group_id])throw new Error("Group not found: "+i.group_id);let s=null==i?void 0:i.name;!s&&(null==i?void 0:i.group_id)&&(s=t[i.group_id].friendly_name);let n=null==i?void 0:i.icon;return void 0===n&&(null==i?void 0:i.group_id)&&(n=t[i.group_id].icon),{title:s,icon:n,iconColor:null==i?void 0:i.icon_color,batteryIds:e,secondaryInfo:null==i?void 0:i.secondary_info}},Ot=(t,e,i)=>t=t.replace(/\{[a-z]+\}/g,t=>{switch(t){case"{min}":return e.batteryIds.reduce((t,e)=>t>Number(i[e].state)?Number(i[e].state):t,100).toString();case"{max}":return e.batteryIds.reduce((t,e)=>t<Number(i[e].state)?Number(i[e].state):t,0).toString();case"{count}":return e.batteryIds.length.toString();case"{range}":const s=e.batteryIds.reduce((t,e)=>t>Number(i[e].state)?Number(i[e].state):t,100).toString(),n=e.batteryIds.reduce((t,e)=>t<Number(i[e].state)?Number(i[e].state):t,0).toString();return s==n?s:s+"-"+n;default:return t}}),Tt=(t,e,i)=>{switch(t){case"first":t=e.length>0?i[e[0]].icon:void 0;break;case"last":if(e.length>0){t=i[e[e.length-1]].icon}else t=void 0}return t},It=(t,e,i)=>{switch(t){case"first":t=e.length>0?i[e[0]].iconColor:void 0;break;case"last":if(e.length>0){t=i[e[e.length-1]].iconColor}else t=void 0}return t};class Rt extends ct{constructor(){super(...arguments),this.list=[],this.groups=[],this.batteries={}}static get styles(){return o([ht+".entity-spacing {\n    margin: 8px 0;\n}\n\n.entity-spacing:first-child {\n    margin-top: 0;\n}\n\n.entity-spacing:last-child {\n    margin-bottom: 0;\n}\n\n.expandWrapper > .toggler {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.expandWrapper > .toggler > .name {\n    flex: 1;\n}\n.expandWrapper > .toggler div.chevron {\n    transform: rotate(-90deg);\n    font-size: 26px;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.expandWrapper > .toggler .chevron,\n.expandWrapper > .toggler + div {\n    transition: all 0.5s ease;\n}\n.expandWrapper > .toggler.expanded .chevron {\n    transform: rotate(-90deg) scaleX(-1);\n}\n.expandWrapper > .toggler + div {\n    overflow: hidden;\n}\n.expandWrapper > .toggler:not(.expanded) + div {\n    max-height: 0 !important;\n}"])}internalUpdate(t,i){return e(this,void 0,void 0,(function*(){(null==this.batteryProvider||t)&&(this.batteryProvider=new Ct(this.config)),i&&(yield this.batteryProvider.update(this.hass)),this.header=this.config.title,this.batteries=this.batteryProvider.getBatteries();const e=Ht(this.config,this.batteries).filter(t=>!this.batteries[t].isHidden),s=((t,e,i,s)=>{const n={list:[],groups:[]};if(!i)return n.list=e,n;if("number"==typeof i){n.list=e.slice(0,i);const t=e.slice(i);t.length>0&&n.groups.push(kt(s,t))}else Pt(i),e.forEach(e=>{const r=Ut(i,t[e],s);-1==r?n.list.push(e):(n.groups[r]=n.groups[r]||kt(s,[],i[r]),n.groups[r].batteryIds.push(e))});return n.groups.forEach(e=>{e.title&&(e.title=Ot(e.title,e,t)),e.secondaryInfo&&(e.secondaryInfo=Ot(e.secondaryInfo,e,t)),e.icon=Tt(e.icon,e.batteryIds,t),e.iconColor=It(e.iconColor,e.batteryIds,t)}),n})(this.batteries,e,this.config.collapse,this.batteryProvider.groupsData);JSON.stringify(s.list)!=JSON.stringify(this.list)&&(this.list=s.list),JSON.stringify(s.groups)!=JSON.stringify(this.groups)&&(this.groups=s.groups)}))}render(){return At(this)}getCardSize(){var t;let e=(null===(t=this.config.entities)||void 0===t?void 0:t.length)||1;return this.config.collapse?"number"==typeof this.config.collapse?this.config.collapse+1:this.config.collapse.length+1:e+1}}t([et({attribute:!1})],Rt.prototype,"header",void 0),t([et({attribute:!1})],Rt.prototype,"list",void 0),t([et({attribute:!1})],Rt.prototype,"groups",void 0);const Ht=(t,e)=>{let i=Object.keys(e).map(t=>e[t]);switch(t.sort_by_level){case"asc":i=i.sort((t,e)=>Mt(t.state,e.state));break;case"desc":i=i.sort((t,e)=>Mt(e.state,t.state))}return i.map(t=>t.entityId)},Mt=(t,e)=>{let i=Number(t),s=Number(e);return i=isNaN(i)?-1:i,s=isNaN(s)?-1:s,i-s};customElements.define("battery-state-entity",gt),customElements.define("battery-state-card",Rt)}();
//# sourceMappingURL=battery-state-card.js.map
