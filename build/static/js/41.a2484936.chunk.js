(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[41],{1048:function(e,t,a){},1049:function(e,t,a){},1050:function(e,t,a){},1051:function(e,t,a){},1052:function(e,t,a){},1053:function(e,t,a){},592:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var c=a(3),n=a(14),r=a(13),s=a.n(r),i=a(19),l=a(15),o=a(2),d=a(27),j=a.n(d),u=a(104),h=a(61),b=a(53),m=a.n(b),O=a(26),x=(a(1048),a(650));function p(){var e=[];return e.push("Level"),e.push("Name"),e.push("Created at"),e.push("Created by"),e.push("Updated at"),e.push("Updated by"),e.push("Available status"),e}function f(e){var t=[];return t.push(e.mucDo),t.push(e.ten),t.push(e.createdAt),t.push(e.createdBy.email),t.push(e.updatedAt),t.push(e.updatedBy.email),t.push(e.isDeleted?"Deleted":"Available"),t}var g=a(659),v=a(674),y=a(67),E=a(17);a(1049);function k(e){var t=e.headerTitle,a=e.addPageUrl,n=Object(u.a)().t,r=Object(E.g)();return Object(c.jsx)("div",{className:"page-header",children:Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(c.jsx)("h1",{children:t.toUpperCase()}),Object(c.jsx)("div",{className:"align-self-center",children:Object(c.jsxs)(y.a,{color:"success",onClick:function(e){e.preventDefault(),r.push(a)},children:[Object(c.jsx)(h.z,{})," ",n("admin.common.ADD")]})})]})})}a(270),a(80),a(273);var C=a(222);var S=a(178),T=a(135);a(1050);function D(e){var t=e.headerTitle,a=e.deleteBtnIsHidden,n=e.handleDeleteOnClick,r=e.handleExportCSVOnClick,s=e.handleRefreshOnClick,i=Object(u.a)().t;return Object(c.jsxs)(S.a,{className:"table-header",children:[Object(c.jsx)(T.a,{lg:6,className:"container",children:Object(c.jsx)("div",{className:"vertical-center",children:t})}),Object(c.jsxs)(T.a,{lg:6,className:"text-right",children:[Object(c.jsx)(y.a,{color:"light",title:i("admin.common.DELETE"),onClick:n,className:a?"d-none":"",children:Object(c.jsx)(h.R,{fill:"red"})}),"\xa0",Object(c.jsx)(y.a,{color:"light",title:i("admin.common.EXPORT_CSV"),onClick:r,children:Object(c.jsx)(h.l,{fill:"orange"})}),"\xa0",Object(c.jsx)(y.a,{color:"light",title:i("admin.common.REFRESH"),onClick:s,children:Object(c.jsx)(h.M,{fill:"green"})})]})]})}var A=a(271),N=a(272);a(1051);function B(e){var t=e.currentLimit,a=e.currentSearchKey,n=e.handleLimitOnChange,r=e.handleSearchOnChange,s=e.handleSearchOnClick,i=Object(u.a)().t;return Object(c.jsxs)(S.a,{className:"table-tools",children:[Object(c.jsxs)(T.a,{lg:6,className:"d-flex",children:[Object(c.jsx)("div",{className:"align-self-center",children:i("admin.common.DISPLAY")}),"\xa0",Object(c.jsx)("div",{children:Object(c.jsxs)(C.a,{type:"select",value:t,onChange:n,children:[Object(c.jsx)("option",{value:8,children:"8"}),Object(c.jsx)("option",{value:16,children:"16"}),Object(c.jsx)("option",{value:32,children:"32"})]})}),"\xa0",Object(c.jsx)("div",{className:"align-self-center",children:i("admin.common.ROWS")})]}),Object(c.jsx)(T.a,{lg:6,className:"text-right",children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(C.a,{type:"text",placeholder:i("admin.common.SEARCH_PLACEHOLDER"),value:a,onChange:r}),Object(c.jsx)(N.a,{addonType:"prepend",children:Object(c.jsxs)(y.a,{onClick:s,children:[Object(c.jsx)(h.G,{})," ",i("admin.common.SEARCH")]})})]})})]})}a(1052);var L=a(656);function _(e){var t=e.currentUrl,a=e.currentStartPage,n=e.currentPage,r=e.currentLimit,s=e.currentTotal,i=Object(u.a)().t;return Object(c.jsxs)(S.a,{className:"table-footer",children:[Object(c.jsxs)(T.a,{lg:6,children:[i("admin.common.DISPLAY"),"\xa0",Object(c.jsx)("b",{children:(n-1)*r+1}),"\xa0 -\xa0",Object(c.jsx)("b",{children:s<n*r?s:n*r}),"\xa0",i("admin.common.ON")," \xa0",Object(c.jsx)("b",{children:s}),"\xa0",i("admin.common.ITEMS")]}),Object(c.jsx)(T.a,{lg:6,className:"table-pagination",children:Object(c.jsx)(L.a,{url:t,startPage:a,page:n,limit:r,total:s})})]})}var P=a(269),w=a(265),I=a(655),U=a(105);a(1053);function R(e){var t=e.titles,a=e.detailTitles,n=e.items,r=e.currentSorter,s=e.handleCheckItemOnChange,i=e.handleCheckAllOnChange,l=e.handleSortOnClick,o=e.handleEditOnClick,d=e.handleShowDetailOnClick,j=Object(u.a)().t;return Object(c.jsx)("div",{className:"table-body",children:Object(c.jsxs)(P.a,{responsive:!0,bordered:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"align-middle",children:Object(c.jsx)(C.a,{type:"checkbox",className:"align-checkbox",id:"check-all",onChange:i})}),t&&t.map((function(e,t){return Object(c.jsxs)("th",{"data-value":e.name,children:[e.icon,"\xa0",e.text,Object(c.jsxs)("div",{className:"pull-right",onClick:function(){return l(e.name)},children:[e.name&&r.sortBy!==e.name&&Object(c.jsx)(h.J,{}),e.name&&r.sortBy===e.name&&"ASC"===r.sortType&&Object(c.jsx)(h.L,{}),e.name&&r.sortBy===e.name&&"DESC"===r.sortType&&Object(c.jsx)(h.K,{})]})]},t)})),Object(c.jsxs)("th",{"data-value":"options",children:[Object(c.jsx)(h.j,{})," ",j("admin.common.OPTIONS")]})]})}),Object(c.jsx)("tbody",{children:n&&n.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{className:"row-table",id:"row-".concat(e.id),children:[Object(c.jsx)("td",{className:"align-middle",children:Object(c.jsx)(C.a,{type:"checkbox",className:"align-checkbox",name:"row-checkbox",id:"checkbox-".concat(e.id),value:e.id,onChange:function(){return s(e.id)}})}),t&&t.map((function(t,a){return"isDeleted"===t.field?Object(c.jsx)("td",{children:e.isDeleted?Object(c.jsx)(w.a,{color:"dark",children:j("admin.common.DELETED")}):Object(c.jsx)(w.a,{color:"light",children:j("admin.common.AVAILABLE")})}):Object(c.jsx)("td",{children:I.get(e,t.field)},a)})),Object(c.jsxs)("td",{children:[Object(c.jsx)(y.a,{color:"light",title:j("admin.common.EDIT"),onClick:function(){return o(e.id)},children:Object(c.jsx)(h.m,{fill:"blue"})}),"\xa0",Object(c.jsx)(y.a,{color:"light",title:j("admin.common.SHOW_DETAIL"),id:"show-detail-".concat(e.id),onClick:function(){return d(e.id)},children:Object(c.jsx)(h.a,{fill:"green"})})]})]},"row-".concat(e.id)),Object(c.jsx)("tr",{className:"detail-row d-none",id:"detail-row-".concat(e.id),children:Object(c.jsx)("td",{colSpan:1e3,children:Object(c.jsx)(S.a,{className:"table-detail",children:Object(c.jsx)(T.a,{lg:12,children:a&&a.map((function(t,a){return"isDeleted"===t.field?Object(c.jsxs)(S.a,{children:[Object(c.jsx)(T.a,{lg:4,className:"info-name",children:j("admin.common.AVAILABLE_STATUS")}),Object(c.jsx)(T.a,{lg:8,className:"info-value",children:Object(c.jsx)("span",{children:e.isDeleted?Object(c.jsx)(w.a,{color:"dark",children:j("admin.common.DELETED")}):Object(c.jsx)(w.a,{color:"light",children:j("admin.common.AVAILABLE")})})})]}):Object(c.jsxs)(S.a,{children:[Object(c.jsx)(T.a,{lg:4,className:"info-name",children:t.text}),Object(c.jsx)(T.a,{lg:8,className:"info-value",children:Object(c.jsx)("span",{children:(null===t||void 0===t?void 0:t.isDate)?Object(U.a)(I.get(e,t.field)):I.get(e,t.field)})})]})}))})})})},"detail-row-".concat(e.id))]})}))})]})})}var K=a(6),M=a(62);function V(){var e=Object(u.a)().t,t=Object(E.g)(),a=Object(E.h)(),r=Object(o.useState)(!1),d=Object(l.a)(r,2),b=d[0],y=d[1],C=Object(o.useState)({startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{isDeleted:null}}),S=Object(l.a)(C,2),T=S[0],A=S[1],N=[{field:"ten",name:"ten",text:e("admin.standard_output_list.NAME"),icon:Object(c.jsx)(h.P,{})},{field:"mucDo",name:"mucDo",text:e("admin.standard_output_list.LEVEL"),icon:Object(c.jsx)(h.i,{})}],L=[{field:"ten",text:e("admin.standard_output_list.NAME")},{field:"mucDo",text:e("admin.standard_output_list.LEVEL")},{field:"createdAt",text:e("admin.standard_output_list.CREATED_AT"),isDate:!0},{field:"updatedBy.email",text:e("admin.standard_output_list.UPDATED_BY")},{field:"updatedAt",text:e("admin.standard_output_list.UPDATED_AT"),isDate:!0},{field:"updatedBy.email",text:e("admin.standard_output_list.UPDATED_BY")}],P=Object(o.useState)([]),w=Object(l.a)(P,2),I=w[0],U=w[1],V=Object(o.useState)(0),H=Object(l.a)(V,2),J=H[0],G=H[1],Y=Object(o.useState)(!0),W=Object(l.a)(Y,2),F=W[0],z=W[1];Object(o.useEffect)((function(){var e=m.a.parse(window.location.search),t={startPage:e.startPage?parseInt(e.startPage):T.startPage,page:e.page?parseInt(e.page):T.page,limit:e.limit?parseInt(e.limit):T.limit,sorter:{sortBy:e.sortBy?e.sortBy:T.sorter.sortBy,sortType:e.sortType?e.sortType:T.sorter.sortType},searchKey:e.searchKey?e.searchKey:T.searchKey,filter:{}};A(t),X(t)}),[a]);var X=function(){var t=Object(i.a)(s.a.mark((function t(a){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,v.a.getList(a);case 4:(c=t.sent)&&(U(c.contents),G(c.total)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),U([]),t.t0.response&&(403===t.t0.response.status||401===t.t0.response.status?O.b.error(e("RESPONSE_MESSAGE401")):400===t.t0.response.status?O.b.error(e("RESPONSE_MESSAGE400")):O.b.error(e("RESPONSE_MESSAGE500")));case 12:return t.prev=12,y(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(e){return t.apply(this,arguments)}}(),q=function(){var e=document.getElementsByClassName("row-table"),t=document.getElementsByName("row-checkbox");z(!0);for(var a=0;a<e.length;a++)e[a].classList.remove("selected-row"),t[a].checked=!1},Q=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByName("row-checkbox"),a=0;case 2:if(!(a<t.length)){e.next=10;break}if(!t[a].checked){e.next=7;break}return e.next=6,standardOutputAPi.deleteById(t[a].value);case 6:X(T);case 7:a++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"page",children:[b&&Object(c.jsx)(M.a,{}),Object(c.jsx)(x.a,{currentItem:e("admin.standard_output_list.LIST")}),Object(c.jsx)(k,{headerTitle:e("admin.standard_output_list.LIST"),addPageUrl:K.b.ADMIN_STANDARD_OUTPUT_EDIT}),Object(c.jsx)(D,{headerTitle:e("admin.standard_output_list.TABLE"),deleteBtnIsHidden:F,handleDeleteOnClick:Q,handleExportCSVOnClick:function(){Object(g.a)("Untitle.csv",I,p,f)},handleRefreshOnClick:function(){q();var e={startPage:1,page:1,limit:8,sorter:{sortBy:null,sortType:null},searchKey:"",filter:{}};A(e),X(e)}}),Object(c.jsx)(B,{currentLimit:T.limit,currentSearchKey:T.searchKey,handleLimitOnChange:function(e){q();var t=Object(n.a)(Object(n.a)({},T),{},{startPage:1,page:1,limit:e.target.value});A(t),X(t)},handleSearchOnChange:function(e){A(Object(n.a)(Object(n.a)({},T),{},{searchKey:e.target.value}))},handleSearchOnClick:function(e){if(T.searchKey){q();var t=Object(n.a)(Object(n.a)({},T),{},{startPage:1,page:1});A(t),X(t)}}}),Object(c.jsx)(R,{titles:N,detailTitles:L,items:I,currentSorter:T.sorter,handleCheckItemOnChange:function(e){var t=document.getElementById("row-"+e);if(document.getElementById("checkbox-"+e).checked)z(!1),t.classList.add("selected-row");else{document.getElementById("check-all").checked=!1,t.classList.remove("selected-row");for(var a=!1,c=document.getElementsByName("row-checkbox"),n=0;n<c.length;n++)if(c[n].checked){a=!0;break}a||z(!0)}},handleCheckAllOnChange:function(e){var t=document.getElementsByClassName("row-table"),a=document.getElementsByName("row-checkbox");if(e.target.checked){z(!1);for(var c=0;c<t.length;c++)t[c].classList.add("selected-row"),a[c].checked=!0}else{z(!0);for(var n=0;n<t.length;n++)t[n].classList.remove("selected-row"),a[n].checked=!1}},handleSortOnClick:function(e){q();var t="ASC";e===T.sorter.sortBy&&"ASC"===T.sorter.sortType&&(t="DESC");var a=Object(n.a)(Object(n.a)({},T),{},{startPage:1,page:1,sorter:{sortBy:e,sortType:t}});A(a),X(a)},handleEditOnClick:function(e){t.push("".concat(K.b.ADMIN_STANDARD_OUTPUT_EDIT,"?id=").concat(e))},handleShowDetailOnClick:function(e){var t=document.getElementById("show-detail-"+e),a=document.getElementById("detail-row-"+e);a.classList.contains("d-none")?(a.classList.remove("d-none"),j.a.render(Object(c.jsx)(h.b,{fill:"green"}),t)):(a.classList.add("d-none"),j.a.render(Object(c.jsx)(h.a,{fill:"green"}),t))}}),Object(c.jsx)(_,{currentUrl:function(e){var t=K.b.ADMIN_STANDARD_OUTPUT_LIST,a={sortBy:e.sorter.sortBy,sortType:e.sorter.sortType,searchKey:e.searchKey,isDeleted:e.filter.isDeleted},c=m.a.stringify(a);return"".concat(t,"?").concat(c,"&")}(T),currentStartPage:T.startPage,currentPage:T.page,currentLimit:T.limit,currentTotal:J})]})}},650:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(3),n=(a(2),a(69)),r=a(259),s=a(260),i=a(61),l=a(6);function o(e){var t=e.items,a=e.currentItem;return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(s.a,{active:!a,children:Object(c.jsx)(n.b,{to:l.b.WELCOME,children:Object(c.jsx)(i.s,{})})}),t&&t.map((function(e){var t=e.href,a=e.title;return Object(c.jsx)(s.a,{children:Object(c.jsx)(n.b,{to:t,children:a})})})),a&&Object(c.jsx)(s.a,{active:!0,children:a})]})}},656:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(3),n=(a(2),a(274)),r=a(275),s=a(276),i=a(17);a(657);function l(e){var t=e.url,a=e.startPage,l=e.page,o=e.limit,d=e.total,j=Object(i.g)();return Object(c.jsxs)(n.a,{children:[Object(c.jsx)(r.a,{disabled:1===l,children:Object(c.jsx)(s.a,{first:!0,onClick:function(){j.push("".concat(t,"startPage=1&page=1&limit=").concat(o))}})}),Object(c.jsx)(r.a,{disabled:1===l,children:Object(c.jsx)(s.a,{previous:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(l<=a?a-1:a,"&page=").concat(l-1,"&limit=").concat(o))}})}),Object(c.jsx)(r.a,{active:l===a,disabled:d<=0,children:Object(c.jsx)(s.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(a,"&page=").concat(a,"&limit=").concat(o))},children:a})}),Object(c.jsx)(r.a,{active:l===a+1,disabled:(a+1)*o-d>=o,children:Object(c.jsx)(s.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(a,"&page=").concat(a+1,"&limit=").concat(o))},children:a+1})}),Object(c.jsx)(r.a,{active:l===a+2,disabled:(a+2)*o-d>=o,children:Object(c.jsx)(s.a,{onClick:function(){j.push("".concat(t,"startPage=").concat(a,"&page=").concat(a+2,"&limit=").concat(o))},children:a+2})}),Object(c.jsx)(r.a,{disabled:(l+1)*o-d>=o,children:Object(c.jsx)(s.a,{next:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(l>=a+2?a+1:a,"&page=").concat(l+1,"&limit=").concat(o))}})}),Object(c.jsx)(r.a,{disabled:(l+1)*o-d>=o,children:Object(c.jsx)(s.a,{last:!0,onClick:function(){j.push("".concat(t,"startPage=").concat(parseInt(d/o)+(d%o===0?0:1),"&page=").concat(parseInt(d/o)+(d%o===0?0:1),"&limit=").concat(o))}})})]})}},657:function(e,t,a){},659:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));function c(e,t,a,c){var n=[],r=a();n.push(r.join(","));for(var s=0;s<t.length;s++)r=c(t[s]),n.push(r.join(","));!function(e,t){var a=new Blob([e],{type:"text/csv"}),c=document.createElement("a");c.download=t,c.href=window.URL.createObjectURL(a),c.style.display="none",document.body.appendChild(c),c.click()}(n.join("\n"),e)}},674:function(e,t,a){"use strict";var c=a(14),n=a(22),r=a(53),s=a.n(r);t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.a.stringify(Object(c.a)({limit:-1,page:0},e)),a="chuan-dau-ra?".concat(t);return n.a.get(a)},getList:function(e){var t="".concat("chuan-dau-ra","?page=").concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&searchKey=".concat(e.searchKey)),n.a.get(t)},getById:function(e){var t="chuan-dau-ra/".concat(e);return n.a.get(t)},post:function(e){return n.a.post("chuan-dau-ra",JSON.stringify(e))},putById:function(e,t){var a="chuan-dau-ra/".concat(e);return n.a.put(a,JSON.stringify(t))},deleteById:function(e){var t="chuan-dau-ra/".concat(e);return n.a.delete(t)}}}}]);
//# sourceMappingURL=41.a2484936.chunk.js.map