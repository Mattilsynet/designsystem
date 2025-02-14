import{m as p,a as l,t as m}from"./props-C0tvRuaH.js";import{p as tt,a as et,g as r,f as c,s as n,c as a}from"./runtime-h0AMGDom.js";import{e as it,i as ot}from"./each-DBQXtrgh.js";import{h as f}from"./html-CjI7j8Lz.js";import{a as rt}from"./actions-EVnswImp.js";import{i as nt}from"./lifecycle-DurhAeVF.js";import{d as st,c as at}from"./create-runtime-stories-BSZiRmpa.js";import{D as dt}from"./Disclosure-eHDyJ933.js";import{P as lt}from"./Published-f7fbW3jP.js";import{L as mt}from"./Link-CmtXbJqI.js";import{w as pt}from"./utils-CMlWd0Pf.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./index-Cvmj00a4.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:ft,meta:vt}=st({title:"Innhold/Rapportserie",args:{title:"Hovedoverskrift",intro:"Veterinær grensekontroll sjømat 2020",publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",publications:[{title:"Overskrift 1",text:"Tekst 1",subjectToExamination:"Dette undersøkte vi",timePeriod:"Dette er tidsperioden",lookingForWhat:"Dette så vi etter",organisationPerformingAssignment:"Disse utførte oppdraget",findings:"Dette fant vi",file:{text:"Filrapporten.pdf",url:"http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf"}},{title:"Overskrift 2",subjectToExamination:"Dette undersøkte vi",timePeriod:"Dette er tidsperioden",lookingForWhat:"Dette så vi etter",organisationPerformingAssignment:"Disse utførte oppdraget",findings:"Dette fant vi",file:{text:"Filrapporten",url:"http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf"}}],disableCss:!1,loadJs:!0},argTypes:{title:{control:"text"},intro:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},publications:{control:"object"},disableCss:{control:"boolean"},loadJs:{control:"boolean"}}});var ct=m('<div class="intro"><!></div>'),ut=m('<div class="text"><!></div>'),ht=m('<dt>Hva undersøkte vi?</dt> <dd class="text"><!></dd>',1),_t=m('<dt>Tidsrom</dt> <dd class="text"><!></dd>',1),xt=m('<dt>Hva lette vi etter?</dt> <dd class="text"><!></dd>',1),bt=m('<dt>Hva fant vi?</dt> <dd class="text"><!></dd>',1),gt=m('<dt>Hvem utførte oppdraget?</dt> <dd class="text"><!></dd>',1),kt=m('<dt>File</dt> <dd class="text"><!></dd>',1),Dt=m('<!> <dl class="mt-dl report-list"><!> <!> <!> <!> <!> <!></dl>',1),Ft=m('<div class="layout-grid layout-grid--column-12"><article class="article-page col-1-span-12 report"><span>Rapport</span> <h1 class="mt-h1"><!></h1> <!> <!> <!></article></div>');function j(C,E){tt(E,!1),nt(),ft(C,{name:"Normal",children:(A,i)=>{let J=()=>i==null?void 0:i().title,x=()=>i==null?void 0:i().intro,N=()=>i==null?void 0:i().publishFrom,R=()=>i==null?void 0:i().professionallyUpdated,S=()=>i==null?void 0:i().publications,U=()=>i==null?void 0:i().disableCss,W=()=>i==null?void 0:i().loadJs;var h=Ft(),O=a(h),b=n(a(O),2),I=a(b);f(I,J);var g=n(b,2);{var L=v=>{var e=ct(),u=a(e);f(u,x),l(v,e)};p(g,v=>{x()&&v(L)})}var k=n(g,2);lt(k,{get publishFrom(){return N()},get professionallyUpdated(){return R()}});var Z=n(k,2);it(Z,1,S,ot,(v,e,u)=>{dt(v,{get title(){return r(e).title},theme:"no-border",class:"background-mt-white col-3-span-8",startOpen:u===0,get loadJs(){return W()},headerTag:"h2",children:(M,wt)=>{var D=Dt(),F=c(D);{var V=t=>{var o=ut(),s=a(o);f(s,()=>r(e).text),l(t,o)};p(F,t=>{r(e).text&&t(V)})}var q=n(F,2),P=a(q);{var z=t=>{var o=ht(),s=n(c(o),2),d=a(s);f(d,()=>r(e).subjectToExamination),l(t,o)};p(P,t=>{r(e).subjectToExamination&&t(z)})}var T=n(P,2);{var B=t=>{var o=_t(),s=n(c(o),2),d=a(s);f(d,()=>r(e).timePeriod),l(t,o)};p(T,t=>{r(e).timePeriod&&t(B)})}var w=n(T,2);{var G=t=>{var o=xt(),s=n(c(o),2),d=a(s);f(d,()=>r(e).lookingForWhat),l(t,o)};p(w,t=>{r(e).lookingForWhat&&t(G)})}var y=n(w,2);{var K=t=>{var o=bt(),s=n(c(o),2),d=a(s);f(d,()=>r(e).findings),l(t,o)};p(y,t=>{r(e).findings&&t(K)})}var H=n(y,2);{var Q=t=>{var o=gt(),s=n(c(o),2),d=a(s);f(d,()=>r(e).organisationPerformingAssignment),l(t,o)};p(H,t=>{r(e).organisationPerformingAssignment&&t(Q)})}var X=n(H,2);{var Y=t=>{var o=kt(),s=n(c(o),2),d=a(s);{var $=_=>{mt(_,{class:"document",get href(){return r(e).file.url},get linkText(){return r(e).title},get fileName(){return r(e).file.text}})};p(d,_=>{r(e).file.url&&_($)})}l(t,o)};p(X,t=>{r(e).file.url&&t(Y)})}l(M,D)},$$slots:{default:!0}})}),rt(h,(v,e)=>{var u;return(u=pt)==null?void 0:u(v,e)},U),l(A,h)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div class="layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <article class="article-page col-1-span-12 report">
    <span>Rapport</span>
    <h1 class="mt-h1">{@html title}</h1>
    {#if intro}
      <div class="intro">
        {@html intro}
      </div>
    {/if}
    <Published {publishFrom} {professionallyUpdated} />

    {#each publications as publication, index}
      <Disclosure
        title={publication.title}
        theme="no-border"
        class="background-mt-white col-3-span-8"
        startOpen={index === 0}
        {loadJs}
        headerTag="h2">
        {#if publication.text}
          <div class="text">
            {@html publication.text}
          </div>
        {/if}
        <dl class="mt-dl report-list">
          {#if publication.subjectToExamination}
            <dt>Hva undersøkte vi?</dt>
            <dd class="text">{@html publication.subjectToExamination}</dd>
          {/if}
          {#if publication.timePeriod}
            <dt>Tidsrom</dt>
            <dd class="text">{@html publication.timePeriod}</dd>
          {/if}
          {#if publication.lookingForWhat}
            <dt>Hva lette vi etter?</dt>
            <dd class="text">{@html publication.lookingForWhat}</dd>
          {/if}
          {#if publication.findings}
            <dt>Hva fant vi?</dt>
            <dd class="text">{@html publication.findings}</dd>
          {/if}
          {#if publication.organisationPerformingAssignment}
            <dt>Hvem utførte oppdraget?</dt>
            <dd class="text">{@html publication.organisationPerformingAssignment}</dd>
          {/if}
          {#if publication.file.url}
            <dt>File</dt>
            <dd class="text">
              {#if publication.file.url}
                <Link
                  class="document"
                  href={publication.file.url}
                  linkText={publication.title}
                  fileName={publication.file.text} />
              {/if}
            </dd>
          {/if}
        </dl>
      </Disclosure>
    {/each}
  </article>
</div>`}}}),et()}j.__docgen={version:3,name:"ReportSeries.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Pt=at(j,vt),Bt=["Normal"],Gt=Pt.Normal;export{Gt as Normal,Bt as __namedExportsOrder,vt as default};
