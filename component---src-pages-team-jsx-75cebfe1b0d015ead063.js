(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(A,e,t){"use strict";t.r(e);t(86),t(299),t(198);var a=t(20),i=t.n(a),n=t(300),d=t(0),r=t.n(d),s=t(1),c=t.n(s),o=t(186),E=t(83),l=t(191),g=t.n(l),f=t(189),B=t(197),p=t(194),Q=t(195),h=t(187),u=t(196),j=t(192),m=t(188),w=o.c.div.withConfig({displayName:"team__SectionWrapper",componentId:"sc-1v2zf5i-0"})(["",""],{"@media (min-width: 900px)":{display:"flex",flexWrap:"wrap"}}),b=o.c.div.withConfig({displayName:"team__SectionContainer",componentId:"sc-1v2zf5i-1"})(["",""],{"@media (min-width: 900px)":{width:"50%"},"@media (min-width: 1200px)":{width:"33.33333%"},marginBottom:"2rem",textAlign:"center"}),I=Object(o.c)(m.c).withConfig({displayName:"team__SectionHeader",componentId:"sc-1v2zf5i-2"})(["",";"],{marginBottom:"0",textAlign:"center"}),Y=o.c.span.withConfig({displayName:"team__Separator",componentId:"sc-1v2zf5i-3"})(["",";"],{width:"25%",backgroundColor:"#FF3D78",height:"0.5rem",marginLeft:"auto",marginRight:"auto",display:"block"}),N=o.c.div.withConfig({displayName:"team__SectionContents",componentId:"sc-1v2zf5i-4"})(["",";"],{}),x=Object(o.c)(m.b).withConfig({displayName:"team__BigTitle",componentId:"sc-1v2zf5i-5"})(["",""],{fontSize:"3.3rem","@media (min-width: 900px)":{fontSize:"5.4rem"}}),C=o.c.span.withConfig({displayName:"team__Name",componentId:"sc-1v2zf5i-6"})(["",";"],{display:"block",marginTop:"1rem"}),R=Object(o.c)(m.e).withConfig({displayName:"team__Title",componentId:"sc-1v2zf5i-7"})(["",";"],{marginTop:"0.5rem",marginBottom:"0",color:"#767870"}),D=o.c.div.withConfig({displayName:"team__CloseWrapper",componentId:"sc-1v2zf5i-8"})(["",";right:6%;top:0;"],{"@media (min-width: 900px)":{position:"absolute"},color:"#ebede8",zIndex:"10"}),S=Object(o.c)(g.a).withConfig({displayName:"team__Avatar",componentId:"sc-1v2zf5i-9"})(["",";"],{borderRadius:"9999px",width:"8rem",height:"8rem",boxShadow:"0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",margin:"auto"}),M=function(A){var e=A.children,t=i()(A,["children"]),a=t.name,n=t.title,d=t.image;return r.a.createElement(b,null,r.a.createElement(I,null,r.a.createElement(S,{alt:a,fluid:d}),r.a.createElement(C,null,r.a.createElement(m.f,null,a))),r.a.createElement(R,null,n),r.a.createElement(N,null,e),r.a.createElement(Y,null))};M.propTypes={children:c.a.node.isRequired,name:c.a.string.isRequired,title:c.a.string.isRequired,image:c.a.any.isRequired};var y=function(A){var e=A.data,t=e.images,a=e.datafromjson;return r.a.createElement(r.a.Fragment,null,a.edges.map(function(A){var e=t.edges.findIndex(function(e){return e.node.name===A.node.image.split(".").slice(0,-1).join(".")});return r.a.createElement(M,{key:e,name:A.node.name,title:A.node.title,image:t.edges[e].node.childImageSharp.fluid},r.a.createElement(m.g,null,A.node.bio))}))};e.default=function(){return r.a.createElement(E.StaticQuery,{query:"3290842490",render:function(A){return r.a.createElement(B.a,null,r.a.createElement(p.a,{title:"The Team"}),r.a.createElement(Q.a,null,r.a.createElement(u.a,{isDark:!0},r.a.createElement(D,{style:{opacity:0}},r.a.createElement(f.a,{href:"/"},r.a.createElement(j.a,null))),r.a.createElement(x,{style:{opacity:0}},"the",r.a.createElement(m.f,null," Featurists")),r.a.createElement(m.h,{style:{opacity:0}})),r.a.createElement(h.d,null,r.a.createElement(w,null,r.a.createElement(y,{data:A})))))},data:n})}},191:function(A,e,t){"use strict";var a=t(4);e.__esModule=!0,e.default=void 0;var i,n=a(t(6)),d=a(t(21)),r=a(t(20)),s=a(t(10)),c=a(t(0)),o=a(t(1)),E=function(A){var e=(0,s.default)({},A);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},l=Object.create({}),g=function(A){var e=E(A),t=e.fluid?e.fluid.src:e.fixed.src;return l[t]||!1},f=new WeakMap;var B=function(A,e){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(A){A.forEach(function(A){if(f.has(A.target)){var e=f.get(A.target);(A.isIntersecting||A.intersectionRatio>0)&&(i.unobserve(A.target),f.delete(A.target),e())}})},{rootMargin:"200px"})),i);return t&&(t.observe(A),f.set(A,e)),function(){t.unobserve(A),f.delete(A)}},p=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",a=A.srcSetWebp?"<source type='image/webp' srcset=\""+A.srcSetWebp+'" '+t+"/>":"",i=A.srcSet?'srcset="'+A.srcSet+'" ':"",n=A.title?'title="'+A.title+'" ':"",d=A.alt?'alt="'+A.alt+'" ':'alt="" ',r=A.width?'width="'+A.width+'" ':"",s=A.height?'height="'+A.height+'" ':"",c=A.crossOrigin?'crossorigin="'+A.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(A.loading?'loading="'+A.loading+'" ':"")+r+s+t+i+e+d+n+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},Q=c.default.forwardRef(function(A,e){var t=A.sizes,a=A.srcSet,i=A.src,n=A.style,d=A.onLoad,o=A.onError,E=A.nativeLazyLoadSupported,l=A.loading,g=(0,r.default)(A,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),f={};return E&&(f.loading=l),c.default.createElement("img",(0,s.default)({sizes:t,srcSet:a,src:i},g,{onLoad:d,onError:o,ref:e},f,{style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});Q.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var h=function(A){function e(e){var t;t=A.call(this,e)||this;var a=!0,i=!1,n=e.fadeIn,r=!1,s=g(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(a=!0,r=!0),"undefined"==typeof window&&(a=!1),e.critical&&(a=!0,i=!1);var o=!(e.critical&&!e.fadeIn);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:s,nativeLazyLoadSupported:r},t.imageRef=c.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,d.default)((0,d.default)(t))),t.handleRef=t.handleRef.bind((0,d.default)((0,d.default)(t))),t}(0,n.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(A){var e=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&A&&(this.cleanUpListeners=B(A,function(){var A=g(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:A,imgCached:!!e.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=E(A),t=e.fluid?e.fluid.src:e.fixed.src,l[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=E(this.props),e=A.title,t=A.alt,a=A.className,i=A.style,n=void 0===i?{}:i,d=A.imgStyle,r=void 0===d?{}:d,o=A.placeholderStyle,l=void 0===o?{}:o,g=A.placeholderClassName,f=A.fluid,B=A.fixed,h=A.backgroundColor,u=A.durationFadeIn,j=A.Tag,m=A.itemProp,w=(A.critical,E(this.props).loading);var b=this.state.nativeLazyLoadSupported,I=this.state.imgLoaded||!1===this.state.fadeIn,Y=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:I?1:0,transition:Y?"opacity "+u+"ms":"none"},r),x="boolean"==typeof h?"lightgray":h,C={transitionDelay:u+"ms"},R=(0,s.default)({opacity:this.state.imgLoaded?0:1},Y&&C,r,l),D={title:e,alt:this.state.isVisible?"":t,style:R,className:g};if(f){var S=f;return c.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},c.default.createElement(j,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),x&&c.default.createElement(j,{title:e,style:(0,s.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},Y&&C)}),S.base64&&c.default.createElement(Q,(0,s.default)({src:S.base64},D)),S.tracedSVG&&c.default.createElement(Q,(0,s.default)({src:S.tracedSVG},D)),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement(Q,{alt:t,title:e,sizes:S.sizes,src:S.src,crossOrigin:this.props.crossOrigin,srcSet:S.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,nativeLazyLoadSupported:b,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,s.default)({alt:t,title:e,loading:w},S))}}))}if(B){var M=B,y=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete y.display,c.default.createElement(j,{className:(a||"")+" gatsby-image-wrapper",style:y,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&c.default.createElement(j,{title:e,style:(0,s.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},Y&&C)}),M.base64&&c.default.createElement(Q,(0,s.default)({src:M.base64},D)),M.tracedSVG&&c.default.createElement(Q,(0,s.default)({src:M.tracedSVG},D)),this.state.isVisible&&c.default.createElement("picture",null,M.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),c.default.createElement(Q,{alt:t,title:e,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,nativeLazyLoadSupported:b,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,s.default)({alt:t,title:e,loading:w},M))}}))}return null},e}(c.default.Component);h.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var u=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),j=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});h.propTypes={resolutions:u,sizes:j,fixed:u,fluid:j,fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"])};var m=h;e.default=m},192:function(A,e,t){"use strict";var a=t(0),i=t.n(a),n=t(186),d=n.c.svg.withConfig({displayName:"CloseIcon__Wrapper",componentId:"sc-1empzo8-0"})(["",";width:142px;height:142px;&:hover > circle{stroke-dashoffset:0;}"],{}),r=n.c.circle.withConfig({displayName:"CloseIcon__Circle",componentId:"sc-1empzo8-1"})(["stroke-dasharray:100;stroke-dashoffset:100;transition:stroke-dashoffset 0.35s ease-out;"]);e.a=function(){return i.a.createElement(d,{viewBox:"0 0 24 24"},i.a.createElement(r,{cx:"12",cy:"12",r:"11",fill:"none",stroke:"currentColor",strokeWidth:"0.75"}),i.a.createElement("g",{fill:"none",stroke:"currentColor",strokeWidth:"0.55"},i.a.createElement("path",{d:"M6.643 6.643l10.714 10.714M6.643 17.357L17.357 6.643"})))}},198:function(A,e,t){var a=t(32).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||t(23)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(A){return""}}})},299:function(A,e,t){"use strict";var a=t(13),i=t(85)(6),n="findIndex",d=!0;n in[]&&Array(1)[n](function(){d=!1}),a(a.P+a.F*d,"Array",{findIndex:function(A){return i(this,A,arguments.length>1?arguments[1]:void 0)}}),t(45)(n)},300:function(A){A.exports={data:{images:{edges:[{node:{name:"adrian",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEBv/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/aAAwDAQACEAMQAAABpYaE2brhjlNRnSE//8QAHBAAAQQDAQAAAAAAAAAAAAAAAgAEERMBAxIh/9oACAEBAAEFAnPWUE6jTiOAi5ZMrnPgtTKr/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAEDAQE/AREIv//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/ASn/xAAcEAACAgMBAQAAAAAAAAAAAAAAAQIRECFBMWH/2gAIAQEABj8CUVKhVJtdTxsWLbvYvp70/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUEQMWHB/9oACAEBAAE/IQLRbutzOYIQPc+dmWXFerwywRvHRNsxittbT//aAAwDAQACAAMAAAAQEydA/8QAFxEBAQEBAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxADudJ//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQIBAT8QduPgZ//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQWFxof/aAAgBAQABPxCrjz5xIfc3huCiLL4TOTNSy3TRfWFx5Tp66y3eI5SC7q8ZBIFI7mbYZCrCGf/Z",aspectRatio:1,src:"/static/816e80901ad36ced8141596f81006c00/43d32/adrian.jpg",srcSet:"/static/816e80901ad36ced8141596f81006c00/954df/adrian.jpg 100w,\n/static/816e80901ad36ced8141596f81006c00/d278e/adrian.jpg 200w,\n/static/816e80901ad36ced8141596f81006c00/43d32/adrian.jpg 248w",sizes:"(max-width: 248px) 100vw, 248px"}}}},{node:{name:"alex",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAGeiOyLec609bSrYAj/xAAbEAACAwEBAQAAAAAAAAAAAAABAgAREgMTIf/aAAgBAQABBQIDR6chn5EqUFSyYUAgXK+Smf/EABcRAQEBAQAAAAAAAAAAAAAAAAEQAhH/2gAIAQMBAT8ByHIT/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPwFZCH//xAAfEAACAQIHAAAAAAAAAAAAAAAAARACMhESISIxQVH/2gAIAQEABj8CWu0zeFrOTF09Fzhx/8QAHBABAAIDAQEBAAAAAAAAAAAAAQARITFBUYGh/9oACAEBAAE/ITEZLTEsw6ZHsFaH5NFqtVeIK4n6jU4nCKgek2O6I07HHjP/2gAMAwEAAgADAAAAEPjI/f/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8QZ2WSwbC//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIfD/2gAIAQIBAT8QRQnaNKiD/8QAHhABAAICAgMBAAAAAAAAAAAAAREhAFExYXGBwUH/2gAIAQEAAT8QV+zhhNlmrw7lUnED45LRktFPWX0hhbbXeFcQpNjzvLpSGjp3kn/7eeJjAWSUSesCQoQEAHP3P//Z",aspectRatio:.9463722397476341,src:"/static/08d5515a43afe34a3e7b42d6fe700e84/c83a6/alex.jpg",srcSet:"/static/08d5515a43afe34a3e7b42d6fe700e84/954df/alex.jpg 100w,\n/static/08d5515a43afe34a3e7b42d6fe700e84/d278e/alex.jpg 200w,\n/static/08d5515a43afe34a3e7b42d6fe700e84/c83a6/alex.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"alec",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQb/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAbEmHdnomeM8rpCwiP/EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAEESIQEhP/2gAIAQEAAQUCBuKTckZ13xKj395ji2jRrihn/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BI//EABcRAQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8Bamv/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREDEhQWH/2gAIAQEABj8C2VKFJ6eOS4nWL9GlR//EABsQAAMAAgMAAAAAAAAAAAAAAAABESFBEDFR/9oACAEBAAE/IYbDSFXWBwon12PiDY8aBsRewwKE/D//2gAMAwEAAgADAAAAEPsQg//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8Qh4yiHp//xAAYEQEBAQEBAAAAAAAAAAAAAAABABExUf/aAAgBAgEBPxDQNbHtxAZf/8QAHxABAAICAgIDAAAAAAAAAAAAAREhAFExYRBBcdHx/9oACAEBAAE/ECUErUut/mcBxgee534uVoLWccvIViUK1i0mj3D94jyzlMWg/GB8IgMorvP/2Q==",aspectRatio:1,src:"/static/a7b8d1d60752191e3a3b3cf6a1277102/c83a6/alec.jpg",srcSet:"/static/a7b8d1d60752191e3a3b3cf6a1277102/954df/alec.jpg 100w,\n/static/a7b8d1d60752191e3a3b3cf6a1277102/d278e/alec.jpg 200w,\n/static/a7b8d1d60752191e3a3b3cf6a1277102/c83a6/alec.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"artem",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAAB34qE8Oi7IeUwi1hD/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMAAQQREiEi/9oACAEBAAEFAm7m2LvUOql+zjehePCsdhGr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIQIf/aAAgBAwEBPwEDIs//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFjP//EABwQAAIBBQEAAAAAAAAAAAAAAAECABAREiExUf/aAAgBAQAGPwIBemXZshXHflSyk3gLdn//xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUEQUXH/2gAIAQEAAT8hwUOS8n62SvKKXgwGELNvFk+DKPHLepW06XP/2gAMAwEAAgADAAAAECjvPf/EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QJ0zhn//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxBIzZP/xAAcEAEBAAMBAAMAAAAAAAAAAAABEQAhMUFRcZH/2gAIAQEAAT8QZ35Tg0quIwb64QfT6wotwmmbB3ZnKEC/3A1lMA1R44BDIV2vjIgRUCWeuf/Z",aspectRatio:1,src:"/static/08c42e61c121b013fecc87d871e2c705/c83a6/artem.jpg",srcSet:"/static/08c42e61c121b013fecc87d871e2c705/954df/artem.jpg 100w,\n/static/08c42e61c121b013fecc87d871e2c705/d278e/artem.jpg 200w,\n/static/08c42e61c121b013fecc87d871e2c705/c83a6/artem.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"derek",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAQb/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQD/2gAMAwEAAhADEAAAAZpdeEqVwzv2B3nxb//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAAMEERIhMTP/2gAIAQEAAQUCKMRsYe0TAqJlmHNuxalqJce3/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BGP/EABwQAAEEAwEAAAAAAAAAAAAAAAABEBEhAhJBUf/aAAgBAQAGPwKUgt662y+iUZH/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/IUECDVIqRcpM5q+y5x9MMzyK6LUYchu6qAMCf//aAAwDAQACAAMAAAAQqB8C/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/EApcf//EABkRAQACAwAAAAAAAAAAAAAAAAEAEBEhMf/aAAgBAgEBPxDZhpCHJ//EAB4QAQACAwACAwAAAAAAAAAAAAEAESExQVFhcYGR/9oACAEBAAE/EECw5fiZOC9ktAWNYYG3Mz0c+ICqOQoDb9xgMaQGARwAK1+zWTkyeoDFFnPU/9k=",aspectRatio:1,src:"/static/2d890c614aa56e6c281893ff3bdfd88f/c83a6/derek.jpg",srcSet:"/static/2d890c614aa56e6c281893ff3bdfd88f/954df/derek.jpg 100w,\n/static/2d890c614aa56e6c281893ff3bdfd88f/d278e/derek.jpg 200w,\n/static/2d890c614aa56e6c281893ff3bdfd88f/c83a6/derek.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"josh",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEEBgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAeViLk5FKNB5YtIB/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQMAAgQFE//aAAgBAQABBQLnJrebMyguc0jzcaBERQKvqZZjZ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABAB/9oACAECAQE/ASn/xAAdEAACAgIDAQAAAAAAAAAAAAABAgAQESISITFh/9oACAEBAAY/AmdgDiF11NP8MZuPePK1hya//8QAHRABAAEEAwEAAAAAAAAAAAAAAREAECExQVGBcf/aAAgBAQABPyFgMUE0IsOYNPlsilZI8r6zDuxdnMZV3Wm4wHBb/9oADAMBAAIAAwAAABCDCAD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8QI5P/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EA//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhQVExYXGB/9oACAEBAAE/EAcKE3czfOaW+jp+ZLksg834Ne445QFFNi7454x86IYIwaEGI6cQGrCsPmXP/9k=",aspectRatio:1,src:"/static/6f98a1b1313b60d4b91843979404f0ea/c83a6/josh.jpg",srcSet:"/static/6f98a1b1313b60d4b91843979404f0ea/954df/josh.jpg 100w,\n/static/6f98a1b1313b60d4b91843979404f0ea/d278e/josh.jpg 200w,\n/static/6f98a1b1313b60d4b91843979404f0ea/c83a6/josh.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"paul",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBBAP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAbjIhiRydBWewjf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDERIT/9oACAEBAAEFAnee0h32HKHExHTITZrP/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Bg//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEv/aAAgBAgEBPwHSxn//xAAaEAABBQEAAAAAAAAAAAAAAAAAARARITEg/9oACAEBAAY/AqhDSlKhs4//xAAcEAADAAIDAQAAAAAAAAAAAAAAAREhQRAxcYH/2gAIAQEAAT8hYCer+CbmHwnmAh6TG7sT2MLM4v/aAAwDAQACAAMAAAAQL/D+/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQEVH/2gAIAQMBAT8QAGBNOX//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQIf/aAAgBAgEBPxCrrKxFM//EABsQAQEBAQEAAwAAAAAAAAAAAAERACExcYHB/9oACAEBAAE/EHsKp77MoBMe0N1yAeEfpi8metN3JRpMh3X43BGZf0+tIIzf/9k=",aspectRatio:1,src:"/static/f897042de4e4d54e2e38f48b2f374cd4/c83a6/paul.jpg",srcSet:"/static/f897042de4e4d54e2e38f48b2f374cd4/954df/paul.jpg 100w,\n/static/f897042de4e4d54e2e38f48b2f374cd4/d278e/paul.jpg 200w,\n/static/f897042de4e4d54e2e38f48b2f374cd4/c83a6/paul.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"you",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABxElEQVQ4y52SW0/CQBCF+/9f9ElRQKMikmiIiaIJoFR88MZNLipR5NZut7Sl7W63vDq7aCLQgjE5ITO783X2zCCxsfpvSSEXitBivBpWmK0xB3+njs7TID4ItjVPbdC3LG2d0Zdz2r7ytFdm45Uw9MS0e0dKe1zlfVLaF8GBN6gIXgmDgURs1CHVFKkkSDVJKkIQlA/I8zEz+2yMQmBLAZ8eapJyglQOF+Xh9pz5WdgGuMXbBsDJpfB0yLgtHjzHg4sjZnxyX+EDQ8wcgD1u8jcMaT3NrOGqVdkafcnwIfNpfT8YBg6bWz7t6cx0r/fA1zMLe/0S/7dYyvI9I2Z0af3kl+0EbaTBztyegp5tDX13ZLby4/s4q6dA1l1Mr134rhHiGU65eFvfxhPXGD1fdC7XFXl7KG+9Z9Zw6XRCRr6j8eZQNi3msKX4DoZucEH1D+fzyahltNsdVY72cpvd7AYEkBrVM6fzSPE7MFDsu7qAbeQO6mbrSn86QcVd9TqiXm8iOYpuYloxDoIAxM8LEVTc0R+PzWbO7dcAlMxmXi1swQX8irq4UGxB0/PoT3HEbGQlVd7md8UwJugr4jkASn9mAvQF8DwMrPv0FeEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/15e5be118ae35f5ce4308595f42d094c/fdbb0/you.png",srcSet:"/static/15e5be118ae35f5ce4308595f42d094c/bf65b/you.png 100w,\n/static/15e5be118ae35f5ce4308595f42d094c/7c0ed/you.png 200w,\n/static/15e5be118ae35f5ce4308595f42d094c/fdbb0/you.png 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"tim",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAcyaC0NF05lrlaY0f//EABwQAQEAAgIDAAAAAAAAAAAAAAECAAMREiEiMf/aAAgBAQABBQIOcrUdfmS+ar0p7VuCEpw0wn//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEI/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgMBAQAAAAAAAAAAAAAAABEBECExQf/aAAgBAQAGPwLR7F+jFEU+H//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQWGRsf/aAAgBAQABPyG7qg9wHYcXEVTzMi3jOIms1l58SoY89y0DoQVRt0M//9oADAMBAAIAAwAAABCA3/7/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPxBExcKz/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQIBAT8QV2nswn//xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMVFhQXGR/9oACAEBAAE/EBZ8qlXowiaroO/fjFMwOxMAWBujOmFuTAK7vZiIQuvhcQGB26rNDEDE795X8NVQ/bn/2Q==",aspectRatio:1,src:"/static/f3a2a6bc24b44ab62620e1ca1dcfc00b/c83a6/tim.jpg",srcSet:"/static/f3a2a6bc24b44ab62620e1ca1dcfc00b/954df/tim.jpg 100w,\n/static/f3a2a6bc24b44ab62620e1ca1dcfc00b/d278e/tim.jpg 200w,\n/static/f3a2a6bc24b44ab62620e1ca1dcfc00b/c83a6/tim.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}},{node:{name:"andrei",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAD/9oADAMBAAIQAxAAAAG9mT9yflXGzrZqYQL/xAAdEAACAgEFAAAAAAAAAAAAAAABAgADEQQQEhMx/9oACAEBAAEFAr7uCnuU5JlltbOwAQXqNtQcxfP/xAAZEQACAwEAAAAAAAAAAAAAAAAAIQECEEH/2gAIAQMBAT8BiqEcz//EABgRAAIDAAAAAAAAAAAAAAAAAAACARAh/9oACAECAQE/AWY2pP/EAB8QAAEDBAMBAAAAAAAAAAAAAAEAAhEQEiExQWGBof/aAAgBAQAGPwIWZcTCvdEcwt/E0Daz4tGg6p//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/IVIMJctQCdQEsuQtzRmf5wX2AUD8JxE7Lh8gR//aAAwDAQACAAMAAAAQHyD/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAMRD/2gAIAQMBAT8QJSvBqMv/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREhMVH/2gAIAQIBAT8QZZCcjWUbM//EABwQAQEAAwEAAwAAAAAAAAAAAAERACExQVGhwf/aAAgBAQABPxAr50cD2uImu0NeX7wV8Cd/3LYKN7DUlvcp1Eux2R57y5GxOQAw8sGmMiBSTArR3P/Z",aspectRatio:1,src:"/static/28dd09d5e2e9bccb74eaa2753002c283/c83a6/andrei.jpg",srcSet:"/static/28dd09d5e2e9bccb74eaa2753002c283/954df/andrei.jpg 100w,\n/static/28dd09d5e2e9bccb74eaa2753002c283/d278e/andrei.jpg 200w,\n/static/28dd09d5e2e9bccb74eaa2753002c283/c83a6/andrei.jpg 300w",sizes:"(max-width: 300px) 100vw, 300px"}}}}]},datafromjson:{edges:[{node:{name:"Josh Chisholm",title:"Founder",bio:" ",image:"josh.jpg"}},{node:{name:"Tim Macfarlane",title:"Founder",bio:" ",image:"tim.jpg"}},{node:{name:"Adrian Longley",title:"Founder",bio:" ",image:"adrian.jpg"}},{node:{name:"Artem Avetisyan",title:"Principal Developer",bio:" ",image:"artem.jpg"}},{node:{name:"Paul Campbell",title:"Principal Developer",bio:" ",image:"paul.jpg"}},{node:{name:"Derek Ekins",title:"Principal Developer",bio:" ",image:"derek.jpg"}},{node:{name:"Alex McArthur",title:"Principal Developer",bio:" ",image:"alex.jpg"}},{node:{name:"Alec Rust",title:"Head of UI/UX",bio:" ",image:"alec.jpg"}},{node:{name:"Andrei Popa",title:"Front-end Developer",bio:" ",image:"andrei.jpg"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-team-jsx-75cebfe1b0d015ead063.js.map