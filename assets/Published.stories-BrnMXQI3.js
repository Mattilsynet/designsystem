import{a as h,t as f,s as D}from"./props-C0tvRuaH.js";import{p as N,a as Z,s as e,c as a,t as j}from"./runtime-h0AMGDom.js";import{h as u}from"./html-CjI7j8Lz.js";import{a as G}from"./actions-EVnswImp.js";import{i as I}from"./lifecycle-DurhAeVF.js";import{d as E,c as M}from"./create-runtime-stories-BSZiRmpa.js";import{P as v}from"./Published-f7fbW3jP.js";import{S as O}from"./Status-BWc7f4Sb.js";import{w as R}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:q,meta:z}=E({title:"Components/Publisert",args:{intro:"<p>Paragraf med tekst. Paragraf med tekst.",statusTitle:"Status tittel",text:"<p>Status tekst</p>",publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",disableCss:!1},argTypes:{intro:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},disableCss:{control:"boolean"}}});var A=f('<h3 class="mt-h3"> </h3>'),B=f('<div class="container layout-grid layout-grid--column-12"><article class="article-page col-3-span-8"><h1 class="mt-h1">Publisert og faglig oppdatert er samme dato</h1> <div class="intro"><!></div> <!> <dl class="mt-dl meta-rows"><dt class="mt-dt">Publisert</dt> <dd class="mt-dd">01.02.2024</dd> <dt class="mt-dt">Gjelder til og med</dt> <dd class="mt-dd">01.02.2024</dd></dl> <hr> <h2 class="mt-h2">Faglig oppdatert er etter publisert</h2> <div class="intro"><!></div> <!> <hr> <h2 class="mt-h2">Status viser alltid oppdatert</h2> <!></article></div>');function b(_,y){N(y,!1),I(),q(_,{name:"Normal",children:(P,t)=>{let o=()=>t==null?void 0:t().publishFrom,x=()=>t==null?void 0:t().professionallyUpdated,i=()=>t==null?void 0:t().intro,S=()=>t==null?void 0:t().text,F=()=>t==null?void 0:t().statusTitle,T=()=>t==null?void 0:t().disableCss;var l=B(),w=a(l),r=e(a(w),2),C=a(r);u(C,i);var n=e(r,2);v(n,{get publishFrom(){return o()},get professionallyUpdated(){return x()}});var p=e(n,8),U=a(p);u(U,i);var m=e(p,2);v(m,{get publishFrom(){return o()},professionallyUpdated:"2021-07-24T11:32:22Z"});var g=e(m,6);O(g,{statusType:"important",get updatedDate(){return o()},get text(){return S()},heading:d=>{var s=A(),k=a(s);j(()=>D(k,F())),h(d,s)},$$slots:{heading:!0}}),G(l,(c,d)=>{var s;return(s=R)==null?void 0:s(c,d)},T),h(P,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
  <article class="article-page col-3-span-8">
    <h1 class="mt-h1">Publisert og faglig oppdatert er samme dato</h1>
    <div class="intro">
      {@html intro}
    </div>
    <Published {publishFrom} {professionallyUpdated} />
    <dl class="mt-dl meta-rows">
      <dt class="mt-dt">Publisert</dt>
      <dd class="mt-dd">01.02.2024</dd>
      <dt class="mt-dt">Gjelder til og med</dt>
      <dd class="mt-dd">01.02.2024</dd>
    </dl>

    <hr />
    <h2 class="mt-h2">Faglig oppdatert er etter publisert</h2>
    <div class="intro">
      {@html intro}
    </div>
    <Published {publishFrom} professionallyUpdated="2021-07-24T11:32:22Z" />
    <hr />
    <h2 class="mt-h2">Status viser alltid oppdatert</h2>
    <Status statusType={'important'} updatedDate={publishFrom} {text}>
      {#snippet heading()}
        <h3 class="mt-h3">{statusTitle}</h3>
      {/snippet}
    </Status>
  </article>
</div>`}}}),Z()}b.__docgen={version:3,name:"Published.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const H=M(b,z),rt=["Normal"],nt=H.Normal;export{nt as Normal,rt as __namedExportsOrder,z as default};
