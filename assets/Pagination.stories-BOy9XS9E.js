import{a as h,p as P,t as v}from"./props-C0tvRuaH.js";import{p as f,a as C,g as x,b,d as _,s as w,c as o}from"./runtime-h0AMGDom.js";import{a as T}from"./actions-EVnswImp.js";import{d as N,c as S}from"./create-runtime-stories-BSZiRmpa.js";import{w as I}from"./utils-CMlWd0Pf.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as D}from"./Pagination-BdIs81fS.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./v4-CQkTLCs1.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const F=y("pageChange");let n=b(0);function G(a){F("index",a),_(n,P(a))}const{Story:j,meta:k}=N({title:"Components/Pagination",args:{disableCss:!1,pages:[{url:"?0"},{url:"?1"},{url:"?2"},{url:"?3"},{url:"?4"},{url:"?5"},{url:"?6"},{url:"?7"},{url:"?8"},{url:"?9"},{url:"?10"},{url:"?11"}]},argTypes:{disableCss:{control:"boolean"},pages:{control:"object"}}});var A=v('<div><article><h2 class="mt-h2">Pagination</h2> <!></article></div>');function r(a,i){f(i,!0),j(a,{name:"Normal",children:(l,e)=>{let p=()=>e==null?void 0:e().disableCss,m=()=>e==null?void 0:e().pages;var t=A(),d=o(t),c=w(o(d),2);D(c,{get pages(){return m()},get currentPageIndex(){return x(n)},onPageChange:G,nextText:"Neste",previousText:"Forrige",labelPage:"Side",toPageTitle:"Gå til side {0} av {1}",class:""}),T(t,(g,u)=>{var s;return(s=I)==null?void 0:s(g,u)},p),h(l,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <article>
    <h2 class="mt-h2">Pagination</h2>
    <Pagination
      {pages}
      {currentPageIndex}
      onPageChange={handlePageChange}
      nextText="Neste"
      previousText="Forrige"
      labelPage="Side"
      toPageTitle={\`Gå til side {0} av {1}\`}
      class="" />
  </article>
</div>`}}}),C()}r.__docgen={version:3,name:"Pagination.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const E=S(r,k),$=["Normal"],ee=E.Normal;export{ee as Normal,$ as __namedExportsOrder,k as default};
