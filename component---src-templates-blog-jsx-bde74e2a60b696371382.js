(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b}),n.d(t,"pageQuery",function(){return k});var a=n(20),i=n.n(a),o=n(0),r=n.n(o),l=n(190),c=n(284),s=n(202),m=n(198),d=n(209),p=n(199),f=n(191),g=n(200),u=n(193),h=Object(l.c)(f.a).withConfig({displayName:"Blog__SectionWrapper",componentId:"sc-1ypd42m-0"})(["",";h3{","}p{","}blockquote{",";",';text-shadow:0 2px 10px rgba(0,0,0,0.1);&::before{content:"";',";width:40px;height:4px;",";}}"],{paddingTop:"3rem",paddingBottom:"3rem",color:"#222b2f",fontFamily:'"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},u.d,u.i,{marginBottom:"2rem",marginTop:"2rem",marginLeft:"0",marginRight:"0",position:"relative",display:"block"},{fontSize:"1.25rem",fontFamily:'"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:600,lineHeight:"1.5",color:"#70818a"},{display:"block",backgroundColor:"#FF3D78",marginTop:'"-"+0.5rem'},{marginLeft:"auto",marginRight:"auto","@media (min-width: 900px)":{marginLeft:"0"}}),y=Object(l.c)(u.b).withConfig({displayName:"Blog__PageTitle",componentId:"sc-1ypd42m-1"})(["",";"],{marginBottom:"0",opacity:"0"}),v=Object(l.c)(u.h).withConfig({displayName:"Blog__PageSubtitle",componentId:"sc-1ypd42m-2"})(["",";"],{marginTop:"0",opacity:"0"}),E=function(e){var t=e.children,n=i()(e,["children"]).style;return r.a.createElement(f.b,{style:n},r.a.createElement(h,null,r.a.createElement(f.c,null,t)))};function b(e){var t=e.pageContext,n=t.prev,a=t.next,i=e.data.markdownRemark,o=i.frontmatter,l=i.html,f=i.fields,h=o.subtitles?o.subtitles.join(" "):o.title,b={shortname:"featurist-blog",config:{identifier:f.slug,title:o.title}};return r.a.createElement(s.a,null,r.a.createElement(m.a,{title:o.title,keywords:o.keywords||[],description:h}),r.a.createElement(p.a,null,r.a.createElement(g.a,{isDark:!0,isBlog:!0},r.a.createElement(y,null,o.title),r.a.createElement(v,null,"By ",r.a.createElement(u.j,null,o.author)," on"," ",r.a.createElement(u.j,null,o.date))),r.a.createElement(E,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),r.a.createElement(E,{style:{backgroundColor:"#f5f6f4",paddingLeft:"0",paddingRight:"0"}},r.a.createElement(c.DiscussionEmbed,b)),r.a.createElement(E,{style:{backgroundColor:"#ebede8",paddingLeft:"0",paddingRight:"0"}},r.a.createElement(d.a,{prev:n,next:a}))))}var k="2447760417"},192:function(e,t,n){"use strict";n(84),n(64),n(44),n(195);var a=n(0),i=n.n(a),o=n(1),r=n.n(o),l=n(190),c=l.c.svg.withConfig({displayName:"CircleIcon__Wrapper",componentId:"sc-1igkh6j-0"})(["",";width:","px;height:","px;","{stroke-dashoffset:0;}"],{},function(e){return e.size},function(e){return e.size},function(e){return e.active?"& > circle":"&:hover > circle"}),s=l.c.circle.withConfig({displayName:"CircleIcon__Circle",componentId:"sc-1igkh6j-1"})(["stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset 0.35s ease-out;"]),m={chevronLeft:i.a.createElement("path",{d:"M15.249 6l-6.498 6.015L15.249 18"}),chevronRight:i.a.createElement("path",{d:"M8.751 6l6.498 6.015L8.751 18"}),close:i.a.createElement("path",{d:"M6.643 6.643l10.714 10.714M6.643 17.357L17.357 6.643"})},d=function(e){var t=e.icon,n=e.size,a=e.style,o=e.active;return i.a.createElement(c,{viewBox:"0 0 24 24",size:n,style:a,active:o},i.a.createElement(s,{cx:"12",cy:"12",r:"11",fill:"none",stroke:"currentColor",strokeWidth:"0.75"}),i.a.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"0.55"},m[t]))};t.a=d,d.propTypes={icon:r.a.oneOf(Object.keys(m)),size:r.a.number,style:r.a.objectOf(r.a.string),active:r.a.bool},d.defaultProps={icon:"close",size:142,style:{},active:!1}},209:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(1),r=n.n(o),l=n(190),c=n(194),s=n(192),m=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"fknkt2-0"})(["",""],{"@media (min-width: 900px)":{display:"flex",justifyContent:"space-between",alignItems:"center"}}),d=Object(l.b)(["",";",""],{marginBottom:"1rem","@media (min-width: 900px)":{marginBottom:"0"}},{textTransform:"uppercase",fontSize:".875rem",color:"#70818a",textAlign:"center",fontWeight:600}),p=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"fknkt2-1"})(["",";",""],d,{"@media (min-width: 900px)":{textAlign:"left"}}),f=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"fknkt2-2"})(["",";",";"],d,{"@media (min-width: 900px)":{textAlign:"right",marginLeft:"auto"}}),g=l.c.span.withConfig({displayName:"PrevNext__Label",componentId:"fknkt2-3"})(["",""],{"@media (min-width: 900px)":{display:"block",paddingRight:"0"},fontWeight:400,paddingRight:"1rem",color:"#2f392e"}),u=function(e){var t=e.next,n=e.prev,o=Object(a.useState)(!1),r=o[0],l=o[1],d=Object(a.useState)(!1),u=d[0],h=d[1],y={display:"flex",alignItems:"center",justifyContent:"center"};return i.a.createElement(m,null,n&&i.a.createElement(p,{onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)}},i.a.createElement(c.a,{style:y,href:n.fields.slug},i.a.createElement(s.a,{active:r,style:{marginRight:"0.5rem"},icon:"chevronLeft",size:64}),i.a.createElement("div",null,i.a.createElement(g,null,"Previous:"),n.frontmatter.title))),t&&i.a.createElement(f,{onMouseEnter:function(){h(!0)},onMouseLeave:function(){h(!1)}},i.a.createElement(c.a,{style:y,href:t.fields.slug},i.a.createElement("div",null,i.a.createElement(g,null,"Next:"),t.frontmatter.title),i.a.createElement(s.a,{active:u,style:{marginLeft:"0.5rem"},icon:"chevronRight",size:64}))))};t.a=u,u.propTypes={next:r.a.object,prev:r.a.object},u.defaultProps={next:null,prev:null}}}]);
//# sourceMappingURL=component---src-templates-blog-jsx-bde74e2a60b696371382.js.map