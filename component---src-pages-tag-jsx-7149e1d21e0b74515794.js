(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{hYuR:function(t,e,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("qhky"),o=n("Wbzz"),c=function(t){var e,n,a,c=t.description,s=t.lang,l=t.meta,d=t.title,u=Object(o.useStaticQuery)("2841359383").site,g=c||u.siteMetadata.description,f=null===(e=u.siteMetadata)||void 0===e?void 0:e.title;return i.a.createElement(r.a,{htmlAttributes:{lang:s},title:d,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:g},{property:"og:title",content:d},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(a=n.social)||void 0===a?void 0:a.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:g}].concat(l)})};c.defaultProps={lang:"en",meta:[],description:""},e.a=c},iv0T:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("4+mf"),o=n("R/WZ"),c=n("tRbT"),s=n("ofer"),l=n("hYuR"),d=n("L6Je"),u=Object(o.a)((function(t){return{grid:{marginTop:t.spacing(2)}}}));e.default=function(t){var e=t.data,n=t.location,a=u(),o=e.site.siteMetadata.title,g=e.allMdx.group;return i.a.createElement(d.a,{location:n,title:o},i.a.createElement(l.a,{title:o,keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(s.a,{component:"h1",variant:"h1"},"Tags"),i.a.createElement(c.a,{container:!0,className:a.grid,spacing:2,justify:"center",alignItems:"center"},g.map((function(t){return i.a.createElement(c.a,{key:t.fieldValue,item:!0},i.a.createElement(r.Button,{variant:"contained",color:"primary",to:"/tag/"+t.fieldValue.toLowerCase().trim()},t.fieldValue," (",t.totalCount,")"))}))))}},tRbT:function(t,e,n){"use strict";n("E9XD");var a=n("Ff2n"),i=n("wx14"),r=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var u=r.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,d=t.classes,u=t.className,g=t.component,f=void 0===g?"div":g,p=t.container,x=void 0!==p&&p,m=t.direction,v=void 0===m?"row":m,w=t.item,b=void 0!==w&&w,y=t.justify,h=void 0===y?"flex-start":y,j=t.lg,S=void 0!==j&&j,C=t.md,W=void 0!==C&&C,E=t.sm,M=void 0!==E&&E,I=t.spacing,k=void 0===I?0:I,z=t.wrap,O=void 0===z?"wrap":z,T=t.xl,R=void 0!==T&&T,q=t.xs,B=void 0!==q&&q,D=t.zeroMinWidth,G=void 0!==D&&D,N=Object(a.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),J=Object(o.a)(d.root,u,x&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],b&&d.item,G&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==O&&d["wrap-xs-".concat(String(O))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==h&&d["justify-xs-".concat(String(h))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==M&&d["grid-sm-".concat(String(M))],!1!==W&&d["grid-md-".concat(String(W))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(f,Object(i.a)({className:J,ref:e},N))})),g=Object(c.a)((function(t){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(a){var i=t.spacing(a);0!==i&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(u);e.a=g}}]);