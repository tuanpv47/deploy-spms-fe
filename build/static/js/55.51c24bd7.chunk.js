(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[55],{574:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(13),r=n.n(i),a=n(19),l=n(15),s=n(2),o=n(672),d=n(10),u=n(688),j=(n(6),n(104)),b=n(12),v=n(297),O=n(266),f=n(698),p=n(53),x=n.n(p),h=n(39);t.default=function(e){var t=Object(j.a)().t,n=Object(s.useState)(!1),i=Object(l.a)(n,2),p=i[0],g=i[1],m=Object(s.useState)([]),y=Object(l.a)(m,2),_=y[0],w=y[1],S=Object(s.useState)(null),L=Object(l.a)(S,2),A=L[0],I=L[1],k=Object(s.useState)(!1),E=Object(l.a)(k,2),N=E[0],R=E[1],T=function(){return R(!N)};Object(s.useEffect)((function(){Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,u.a.getAll();case 3:t=e.sent,w(null===t||void 0===t?void 0:t.contents),g(!1);case 6:case"end":return e.stop()}}),e)})))()}),[]);var P=[{title:b.a.t("syllabus.CODE"),field:"monHoc.ma"},{title:b.a.t("syllabus.NAME"),field:"monHoc.tenTiengViet"},{title:b.a.t("PROGRAM_NAME"),field:"heDaoTao.ten"},{title:b.a.t("syllabus.SCHOLASTIC"),field:"namHoc.ten"},{title:"Action#1",actionTitle:"Preview Syllabus",handle:function(e){I(null===e||void 0===e?void 0:e.id),R(!0)}}];return Object(c.jsxs)("div",{className:"view__syllabus__wrapper",children:[Object(c.jsxs)("div",{className:"view__syllabus__body",children:[Object(c.jsx)("div",{className:"view__syllabus__top",children:Object(c.jsx)("h4",{children:t("syllabus.LIST_SYLLABUS")||"List syllabus"})}),Object(c.jsx)("div",{className:"view__syllabus__content",children:p?Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)(d.a,{})}):Object(c.jsx)(o.a,{titleList:P,data:_,actionTitle:"".concat(t("syllabus.VIEW_DETAIL")||"View detail")})})]}),Object(c.jsx)("div",{className:"view-pdf",children:Object(c.jsxs)(v.a,{className:"overlay-pdf",isOpen:N,toggle:T,style:{width:"80%",maxWidth:"none"},children:[Object(c.jsx)(O.a,{toggle:T,children:"SYLLABUS"}),Object(c.jsx)(f.a,{url:"".concat(h.a.API.EXPORT_SYLLABUS,"?").concat(x.a.stringify({syllabusId:A}))})]})})]})}},672:function(e,t,n){"use strict";var c=n(14),i=n(3),r=(n(2),n(269)),a=n(67),l=n(655),s=n(12);t.a=function(e){var t=e.titleList,n=void 0===t?[]:t,o=e.data,d=void 0===o?[]:o,u=e.actionTitle,j=void 0===u?"":u;return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{bordered:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"STT"}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(i.jsx)("th",{children:null===e||void 0===e?void 0:e.title},t)}))]})}),Object(i.jsx)("tbody",{children:null===d||void 0===d?void 0:d.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t}),null===n||void 0===n?void 0:n.map((function(n){return Object(i.jsx)("td",{children:(null===n||void 0===n?void 0:n.field)?l.get(e,null===n||void 0===n?void 0:n.field,""):Object(i.jsx)(a.a,{color:"primary",size:"sm",onClick:function(){return null===n||void 0===n?void 0:n.handle(Object(c.a)({},e))},children:(null===n||void 0===n?void 0:n.actionTitle)||s.a.t(j||"PREVIEW_PDF")})},"".concat(t,"-").concat(null===n||void 0===n?void 0:n.field))}))]},t)}))})]})})}},688:function(e,t,n){"use strict";var c=n(13),i=n.n(c),r=n(14),a=n(19),l=n(22),s=n(39),o=n(53),d=n.n(o),u=n(26),j=n(12),b={getAll:function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c,a=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=d.a.stringify(Object(r.a)({limit:-1,page:0},t)),e.prev=2,c="".concat(s.a.API.SYLLABUS,"?").concat(n),e.next=6,l.a.get(c);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(2),u.b.error(j.a.t("ERROR"));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:"",e.prev=1,!t){e.next=7;break}return n="".concat(s.a.API.SYLLABUS,"/").concat(t),e.next=6,l.a.get(n);case 6:return e.abrupt("return",e.sent);case 7:u.b.error(j.a.t("syllabus.SYLLABUS_INVALID")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),u.b.error(j.a.t("ERROR"));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()};t.a=b},698:function(e,t,n){"use strict";var c=n(3),i=(n(2),n(699)),r=n(728),a=n(729),l=n(730),s=n(12);n(731),n(732),n(733),n(734);t.a=function(e){var t=e.url,n=Object(r.scrollModePlugin)(),o=Object(l.zoomPlugin)(),d=o.CurrentScale,u=o.ZoomInButton,j=o.ZoomOutButton,b=Object(a.getFilePlugin)({fileNameGenerator:function(e){return null===e||void 0===e?void 0:e.name}}),v=b.DownloadButton;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"tools",style:{border:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",flexDirection:"column",height:"100%"},children:Object(c.jsxs)("div",{className:"btn-download",style:{alignItems:"center",backgroundColor:"#eeeeee",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",display:"flex",padding:"4px"},children:[Object(c.jsx)(v,{}),Object(c.jsx)("div",{style:{padding:"0px 2px",marginLeft:"auto"},children:Object(c.jsx)(j,{})}),Object(c.jsx)("div",{style:{padding:"0px 2px"},children:Object(c.jsx)(d,{})}),Object(c.jsx)("div",{style:{padding:"0px 2px"},children:Object(c.jsx)(u,{})})]})}),Object(c.jsx)(i.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.js",children:Object(c.jsx)(i.Viewer,{fileUrl:"".concat(t),renderError:function(){return Object(c.jsx)("div",{style:{alignItems:"center",border:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",height:"100%",justifyContent:"center",padding:"1.5rem"},children:Object(c.jsx)("div",{style:{backgroundColor:"#e53e3e",borderRadius:"0.25rem",color:"#fff",padding:"0.5rem"},children:s.a.t("ERROR_LOAD_DOCUMENT_PDF")})})},plugins:[n,b,o]})})]})}},711:function(e,t){},723:function(e,t){},724:function(e,t){},725:function(e,t){},726:function(e,t){},727:function(e,t){}}]);
//# sourceMappingURL=55.51c24bd7.chunk.js.map