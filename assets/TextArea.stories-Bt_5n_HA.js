import{a as x,t as f,p as F}from"./props-C0tvRuaH.js";import{p as I,f as N,a as R,g as C,d as W,s as y,b as g,c as m,h as j}from"./runtime-h0AMGDom.js";import{a as L}from"./actions-EVnswImp.js";import{d as q,c as B}from"./create-runtime-stories-BSZiRmpa.js";import{T as u}from"./TextArea-sJP_eN9s.js";import{w as M}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./input-Bhn6W10B.js";import"./this-B-g0KYFp.js";import"./InputErrorMessage-Dd923iph.js";import"./count-characters-Cnk4sLIe.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./Label-D8X8gfhz.js";let _=g("start text");const{Story:k,meta:H}=q({title:"Components/Form/TextArea",args:{label:"Hva gjelder bekymringen?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",disableCss:!1,countCharactersLeftLabel:"karakterer igjen",countCharactersTooManyLabel:"karakterer for mange",tooManyCharactersErrorText:"For lang tekst"},argTypes:{label:{control:"text"},helpText:{control:"text"},countCharactersLeft:{control:"text"},countCharactersTooManyLabel:{control:"text"},tooManyCharactersErrorText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}});var z=f('<div><form class="mt-form form-layout"><!> <!></form></div>'),G=f('<div><form class="mt-form form-layout"><!></form></div>'),J=f("<!> <!>",1);function w(E,O){I(O,!0);var v=J(),T=N(v);k(T,{name:"TextArea normal",children:(c,e)=>{let a=()=>e==null?void 0:e().label,n=()=>e==null?void 0:e().helpText,p=()=>e==null?void 0:e().disableCss,l=()=>e==null?void 0:e().countCharactersLeftLabel,t=()=>e==null?void 0:e().countCharactersTooManyLabel,s=()=>e==null?void 0:e().tooManyCharactersErrorText;var o=z(),d=m(o),i=m(d);u(i,{name:"email",get label(){return a()},get helpText(){return n()},get countCharactersLeftLabel(){return l()},get countCharactersTooManyLabel(){return t()},get tooManyCharactersErrorText(){return s()},maxlength:100,textOptional:"Valgfritt",inputmode:"text",rows:3,cols:5,get value(){return C(_)},set value(r){W(_,F(r))}});var h=y(i,2);u(h,{name:"email2",get label(){return a()},get helpText(){return n()},get countCharactersLeftLabel(){return l()},get countCharactersTooManyLabel(){return t()},get tooManyCharactersErrorText(){return s()},textOptional:"Valgfritt",inputmode:"text",maxlength:100,isRequired:!0,placeholder:"Skriv inn tekst her",rows:3,cols:5}),L(o,(r,D)=>{var b;return(b=M)==null?void 0:b(r,D)},p),x(c,o)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      {countCharactersTooManyLabel}
      {tooManyCharactersErrorText}
      maxlength={100}
      textOptional="Valgfritt"
      inputmode="text"
      rows={3}
      cols={5}
      bind:value />

    <TextArea
      name="email2"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      {countCharactersTooManyLabel}
      {tooManyCharactersErrorText}
      textOptional="Valgfritt"
      inputmode="text"
      maxlength={100}
      isRequired={true}
      placeholder="Skriv inn tekst her"
      rows={3}
      cols={5} />
  </form>
</div>`}}});var S=y(T,2);k(S,{name:"TextArea with error",children:(c,e)=>{let a=()=>e==null?void 0:e().label,n=()=>e==null?void 0:e().helpText,p=()=>e==null?void 0:e().errorMessage,l=()=>e==null?void 0:e().disableCss;var t=G(),s=m(t),o=m(s),d=j(()=>({key:"email",message:p()}));u(o,{name:"email",get label(){return a()},get helpText(){return n()},get error(){return C(d)},textOptional:"(valgfritt felt)",inputmode:"text",maxlength:100,rows:3,cols:5}),L(t,(i,h)=>{var r;return(r=M)==null?void 0:r(i,h)},l),x(c,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      error={{ key: 'email', message: errorMessage }}
      textOptional="(valgfritt felt)"
      inputmode="text"
      maxlength={100}
      rows={3}
      cols={5} />
  </form>
</div>`}}}),x(E,v),R()}w.__docgen={version:3,name:"TextArea.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const A=B(w,H),pe=["TextAreaNormal","TextAreaWithError"],de=A.TextAreaNormal,he=A.TextAreaWithError;export{de as TextAreaNormal,he as TextAreaWithError,pe as __namedExportsOrder,H as default};
