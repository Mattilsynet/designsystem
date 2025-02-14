import{p as l,e as g,a as J,t as O}from"./props-C0tvRuaH.js";import{b as x,g as e,p as V,a as w,d as s,n as C,s as v,c as f,h as H}from"./runtime-h0AMGDom.js";import{a as N}from"./actions-EVnswImp.js";import{d as R,c as k}from"./create-runtime-stories-BSZiRmpa.js";import{E as h}from"./ExpandableInputList-BYx1A8H7.js";import{w as q}from"./utils-CMlWd0Pf.js";import{a as G}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./universal-Cs0PP9_m.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./TextInputHorizontal-DLDnmpzi.js";import"./index-Cvmj00a4.js";import"./input-Bhn6W10B.js";import"./InputErrorMessage-Dd923iph.js";import"./Label-D8X8gfhz.js";import"./v4-CQkTLCs1.js";let r=x(l([{label:"Hund, antall:",name:"dogs",isRequired:!1,textOptional:"",inputmode:"numeric",error:void 0},{label:"Katt, antall:",name:"cats",isRequired:!1,inputmode:"numeric",textOptional:"",error:void 0},{label:"Ilder, antall:",name:"ilders",isRequired:!1,inputmode:"numeric",textOptional:"",error:void 0},{label:"Kanin, antall:",name:"rabit",isRequired:!1,inputmode:"numeric",textOptional:"",error:void 0},{label:"Gnager, antall:",name:"rodent",isRequired:!1,inputmode:"numeric",textOptional:"",error:void 0},{label:"Fugl, antall:",name:"birds",isRequired:!1,inputmode:"numeric",textOptional:"",error:void 0}])),d="whatCountriesHaveYouBeenTo",n=x(l({})),o=x(void 0);const U=G("submitValues");function T(m){m.preventDefault(),s(r,l(e(r).map(t=>e(n)[t.name]===void 0||e(n)[t.name]===""?t:isNaN(Number.parseInt(e(n)[t.name]))?{...t,error:{key:t.name,message:"Vennligst benytt tall"}}:{...t,error:void 0})));const u=e(r).some(t=>t.error);e(r).some(t=>e(n)[t.name]!==void 0&&e(n)[t.name]!=="")?u?s(o,l([{key:d,message:"Vennligs fyll inn tall i riktig format"}])):(s(o,void 0),s(r,l(e(r)))):s(o,l([{key:d,message:"Vennligs fyll inn antall dyr"}])),U(e(n))}const{Story:D,meta:$}=R({title:"Components/Form/Utvidbar liste med inputs",args:{fieldSetLabel:"Hvilke dyr reiser du med?",helpText:"Legg til de dyrene du reiser med.",expandableAriaLabel:"{0}, viser {1} av {2}",expandableText:"Vis flere",collapsableText:"Vis færre",inputList:e(r),disableJs:!1,disableCss:!1},argTypes:{fieldSetLabel:{control:"text"},helpText:{control:"text"},expandableAriaLabel:{control:"text"},expandableText:{control:"text"},collapsableText:{control:"text"},inputList:{control:"object"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}});var F=O('<main class="mt-main"><h1 class="mt-h1">Utvidbar liste med inputs</h1> <form class="mt-form"><!> <button type="submit" class="mt-button mt-button--primary">Gå videre</button></form> <h1 class="mt-h1">Utvidbar liste med inputs uten JS</h1> <form class="mt-form"><!> <button type="submit" class="mt-button mt-button--primary">Gå videre</button></form></main>');function S(m,u){V(u,!0),D(m,{name:"Normal",children:(t,a=C)=>{var p=F(),b=v(f(p),2),I=f(b),E=H(()=>!a().disableJs);h(I,{get inputList(){return a().inputList},fieldSetId:d,get fieldSetLabel(){return a().fieldSetLabel},get fieldSetHelpText(){return a().helpText},get fieldSetError(){return e(o)},get expandableText(){return a().expandableText},get collapsableText(){return a().collapsableText},get expandableAriaLabel(){return a().expandableAriaLabel},get loadJs(){return e(E)},get values(){return e(n)},set values(i){s(n,l(i))}});var c=v(b,4),_=f(c);h(_,{get inputList(){return a().inputList},fieldSetId:d,get fieldSetLabel(){return a().fieldSetLabel},get fieldSetHelpText(){return a().helpText},get fieldSetError(){return e(o)},get expandableText(){return a().expandableText},get collapsableText(){return a().collapsableText},get expandableAriaLabel(){return a().expandableAriaLabel},loadJs:!1,numberOfInputOutside:4,get values(){return e(n)},set values(i){s(n,l(i))}}),N(p,(i,A)=>{var L;return(L=q)==null?void 0:L(i,A)},()=>a().disableCss),g("submit",b,T),g("submit",c,T),J(t,p)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<main class="mt-main" use:wrapInShadowDom={args.disableCss}>
  <h1 class="mt-h1">Utvidbar liste med inputs</h1>
  <form class="mt-form" onsubmit={handleSubmit}>
    <ExpandableInputList
      inputList={args.inputList}
      {fieldSetId}
      fieldSetLabel={args.fieldSetLabel}
      fieldSetHelpText={args.helpText}
      fieldSetError={error}
      expandableText={args.expandableText}
      collapsableText={args.collapsableText}
      expandableAriaLabel={args.expandableAriaLabel}
      bind:values
      loadJs={!args.disableJs} />
    <button type="submit" class="mt-button mt-button--primary">Gå videre</button>
  </form>

  <h1 class="mt-h1">Utvidbar liste med inputs uten JS</h1>
  <form class="mt-form" onsubmit={handleSubmit}>
    <ExpandableInputList
      inputList={args.inputList}
      {fieldSetId}
      fieldSetLabel={args.fieldSetLabel}
      fieldSetHelpText={args.helpText}
      fieldSetError={error}
      expandableText={args.expandableText}
      collapsableText={args.collapsableText}
      expandableAriaLabel={args.expandableAriaLabel}
      bind:values
      loadJs={false}
      numberOfInputOutside={4} />
    <button type="submit" class="mt-button mt-button--primary">Gå videre</button>
  </form>
</main>`}}}),w()}S.__docgen={version:3,name:"ExpandableInputList.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const K=k(S,$),be=["Normal"],fe=K.Normal;export{fe as Normal,be as __namedExportsOrder,$ as default};
