(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"B/df":function(e,t,a){"use strict";var o=a("q1tI"),n=a("9eSz"),i=a.n(n),r=a("S1ui"),c=a("wx14"),l=a("zLVn"),s=a("iuhU"),d=a("xW+O"),p=a("cRy0"),u=a("LLLP"),b=a("LIpB"),m=a("XdJg");function g(e){return Object(b.a)("MuiCardContent",e)}Object(m.a)("MuiCardContent",["root"]);var O=Object(p.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root||{}}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=o.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiCardContent"}),n=a.className,i=a.component,r=void 0===i?"div":i,p=Object(l.a)(a,["className","component"]),b=Object(c.a)({},a,{component:r}),m=function(e){var t=e.classes;return Object(d.a)({root:["root"]},g,t)}(b);return o.createElement(O,Object(c.a)({as:r,className:Object(s.a)(m.root,n),styleProps:b,ref:t},p))})),h=a("2+6g");function f(e){return Object(b.a)("MuiCardMedia",e)}Object(m.a)("MuiCardMedia",["root","media","img"]);var j=Object(p.a)("div",{},{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps,o=a.isMediaComponent,n=a.isImageComponent;return Object(h.a)(t.root||{},Object(c.a)({},o&&t.media,n&&t.img))}})((function(e){var t=e.styleProps;return Object(c.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),y=["video","audio","picture","iframe","img"],C=["picture","img"],x=o.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiCardMedia"}),n=a.children,i=a.className,r=a.component,p=void 0===r?"div":r,b=a.image,m=a.src,g=a.style,O=Object(l.a)(a,["children","className","component","image","src","style"]),v=-1!==y.indexOf(p),h=!v&&b?Object(c.a)({backgroundImage:'url("'.concat(b,'")')},g):g,x=Object(c.a)({},a,{component:p,isMediaComponent:v,isImageComponent:-1!==C.indexOf(p)}),w=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(d.a)(a,f,t)}(x);return o.createElement(j,Object(c.a)({className:Object(s.a)(w.root,i),as:p,ref:t,style:h,styleProps:x,src:v?b||m:void 0},O),n)})),w=a("v3sT"),P=a("px12"),k=a("vCQb"),M=a("BGKE");t.a=function(e){var t,a=e.node,o=a.fields,n=a.excerpt,c=a.frontmatter,l=o.slug,s=c.title,d=c.description,p=c.date,u=c.featuredImage;return Object(M.b)(r.a,{square:!0,sx:{maxWidth:360},children:Object(M.c)(P.a,{to:l,component:k.a,children:[Object(M.b)(x,{component:i.a,fluid:null==u||null===(t=u.image)||void 0===t?void 0:t.childImageSharp.fluid,sx:{maxHeight:"250px"},title:(null==u?void 0:u.title)||s,alt:(null==u?void 0:u.alt)||s}),Object(M.c)(v,{children:[Object(M.b)(w.a,{gutterBottom:!0,variant:"body1",component:"h2",children:Object(M.b)("strong",{children:s})}),Object(M.b)(w.a,{variant:"body2",component:"p",children:d||n}),Object(M.b)(w.a,{variant:"subtitle2",color:"textSecondary",component:"p",align:"right",children:p})]})]})})}},fXAs:function(e,t,a){"use strict";a.r(t);var o=a("rePB"),n=a("q1tI"),i=a("OA4S"),r=a("wx14"),c=a("zLVn"),l=a("iuhU"),s=a("nQS7"),d=a("1dOL"),p=function(e,t){var a=e.classes,o=void 0===a?{}:a,n=Object(s.a)(),i="";n&&n.components&&n.components[t]&&n.components[t].variants&&n.components[t].variants.forEach((function(t){var a=!0;Object.keys(t.props).forEach((function(o){e[o]!==t.props[o]&&(a=!1)})),a&&(i="".concat(i).concat(o[Object(d.a)(t.props)]," "))}));return i},u=a("Hk+Y"),b=a("KQm4"),m=a("ODXe"),g=a("hRl1");var O=a("Rq+t"),v=a("wClv"),h=a("A4YV"),f=a("vKg3"),j=a("e98E"),y=Object(j.a)(n.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),C=Object(j.a)(n.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),x=Object(j.a)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),w=Object(j.a)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),P=n.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.color,s=void 0===i?"standard":i,d=e.component,u=e.disabled,b=void 0!==u&&u,m=e.page,g=e.selected,v=void 0!==g&&g,j=e.shape,P=void 0===j?"circular":j,k=e.size,M=void 0===k?"medium":k,B=e.type,N=void 0===B?"page":B,z=e.variant,L=void 0===z?"text":z,I=Object(c.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),R=p(Object(r.a)({},e,{color:s,disabled:b,selected:v,shape:P,size:M,type:N,variant:L}),"MuiPaginationItem"),$=("rtl"===Object(O.a)().direction?{previous:w,next:x,last:y,first:C}:{previous:x,next:w,first:y,last:C})[N];return"start-ellipsis"===N||"end-ellipsis"===N?n.createElement("div",{ref:t,className:Object(l.a)(a.root,a.ellipsis,o,b&&a.disabled,"medium"!==M&&a["size".concat(Object(f.a)(M))])},"…"):n.createElement(h.a,Object(r.a)({ref:t,component:d,disabled:b,focusVisibleClassName:a.focusVisible,className:Object(l.a)(a.root,a.page,a[L],a[P],R,o,"standard"!==s&&a["".concat(L).concat(Object(f.a)(s))],b&&a.disabled,v&&a.selected,"medium"!==M&&a["size".concat(Object(f.a)(M))])},I),"page"===N&&m,$?n.createElement($,{className:a.icon}):null)})),k=Object(u.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:e.palette.action.disabledOpacity},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:Object(v.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$focusVisible":{backgroundColor:Object(v.a)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},text:{},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(v.a)(e.palette.primary.main,.5)),backgroundColor:Object(v.a)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(v.a)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(v.a)(e.palette.secondary.main,.5)),backgroundColor:Object(v.a)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(v.a)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(P);function M(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var B=n.forwardRef((function(e,t){var a=e.boundaryCount,o=void 0===a?1:a,i=e.classes,s=e.className,d=e.color,u=void 0===d?"standard":d,O=e.count,v=void 0===O?1:O,h=e.defaultPage,f=void 0===h?1:h,j=e.disabled,y=void 0!==j&&j,C=e.getItemAriaLabel,x=void 0===C?M:C,w=e.hideNextButton,P=void 0!==w&&w,B=e.hidePrevButton,N=void 0!==B&&B,z=e.renderItem,L=void 0===z?function(e){return n.createElement(k,e)}:z,I=e.shape,R=void 0===I?"circular":I,$=e.showFirstButton,E=void 0!==$&&$,S=e.showLastButton,T=void 0!==S&&S,V=e.siblingCount,A=void 0===V?1:V,F=e.size,W=void 0===F?"medium":F,q=e.variant,D=void 0===q?"text":q,G=Object(c.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,i=e.count,l=void 0===i?1:i,s=e.defaultPage,d=void 0===s?1:s,p=e.disabled,u=void 0!==p&&p,O=e.hideNextButton,v=void 0!==O&&O,h=e.hidePrevButton,f=void 0!==h&&h,j=e.onChange,y=e.page,C=e.showFirstButton,x=void 0!==C&&C,w=e.showLastButton,P=void 0!==w&&w,k=e.siblingCount,M=void 0===k?1:k,B=Object(c.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),N=Object(g.a)({controlled:y,default:d,name:n,state:"page"}),z=Object(m.a)(N,2),L=z[0],I=z[1],R=function(e,t){y||I(t),j&&j(e,t)},$=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},E=$(1,Math.min(a,l)),S=$(Math.max(l-a+1,a+1),l),T=Math.max(Math.min(L-M,l-a-2*M-1),a+2),V=Math.min(Math.max(L+M,a+2*M+2),S.length>0?S[0]-2:l-1),A=[].concat(Object(b.a)(x?["first"]:[]),Object(b.a)(f?[]:["previous"]),Object(b.a)(E),Object(b.a)(T>a+2?["start-ellipsis"]:a+1<l-a?[a+1]:[]),Object(b.a)($(T,V)),Object(b.a)(V<l-a-1?["end-ellipsis"]:l-a>a?[l-a]:[]),Object(b.a)(S),Object(b.a)(v?[]:["next"]),Object(b.a)(P?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return L-1;case"next":return L+1;case"last":return l;default:return null}},W=A.map((function(e){return"number"==typeof e?{onClick:function(t){R(t,e)},type:"page",page:e,selected:e===L,disabled:u,"aria-current":e===L?"true":void 0}:{onClick:function(t){R(t,F(e))},type:e,page:F(e),selected:!1,disabled:u||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?L>=l:L<=1)}}));return Object(r.a)({items:W},B)}(Object(r.a)({},e,{componentName:"Pagination"})).items,K=p(Object(r.a)({},e,{boundaryCount:o,color:u,count:v,defaultPage:f,disabled:y,getItemAriaLabel:x,hideNextButton:P,hidePrevButton:N,renderItem:L,shape:R,showFirstButton:E,showLastButton:T,siblingCount:A,size:W,variant:D}),"MuiPaginationItem");return n.createElement("nav",Object(r.a)({"aria-label":"pagination navigation",className:Object(l.a)(i.root,i[D],K,s),ref:t},G),n.createElement("ul",{className:i.ul},J.map((function(e,t){return n.createElement("li",{key:t},L(Object(r.a)({},e,{color:u,"aria-label":x(e.type,e.page,e.selected),shape:R,size:W,variant:D})))}))))})),N=Object(u.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},outlined:{},text:{}},{name:"MuiPagination"})(B),z=a("hYuR"),L=a("L6Je"),I=a("B/df"),R=a("vCQb"),$=a("BGKE");function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,r=t.site.siteMetadata.title,c=t.allMdx.edges,l=a.currentPage,s=a.numPages,d=a.pathPrefix;return Object($.c)(L.a,{location:n,title:r,children:[Object($.b)(z.a,{title:r}),Object($.b)(i.a,{container:!0,spacing:2,justifyContent:"space-evenly",alignItems:"center",sx:{marginBottom:2},children:c.map((function(e,t){var a=e.node;return Object($.b)(i.a,{item:!0,children:Object($.b)(I.a,{node:a})},t)}))}),Object($.b)(i.a,{container:!0,justifyContent:"center",children:Object($.b)(N,{color:"primary",shape:"circular",count:s,page:l,showFirstButton:!0,showLastButton:!0,renderItem:function(e){return Object($.b)(k,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({component:R.a,to:0===e.page||e.page>s?"":"/"+d+"/"+(1===e.page?"":""+e.page)},e))}})})]})}},hYuR:function(e,t,a){"use strict";a("q1tI");var o=a("qhky"),n=a("YwZP"),i=a("Wbzz"),r=a("BGKE"),c=function(e){var t,a=e.title,c=e.description,s=e.image,d=e.author,p=e.publishedTime,u=e.lang,b=Object(n.useLocation)().pathname,m=Object(i.useStaticQuery)(l).site.siteMetadata,g=m.defaultTitle,O=m.titleTemplate,v=m.defaultDescription,h=m.siteUrl,f=m.defaultImage,j=m.social,y={siteName:g,title:a||g,description:c||v,image:""+h+(s||f),url:""+h+b,author:d,twitter:null==j||null===(t=j.twitter)||void 0===t?void 0:t.user,publishedTime:p};return Object(r.c)(o.a,{title:y.title,titleTemplate:O,htmlAttributes:{lang:u},children:[Object(r.b)("meta",{property:"og:site_name",content:y.siteName}),Object(r.b)("meta",{property:"og:url",content:y.url}),Object(r.b)("meta",{property:"og:title",content:y.title}),Object(r.b)("meta",{name:"twitter:title",content:y.title}),Object(r.b)("meta",{name:"description",content:y.description}),Object(r.b)("meta",{property:"og:description",content:y.description}),Object(r.b)("meta",{name:"twitter:description",content:y.description}),Object(r.b)("meta",{name:"image",content:y.image}),Object(r.b)("meta",{property:"og:image",content:y.image}),Object(r.b)("meta",{name:"twitter:image",content:y.image}),Object(r.b)("meta",{property:"og:type",content:"article"}),Object(r.b)("meta",{property:"article:author",content:y.author}),Object(r.b)("meta",{property:"article:published_time",content:y.publishedTime}),Object(r.b)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.a=c,c.defaultProps={lang:"en",author:"Jennifer Rollman"};var l="1185941742"}}]);