(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{hYuR:function(t,e,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("qhky"),o=a("Wbzz"),c=function(t){var e,a,n,c,l,s=t.description,d=t.lang,u=t.meta,m=t.title,p=t.image,g=Object(o.useStaticQuery)("1324386404").site,v=s||(null===(e=g.siteMetadata)||void 0===e?void 0:e.description),f=(null===(a=g.siteMetadata)||void 0===a?void 0:a.siteUrl)+p,w=null===(n=g.siteMetadata)||void 0===n?void 0:n.title;return i.a.createElement(r.a,{htmlAttributes:{lang:d},title:m,titleTemplate:w?"%s | "+w:null,meta:[{name:"description",content:v},{property:"og:title",content:m},{property:"og:description",content:v},{property:"og:image",content:f},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(c=g.siteMetadata)||void 0===c||null===(l=c.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:v}].concat(u)})};c.defaultProps={lang:"en",meta:[],description:""},e.a=c},iv0T:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),r=a("4+mf"),o=a("R/WZ"),c=a("tRbT"),l=a("ofer"),s=a("hYuR"),d=a("L6Je"),u=Object(o.a)((function(t){return{grid:{marginTop:t.spacing(2)}}}));e.default=function(t){var e=t.data,a=t.location,n=u(),o=e.site.siteMetadata.title,m=e.allMdx.group;return i.a.createElement(d.a,{location:a,title:o},i.a.createElement(s.a,{title:o,keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(l.a,{component:"h1",variant:"h1"},"Tags"),i.a.createElement(c.a,{container:!0,className:n.grid,spacing:2,justify:"center",alignItems:"center"},m.map((function(t){return i.a.createElement(c.a,{key:t.fieldValue,item:!0},i.a.createElement(r.Button,{variant:"contained",color:"primary",to:"/tag/"+t.fieldValue.toLowerCase().trim()},t.fieldValue," (",t.totalCount,")"))}))))}}}]);