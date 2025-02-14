import{p as g,a as v,t as _}from"./props-C0tvRuaH.js";import{p as L,a as q,g as o,d as x,n as O,b as y,s as l,c as b,f as k}from"./runtime-h0AMGDom.js";import{a as H}from"./actions-EVnswImp.js";import{d as V,c as j}from"./create-runtime-stories-BSZiRmpa.js";import{w as F}from"./utils-CMlWd0Pf.js";import{C as N}from"./Combobox-DEY3fsk3.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./input-Bhn6W10B.js";import"./this-B-g0KYFp.js";import"./Label-D8X8gfhz.js";import"./InputErrorMessage-Dd923iph.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";let r=y(void 0),C=y(void 0),u=g({}),w;async function z(s){if(s.length>2)try{const n=(await(await fetch(`https://ws.geonorge.no/adresser/v1/sok?sok=${s}&fuzzy=true&utkoordsys=4258&treffPerSide=10&side=0&asciiKompatibel=true`)).json()).adresser.map(({adressetekst:e,postnummer:t,poststed:c},h)=>{const f=document.createElement("u-option");return f.classList="option",Object.assign(f,{text:`${e}, ${t} ${c}`,value:`${h}: ${o(r).value}`,"data-street":`${e}`,"data-postalcode":`${t}`})});n.length===0?o(r).list.textContent="Ingen resultater":o(r).list.replaceChildren(...n)}catch{}}async function D(s){var a,d,n;if(s.inputType)if(!o(r).value)o(r).list.textContent="";else{const e=(n=(d=(a=s.target)==null?void 0:a.value)==null?void 0:d.trim())==null?void 0:n.replace(/,+/g,""),t=encodeURIComponent(e);clearTimeout(w),w=setTimeout(async()=>{await z(t)},300)}else{const e=Number(o(r).value.split(":")[0]),t=o(r).list.options[e];t&&(u.ownerStreet=t["data-street"],u.ownerZip=t["data-postalcode"],`${t["data-street"]}${t["data-postalcode"]}`)}}const{Story:J,meta:M}=V({title:"Components/Form/Combobox",args:{errorMessage:"Fyll inn dette feltet.",address:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",listName:"ownerStreet-list",isRequired:!1,showOptionalText:!1,streetHelpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,loadJs:!0},simple:{inputLabel:"Velg et tall",inputName:"choice",listName:"choices-list",inputError:void 0},disableCss:!1},argTypes:{disableCss:{control:"boolean"},disableJs:{control:"boolean"}}});var P=_("<u-option>en</u-option> <u-option>to</u-option> <u-option>tre</u-option> <u-option>fire</u-option> <u-option>fem</u-option>",3),W=_('<div><h1 class="mt-h1">Combobox</h1> <h2 class="mt-h2">Simple options</h2> <form method="get" class="mt-form form-layout" style="--gap: 0;"><!></form> <h2 class="mt-h2 m-t-m">With api request</h2> <form method="get" class="mt-form form-layout" style="--gap: 0;"><!></form></div>');function T(s,a){L(a,!0),J(s,{name:"Normal",children:(n,e=O)=>{var t=W(),c=l(b(t),4),h=b(c);N(h,{get inputLabel(){return e().simple.inputLabel},get inputName(){return e().simple.inputName},get listName(){return e().simple.listName},get inputError(){return e().simple.inputError},inputIsRequired:!0,inputHelpText:"",get inputRef(){return o(C)},set inputRef(i){x(C,g(i))},get inputValue(){return u.choice},set inputValue(i){u.choice=i},options:i=>{var m=P(),R=k(m),S=l(R,2),$=l(S,2),E=l($,2);l(E,2),v(i,m)},$$slots:{options:!0}});var f=l(c,4),I=b(f);N(I,{get inputLabel(){return e().address.streetLabel},get inputName(){return e().address.streetName},get listName(){return e().address.listName},get inputError(){return e().address.streetError},get inputIsRequired(){return e().address.isRequired},get showOptionalText(){return e().address.showOptionalText},get inputHelpText(){return e().address.streetHelpText},onInput:D,get inputRef(){return o(r)},set inputRef(p){x(r,g(p))},get inputValue(){return u.ownerStreet},set inputValue(p){u.ownerStreet=p}}),H(t,(p,i)=>{var m;return(m=F)==null?void 0:m(p,i)},()=>e().disableCss),v(n,t)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <h1 class="mt-h1">Combobox</h1>
  <h2 class="mt-h2">Simple options</h2>
  <form method="get" class="mt-form form-layout" style="--gap: 0;">
    <Combobox
      inputLabel={args.simple.inputLabel}
      inputName={args.simple.inputName}
      listName={args.simple.listName}
      inputError={args.simple.inputError}
      inputIsRequired={true}
      inputHelpText={''}
      bind:inputRef={secondInput}
      bind:inputValue={values['choice']}>
      {#snippet options()}
        <u-option>en</u-option>
        <u-option>to</u-option>
        <u-option>tre</u-option>
        <u-option>fire</u-option>
        <u-option>fem</u-option>
      {/snippet}
    </Combobox>
  </form>
  <h2 class="mt-h2 m-t-m">With api request</h2>
  <form method="get" class="mt-form form-layout" style="--gap: 0;">
    <Combobox
      inputLabel={args.address.streetLabel}
      inputName={args.address.streetName}
      listName={args.address.listName}
      inputError={args.address.streetError}
      inputIsRequired={args.address.isRequired}
      showOptionalText={args.address.showOptionalText}
      inputHelpText={args.address.streetHelpText}
      bind:inputRef={input}
      bind:inputValue={values['ownerStreet']}
      onInput={handleInput}></Combobox>
  </form>
</div>`}}}),q()}T.__docgen={version:3,name:"Combobox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Z=j(T,M),ue=["Normal"],me=Z.Normal;export{me as Normal,ue as __namedExportsOrder,M as default};
