(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"B/df":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("9eSz"),r=a.n(i),c=a("R/WZ"),l=a("30+C"),d=a("wx14"),s=a("Ff2n"),m=a("iuhU"),p=a("H2TA"),u=o.forwardRef((function(e,t){var a=e.classes,n=e.className,i=e.component,r=void 0===i?"div":i,c=Object(s.a)(e,["classes","className","component"]);return o.createElement(r,Object(d.a)({className:Object(m.a)(a.root,n),ref:t},c))})),b=Object(p.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u),g=["video","audio","picture","iframe","img"],h=o.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,r=e.component,c=void 0===r?"div":r,l=e.image,p=e.src,u=e.style,b=Object(s.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==g.indexOf(c),f=!h&&l?Object(d.a)({backgroundImage:'url("'.concat(l,'")')},u):u;return o.createElement(c,Object(d.a)({className:Object(m.a)(n.root,i,h&&n.media,-1!=="picture img".indexOf(c)&&n.img),ref:t,style:f,src:h?l||p:void 0},b),a)})),f=Object(p.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(h),v=a("ofer"),y=a("4+mf"),O=Object(c.a)((function(e){return{root:{maxWidth:360}}}));t.a=function(e){var t,a=e.node,o=O();return n.a.createElement(l.a,{className:o.root,square:!0},n.a.createElement(y.CardActionArea,{to:a.fields.slug},n.a.createElement(f,{component:r.a,fluid:null===(t=a.frontmatter.image)||void 0===t?void 0:t.childImageSharp.fluid,style:{maxHeight:"250px"},title:a.frontmatter.title,alt:"Banner"}),n.a.createElement(b,null,n.a.createElement(v.a,{gutterBottom:!0,variant:"body1",component:"h2"},n.a.createElement("strong",null,a.frontmatter.title)),n.a.createElement(v.a,{variant:"body2",component:"p"},a.excerpt))))}},fXAs:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),i=a("4+mf"),r=a("R/WZ"),c=a("tRbT"),l=a("wx14"),d=a("Ff2n"),s=a("iuhU"),m=a("H2TA"),p=a("KQm4"),u=a("ODXe"),b=a("yCxk");var g=a("ye/S"),h=a("tr08"),f=a("VD++"),v=a("5AJ6"),y=Object(v.a)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),O=Object(v.a)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),j=Object(v.a)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),x=Object(v.a)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),E=a("NqtD"),C=o.forwardRef((function(e,t){var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,c=e.component,m=e.disabled,p=void 0!==m&&m,u=e.page,b=e.selected,g=void 0!==b&&b,v=e.shape,C=void 0===v?"round":v,k=e.size,w=void 0===k?"medium":k,N=e.type,B=void 0===N?"page":N,z=e.variant,P=void 0===z?"text":z,$=Object(d.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),L=("rtl"===Object(h.a)().direction?{previous:x,next:j,last:y,first:O}:{previous:j,next:x,first:y,last:O})[B];return"start-ellipsis"===B||"end-ellipsis"===B?o.createElement("div",{ref:t,className:Object(s.a)(a.root,a.ellipsis,p&&a.disabled,"medium"!==w&&a["size".concat(Object(E.a)(w))])},"…"):o.createElement(f.a,Object(l.a)({ref:t,component:c,disabled:p,focusVisibleClassName:a.focusVisible,className:Object(s.a)(a.root,a.page,a[P],a[C],n,"standard"!==r&&a["".concat(P).concat(Object(E.a)(r))],p&&a.disabled,g&&a.selected,"medium"!==w&&a["size".concat(Object(E.a)(w))])},$),"page"===B&&u,L?o.createElement(L,{className:a.icon}):null)})),k=Object(m.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(g.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(g.b)(e.palette.primary.main,.5)),backgroundColor:Object(g.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(g.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(g.b)(e.palette.secondary.main,.5)),backgroundColor:Object(g.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(g.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(C);function w(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var N=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===c?w:c,g=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===g?function(e){return o.createElement(k,e)}:g,f=e.shape,v=void 0===f?"round":f,y=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),O=void 0===y?"medium":y,j=e.variant,x=void 0===j?"text":j,E=Object(d.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,i=e.count,r=void 0===i?1:i,c=e.defaultPage,s=void 0===c?1:c,m=e.disabled,g=void 0!==m&&m,h=e.hideNextButton,f=void 0!==h&&h,v=e.hidePrevButton,y=void 0!==v&&v,O=e.onChange,j=e.page,x=e.showFirstButton,E=void 0!==x&&x,C=e.showLastButton,k=void 0!==C&&C,w=e.siblingCount,N=void 0===w?1:w,B=Object(d.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object(b.a)({controlled:j,default:s,name:n,state:"page"}),P=Object(u.a)(z,2),$=P[0],L=P[1],M=function(e,t){j||L(t),O&&O(e,t)},R=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},T=R(1,Math.min(a,r)),I=R(Math.max(r-a+1,a+1),r),S=Math.max(Math.min($-N,r-a-2*N-1),a+2),A=Math.min(Math.max($+N,a+2*N+2),I[0]-2),V=[].concat(Object(p.a)(E?["first"]:[]),Object(p.a)(y?[]:["previous"]),Object(p.a)(T),Object(p.a)(S>a+2?["start-ellipsis"]:a+1<r-a?[a+1]:[]),Object(p.a)(R(S,A)),Object(p.a)(A<r-a-1?["end-ellipsis"]:r-a>a?[r-a]:[]),Object(p.a)(I),Object(p.a)(f?[]:["next"]),Object(p.a)(k?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return r;default:return null}},W=V.map((function(e){return"number"==typeof e?{onClick:function(t){M(t,e)},type:"page",page:e,selected:e===$,disabled:g,"aria-current":e===$?"true":void 0}:{onClick:function(t){M(t,F(e))},type:e,page:F(e),selected:!1,disabled:g||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?$>=r:$<=1)}}));return Object(l.a)({items:W},B)}(Object(l.a)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",Object(l.a)({"aria-label":"pagination navigation",className:Object(s.a)(a.root,n),ref:t},E),o.createElement("ul",{className:a.ul},C.map((function(e,t){return o.createElement("li",{key:t},h(Object(l.a)({},e,{color:r,"aria-label":m(e.type,e.page,e.selected),shape:v,size:O,variant:x})))}))))})),B=Object(m.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(N),z=a("hYuR"),P=a("L6Je"),$=a("B/df"),L=Object(r.a)((function(e){return{grid:{marginBottom:e.spacing(2)}}}));t.default=function(e){var t=e.data,a=e.pageContext,o=e.location,r=L(),l=t.site.siteMetadata.title,d=t.allMdx.edges,s=a.currentPage,m=a.numPages,p=a.pathPrefix;return n.a.createElement(P.a,{location:o,title:l},n.a.createElement(z.a,{title:l}),n.a.createElement(c.a,{container:!0,className:r.grid,spacing:2,justify:"space-evenly",alignItems:"center"},d.map((function(e,t){var a=e.node;return n.a.createElement(c.a,{key:t,item:!0},n.a.createElement($.a,{node:a}))}))),n.a.createElement(c.a,{container:!0,justify:"center"},n.a.createElement(B,{color:"primary",shape:"rounded",count:m,page:s,showFirstButton:!0,showLastButton:!0,renderItem:function(e){return n.a.createElement(k,Object.assign({component:i.Link,to:0===e.page||e.page>m?"":"/"+p+"/"+(1===e.page?"":""+e.page)},e))}})))}},hYuR:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("qhky"),r=a("YwZP"),c=a("Wbzz"),l=function(e){var t=e.title,a=e.description,o=e.image,l=e.author,s=e.publishedTime,m=e.lang,p=Object(r.useLocation)().pathname,u=Object(c.useStaticQuery)(d).site.siteMetadata,b=u.defaultTitle,g=u.titleTemplate,h=u.defaultDescription,f=u.siteUrl,v=u.defaultImage,y=u.social,O={siteName:b,title:t||b,description:a||h,image:""+f+(o||v),url:""+f+p,author:l,twitter:null==y?void 0:y.twitter,publishedTime:s};return n.a.createElement(i.a,{title:O.title,titleTemplate:g,htmlAttributes:{lang:m}},n.a.createElement("meta",{property:"og:site_name",content:O.siteName}),n.a.createElement("meta",{property:"og:url",content:O.url}),n.a.createElement("meta",{property:"og:title",content:O.title}),n.a.createElement("meta",{name:"twitter:title",content:O.title}),n.a.createElement("meta",{name:"description",content:O.description}),n.a.createElement("meta",{property:"og:description",content:O.description}),n.a.createElement("meta",{name:"twitter:description",content:O.description}),n.a.createElement("meta",{name:"image",content:O.image}),n.a.createElement("meta",{property:"og:image",content:O.image}),n.a.createElement("meta",{name:"twitter:image",content:O.image}),n.a.createElement("meta",{property:"og:type",content:"article"}),n.a.createElement("meta",{property:"article:author",content:O.author}),n.a.createElement("meta",{property:"article:published_time",content:O.publishedTime}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),O.twitter&&n.a.createElement("meta",{name:"twitter:creator",content:O.twitter}))};t.a=l,l.defaultProps={lang:"en",author:"Jennifer Rollman"};var d="2511351941"}}]);