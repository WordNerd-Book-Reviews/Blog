(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},H1B7:function(t,e,r){"use strict";r.r(e);r("q1tI");var n=r("9eSz"),i=r.n(n),o=r("HU1S"),c=r("OA4S"),a=r("v3sT"),l=r("A2+M"),u=r("L6Je"),p=r("hYuR"),s=r("vCQb"),b=r("BGKE");e.default=function(t){var e,r=t.data,n=t.location,m=r.mdx,f=m.excerpt,d=m.body,h=m.frontmatter,y=h.title,O=h.description,g=h.featuredImage,j=(null===(e=r.site.siteMetadata)||void 0===e?void 0:e.title)||"Title";return Object(b.c)(u.a,{location:n,title:j,children:[Object(b.b)(p.a,{title:y,description:O||f,image:null==g?void 0:g.image.childImageSharp.fluid.src}),Object(b.c)(o.a,{maxWidth:"md",disableGutters:!0,component:"article",itemScope:!0,itemType:"http://schema.org/Article",children:[g&&Object(b.b)(c.a,{container:!0,sx:{width:{sm:"50%"},float:{sm:"left"},minHeight:{sm:"300px"},marginRight:{sm:2},marginTop:1},children:Object(b.b)(c.a,{item:!0,xs:!0,children:Object(b.b)(s.a,{to:g.image.childImageSharp.fluid.src,target:"_blank",rel:"noopener",children:Object(b.b)(i.a,{title:g.title||y,alt:g.alt||y,fluid:g.image.childImageSharp.fluid,style:{height:"100%"}})})})}),Object(b.b)("header",{children:Object(b.b)(a.a,{variant:"h1",component:"h1",itemProp:"headline",children:y})}),Object(b.b)(l.MDXRenderer,{frontmatter:h,children:d})]})]})}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),i=r("EbDI"),o=r("ZhPi"),c=r("Bnag");t.exports=function(t){return n(t)||i(t)||o(t)||c()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),i=r("RIqP"),o=r("lSNA"),c=r("8OQS");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),p=r("7ljp").mdx,s=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,o=c(t,["scope","children"]),a=s(e),b=u.useMemo((function(){if(!r)return null;var t=l({React:u,mdx:p},a),e=Object.keys(t),o=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(i(e),[""+r])).apply(void 0,[{}].concat(i(o)))}),[r,e]);return u.createElement(b,l({},o))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},hYuR:function(t,e,r){"use strict";r("q1tI");var n=r("qhky"),i=r("YwZP"),o=r("Wbzz"),c=r("BGKE"),a=function(t){var e,r=t.title,a=t.description,u=t.image,p=t.author,s=t.publishedTime,b=t.lang,m=Object(i.useLocation)().pathname,f=Object(o.useStaticQuery)(l).site.siteMetadata,d=f.defaultTitle,h=f.titleTemplate,y=f.defaultDescription,O=f.siteUrl,g=f.defaultImage,j=f.social,v={siteName:d,title:r||d,description:a||y,image:""+O+(u||g),url:""+O+m,author:p,twitter:null==j||null===(e=j.twitter)||void 0===e?void 0:e.user,publishedTime:s};return Object(c.c)(n.a,{title:v.title,titleTemplate:h,htmlAttributes:{lang:b},children:[Object(c.b)("meta",{property:"og:site_name",content:v.siteName}),Object(c.b)("meta",{property:"og:url",content:v.url}),Object(c.b)("meta",{property:"og:title",content:v.title}),Object(c.b)("meta",{name:"twitter:title",content:v.title}),Object(c.b)("meta",{name:"description",content:v.description}),Object(c.b)("meta",{property:"og:description",content:v.description}),Object(c.b)("meta",{name:"twitter:description",content:v.description}),Object(c.b)("meta",{name:"image",content:v.image}),Object(c.b)("meta",{property:"og:image",content:v.image}),Object(c.b)("meta",{name:"twitter:image",content:v.image}),Object(c.b)("meta",{property:"og:type",content:"article"}),Object(c.b)("meta",{property:"article:author",content:v.author}),Object(c.b)("meta",{property:"article:published_time",content:v.publishedTime}),Object(c.b)("meta",{name:"twitter:card",content:"summary_large_image"})]})};e.a=a,a.defaultProps={lang:"en",author:"Jennifer Rollman"};var l="1185941742"},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},sXyB:function(t,e,r){var n=r("SksO"),i=r("b48C");function o(e,r,c){return i()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,r){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return r&&n(o,r.prototype),o},o.apply(null,arguments)}t.exports=o}}]);