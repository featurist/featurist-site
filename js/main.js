!function(){var e=document.querySelector(".SiteHeader");new Headroom(e,{classes:{initial:"SiteHeader",pinned:"is-pinned",unpinned:"is-unpinned",top:"is-top",notTop:"is-notTop",bottom:"is-bottom",notBottom:"is-notBottom"},onTop:function(){document.body.style.paddingTop="0"},onNotTop:function(){document.body.style.paddingTop=e.offsetHeight+"px"}}).init(),window.matchMedia("(min-width: 768px)").matches&&document.addEventListener("DOMContentLoaded",function(){new ScrollTrigger});var o=document.querySelector(".js-page-jump");if(o){var t=o.hash.substring(1),n=document.getElementById(t);o.onclick=function(o){o.preventDefault(),n.scrollIntoView({behavior:"smooth"});var t=window.scrollY;t&&window.scroll(0,t-e.offsetHeight)}}lozad(".js-lazyload").observe()}();