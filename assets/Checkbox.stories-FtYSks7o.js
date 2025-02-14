import{a as O,t as q}from"./props-C0tvRuaH.js";import{p as K,f as z,a as G,s as h,g as w,c as t,e as M}from"./runtime-h0AMGDom.js";import{a as N}from"./actions-EVnswImp.js";import{i as H}from"./lifecycle-DurhAeVF.js";import{d as L,c as P}from"./create-runtime-stories-BSZiRmpa.js";import{C as x}from"./Checkbox-CtYh6S0x.js";import{w as S}from"./utils-CMlWd0Pf.js";import{a as Q}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./InputErrorMessage-Dd923iph.js";import"./utils-UxKBq1MU.js";import"./v4-CQkTLCs1.js";const o="checkbox";let D=["2"];const U=Q("checked");function X({checked:f,value:v}){U("checked:",f,"value:",v)}const{Story:V,meta:Y}=L({title:"Components/Form/Checkbox",args:{label:"Kan vi kontakte deg?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",hiddenErrorText:"Feilmelding",isRequired:!1,textOptional:"Valgfritt",options:[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}],buttonOptions:[{text:"Ja",value:"1"},{text:"Nei",value:"2"}],disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},hiddenErrorText:{control:"text"},isRequired:{control:"boolean"},textOptional:{control:"text"},options:{control:"object"},buttonOptions:{control:"object"},disableCss:{control:"boolean"}}});var Z=q('<div><h1 class="mt-h1">Checkbox</h1> <h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - checkbox</h2> <form class="mt-form"><!></form> <h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - button</h2> <form action="" class="mt-form form-layout"><!></form></div>'),g=q('<div><h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - checkbox</h2> <form class="mt-form"><!></form> <h2 id="theme" class="mt-h2 svelte-1oh2qt4">Theme - button</h2> <form class="mt-form"><!></form></div>'),$=q("<!> <!>",1);function F(f,v){K(v,!1),H();var R=$(),y=z(R);V(y,{name:"Normal",children:(k,e)=>{let n=()=>e==null?void 0:e().label,s=()=>e==null?void 0:e().helpText,C=()=>e==null?void 0:e().disableCss,a=()=>e==null?void 0:e().options,d=()=>e==null?void 0:e().buttonOptions,c=()=>e==null?void 0:e().isRequired,p=()=>e==null?void 0:e().textOptional;var r=Z(),l=h(t(r),4),i=t(l);x(i,{name:o,get label(){return n()},get helpText(){return s()},get options(){return a()},get isRequired(){return c()},get textOptional(){return p()},onChange:X});var u=h(l,4),T=t(u);x(T,{name:o,get label(){return n()},get isRequired(){return c()},get textOptional(){return p()},get options(){return d()},get helpText(){return s()},theme:"button",get value(){return D},set value(m){D=m},$$legacy:!0}),N(r,(m,_)=>{var b;return(b=S)==null?void 0:b(m,_)},C),O(k,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Checkbox</h1>
  <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
  <form class="mt-form">
    <Checkbox {name} {label} {helpText} {options} {isRequired} {textOptional} {onChange} />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form action="" class="mt-form form-layout">
    <Checkbox
      {name}
      {label}
      {isRequired}
      {textOptional}
      options={buttonOptions}
      {helpText}
      theme="button"
      bind:value={buttonCheckboxValue} />
  </form>
</div>`}}});var W=h(y,2);V(W,{name:"Checkbox with error",children:(k,e)=>{let n=()=>e==null?void 0:e().label,s=()=>e==null?void 0:e().helpText,C=()=>e==null?void 0:e().disableCss,a=()=>e==null?void 0:e().errorMessage,d=()=>e==null?void 0:e().hiddenErrorText,c=()=>e==null?void 0:e().options,p=()=>e==null?void 0:e().buttonOptions,r=()=>e==null?void 0:e().isRequired,l=()=>e==null?void 0:e().textOptional;var i=g(),u=h(t(i),2),T=t(u),m=M(()=>({key:o,message:a()}));x(T,{name:o,get label(){return n()},get helpText(){return s()},get options(){return c()},get isRequired(){return r()},get hiddenErrorText(){return d()},get textOptional(){return l()},get error(){return w(m)}});var _=h(u,4),b=t(_),J=M(()=>({key:o,message:a()}));x(b,{name:o,get label(){return n()},get helpText(){return s()},isRequired:!0,get hiddenErrorText(){return d()},get textOptional(){return l()},get options(){return p()},get error(){return w(J)},theme:"button",class:"testClass",legendClass:"legendClass"}),N(i,(A,B)=>{var E;return(E=S)==null?void 0:E(A,B)},C),O(k,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
  <form class="mt-form">
    <Checkbox
      {name}
      {label}
      {helpText}
      {options}
      {isRequired}
      {hiddenErrorText}
      {textOptional}
      error={{ key: name, message: errorMessage }} />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form class="mt-form">
    <Checkbox
      {name}
      {label}
      {helpText}
      isRequired
      {hiddenErrorText}
      {textOptional}
      options={buttonOptions}
      error={{ key: name, message: errorMessage }}
      theme="button"
      class="testClass"
      legendClass="legendClass" />
  </form>
</div>`}}}),O(f,R),G()}F.__docgen={version:3,name:"Checkbox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=P(F,Y),ve=["Normal","CheckboxWithError"],ke=I.Normal,Ce=I.CheckboxWithError;export{Ce as CheckboxWithError,ke as Normal,ve as __namedExportsOrder,Y as default};
