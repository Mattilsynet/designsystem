import{a as O,t as y}from"./props-C0tvRuaH.js";import{p as K,f as N,a as A,g as t,s as m,c as x,e as B}from"./runtime-h0AMGDom.js";import{e as k,i as w}from"./each-DBQXtrgh.js";import{a as z}from"./actions-EVnswImp.js";import{i as G}from"./lifecycle-DurhAeVF.js";import{d as J,c as P}from"./create-runtime-stories-BSZiRmpa.js";import{T as b}from"./TextInput-BqCUlEdm.js";import{w as M}from"./utils-CMlWd0Pf.js";import{T as E}from"./TextInputHorizontal-DLDnmpzi.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./input-Bhn6W10B.js";import"./InputErrorMessage-Dd923iph.js";import"./count-characters-Cnk4sLIe.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./Label-D8X8gfhz.js";import"./index-Cvmj00a4.js";const{Story:H,meta:Q}=J({title:"Components/Form/Input",args:{label:"Når skjedde det?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",textOptional:"Valgfritt",isRequired:!1,horizontal:[{label:"Hund, antall",textOptional:"Valgfritt",helpText:"Hjelpetekst",isRequired:!0,maxLength:2},{label:"Katt, antall",textOptional:"Valgfritt",helpText:"Hjelpetekst",isRequired:!1}],countCharactersLeftLabel:"karakterer igjen",tooManyCharactersErrorText:"For lang tekst",disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},isRequired:{control:"boolean"},textOptional:{control:"text"},errorMessage:{control:"text"},tooManyCharactersErrorText:{control:"text"},horizontal:{control:"object"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"}}});var U=y('<div><form class="mt-form form-layout"><!> <!> <!> <h2 class="mt-h2">Horisontal layout</h2> <div class="collapsable-input-list-grid svelte-8eupcf"></div></form></div>'),X=y('<div><form class="mt-form form-layout"><!> <div class="collapsable-input-list-grid svelte-8eupcf"></div></form></div>'),Y=y("<!> <!>",1);function S(F,D){K(D,!1),G();var I=Y(),q=N(I);H(q,{name:"Input",children:(v,e)=>{let a=()=>e==null?void 0:e().label,i=()=>e==null?void 0:e().helpText,T=()=>e==null?void 0:e().disableCss,s=()=>e==null?void 0:e().textOptional,p=()=>e==null?void 0:e().isRequired,C=()=>e==null?void 0:e().tooManyCharactersErrorText,L=()=>e==null?void 0:e().horizontal,l=()=>e==null?void 0:e().countCharactersLeftLabel;var u=U(),f=x(u),c=x(f);b(c,{name:"inputfield",get label(){return a()},get helpText(){return i()},get textOptional(){return s()},inputmode:"text",get isRequired(){return p()},get countCharactersLeftLabel(){return l()},placeholder:"",autocomplete:"off"});var h=m(c,2);b(h,{name:"inputfield2",get label(){return a()},get helpText(){return i()},get textOptional(){return s()},inputmode:"text",get isRequired(){return p()},get countCharactersLeftLabel(){return l()},placeholder:"Skriv noe",autocomplete:"off"});var _=m(h,2);b(_,{name:"inputfield3",get label(){return a()},get helpText(){return i()},get textOptional(){return s()},inputmode:"text",get isRequired(){return p()},get countCharactersLeftLabel(){return l()},placeholder:"",autocomplete:"off",get tooManyCharactersErrorText(){return C()},maxlength:30});var d=m(_,4);k(d,5,L,w,(n,r)=>{E(n,{name:"inputfield4",get label(){return t(r).label},get textOptional(){return t(r).textOptional},get helpText(){return t(r).helpText},inputmode:"text",get isRequired(){return t(r).isRequired},get maxlength(){return t(r).maxLength},placeholder:"enter text",autocomplete:"off",hasTransition:!0,inputClass:"form-field--small form-field--small-width"})}),z(u,(n,r)=>{var R;return(R=M)==null?void 0:R(n,r)},T),O(v,u)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      {textOptional}
      inputmode="text"
      {isRequired}
      {countCharactersLeftLabel}
      placeholder=""
      autocomplete="off" />

    <TextInput
      name="inputfield2"
      {label}
      {helpText}
      {textOptional}
      inputmode="text"
      {isRequired}
      {countCharactersLeftLabel}
      placeholder="Skriv noe"
      autocomplete="off" />

    <TextInput
      name="inputfield3"
      {label}
      {helpText}
      {textOptional}
      inputmode="text"
      {isRequired}
      {countCharactersLeftLabel}
      placeholder=""
      autocomplete="off"
      {tooManyCharactersErrorText}
      maxlength={30} />

    <h2 class="mt-h2">Horisontal layout</h2>
    <div class="collapsable-input-list-grid">
      {#each horizontal as horizontal}
        <TextInputHorizontal
          name="inputfield4"
          label={horizontal.label}
          textOptional={horizontal.textOptional}
          helpText={horizontal.helpText}
          inputmode="text"
          isRequired={horizontal.isRequired}
          maxlength={horizontal.maxLength}
          placeholder="enter text"
          autocomplete="off"
          hasTransition={true}
          inputClass="form-field--small form-field--small-width" />
      {/each}
    </div>
  </form>
</div>`}}});var V=m(q,2);H(V,{name:"Input with error",children:(v,e)=>{let a=()=>e==null?void 0:e().label,i=()=>e==null?void 0:e().helpText,T=()=>e==null?void 0:e().errorMessage,s=()=>e==null?void 0:e().disableCss,p=()=>e==null?void 0:e().countCharactersLeftLabel,C=()=>e==null?void 0:e().textOptional,L=()=>e==null?void 0:e().horizontal;var l=X(),u=x(l),f=x(u),c=B(()=>({key:"inputfield",message:T()}));b(f,{name:"inputfield",get label(){return a()},get helpText(){return i()},get countCharactersLeftLabel(){return p()},get error(){return t(c)},get textOptional(){return C()},inputmode:"text",maxlength:10,placeholder:"",autocomplete:"off"});var h=m(f,2);k(h,5,L,w,(d,o,n)=>{E(d,{name:`inputfield${n??""}`,get label(){return t(o).label},get textOptional(){return t(o).textOptional},get helpText(){return t(o).helpText},inputmode:"text",error:{key:"inputfield",message:"Feltet er påkrevd"},get isRequired(){return t(o).isRequired},placeholder:"",autocomplete:"off",inputClass:"form-field--small form-field--small-width"})}),z(l,(d,o)=>{var n;return(n=M)==null?void 0:n(d,o)},s),O(v,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      error={{ key: 'inputfield', message: errorMessage }}
      {textOptional}
      inputmode="text"
      maxlength={10}
      placeholder=""
      autocomplete="off" />
    <div class="collapsable-input-list-grid">
      {#each horizontal as horizontal, index}
        <TextInputHorizontal
          name="inputfield{index}"
          label={horizontal.label}
          textOptional={horizontal.textOptional}
          helpText={horizontal.helpText}
          inputmode="text"
          error={{ key: 'inputfield', message: 'Feltet er påkrevd' }}
          isRequired={horizontal.isRequired}
          placeholder=""
          autocomplete="off"
          inputClass="form-field--small form-field--small-width" />
      {/each}
    </div>
  </form>
</div>`}}}),O(F,I),A()}S.__docgen={version:3,name:"Input.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=P(S,Q),Te=["Input","InputWithError"],Ce=j.Input,Le=j.InputWithError;export{Ce as Input,Le as InputWithError,Te as __namedExportsOrder,Q as default};
