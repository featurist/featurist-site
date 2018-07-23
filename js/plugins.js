!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.ScrollTrigger=e()}(this,function(){"use strict";return function(n,t,e){var i=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n,i,l,s,o,r,a,c,d,h,f=0,u=0;this.left=(n=this,function(){return n.element.getBoundingClientRect().left}),this.top=(i=this,function(){return i.element.getBoundingClientRect().top}),this.xOffset=(l=this,function(t){var e=f;return l.addWidth&&!t?e+=l.width():t&&!l.addWidth&&(e-=l.width()),e}),this.yOffset=(s=this,function(t){var e=u;return s.addHeight&&!t?e+=s.height():t&&!s.addHeight&&(e-=s.height()),e}),this.width=(o=this,function(){return o.element.offsetWidth}),this.height=(r=this,function(){return r.element.offsetHeight}),this.reset=(a=this,function(){a.removeClass(a.visibleClass),a.removeClass(a.hiddenClass)}),this.addClass=(c=this).element.classList?function(t,e){c.element.classList.contains(t)||(c.element.classList.add(t),"function"==typeof e&&e())}:function(t,e){t=t.trim();var n=new RegExp("(?:^|\\s)"+t+"(?:(\\s\\w)|$)","ig"),i=c.element.className;n.test(i)||(c.element.className+=" "+t,"function"==typeof e&&e())},this.removeClass=(d=this).element.classList?function(t,e){d.element.classList.contains(t)&&(d.element.classList.remove(t),"function"==typeof e&&e())}:function(t,e){t=t.trim();var n=new RegExp("(?:^|\\s)"+t+"(?:(\\s\\w)|$)","ig"),i=d.element.className;n.test(i)&&(d.element.className=i.replace(n,"$1").trim(),"function"==typeof e&&e())},this.init=(h=this,function(){var t=h.defaultOptions,e=h.element.getAttribute("data-scroll");t&&(t.toggle&&t.toggle.visible&&(h.visibleClass=t.toggle.visible),t.toggle&&t.toggle.hidden&&(h.hiddenClass=t.toggle.hidden),t.showCallback&&(h.showCallback=t.showCallback),t.hideCallback&&(h.hideCallback=t.hideCallback),!0===t.centerHorizontal&&(f=h.element.offsetWidth/2),!0===t.centerVertical&&(u=h.element.offsetHeight/2),t.offset&&t.offset.x&&(f+=t.offset.x),t.offset&&t.offset.y&&(u+=t.offset.y),t.addWidth&&(h.addWidth=t.addWidth),t.addHeight&&(h.addHeight=t.addHeight),t.once&&(h.once=t.once));var n=-1<e.indexOf("addWidth"),i=-1<e.indexOf("addHeight"),l=-1<e.indexOf("once");!1===h.addWidth&&!0===n&&(h.addWidth=n),!1===h.addHeight&&!0===i&&(h.addHeight=i),!1===h.once&&!0===l&&(h.once=l),h.showCallback=h.element.hasAttribute("data-scroll-showCallback")?h.element.getAttribute("data-scroll-showCallback"):h.showCallback,h.hideCallback=h.element.hasAttribute("data-scroll-hideCallback")?h.element.getAttribute("data-scroll-hideCallback"):h.hideCallback;var s=e.split("toggle(");if(1<s.length){var o=s[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),h.visibleClass=o[0].trim().replace(".",""),h.hiddenClass=o[1].trim().replace(".","")}-1<e.indexOf("centerHorizontal")&&(f=h.element.offsetWidth/2),-1<e.indexOf("centerVertical")&&(u=h.element.offsetHeight/2);var r=e.split("offset(");if(1<r.length){var a=r[1].split(")")[0].split(",");f+=parseInt(a[0].replace("px","")),u+=parseInt(a[1].replace("px",""))}return h})};this.scrollElement=window,this.bindElement=document.body,this.callScope=window;var l,s,o,r,a,c,d,h,f=[],u=[],m={left:-1,top:-1},g=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},p=!1,b=(l=this,function(t,e,n){return l.bindElement=null!=e&&null!=e?e:document.body,l.scrollElement=null!=n&&null!=n?n:window,l.bind(l.bindElement.querySelectorAll("[data-scroll]")),l});this.bind=(s=this,function(t){t instanceof HTMLElement&&(t=[t]);var e=[].slice.call(t);return e=e.map(function(t,e){return new i(n,t).init()}),0<(f=f.concat(e)).length&&0==p?(p=!0,w()):p=!1,s}),this.triggerFor=function(n){var i=null;return f.each(function(t,e){t.element==n&&(i=t)}),i},this.destroy=(o=this,function(n){return f.each(function(t,e){t.element==n&&f.splice(e,1)}),o}),this.destroyAll=(r=this,function(){return f=[],r}),this.reset=(a=this,function(t){var e=a.triggerFor(t);if(null!=e){e.reset();var n=f.indexOf(e);-1<n&&f.splice(n,1)}return a}),this.resetAll=(c=this,function(){return f.each(function(t,e){t.reset()}),f=[],c}),this.attach=(d=this,function(t){return u.push(t),p||(p=!0,w()),d}),this.detach=(h=this,function(t){var e=u.indexOf(t);return-1<e&&u.splice(e,1),h});var v,C=this;function w(){var t=C.bindElement.scrollTop?C.bindElement.scrollTop:document.documentElement.scrollTop,e=C.bindElement.scrollLeft?C.bindElement.scrollLeft:document.documentElement.scrollLeft;m.left==e&&m.top==t||C.scrollDidChange(),0<f.length||0<u.length?(p=!0,g(w)):p=!1}function y(t,e){var n=e.split("("),i=n[0];if(n=(n=1<n.length?-1<(n=n[1].split(")")[0]).indexOf("', '")?n.split("', '"):-1<n.indexOf("','")?n.split("','"):-1<n.indexOf('", "')?n.split('", "'):-1<n.indexOf('","')?n.split('","'):[n]:[]).map(function(t){return function(t){'"'==(t+="")[0]&&(t=t.substr(1));"'"==t[0]&&(t=t.substr(1));'"'==t[t.length-1]&&(t=t.substr(0,t.length-1));"'"==t[t.length-1]&&(t=t.substr(0,t.length-1));return t}(t)}),"function"==typeof C.callScope[i])try{C.callScope[i].apply(t.element,n)}catch(t){try{C.callScope[i].apply(null,n)}catch(t){}}}return this.scrollDidChange=(v=this,function(){var l=v.scrollElement.innerWidth||v.scrollElement.offsetWidth,s=v.scrollElement.innerHeight||v.scrollElement.offsetHeight,o=v.bindElement.scrollTop?v.bindElement.scrollTop:document.documentElement.scrollTop,r=v.bindElement.scrollLeft?v.bindElement.scrollLeft:document.documentElement.scrollLeft,a=[];f.each(function(t,e){var n=t.left(),i=t.top();m.left>r?n-=t.xOffset(!0):m.left<r&&(n+=t.xOffset(!1)),m.top>o?i-=t.yOffset(!0):m.top<o&&(i+=t.yOffset(!1)),n<l&&0<=n&&i<s&&0<=i?(t.addClass(t.visibleClass,function(){t.showCallback&&y(t,t.showCallback)}),t.removeClass(t.hiddenClass),t.once&&a.push(t)):(t.addClass(t.hiddenClass),t.removeClass(t.visibleClass,function(){t.hideCallback&&y(t,t.hideCallback)}))}),u.each(function(t){t.call(v,r,o,l,s)}),a.each(function(t){var e=f.indexOf(t);-1<e&&f.splice(e,1)}),m.left=r,m.top=o}),Array.prototype.each=function(t){for(var e=this.length,n=0;n<e;n++){var i=this[n];i&&t(i,n)}},b(n,t,e)}}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";var d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n=document.documentMode,h={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");n&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.appendChild(e)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')")},loaded:function(){}};function f(t){t.setAttribute("data-loaded",!0)}var u=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var n,i,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=d({},h,t),s=e.rootMargin,o=e.threshold,r=e.load,a=e.loaded,c=void 0;return window.IntersectionObserver&&(c=new IntersectionObserver((n=r,i=a,function(t,e){t.forEach(function(t){0<t.intersectionRatio&&(e.unobserve(t.target),u(t.target)||(n(t.target),f(t.target),i(t.target)))})}),{rootMargin:s,threshold:o})),{observe:function(){for(var t,e=(t=l)instanceof Element?[t]:t instanceof NodeList?t:document.querySelectorAll(t),n=0;n<e.length;n++)u(e[n])||(c?c.observe(e[n]):(r(e[n]),f(e[n]),a(e[n])))},triggerLoad:function(t){u(t)||(r(t),f(t),a(t))}}}});