(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hYuR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("qhky"),o=a("YwZP"),l=a("Wbzz"),m=function(e){var t=e.title,a=e.description,n=e.image,m=e.author,s=e.publishedTime,p=e.lang,u=Object(o.useLocation)().pathname,d=Object(l.useStaticQuery)(c).site.siteMetadata,g=d.defaultTitle,E=d.titleTemplate,h=d.defaultDescription,w=d.siteUrl,y=d.defaultImage,b=d.social,f={siteName:g,title:t||g,description:a||h,image:""+w+(n||y),url:""+w+u,author:m,twitter:null==b?void 0:b.twitter,publishedTime:s};return r.a.createElement(i.a,{title:f.title,titleTemplate:E,htmlAttributes:{lang:p}},r.a.createElement("meta",{property:"og:site_name",content:f.siteName}),r.a.createElement("meta",{property:"og:url",content:f.url}),r.a.createElement("meta",{property:"og:title",content:f.title}),r.a.createElement("meta",{name:"twitter:title",content:f.title}),r.a.createElement("meta",{name:"description",content:f.description}),r.a.createElement("meta",{property:"og:description",content:f.description}),r.a.createElement("meta",{name:"twitter:description",content:f.description}),r.a.createElement("meta",{name:"image",content:f.image}),r.a.createElement("meta",{property:"og:image",content:f.image}),r.a.createElement("meta",{name:"twitter:image",content:f.image}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"article:author",content:f.author}),r.a.createElement("meta",{property:"article:published_time",content:f.publishedTime}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:f.twitter}))};t.a=m,m.defaultProps={lang:"en",author:"Jennifer Rollman"};var c="2511351941"},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("L6Je"),o=a("hYuR");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(i.a,{location:a,title:n},r.a.createElement(o.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"404: Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);