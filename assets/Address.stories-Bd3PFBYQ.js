import{p as L,a as C,t as h}from"./props-C0tvRuaH.js";import{p as f,a as N,n as k,s as d,c as s}from"./runtime-h0AMGDom.js";import{a as v}from"./actions-EVnswImp.js";import{d as E,c as x}from"./create-runtime-stories-BSZiRmpa.js";import{w as S}from"./utils-CMlWd0Pf.js";import{A as n}from"./Address-iVfEmYsI.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./Combobox-DEY3fsk3.js";import"./html-CjI7j8Lz.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./input-Bhn6W10B.js";import"./this-B-g0KYFp.js";import"./Label-D8X8gfhz.js";import"./InputErrorMessage-Dd923iph.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./TextInput-BqCUlEdm.js";import"./count-characters-Cnk4sLIe.js";let t=L({});const{Story:w,meta:V}=E({title:"Components/Form/Address",args:{label:"Når skjedde det?",radioLabel:"Kan vi kontakte deg?",checkboxLabel:"Hva liker du?",checkboxWithSubsetsLegend:"Hvilkt tema er det du er interessert i?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",countCharactersLeftLabel:"karakterer igjen",address:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,postalAreaLabel:"Poststed",postalAreaName:"ownerPlace",postalAreaError:void 0,loadJs:!0},address2:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"reporterStreet",streetError:{key:"reporterStreet",message:"Skriv inn adresse"},postalCodeLabel:"Postnummer",postalCodeName:"reporterZip",postalCodeError:{key:"reporterZip",message:"Trenger postnummer"},postalAreaLabel:"Poststed",postalAreaName:"reporterPlace",postalAreaError:{key:"reporterPlace",message:"Trenger poststed"},loadJs:!1},disableCss:!1},argTypes:{label:{control:"text"},radioLabel:{control:"text"},checkboxLabel:{control:"text"},checkboxWithSubsetsLegend:{control:"text"},helpText:{control:"text"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"},disableJs:{control:"boolean"}}});var y=h('<div><h1 class="mt-h1">Adresse komponent</h1> <h2 class="mt-h2">Med JS</h2> <form method="get" class="mt-form form-layout" style="--gap: 0;"><!></form> <h2 class="mt-h2 m-t-m">Uten JS</h2> <form method="get" class="mt-form form-layout" style="--gap: 0;"><!></form></div>');function p(m,u){f(u,!0),w(m,{name:"Normal",children:(i,e=k)=>{var a=y(),o=d(s(a),4),b=s(o);n(b,{get streetLabel(){return e().address.streetLabel},get streetFallbackLabel(){return e().address.streetFallbackLabel},get streetName(){return e().address.streetName},get postalCodeLabel(){return e().address.postalCodeLabel},get postalCodeName(){return e().address.postalCodeName},get streetError(){return e().address.streetError},get postalAreaLabel(){return e().address.postalAreaLabel},get postalAreaName(){return e().address.postalAreaName},get postalAreaError(){return e().address.postalAreaError},streetIsRequired:!0,postalCodeIsRequired:!0,postalAreaIsRequired:!0,get loadJs(){return e().address.loadJs},get streetHelpText(){return e().helpText},get streetValue(){return t.ownerStreet},set streetValue(r){t.ownerStreet=r},get postalCodeValue(){return t.ownerZip},set postalCodeValue(r){t.ownerZip=r},get postalAreaValue(){return t.ownerArea},set postalAreaValue(r){t.ownerArea=r}});var c=d(o,4),g=s(c);n(g,{get streetLabel(){return e().address2.streetLabel},get streetName(){return e().address2.streetName},get streetFallbackLabel(){return e().address2.streetFallbackLabel},get postalCodeLabel(){return e().address2.postalCodeLabel},get postalCodeName(){return e().address2.postalCodeName},get postalCodeError(){return e().address2.postalCodeError},get postalAreaLabel(){return e().address2.postalAreaLabel},get postalAreaName(){return e().address2.postalAreaName},get postalAreaError(){return e().address2.postalAreaError},get streetError(){return e().address2.streetError},streetIsRequired:!0,postalCodeIsRequired:!0,postalAreaIsRequired:!0,get loadJs(){return e().address2.loadJs},get streetHelpText(){return e().helpText},postalCodeHelpText:"Skriv inn postnummeret. 4 siffer",get streetValue(){return t.reporterStreet},set streetValue(r){t.reporterStreet=r},get postalCodeValue(){return t.reporterZip},set postalCodeValue(r){t.reporterZip=r},get postalAreaValue(){return t.reporterArea},set postalAreaValue(r){t.reporterArea=r}}),v(a,(r,A)=>{var l;return(l=S)==null?void 0:l(r,A)},()=>e().disableCss),C(i,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <h1 class="mt-h1">Adresse komponent</h1>
  <h2 class="mt-h2">Med JS</h2>
  <form method="get" class="mt-form form-layout" style="--gap: 0;">
    <Address
      streetLabel={args.address.streetLabel}
      streetFallbackLabel={args.address.streetFallbackLabel}
      streetName={args.address.streetName}
      postalCodeLabel={args.address.postalCodeLabel}
      postalCodeName={args.address.postalCodeName}
      streetError={args.address.streetError}
      postalAreaLabel={args.address.postalAreaLabel}
      postalAreaName={args.address.postalAreaName}
      postalAreaError={args.address.postalAreaError}
      streetIsRequired={true}
      postalCodeIsRequired={true}
      postalAreaIsRequired={true}
      loadJs={args.address.loadJs}
      streetHelpText={args.helpText}
      bind:streetValue={values['ownerStreet']}
      bind:postalCodeValue={values['ownerZip']}
      bind:postalAreaValue={values['ownerArea']}></Address>
  </form>
  <h2 class="mt-h2 m-t-m">Uten JS</h2>
  <form method="get" class="mt-form form-layout" style="--gap: 0;">
    <Address
      streetLabel={args.address2.streetLabel}
      streetName={args.address2.streetName}
      streetFallbackLabel={args.address2.streetFallbackLabel}
      postalCodeLabel={args.address2.postalCodeLabel}
      postalCodeName={args.address2.postalCodeName}
      postalCodeError={args.address2.postalCodeError}
      postalAreaLabel={args.address2.postalAreaLabel}
      postalAreaName={args.address2.postalAreaName}
      postalAreaError={args.address2.postalAreaError}
      streetError={args.address2.streetError}
      streetIsRequired={true}
      postalCodeIsRequired={true}
      postalAreaIsRequired={true}
      loadJs={args.address2.loadJs}
      streetHelpText={args.helpText}
      postalCodeHelpText="Skriv inn postnummeret. 4 siffer"
      bind:streetValue={values['reporterStreet']}
      bind:postalCodeValue={values['reporterZip']}
      bind:postalAreaValue={values['reporterArea']}></Address>
  </form>
</div>`}}}),N()}p.__docgen={version:3,name:"Address.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J=x(p,V),Y=["Normal"],ee=J.Normal;export{ee as Normal,Y as __namedExportsOrder,V as default};
