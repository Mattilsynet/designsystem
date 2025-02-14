import{a as g,t as k}from"./props-C0tvRuaH.js";import{p as f,a as h,g as t}from"./runtime-h0AMGDom.js";import{e as u,i as c}from"./each-DBQXtrgh.js";import{a as v}from"./actions-EVnswImp.js";import{i as y}from"./lifecycle-DurhAeVF.js";import{d as x,c as b}from"./create-runtime-stories-BSZiRmpa.js";import{C as w}from"./CardArticle-DCXPdwe0.js";import{w as T}from"./utils-CMlWd0Pf.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:A,meta:I}=x({title:"Innhold/Oppgave",args:{tasks:[{title:"Dette er første oppgave",intro:"",text:`<p>
        Det skal utarbeides skriftlige rutiner for etterlevelse av forskriftsfestede krav om å ivareta dyrenes velferd,
        blant annet om
      </p>
      <ul >
        <li>Kompetanse</li>
        <li>fôring og stell</li>
        <li>aktivisering og mosjon</li>
        <li>tilrettelegging for utøvelse av naturlig atferd</li>
      </ul>
      <p>Utformingen av rutinene skal være tilpasset virksomhetens egenart.</p>`,nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Link til neste oppgave",headerTag:void 0},{title:"Dette er andre oppgave",intro:"<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ha</p>",text:`<p>It is a long established fact that a reader will</p>
          <p>
            be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it ha
          </p>`,nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Næringsmiddelhygieneforordningens vedlegg II kap VIII",intro:"",text:`<h4 class='mt-h4'>Geiter</h4>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a class='mt-link' href='https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16'>krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h4 class='mt-h4'>Sauer</h4>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,nextActionUrl:"http://www.lovdata.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Fjerde oppgaven med headinger som ikke egentlig skal brukes",intro:"",text:`<h3 class='mt-h3'>Geiter</h3>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a class='mt-link' href='https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16'>krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h4 class='mt-h4'>Sauer</h4>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Oppgave 5 med tittel inni en h4-tag",intro:"",text:"Noe tekst i kroppen",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Last ned mal for internkontroll",headerTag:"h4"}],disabled:!1,disableCss:!1},argTypes:{disabled:{control:"boolean"},disableCss:{control:"boolean"}}});var L=k('<div class="container layout-flex-col layout-flex-col--x-small"></div>');function s(l,o){f(o,!1),y(),A(l,{name:"Normal",children:(d,n)=>{let m=()=>n==null?void 0:n().tasks,p=()=>n==null?void 0:n().disableCss;var r=L();u(r,5,m,c,(a,e)=>{w(a,{type:"task",class:"background-mt-white",get linkText(){return t(e).nextActionLinkText},get linkUrl(){return t(e).nextActionUrl},get intro(){return t(e).intro},get title(){return t(e).title},get text(){return t(e).text},get headingId(){return t(e).title},get headerTag(){return t(e).headerTag}})}),v(r,(a,e)=>{var i;return(i=T)==null?void 0:i(a,e)},p),g(d,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  use:wrapInShadowDom={disableCss}
  class="container layout-flex-col layout-flex-col--x-small">
  {#each tasks as task}
    <CardArticle
      type="task"
      class="background-mt-white"
      linkText={task.nextActionLinkText}
      linkUrl={task.nextActionUrl}
      intro={task.intro}
      title={task.title}
      text={task.text}
      headingId={task.title}
      headerTag={task.headerTag} />
  {/each}
</div>`}}}),h()}s.__docgen={version:3,name:"Task.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=b(s,I),B=["Normal"],J=j.Normal;export{J as Normal,B as __namedExportsOrder,I as default};
