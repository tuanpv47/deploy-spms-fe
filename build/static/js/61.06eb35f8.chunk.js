(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[61],{610:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return U}));var n=r(3),s=r(13),a=r.n(s),c=r(14),i=r(19),l=r(15),o=r(2),d=r(104),u=r(17),j=r(26),v=r(61),O=r(270),E=r(80),b=r(273),m=r(271),p=r(272),S=r(130),N=r(222),x=r(182),h=r(67),_=r(53),R=r.n(_),f=r(653),A=r(654),g=(r(959),r(6)),D=r(685),I=r(757),y=r(650),T=r(651),P=r(192),L=r(62);r(960);function M(e){var t=e.titleHeader;return Object(n.jsx)("div",{className:"page-header",children:Object(n.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:Object(n.jsx)("h1",{children:t.toUpperCase()})})})}var G=r(12),C=r(105);function U(){var e=Object(d.a)().t,t=Object(u.g)(),r=(Object(u.h)(),Object(o.useState)(null)),s=Object(l.a)(r,2),_=s[0],U=s[1],w=Object(o.useState)(!1),W=Object(l.a)(w,2),k=W[0],F=W[1],B=Object(o.useState)({email:"",username:"",firstName:"",lastName:"",isActive:!0,role:""}),H=Object(l.a)(B,2),q=H[0],Q=H[1],V=Object(o.useState)({color:"danger",isOpen:!1,messages:[]}),J=Object(l.a)(V,2),K=J[0],Y=J[1],z=Object(o.useState)(!1),Z=Object(l.a)(z,2),$=Z[0],X=Z[1],ee=[{value:!0,name:e("admin.user_edit.ACTIVE")},{value:!1,name:e("admin.user_edit.BLOCK")}],te=Object(o.useState)([]),re=Object(l.a)(te,2),ne=re[0],se=re[1];Object(o.useEffect)(Object(i.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=R.a.parse(window.location.search)).id&&(U(t.id),F(!0),ae(t.id)),e.prev=2,e.next=5,D.a.getAll();case 5:r=e.sent,se(r.contents),t.id||Q(Object(c.a)(Object(c.a)({},q),{},{role:r.contents[0].id})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])}))),[]);var ae=function(){var t=Object(i.a)(a.a.mark((function t(r){var n,s,c,i,l,o,d,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return X(!0),t.prev=1,t.next=4,I.a.getById(r);case 4:s=t.sent,Q({email:s.email,username:s.username,firstName:s.firstName,lastName:s.lastName,isActive:s.isActive,role:null===s||void 0===s||null===(n=s.role)||void 0===n?void 0:n.id}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),t.t0.response&&(403===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)||"NOT_OWNER"===String(null===t.t0||void 0===t.t0||null===(i=t.t0.response)||void 0===i?void 0:i.message)?j.b.error(e("RESPONSE_MESSAGE403")):401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)?j.b.error(e("RESPONSE_MESSAGE401")):400===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o?void 0:o.status)?j.b.error(e("RESPONSE_MESSAGE400")):409===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)?j.b.error(e("RESPONSE_MESSAGE409")):404===(null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u?void 0:u.status)?j.b.error(e("RESPONSE_MESSAGE404")):j.b.error(e("RESPONSE_MESSAGE500")));case 11:return t.prev=11,X(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}(),ce=function(){var r=Object(i.a)(a.a.mark((function r(n,s){var i,l,o,d,u,v,O,E,b,m,p,S,N,x,h,R,f,A,D,y,T,P,L,M,C,U,w;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s){r.next=2;break}return r.abrupt("return");case 2:if(!k){r.next=16;break}return i=n,r.prev=4,r.next=7,I.a.putById(_,Object(c.a)(Object(c.a)({},i),{},{role:i.role+"",isActive:!!(null===i||void 0===i?void 0:i.isActive)}));case 7:200===r.sent.status&&(Y({color:"success",isOpen:!0,messages:[e("admin.UPDATE_SUCCESS")]}),ae(_)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(4),(null===r.t0||void 0===r.t0?void 0:r.t0.response)&&(403===(null===r.t0||void 0===r.t0||null===(l=r.t0.response)||void 0===l?void 0:l.status)||"NOT_OWNER"===String(null===r.t0||void 0===r.t0||null===(o=r.t0.response)||void 0===o?void 0:o.message)?j.b.error(e("RESPONSE_MESSAGE403")):401===(null===r.t0||void 0===r.t0||null===(d=r.t0.response)||void 0===d?void 0:d.status)?j.b.error(e("RESPONSE_MESSAGE401")):400===(null===r.t0||void 0===r.t0||null===(u=r.t0.response)||void 0===u?void 0:u.status)?j.b.error(e("RESPONSE_MESSAGE400")):409===(null===r.t0||void 0===r.t0||null===(v=r.t0.response)||void 0===v?void 0:v.status)?j.b.error(e("RESPONSE_MESSAGE409")):404===(null===r.t0||void 0===r.t0||null===(O=r.t0.response)||void 0===O?void 0:O.status)?j.b.error(e("RESPONSE_MESSAGE404")):(null===(E=String(null===r.t0||void 0===r.t0||null===(b=r.t0.response)||void 0===b||null===(m=b.data)||void 0===m?void 0:m.error))||void 0===E?void 0:E.includes("ER_DUP_ENTRY"))?j.b.error(e("ER_DUP_ENTRY")):(null===(p=String(null===r.t0||void 0===r.t0||null===(S=r.t0.response)||void 0===S||null===(N=S.data)||void 0===N?void 0:N.error))||void 0===p?void 0:p.includes("ID_NOT_FOUND"))?j.b.error(e("RESPONSE_MESSAGE404")):j.b.error(e("RESPONSE_MESSAGE500")));case 14:r.next=27;break;case 16:return x=n,r.prev=17,r.next=20,I.a.post(Object(c.a)(Object(c.a)({},x),{},{role:"number"===typeof(null===n||void 0===n?void 0:n.role)?null===n||void 0===n?void 0:n.role:Number(null===n||void 0===n?void 0:n.role)}));case 20:(null===(h=r.sent)||void 0===h?void 0:h.id)?(j.b.success(e("admin.ADD_SUCCESS")),Y({color:"danger",isOpen:!1,messages:[]}),t.push("".concat(g.b.ADMIN_USER_LIST))):j.b.warning(G.a.t("admin.user_edit.".concat(null===h||void 0===h?void 0:h.message)||!1)),r.next=27;break;case 24:r.prev=24,r.t1=r.catch(17),(null===r.t1||void 0===r.t1?void 0:r.t1.response)&&(403===(null===r.t1||void 0===r.t1||null===(R=r.t1.response)||void 0===R?void 0:R.status)||"NOT_OWNER"===String(null===r.t1||void 0===r.t1||null===(f=r.t1.response)||void 0===f?void 0:f.message)?j.b.error(e("RESPONSE_MESSAGE403")):401===(null===r.t1||void 0===r.t1||null===(A=r.t1.response)||void 0===A?void 0:A.status)?j.b.error(e("RESPONSE_MESSAGE401")):400===(null===r.t1||void 0===r.t1||null===(D=r.t1.response)||void 0===D?void 0:D.status)?j.b.error(e("RESPONSE_MESSAGE400")):409===(null===r.t1||void 0===r.t1||null===(y=r.t1.response)||void 0===y?void 0:y.status)?j.b.error(e("RESPONSE_MESSAGE409")):404===(null===r.t1||void 0===r.t1||null===(T=r.t1.response)||void 0===T?void 0:T.status)?j.b.error(e("RESPONSE_MESSAGE404")):(null===(P=String(null===r.t1||void 0===r.t1||null===(L=r.t1.response)||void 0===L||null===(M=L.data)||void 0===M?void 0:M.error))||void 0===P?void 0:P.includes("ER_DUP_ENTRY"))?j.b.error(e("ER_DUP_ENTRY")):(null===(C=String(null===r.t1||void 0===r.t1||null===(U=r.t1.response)||void 0===U||null===(w=U.data)||void 0===w?void 0:w.error))||void 0===C?void 0:C.includes("ID_NOT_FOUND"))?j.b.error(e("RESPONSE_MESSAGE404")):j.b.error(e("RESPONSE_MESSAGE500")));case 27:case"end":return r.stop()}}),r,null,[[4,11],[17,24]])})));return function(e,t){return r.apply(this,arguments)}}(),ie=function(){var r=Object(i.a)(a.a.mark((function r(n){var s,c,i,l,o,d,u,v,O,E;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),s=200,r.prev=2,r.next=5,I.a.deleteById(_);case 5:r.sent.status===s&&(j.b.success(e("admin.common.DELETED")),t.push("".concat(g.b.ADMIN_USER_LIST))),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),r.t0.response&&(403===(null===r.t0||void 0===r.t0||null===(c=r.t0.response)||void 0===c?void 0:c.status)||"NOT_OWNER"===String(null===r.t0||void 0===r.t0||null===(i=r.t0.response)||void 0===i?void 0:i.message)?j.b.error(e("RESPONSE_MESSAGE403")):401===(null===r.t0||void 0===r.t0||null===(l=r.t0.response)||void 0===l?void 0:l.status)?j.b.error(e("RESPONSE_MESSAGE401")):400===(null===r.t0||void 0===r.t0||null===(o=r.t0.response)||void 0===o?void 0:o.status)?j.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE400")):409===(null===r.t0||void 0===r.t0||null===(d=r.t0.response)||void 0===d?void 0:d.status)?j.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE409")):404===(null===r.t0||void 0===r.t0||null===(u=r.t0.response)||void 0===u?void 0:u.status)?j.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE404")):(null===(v=String(null===r.t0||void 0===r.t0||null===(O=r.t0.response)||void 0===O||null===(E=O.data)||void 0===E?void 0:E.error))||void 0===v?void 0:v.includes("ID_NOT_FOUND"))?j.b.error(e("RESPONSE_MESSAGE404")):j.b.error(e("DELETE_ERROR")+": "+e("RESPONSE_MESSAGE500")));case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page",children:[$&&Object(n.jsx)(L.a,{}),Object(n.jsx)(y.a,{currentItem:e(k?"admin.user_edit.UPDATE_ACCOUNT":"admin.user_edit.ADD_ACCOUNT"),items:[{href:g.b.ADMIN_USER_LIST,title:e("admin.user_list.ACCOUNT_LIST")}]}),Object(n.jsx)(M,{titleHeader:e(k?"admin.user_edit.UPDATE_ACCOUNT":"admin.user_edit.ADD_ACCOUNT")}),Object(n.jsx)("div",{className:"page-content",children:Object(n.jsx)(f.c,{initialValues:q,enableReinitialize:!0,validationSchema:k?A.b().shape({email:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")).email(G.a.t("admin.user_edit.EMAIL_INVALID")),username:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")),firstName:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")),lastName:A.c().required(G.a.t("REQUIRED_FIELD_WARNING"))}):A.b().shape({email:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")).email(G.a.t("admin.user_edit.EMAIL_INVALID")),username:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")),password:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")).min(8,G.a.t("admin.PASSWORD_LENGTH_WARNING")).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,G.a.t("admin.PASSWORD_LENGTH_WARNING")),firstName:A.c().required(G.a.t("REQUIRED_FIELD_WARNING")),lastName:A.c().required(G.a.t("REQUIRED_FIELD_WARNING"))}),children:function(t){var r=t.values,s=t.errors,a=t.dirty,c=t.isValid,i=t.handleChange,l=t.handleReset;return Object(n.jsxs)(O.a,{children:[Object(n.jsx)(P.a,{color:K.color,isOpen:K.isOpen,messages:K.messages}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsxs)(b.a,{for:"email",className:"col-lg-3",children:["Email ",Object(n.jsx)(T.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.n,{})})}),Object(n.jsx)(N.a,{type:"email",name:"email",placeholder:e("admin.user_edit.EMAIL_PLACEHOLDER"),value:r.email,onChange:i,invalid:s.email,readOnly:k})]}),s.email&&Object(n.jsx)(x.a,{color:"danger",children:s.email})]})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsxs)(b.a,{for:"username",className:"col-lg-3",children:[e("admin.user_edit.USERNAME")," ",Object(n.jsx)(T.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.V,{})})}),Object(n.jsx)(N.a,{type:"text",name:"username",placeholder:e("admin.user_edit.USERNAME_PLACEHOLDER"),value:r.username,onChange:i,invalid:s.username,readOnly:k})]}),s.username&&Object(n.jsx)(x.a,{color:"danger",children:s.username})]})]})," ",Object(n.jsx)("br",{}),!k&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsxs)(b.a,{for:"password",className:"col-lg-3",children:[e("admin.user_edit.PASSWORD")," ",Object(n.jsx)(T.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.V,{})})}),Object(n.jsx)(N.a,{type:"password",name:"password",placeholder:e("admin.user_edit.PASSWORD_PLACEHOLDER"),value:r.password,onChange:i,invalid:s.password,readOnly:k})]}),s.password&&Object(n.jsx)(x.a,{color:"danger",children:s.password})]})]})," ",Object(n.jsx)("br",{})]}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsxs)(b.a,{for:"firstName",className:"col-lg-3",children:[e("admin.user_edit.FIRSTNAME")," ",Object(n.jsx)(T.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.P,{})})}),Object(n.jsx)(N.a,{type:"text",name:"firstName",placeholder:e("admin.user_edit.FIRSTNAME_PLACEHOLDER"),value:r.firstName,onChange:i,invalid:s.firstName})]}),s.firstName&&Object(n.jsx)(x.a,{color:"danger",children:s.firstName})]})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsxs)(b.a,{for:"lastName",className:"col-lg-3",children:[e("admin.user_edit.LASTNAME")," ",Object(n.jsx)(T.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.P,{})})}),Object(n.jsx)(N.a,{type:"text",name:"lastName",placeholder:e("admin.user_edit.LASTNAME_PLACEHOLDER"),value:r.lastName,onChange:i,invalid:s.lastName})]}),s.lastName&&Object(n.jsx)(x.a,{color:"danger",children:s.lastName})]})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsx)(b.a,{for:"isActive",className:"col-lg-3",children:e("admin.user_edit.STATUS")}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.w,{})})}),Object(n.jsx)(N.a,{type:"select",name:"isActive",value:r.isActive,onChange:i,children:ee&&ee.map((function(e,t){return Object(n.jsx)("option",{value:e.value,children:e.name},t)}))})]})})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(E.a,{className:"row",children:[Object(n.jsx)(b.a,{for:"role",className:"col-lg-3",children:e("admin.user_edit.ROLE")}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)(p.a,{addonType:"prepend",children:Object(n.jsx)(S.a,{children:Object(n.jsx)(v.Y,{})})}),Object(n.jsx)(N.a,{type:"select",name:"role",value:r.role,onChange:i,children:ne&&ne.map((function(e,t){return Object(n.jsx)("option",{value:e.id.toString(),children:e.name},t)}))})]})})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(E.a,{children:[Object(n.jsx)(h.a,{color:"success",disabled:Object(C.b)(s),onClick:function(){return ce(r,k?c:c&&a)},children:k?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v.o,{})," ",e("admin.common.UPDATE")]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v.z,{})," ",e("admin.common.ADD")]})}),"\u2003",k&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(h.a,{onClick:l,children:[Object(n.jsx)(v.M,{})," ",e("admin.common.REFRESH")]}),"\u2003",Object(n.jsxs)(h.a,{color:"danger",onClick:ie,children:[Object(n.jsx)(v.R,{})," ",e("admin.common.DELETE")]})]})]})]})}})})]})}},650:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3),s=(r(2),r(69)),a=r(259),c=r(260),i=r(61),l=r(6);function o(e){var t=e.items,r=e.currentItem;return Object(n.jsxs)(a.a,{children:[Object(n.jsx)(c.a,{active:!r,children:Object(n.jsx)(s.b,{to:l.b.WELCOME,children:Object(n.jsx)(i.s,{})})}),t&&t.map((function(e){var t=e.href,r=e.title;return Object(n.jsx)(c.a,{children:Object(n.jsx)(s.b,{to:t,children:r})})})),r&&Object(n.jsx)(c.a,{active:!0,children:r})]})}},651:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(3);r(2);function s(){return Object(n.jsx)("span",{style:{color:"red"},children:"(*)"})}},685:function(e,t,r){"use strict";var n=r(13),s=r.n(n),a=r(19),c=r(14),i=r(22),l=r(53),o=r.n(l),d="roles";t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.a.stringify(Object(c.a)({limit:-1,page:0},e)),r="".concat(d,"?").concat(t);return i.a.get(r)},getList:function(e){var t="".concat(d,"?page=").concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&search=".concat(e.searchKey)),null!==e.filter.isDeleted&&(t+="&isDeleted=".concat(e.filter.isDeleted)),i.a.get(t)},getById:function(e){var t="".concat(d,"/").concat(e);return i.a.get(t)},post:function(e){var t="".concat(d);return i.a.post(t,JSON.stringify(e))},putById:function(e,t){var r="".concat(d,"/").concat(e);return i.a.put(r,JSON.stringify(t))},deleteById:function(e){var t="".concat(d,"/").concat(e);return i.a.delete(t)},getRolePermission:function(){var e=Object(a.a)(s.a.mark((function e(t){var r,n,a,l=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n="/resources/permission/".concat(t),Object.keys(r).length&&(a=o.a.stringify(Object(c.a)({},r)),n+="?".concat(a)),e.next=5,i.a.get(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},757:function(e,t,r){"use strict";var n=r(14),s=r(53),a=r.n(s),c=r(22),i="users";t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.a.stringify(Object(n.a)({page:0},e)),r="".concat(i,"?").concat(t);return c.a.get(r)},getList:function(e){var t="".concat(i,"?page=").concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&search=".concat(e.searchKey)),e.filter.role&&(t+="&role=".concat(e.filter.role)),null!==e.filter.isActive&&(t+="&isActive=".concat(e.filter.isActive)),c.a.get(t)},getById:function(e){var t="".concat(i,"/").concat(e);return c.a.get(t)},post:function(e){var t="".concat(i);return c.a.post(t,JSON.stringify(e))},putById:function(e,t){var r="".concat(i,"/").concat(e);return c.a.put(r,JSON.stringify(t))},deleteById:function(e){var t="".concat(i,"/").concat(e);return c.a.delete(t)}}},959:function(e,t,r){},960:function(e,t,r){}}]);
//# sourceMappingURL=61.06eb35f8.chunk.js.map