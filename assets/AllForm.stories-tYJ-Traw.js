import{p as B,a as S,t as R}from"./props-C0tvRuaH.js";import{p as Q,f as U,a as X,s as o,g as f,c as p,h as k}from"./runtime-h0AMGDom.js";import{a as W}from"./actions-EVnswImp.js";import{d as Y,c as $}from"./create-runtime-stories-BSZiRmpa.js";import{T as V}from"./TextInput-BqCUlEdm.js";import{w as j}from"./utils-CMlWd0Pf.js";import{T as A}from"./TextArea-sJP_eN9s.js";import{R as F}from"./RadioGroup-C8MY7J3a.js";import{C as E}from"./Checkbox-CtYh6S0x.js";import{C as ee}from"./CheckboxWithSubSets-BVGWh863.js";import{A as te}from"./Address-iVfEmYsI.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./input-Bhn6W10B.js";import"./InputErrorMessage-Dd923iph.js";import"./count-characters-Cnk4sLIe.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./Label-D8X8gfhz.js";import"./this-B-g0KYFp.js";import"./each-DBQXtrgh.js";import"./index-Cvmj00a4.js";import"./Combobox-DEY3fsk3.js";const g="radiobuttons",O="checkboxes",re="checkboxesWithSubsets",M=[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}],D=[{text:"Is",value:"Is"},{text:"Pizza",value:"Pizza"}],oe={children:[{key:"dyr",displayName:"Dyr",docCount:49,children:[{key:"produksjonsdyr",displayName:"Produksjonsdyr asdf asdfklj jlkjsadflkf jlafdj kl lkjasdfaasdf",docCount:38,children:[]},{key:"dyresykdommer",displayName:"Dyresykdommer",docCount:2,children:[]},{key:"kjaeledyr",displayName:"Kjæledyr",docCount:1,children:[]}]},{key:"fisk-og-akvakultur",displayName:"Fisk og akvakultur",docCount:1,children:[{key:"fiskesykdommer",displayName:"Fiskesykdommer",docCount:1,children:[]}]},{key:"mat",displayName:"Mat",docCount:3,children:[{key:"import-av-mat",displayName:"Import av mat",docCount:1,children:[{key:"kommersiell-import",displayName:"Kommersiell import",docCount:1,children:[]}]}]},{key:"kosmetikk",displayName:"Kosmetikk",docCount:1,children:[]}]};let v=B({});const{Story:J,meta:ne}=Y({title:"Components/Form/All",args:{label:"Når skjedde det?",radioLabel:"Kan vi kontakte deg?",checkboxLabel:"Hva liker du?",checkboxWithSubsetsLegend:"Hvilkt tema er det du er interessert i?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",countCharactersLeftLabel:"karakterer igjen",address:{streetLabel:"Søk i gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,loadJs:!0},disableCss:!1},argTypes:{label:{control:"text"},radioLabel:{control:"text"},checkboxLabel:{control:"text"},checkboxWithSubsetsLegend:{control:"text"},helpText:{control:"text"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"}}});var ae=R('<div class="layout-grid layout-grid--column-12"><div class="col-3-span-6 multipage-form-view"><form class="mt-form"><!> <!> <!> <!> <!> <!></form></div></div>'),se=R('<div><form class="mt-form form-layout"><!> <!> <!> <!></form></div>'),le=R("<!> <!>",1);function z(H,K){Q(K,!0);var I=le(),q=U(I);J(q,{name:"Normal",children:(C,e)=>{let s=()=>e==null?void 0:e().label,t=()=>e==null?void 0:e().helpText,a=()=>e==null?void 0:e().radioLabel,L=()=>e==null?void 0:e().checkboxLabel,y=()=>e==null?void 0:e().checkboxWithSubsetsLegend,N=()=>e==null?void 0:e().countCharactersLeftLabel,r=()=>e==null?void 0:e().address,l=()=>e==null?void 0:e().disableCss;var i=ae(),c=p(i),T=p(c),d=p(T);V(d,{name:"inputfield",get label(){return s()},get helpText(){return t()},error:void 0,isRequired:!0,textOptional:"Valgfritt",inputmode:"text",placeholder:"",autocomplete:"off"});var b=o(d,2);A(b,{name:"email",get label(){return s()},get helpText(){return t()},get countCharactersLeftLabel(){return N()},error:void 0,isRequired:!0,textOptional:"Valgfritt",inputmode:"text",maxlength:300,rows:3,cols:5});var m=o(b,2);F(m,{options:M,name:g,error:void 0,get helpText(){return t()},get label(){return a()},isRequired:!0,textOptional:"Valgfritt"});var h=o(m,2);E(h,{name:O,get label(){return L()},get helpText(){return t()},options:D,textOptional:"Valgfritt"});var x=o(h,2);ee(x,{name:re,get level1Legend(){return y()},options:oe});var _=o(x,2);te(_,{get streetLabel(){return r().streetLabel},get streetFallbackLabel(){return r().streetFallbackLabel},get streetName(){return r().streetName},get postalCodeLabel(){return r().postalCodeLabel},get postalCodeName(){return r().postalCodeName},get streetError(){return r().streetError},streetIsRequired:!0,postalCodeIsRequired:!0,get loadJs(){return r().loadJs},get streetHelpText(){return t()},get streetValue(){return v.ownerStreet},set streetValue(n){v.ownerStreet=n},get postalCodeValue(){return v.ownerZip},set postalCodeValue(n){v.ownerZip=n}}),W(i,(n,w)=>{var u;return(u=j)==null?void 0:u(n,w)},l),S(C,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="layout-grid layout-grid--column-12">
  <div class="col-3-span-6 multipage-form-view">
    <form class="mt-form">
      <TextInput
        name="inputfield"
        {label}
        {helpText}
        error={undefined}
        isRequired={true}
        textOptional="Valgfritt"
        inputmode="text"
        placeholder=""
        autocomplete="off" />
      <!-- TextArea   -->
      <TextArea
        name="email"
        {label}
        {helpText}
        {countCharactersLeftLabel}
        error={undefined}
        isRequired={true}
        textOptional="Valgfritt"
        inputmode="text"
        maxlength={300}
        rows={3}
        cols={5} />

      <!--  Radio -->
      <RadioGroup
        options={radioOptions}
        name={radioName}
        error={undefined}
        {helpText}
        label={radioLabel}
        isRequired={true}
        textOptional="Valgfritt" />

      <!-- Checkbox -->
      <Checkbox
        name={checkboxName}
        label={checkboxLabel}
        {helpText}
        options={checkBoxOptions}
        textOptional="Valgfritt" />

      <!-- Checkboxes with subsets-->
      <CheckboxWithSubSets
        name={checkboxWithSubsetsName}
        level1Legend={checkboxWithSubsetsLegend}
        options={checkboxWithSubsetsOptions} />

      <!-- Address -->
      <Address
        streetLabel={address.streetLabel}
        streetFallbackLabel={address.streetFallbackLabel}
        streetName={address.streetName}
        postalCodeLabel={address.postalCodeLabel}
        postalCodeName={address.postalCodeName}
        streetError={address.streetError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        loadJs={address.loadJs}
        streetHelpText={helpText}
        bind:streetValue={values['ownerStreet']}
        bind:postalCodeValue={values['ownerZip']}></Address>
    </form>
  </div>
</div>`}}});var P=o(q,2);J(P,{name:"Input with error",children:(C,e)=>{let s=()=>e==null?void 0:e().label,t=()=>e==null?void 0:e().helpText,a=()=>e==null?void 0:e().errorMessage,L=()=>e==null?void 0:e().radioLabel,y=()=>e==null?void 0:e().checkboxLabel,N=()=>e==null?void 0:e().countCharactersLeftLabel,r=()=>e==null?void 0:e().disableCss;var l=se(),i=p(l),c=p(i),T=k(()=>({key:"name",message:a()}));V(c,{name:"name",get label(){return s()},get helpText(){return t()},get countCharactersLeftLabel(){return N()},get error(){return f(T)},isRequired:!0,textOptional:"(valgfritt felt)",inputmode:"text",placeholder:"",autocomplete:"off"});var d=o(c,2),b=k(()=>({key:"textfield",message:a()}));A(d,{name:"textfield",get label(){return s()},get helpText(){return t()},get error(){return f(b)},isRequired:!0,textOptional:"(valgfritt felt)",inputmode:"text",maxlength:300,rows:3,cols:5});var m=o(d,2),h=k(()=>({key:g,message:a()}));F(m,{options:M,name:g,get error(){return f(h)},get helpText(){return t()},get label(){return L()},isRequired:!0,textOptional:"valgfritt"});var x=o(m,2),_=k(()=>({key:O,message:a()}));E(x,{name:O,get label(){return y()},get helpText(){return t()},options:D,get error(){return f(_)}}),W(l,(n,w)=>{var u;return(u=j)==null?void 0:u(n,w)},r),S(C,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextInput
      name="name"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      error={{ key: 'name', message: errorMessage }}
      isRequired={true}
      textOptional="(valgfritt felt)"
      inputmode="text"
      placeholder=""
      autocomplete="off" />

    <TextArea
      name="textfield"
      {label}
      {helpText}
      error={{ key: 'textfield', message: errorMessage }}
      isRequired={true}
      textOptional="(valgfritt felt)"
      inputmode="text"
      maxlength={300}
      rows={3}
      cols={5} />

    <!--  Radio -->
    <RadioGroup
      options={radioOptions}
      name={radioName}
      error={{ key: radioName, message: errorMessage }}
      {helpText}
      label={radioLabel}
      isRequired={true}
      textOptional="valgfritt" />

    <!--    Checkbox-->
    <Checkbox
      name={checkboxName}
      label={checkboxLabel}
      {helpText}
      options={checkBoxOptions}
      error={{ key: checkboxName, message: errorMessage }} />
  </form>
</div>`}}}),S(H,I),X()}z.__docgen={version:3,name:"AllForm.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=$(z,ne),je=["Normal","InputWithError"],Ae=G.Normal,Fe=G.InputWithError;export{Fe as InputWithError,Ae as Normal,je as __namedExportsOrder,ne as default};
