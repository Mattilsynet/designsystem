import{a as c,t as h,s as f}from"./props-C0tvRuaH.js";import{p as R,f as j,a as q,t as z,s as n,c as a}from"./runtime-h0AMGDom.js";import{a as _}from"./actions-EVnswImp.js";import{i as A}from"./lifecycle-DurhAeVF.js";import{d as B,c as G}from"./create-runtime-stories-BSZiRmpa.js";import{w as F}from"./utils-CMlWd0Pf.js";import{E as C}from"./ErrorSummary-DU0MDTeC.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./index-BK-JItfK.js";const{Story:x,meta:H}=B({title:"Components/Form/Error Summary",args:{heading:"Feil oppstod",errors:[{key:"name",message:"Fyll inn navn"},{key:"phone",message:"Fyll inn telefonnummer"},{key:"email",message:"Fyll inn epost"}],disableCss:!1},argTypes:{heading:{control:"text"},disableCss:{control:"boolean"}}});var J=h('<div><!> <form class="mt-form form-layout"><label class="mt-label" for="name">Navn</label> <div id="name-hint" class="hint">Fyll ut navn</div> <span id="name-error" class="form-error"><span class="inclusively-hidden">Feilmelding:</span> </span> <input id="name" name="name" class="mt-input form-field" aria-describedby="name-hint name-error"> <label class="mt-label" for="phone">Telefon</label> <div id="phone-hint" class="hint">Fyll ut telefonnummer</div> <span id="phone-error" class="form-error"><span class="inclusively-hidden">Feilmelding:</span> </span> <input id="phone" name="phone" class="mt-input form-field" aria-describedby="phone-hint phone-error"> <label class="mt-label" for="email">E-post</label> <div id="email-hint" class="hint">Fyll ut e-post</div> <span id="email-error" class="form-error"><span class="inclusively-hidden">Feilmelding:</span> </span> <input id="email" name="email" class="mt-input form-field error" aria-invalid="true" aria-describedby="email-hint email-error"></form></div>'),K=h("<div><!></div>"),L=h("<!> <!>",1);function S(E,T){R(T,!1),A();var v=L(),u=j(v);x(u,{name:"Normal",children:(t,e)=>{let r=()=>e==null?void 0:e().errors,m=()=>e==null?void 0:e().heading,d=()=>e==null?void 0:e().disableCss;var s=J(),i=a(s);C(i,{get errors(){return r()},get heading(){return m()}});var p=n(i,2),l=n(a(p),4),o=n(a(l)),b=n(l,8),N=n(a(b)),O=n(b,8),D=n(a(O));_(s,(I,M)=>{var y;return(y=F)==null?void 0:y(I,M)},d),z(()=>{f(o,` ${r()[0].message??""}`),f(N,` ${r()[1].message??""}`),f(D,` ${r()[2].message??""}`)}),c(t,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <ErrorSummary {errors} {heading} />

  <form class="mt-form form-layout">
    <label class="mt-label" for="name"> Navn </label>
    <div id="name-hint" class="hint">Fyll ut navn</div>
    <span id="name-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      {errors[0].message}
    </span>
    <input
      id="name"
      name="name"
      class="mt-input form-field"
      aria-describedby="name-hint name-error" />

    <label class="mt-label" for="phone"> Telefon </label>
    <div id="phone-hint" class="hint">Fyll ut telefonnummer</div>
    <span id="phone-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      {errors[1].message}
    </span>
    <input
      id="phone"
      name="phone"
      class="mt-input form-field"
      aria-describedby="phone-hint phone-error" />

    <label class="mt-label" for="email"> E-post </label>
    <div id="email-hint" class="hint">Fyll ut e-post</div>
    <span id="email-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      {errors[2].message}
    </span>
    <input
      id="email"
      name="email"
      class="mt-input form-field error"
      aria-invalid="true"
      aria-describedby="email-hint email-error" />
  </form>
</div>`}}});var g=n(u,2);x(g,{name:"Text only",children:(t,e)=>{let r=()=>e==null?void 0:e().errors,m=()=>e==null?void 0:e().heading,d=()=>e==null?void 0:e().disableCss;var s=K(),i=a(s);C(i,{get errors(){return r()},get heading(){return m()},linkToFields:!1}),_(s,(p,l)=>{var o;return(o=F)==null?void 0:o(p,l)},d),c(t,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <ErrorSummary {errors} {heading} linkToFields={false} />
</div>`}}}),c(E,v),q()}S.__docgen={version:3,name:"ErrorSummary.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const w=G(S,H),le=["Normal","TextOnly"],oe=w.Normal,te=w.TextOnly;export{oe as Normal,te as TextOnly,le as __namedExportsOrder,H as default};
