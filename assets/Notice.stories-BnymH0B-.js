import{a as N,t as T}from"./props-C0tvRuaH.js";import{p as k,a as C,s as t,c as o}from"./runtime-h0AMGDom.js";import{a as w}from"./actions-EVnswImp.js";import{i as S}from"./lifecycle-DurhAeVF.js";import{d as j,c as D}from"./create-runtime-stories-BSZiRmpa.js";import{N as l}from"./Notice-SwjGZmv7.js";import{w as M}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";const{Story:R,meta:E}=j({title:"Components/Notice",args:{text:"<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a class='mt-link'href='tel:22400000'>22 40 00 00</a> eller politiet <a class='mt-link'href='tel:02800'>02800</a></p>",text2:`<p><strong>Ring politiet på tlf. 02800 hvis du</strong></p>
<ul >
  <li >har kjørt på et dyr</li>
  <li >har funnet et sykt, skadd eller hjelpeløst dyr</li>
  <li >vil varsle om farlige eller ulovlige hunder</li>
  <li >vil varsle om dyr som forstyrrer ro og orden</li>
</ul>`,iconText:"Denne teksten er skjult",disabled:!1,disableJs:!1,disableCss:!1},argTypes:{disabled:{control:"boolean"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}});var I=T('<main class="mt-main container layout-flex-col svelte-1hy3s5u"><h1 class="mt-h1">Varseltekst</h1> <section class="layout-flex-col svelte-1hy3s5u"><h2 class="mt-h2">Med varsel icon</h2> <!> <!></section> <section class="layout-flex-col svelte-1hy3s5u"><h2 class="mt-h2">Uten icon</h2> <!></section></main>');function c(m,p){k(p,!1),S(),R(m,{name:"Normal",children:(d,e)=>{let n=()=>e==null?void 0:e().text,f=()=>e==null?void 0:e().text2,h=()=>e==null?void 0:e().disableCss,u=()=>e==null?void 0:e().iconText;var s=I(),i=t(o(s),2),a=t(o(i),2);l(a,{infoType:"important",get text(){return n()},get iconText(){return u()}});var x=t(a,2);l(x,{infoType:"important",get text(){return f()}});var y=t(i,2),v=t(o(y),2);l(v,{infoType:"none",get text(){return n()}}),w(s,(b,_)=>{var r;return(r=M)==null?void 0:r(b,_)},h),N(d,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
  <h1 class="mt-h1">Varseltekst</h1>
  <section class="layout-flex-col">
    <h2 class="mt-h2">Med varsel icon</h2>
    <Notice infoType="important" {text} {iconText} />
    <Notice infoType="important" text={text2} />
  </section>
  <section class="layout-flex-col">
    <h2 class="mt-h2">Uten icon</h2>
    <Notice infoType="none" {text} />
  </section>
</main>`}}}),C()}c.__docgen={version:3,name:"Notice.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J=D(c,E),Q=["Normal"],W=J.Normal;export{W as Normal,Q as __namedExportsOrder,E as default};
