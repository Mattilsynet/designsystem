import{a as _,t as y,p as w}from"./props-C0tvRuaH.js";import{p as j,f as A,a as H,g as d,d as M,s as l,b as K,c as n,h as V}from"./runtime-h0AMGDom.js";import{a as G}from"./actions-EVnswImp.js";import{d as z,c as L}from"./create-runtime-stories-BSZiRmpa.js";import{R as p}from"./RadioGroup-C8MY7J3a.js";import{w as N}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./input-Bhn6W10B.js";import"./InputErrorMessage-Dd923iph.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const u="radiobuttons",S=[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}];let h=K("2");const g=[{text:"Ja",value:"1"},{text:"Nei",value:"2"}],{Story:q,meta:P}=z({title:"Components/Form/RadioButtons",args:{label:"Kan vi kontakte deg?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",buttonRadio:{label:"Reiser du selv med dyret?",helpText:"Hjelpetekst",errorMessage:"Fyll inn dette feltet.",name:"travelWithAnimal",textOptional:"Valgfritt"},disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}});var Q=y('<div><h1 class="mt-h1">Radioknapper</h1> <h2 class="mt-h2">Theme - radio</h2> <form class="mt-form form-layout"><!></form> <h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - button</h2> <form action="" class="mt-form form-layout"><!></form></div>'),U=y('<div><h2 class="mt-h2">Theme - radio</h2> <form class="mt-form form-layout"><!></form> <h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - button</h2> <form class="mt-form form-layout"><!></form></div>'),X=y("<!> <!>",1);function B(E,W){j(W,!0);var k=X(),O=A(k);q(O,{name:"Normal",children:(f,e)=>{let b=()=>e==null?void 0:e().label,a=()=>e==null?void 0:e().helpText,v=()=>e==null?void 0:e().disableCss,o=()=>e==null?void 0:e().buttonRadio;var t=Q(),r=l(n(t),4),i=n(r);p(i,{options:S,name:u,get helpText(){return a()},get label(){return b()},textOptional:"Valgfritt",theme:"radio",isRequired:!0});var c=l(r,4),x=n(c);p(x,{options:g,get name(){return o().name},get helpText(){return a()},get label(){return o().label},get textOptional(){return o().textOptional},theme:"button",get value(){return d(h)},set value(s){M(h,w(s))}}),G(t,(s,R)=>{var m;return(m=N)==null?void 0:m(s,R)},v),_(f,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Radioknapper</h1>
  <h2 class="mt-h2">Theme - radio</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      {options}
      {name}
      {helpText}
      {label}
      textOptional="Valgfritt"
      theme="radio"
      isRequired />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form action="" class="mt-form form-layout">
    <RadioGroup
      options={buttonOptions}
      bind:value={buttonRadioValue}
      name={buttonRadio.name}
      {helpText}
      label={buttonRadio.label}
      textOptional={buttonRadio.textOptional}
      theme="button" />
  </form>
</div>`}}});var F=l(O,2);q(F,{name:"Radio with error",children:(f,e)=>{let b=()=>e==null?void 0:e().label,a=()=>e==null?void 0:e().helpText,v=()=>e==null?void 0:e().disableCss,o=()=>e==null?void 0:e().errorMessage,t=()=>e==null?void 0:e().buttonRadio;var r=U(),i=l(n(r),2),c=n(i),x=V(()=>({key:u,message:o()}));p(c,{options:S,name:u,get helpText(){return a()},get label(){return b()},get error(){return d(x)},textOptional:"valgfritt"});var s=l(i,4),R=n(s),m=V(()=>({key:u,message:o()}));p(R,{options:g,get name(){return t().name},get helpText(){return a()},get label(){return t().label},get error(){return d(m)},get textOptional(){return t().textOptional},theme:"button",get value(){return d(h)},set value(T){M(h,w(T))}}),G(r,(T,J)=>{var C;return(C=N)==null?void 0:C(T,J)},v),_(f,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h2 class="mt-h2">Theme - radio</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      {options}
      {name}
      {helpText}
      {label}
      error={{ key: name, message: errorMessage }}
      textOptional="valgfritt" />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      options={buttonOptions}
      bind:value={buttonRadioValue}
      name={buttonRadio.name}
      {helpText}
      label={buttonRadio.label}
      error={{ key: name, message: errorMessage }}
      textOptional={buttonRadio.textOptional}
      theme="button" />
  </form>
</div>`}}}),_(E,k),H()}B.__docgen={version:3,name:"RadioButtons.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D=L(B,P),fe=["Normal","RadioWithError"],be=D.Normal,ve=D.RadioWithError;export{be as Normal,ve as RadioWithError,fe as __namedExportsOrder,P as default};
