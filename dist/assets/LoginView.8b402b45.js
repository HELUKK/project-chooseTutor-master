import{d as m,u as g,r as C,a as _,o as b,c as y,w as l,b as n,p as f,e as F,f as o,g as t,h as k}from"./index.c64a5aba.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const V=u=>(f("data-v-60bcf095"),u=u(),F(),u),I=V(()=>t("h2",null,"\u6BD5\u8BBE\u9009\u5BFC\u5E08\u7CFB\u7EDF",-1)),E=o("\u767B\u5F55"),D=m({__name:"LoginInput",setup(u){const d=g(),s=C({id:"",password:""}),p=()=>{const a={id:s.id,password:s.password};d.loginGuard(a),s.id="",s.password=""};return(a,i)=>{const x=_("el-row"),h=_("el-input"),r=_("el-form-item"),v=_("el-button"),B=_("el-form");return b(),y(B,{model:s,"label-position":"right","label-width":"80px",size:"large",class:"loginDialog"},{default:l(()=>[n(x,{style:{"margin-bottom":"20px"},justify:"center",align:"middle"},{default:l(()=>[I]),_:1}),n(r,{label:"\u7528\u6237\u540D\uFF1A"},{default:l(()=>[n(h,{modelValue:s.id,"onUpdate:modelValue":i[0]||(i[0]=c=>s.id=c),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),n(r,{label:"\u5BC6\u7801\uFF1A"},{default:l(()=>[n(h,{modelValue:s.password,"onUpdate:modelValue":i[1]||(i[1]=c=>s.password=c),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","show-password":""},null,8,["modelValue"])]),_:1}),n(r,{class:"btn"},{default:l(()=>[n(v,{type:"primary",round:"",onClick:p},{default:l(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])}}});var L=w(D,[["__scopeId","data-v-60bcf095"]]);const e=u=>(f("data-v-11d60d27"),u=u(),F(),u),A={class:"background"},S=o(" \u5B66\u751Fid"),j=e(()=>t("br",null,null,-1)),$=o(" 2019000001"),z=e(()=>t("br",null,null,-1)),N=o(" 2019000002"),U=e(()=>t("br",null,null,-1)),G=o(" 2019000003"),T=e(()=>t("br",null,null,-1)),q=o(" 2019000004"),H=e(()=>t("br",null,null,-1)),J=o(" \u8001\u5E08id"),K=e(()=>t("br",null,null,-1)),M=o(" 1000000001"),O=e(()=>t("br",null,null,-1)),P=o(" 1000000002"),Q=e(()=>t("br",null,null,-1)),R=o(" 1000000003"),W=e(()=>t("br",null,null,-1)),X=o(" 1000000004"),Y=e(()=>t("br",null,null,-1)),Z=o(" \u5BC6\u7801\u540Cid"),oo=e(()=>t("br",null,null,-1)),to=o(" \u4F7F\u7528axios-mock\u6A21\u62DF\uFF0C\u9664\u4E86\u542F\u52A8\u65F6\u5C31\u662F\u8D70\u4E2A\u5F62\u5F0F"),eo=e(()=>t("br",null,null,-1)),so=o(" \u4F7F\u7528pinia\u6301\u4E45\u6027\u5B58\u50A8\u5B66\u751F\u5217\u8868\u548C\u8001\u5E08\u5217\u8868"),no=e(()=>t("br",null,null,-1)),uo=m({__name:"LoginView",setup(u){const d=g();return d.liststudents(),d.listteachers(),d.statusChange(),d.hasLogin=!1,(s,p)=>{const a=_("el-row");return b(),k("div",A,[n(a,{style:{position:"fixed","z-index":"999"}},{default:l(()=>[S,j,$,z,N,U,G,T,q,H,J,K,M,O,P,Q,R,W,X,Y,Z,oo,to,eo,so,no]),_:1}),n(a,{class:"maxtype",justify:"center",align:"middle"},{default:l(()=>[n(L)]),_:1})])}}});var ao=w(uo,[["__scopeId","data-v-11d60d27"]]);export{ao as default};