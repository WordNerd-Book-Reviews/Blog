(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1y9+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("tRbT"),c=a("B/df");t.a=function(e){var t=e.currentId,a=Object(o.useStaticQuery)("714197669").allMdx;return r.a.createElement(i.a,{container:!0,spacing:2,justify:"space-evenly",alignItems:"center"},a.edges.map((function(e,a){var n=e.node;return r.a.createElement(r.a.Fragment,{key:a},n.id!==t&&r.a.createElement(i.a,{item:!0},r.a.createElement(c.a,{node:n})))})))}},"B/df":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("9eSz"),i=a.n(o),c=a("R/WZ"),l=a("30+C"),s=a("wx14"),d=a("Ff2n"),m=a("iuhU"),u=a("H2TA"),p=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.component,i=void 0===o?"div":o,c=Object(d.a)(e,["classes","className","component"]);return n.createElement(i,Object(s.a)({className:Object(m.a)(a.root,r),ref:t},c))})),f=Object(u.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(p),g=["video","audio","picture","iframe","img"],v=n.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,i=e.component,c=void 0===i?"div":i,l=e.image,u=e.src,p=e.style,f=Object(d.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==g.indexOf(c),b=!v&&l?Object(s.a)({backgroundImage:'url("'.concat(l,'")')},p):p;return n.createElement(c,Object(s.a)({className:Object(m.a)(r.root,o,v&&r.media,-1!=="picture img".indexOf(c)&&r.img),ref:t,style:b,src:v?l||u:void 0},f),a)})),b=Object(u.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(v),y=a("ofer"),h=a("4+mf"),E=Object(c.a)((function(e){return{root:{maxWidth:360}}}));t.a=function(e){var t,a=e.node,n=E();return r.a.createElement(l.a,{className:n.root,square:!0},r.a.createElement(h.CardActionArea,{to:a.fields.slug},r.a.createElement(b,{component:i.a,fluid:null===(t=a.frontmatter.image)||void 0===t?void 0:t.childImageSharp.fluid,style:{maxHeight:"250px"},title:a.frontmatter.title,alt:"Banner"}),r.a.createElement(f,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"body1",component:"h2"},r.a.createElement("strong",null,a.frontmatter.title)),r.a.createElement(y.a,{variant:"body2",component:"p"},a.excerpt))))}},Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("hYuR"),i=a("L6Je"),c=a("1y9+");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title;return r.a.createElement(i.a,{location:a,title:n},r.a.createElement(o.a,{title:n,location:a}),r.a.createElement(c.a,null))}},hYuR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("qhky"),i=a("Wbzz"),c=function(e){var t,a,n,c,l,s=e.description,d=e.lang,m=e.meta,u=e.title,p=e.image,f=e.location,g=e.author,v=e.publishedTime,b=Object(i.useStaticQuery)("1324386404").site,y=s||(null===(t=b.siteMetadata)||void 0===t?void 0:t.description),h=p?f.origin+p:"",E=null===(a=b.siteMetadata)||void 0===a?void 0:a.title,w=f.href||(null===(n=b.siteMetadata)||void 0===n?void 0:n.siteUrl);return r.a.createElement(o.a,{htmlAttributes:{lang:d},title:u,titleTemplate:E?"%s | "+E:null,meta:[{name:"description",content:y},{property:"og:title",content:u},{property:"og:description",content:y},{property:"og:image",content:h},{property:"og:type",content:"article"},{property:"og:url",content:w},{property:"og:site_name",content:E},{property:"article:published_time",content:v},{property:"article:author",content:g},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(c=b.siteMetadata)||void 0===c||null===(l=c.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:y}].concat(m)})};c.defaultProps={lang:"en",meta:[],description:"",author:"Jennifer Rollman"},t.a=c}}]);