(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[49],{1213:function(t,e,n){},1214:function(t,e,n){},631:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return H}));var a=n(194),r=n(3),c=n(13),o=n.n(c),i=n(19),s=n(15),l=n(2),d=n(104),u=n(17),v=n(26),j=n(61),p=n(719),h=n(270),E=n(80),O=n(273),b=n(271),g=n(272),S=n(130),f=n(222),N=n(182),m=n(67),x=n(53),_=n.n(x),T=n(653),y=n(654),D=(n(1213),n(6)),A=n(740),G=n(772),R=n(650),P=(n(651),n(192)),I=n(62);n(1214);function C(t){var e=t.titleHeader;return Object(r.jsx)("div",{className:"page-header",children:Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:Object(r.jsx)("h1",{children:e.toUpperCase()})})})}n(771);var M=n(12),k=n(661),L=n(703),B=n(105);function H(){var t=Object(d.a)().t,e=Object(u.g)(),n=Object(l.useState)(null),c=Object(s.a)(n,2),x=c[0],H=c[1],K=Object(l.useState)(!1),w=Object(s.a)(K,2),U=w[0],F=w[1],J=Object(l.useState)({idKHGD:null,idCTGN:null,ghiChu:null}),Y=Object(s.a)(J,2),W=Y[0],V=Y[1],q=Object(l.useState)({color:"danger",isOpen:!1,messages:[]}),z=Object(s.a)(q,2),Q=z[0],X=z[1],Z=Object(l.useState)(!1),$=Object(s.a)(Z,2),tt=$[0],et=$[1],nt=Object(l.useState)([]),at=Object(s.a)(nt,2),rt=at[0],ct=at[1],ot=Object(l.useState)([]),it=Object(s.a)(ot,2),st=it[0],lt=it[1],dt=Object(l.useState)(null),ut=Object(s.a)(dt,2),vt=ut[0],jt=ut[1],pt=Object(l.useState)([]),ht=Object(s.a)(pt,2),Et=ht[0],Ot=ht[1],bt=function(){var t=Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.getAll();case 3:(e=t.sent)&&Ot(e.contents),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Ot([]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,bt();case 2:case"end":return t.stop()}}),t)})))()}),[]);t("admin.common.DELETED"),t("admin.common.AVAILABLE");Object(l.useEffect)(Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=_.a.parse(window.location.search)).id&&(H(e.id),F(!0),gt(e.id));case 2:case"end":return t.stop()}}),t)}))),[]),Object(l.useEffect)(Object(i.a)(o.a.mark((function t(){var e,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e={},!vt){t.next=8;break}return e={CTNganhDaoTao:vt},t.next=6,L.a.getAllCTNDT(vt);case 6:n=t.sent,lt(n.contents);case 8:return t.next=10,G.a.getAll(e);case 10:a=t.sent,ct(a.contents),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])}))),[vt]);var gt=function(){var e=Object(i.a)(o.a.mark((function e(n){var a,r,c,i,s,l,d,u,j,p,h,E;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return et(!0),e.prev=1,e.next=4,A.a.getById(n);case 4:i=e.sent,V({idKHGD:void 0!==i.idKHGD&&(null===i||void 0===i||null===(a=i.idKHGD)||void 0===a?void 0:a.id),idCTGN:void 0!==i.idCTGN&&(null===i||void 0===i||null===(r=i.idCTGN)||void 0===r?void 0:r.id),ghiChu:i.ghiChu}),(null===i||void 0===i||null===(c=i.idKHGD)||void 0===c?void 0:c.nganhDaoTao)&&jt(null===i||void 0===i||null===(s=i.idKHGD)||void 0===s||null===(l=s.nganhDaoTao)||void 0===l?void 0:l.id),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),e.t0.response&&(403===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.status)||"NOT_OWNER"===String(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u?void 0:u.message)?v.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t0||void 0===e.t0||null===(j=e.t0.response)||void 0===j?void 0:j.status)?v.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(p=e.t0.response)||void 0===p?void 0:p.status)?v.b.error(t("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(h=e.t0.response)||void 0===h?void 0:h.status)?v.b.error(t("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(E=e.t0.response)||void 0===E?void 0:E.status)?v.b.error(t("RESPONSE_MESSAGE404")):v.b.error(t("RESPONSE_MESSAGE500")));case 12:return e.prev=12,et(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),St=function(){var n=Object(i.a)(o.a.mark((function n(a){var r,c,i,s,l,d,u,j,p,h,E,O,b,g,S,f,N,m,_,T,y,G,R,P,I,C,M;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.idKHGD=parseInt(a.idKHGD,10),a.idCTGN=parseInt(a.idCTGN,10),console.log(a),!U){n.next=17;break}return r=Object.assign({},a),n.prev=5,n.next=8,A.a.putById(x,r);case 8:200===n.sent.status&&(X({color:"success",isOpen:!0,messages:[t("admin.UPDATE_SUCCESS")]}),gt(x)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),(null===n.t0||void 0===n.t0?void 0:n.t0.response)&&(403===(null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c?void 0:c.status)||"NOT_OWNER"===String(null===n.t0||void 0===n.t0||null===(i=n.t0.response)||void 0===i?void 0:i.message)?v.b.error(t("RESPONSE_MESSAGE403")):401===(null===n.t0||void 0===n.t0||null===(s=n.t0.response)||void 0===s?void 0:s.status)?v.b.error(t("RESPONSE_MESSAGE401")):400===(null===n.t0||void 0===n.t0||null===(l=n.t0.response)||void 0===l?void 0:l.status)?v.b.error(t("RESPONSE_MESSAGE400")):409===(null===n.t0||void 0===n.t0||null===(d=n.t0.response)||void 0===d?void 0:d.status)?v.b.error(t("RESPONSE_MESSAGE409")):404===(null===n.t0||void 0===n.t0||null===(u=n.t0.response)||void 0===u?void 0:u.status)?v.b.error(t("RESPONSE_MESSAGE404")):(null===(j=String(null===n.t0||void 0===n.t0||null===(p=n.t0.response)||void 0===p||null===(h=p.data)||void 0===h?void 0:h.error))||void 0===j?void 0:j.includes("ER_DUP_ENTRY"))?v.b.error(t("ER_DUP_ENTRY")):(null===(E=String(null===n.t0||void 0===n.t0||null===(O=n.t0.response)||void 0===O||null===(b=O.data)||void 0===b?void 0:b.error))||void 0===E?void 0:E.includes("ID_NOT_FOUND"))?v.b.error(t("RESPONSE_MESSAGE404")):v.b.error(t("RESPONSE_MESSAGE500")));case 15:n.next=28;break;case 17:return g=Object.assign({},a),n.prev=18,n.next=21,A.a.post(g);case 21:(S=n.sent).id&&(v.b.success(t("admin.ADD_SUCCESS")),e.push("".concat(D.b.ADMIN_DETAIL_PLAN_EDIT,"?id=").concat(S.id))),n.next=28;break;case 25:n.prev=25,n.t1=n.catch(18),(null===n.t1||void 0===n.t1?void 0:n.t1.response)&&(403===(null===n.t1||void 0===n.t1||null===(f=n.t1.response)||void 0===f?void 0:f.status)||"NOT_OWNER"===String(null===n.t1||void 0===n.t1||null===(N=n.t1.response)||void 0===N?void 0:N.message)?v.b.error(t("RESPONSE_MESSAGE403")):401===(null===n.t1||void 0===n.t1||null===(m=n.t1.response)||void 0===m?void 0:m.status)?v.b.error(t("RESPONSE_MESSAGE401")):400===(null===n.t1||void 0===n.t1||null===(_=n.t1.response)||void 0===_?void 0:_.status)?v.b.error(t("RESPONSE_MESSAGE400")):409===(null===n.t1||void 0===n.t1||null===(T=n.t1.response)||void 0===T?void 0:T.status)?v.b.error(t("RESPONSE_MESSAGE409")):404===(null===n.t1||void 0===n.t1||null===(y=n.t1.response)||void 0===y?void 0:y.status)?v.b.error(t("RESPONSE_MESSAGE404")):(null===(G=String(null===n.t1||void 0===n.t1||null===(R=n.t1.response)||void 0===R||null===(P=R.data)||void 0===P?void 0:P.error))||void 0===G?void 0:G.includes("ER_DUP_ENTRY"))?v.b.error(t("ER_DUP_ENTRY")):(null===(I=String(null===n.t1||void 0===n.t1||null===(C=n.t1.response)||void 0===C||null===(M=C.data)||void 0===M?void 0:M.error))||void 0===I?void 0:I.includes("ID_NOT_FOUND"))?v.b.error(t("RESPONSE_MESSAGE404")):v.b.error(t("RESPONSE_MESSAGE500")));case 28:case"end":return n.stop()}}),n,null,[[5,12],[18,25]])})));return function(t){return n.apply(this,arguments)}}(),ft=function(){var e=Object(i.a)(o.a.mark((function e(n){var a,r,c,i,s,l,d,u,j,p,h,E;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,A.a.deleteById(x);case 4:200===e.sent.status&&(X({color:"success",isOpen:!0,messages:[t("admin.common.DELETED")]}),gt(x)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(null===e.t0||void 0===e.t0?void 0:e.t0.response)&&(403===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)||"NOT_OWNER"===String(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.message)?v.b.error(t("RESPONSE_MESSAGE403")):401===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c?void 0:c.status)?v.b.error(t("RESPONSE_MESSAGE401")):400===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?v.b.error(t("RESPONSE_MESSAGE400")):409===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)?v.b.error(t("RESPONSE_MESSAGE409")):404===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)?v.b.error(t("RESPONSE_MESSAGE404")):(null===(d=String(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(j=u.data)||void 0===j?void 0:j.error))||void 0===d?void 0:d.includes("ER_DUP_ENTRY"))?v.b.error(t("ER_DUP_ENTRY")):(null===(p=String(null===e.t0||void 0===e.t0||null===(h=e.t0.response)||void 0===h||null===(E=h.data)||void 0===E?void 0:E.error))||void 0===p?void 0:p.includes("ID_NOT_FOUND"))?v.b.error(t("RESPONSE_MESSAGE404")):v.b.error(t("RESPONSE_MESSAGE500")));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"page",children:[tt&&Object(r.jsx)(I.a,{}),Object(r.jsx)(R.a,{currentItem:t(U?"admin.detail_teaching_plan.UPDATE_DETAIL_PLAN":"admin.detail_teaching_plan.ADD_DETAIL_PLAN"),items:[{href:D.b.ADMIN_DETAIL_PLAN_LIST,title:t("admin.detail_teaching_plan.DETAIL_PLAN_LIST")}]}),Object(r.jsx)(C,{titleHeader:t(U?"admin.detail_teaching_plan.UPDATE_DETAIL_PLAN":"admin.detail_teaching_plan.ADD_DETAIL_PLAN")}),Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(T.c,{initialValues:W,enableReinitialize:!0,validationSchema:y.b().shape({idKHGD:y.c().required(M.a.t("REQUIRED_FIELD_WARNING")),idCTGN:y.c().required(M.a.t("REQUIRED_FIELD_WARNING"))}),children:function(e){var n,c=e.values,o=e.errors,i=e.dirty,s=e.isValid,l=e.handleChange,d=e.handleReset;return Object(r.jsxs)(h.a,{children:[Object(r.jsx)(P.a,{color:Q.color,isOpen:Q.isOpen,messages:Q.messages}),Object(r.jsxs)(E.a,{className:"row",children:[Object(r.jsx)(O.a,{className:"col-lg-3",children:t("SCHOOL_YEAR")}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{addonType:"prepend",children:Object(r.jsx)(S.a,{children:Object(r.jsx)(j.Y,{})})}),Object(r.jsx)(f.a,{type:"select",value:vt,onChange:function(t){var e;return jt(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)},children:Et&&Et.map((function(t,e){var n;return Object(r.jsx)("option",{value:t.id,children:"".concat(null===t||void 0===t?void 0:t.khoa,"-").concat(null===t||void 0===t||null===(n=t.nganhDaoTao)||void 0===n?void 0:n.maNganhDaoTao)},e)}))})]})})]})," ",Object(r.jsx)("br",{}),vt?Object(r.jsxs)(E.a,{className:"row",children:[Object(r.jsx)(O.a,{for:"idKHGD",className:"col-lg-3",children:t("admin.detail_teaching_plan.TEACHING_PLAN")}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{addonType:"prepend",children:Object(r.jsx)(S.a,{children:Object(r.jsx)(j.Y,{})})}),Object(r.jsx)(f.a,{type:"select",name:"idKHGD",value:c.idKHGD,onChange:l,children:rt&&rt.map((function(t,e){var n,a,c;return Object(r.jsx)("option",{value:t.id,children:"".concat(t.id,"-").concat(null===t||void 0===t||null===(n=t.nganhDaoTao)||void 0===n||null===(a=n.nganhDaoTao)||void 0===a?void 0:a.maNganhDaoTao,"-").concat(null===t||void 0===t||null===(c=t.nganhDaoTao)||void 0===c?void 0:c.khoa,"-").concat(M.a.t("admin.detail_teaching_plan.SEMESTER_NAME")," ").concat(null===t||void 0===t?void 0:t.tenHocKy)},e)}))})]})})]}):""," ",Object(r.jsx)("br",{}),vt?Object(r.jsxs)(E.a,{className:"row",children:[Object(r.jsx)(O.a,{for:"idCTGN",className:"col-lg-3",children:t("admin.detail_teaching_plan.DETAIL_GROUP")}),Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{addonType:"prepend",children:Object(r.jsx)(S.a,{children:Object(r.jsx)(j.Y,{})})}),Object(r.jsx)(f.a,{type:"select",name:"idCTGN",value:c.idCTGN,onChange:l,children:st&&st.map((function(t,e){var n;return Object(r.jsxs)("option",{value:t.id,children:[t.id,"-",null===t||void 0===t||null===(n=t.monHoc)||void 0===n?void 0:n.tenTiengViet]},e)}))})]})})]}):""," ",Object(r.jsx)("br",{}),vt?Object(r.jsxs)(E.a,{className:"row",children:[Object(r.jsx)(O.a,{for:"ghiChu",className:"col-lg-3",children:t("admin.detail_teaching_plan.NOTE")}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)(b.a,{children:[Object(r.jsx)(g.a,{addonType:"prepend",children:Object(r.jsx)(S.a,{children:Object(r.jsx)(p.b,{})})}),Object(r.jsx)(f.a,{type:"text",name:"ghiChu",value:c.ghiChu,onChange:l})]}),o.ghiChu&&Object(r.jsx)(N.a,{color:"danger",children:o.ghiChu})]})]}):""," ",Object(r.jsx)("br",{}),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(m.a,(n={color:"success",disabled:!(s&&i),onClick:function(){return St(c)}},Object(a.a)(n,"disabled",Object(B.b)(o)),Object(a.a)(n,"children",U?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.o,{})," ",t("admin.common.UPDATE")]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.z,{})," ",t("admin.common.ADD")]})),n)),"\u2003",U&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m.a,{onClick:d,children:[Object(r.jsx)(j.M,{})," ",t("admin.common.REFRESH")]}),"\u2003",Object(r.jsxs)(m.a,{color:"danger",onClick:ft,children:[Object(r.jsx)(j.R,{})," ",t("admin.common.DELETE")]})]})]})]})}})})]})}},650:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(3),r=(n(2),n(69)),c=n(259),o=n(260),i=n(61),s=n(6);function l(t){var e=t.items,n=t.currentItem;return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(o.a,{active:!n,children:Object(a.jsx)(r.b,{to:s.b.WELCOME,children:Object(a.jsx)(i.s,{})})}),e&&e.map((function(t){var e=t.href,n=t.title;return Object(a.jsx)(o.a,{children:Object(a.jsx)(r.b,{to:e,children:n})})})),n&&Object(a.jsx)(o.a,{active:!0,children:n})]})}},651:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(3);n(2);function r(){return Object(a.jsx)("span",{style:{color:"red"},children:"(*)"})}},661:function(t,e,n){"use strict";var a=n(14),r=n(22),c=n(53),o=n.n(c),i="chi-tiet-nganh-dao-tao";e.a={getAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.a.stringify(Object(a.a)({limit:-1,page:0},t)),n="".concat(i,"?").concat(e);return r.a.get(n)},getList:function(t){var e="".concat(i,"?page=").concat(t.page-1);return t.limit&&(e+="&limit=".concat(t.limit)),t.sorter.sortBy&&t.sorter.sortType&&(e+="&sortBy=".concat(t.sorter.sortBy,"&sortType=").concat(t.sorter.sortType)),t.searchKey&&(e+="&searchKey=".concat(t.searchKey)),null!==t.filter.khoa&&(e+="&khoa=".concat(t.filter.khoa)),null!==t.filter.nganhDaoTao&&(e+="&nganhDaoTao=".concat(t.filter.nganhDaoTao)),r.a.get(e)},getById:function(t){var e="".concat(i,"/").concat(t);return r.a.get(e)},post:function(t){var e="".concat(i);return r.a.post(e,JSON.stringify(t))},putById:function(t,e){var n="".concat(i,"/").concat(t);return r.a.put(n,JSON.stringify(e))},deleteById:function(t){var e="".concat(i,"/").concat(t);return r.a.delete(e)},getWithFilter:function(t){var e=o.a.stringify(Object(a.a)({},t)),n="chi-tiet-nganh-dao-tao?".concat(e);return r.a.get(n)},checkIsExist:function(t){var e=t.khoa,n=t.idNganhDaoTao,a=o.a.stringify({khoa:e,idNganhDaoTao:n}),c="chi-tiet-nganh-dao-tao/is-exist?".concat(a);return r.a.get(c)}}},703:function(t,e,n){"use strict";var a=n(14),r=n(22),c=n(53),o=n.n(c),i="chi-tiet-gom-nhom";e.a={getAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.a.stringify(Object(a.a)({limit:-1,page:0},t)),n="".concat(i,"?").concat(e);return r.a.get(n)},getList:function(t){var e="".concat(i,"?page=").concat(t.page-1);return t.limit&&(e+="&limit=".concat(t.limit)),t.sorter.sortBy&&t.sorter.sortType&&(e+="&sortBy=".concat(t.sorter.sortBy,"&sortType=").concat(t.sorter.sortType)),t.searchKey&&(e+="&search=".concat(t.searchKey)),t.filter.idMH&&(e+="&idMH=".concat(t.filter.idMH)),t.filter.idGN&&(e+="&idGN=".concat(t.filter.idGN)),r.a.get(e)},getById:function(t){var e="".concat(i,"/").concat(t);return r.a.get(e)},post:function(t){var e="".concat(i);return r.a.post(e,JSON.stringify(t))},putById:function(t,e){var n="".concat(i,"/").concat(t);return r.a.put(n,JSON.stringify(e))},deleteById:function(t){var e="".concat(i,"/").concat(t);return r.a.delete(e)},deleteMultiple:function(t){var e="".concat(i,"?ids=").concat(t);return r.a.delete(e)},deleteAll:function(){var t="".concat(i,"/delete/all");return r.a.delete(t)},getAllKHGH:function(t){var e="".concat(i,"/ke-hoach-giang-day\u200b/").concat(t);return r.a.get(e)},getAllCTNDT:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.a.stringify(Object(a.a)({limit:-1,page:0},e)),c="".concat(i,"/chi-tiet-nganh-dao-tao/").concat(t,"?").concat(n);return r.a.get(c)}}},740:function(t,e,n){"use strict";var a=n(14),r=n(22),c=n(53),o=n.n(c),i="chi-tiet-ke-hoach";e.a={getAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.a.stringify(Object(a.a)({limit:-1,page:0},t)),n="".concat(i,"?").concat(e);return r.a.get(n)},getList:function(t){var e="".concat(i,"?page=").concat(t.page-1);return t.limit&&(e+="&limit=".concat(t.limit)),t.sorter.sortBy&&t.sorter.sortType&&(e+="&sortBy=".concat(t.sorter.sortBy,"&sortType=").concat(t.sorter.sortType)),t.searchKey&&(e+="&search=".concat(t.searchKey)),t.filter.idKHGD&&(e+="&idKHGD=".concat(t.filter.idKHGD)),t.filter.idCTGN&&(e+="&idCTGN=".concat(t.filter.idCTGN)),r.a.get(e)},getById:function(t){var e="".concat(i,"/").concat(t);return r.a.get(e)},post:function(t){var e="".concat(i);return r.a.post(e,JSON.stringify(t))},putById:function(t,e){var n="".concat(i,"/").concat(t);return r.a.put(n,JSON.stringify(e))},deleteById:function(t){var e="".concat(i,"/").concat(t);return r.a.delete(e)},deleteMultiple:function(t){var e="".concat(i,"?ids=").concat(t);return r.a.delete(e)},deleteAll:function(){var t="".concat(i,"/delete/all");return r.a.delete(t)}}},772:function(t,e,n){"use strict";var a=n(14),r=n(22),c=n(53),o=n.n(c),i="ke-hoach-giang-day";e.a={getAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.a.stringify(Object(a.a)({limit:-1,page:0},t)),n="".concat(i,"?").concat(e);return r.a.get(n)},getList:function(t){var e="".concat(i,"?page=").concat(t.page-1);return t.limit&&(e+="&limit=".concat(t.limit)),t.sorter.sortBy&&t.sorter.sortType&&(e+="&sortBy=".concat(t.sorter.sortBy,"&sortType=").concat(t.sorter.sortType)),t.searchKey&&(e+="&search=".concat(t.searchKey)),r.a.get(e)},getById:function(t){var e="".concat(i,"/").concat(t);return r.a.get(e)},post:function(t){var e="".concat(i);return r.a.post(e,JSON.stringify(t))},putById:function(t,e){var n="".concat(i,"/").concat(t);return r.a.put(n,JSON.stringify(e))},deleteById:function(t){var e="".concat(i,"/").concat(t);return r.a.delete(e)},deleteMultiple:function(t){var e="".concat(i,"?ids=").concat(t);return r.a.delete(e)},deleteAll:function(){var t="".concat(i,"/delete/all");return r.a.delete(t)}}}}]);
//# sourceMappingURL=49.b23a1f2a.chunk.js.map