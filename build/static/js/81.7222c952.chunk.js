(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[81],{566:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n(13),r=n.n(c),i=n(19),o=n(15),s=n(2),u=n(104),d=n(178),h=n(135),l=n(67),j=n(269),T=n(17),b=n(704),O=n(12),p=n(6),m=n(62);n(865);e.default=function(t){var e=Object(u.a)().t,n=(Object(T.i)().id,Object(T.g)()),c=Object(s.useRef)(!1),C=Object(s.useState)(!1),D=Object(o.a)(C,2),g=D[0],_=(D[1],Object(s.useState)({contents:[],page:0,total:0})),f=Object(o.a)(_,2),x=f[0],v=f[1],A=Object(s.useState)({page:0,limit:0,search:"",maCTDT:"",updatedAt:"ASC"}),E=Object(o.a)(A,2),N=E[0];E[1];Object(s.useEffect)((function(){return Object(i.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.getCTDTwithConditions(N);case 3:e=t.sent,c.current||v(e),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))(),function(){c.current=!0}}),[]);var M=Object(s.useState)({maCTDT:"",loaiHinh:"",ten:"",trinhDo:"",tongTinChi:0,doiTuong:"",quiTrinhDaoTao:"",dieuKienTotNghiep:""}),R=Object(o.a)(M,2);R[0],R[1];return Object(a.jsx)(a.Fragment,{children:g?Object(a.jsx)(m.a,{}):Object(a.jsx)("div",{className:"ManageProgramEducationBasic__container",children:Object(a.jsx)(d.a,{className:"ManageProgramEducation_background ManageProgramEducation__contents",children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)("div",{className:"manage_headers",children:[Object(a.jsx)("h4",{className:"item-label",children:e("LIST_MAJOR_DETAIL").toUpperCase()}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)(l.a,{onClick:function(){n.push(p.b.ADMIN_DSCTDT_CREATE)},color:"primary",children:O.a.t("admin.common.ADD")}),Object(a.jsx)(l.a,{onClick:function(){n.push(p.b.ADMIN_DSCTDT_CREATE_FLOW)},color:"primary",className:"btn_",children:O.a.t("CREATE_CTDT.CREATE_NEW_CTDT")}),Object(a.jsx)(l.a,{onClick:function(){n.push(p.b.ADMIN_VIEW_CHI_TIET_NGANH_DAO_TAO)},color:"primary",className:"btn_",children:O.a.t("CREATE_CTDT.VIEW_PDF")})]})]}),x.total?Object(a.jsxs)(j.a,{className:"mt-4",hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"STT"}),Object(a.jsx)("th",{children:e("PROGRAM_CODE")}),Object(a.jsx)("th",{children:e("PROGRAM_NAME")})]})}),x.contents.map((function(t,e){return Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{onClick:function(e){return n.push(p.b.ADMIN_QLCTDT.replace(":id",null===t||void 0===t?void 0:t.id))},children:[Object(a.jsx)("th",{scope:"row",children:e+1}),Object(a.jsx)("td",{children:null===t||void 0===t?void 0:t.maCTDT}),Object(a.jsx)("td",{children:null===t||void 0===t?void 0:t.ten})]})},e)}))]}):""]})})})})}},704:function(t,e,n){"use strict";function a(t){throw new Error('"'+t+'" is read-only')}var c=n(22),r={getCTDT:function(t){var e="chuong-trinh-dao-tao/"+t;return c.a.get(e)},getCTDTwithConditions:function(t){var e="chuong-trinh-dao-tao?page=".concat(t.page,"&limit=").concat(t.limit,"&updatedAt=").concat(t.updatedAt);return""!==t.search&&(e+=(a("url"),"search=&".concat(t.search))),""!==t.maCTDT&&(e+=(a("url"),"maCTDT=&".concat(t.maCTDT))),c.a.get(e)},updateCTDT:function(t,e){var n="chuong-trinh-dao-tao/"+t;return c.a.put(n,e)},getNganhDaoTaoTuCTDT:function(t){var e="nganh-dao-tao?chuongTrinhDaoTao=".concat(t);return c.a.get(e)}};e.a=r},865:function(t,e,n){}}]);
//# sourceMappingURL=81.7222c952.chunk.js.map