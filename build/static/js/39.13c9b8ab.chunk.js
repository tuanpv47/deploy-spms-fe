(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[39],{585:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var c=n(3),a=n(14),r=n(13),i=n.n(r),s=n(19),l=n(15),o=n(2),d=n(27),j=n.n(d),u=n(104),h=n(61),b=n(53),O=n.n(b),m=(n(992),n(650));function x(){var e=[];return e.push("Code"),e.push("Name"),e}function g(e){var t=[];return t.push(e.ma),t.push(e.ten),t}var v=n(659),p=n(716),f=n(67),E=n(17);n(993);function S(e){var t=e.headerTitle,n=e.addPageUrl,a=Object(u.a)().t,r=Object(E.g)();return Object(c.jsx)("div",{className:"page-header",children:Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(c.jsx)("h1",{children:t.toUpperCase()}),Object(c.jsx)("div",{className:"align-self-center",children:Object(c.jsxs)(f.a,{color:"success",onClick:function(e){e.preventDefault(),r.push(n)},children:[Object(c.jsx)(h.z,{})," ",a("admin.common.ADD")]})})]})})}n(270),n(80),n(273);var y=n(222);var C=n(178),k=n(135);n(994);function N(e){var t=e.headerTitle,n=e.deleteBtnIsHidden,a=e.handleDeleteOnClick,r=e.handleExportCSVOnClick,i=e.handleRefreshOnClick,s=Object(u.a)().t;return Object(c.jsxs)(C.a,{className:"table-header",children:[Object(c.jsx)(k.a,{lg:6,className:"container",children:Object(c.jsx)("div",{className:"vertical-center",children:t})}),Object(c.jsxs)(k.a,{lg:6,className:"text-right",children:[Object(c.jsx)(f.a,{color:"light",title:s("admin.common.DELETE"),onClick:a,className:n?"d-none":"",children:Object(c.jsx)(h.R,{fill:"red"})}),"\xa0",Object(c.jsx)(f.a,{color:"light",title:s("admin.common.EXPORT_CSV"),onClick:r,children:Object(c.jsx)(h.l,{fill:"orange"})}),"\xa0",Object(c.jsx)(f.a,{color:"light",title:s("admin.common.REFRESH"),onClick:i,children:Object(c.jsx)(h.M,{fill:"green"})})]})]})}var T=n(271),D=n(272);n(995);function _(e){var t=e.currentLimit,n=e.currentSearchKey,a=e.handleLimitOnChange,r=e.handleSearchOnChange,i=e.handleSearchOnClick,s=Object(u.a)().t;return Object(c.jsxs)(C.a,{className:"table-tools",children:[Object(c.jsxs)(k.a,{lg:6,className:"d-flex",children:[Object(c.jsx)("div",{className:"align-self-center",children:s("admin.common.DISPLAY")}),"\xa0",Object(c.jsx)("div",{children:Object(c.jsxs)(y.a,{type:"select",value:t,onChange:a,children:[Object(c.jsx)("option",{value:8,children:"8"}),Object(c.jsx)("option",{value:16,children:"16"}),Object(c.jsx)("option",{value:32,children:"32"})]})}),"\xa0",Object(c.jsx)("div",{className:"align-self-center",children:s("admin.common.ROWS")})]}),Object(c.jsx)(k.a,{lg:6,className:"text-right",children:Object(c.jsxs)(T.a,{children:[Object(c.jsx)(y.a,{type:"text",placeholder:s("admin.common.SEARCH_PLACEHOLDER"),value:n,onChange:r}),Object(c.jsx)(D.a,{addonType:"prepend",children:Object(c.jsxs)(f.a,{onClick:i,children:[Object(c.jsx)(h.G,{})," ",s("admin.common.SEARCH")]})})]})})]})}n(996);var A=n(656);function L(e){var t=e.currentUrl,n=e.currentStartPage,a=e.currentPage,r=e.currentLimit,i=e.currentTotal,s=Object(u.a)().t;return Object(c.jsxs)(C.a,{className:"table-footer",children:[Object(c.jsxs)(k.a,{lg:6,children:[s("admin.common.DISPLAY"),"\xa0",Object(c.jsx)("b",{children:(a-1)*r+(i>0?1:0)}),"\xa0 -\xa0",Object(c.jsx)("b",{children:i<a*r?i:a*r}),"\xa0",s("admin.common.ON")," \xa0",Object(c.jsx)("b",{children:i}),"\xa0",s("admin.common.ITEMS")]}),Object(c.jsx)(k.a,{lg:6,className:"table-pagination",children:Object(c.jsx)(A.a,{url:t,startPage:n,page:a,limit:r,total:i})})]})}var I=n(269),R=n(265),P=n(655);n(997);function B(e){var t=e.titles,n=e.detailTitles,a=e.items,r=e.currentSorter,i=e.handleCheckItemOnChange,s=e.handleCheckAllOnChange,l=e.handleSortOnClick,o=e.handleEditOnClick,d=e.handleShowDetailOnClick,j=Object(u.a)().t;return Object(c.jsx)("div",{className:"table-body",children:Object(c.jsxs)(I.a,{responsive:!0,bordered:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"align-middle",children:Object(c.jsx)(y.a,{type:"checkbox",className:"align-checkbox",id:"check-all",onChange:s})}),t&&t.map((function(e,t){return Object(c.jsxs)("th",{"data-value":e.name,children:[e.icon,"\xa0",e.text,Object(c.jsxs)("div",{className:"pull-right",onClick:function(){return l(e.name)},children:[e.name&&r.sortBy!==e.name&&Object(c.jsx)(h.J,{}),e.name&&r.sortBy===e.name&&"ASC"===r.sortType&&Object(c.jsx)(h.L,{}),e.name&&r.sortBy===e.name&&"DESC"===r.sortType&&Object(c.jsx)(h.K,{})]})]},t)})),Object(c.jsxs)("th",{"data-value":"options",children:[Object(c.jsx)(h.j,{})," ",j("admin.common.OPTIONS")]})]})}),Object(c.jsx)("tbody",{children:a&&a.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{className:"row-table",id:"row-".concat(e.id),children:[Object(c.jsx)("td",{className:"align-middle",children:Object(c.jsx)(y.a,{type:"checkbox",className:"align-checkbox",name:"row-checkbox",id:"checkbox-".concat(e.id),value:e.id,onChange:function(){return i(e.id)}})}),t&&t.map((function(t,n){return"isDeleted"===t.field?Object(c.jsx)("td",{children:e.isDeleted?Object(c.jsx)(R.a,{color:"dark",children:j("admin.common.DELETED")}):Object(c.jsx)(R.a,{color:"light",children:j("admin.common.AVAILABLE")})}):Object(c.jsx)("td",{children:P.get(e,t.field)},n)})),Object(c.jsxs)("td",{children:[Object(c.jsx)(f.a,{color:"light",title:j("admin.common.EDIT"),onClick:function(){return o(e.id)},children:Object(c.jsx)(h.m,{fill:"blue"})}),"\xa0",Object(c.jsx)(f.a,{color:"light",title:j("admin.common.SHOW_DETAIL"),id:"show-detail-".concat(e.id),onClick:function(){return d(e.id)},children:Object(c.jsx)(h.a,{fill:"green"})})]})]},"row-".concat(e.id)),Object(c.jsx)("tr",{className:"detail-row d-none",id:"detail-row-".concat(e.id),children:Object(c.jsx)("td",{colSpan:1e3,children:Object(c.jsx)(C.a,{className:"table-detail",children:Object(c.jsx)(k.a,{lg:12,children:n&&n.map((function(t,n){return"isDeleted"===t.field?Object(c.jsxs)(C.a,{children:[Object(c.jsx)(k.a,{lg:4,className:"info-name",children:j("admin.common.AVAILABLE_STATUS")}),Object(c.jsx)(k.a,{lg:8,className:"info-value",children:Object(c.jsx)("span",{children:e.isDeleted?Object(c.jsx)(R.a,{color:"dark",children:j("admin.common.DELETED")}):Object(c.jsx)(R.a,{color:"light",children:j("admin.common.AVAILABLE")})})})]}):Object(c.jsxs)(C.a,{children:[Object(c.jsx)(k.a,{lg:4,className:"info-name",children:t.text}),Object(c.jsx)(k.a,{lg:8,className:"info-value",children:Object(c.jsx)("span",{children:P.get(e,t.field)})})]})}))})})})},"detail-row-".concat(e.id))]})}))})]})})}var w=n(6),M=n(62),G=n(652),K=n(26),U=n(12);function H(){var e=Object(u.a)().t,t=Object(E.g)(),n=Object(E.h)(),r=Object(o.useState)(!1),d=Object(l.a)(r,2),b=d[0],f=d[1],y=Object(o.useState)({startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{isDeleted:null}}),C=Object(l.a)(y,2),k=C[0],T=C[1],D=Object(o.useState)(!1),A=Object(l.a)(D,2),I=A[0],R=A[1],P=function(){R(!I)},H=[{field:"ma",name:"ma",text:e("admin.training_system_list.CODE"),icon:Object(c.jsx)(h.i,{})},{field:"ten",name:"ten",text:e("admin.training_system_list.NAME"),icon:Object(c.jsx)(h.P,{})}],V=[{field:"ma",text:e("admin.training_system_list.CODE")},{field:"ten",text:e("admin.training_system_list.NAME")}],Y=Object(o.useState)([]),F=Object(l.a)(Y,2),J=F[0],W=F[1],z=Object(o.useState)(0),X=Object(l.a)(z,2),q=X[0],Q=X[1],Z=Object(o.useState)(!0),$=Object(l.a)(Z,2),ee=$[0],te=$[1];Object(o.useEffect)((function(){var e=O.a.parse(window.location.search),t={startPage:e.startPage?parseInt(e.startPage):k.startPage,page:e.page?parseInt(e.page):k.page,limit:e.limit?parseInt(e.limit):k.limit,sorter:{sortBy:e.sortBy?e.sortBy:k.sorter.sortBy,sortType:e.sortType?e.sortType:k.sorter.sortType},searchKey:e.searchKey?e.searchKey:k.searchKey,filter:{isDeleted:e.isDeleted?"true"===e.isDeleted:k.filter.isDeleted}};T(t),ne(t)}),[n]);var ne=function(){var t=Object(s.a)(i.a.mark((function t(n){var c,a,r,s,l,o,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,p.a.getList(n);case 4:c=t.sent,W(c.contents),Q(c.total),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),t.t0.response&&(403===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)||"NOT_OWNER"===String(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.message)?K.b.error(e("RESPONSE_MESSAGE403")):401===(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)?K.b.error(e("RESPONSE_MESSAGE401")):400===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)?K.b.error(e("RESPONSE_MESSAGE400")):409===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o?void 0:o.status)?K.b.error(e("RESPONSE_MESSAGE409")):404===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)?K.b.error(e("RESPONSE_MESSAGE404")):K.b.error(e("RESPONSE_MESSAGE500")));case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}(),ce=function(){var e=document.getElementsByClassName("row-table"),t=document.getElementsByName("row-checkbox");te(!0);for(var n=0;n<e.length;n++)e[n].classList.remove("selected-row"),t[n].checked=!1},ae=function(){var t=Object(s.a)(i.a.mark((function t(n){var c,a,r,s,l,o,d,j,u,h,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),c=document.getElementsByName("row-checkbox"),a=0;case 3:if(!(a<c.length)){t.next=24;break}if(!c[a].checked){t.next=21;break}return t.prev=5,f(!0),t.next=9,p.a.deleteById(c[a].value);case 9:t.sent,ne(k),K.b.success(U.a.t("admin.common.DELETED")),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),P(),t.t0.response&&(403===(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.status)||"NOT_OWNER"===String(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.message)?K.b.error(e("RESPONSE_MESSAGE403")):401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)?K.b.error(e("RESPONSE_MESSAGE401")):400===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o?void 0:o.status)?K.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE400")):409===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)?K.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE409")):404===(null===t.t0||void 0===t.t0||null===(j=t.t0.response)||void 0===j?void 0:j.status)?K.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE404")):(null===(u=String(null===t.t0||void 0===t.t0||null===(h=t.t0.response)||void 0===h||null===(b=h.data)||void 0===b?void 0:b.error))||void 0===u?void 0:u.includes("ID_NOT_FOUND"))?K.b.error(e("RESPONSE_MESSAGE404")):K.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE500")));case 18:return t.prev=18,f(!1),t.finish(18);case 21:a++,t.next=3;break;case 24:P(),ce();case 26:case"end":return t.stop()}}),t,null,[[5,14,18,21]])})));return function(e){return t.apply(this,arguments)}}(),re=function(){var t=Object(s.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,n=Object(a.a)(Object(a.a)({},k),{},{page:1,limit:null}),t.next=5,p.a.getList(n);case 5:c=t.sent,"Untitle.csv",Object(v.a)("Untitle.csv",c.contents,x,g),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),K.b.error(e("RESPONSE_MESSAGE500"));case 13:return t.prev=13,f(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"page",children:[b&&Object(c.jsx)(M.a,{}),Object(c.jsx)(m.a,{currentItem:e("admin.training_system_list.LIST")}),Object(c.jsx)(S,{headerTitle:e("admin.training_system_list.LIST"),addPageUrl:w.b.ADMIN_TRAINING_SYSTEM_EDIT}),Object(c.jsx)(G.a,{modal:I,toggle:P,headerTitle:e("admin.common.DELETE_CONFIRM_HEADER"),bodyContent:e("admin.common.DELETE_CONFIRM_BODY"),handleOkButtonOnClick:ae,handleCancelButtonOnClick:function(e){e.preventDefault(),P()}}),Object(c.jsx)(N,{headerTitle:e("admin.training_system_list.TABLE"),deleteBtnIsHidden:ee,handleDeleteOnClick:function(e){e.preventDefault(),P()},handleExportCSVOnClick:re,handleRefreshOnClick:function(){ce();var e={startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{isDeleted:null}};T(e),ne(e)}}),Object(c.jsx)(_,{currentLimit:k.limit,currentSearchKey:k.searchKey,handleLimitOnChange:function(e){ce();var t=Object(a.a)(Object(a.a)({},k),{},{startPage:1,page:1,limit:e.target.value});T(t),ne(t)},handleSearchOnChange:function(e){T(Object(a.a)(Object(a.a)({},k),{},{searchKey:e.target.value}))},handleSearchOnClick:function(e){if(k.searchKey){ce();var t=Object(a.a)(Object(a.a)({},k),{},{startPage:1,page:1});T(t),ne(t)}}}),Object(c.jsx)(B,{titles:H,detailTitles:V,items:J,currentSorter:k.sorter,handleCheckItemOnChange:function(e){var t=document.getElementById("row-"+e);if(document.getElementById("checkbox-"+e).checked)te(!1),t.classList.add("selected-row");else{document.getElementById("check-all").checked=!1,t.classList.remove("selected-row");for(var n=!1,c=document.getElementsByName("row-checkbox"),a=0;a<c.length;a++)if(c[a].checked){n=!0;break}n||te(!0)}},handleCheckAllOnChange:function(e){var t=document.getElementsByClassName("row-table"),n=document.getElementsByName("row-checkbox");if(e.target.checked){te(!1);for(var c=0;c<t.length;c++)t[c].classList.add("selected-row"),n[c].checked=!0}else{te(!0);for(var a=0;a<t.length;a++)t[a].classList.remove("selected-row"),n[a].checked=!1}},handleSortOnClick:function(e){ce();var t="ASC";e===k.sorter.sortBy&&"ASC"===k.sorter.sortType&&(t="DESC");var n=Object(a.a)(Object(a.a)({},k),{},{startPage:1,page:1,sorter:{sortBy:e,sortType:t}});T(n),ne(n)},handleEditOnClick:function(e){t.push("".concat(w.b.ADMIN_TRAINING_SYSTEM_EDIT,"?id=").concat(e))},handleShowDetailOnClick:function(e){var t=document.getElementById("show-detail-"+e),n=document.getElementById("detail-row-"+e);n.classList.contains("d-none")?(n.classList.remove("d-none"),j.a.render(Object(c.jsx)(h.b,{fill:"green"}),t)):(n.classList.add("d-none"),j.a.render(Object(c.jsx)(h.a,{fill:"green"}),t))}}),Object(c.jsx)(L,{currentUrl:function(e){var t=w.b.ADMIN_TRAINING_SYSTEM_LIST,n={sortBy:e.sorter.sortBy,sortType:e.sorter.sortType,searchKey:e.searchKey},c=O.a.stringify(n);return"".concat(t,"?").concat(c,"&")}(k),currentStartPage:k.startPage,currentPage:k.page,currentLimit:k.limit,currentTotal:q})]})}},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(3),a=(n(2),n(69)),r=n(259),i=n(260),s=n(61),l=n(6);function o(e){var t=e.items,n=e.currentItem;return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(i.a,{active:!n,children:Object(c.jsx)(a.b,{to:l.b.WELCOME,children:Object(c.jsx)(s.s,{})})}),t&&t.map((function(e){var t=e.href,n=e.title;return Object(c.jsx)(i.a,{children:Object(c.jsx)(a.b,{to:t,children:n})})})),n&&Object(c.jsx)(i.a,{active:!0,children:n})]})}},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(15);var c=n(3),a=(n(2),n(297)),r=n(266),i=n(267),s=n(268),l=n(67),o=(n(222),n(104));function d(e){var t=e.modal,n=e.toggle,d=e.headerTitle,j=e.bodyContent,u=e.handleOkButtonOnClick,h=e.handleCancelButtonOnClick,b=e.isModalDelete,O=void 0!==b&&b,m=e.titleOk,x=void 0===m?"":m,g=e.titleCancel,v=void 0===g?"":g,p=Object(o.a)().t;return Object(c.jsxs)(a.a,{isOpen:t,toggle:n,children:[Object(c.jsx)(r.a,{toggle:n,children:d}),Object(c.jsx)(i.a,{children:j}),Object(c.jsxs)(s.a,{children:[Object(c.jsx)(l.a,{color:"".concat(O?"danger":"primary"),onClick:u,children:p(x||"admin.common.OK")}),Object(c.jsx)(l.a,{color:"warning",onClick:h,children:p(v||"admin.common.CANCEL")})]})]})}},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(3),a=(n(2),n(274)),r=n(275),i=n(276),s=n(17);n(657);function l(e){var t=e.url,n=e.startPage,l=e.page,o=e.limit,d=e.total,j=Object(s.g)();return Object(c.jsxs)(a.a,{children:[Object(c.jsx)(r.a,{disabled:1===l,children:Object(c.jsx)(i.a,{first:!0,onClick:function(){j.push("".concat(t,"startPage=1&page=1&limit=").concat(o))}})}),Object(c.jsx)(r.a,{disabled:1===l,children:Object(c.jsx)(i.a,{previous:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(l<=n?n-1:n,"&page=").concat(l-1,"&limit=").concat(o))}})}),Object(c.jsx)(r.a,{active:l===n,disabled:d<=0,children:Object(c.jsx)(i.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n,"&limit=").concat(o))},children:n})}),Object(c.jsx)(r.a,{active:l===n+1,disabled:(n+1)*o-d>=o,children:Object(c.jsx)(i.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n+1,"&limit=").concat(o))},children:n+1})}),Object(c.jsx)(r.a,{active:l===n+2,disabled:(n+2)*o-d>=o,children:Object(c.jsx)(i.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n+2,"&limit=").concat(o))},children:n+2})}),Object(c.jsx)(r.a,{disabled:(l+1)*o-d>=o,children:Object(c.jsx)(i.a,{next:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(l>=n+2?n+1:n,"&page=").concat(l+1,"&limit=").concat(o))}})}),Object(c.jsx)(r.a,{disabled:(l+1)*o-d>=o,children:Object(c.jsx)(i.a,{last:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(parseInt(d/o)+(d%o===0?0:1),"&page=").concat(parseInt(d/o)+(d%o===0?0:1),"&limit=").concat(o))}})})]})}},657:function(e,t,n){},659:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));function c(e,t,n,c){var a=[],r=n();a.push(r.join(","));for(var i=0;i<t.length;i++)r=c(t[i]),a.push(r.join(","));!function(e,t){var n=new Blob([e],{type:"text/csv"}),c=document.createElement("a");c.download=t,c.href=window.URL.createObjectURL(n),c.style.display="none",document.body.appendChild(c),c.click()}(a.join("\n"),e)}},716:function(e,t,n){"use strict";var c=n(14),a=n(22),r=n(53),i=n.n(r);t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.a.stringify(Object(c.a)({limit:-1,page:0},e)),n="he-dao-tao?".concat(t);return a.a.get(n)},getList:function(e){var t="he-dao-tao?page=".concat(e.page-1,"&limit=").concat(e.limit);return e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&search=".concat(e.searchKey)),null!==e.filter.isDeleted&&(t+="&isDeleted=".concat(e.filter.isDeleted)),a.a.get(t)},getById:function(e){var t="he-dao-tao/".concat(e);return a.a.get(t)},post:function(e){return a.a.post("he-dao-tao",JSON.stringify(e))},putById:function(e,t){var n="he-dao-tao/".concat(e);return a.a.put(n,JSON.stringify(t))},deleteById:function(e){var t="he-dao-tao/".concat(e);return a.a.delete(t)}}},992:function(e,t,n){},993:function(e,t,n){},994:function(e,t,n){},995:function(e,t,n){},996:function(e,t,n){},997:function(e,t,n){}}]);
//# sourceMappingURL=39.13c9b8ab.chunk.js.map