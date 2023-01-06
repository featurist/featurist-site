/*! For license information please see 66b43beccbd545c16fa70820b4ef1170ee692d43-515671628383f2d6342f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/v66":function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},"0rpx":function(n,e,t){"use strict";var l=t("4v99");n.exports=function(n,e){return l(n,e.toLowerCase())}},"1nHS":function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e,t){this.property=n,this.normal=e,t&&(this.space=t)}l.space=null,l.normal={},l.property={}},"2dtT":function(n,e,t){"use strict";var l=t("Cjod"),o=t("RdQs");n.exports=function(n){var e=n||{},t=e.createElement,a=e.Fragment,i=e.components||{};function u(n,e,l){var o=r.call(i,n)?i[n]:n;return t(o,e,l)}this.Compiler=function(n){var r=l(u,o(n),e.prefix);return"root"===n.type?(r="div"!==r.type||1===n.children.length&&"element"===n.children[0].type?[r]:r.props.children,t(a||"div",{},r)):r}};var r={}.hasOwnProperty},"2qIq":function(n,e,t){"use strict";var l=t("h5Sy"),o=t("N8K4"),r=t("LyDg"),a=t("Wb05"),i=t("I7gA"),u=t("sU6V");n.exports=l([r,o,a,i,u])},"4v99":function(n,e,t){"use strict";n.exports=function(n,e){return e in n?n[e]:e}},"6B/p":function(n,e,t){"use strict";var l=t("i/jK"),o=t("RH6O"),r=t("JjqA");n.exports=function(n,e){var t=l(e),p=e,f=r;if(t in n.normal)return n.property[n.normal[t]];t.length>4&&"data"===t.slice(0,4)&&a.test(e)&&("-"===e.charAt(4)?p=function(n){var e=n.slice(5).replace(i,c);return"data"+e.charAt(0).toUpperCase()+e.slice(1)}(e):e=function(n){var e=n.slice(4);if(i.test(e))return n;"-"!==(e=e.replace(u,s)).charAt(0)&&(e="-"+e);return"data"+e}(e),f=o);return new f(p,e)};var a=/^data[-\w.:]+$/i,i=/-[a-z]/g,u=/[A-Z]/g;function s(n){return"-"+n.toLowerCase()}function c(n){return n.charAt(1).toUpperCase()}},"9phv":function(n,e,t){"use strict";var l=t("i/jK"),o=t("1nHS"),r=t("RH6O");n.exports=function(n){var e,t,a=n.space,i=n.mustUseProperty||[],u=n.attributes||{},s=n.properties,c=n.transform,p={},f={};for(e in s)t=new r(e,c(u,e),s[e],a),-1!==i.indexOf(e)&&(t.mustUseProperty=!0),p[e]=t,f[l(e)]=e,f[l(t.attribute)]=e;return new o(p,f,a)}},CC3I:function(n,e,t){var l=t("Lc7W");n.exports=function(n,e){var t,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=l(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(t=i[s]).property,a=t.value,u?e(r,a,t):a&&(o||(o={}),o[r]=a);return o}},Cjod:function(n,e,t){"use strict";var l=t("ZQof"),o=t("2qIq"),r=t("6B/p"),a=t("W+Vs"),i=t("TTG4"),u=t("vfP8"),s=t("CC3I"),c=t("qrWY"),p=t("/v66"),f=p("root"),d=p("element"),g=p("text"),h=/-([a-z])/g;function m(n,e,t,l){var o,s=l.hyperscript||l.vdom||l.vue,c=l.schema,p=r(c,e);null==t||t!=t||s&&!1===t||s&&p.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(p.commaSeparated?u:i).stringify(t)),p.boolean&&!0===l.hyperscript&&(t=""),l.vue?"style"!==e&&(o="attrs"):p.mustUseProperty||(!0===l.vdom?o="attributes":!0===l.hyperscript&&(o="attrs")),o?(void 0===n[o]&&(n[o]={}),n[o][p.attribute]=t):l.react&&p.space?n[a[p.property]||p.property]=t:n[p.attribute]=t)}function v(n){return Boolean(n&&n.context&&n.cleanup)}function y(n,e){return e.toUpperCase()}n.exports=function(n,e,t){var r,a,i,u,p=t||{};if("function"!=typeof n)throw new Error("h is not a function");"string"==typeof p||"boolean"==typeof p?(r=p,p={}):r=p.prefix;a=function(n){var e=n&&n("div");return Boolean(e&&("_owner"in e||"_store"in e)&&null===e.key)}(n),i=function(n){var e=n&&n("div");return Boolean(e&&e.context&&e.context._isVue)}(n),u=function(n){return n&&"VirtualNode"===n("div").type}(n),null==r&&(r=(!0===a||!0===i||!0===u)&&"h-");if(f(e))e=1===e.children.length&&d(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else if(!d(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");return function n(e,t,l){var r,a,i,u,p,f,v,x,b,k=l.schema,w=k,S=t.tagName;"html"===k.space&&"svg"===S.toLowerCase()&&(w=o,l.schema=w);!0===l.vdom&&"html"===w.space&&(S=S.toUpperCase());for(u in r=t.properties,a={},r)m(a,u,r[u],l);"string"!=typeof a.style||!0!==l.vdom&&!0!==l.vue&&!0!==l.react||(a.style=function(n,e){var t={};try{s(n,(function(n,e){t[function(n){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4));return n.replace(h,y)}(n)]=e}))}catch(l){throw l.message=e+"[style]"+l.message.slice("undefined".length),l}return t}(a.style,S));l.prefix&&(l.key++,a.key=l.prefix+l.key);l.vdom&&"html"!==w.space&&(a.namespace=c[w.space]);p=[],i=t.children,f=i?i.length:0,v=-1;for(;++v<f;)x=i[v],d(x)?p.push(n(e,x,l)):g(x)&&p.push(x.value);return b=0===p.length?e(S,a):e(S,a,p),l.schema=k,b}(n,e,{schema:"svg"===p.space?o:l,prefix:r,key:0,react:a,vue:i,vdom:u,hyperscript:v(n)})}},HHef:function(n,e,t){"use strict";var l=t("vOnD"),o=t("HLwU"),r=t("PZ6k"),a=Object(l.b)(["width:350px;"]);e.a=Object(l.c)(o.a).withConfig({displayName:"MarkdownContainer",componentId:"sc-1s12zg4-0"})(["> div{",";> *{max-width:740px;margin:0 auto;}h2,h3,h4{"," ",";font-weight:bold;}h2{font-size:30px;}h3{font-size:24px;}p,ul,li{","}p,ul{",";",";}h2,h3,h4,p,li{",";",';}img{max-width:100%;}pre[class*="language-"]{margin-top:0;}@media (min-width:992px){.float-right{'," float:right;margin-right:-120px;margin-left:30px;}}.highlight{display:block;",";margin:40px auto;max-width:450px;font-size:24px;font-style:italic;text-align:center;}@media (min-width:992px){.float-left{",' float:left;margin-right:30px;margin-left:-120px;}}.image-frame{display:block;text-align:center;margin-top:30px;margin-bottom:30px;.image-frame-caption{color:grey;}}.gif_player{display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;cursor:pointer;&.playing .play_button{transform:translate(-50%,-50%) scale(0) rotate(180deg);opacity:0.5;}img{max-width:100%;}&:hover .play_button{background-color:rgba(0,0,0,0.7);box-shadow:0 0 0 3px rgba(0,0,0,0.7);}.play_button{background-color:rgba(0,0,0,0.5);border-radius:50%;box-shadow:0 0 0 3px rgba(0,0,0,0.5);color:#fff;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:48px;text-align:center;vertical-align:text-bottom;line-height:85px;left:50%;opacity:1;padding:1px 0 0px 8px;width:85px;height:85px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) scale(1) rotate(0deg);transform:translate(-50%,-50%) scale(1) rotate(0deg);-webkit-transition:opacity 0.4s,-webkit-transform 0.4s;transition:opacity 0.4s,-webkit-transform 0.4s;transition:transform 0.4s,opacity 0.4s;transition:transform 0.4s,opacity 0.4s,-webkit-transform 0.4s;&::after{content:"▶";}}}table{border-collapse:collapse;border:1px solid black;margin-top:40px;margin-bottom:40px;p{margin-top:0;margin-bottom:0;}tr:hover{background-color:#efefef;}th,td{border-right:1px solid black;border-left:1px solid black;padding:12px;}}hr{margin-top:60px;margin-bottom:40px;}blockquote{',";",';text-shadow:0 2px 10px rgba(0,0,0,0.1);padding-left:24px;border-left:0.25rem solid var(--theme-ui-colors-standardLine,#f0f0f2);p{font-style:italic;}}.gatsby-code-title{background-color:#e6e5e3;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:right;padding:10px;}.gatsby-highlight{margin-bottom:2rem;}}'],{paddingTop:"3rem",paddingBottom:"3rem",color:"#222b2f",fontFamily:'"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},r.f,{marginTop:"1rem",marginBottom:"1rem"},r.l,{marginTop:"1.5rem"},{marginBottom:"1.5rem"},{color:"#2f392e"},{textAlign:"left"},a,{color:"#ff2668"},a,r.p,{marginBottom:"2rem",marginTop:"2rem",position:"relative",display:"block"})},I7gA:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=l.booleanish,a=l.number,i=l.spaceSeparated;n.exports=o({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:r,ariaAutoComplete:null,ariaBusy:r,ariaChecked:r,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:r,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:r,ariaFlowTo:i,ariaGrabbed:r,ariaHasPopup:null,ariaHidden:r,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:a,ariaLive:null,ariaModal:r,ariaMultiLine:r,ariaMultiSelectable:r,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:r,ariaReadOnly:r,ariaRelevant:null,ariaRequired:r,ariaRoleDescription:i,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:r,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},JjqA:function(n,e,t){"use strict";n.exports=o;var l=o.prototype;function o(n,e){this.property=n,this.attribute=e}l.space=null,l.attribute=null,l.property=null,l.boolean=!1,l.booleanish=!1,l.overloadedBoolean=!1,l.number=!1,l.commaSeparated=!1,l.spaceSeparated=!1,l.commaOrSpaceSeparated=!1,l.mustUseProperty=!1,l.defined=!1},Lc7W:function(n,e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,l=/\n/g,o=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g;function c(n){return n?n.replace(s,""):""}n.exports=function(n,e){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var s=1,p=1;function f(n){var e=n.match(l);e&&(s+=e.length);var t=n.lastIndexOf("\n");p=~t?n.length-t:p+n.length}function d(){var n={line:s,column:p};return function(e){return e.position=new g(n),y(),e}}function g(n){this.start=n,this.end={line:s,column:p},this.source=e.source}g.prototype.content=n;var h=[];function m(t){var l=new Error(e.source+":"+s+":"+p+": "+t);if(l.reason=t,l.filename=e.source,l.line=s,l.column=p,l.source=n,!e.silent)throw l;h.push(l)}function v(e){var t=e.exec(n);if(t){var l=t[0];return f(l),n=n.slice(l.length),t}}function y(){v(o)}function x(n){var e;for(n=n||[];e=b();)!1!==e&&n.push(e);return n}function b(){var e=d();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var t=2;""!=n.charAt(t)&&("*"!=n.charAt(t)||"/"!=n.charAt(t+1));)++t;if(t+=2,""===n.charAt(t-1))return m("End of comment missing");var l=n.slice(2,t-2);return p+=2,f(l),n=n.slice(t),p+=2,e({type:"comment",comment:l})}}function k(){var n=d(),e=v(r);if(e){if(b(),!v(a))return m("property missing ':'");var l=v(i),o=n({type:"declaration",property:c(e[0].replace(t,"")),value:l?c(l[0].replace(t,"")):""});return v(u),o}}return y(),function(){var n,e=[];for(x(e);n=k();)!1!==n&&(e.push(n),x(e));return e}()}},LyDg:function(n,e,t){"use strict";var l=t("9phv");n.exports=l({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},N8K4:function(n,e,t){"use strict";var l=t("9phv");n.exports=l({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},PANp:function(n,e,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("2dtT"),a=t.n(r),i="undefined"!=typeof window?t("YdTI"):void 0,u={};i&&(u["gif-player"]=i),e.a=new a.a({createElement:o.a.createElement,components:u}).Compiler},RH6O:function(n,e,t){"use strict";var l=t("JjqA"),o=t("Yup2");n.exports=i,i.prototype=new l,i.prototype.defined=!0;var r=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=r.length;function i(n,e,t,i){var s,c=-1;for(u(this,"space",i),l.call(this,n,e);++c<a;)u(this,s=r[c],(t&o[s])===o[s])}function u(n,e,t){t&&(n[e]=t)}},RdQs:function(n,e,t){"use strict";var l=t("ZkSf"),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,t){var l=(n.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var o=l+e+": "+t+";";n.properties.style=o}n.exports=function(n){return l(n,"element",a),n}},TTG4:function(n,e,t){"use strict";e.parse=function(n){var e=String(n||"").trim();return""===e?[]:e.split(l)},e.stringify=function(n){return n.join(" ").trim()};var l=/[ \t\n\r\f]+/g},U6jy:function(n,e){n.exports=function(){for(var n={},e=0;e<arguments.length;e++){var l=arguments[e];for(var o in l)t.call(l,o)&&(n[o]=l[o])}return n};var t=Object.prototype.hasOwnProperty},"W+Vs":function(n){n.exports=JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')},Wb05:function(n,e,t){"use strict";var l=t("9phv"),o=t("0rpx");n.exports=l({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o,properties:{xmlns:null,xmlnsXLink:null}})},YdTI:function(n,e,t){var l;window,l=function(n,e){return function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,function(e){return n[e]}.bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=5)}([function(e,t){e.exports=n},function(n,t){n.exports=e},function(n,e,t){"use strict";function l(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=n&&this.setState(n)}function o(n){var e=this.constructor.getDerivedStateFromProps(n,this.state);null!=e&&this.setState(e)}l.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,n.exports=function(n){if(!n.prototype||!n.prototype.isReactComponent)throw new Error("Can only polyfill class components");if("function"==typeof n.getDerivedStateFromProps){if("function"==typeof n.prototype.componentWillMount)throw new Error("Cannot polyfill if componentWillMount already exists");if("function"==typeof n.prototype.componentWillReceiveProps)throw new Error("Cannot polyfill if componentWillReceiveProps already exists");n.prototype.componentWillMount=l,n.prototype.componentWillReceiveProps=o}return n}},function(n,e,t){var l;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var l=arguments[e];if(l){var r=typeof l;if("string"===r||"number"===r)n.push(l);else if(Array.isArray(l))n.push(o.apply(null,l));else if("object"===r)for(var a in l)t.call(l,a)&&l[a]&&n.push(a)}}return n.join(" ")}n.exports?n.exports=o:void 0===(l=function(){return o}.apply(e,[]))||(n.exports=l)}()},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var l=t(1),o=t.n(l),r=t(0),a=t.n(r),i=t(2),u=t.n(i),s=t(3),c=t.n(s);function p(){return(p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n}).apply(this,arguments)}t(4);var f=function(n){var e=n.gif,t=n.still,l=n.playing,r=n.toggle,a=function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,["gif","still","playing","toggle"]);return o.a.createElement("div",{className:c()("gif_player",{playing:l}),onClick:r},o.a.createElement("div",{className:"play_button"}),o.a.createElement("img",p({},a,{src:l?e||t:t||e})))};f.propTypes={gif:a.a.string,still:a.a.string,playing:a.a.bool,toggle:a.a.func};var d=f;function g(){return(g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n}).apply(this,arguments)}var h=function(n){var e,t;function l(e){var t;return(t=n.call(this,e)||this).state={playing:Boolean(e.autoplay),providedGif:e.gif,providedStill:e.still,actualGif:e.gif,actualStill:e.still},t.updateId=-1,t}t=n,(e=l).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,l.getDerivedStateFromProps=function(n,e){var t=e.providedGif,l=n.gif,o=e.providedStill,r=n.still;return t===l&&o===r?null:{playing:!(!l||!n.autoplay||t===l)||e.playing,providedGif:l,providedStill:r,actualGif:l,actualStill:r||t!==l?r:e.actualStill}};var r=l.prototype;return r.componentDidMount=function(){var n=this;"function"==typeof this.props.pauseRef&&this.props.pauseRef((function(){return n.setState({playing:!1})})),this.updateImages()},r.componentDidUpdate=function(n,e){this.updateImages(e);var t=this.props.onTogglePlay;e.playing!==this.state.playing&&"function"==typeof t&&t(this.state.playing)},r.updateImages=function(n){var e=this;void 0===n&&(n={});var t=this.state,l=t.providedGif,o=t.providedStill;if(l&&!o&&l!==n.providedGif){var r=++this.updateId;!function(n,e){var t=new Image;"function"==typeof e&&(t.onload=function(){return e(t)},t.setAttribute("crossOrigin","anonymous")),t.src=n}(l,(function(n){if(e.updateId===r){var t=function(n){var e=document.createElement("canvas");return"function"!=typeof e.getContext?null:(e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0),e.toDataURL())}(n);t&&e.setState({actualStill:t})}}))}},r.toggle=function(){this.setState({playing:!this.state.playing})},r.render=function(){var n=this,e=this.props,t=(e.autoplay,e.pauseRef,e.onTogglePlay,function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(e,["autoplay","pauseRef","onTogglePlay"])),l=this.state,r=l.actualGif,a=l.actualStill,i=l.playing;return o.a.createElement(d,g({},t,{gif:r,still:a,playing:i,toggle:function(){return n.toggle()}}))},l}(o.a.Component);u()(h),h.propTypes={gif:a.a.string,still:a.a.string,autoplay:a.a.bool,pauseRef:a.a.func,onTogglePlay:a.a.func},e.default=h}]).default},n.exports=l(t("17x9"),t("q1tI"))},Yup2:function(n,e,t){"use strict";var l=0;function o(){return Math.pow(2,++l)}e.boolean=o(),e.booleanish=o(),e.overloadedBoolean=o(),e.number=o(),e.spaceSeparated=o(),e.commaSeparated=o(),e.commaOrSpaceSeparated=o()},ZQof:function(n,e,t){"use strict";var l=t("h5Sy"),o=t("N8K4"),r=t("LyDg"),a=t("Wb05"),i=t("I7gA"),u=t("afOB");n.exports=l([r,o,a,i,u])},ZkSf:function(n,e,t){"use strict";n.exports=i;var l=t("uzq8"),o=l.CONTINUE,r=l.SKIP,a=l.EXIT;function i(n,e,t,o){"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),l(n,e,(function(n,e){var l=e[e.length-1],o=l?l.children.indexOf(n):null;return t(n,o,l)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},afOB:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=t("0rpx"),a=l.boolean,i=l.overloadedBoolean,u=l.booleanish,s=l.number,c=l.spaceSeparated,p=l.commaSeparated;n.exports=o({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:i,draggable:u,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:a,disableRemotePlayback:a,prefix:null,property:null,results:s,security:null,unselectable:null}})},fivN:function(n,e,t){"use strict";var l=t("q1tI"),o=t.n(l),r=t("vOnD"),a=t("8Afd"),i=t("HD4g"),u=t("PZ6k"),s=r.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-fknkt2-0"})(["",""],{"@media (min-width: 900px)":{display:"flex",justifyContent:"space-between",alignItems:"center"}}),c=Object(r.b)(["",";",";",""],u.r,{marginBottom:"1rem","@media (min-width: 900px)":{marginBottom:"0"}},{textAlign:"center"}),p=r.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-fknkt2-1"})(["",";",""],c,{"@media (min-width: 900px)":{textAlign:"left"}}),f=r.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-fknkt2-2"})(["",";",";"],c,{"@media (min-width: 900px)":{textAlign:"right",marginLeft:"auto"}}),d=r.c.span.withConfig({displayName:"PrevNext__Label",componentId:"sc-fknkt2-3"})(["",""],{"@media (min-width: 900px)":{display:"block",paddingRight:"0"},fontWeight:400,paddingRight:"1rem",color:"#2f392e"}),g=function(n){var e=n.next,t=n.prev,r=Object(l.useState)(!1),u=r[0],c=r[1],g=Object(l.useState)(!1),h=g[0],m=g[1],v={display:"flex",alignItems:"center",justifyContent:"center"};return o.a.createElement(s,null,t&&o.a.createElement(p,{onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)}},o.a.createElement(a.a,{style:v,href:t.fields.slug},o.a.createElement(i.a,{active:u,style:{marginRight:"0.5rem"},icon:"chevronLeft",size:64}),o.a.createElement("div",null,o.a.createElement(d,null,"Previous:"),t.frontmatter.title))),e&&o.a.createElement(f,{onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}},o.a.createElement(a.a,{style:v,href:e.fields.slug},o.a.createElement("div",null,o.a.createElement(d,null,"Next:"),e.frontmatter.title),o.a.createElement(i.a,{active:h,style:{marginLeft:"0.5rem"},icon:"chevronRight",size:64}))))};e.a=g,g.defaultProps={next:null,prev:null}},h5Sy:function(n,e,t){"use strict";var l=t("U6jy"),o=t("1nHS");n.exports=function(n){var e,t,r=n.length,a=[],i=[],u=-1;for(;++u<r;)e=n[u],a.push(e.property),i.push(e.normal),t=e.space;return new o(l.apply(null,a),l.apply(null,i),t)}},"i/jK":function(n,e,t){"use strict";n.exports=function(n){return n.toLowerCase()}},mFtL:function(n,e,t){"use strict";function l(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var t;for(t in n)if(e[t]!==n[t])return!1;return!0}}function r(n){var e=function(n){for(var e=[],t=n.length,o=-1;++o<t;)e[o]=l(n[o]);return e}(n),t=e.length;return function(){var n=-1;for(;++n<t;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=l},qrWY:function(n){n.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},sU6V:function(n,e,t){"use strict";var l=t("Yup2"),o=t("9phv"),r=t("4v99"),a=l.boolean,i=l.number,u=l.spaceSeparated,s=l.commaSeparated,c=l.commaOrSpaceSeparated;n.exports=o({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r,properties:{about:c,accentHeight:i,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i,amplitude:i,arabicForm:null,ascent:i,attributeName:null,attributeType:null,azimuth:i,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i,by:null,calcMode:null,capHeight:i,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i,diffuseConstant:i,direction:null,display:null,dur:null,divisor:i,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:i,enableBackground:null,end:null,event:null,exponent:i,externalResourcesRequired:null,fill:null,fillOpacity:i,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i,horizOriginX:i,horizOriginY:i,id:null,ideographic:i,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i,k:i,k1:i,k2:i,k3:i,k4:i,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i,overlineThickness:i,paintOrder:null,panose1:null,path:null,pathLength:i,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:u,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i,pointsAtY:i,pointsAtZ:i,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i,specularExponent:i,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i,strikethroughThickness:i,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i,strokeOpacity:i,strokeWidth:null,style:null,surfaceScale:i,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:i,tableValues:null,target:null,targetX:i,targetY:i,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:i,underlineThickness:i,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i,values:null,vAlphabetic:i,vMathematical:i,vectorEffect:null,vHanging:i,vIdeographic:i,version:null,vertAdvY:i,vertOriginX:i,vertOriginY:i,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},uzq8:function(n,e,t){"use strict";n.exports=o;var l=t("mFtL");function o(n,e,t,o){var a;function i(n,l,u){var s,c=[];return(e&&!a(n,l,u[u.length-1]||null)||!1!==(c=r(t(n,u)))[0])&&n.children&&"skip"!==c[0]&&!1===(s=r(function(n,e){var t,l=o?-1:1,r=(o?n.length:-1)+l;for(;r>-1&&r<n.length;){if(!1===(t=i(n[r],r,e))[0])return t;r="number"==typeof t[1]?t[1]:r+l}}(n.children,u.concat(n))))[0]?s:c}"function"==typeof e&&"function"!=typeof t&&(o=t,t=e,e=null),a=l(e),i(n,null,[])}function r(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[!0,n]:[n]}o.CONTINUE=!0,o.SKIP="skip",o.EXIT=!1},vfP8:function(n,e,t){"use strict";e.parse=function(n){var e,t=[],l=String(n||""),o=l.indexOf(","),r=0,a=!1;for(;!a;)-1===o&&(o=l.length,a=!0),!(e=l.slice(r,o).trim())&&a||t.push(e),r=o+1,o=l.indexOf(",",r);return t},e.stringify=function(n,e){var t=e||{},l=!1===t.padLeft?"":" ",o=t.padRight?" ":"";""===n[n.length-1]&&(n=n.concat(""));return n.join(o+","+l).trim()}}}]);
//# sourceMappingURL=66b43beccbd545c16fa70820b4ef1170ee692d43-515671628383f2d6342f.js.map