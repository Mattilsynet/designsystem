import{m as _,c as A,a as i,t as u}from"./props-C0tvRuaH.js";import{p as E,a as O,f as P,g as n,t as x,c as a,s as f}from"./runtime-h0AMGDom.js";import{e as q,i as z}from"./each-DBQXtrgh.js";import{h as d}from"./html-CjI7j8Lz.js";import{a as B}from"./actions-EVnswImp.js";import{s as k}from"./attributes-Cx6y8_P7.js";import{t as T}from"./class-Dqk93oQ7.js";import{i as G}from"./lifecycle-DurhAeVF.js";import{d as J,c as Q}from"./create-runtime-stories-BSZiRmpa.js";import{w as U}from"./utils-CMlWd0Pf.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";const{Story:V,meta:W}=J({title:"Innhold/Toppoppgaver",args:{path:"/dyr-og-dyrehold/sei-og-geit/flytting-av-sei",title:"Flytting av sau og geit og høner og ørn og maur og bier og kuer.",intro:"Det er strenge regler for flytting av småfe for å unngå smitte mellom besetninger. Hovedregelen er forbud mot å flytte hunndyr mellom besetninger og forbud mot å flytte småfe mellom regioner.",topTasks:[{url:"#",title:"Dyr og dyrehold",intro:"Dette er innholdsteksten for dyr og dyrehold"},{url:"#",title:"Hest",intro:"Dette er innholdsteksten for mat og vann"},{url:"#",title:"Fisk og akvakultur",intro:"Dette er innholdsteksten for fisk og akvakultur"},{url:"#",title:"Planter og dyrking",intro:"Dette er innholdsteksten for planter og dyrking"},{url:"#",title:"Kosmetikk",intro:"Dette er innholdsteksten for kosmetikk"},{url:"#",title:"Kritikkverdige forhold på arbeids&shy;plassen",intro:"Dette er innholdsteksten kritikkverdige forhold på arbeidsplassen"},{url:"https://www.barentswatch.no/fiskehelse",title:"Restriksjoner for ILA",intro:"Lenkes til utenfor Mattilsynet"}],disabled:!1,disableCss:!1},argTypes:{title:{control:"text"},intro:{control:"text"},topTasks:{control:"object"},disabled:{control:"boolean"},disableCss:{control:"boolean"}}});var X=u('<div class="top-tasks-text col-1-span-6"><!></div>'),Y=u('<a class="mt-link mt-button top-task"><h3 class="mt-h3 heading"><!></h3> <span class="text"><!></span></a>'),Z=u('<div class="layout-grid layout-grid--column-12 top-tasks-container svelte-1ld3dlc"><h2 class="mt-h2 top-tasks-text col-1-span-12"><!></h2> <!> <section class="layout-flex layout-flex--centered col-1-span-12 tasks-layout" style="gap: var(--spacer-x-small);"></section></div>');function w(D,C){E(C,!1),G(),V(D,{name:"Normal",children:(I,t)=>{let l=()=>t==null?void 0:t().topTasks,N=()=>t==null?void 0:t().disableCss,S=()=>t==null?void 0:t().title,v=()=>t==null?void 0:t().intro,y=()=>t==null?void 0:t().path;var p=Z(),m=a(p),j=a(m);d(j,S);var g=f(m,2);{var F=s=>{var e=X(),o=a(e);d(o,v),i(s,e)};_(g,s=>{v()&&s(F)})}var r=f(g,2);q(r,5,l,z,(s,e)=>{var o=A(),H=P(o);{var K=c=>{var h=Y(),b=a(h),L=a(b);d(L,()=>n(e).title);var M=f(b,2),R=a(M);d(R,()=>n(e).intro),x(()=>k(h,"href",n(e).url)),i(c,h)};_(H,c=>{n(e)&&n(e).url&&c(K)})}i(s,o)}),B(p,(s,e)=>{var o;return(o=U)==null?void 0:o(s,e)},N),x(()=>{k(m,"id",y()),k(r,"aria-labelledby",y()),T(r,"layout-flex--basis-3",l().length!==2&&l().length!==4),T(r,"layout-flex--basis-2",l().length===2||l().length===4)}),i(I,p)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  use:wrapInShadowDom={disableCss}
  class="layout-grid layout-grid--column-12 top-tasks-container">
  <h2 id={path} class="mt-h2 top-tasks-text col-1-span-12">
    {@html title}
  </h2>
  {#if intro}
    <div class="top-tasks-text col-1-span-6">{@html intro}</div>
  {/if}
  <section
    class="layout-flex layout-flex--centered col-1-span-12 tasks-layout"
    class:layout-flex--basis-3={topTasks.length !== 2 && topTasks.length !== 4}
    class:layout-flex--basis-2={topTasks.length === 2 || topTasks.length === 4}
    aria-labelledby={path}
    style="gap: var(--spacer-x-small);">
    {#each topTasks as task}
      {#if task && task.url}
        <a href={task.url} class="mt-link mt-button top-task">
          <h3 class="mt-h3 heading">{@html task.title}</h3>
          <span class="text">{@html task.intro}</span>
        </a>
      {/if}
    {/each}
  </section>
</div>`}}}),O()}w.__docgen={version:3,name:"TopTasks.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $=Q(w,W),ft=["Normal"],kt=$.Normal;export{kt as Normal,ft as __namedExportsOrder,W as default};
