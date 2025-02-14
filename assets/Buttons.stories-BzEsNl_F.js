import{a as l,t as S,s as b,w as _}from"./props-C0tvRuaH.js";import{p as K,f as U,a as E,t as G,s,c as o}from"./runtime-h0AMGDom.js";import{a as C}from"./actions-EVnswImp.js";import{i as O}from"./lifecycle-DurhAeVF.js";import{d as T,c as z}from"./create-runtime-stories-BSZiRmpa.js";import{B as k}from"./ButtonSpinner-Be5seiJn.js";import{w as L}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";const{Story:w,meta:Q}=T({title:"Components/Buttons",args:{primary:"Gå videre",primaryLong:"Send inn til Mattilsynet",secondary:"Avbryt",inProgress:!1,uploadRequired:!1,disabled:!1,disableJs:!1,disableCss:!1},argTypes:{primary:{control:"text"},inProgress:{control:"boolean"},disabled:{control:"boolean"},disableJs:{control:"boolean"},disableCss:{control:"boolean"},uploadRequired:{control:"boolean"},removeFile:{action:"removeFile"}}});var V=S('<div><h1 class="mt-h1">Knapper</h1> <p class="description svelte-63naed">Hovedknapp - stor</p> <button class="mt-button mt-button--primary svelte-63naed"> </button> <button class="mt-button mt-button--primary svelte-63naed"> </button> <button class="mt-button mt-button--primary svelte-63naed" style="width: 15rem"> </button> <p class="description svelte-63naed">Sekundær - stor</p> <button class="mt-button mt-button--secondary svelte-63naed"> </button> <p class="description svelte-63naed">Lenkeknapp</p> <button class="mt-button mt-button--link svelte-63naed">...</button> <p class="description svelte-63naed">Flat - stor</p> <button class="mt-button mt-button--flat no-icon svelte-63naed">Uten ikon</button> <button class="mt-button mt-button--flat no-icon svelte-63naed">Avbryt</button> <p class="description svelte-63naed">Flat med icon - stor</p> <button class="mt-button mt-button--flat closable svelte-63naed">Med ikon</button> <p class="description svelte-63naed">Flat med icon på venstre side</p> <button class="mt-button mt-button--flat icon--search-before svelte-63naed">Søk</button> <p class="description svelte-63naed">På blå - stor</p> <div class="background-mt-blue p-xxs"><button type="button" class="mt-button mt-button--on-primary svelte-63naed"> </button></div></div>'),W=S('<div><h1 class="mt-h1">Loading</h1> <p class="description svelte-63naed">Hovedknapp</p> <div class="layout-flex"><!> <!></div> <p class="description svelte-63naed">Sekundær</p> <!></div>'),X=S("<!> <!>",1);function B(A,I){K(I,!1),O();var h=X(),P=U(h);w(P,{name:"Normal",children:(v,t)=>{let u=()=>t==null?void 0:t().primary,i=()=>t==null?void 0:t().primaryLong,d=()=>t==null?void 0:t().disableCss,r=()=>t==null?void 0:t().disabled,c=()=>t==null?void 0:t().secondary;var p=V(),m=s(o(p),4),e=o(m),a=s(m,2),n=o(a),f=s(a,2),g=o(f),y=s(f,4),H=o(y),M=s(y,22),D=o(M),R=o(D);C(p,(q,J)=>{var x;return(x=L)==null?void 0:x(q,J)},d),G(()=>{m.disabled=r(),b(e,u()),a.disabled=r(),b(n,i()),f.disabled=r(),b(g,i()),y.disabled=r(),b(H,c()),b(R,u())}),l(v,p)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Knapper</h1>
  <p class="description">Hovedknapp - stor</p>
  <button class="mt-button mt-button--primary" {disabled}>{primary}</button>
  <button class="mt-button mt-button--primary" {disabled}>{primaryLong}</button>
  <button class="mt-button mt-button--primary" {disabled} style="width: 15rem"
    >{primaryLong}</button>

  <p class="description">Sekundær - stor</p>
  <button class="mt-button mt-button--secondary" {disabled}>{secondary}</button>

  <p class="description">Lenkeknapp</p>
  <button class="mt-button mt-button--link"> ...</button>

  <p class="description">Flat - stor</p>
  <button class="mt-button mt-button--flat no-icon">Uten ikon</button>
  <button class="mt-button mt-button--flat no-icon">Avbryt</button>

  <p class="description">Flat med icon - stor</p>
  <button class="mt-button mt-button--flat closable">Med ikon</button>

  <p class="description">Flat med icon på venstre side</p>
  <button class="mt-button mt-button--flat icon--search-before">Søk</button>

  <p class="description">På blå - stor</p>
  <div class="background-mt-blue p-xxs">
    <button type="button" class="mt-button mt-button--on-primary">{primary}</button>
  </div>
</div>`}}});var j=s(P,2);w(j,{name:"Loading",children:(v,t)=>{let u=()=>t==null?void 0:t().disableCss,i=()=>t==null?void 0:t().inProgress;var d=W(),r=s(o(d),4),c=o(r);k(c,{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--primary",spinnerPlacement:"start",get inProgress(){return i()},children:(e,a)=>{var n=_("Spinner placement start");l(e,n)},$$slots:{default:!0}});var p=s(c,2);k(p,{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--primary",get inProgress(){return i()},spinnerPlacement:"end",children:(e,a)=>{var n=_("Spinner placement end");l(e,n)},$$slots:{default:!0}});var m=s(r,4);k(m,{type:"submit",formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",get inProgress(){return i()},spinnerPlacement:"end",children:(e,a)=>{var n=_("Send in skjema");l(e,n)},$$slots:{default:!0}}),C(d,(e,a)=>{var n;return(n=L)==null?void 0:n(e,a)},u),l(v,d)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Loading</h1>
  <p class="description">Hovedknapp</p>
  <div class="layout-flex">
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="mt-button--primary"
      spinnerPlacement="start"
      {inProgress}>
      Spinner placement start
    </ButtonSpinner>
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="mt-button--primary"
      {inProgress}
      spinnerPlacement="end">
      Spinner placement end
    </ButtonSpinner>
  </div>

  <p class="description">Sekundær</p>
  <ButtonSpinner
    type="submit"
    formInProgressAriaLabel="Sender inn skjema, venter på svar."
    btnClassNames="mt-button--secondary"
    {inProgress}
    spinnerPlacement="end">
    Send in skjema
  </ButtonSpinner>
</div>`}}}),l(A,h),E()}B.__docgen={version:3,name:"Buttons.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N=z(B,Q),dt=["Normal","Loading"],pt=N.Normal,mt=N.Loading;export{mt as Loading,pt as Normal,dt as __namedExportsOrder,Q as default};
