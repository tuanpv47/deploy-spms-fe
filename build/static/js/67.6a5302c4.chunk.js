(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[67],{613:function(e,t,r){"use strict";r.r(t);var n=r(3),s=r(14),a=r(13),o=r.n(a),i=r(19),c=r(15),l=r(2),d=r(104),u=r(12),E=r(53),v=r.n(E),S=r(653),O=r(654),b=r(17),j=r(26),p=(r(990),r(650));r(991);function m(e){var t=e.headerTitle;return Object(n.jsx)("div",{className:"page-header",children:Object(n.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:Object(n.jsx)("h1",{children:t.toUpperCase()})})})}var _=r(760),h=r(61),x=r(270),R=r(80),N=r(273),f=r(271),A=r(272),g=r(130),D=r(222),P=r(182),M=r(67),y=r(651),T=r(192),G=r(62),I=r(6);t.default=function(e){e.values,e.handleChange,e.resetForm,e.errors;var t=Object(d.a)().t,r=Object(b.g)(),a=Object(b.h)(),E=Object(l.useState)(null),C=Object(c.a)(E,2),L=C[0],k=C[1],w=Object(l.useState)(!1),U=Object(c.a)(w,2),F=U[0],B=U[1],W=Object(l.useState)({ma:"",ten:""}),Y=Object(c.a)(W,2),J=Y[0],H=Y[1],K=Object(l.useState)({color:"danger",isOpen:!1,messages:[]}),V=Object(c.a)(K,2),q=V[0],z=(V[1],Object(l.useState)(!1)),Q=Object(c.a)(z,2),$=Q[0],X=Q[1];Object(l.useEffect)(Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=v.a.parse(window.location.search)).id&&(k(t.id),B(!0),Z(t.id));case 2:case"end":return e.stop()}}),e)}))),[a]);var Z=function(){var e=Object(i.a)(o.a.mark((function e(r){var n,s,a,i,c,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,_.a.getById(r);case 4:n=e.sent,H({ma:n.ma,ten:n.ten}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&(403===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)||"NOT_OWNER"===String(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.message)?j.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?j.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.status)?j.b.error(t("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)?j.b.error(t("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)?j.b.error(t("RESPONSE_MESSAGE404")):j.b.error(t("RESPONSE_MESSAGE500")));case 11:return e.prev=11,X(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(i.a)(o.a.mark((function e(n,a){var i,c,l,d,u,E,v,S,O,b,p,m,h,x,R,N,f,A,g,D,P,M,y,T,G,C,k;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:if(!F){e.next=17;break}return i=Object(s.a)({},n),e.prev=4,e.next=7,_.a.putById(L,i);case 7:e.sent,j.b.success(t("admin.UPDATE_SUCCESS")),Z(L),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(null===e.t0||void 0===e.t0?void 0:e.t0.response)&&(403===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.status)||"NOT_OWNER"===String(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.message)?j.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)?j.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u?void 0:u.status)?j.b.error(t("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(E=e.t0.response)||void 0===E?void 0:E.status)?j.b.error(t("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.status)?j.b.error(t("RESPONSE_MESSAGE404")):(null===(S=String(null===e.t0||void 0===e.t0||null===(O=e.t0.response)||void 0===O||null===(b=O.data)||void 0===b?void 0:b.error))||void 0===S?void 0:S.includes("ER_DUP_ENTRY"))?j.b.error(t("ER_DUP_ENTRY")):(null===(p=String(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m||null===(h=m.data)||void 0===h?void 0:h.error))||void 0===p?void 0:p.includes("ID_NOT_FOUND"))?j.b.error(t("RESPONSE_MESSAGE404")):j.b.error(t("RESPONSE_MESSAGE500")));case 15:e.next=29;break;case 17:return x=Object(s.a)({},n),e.prev=18,e.next=21,_.a.post(x);case 21:(R=e.sent)?j.b.success(t("admin.ADD_SUCCESS")):j.b.error(t("RESPONSE_MESSAGE500")),r.push("".concat(I.b.ADMIN_ACADEMIC_YEAR_EDIT,"?id=").concat(R.id)),e.next=29;break;case 26:e.prev=26,e.t1=e.catch(18),(null===e.t1||void 0===e.t1?void 0:e.t1.response)&&(403===(null===e.t1||void 0===e.t1||null===(N=e.t1.response)||void 0===N?void 0:N.status)||"NOT_OWNER"===String(null===e.t1||void 0===e.t1||null===(f=e.t1.response)||void 0===f?void 0:f.message)?j.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t1||void 0===e.t1||null===(A=e.t1.response)||void 0===A?void 0:A.status)?j.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t1||void 0===e.t1||null===(g=e.t1.response)||void 0===g?void 0:g.status)?j.b.error(t("RESPONSE_MESSAGE400")):409===(null===e.t1||void 0===e.t1||null===(D=e.t1.response)||void 0===D?void 0:D.status)?j.b.error(t("RESPONSE_MESSAGE409")):404===(null===e.t1||void 0===e.t1||null===(P=e.t1.response)||void 0===P?void 0:P.status)?j.b.error(t("RESPONSE_MESSAGE404")):(null===(M=String(null===e.t1||void 0===e.t1||null===(y=e.t1.response)||void 0===y||null===(T=y.data)||void 0===T?void 0:T.error))||void 0===M?void 0:M.includes("ER_DUP_ENTRY"))?j.b.error(t("ER_DUP_ENTRY")):(null===(G=String(null===e.t1||void 0===e.t1||null===(C=e.t1.response)||void 0===C||null===(k=C.data)||void 0===k?void 0:k.error))||void 0===G?void 0:G.includes("ID_NOT_FOUND"))?j.b.error(t("RESPONSE_MESSAGE404")):j.b.error(t("RESPONSE_MESSAGE500")));case 29:case"end":return e.stop()}}),e,null,[[4,12],[18,26]])})));return function(t,r){return e.apply(this,arguments)}}(),te=function(){var e=Object(i.a)(o.a.mark((function e(n){var s,a,i,c,l,d,u,E,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,_.a.deleteById(L);case 4:e.sent?(j.b.success(t("admin.common.DELETED")),r.push(I.b.ADMIN_ACADEMIC_YEAR_LIST)):j.b.error(t("DELETE_ERROR")+": "+t("RESPONSE_MESSAGE500")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&(403===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)||"NOT_OWNER"===String(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.message)?j.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?j.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.status)?j.b.error(t("DELETE_ERROR")+": "+t("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)?j.b.error(t("DELETE_ERROR")+": "+t("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)?j.b.error(t("DELETE_ERROR")+": "+t("RESPONSE_MESSAGE404")):(null===(u=String(null===e.t0||void 0===e.t0||null===(E=e.t0.response)||void 0===E||null===(v=E.data)||void 0===v?void 0:v.error))||void 0===u?void 0:u.includes("ID_NOT_FOUND"))?j.b.error(t("RESPONSE_MESSAGE404")):j.b.error(t("DELETE_ERROR")+": "+t("RESPONSE_MESSAGE500")));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page",children:[$&&Object(n.jsx)(G.a,{}),Object(n.jsx)(p.a,{currentItem:t(F?"admin.academic_year_edit.UPDATE":"admin.academic_year_edit.ADD"),items:[{href:I.b.ADMIN_ACADEMIC_YEAR_LIST,title:t("admin.academic_year_list.LIST")}]}),Object(n.jsx)(m,{headerTitle:t(F?"admin.academic_year_edit.UPDATE":"admin.academic_year_edit.ADD")}),Object(n.jsx)("div",{className:"page-content",children:Object(n.jsx)(S.c,{initialValues:J,enableReinitialize:!0,validationSchema:O.b().shape({ma:O.c().required(u.a.t("REQUIRED_FIELD_WARNING")),ten:O.c().required(u.a.t("REQUIRED_FIELD_WARNING")).matches(/^((19|20)\d{2})[-]((19|20)\d{2})$/g,"".concat(u.a.t("RESPONSE_MESSAGE400")," 19xx-20xx"))}),children:function(e){var r=e.values,s=e.errors,a=e.dirty,o=e.isValid,i=e.handleChange,c=e.handleReset;e.setFieldValue;return Object(n.jsxs)(x.a,{children:[Object(n.jsx)(T.a,{color:q.color,isOpen:q.isOpen,messages:q.messages}),Object(n.jsxs)(R.a,{className:"row",children:[Object(n.jsxs)(N.a,{for:"value",className:"col-lg-3",children:[t("admin.academic_year_edit.CODE")," ",Object(n.jsx)(y.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(A.a,{addonType:"prepend",children:Object(n.jsx)(g.a,{children:Object(n.jsx)(h.i,{})})}),Object(n.jsx)(D.a,{type:"text",name:"ma",placeholder:t("admin.academic_year_edit.CODE_PLACEHOLDER"),value:r.ma,onChange:i,invalid:s.ma,readOnly:F})]}),s.ma&&Object(n.jsx)(P.a,{color:"danger",children:s.ma})]})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(R.a,{className:"row",children:[Object(n.jsxs)(N.a,{for:"name",className:"col-lg-3",children:[t("admin.academic_year_edit.NAME")," ",Object(n.jsx)(y.a,{})]}),Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(A.a,{addonType:"prepend",children:Object(n.jsx)(g.a,{children:Object(n.jsx)(h.P,{})})}),Object(n.jsx)(D.a,{type:"text",name:"ten",placeholder:t("admin.academic_year_edit.NAME_PLACEHOLDER"),value:r.ten,onChange:i,invalid:s.ten})]}),s.ten&&Object(n.jsx)(P.a,{color:"danger",children:s.ten})]})]})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(R.a,{children:[Object(n.jsx)(M.a,{color:"success",disabled:F?!o:!(o&&a),onClick:function(){return ee(r,F?o:o&&a)},children:F?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.o,{})," ",t("admin.common.UPDATE")]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.z,{})," ",t("admin.common.ADD")]})}),"\u2003",F&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(M.a,{onClick:c,children:[Object(n.jsx)(h.M,{})," ",t("admin.common.REFRESH")]}),"\u2003",Object(n.jsxs)(M.a,{color:"danger",onClick:te,children:[Object(n.jsx)(h.R,{})," ",t("admin.common.DELETE")]})]})]})]})}})})]})}},650:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(3),s=(r(2),r(69)),a=r(259),o=r(260),i=r(61),c=r(6);function l(e){var t=e.items,r=e.currentItem;return Object(n.jsxs)(a.a,{children:[Object(n.jsx)(o.a,{active:!r,children:Object(n.jsx)(s.b,{to:c.b.WELCOME,children:Object(n.jsx)(i.s,{})})}),t&&t.map((function(e){var t=e.href,r=e.title;return Object(n.jsx)(o.a,{children:Object(n.jsx)(s.b,{to:t,children:r})})})),r&&Object(n.jsx)(o.a,{active:!0,children:r})]})}},651:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(3);r(2);function s(){return Object(n.jsx)("span",{style:{color:"red"},children:"(*)"})}},760:function(e,t,r){"use strict";var n=r(14),s=r(22),a=r(53),o=r.n(a);t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.a.stringify(Object(n.a)({limit:-1,page:0},e)),r="nam-hoc?".concat(t);return s.a.get(r)},getList:function(e){var t="nam-hoc?page=".concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&searchKey=".concat(e.searchKey)),s.a.get(t)},getById:function(e){var t="nam-hoc/".concat(e);return s.a.get(t)},post:function(e){return s.a.post("nam-hoc",JSON.stringify(e))},putById:function(e,t){var r="nam-hoc/".concat(e);return s.a.put(r,JSON.stringify(t))},deleteById:function(e){var t="nam-hoc/".concat(e);return s.a.delete(t)}}},990:function(e,t,r){},991:function(e,t,r){}}]);
//# sourceMappingURL=67.6a5302c4.chunk.js.map