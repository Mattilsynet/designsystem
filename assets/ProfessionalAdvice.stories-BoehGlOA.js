import{a as c,s as f,t as v}from"./props-C0tvRuaH.js";import{p as I,a as S,t as E,c as s,s as t}from"./runtime-h0AMGDom.js";import{h as B}from"./html-CjI7j8Lz.js";import{a as H}from"./actions-EVnswImp.js";import{i as L}from"./lifecycle-DurhAeVF.js";import{d as M,c as Z}from"./create-runtime-stories-BSZiRmpa.js";import{C as k}from"./CardArticle-DCXPdwe0.js";import{D as O}from"./Disclosure-eHDyJ933.js";import{P as R}from"./Published-f7fbW3jP.js";import{w as V}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./index-Cvmj00a4.js";const{Story:q,meta:z}=M({title:"Innhold/Faglig råd",args:{title:"Dette er det viktig at du vet før du får kjæledyr",intro:"Å anskaffe seg et dyr er et stort ansvar og det er tid- og ",text:`<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul >
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>
      <p>Paragraf med tekst</p>
      <h3 class='mt-h3'>Underoverskrift</h3>
      <p>Paragraf med tekst</p>
      <p>Paragraf med tekst</p>`,publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",disableCss:!1,loadJs:!0},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"},loadJs:{control:"boolean"}}});var G=v("<p>Her kommer begrunnelsen</p>"),K=v('<div class="container"><article class="article-page"><h1 class="mt-h1"> </h1> <div class="intro"><p> </p></div> <!> <!> <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading"><h2 id="how-to-heading" class="mt-h2">Dette gjør du</h2> <p>Litt tekst her</p> <!> <!></section> <!></article></div>');function u(b,x){I(x,!1),L(),q(b,{name:"Normal",children:(y,e)=>{let _=()=>e==null?void 0:e().title,g=()=>e==null?void 0:e().intro,w=()=>e==null?void 0:e().disableCss,D=()=>e==null?void 0:e().loadJs,P=()=>e==null?void 0:e().publishFrom,N=()=>e==null?void 0:e().professionallyUpdated,T=()=>e==null?void 0:e().text;var o=K(),C=s(o),a=s(C),U=s(a),n=t(a,2),A=s(n),F=s(A),i=t(n,2);R(i,{get publishFrom(){return P()},get professionallyUpdated(){return N()}});var d=t(i,2);B(d,T);var p=t(d,2),m=t(s(p),4);k(m,{type:"task",class:"background-mt-white",title:"Dette er en h2 tittel",text:"Noe tekst i kroppen",linkUrl:"http://",linkText:"Neste handling",headerTag:"h2"});var J=t(m,2);k(J,{type:"task",class:"background-mt-white",title:"Dette er en h3 tittel",text:"Noe tekst i kroppen",linkUrl:"http://",linkText:"Neste handling"});var j=t(p,2);O(j,{title:"Begrunnelse",headerTag:"h2",get loadJs(){return D()},children:(r,h)=>{var l=G();c(r,l)},$$slots:{default:!0}}),H(o,(r,h)=>{var l;return(l=V)==null?void 0:l(r,h)},w),E(()=>{f(U,_()),f(F,g())}),c(y,o)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="container">
  <article class="article-page">
    <h1 class="mt-h1">{title}</h1>
    <div class="intro">
      <p>{intro}</p>
    </div>
    <Published {publishFrom} {professionallyUpdated} />

    {@html text}

    <section class="layout-flex-col layout-flex-col--x-small" aria-labelledby="how-to-heading">
      <h2 id="how-to-heading" class="mt-h2">Dette gjør du</h2>
      <p>Litt tekst her</p>
      <CardArticle
        type="task"
        class="background-mt-white"
        title="Dette er en h2 tittel"
        text="Noe tekst i kroppen"
        linkUrl="http://"
        linkText="Neste handling"
        headerTag="h2" />
      <CardArticle
        type="task"
        class="background-mt-white"
        title="Dette er en h3 tittel"
        text="Noe tekst i kroppen"
        linkUrl="http://"
        linkText="Neste handling" />
    </section>

    <Disclosure title={'Begrunnelse'} headerTag="h2" {loadJs}>
      <p>Her kommer begrunnelsen</p>
    </Disclosure>
  </article>
</div>`}}}),S()}u.__docgen={version:3,name:"ProfessionalAdvice.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Q=Z(u,z),ve=["Normal"],ue=Q.Normal;export{ue as Normal,ve as __namedExportsOrder,z as default};
