(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hYuR:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("qhky"),l=a("YwZP"),o=a("Wbzz"),m=function(e){var t,a=e.title,n=e.description,m=e.image,s=e.author,u=e.publishedTime,p=e.lang,d=Object(l.useLocation)().pathname,g=Object(o.useStaticQuery)(c).site.siteMetadata,h=g.defaultTitle,E=g.titleTemplate,w=g.defaultDescription,y=g.siteUrl,b=g.defaultImage,f=g.social,v={siteName:h,title:a||h,description:n||w,image:""+y+(m||b),url:""+y+d,author:s,twitter:null==f||null===(t=f.twitter)||void 0===t?void 0:t.user,publishedTime:u};return i.a.createElement(r.a,{title:v.title,titleTemplate:E,htmlAttributes:{lang:p}},i.a.createElement("meta",{property:"og:site_name",content:v.siteName}),i.a.createElement("meta",{property:"og:url",content:v.url}),i.a.createElement("meta",{property:"og:title",content:v.title}),i.a.createElement("meta",{name:"twitter:title",content:v.title}),i.a.createElement("meta",{name:"description",content:v.description}),i.a.createElement("meta",{property:"og:description",content:v.description}),i.a.createElement("meta",{name:"twitter:description",content:v.description}),i.a.createElement("meta",{name:"image",content:v.image}),i.a.createElement("meta",{property:"og:image",content:v.image}),i.a.createElement("meta",{name:"twitter:image",content:v.image}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"article:author",content:v.author}),i.a.createElement("meta",{property:"article:published_time",content:v.publishedTime}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))};t.a=m,m.defaultProps={lang:"en",author:"Jennifer Rollman"};var c="1185941742"},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("L6Je"),l=a("hYuR");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return i.a.createElement(r.a,{location:a,title:n},i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"404: Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);