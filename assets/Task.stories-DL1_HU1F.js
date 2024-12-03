import{S as T,i as A,s as $,c as p,m as k,t as f,a as g,d as u,b as I,g as L,f as S,e as U}from"./index-D8riOviU.js";import{s as j,i as b,d as _,e as D,a as N,c as C}from"./lifecycle-CcifP0R7.js";import{e as h}from"./each-Dzkb-YsG.js";import{p as E,M,S as O}from"./collect-stories-BMzKwk3M.js";import{C as K}from"./CardArticle-DAPgikOA.js";import{w as V}from"./utils-CMlWd0Pf.js";import"./HeadingLevel-RQgwHrl0.js";import"./utils-DjM8Id44.js";function v(o,a,d){const e=o.slice();return e[2]=a[d],e}function y(o){let a,d;return a=new K({props:{type:"task",class:"background-mt-white",linkText:o[2].nextActionLinkText,linkUrl:o[2].nextActionUrl,intro:o[2].intro,title:o[2].title,text:o[2].text,id:o[2].title,headerTag:o[2].headerTag}}),{c(){p(a.$$.fragment)},m(e,s){k(a,e,s),d=!0},p(e,s){const t={};s&1&&(t.linkText=e[2].nextActionLinkText),s&1&&(t.linkUrl=e[2].nextActionUrl),s&1&&(t.intro=e[2].intro),s&1&&(t.title=e[2].title),s&1&&(t.text=e[2].text),s&1&&(t.id=e[2].title),s&1&&(t.headerTag=e[2].headerTag),a.$set(t)},i(e){d||(f(a.$$.fragment,e),d=!0)},o(e){g(a.$$.fragment,e),d=!1},d(e){u(a,e)}}}function F(o){let a,d,e,s,t,i=h(o[0]),n=[];for(let r=0;r<i.length;r+=1)n[r]=y(v(o,i,r));const w=r=>g(n[r],1,1,()=>{n[r]=null});return{c(){a=D("div");for(let r=0;r<n.length;r+=1)n[r].c();N(a,"class","container layout-flex-col layout-flex-col--x-small")},m(r,m){b(r,a,m);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(a,null);e=!0,s||(t=I(d=V.call(null,a,o[1])),s=!0)},p(r,m){if(m&1){i=h(r[0]);let l;for(l=0;l<i.length;l+=1){const c=v(r,i,l);n[l]?(n[l].p(c,m),f(n[l],1)):(n[l]=y(c),n[l].c(),f(n[l],1),n[l].m(a,null))}for(L(),l=i.length;l<n.length;l+=1)w(l);S()}d&&U(d.update)&&m&2&&d.update.call(null,r[1])},i(r){if(!e){for(let m=0;m<i.length;m+=1)f(n[m]);e=!0}},o(r){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)g(n[m]);e=!1},d(r){r&&_(a),C(n,r),s=!1,t()}}}function G(o){let a,d,e,s;return a=new M({props:{title:"Innhold/Oppgave",args:{tasks:[{title:"Dette er første oppgave",intro:"",text:`<p>
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
          </p>`,nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Næringsmiddelhygieneforordningens vedlegg II kap VIII",intro:"",text:`<h4 class="mt-h4">Geiter</h4>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a class="mt-link" href="https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16">krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h4 class="mt-h4">Sauer</h4>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,nextActionUrl:"http://www.lovdata.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Fjerde oppgaven med headinger som ikke egentlig skal brukes",intro:"",text:`<h3 class="mt-h3">Geiter</h3>

              <p>Når geiter flyttes til ei anna eller ny småfebesetning, skal dyreholderen sende med en attest fra en veterinær som har undersøkt dyra i avsenderbesetninga. Attesten skal bekrefte at dyra som flyttes,
                  ikke har symptomer på smittsomme dyresjukdommer. Attesten skal også bekrefte at
                  <a class="mt-link" href="https://lovdata.no/dokument/SF/forskrift/2002-06-27-732#KAPITTEL_16">krava i Dyrehelseforskrifta,
                  vedlegg VII er oppfylt</a>.
              </p>

              <h4 class="mt-h4">Sauer</h4>

              <p>Kravet til veterinærattest gjelder også når sauer flyttes over fylkesgrenser til ei anna eller ny småfebesetning.</p>

              <p>Unntak: Dette gjelder ikke for sauer som flyttes mellom Oslo og Akershus og mellom Rogaland og kommunene Sveio eller Etne i Hordaland.</p>

              <p>Veterinærattestene skal ikke være eldre enn 7 dager når dyra flyttes. Attesten skal oppbevares i mottakerbesetninga i 5 år og legges fram når Mattilsynet ber om det.</p>

              <ul>
                <li>En eller to</li>
                <li>tre og fire og fem og seks</li>
                <li>sju</li>
                <li>Åtte ni og</li>
                <li>ti</li>
              </ul>`,nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Link til tredje oppgave",headerTag:void 0},{title:"Oppgave 5 med tittel inni en h4-tag",intro:"",text:"Noe tekst i kroppen",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Last ned mal for internkontroll",headerTag:"h4"}],disabled:!1,disableCss:!1},argTypes:{disabled:{control:"boolean"},disableCss:{control:"boolean"}}}}),e=new O({props:{name:"Normal",$$slots:{default:[F,({tasks:t,disableCss:i})=>({0:t,1:i}),({tasks:t,disableCss:i})=>(t?1:0)|(i?2:0)]},$$scope:{ctx:o}}}),{c(){p(a.$$.fragment),d=j(),p(e.$$.fragment)},m(t,i){k(a,t,i),b(t,d,i),k(e,t,i),s=!0},p(t,[i]){const n={};i&35&&(n.$$scope={dirty:i,ctx:t}),e.$set(n)},i(t){s||(f(a.$$.fragment,t),f(e.$$.fragment,t),s=!0)},o(t){g(a.$$.fragment,t),g(e.$$.fragment,t),s=!1},d(t){t&&_(d),u(a,t),u(e,t)}}}class H extends T{constructor(a){super(),A(this,a,null,G,$,{})}}const x=E(H,{meta:{title:"Innhold/Oppgave"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss} class="container layout-flex-col layout-flex-col--x-small">
  {#each tasks as task}
    <CardArticle
      type="task"
      class="background-mt-white"
      linkText={task.nextActionLinkText}
      linkUrl={task.nextActionUrl}
      intro={task.intro}
      title={task.title}
      text={task.text}
      id={task.title}
      headerTag={task.headerTag} />
  {/each}
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","CardArticle","wrapInShadowDom"]}),X=x.meta,Y=["Normal"],Z=x.stories.Normal;export{Z as Normal,Y as __namedExportsOrder,X as default};
