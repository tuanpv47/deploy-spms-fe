(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[40],{1026:function(e,t,n){},1027:function(e,t,n){},1028:function(e,t,n){},1029:function(e,t,n){},1030:function(e,t,n){},1031:function(e,t,n){},589:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var a=n(3),c=n(14),i=n(13),r=n.n(i),l=n(19),s=n(15),o=n(2),d=n(27),j=n.n(d),h=n(104),u=n(61),b=n(53),m=n.n(b),O=(n(1026),n(650));function p(){var e=[];return e.push("Code"),e.push("Name"),e.push("Created at"),e.push("Created by"),e.push("Updated at"),e.push("Updated by"),e.push("Available status"),e}function g(e){var t=[];return t.push(e.ma),t.push(e.ten),t.push(e.createdAt),t.push(e.createdBy.email),t.push(e.updatedAt),t.push(e.updatedBy.email),t.push(e.isDeleted?"Deleted":"Available"),t}var x=n(659),f=n(763),v=n(67),E=n(17);n(1027);function y(e){var t=e.headerTitle,n=e.addPageUrl,c=Object(h.a)().t,i=Object(E.g)();return Object(a.jsx)("div",{className:"page-header",children:Object(a.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(a.jsx)("h1",{children:t.toUpperCase()}),Object(a.jsx)("div",{className:"align-self-center",children:Object(a.jsxs)(v.a,{color:"success",onClick:function(e){e.preventDefault(),i.push(n)},children:[Object(a.jsx)(u.z,{})," ",c("admin.common.ADD")]})})]})})}n(270),n(80),n(273);var C=n(222);var k=n(178),_=n(135);n(1028);function S(e){var t=e.headerTitle,n=e.deleteBtnIsHidden,c=e.handleDeleteOnClick,i=e.handleExportCSVOnClick,r=e.handleRefreshOnClick,l=Object(h.a)().t;return Object(a.jsxs)(k.a,{className:"table-header",children:[Object(a.jsx)(_.a,{lg:6,className:"container",children:Object(a.jsx)("div",{className:"vertical-center",children:t})}),Object(a.jsxs)(_.a,{lg:6,className:"text-right",children:[Object(a.jsx)(v.a,{color:"light",title:l("admin.common.DELETE"),onClick:c,className:n?"d-none":"",children:Object(a.jsx)(u.R,{fill:"red"})}),"\xa0",Object(a.jsx)(v.a,{color:"light",title:l("admin.common.EXPORT_CSV"),onClick:i,children:Object(a.jsx)(u.l,{fill:"orange"})}),"\xa0",Object(a.jsx)(v.a,{color:"light",title:l("admin.common.REFRESH"),onClick:r,children:Object(a.jsx)(u.M,{fill:"green"})})]})]})}var D=n(271),N=n(272);n(1029);function T(e){var t=e.currentLimit,n=e.currentSearchKey,c=e.handleLimitOnChange,i=e.handleSearchOnChange,r=e.handleSearchOnClick,l=Object(h.a)().t;return Object(a.jsxs)(k.a,{className:"table-tools",children:[Object(a.jsxs)(_.a,{lg:6,className:"d-flex",children:[Object(a.jsx)("div",{className:"align-self-center",children:l("admin.common.DISPLAY")}),"\xa0",Object(a.jsx)("div",{children:Object(a.jsxs)(C.a,{type:"select",value:t,onChange:c,children:[Object(a.jsx)("option",{value:8,children:"8"}),Object(a.jsx)("option",{value:16,children:"16"}),Object(a.jsx)("option",{value:32,children:"32"})]})}),"\xa0",Object(a.jsx)("div",{className:"align-self-center",children:l("admin.common.ROWS")})]}),Object(a.jsx)(_.a,{lg:6,className:"text-right",children:Object(a.jsxs)(D.a,{children:[Object(a.jsx)(C.a,{type:"text",placeholder:l("admin.common.SEARCH_PLACEHOLDER"),value:n,onChange:i}),Object(a.jsx)(N.a,{addonType:"prepend",children:Object(a.jsxs)(v.a,{onClick:r,children:[Object(a.jsx)(u.G,{})," ",l("admin.common.SEARCH")]})})]})})]})}n(1030);var A=n(656);function B(e){var t=e.currentUrl,n=e.currentStartPage,c=e.currentPage,i=e.currentLimit,r=e.currentTotal,l=Object(h.a)().t;return Object(a.jsxs)(k.a,{className:"table-footer",children:[Object(a.jsxs)(_.a,{lg:6,children:[l("admin.common.DISPLAY"),"\xa0",Object(a.jsx)("b",{children:(c-1)*i+1}),"\xa0 -\xa0",Object(a.jsx)("b",{children:r<c*i?r:c*i}),"\xa0",l("admin.common.ON")," \xa0",Object(a.jsx)("b",{children:r}),"\xa0",l("admin.common.ITEMS")]}),Object(a.jsx)(_.a,{lg:6,className:"table-pagination",children:Object(a.jsx)(A.a,{url:t,startPage:n,page:c,limit:i,total:r})})]})}var L=n(269),P=n(265),I=n(655);n(1031);function w(e){var t=e.titles,n=e.detailTitles,c=e.items,i=e.currentSorter,r=e.handleCheckItemOnChange,l=e.handleCheckAllOnChange,s=e.handleSortOnClick,o=e.handleEditOnClick,d=e.handleShowDetailOnClick,j=Object(h.a)().t;return Object(a.jsx)("div",{className:"table-body",children:Object(a.jsxs)(L.a,{responsive:!0,bordered:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"align-middle",children:Object(a.jsx)(C.a,{type:"checkbox",className:"align-checkbox",id:"check-all",onChange:l})}),t&&t.map((function(e,t){return Object(a.jsxs)("th",{"data-value":e.name,children:[e.icon,"\xa0",e.text,Object(a.jsxs)("div",{className:"pull-right",onClick:function(){return s(e.name)},children:[e.name&&i.sortBy!==e.name&&Object(a.jsx)(u.J,{}),e.name&&i.sortBy===e.name&&"ASC"===i.sortType&&Object(a.jsx)(u.L,{}),e.name&&i.sortBy===e.name&&"DESC"===i.sortType&&Object(a.jsx)(u.K,{})]})]},t)})),Object(a.jsxs)("th",{"data-value":"options",children:[Object(a.jsx)(u.j,{})," ",j("admin.common.OPTIONS")]})]})}),Object(a.jsx)("tbody",{children:c&&c.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("tr",{className:"row-table",id:"row-".concat(e.id),children:[Object(a.jsx)("td",{className:"align-middle",children:Object(a.jsx)(C.a,{type:"checkbox",className:"align-checkbox",name:"row-checkbox",id:"checkbox-".concat(e.id),value:e.id,onChange:function(){return r(e.id)}})}),t&&t.map((function(t,n){return"isDeleted"===t.field?Object(a.jsx)("td",{children:e.isDeleted?Object(a.jsx)(P.a,{color:"dark",children:j("admin.common.DELETED")}):Object(a.jsx)(P.a,{color:"light",children:j("admin.common.AVAILABLE")})}):Object(a.jsx)("td",{children:I.get(e,t.field)},n)})),Object(a.jsxs)("td",{children:[Object(a.jsx)(v.a,{color:"light",title:j("admin.common.EDIT"),onClick:function(){return o(e.id)},children:Object(a.jsx)(u.m,{fill:"blue"})}),"\xa0",Object(a.jsx)(v.a,{color:"light",title:j("admin.common.SHOW_DETAIL"),id:"show-detail-".concat(e.id),onClick:function(){return d(e.id)},children:Object(a.jsx)(u.a,{fill:"green"})})]})]},"row-".concat(e.id)),Object(a.jsx)("tr",{className:"detail-row d-none",id:"detail-row-".concat(e.id),children:Object(a.jsx)("td",{colSpan:1e3,children:Object(a.jsx)(k.a,{className:"table-detail",children:Object(a.jsx)(_.a,{lg:12,children:n&&n.map((function(t,n){return"isDeleted"===t.field?Object(a.jsxs)(k.a,{children:[Object(a.jsx)(_.a,{lg:4,className:"info-name",children:j("admin.common.AVAILABLE_STATUS")}),Object(a.jsx)(_.a,{lg:8,className:"info-value",children:Object(a.jsx)("span",{children:e.isDeleted?Object(a.jsx)(P.a,{color:"dark",children:j("admin.common.DELETED")}):Object(a.jsx)(P.a,{color:"light",children:j("admin.common.AVAILABLE")})})})]}):Object(a.jsxs)(k.a,{children:[Object(a.jsx)(_.a,{lg:4,className:"info-name",children:t.text}),Object(a.jsx)(_.a,{lg:8,className:"info-value",children:Object(a.jsx)("span",{children:I.get(e,t.field)})})]})}))})})})},"detail-row-".concat(e.id))]})}))})]})})}var R=n(6),M=n(62),K=n(652),U=n(26),G=n(12);function H(){var e=Object(h.a)().t,t=Object(E.g)(),n=Object(E.h)(),i=Object(o.useState)(!1),d=Object(s.a)(i,2),b=d[0],v=d[1],C=function(){v(!b)},k=Object(o.useState)(!1),_=Object(s.a)(k,2),D=_[0],N=_[1],A=Object(o.useState)({startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{isDeleted:null}}),L=Object(s.a)(A,2),P=L[0],I=L[1],H=[{field:"ma",name:"ma",text:e("admin.type_teaching_plan_list.CODE"),icon:Object(a.jsx)(u.i,{})},{field:"ten",name:"ten",text:e("admin.type_teaching_plan_list.NAME"),icon:Object(a.jsx)(u.P,{})}],Y=[{field:"ma",text:e("admin.type_type_teaching_plan_list.CODE")},{field:"ten",text:e("admin.type_type_teaching_plan_list.NAME")},{field:"createdAt",text:e("admin.type_type_teaching_plan_list.CREATED_AT"),isDate:!0},{field:"updatedBy.email",text:e("admin.type_type_teaching_plan_list.UPDATED_BY")},{field:"updatedAt",text:e("admin.type_type_teaching_plan_list.UPDATED_AT"),isDate:!0},{field:"updatedBy.email",text:e("admin.type_type_teaching_plan_list.UPDATED_BY")}],V=Object(o.useState)([]),F=Object(s.a)(V,2),J=F[0],W=F[1],z=Object(o.useState)(0),X=Object(s.a)(z,2),q=X[0],Q=X[1],Z=Object(o.useState)(!0),$=Object(s.a)(Z,2),ee=$[0],te=$[1];Object(o.useEffect)((function(){var e=m.a.parse(window.location.search),t={startPage:e.startPage?parseInt(e.startPage):P.startPage,page:e.page?parseInt(e.page):P.page,limit:e.limit?parseInt(e.limit):P.limit,sorter:{sortBy:e.sortBy?e.sortBy:P.sorter.sortBy,sortType:e.sortType?e.sortType:P.sorter.sortType},searchKey:e.searchKey?e.searchKey:P.searchKey,filter:{isDeleted:e.isDeleted?"true"===e.isDeleted:P.filter.isDeleted}};I(t),ne(t)}),[n]);var ne=function(){var e=Object(l.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,f.a.getList(t);case 3:(n=e.sent)&&(W(n.contents),Q(n.total)),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=document.getElementsByClassName("row-table"),t=document.getElementsByName("row-checkbox");te(!0);for(var n=0;n<e.length;n++)e[n].classList.remove("selected-row"),t[n].checked=!1},ce=function(){var t=Object(l.a)(r.a.mark((function t(n){var a,c,i,l,s,o,d,j,h,u,b;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=document.getElementsByName("row-checkbox"),c=0;case 3:if(!(c<a.length)){t.next=24;break}if(!a[c].checked){t.next=21;break}return t.prev=5,N(!0),t.next=9,typeTeachingPlanAPi.deleteById(a[c].value);case 9:t.sent,ne(P),U.b.success(G.a.t("admin.common.DELETED")),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),C(),t.t0.response&&(403===(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.status)||"NOT_OWNER"===String(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.message)?U.b.error(e("RESPONSE_MESSAGE403")):401===(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)?U.b.error(e("RESPONSE_MESSAGE401")):400===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o?void 0:o.status)?U.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE400")):409===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)?U.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE409")):404===(null===t.t0||void 0===t.t0||null===(j=t.t0.response)||void 0===j?void 0:j.status)?U.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE404")):(null===(h=String(null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u||null===(b=u.data)||void 0===b?void 0:b.error))||void 0===h?void 0:h.includes("ID_NOT_FOUND"))?U.b.error(e("RESPONSE_MESSAGE404")):U.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE500")));case 18:return t.prev=18,N(!1),t.finish(18);case 21:c++,t.next=3;break;case 24:C(),ae();case 26:case"end":return t.stop()}}),t,null,[[5,14,18,21]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"page",children:[D&&Object(a.jsx)(M.a,{}),Object(a.jsx)(O.a,{currentItem:e("admin.type_teaching_plan_list.LIST")}),Object(a.jsx)(y,{headerTitle:e("admin.type_teaching_plan_list.LIST"),addPageUrl:R.b.ADMIN_TYPE_TEACHING_PLAN_EDIT}),Object(a.jsx)(K.a,{modal:b,toggle:C,headerTitle:e("admin.common.DELETE_CONFIRM_HEADER"),bodyContent:e("admin.common.DELETE_CONFIRM_BODY"),handleOkButtonOnClick:ce,handleCancelButtonOnClick:function(e){e.preventDefault(),C()}}),Object(a.jsx)(S,{headerTitle:e("admin.type_teaching_plan_list.TABLE"),deleteBtnIsHidden:ee,handleDeleteOnClick:function(e){e.preventDefault(),C()},handleExportCSVOnClick:function(){Object(x.a)("Untitle.csv",J,p,g)},handleRefreshOnClick:function(){ae();var e={startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{isDeleted:null}};I(e),ne(e)}}),Object(a.jsx)(T,{currentLimit:P.limit,currentSearchKey:P.searchKey,handleLimitOnChange:function(e){ae();var t=Object(c.a)(Object(c.a)({},P),{},{startPage:1,page:1,limit:e.target.value});I(t),ne(t)},handleSearchOnChange:function(e){I(Object(c.a)(Object(c.a)({},P),{},{searchKey:e.target.value}))},handleSearchOnClick:function(e){if(P.searchKey){ae();var t=Object(c.a)(Object(c.a)({},P),{},{startPage:1,page:1});I(t),ne(t)}}}),Object(a.jsx)(w,{titles:H,detailTitles:Y,items:J,currentSorter:P.sorter,handleCheckItemOnChange:function(e){var t=document.getElementById("row-"+e);if(document.getElementById("checkbox-"+e).checked)te(!1),t.classList.add("selected-row");else{document.getElementById("check-all").checked=!1,t.classList.remove("selected-row");for(var n=!1,a=document.getElementsByName("row-checkbox"),c=0;c<a.length;c++)if(a[c].checked){n=!0;break}n||te(!0)}},handleCheckAllOnChange:function(e){var t=document.getElementsByClassName("row-table"),n=document.getElementsByName("row-checkbox");if(e.target.checked){te(!1);for(var a=0;a<t.length;a++)t[a].classList.add("selected-row"),n[a].checked=!0}else{te(!0);for(var c=0;c<t.length;c++)t[c].classList.remove("selected-row"),n[c].checked=!1}},handleSortOnClick:function(e){ae();var t="ASC";e===P.sorter.sortBy&&"ASC"===P.sorter.sortType&&(t="DESC");var n=Object(c.a)(Object(c.a)({},P),{},{startPage:1,page:1,sorter:{sortBy:e,sortType:t}});I(n),ne(n)},handleEditOnClick:function(e){t.push("".concat(R.b.ADMIN_TYPE_TEACHING_PLAN_EDIT,"?id=").concat(e))},handleShowDetailOnClick:function(e){var t=document.getElementById("show-detail-"+e),n=document.getElementById("detail-row-"+e);n.classList.contains("d-none")?(n.classList.remove("d-none"),j.a.render(Object(a.jsx)(u.b,{fill:"green"}),t)):(n.classList.add("d-none"),j.a.render(Object(a.jsx)(u.a,{fill:"green"}),t))}}),Object(a.jsx)(B,{currentUrl:function(e){var t=R.b.ADMIN_TYPE_TEACHING_PLAN_LIST,n={sortBy:e.sorter.sortBy,sortType:e.sorter.sortType,searchKey:e.searchKey,isDeleted:e.filter.isDeleted},a=m.a.stringify(n);return"".concat(t,"?").concat(a,"&")}(P),currentStartPage:P.startPage,currentPage:P.page,currentLimit:P.limit,currentTotal:q})]})}},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),c=(n(2),n(69)),i=n(259),r=n(260),l=n(61),s=n(6);function o(e){var t=e.items,n=e.currentItem;return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(r.a,{active:!n,children:Object(a.jsx)(c.b,{to:s.b.WELCOME,children:Object(a.jsx)(l.s,{})})}),t&&t.map((function(e){var t=e.href,n=e.title;return Object(a.jsx)(r.a,{children:Object(a.jsx)(c.b,{to:t,children:n})})})),n&&Object(a.jsx)(r.a,{active:!0,children:n})]})}},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(15);var a=n(3),c=(n(2),n(297)),i=n(266),r=n(267),l=n(268),s=n(67),o=(n(222),n(104));function d(e){var t=e.modal,n=e.toggle,d=e.headerTitle,j=e.bodyContent,h=e.handleOkButtonOnClick,u=e.handleCancelButtonOnClick,b=e.isModalDelete,m=void 0!==b&&b,O=e.titleOk,p=void 0===O?"":O,g=e.titleCancel,x=void 0===g?"":g,f=Object(o.a)().t;return Object(a.jsxs)(c.a,{isOpen:t,toggle:n,children:[Object(a.jsx)(i.a,{toggle:n,children:d}),Object(a.jsx)(r.a,{children:j}),Object(a.jsxs)(l.a,{children:[Object(a.jsx)(s.a,{color:"".concat(m?"danger":"primary"),onClick:h,children:f(p||"admin.common.OK")}),Object(a.jsx)(s.a,{color:"warning",onClick:u,children:f(x||"admin.common.CANCEL")})]})]})}},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),c=(n(2),n(274)),i=n(275),r=n(276),l=n(17);n(657);function s(e){var t=e.url,n=e.startPage,s=e.page,o=e.limit,d=e.total,j=Object(l.g)();return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(i.a,{disabled:1===s,children:Object(a.jsx)(r.a,{first:!0,onClick:function(){j.push("".concat(t,"startPage=1&page=1&limit=").concat(o))}})}),Object(a.jsx)(i.a,{disabled:1===s,children:Object(a.jsx)(r.a,{previous:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(s<=n?n-1:n,"&page=").concat(s-1,"&limit=").concat(o))}})}),Object(a.jsx)(i.a,{active:s===n,disabled:d<=0,children:Object(a.jsx)(r.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n,"&limit=").concat(o))},children:n})}),Object(a.jsx)(i.a,{active:s===n+1,disabled:(n+1)*o-d>=o,children:Object(a.jsx)(r.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n+1,"&limit=").concat(o))},children:n+1})}),Object(a.jsx)(i.a,{active:s===n+2,disabled:(n+2)*o-d>=o,children:Object(a.jsx)(r.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(n,"&page=").concat(n+2,"&limit=").concat(o))},children:n+2})}),Object(a.jsx)(i.a,{disabled:(s+1)*o-d>=o,children:Object(a.jsx)(r.a,{next:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(s>=n+2?n+1:n,"&page=").concat(s+1,"&limit=").concat(o))}})}),Object(a.jsx)(i.a,{disabled:(s+1)*o-d>=o,children:Object(a.jsx)(r.a,{last:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(parseInt(d/o)+(d%o===0?0:1),"&page=").concat(parseInt(d/o)+(d%o===0?0:1),"&limit=").concat(o))}})})]})}},657:function(e,t,n){},659:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));function a(e,t,n,a){var c=[],i=n();c.push(i.join(","));for(var r=0;r<t.length;r++)i=a(t[r]),c.push(i.join(","));!function(e,t){var n=new Blob([e],{type:"text/csv"}),a=document.createElement("a");a.download=t,a.href=window.URL.createObjectURL(n),a.style.display="none",document.body.appendChild(a),a.click()}(c.join("\n"),e)}},763:function(e,t,n){"use strict";var a=n(14),c=n(22),i=n(53),r=n.n(i);t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.a.stringify(Object(a.a)({page:0},e)),n="loai-ke-hoach-giang-day?".concat(t);return c.a.get(n)},getList:function(e){var t="loai-ke-hoach-giang-day?page=".concat(e.page-1,"&limit=").concat(e.limit);return e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&search=".concat(e.searchKey)),null!==e.filter.isDeleted&&(t+="&isDeleted=".concat(e.filter.isDeleted)),c.a.get(t)},getById:function(e){var t="loai-ke-hoach-giang-day/".concat(e);return c.a.get(t)},post:function(e){return c.a.post("loai-ke-hoach-giang-day",JSON.stringify(e))},putById:function(e,t){var n="loai-ke-hoach-giang-day/".concat(e);return c.a.put(n,JSON.stringify(t))},deleteById:function(e){var t="loai-ke-hoach-giang-day/".concat(e);return c.a.delete(t)}}}}]);
//# sourceMappingURL=40.b8451597.chunk.js.map