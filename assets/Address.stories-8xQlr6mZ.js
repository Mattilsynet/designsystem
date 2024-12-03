import{S as y,i as x,s as ee,c as J,m as F,t as I,a as v,d as T,h,j as N,b as re,k as V,e as ae}from"./index-D8riOviU.js";import{s as E,i as U,d as W,e as k,a as C,m as j,b as g}from"./lifecycle-CcifP0R7.js";import{p as se,M as te,S as oe}from"./collect-stories-BMzKwk3M.js";import{w as le}from"./utils-CMlWd0Pf.js";import{A as G}from"./Address-DVstXyMw.js";import"./Combobox-BGuEmSs-.js";import"./spread-CgU5AtxT.js";import"./Label-BX4PxQ2B.js";import"./InputErrorMessage-BPBNFNBW.js";import"./utils-DjM8Id44.js";import"./proj-CDaZOfWJ.js";import"./TextInput-DryNv1tU.js";import"./count-characters-Cnk4sLIe.js";function de(e){let l,i,s,m,o,d,n,b,A,t,_,S,P,L,f,Z,R,H,w,$,M,D;function O(r){e[1](r)}function z(r){e[2](r)}function B(r){e[3](r)}let c={streetLabel:e[13].address.streetLabel,streetFallbackLabel:e[13].address.streetFallbackLabel,streetName:e[13].address.streetName,postalCodeLabel:e[13].address.postalCodeLabel,postalCodeName:e[13].address.postalCodeName,streetError:e[13].address.streetError,postalAreaLabel:e[13].address.postalAreaLabel,postalAreaName:e[13].address.postalAreaName,postalAreaError:e[13].address.postalAreaError,streetIsRequired:!0,postalCodeIsRequired:!0,postalAreaIsRequired:!0,loadJs:e[13].address.loadJs,streetHelpText:e[8]};e[0].ownerStreet!==void 0&&(c.streetValue=e[0].ownerStreet),e[0].ownerZip!==void 0&&(c.postalCodeValue=e[0].ownerZip),e[0].ownerArea!==void 0&&(c.postalAreaValue=e[0].ownerArea),n=new G({props:c}),h.push(()=>N(n,"streetValue",O)),h.push(()=>N(n,"postalCodeValue",z)),h.push(()=>N(n,"postalAreaValue",B));function Q(r){e[4](r)}function X(r){e[5](r)}function Y(r){e[6](r)}let q={streetLabel:e[13].address2.streetLabel,streetName:e[13].address2.streetName,streetFallbackLabel:e[13].address2.streetFallbackLabel,postalCodeLabel:e[13].address2.postalCodeLabel,postalCodeName:e[13].address2.postalCodeName,postalCodeError:e[13].address2.postalCodeError,postalAreaLabel:e[13].address2.postalAreaLabel,postalAreaName:e[13].address2.postalAreaName,postalAreaError:e[13].address2.postalAreaError,streetError:e[13].address2.streetError,streetIsRequired:!0,postalCodeIsRequired:!0,postalAreaIsRequired:!0,loadJs:e[13].address2.loadJs,streetHelpText:e[8],postalCodeHelpText:"Skriv inn postnummeret. 4 siffer"};return e[0].reporterStreet!==void 0&&(q.streetValue=e[0].reporterStreet),e[0].reporterZip!==void 0&&(q.postalCodeValue=e[0].reporterZip),e[0].reporterArea!==void 0&&(q.postalAreaValue=e[0].reporterArea),f=new G({props:q}),h.push(()=>N(f,"streetValue",Q)),h.push(()=>N(f,"postalCodeValue",X)),h.push(()=>N(f,"postalAreaValue",Y)),{c(){l=k("div"),i=k("h1"),i.textContent="Adresse komponent",s=E(),m=k("h2"),m.textContent="Med JS",o=E(),d=k("form"),J(n.$$.fragment),_=E(),S=k("h2"),S.textContent="Uten JS",P=E(),L=k("form"),J(f.$$.fragment),C(i,"class","mt-h1"),C(m,"class","mt-h2"),C(d,"method","get"),C(d,"class","mt-form form-layout"),j(d,"--gap","0"),C(S,"class","mt-h2 m-t-m"),C(L,"method","get"),C(L,"class","mt-form form-layout"),j(L,"--gap","0")},m(r,a){U(r,l,a),g(l,i),g(l,s),g(l,m),g(l,o),g(l,d),F(n,d,null),g(l,_),g(l,S),g(l,P),g(l,L),F(f,L,null),$=!0,M||(D=re(w=le.call(null,l,e[13].disableCss)),M=!0)},p(r,a){const u={};a&8192&&(u.streetLabel=r[13].address.streetLabel),a&8192&&(u.streetFallbackLabel=r[13].address.streetFallbackLabel),a&8192&&(u.streetName=r[13].address.streetName),a&8192&&(u.postalCodeLabel=r[13].address.postalCodeLabel),a&8192&&(u.postalCodeName=r[13].address.postalCodeName),a&8192&&(u.streetError=r[13].address.streetError),a&8192&&(u.postalAreaLabel=r[13].address.postalAreaLabel),a&8192&&(u.postalAreaName=r[13].address.postalAreaName),a&8192&&(u.postalAreaError=r[13].address.postalAreaError),a&8192&&(u.loadJs=r[13].address.loadJs),a&256&&(u.streetHelpText=r[8]),!b&&a&1&&(b=!0,u.streetValue=r[0].ownerStreet,V(()=>b=!1)),!A&&a&1&&(A=!0,u.postalCodeValue=r[0].ownerZip,V(()=>A=!1)),!t&&a&1&&(t=!0,u.postalAreaValue=r[0].ownerArea,V(()=>t=!1)),n.$set(u);const p={};a&8192&&(p.streetLabel=r[13].address2.streetLabel),a&8192&&(p.streetName=r[13].address2.streetName),a&8192&&(p.streetFallbackLabel=r[13].address2.streetFallbackLabel),a&8192&&(p.postalCodeLabel=r[13].address2.postalCodeLabel),a&8192&&(p.postalCodeName=r[13].address2.postalCodeName),a&8192&&(p.postalCodeError=r[13].address2.postalCodeError),a&8192&&(p.postalAreaLabel=r[13].address2.postalAreaLabel),a&8192&&(p.postalAreaName=r[13].address2.postalAreaName),a&8192&&(p.postalAreaError=r[13].address2.postalAreaError),a&8192&&(p.streetError=r[13].address2.streetError),a&8192&&(p.loadJs=r[13].address2.loadJs),a&256&&(p.streetHelpText=r[8]),!Z&&a&1&&(Z=!0,p.streetValue=r[0].reporterStreet,V(()=>Z=!1)),!R&&a&1&&(R=!0,p.postalCodeValue=r[0].reporterZip,V(()=>R=!1)),!H&&a&1&&(H=!0,p.postalAreaValue=r[0].reporterArea,V(()=>H=!1)),f.$set(p),w&&ae(w.update)&&a&8192&&w.update.call(null,r[13].disableCss)},i(r){$||(I(n.$$.fragment,r),I(f.$$.fragment,r),$=!0)},o(r){v(n.$$.fragment,r),v(f.$$.fragment,r),$=!1},d(r){r&&W(l),T(n),T(f),M=!1,D()}}}function ne(e){let l,i,s,m;return l=new te({props:{title:"Components/Form/Address",args:{label:"Når skjedde det?",radioLabel:"Kan vi kontakte deg?",checkboxLabel:"Hva liker du?",checkboxWithSubsetsLegend:"Hvilkt tema er det du er interessert i?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",countCharactersLeftLabel:"karakterer igjen",address:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,postalAreaLabel:"Poststed",postalAreaName:"ownerPlace",postalAreaError:void 0,loadJs:!0},address2:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"reporterStreet",streetError:{key:"reporterStreet",message:"Skriv inn adresse"},postalCodeLabel:"Postnummer",postalCodeName:"reporterZip",postalCodeError:{key:"reporterZip",message:"Trenger postnummer"},postalAreaLabel:"Poststed",postalAreaName:"reporterPlace",postalAreaError:{key:"reporterPlace",message:"Trenger poststed"},loadJs:!1},disableCss:!1},argTypes:{label:{control:"text"},radioLabel:{control:"text"},checkboxLabel:{control:"text"},checkboxWithSubsetsLegend:{control:"text"},helpText:{control:"text"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"},disableJs:{control:"boolean"}}}}),s=new oe({props:{name:"Normal",$$slots:{default:[de,({label:o,helpText:d,radioLabel:n,checkboxLabel:b,checkboxWithSubsetsLegend:A,countCharactersLeftLabel:t,args:_})=>({7:o,8:d,9:n,10:b,11:A,12:t,13:_}),({label:o,helpText:d,radioLabel:n,checkboxLabel:b,checkboxWithSubsetsLegend:A,countCharactersLeftLabel:t,args:_})=>(o?128:0)|(d?256:0)|(n?512:0)|(b?1024:0)|(A?2048:0)|(t?4096:0)|(_?8192:0)]},$$scope:{ctx:e}}}),{c(){J(l.$$.fragment),i=E(),J(s.$$.fragment)},m(o,d){F(l,o,d),U(o,i,d),F(s,o,d),m=!0},p(o,[d]){const n={};d&24833&&(n.$$scope={dirty:d,ctx:o}),s.$set(n)},i(o){m||(I(l.$$.fragment,o),I(s.$$.fragment,o),m=!0)},o(o){v(l.$$.fragment,o),v(s.$$.fragment,o),m=!1},d(o){o&&W(i),T(l,o),T(s,o)}}}function pe(e,l,i){let s={};function m(t){e.$$.not_equal(s.ownerStreet,t)&&(s.ownerStreet=t,i(0,s))}function o(t){e.$$.not_equal(s.ownerZip,t)&&(s.ownerZip=t,i(0,s))}function d(t){e.$$.not_equal(s.ownerArea,t)&&(s.ownerArea=t,i(0,s))}function n(t){e.$$.not_equal(s.reporterStreet,t)&&(s.reporterStreet=t,i(0,s))}function b(t){e.$$.not_equal(s.reporterZip,t)&&(s.reporterZip=t,i(0,s))}function A(t){e.$$.not_equal(s.reporterArea,t)&&(s.reporterArea=t,i(0,s))}return[s,m,o,d,n,b,A]}class ie extends y{constructor(l){super(),x(this,l,pe,ne,ee,{})}}const K=se(ie,{meta:{title:"Components/Form/Address"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={args.disableCss}>
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
      streetHelpText={helpText}
      bind:streetValue={values['ownerStreet']}
      bind:postalCodeValue={values['ownerZip']}
      bind:postalAreaValue={values['ownerArea']}>
    </Address>
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
      streetHelpText={helpText}
      postalCodeHelpText="Skriv inn postnummeret. 4 siffer"
      bind:streetValue={values['reporterStreet']}
      bind:postalCodeValue={values['reporterZip']}
      bind:postalAreaValue={values['reporterArea']}>
    </Address>
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","Address"]}),Ee=K.meta,Se=["Normal"],we=K.stories.Normal;export{we as Normal,Se as __namedExportsOrder,Ee as default};
