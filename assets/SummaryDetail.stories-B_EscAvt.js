import{a as r,t as f,c as p}from"./props-C0tvRuaH.js";import{p as O,f as n,a as W,s,n as _,g as F,c as y,e as I}from"./runtime-h0AMGDom.js";import{h}from"./html-CjI7j8Lz.js";import{i as N}from"./lifecycle-DurhAeVF.js";import{s as V}from"./utils-CMlWd0Pf.js";import{d as L,c as E}from"./create-runtime-stories-BSZiRmpa.js";import{S as g}from"./SummaryDetail-DNzTolJt.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./universal-Cs0PP9_m.js";const{Story:$,meta:H}=L({title:"Components/Oppsummering og Detaljer",args:{title:"Eksempel på oppsummering og detaljer",content:V(`For at meldingen skal kunne følges opp, må den inneholde opplysninger som tyder på alvorlig brudd på dyrevelferdsregelverket. For eksempel mishandling av dyr, alvorlig svikt i levemiljø, tilsyn og stell, syke og skadde dyr som ikke følges opp.
 Det er viktig med konkrete beskrivelser. Vage og generelle beskrivelser basert på antagelser er ikke ønskelig.
 Skriv gjerne
 Hvor skjedde det?

      Her er andre punkt i listen
 Så er det noe tekst på bunnen av summary`)},argTypes:{title:{control:"text"},content:{control:"text"}}});var q=f('<h1 class="mt-h1">Oppsummering og detaljer</h1> <main class="mt-main container layout-flex-col"><h2 class="mt-h2 m-t-s">Default</h2> <!> <h2 class="mt-h2 m-t-s">With color-neutral</h2> <!> <h2 class="mt-h2 m-t-s">With color-neutral border-neutral</h2> <!></main>',1),R=f('<p>Oppsummering og detaljer med linje på venstre side</p> <main class="mt-main container layout-flex-col"><!></main>',1),T=f('<p>Oppsummering og detaljer med ikon</p> <main class="mt-main container layout-flex-col"><!></main>',1),z=f('<p>Oppsummering og detaljer neutral</p> <main class="mt-main container layout-flex-col"><!> <hr> <h2 class="mt-h2">Med heading-tag i oppsummeringen</h2> <!></main>',1),A=f("<!> <!> <!> <!>",1);function b(x,w){O(w,!1),N();var C=A(),j=n(C);$(j,{name:"Normal",children:(c,e=_)=>{var l=q(),u=s(n(l),2),o=s(y(u),2);g(o,{get title(){return e().title},children:(t,d)=>{var a=p(),i=n(a);h(i,()=>e().content),r(t,a)},$$slots:{default:!0}});var m=s(o,4);g(m,{get title(){return e().title},detailsClass:"color-neutral",children:(t,d)=>{var a=p(),i=n(a);h(i,()=>e().content),r(t,a)},$$slots:{default:!0}});var v=s(m,4);g(v,{get title(){return e().title},detailsClass:"color-neutral border-neutral",summaryClass:"",summaryWrapperClass:"background-mt-white",children:(t,d)=>{var a=p(),i=n(a);h(i,()=>e().content),r(t,a)},$$slots:{default:!0}}),r(c,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<h1 class="mt-h1">Oppsummering og detaljer</h1>
<main class="mt-main container layout-flex-col">
  <h2 class="mt-h2 m-t-s">Default</h2>
  <SummaryDetail title={args.title}>
    {@html args.content}
  </SummaryDetail>
  <h2 class="mt-h2 m-t-s">With color-neutral</h2>
  <SummaryDetail title={args.title} detailsClass="color-neutral">
    {@html args.content}
  </SummaryDetail>
  <h2 class="mt-h2 m-t-s">With color-neutral border-neutral</h2>
  <SummaryDetail
    title={args.title}
    detailsClass="color-neutral border-neutral"
    summaryClass=""
    summaryWrapperClass="background-mt-white">
    {@html args.content}
  </SummaryDetail>
</main>`}}});var D=s(j,2);$(D,{name:"Med linje på venstre side",children:(c,e=_)=>{var l=R(),u=s(n(l),2),o=y(u);g(o,{get title(){return e().title},detailsClass:"with-border",children:(m,v)=>{var t=p(),d=n(t);h(d,()=>e().content),r(m,t)},$$slots:{default:!0}}),r(c,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<p>Oppsummering og detaljer med linje på venstre side</p>
<main class="mt-main container layout-flex-col">
  <SummaryDetail title={args.title} detailsClass="with-border">
    {@html args.content}
  </SummaryDetail>
</main>`}}});var M=s(D,2);$(M,{name:"Med ikon",children:(c,e=_)=>{var l=T(),u=s(n(l),2),o=y(u);g(o,{get title(){return e().title},detailsClass:"with-icon",children:(m,v)=>{var t=p(),d=n(t);h(d,()=>e().content),r(m,t)},$$slots:{default:!0}}),r(c,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<p>Oppsummering og detaljer med ikon</p>
<main class="mt-main container layout-flex-col">
  <SummaryDetail title={args.title} detailsClass="with-icon">
    {@html args.content}
  </SummaryDetail>
</main>`}}});var P=s(M,2);$(P,{name:"Med fet skrift",children:(c,e=_)=>{var l=z(),u=s(n(l),2),o=y(u);g(o,{get title(){return e().title},detailsClass:"color-neutral",children:(t,d)=>{var a=p(),i=n(a);h(i,()=>e().content),r(t,a)},$$slots:{default:!0}});var m=s(o,6),v=I(()=>`<h2 class='mt-h2'>${e().title}</h2>`);g(m,{get title(){return F(v)},detailsClass:"color-neutral",summaryClass:"adjusted-heading",children:(t,d)=>{var a=p(),i=n(a);h(i,()=>e().content),r(t,a)},$$slots:{default:!0}}),r(c,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<p>Oppsummering og detaljer neutral</p>
<main class="mt-main container layout-flex-col">
  <SummaryDetail title={args.title} detailsClass="color-neutral">
    {@html args.content}
  </SummaryDetail>
  <hr />
  <h2 class="mt-h2">Med heading-tag i oppsummeringen</h2>
  <SummaryDetail
    title={\`<h2 class='mt-h2'>\${args.title}</h2>\`}
    detailsClass="color-neutral"
    summaryClass="adjusted-heading">
    {@html args.content}
  </SummaryDetail>
</main>`}}}),r(x,C),W()}b.__docgen={version:3,name:"SummaryDetail.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=E(b,H),ne=["Normal","MedLinjePåVenstreSide","MedIkon","MedFetSkrift"],le=k.Normal,se=k.MedLinjePåVenstreSide,oe=k.MedIkon,ie=k.MedFetSkrift;export{ie as MedFetSkrift,oe as MedIkon,se as MedLinjePåVenstreSide,le as Normal,ne as __namedExportsOrder,H as default};
