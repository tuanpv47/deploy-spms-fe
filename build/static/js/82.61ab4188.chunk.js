(this["webpackJsonpspms-fe"]=this["webpackJsonpspms-fe"]||[]).push([[82],{565:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(14),i=a(13),l=a.n(i),s=a(19),r=a(15),o=a(2),j=a(104),d=a(178),u=a(67),b=a(135),O=a(273),h=a(222),x=a(269),g=a(17),T=a(10),p=a(704),N=(a(864),a(12)),m=(a(6),a(26));t.default=function(e){var t=Object(j.a)().t,a=Object(g.i)().id,i=(Object(g.g)(),Object(o.useRef)(!1)),E=Object(o.useState)(!1),C=Object(r.a)(E,2),D=C[0],v=C[1],f=Object(o.useState)(!1),A=Object(r.a)(f,2),_=A[0],y=A[1],R=Object(o.useState)(!1),k=Object(r.a)(R,2),S=k[0],I=k[1],G=Object(o.useState)(!1),P=Object(r.a)(G,2),U=P[0],L=P[1],M=Object(o.useState)(!1),H=Object(r.a)(M,2),V=(H[0],H[1],Object(o.useState)(!1)),w=Object(r.a)(V,2),q=w[0],Y=w[1],J=Object(o.useState)(!1),F=Object(r.a)(J,2),K=F[0],B=F[1],z=Object(o.useState)(!1),Q=Object(r.a)(z,2),W=Q[0],X=Q[1],Z=Object(o.useState)({id:"",maCTDT:"",loaiHinh:"",ten:"",trinhDo:"",doiTuong:"",quiTrinhDaoTao:"",GRADUATION_CONDITIONS:""}),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)({contents:[],page:0,total:0}),ne=Object(r.a)(ae,2),ce=ne[0],ie=ne[1],le=Object(o.useState)(!1),se=Object(r.a)(le,2),re=se[0],oe=se[1];Object(o.useEffect)((function(){return Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getCTDT(a);case 3:return t=e.sent,i.current||te(t),e.next=7,p.a.getNganhDaoTaoTuCTDT(a);case 7:n=e.sent,i.current||ie(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i.current||ie({contents:[],page:0,total:0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))(),function(){i.current=!0}}),[re]);var je=function(){var e=Object(s.a)(l.a.mark((function e(){var a,n,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===ee.id){e.next=12;break}return a={maCTDT:(l=ee).maCTDT,loaiHinh:l.loaiHinh,ten:l.ten,trinhDo:l.trinhDo,doiTuong:l.doiTuong,quiTrinhDaoTao:l.quiTrinhDaoTao,dieuKienTotNghiep:l.dieuKienTotNghiep},e.prev=2,e.next=5,p.a.updateCTDT(ee.id,a);case 5:"UPDATE_CHUONGTRINHDAOTAO_SUCCESSFULLY"===(n=e.sent).message?(m.b.success(N.a.t("quanlychuongtrinhdaotao.".concat(n.message))),oe(!re)):m.b.error(N.a.t("quanlychuongtrinhdaotao.UPDATE_CHUONGTRINHDAOTAO_FAILED")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(i=c.data)||void 0===i||null===(s=i.error)||void 0===s?void 0:s.includes("ER_DUP_ENTRY"))?m.b.error(t("quanlychuongtrinhdaotao.ER_DUP_ENTRY")):m.b.error(N.a.t("quanlychuongtrinhdaotao.UPDATE_CHUONGTRINHDAOTAO_FAILED"));case 12:case"end":return e.stop()}var l}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:""===ee.id?Object(n.jsx)(T.a,{}):Object(n.jsxs)("div",{className:"ManageProgramEducationBasic__container",children:[Object(n.jsx)(d.a,{className:"ManageProgramEducation_background ManageProgramEducation__tools",children:Object(n.jsx)(u.a,{outline:!0,className:"btn",color:"success",onClick:je,children:t("SAVE")})}),Object(n.jsx)(d.a,{className:"ManageProgramEducation_background ManageProgramEducation__contents",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("h4",{className:"item-label",children:t("PROGRAM_LIST").toUpperCase()}),Object(n.jsxs)(d.a,{className:"mt-4",children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("PROGRAM_CODE")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{name:"PROGRAM_CODE",id:"PROGRAM_CODE",placeholder:"",defaultValue:(null===ee||void 0===ee?void 0:ee.maCTDT)||"",disabled:!D,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{maCTDT:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:Object(n.jsx)("div",{children:!1===D?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){v(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){v(!1)},children:t("SAVE")})})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("TYPE_EDUCATION")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{className:"input",name:"typeEducation",id:"typeEducation",placeholder:"".concat(t("ENTER_TYPE_EDUCATION")),defaultValue:(null===ee||void 0===ee?void 0:ee.loaiHinh)||"",disabled:!_,onChange:function(e){var t;return te(Object(c.a)(Object(c.a)({},ee),{},{loaiHinh:null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:Object(n.jsx)("div",{children:!1===_?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){y(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){y(!1)},children:t("SAVE")})})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("PROGRAM_NAME")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{className:"input",name:"name",id:"name",placeholder:"".concat(t("ENTER_PROGRAM_NAME")),defaultValue:(null===ee||void 0===ee?void 0:ee.ten)||"",disabled:!S,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{ten:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:!1===S?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){I(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){I(!1)},children:t("SAVE")})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("UNIVERSITY_DEGREE")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{className:"universityDegree",name:"selectDegree",id:"universityDegree",placeholder:t("ENTER_UNIVERSITY_DEGREE"),defaultValue:(null===ee||void 0===ee?void 0:ee.trinhDo)||"",disabled:!U,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{trinhDo:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:!1===U?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){L(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){L(!1)},children:t("SAVE")})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("AUDIENCE")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{className:"input",name:"doituong",id:"doituong",placeholder:"",defaultValue:(null===ee||void 0===ee?void 0:ee.doiTuong)||"",disabled:!q,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{doiTuong:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:!1===q?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){Y(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){Y(!1)},children:t("SAVE")})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("TRAINING_PROCESS")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{style:{height:"250px"},type:"textarea",name:"TRAINING_PROCESS",id:"TRAINING_PROCESS",placeholder:"",defaultValue:(null===ee||void 0===ee?void 0:ee.quiTrinhDaoTao)||"",disabled:!K,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{quiTrinhDaoTao:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:Object(n.jsx)("div",{children:!1===K?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){B(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){B(!1)},children:t("SAVE")})})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(b.a,{lg:3,children:Object(n.jsx)(O.a,{className:"item-label",children:Object(n.jsx)("b",{children:t("GRADUATION_CONDITIONS")})})}),Object(n.jsx)(b.a,{lg:7,children:Object(n.jsx)(h.a,{style:{height:"250px",marginTop:"3px"},type:"textarea",name:"GRADUATION_CONDITIONS",id:"GRADUATION_CONDITIONS",placeholder:"",defaultValue:(null===ee||void 0===ee?void 0:ee.dieuKienTotNghiep)||"",disabled:!W,onChange:function(e){return te(Object(c.a)(Object(c.a)({},ee),{},{dieuKienTotNghiep:e.target.value}))}})}),Object(n.jsx)(b.a,{lg:2,children:Object(n.jsx)("div",{children:!1===W?Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){X(!0)},children:t("CHANGE")}):Object(n.jsx)("a",{className:"typeLink",type:"button",onClick:function(){X(!1)},children:t("SAVE")})})})]})]})}),Object(n.jsx)(d.a,{className:"ManageProgramEducation_background ManageProgramEducation__contents",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("h4",{className:"item-label",children:t("RELATED_MAJOR").toUpperCase()}),(null===ce||void 0===ce?void 0:ce.total)?Object(n.jsxs)(x.a,{className:"mt-4",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"STT"}),Object(n.jsx)("th",{children:t("MAJORS_CODE")}),Object(n.jsx)("th",{children:t("MAJORS_NAME")})]})}),ce.contents.map((function(e,t){return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+1}),Object(n.jsx)("td",{children:e.maNganhDaoTao}),Object(n.jsx)("td",{children:Object(n.jsx)("p",{children:e.ten})})]})},t)}))]}):N.a.t("EMPTY")]})})]})})}},704:function(e,t,a){"use strict";function n(e){throw new Error('"'+e+'" is read-only')}var c=a(22),i={getCTDT:function(e){var t="chuong-trinh-dao-tao/"+e;return c.a.get(t)},getCTDTwithConditions:function(e){var t="chuong-trinh-dao-tao?page=".concat(e.page,"&limit=").concat(e.limit,"&updatedAt=").concat(e.updatedAt);return""!==e.search&&(t+=(n("url"),"search=&".concat(e.search))),""!==e.maCTDT&&(t+=(n("url"),"maCTDT=&".concat(e.maCTDT))),c.a.get(t)},updateCTDT:function(e,t){var a="chuong-trinh-dao-tao/"+e;return c.a.put(a,t)},getNganhDaoTaoTuCTDT:function(e){var t="nganh-dao-tao?chuongTrinhDaoTao=".concat(e);return c.a.get(t)}};t.a=i},864:function(e,t,a){}}]);
//# sourceMappingURL=82.61ab4188.chunk.js.map