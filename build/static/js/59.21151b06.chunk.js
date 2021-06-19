(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[59],{1046:function(e,t,n){},1047:function(e,t,n){},620:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n(13),c=n.n(i),a=n(19),o=n(15),s=n(2),l=n(104),d=n(12),u=n(53),j=n.n(u),E=n(653),h=n(654),O=n(17),b=(n(1046),n(26)),v=n(650);n(1047);function p(e){var t=e.headerTitle;return Object(r.jsx)("div",{className:"page-header",children:Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:Object(r.jsx)("h1",{children:t.toUpperCase()})})})}var g=n(764),S=n(676),m=n(61),x=n(270),_=n(80),T=n(273),f=n(271),N=n(272),y=n(130),R=n(222),D=n(182),A=n(67),k=n(651),P=n(192),C=n(62),I=n(6),L=n(105),w={ten:"",khoiKienThuc:0,tongTinChi:0,noidung:""},K=Object(E.d)({mapPropsToValues:function(){return w},enableReinitialize:!0,validationSchema:h.b().shape({ten:h.c().required(d.a.t("REQUIRED_FIELD_WARNING")).min(5,d.a.t("admin.type_knowledge_list.NAME_MIN_LENGTH_5")),tongTinChi:h.a().required(d.a.t("REQUIRED_FIELD_WARNING")).min(0,d.a.t("admin.POSITIVE_WARNING")),khoiKienThuc:h.a().required(d.a.t("REQUIRED_FIELD_WARNING")).positive(d.a.t("admin.type_knowledge_list.KNOWLEDGE"))})})((function(e){var t=e.values,n=e.handleChange,i=e.resetForm,d=e.errors,u=Object(l.a)().t,E=Object(O.g)(),h=Object(s.useState)(null),K=Object(o.a)(h,2),G=K[0],M=K[1],B=Object(s.useState)(!1),U=Object(o.a)(B,2),F=U[0],W=U[1],H=Object(s.useState)({color:"danger",isOpen:!1,messages:[]}),J=Object(o.a)(H,2),Y=J[0],q=J[1],Q=Object(s.useState)(!1),V=Object(o.a)(Q,2),z=V[0],X=V[1],Z=Object(s.useState)([{id:"",ten:"",maKKT:""}]),$=Object(o.a)(Z,2),ee=$[0],te=$[1];u("admin.common.DELETED"),u("admin.common.AVAILABLE");Object(s.useEffect)(Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=j.a.parse(window.location.search)).id){e.next=7;break}M(t.id),W(!0),ne(t.id),e.next=15;break;case 7:return w.ten="",w.khoiKienThuc=0,w.noidung="",w.tongTinChi=0,e.next=13,S.a.getAll();case 13:(n=e.sent)&&te(n.contents);case 15:case"end":return e.stop()}}),e)}))),[]);var ne=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,i,a,o,s,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,S.a.getAll();case 4:return(n=e.sent)&&te(n.contents),e.next=8,g.a.getById(t);case 8:(r=e.sent)&&(w.ten=r.ten,(null===(i=r.khoiKienThuc)||void 0===i?void 0:i.id)?w.khoiKienThuc=r.khoiKienThuc.id:w.khoiKienThuc=null,w.noidung=r.noidung,w.tongTinChi=r.tongTinChi),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response&&(403===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)||401===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.status)?b.b.error(u("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)?b.b.error(u("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)?b.b.error(u("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)?b.b.error(u("RESPONSE_MESSAGE404")):b.b.error(u("RESPONSE_MESSAGE500")));case 15:X(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(a.a)(c.a.mark((function e(n){var r,i,a,o,s,l,d,j,E,h,O,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(r={}).ten=t.ten,r.khoiKienThuc=parseInt(t.khoiKienThuc,10),r.noidung=t.noidung,r.tongTinChi=t.tongTinChi,e.prev=6,!F){e.next=14;break}return e.next=10,g.a.putById(G,r);case 10:e.sent?(b.b.success(u("admin.UPDATE_SUCCESS")),ne(G)):b.b.error(u("RESPONSE_MESSAGE500")),e.next=18;break;case 14:return e.next=16,g.a.post(r);case 16:e.sent?b.b.success(u("admin.ADD_SUCCESS")):b.b.error(u("RESPONSE_MESSAGE500"));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),(null===e.t0||void 0===e.t0?void 0:e.t0.response)&&(403===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)||401===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)?b.b.error(u("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.status)?b.b.error(u("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)?b.b.error(u("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)?b.b.error(u("RESPONSE_MESSAGE404")):(null===(d=String(null===e.t0||void 0===e.t0||null===(j=e.t0.response)||void 0===j||null===(E=j.data)||void 0===E?void 0:E.error))||void 0===d?void 0:d.includes("ER_DUP_ENTRY"))?b.b.error(u("ER_DUP_ENTRY")):(null===(h=String(null===e.t0||void 0===e.t0||null===(O=e.t0.response)||void 0===O||null===(v=O.data)||void 0===v?void 0:v.error))||void 0===h?void 0:h.includes("ID_NOT_FOUND"))?b.b.error(u("RESPONSE_MESSAGE404")):b.b.error(u("RESPONSE_MESSAGE500")));case 23:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,i,a,o,s,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,g.a.deleteById(G);case 4:e.sent?(b.b.success(u("admin.common.DELETED")),E.push(I.b.ADMIN_TYPE_KNOWLEDGE_LIST)):b.b.error(u("RESPONSE_MESSAGE500")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&(403===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)||401===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)?b.b.error(u("DELETE_ERROR")+": "+u("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?b.b.error(u("DELETE_ERROR")+": "+u("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)?b.b.error(u("DELETE_ERROR")+": "+u("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.status)?b.b.error(u("DELETE_ERROR")+": "+u("RESPONSE_MESSAGE404")):(null===(s=String(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.error))||void 0===s?void 0:s.includes("ID_NOT_FOUND"))?b.b.error(u("RESPONSE_MESSAGE404")):b.b.error(u("DELETE_ERROR")+": "+u("RESPONSE_MESSAGE500")));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"page",children:[z&&Object(r.jsx)(C.a,{}),Object(r.jsx)(v.a,{currentItem:u(F?"admin.type_knowledge_edit.UPDATE":"admin.type_knowledge_edit.ADD"),items:[{href:I.b.ADMIN_TYPE_KNOWLEDGE_LIST,title:u("admin.type_knowledge_list.LIST")}]}),Object(r.jsx)(p,{headerTitle:u(F?"admin.type_knowledge_edit.UPDATE":"admin.type_knowledge_edit.ADD")}),Object(r.jsx)("div",{className:"page-content",children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(P.a,{color:Y.color,isOpen:Y.isOpen,messages:Y.messages}),Object(r.jsxs)(_.a,{className:"row",children:[Object(r.jsxs)(T.a,{for:"name",className:"col-lg-3",children:[u("admin.type_knowledge_list.NAME")," ",Object(r.jsx)(k.a,{})]}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)(f.a,{children:[Object(r.jsx)(N.a,{addonType:"prepend",children:Object(r.jsx)(y.a,{children:Object(r.jsx)(m.P,{})})}),Object(r.jsx)(R.a,{type:"text",name:"ten",placeholder:u("admin.type_knowledge_edit.NAME_PLACEHOLDER"),value:t.ten,onChange:n,invalid:d.ten})]}),d.ten&&Object(r.jsx)(D.a,{color:"danger",children:d.ten})]})]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(_.a,{className:"row",children:[Object(r.jsxs)(T.a,{for:"name",className:"col-lg-3",children:[u("admin.type_knowledge_list.TOTAL_CREDIT")," ",Object(r.jsx)(k.a,{})]}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)(f.a,{children:[Object(r.jsx)(N.a,{addonType:"prepend",children:Object(r.jsx)(y.a,{children:Object(r.jsx)(m.P,{})})}),Object(r.jsx)(R.a,{type:"number",name:"tongTinChi",placeholder:u("admin.type_knowledge_edit.NAME_PLACEHOLDER"),value:t.tongTinChi,onChange:n,invalid:d.tongTinChi})]}),d.tongTinChi&&Object(r.jsx)(D.a,{color:"danger",children:d.tongTinChi})]})]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(_.a,{className:"row",children:[Object(r.jsx)(T.a,{for:"name",className:"col-lg-3",children:u("admin.type_knowledge_list.CONTENT")}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)(f.a,{children:[Object(r.jsx)(N.a,{addonType:"prepend",children:Object(r.jsx)(y.a,{children:Object(r.jsx)(m.P,{})})}),Object(r.jsx)(R.a,{type:"text",name:"noidung",placeholder:u("admin.type_knowledge_edit.NAME_PLACEHOLDER"),value:t.noidung,onChange:n,invalid:d.noidung})]}),d.noidung&&Object(r.jsx)(D.a,{color:"danger",children:d.noidung})]})]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(_.a,{className:"row",children:[Object(r.jsxs)(T.a,{for:"name",className:"col-lg-3",children:[u("admin.type_knowledge_list.KNOWLEDGE")," ",Object(r.jsx)(k.a,{})]}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)(f.a,{children:[Object(r.jsx)(N.a,{addonType:"prepend",children:Object(r.jsx)(y.a,{children:Object(r.jsx)(m.P,{})})}),Object(r.jsxs)(R.a,{type:"select",name:"khoiKienThuc",value:t.khoiKienThuc,onChange:n,children:[Object(r.jsx)("option",{value:0,children:u("admin.type_knowledge_edit.KNOWLEDGE_PLACEHOLDER")},1),ee.length>0&&ee.map((function(e,t){var n,i,c;return Object(r.jsxs)("option",{value:e.id,children:[null===e||void 0===e||null===(n=e.chiTietNganh)||void 0===n?void 0:n.khoa,"\u2002","/","\u2002",null===e||void 0===e||null===(i=e.chiTietNganh)||void 0===i||null===(c=i.nganhDaoTao)||void 0===c?void 0:c.ten,"\u2002","/","\u2002",e.ten]},t+1)}))]})]}),d.khoiKienThuc&&Object(r.jsx)(D.a,{color:"danger",children:d.khoiKienThuc})]})]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(_.a,{children:[Object(r.jsx)(A.a,{color:"success",onClick:re,disabled:Object(L.b)(d),children:F?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.o,{})," ",u("admin.common.UPDATE")]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m.z,{})," ",u("admin.common.ADD")]})}),"\u2003",F&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(A.a,{onClick:function(e){e.preventDefault(),q({color:"success",isOpen:!1,messages:[]}),i()},children:[Object(r.jsx)(m.M,{})," ",u("admin.common.REFRESH")]}),"\u2003",Object(r.jsxs)(A.a,{color:"danger",onClick:ie,children:[Object(r.jsx)(m.R,{})," ",u("admin.common.DELETE")]})]})]})]})})]})}));t.default=K},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),i=(n(2),n(69)),c=n(259),a=n(260),o=n(61),s=n(6);function l(e){var t=e.items,n=e.currentItem;return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(a.a,{active:!n,children:Object(r.jsx)(i.b,{to:s.b.WELCOME,children:Object(r.jsx)(o.s,{})})}),t&&t.map((function(e){var t=e.href,n=e.title;return Object(r.jsx)(a.a,{children:Object(r.jsx)(i.b,{to:t,children:n})})})),n&&Object(r.jsx)(a.a,{active:!0,children:n})]})}},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3);n(2);function i(){return Object(r.jsx)("span",{style:{color:"red"},children:"(*)"})}},676:function(e,t,n){"use strict";var r=n(14),i=n(22),c=n(53),a=n.n(c),o="khoi-kien-thuc";t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.a.stringify(Object(r.a)({limit:-1,page:0},e)),n="".concat(o,"?").concat(t);return i.a.get(n)},getList:function(e){var t="".concat(o,"?page=").concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&searchKey=".concat(e.searchKey)),null!==e.filter.idChiTietNganhDaoTao&&(t+="&chiTietNganh=".concat(e.filter.idChiTietNganhDaoTao)),i.a.get(t)},getById:function(e){var t="".concat(o,"/").concat(e);return i.a.get(t)},post:function(e){var t="".concat(o);return i.a.post(t,JSON.stringify(e))},putById:function(e,t){var n="".concat(o,"/").concat(e);return i.a.put(n,JSON.stringify(t))},deleteById:function(e){var t="".concat(o,"/").concat(e);return i.a.delete(t)}}},764:function(e,t,n){"use strict";var r=n(14),i=n(22),c=n(53),a=n.n(c),o="loai-khoi-kien-thuc";t.a={getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.a.stringify(Object(r.a)({page:0},e)),n="".concat(o,"?").concat(t);return i.a.get(n)},getList:function(e){var t="".concat(o,"?page=").concat(e.page-1);return e.limit&&(t+="&limit=".concat(e.limit)),e.sorter.sortBy&&e.sorter.sortType&&(t+="&sortBy=".concat(e.sorter.sortBy,"&sortType=").concat(e.sorter.sortType)),e.searchKey&&(t+="&searchKey=".concat(e.searchKey)),null!==e.filter.idKhoiKienThuc&&(t+="&idKhoiKienThuc=".concat(e.filter.idKhoiKienThuc)),i.a.get(t)},getById:function(e){var t="".concat(o,"/").concat(e);return i.a.get(t)},post:function(e){var t="".concat(o);return i.a.post(t,JSON.stringify(e))},putById:function(e,t){var n="".concat(o,"/").concat(e);return i.a.put(n,JSON.stringify(t))},deleteById:function(e){var t="".concat(o,"/").concat(e);return i.a.delete(t)}}}}]);
//# sourceMappingURL=59.21151b06.chunk.js.map