import{S as K,i as U,s as B,c as H,m as J,t as D,a as M,d as j,h as V,j as O,b as Q,k,e as X,n as Y}from"./index-D8riOviU.js";import{s as S,i as g,d as h,e as $,a as E,m as z,b as R}from"./lifecycle-CcifP0R7.js";import{p as ee,M as te,S as oe}from"./collect-stories-BMzKwk3M.js";import{w as se}from"./utils-CMlWd0Pf.js";import{C as P}from"./Combobox-BGuEmSs-.js";import"./spread-CgU5AtxT.js";import"./Label-BX4PxQ2B.js";import"./InputErrorMessage-BPBNFNBW.js";import"./utils-DjM8Id44.js";import"./proj-CDaZOfWJ.js";function ne(o){let s,i,n,u,e,l,p,N,C;return{c(){s=$("u-option"),s.textContent="en",i=S(),n=$("u-option"),n.textContent="to",u=S(),e=$("u-option"),e.textContent="tre",l=S(),p=$("u-option"),p.textContent="fire",N=S(),C=$("u-option"),C.textContent="fem"},m(m,d){g(m,s,d),g(m,i,d),g(m,n,d),g(m,u,d),g(m,e,d),g(m,l,d),g(m,p,d),g(m,N,d),g(m,C,d)},p:Y,d(m){m&&(h(s),h(i),h(n),h(u),h(e),h(l),h(p),h(N),h(C))}}}function ae(o){let s,i,n,u,e,l,p,N,C,m,d,v,a,b,I,w,c,f,L,x;function q(t){o[4](t)}function Z(t){o[5](t)}let F={inputLabel:o[14].simple.inputLabel,inputName:o[14].simple.inputName,listName:o[14].simple.listName,inputError:o[14].simple.inputError,inputIsRequired:!0,inputHelpText:"",$$slots:{options:[ne]},$$scope:{ctx:o}};o[1]!==void 0&&(F.inputRef=o[1]),o[2].choice!==void 0&&(F.inputValue=o[2].choice),p=new P({props:F}),V.push(()=>O(p,"inputRef",q)),V.push(()=>O(p,"inputValue",Z));function A(t){o[6](t)}function G(t){o[7](t)}let y={inputLabel:o[14].address.streetLabel,inputName:o[14].address.streetName,listName:o[14].address.listName,inputError:o[14].address.streetError,inputIsRequired:o[14].address.isRequired,showOptionalText:o[14].address.showOptionalText,loadJs:o[14].address.loadJs,inputHelpText:o[14].address.streetHelpText,handleInput:o[3]};return o[0]!==void 0&&(y.inputRef=o[0]),o[2].ownerStreet!==void 0&&(y.inputValue=o[2].ownerStreet),b=new P({props:y}),V.push(()=>O(b,"inputRef",A)),V.push(()=>O(b,"inputValue",G)),{c(){s=$("div"),i=$("h1"),i.textContent="Combobox",n=S(),u=$("h2"),u.textContent="Simple options",e=S(),l=$("form"),H(p.$$.fragment),m=S(),d=$("h2"),d.textContent="With api request",v=S(),a=$("form"),H(b.$$.fragment),E(i,"class","mt-h1"),E(u,"class","mt-h2"),E(l,"method","get"),E(l,"class","mt-form form-layout"),z(l,"--gap","0"),E(d,"class","mt-h2 m-t-m"),E(a,"method","get"),E(a,"class","mt-form form-layout"),z(a,"--gap","0")},m(t,r){g(t,s,r),R(s,i),R(s,n),R(s,u),R(s,e),R(s,l),J(p,l,null),R(s,m),R(s,d),R(s,v),R(s,a),J(b,a,null),f=!0,L||(x=Q(c=se.call(null,s,o[14].disableCss)),L=!0)},p(t,r){const T={};r&16384&&(T.inputLabel=t[14].simple.inputLabel),r&16384&&(T.inputName=t[14].simple.inputName),r&16384&&(T.listName=t[14].simple.listName),r&16384&&(T.inputError=t[14].simple.inputError),r&32768&&(T.$$scope={dirty:r,ctx:t}),!N&&r&2&&(N=!0,T.inputRef=t[1],k(()=>N=!1)),!C&&r&4&&(C=!0,T.inputValue=t[2].choice,k(()=>C=!1)),p.$set(T);const _={};r&16384&&(_.inputLabel=t[14].address.streetLabel),r&16384&&(_.inputName=t[14].address.streetName),r&16384&&(_.listName=t[14].address.listName),r&16384&&(_.inputError=t[14].address.streetError),r&16384&&(_.inputIsRequired=t[14].address.isRequired),r&16384&&(_.showOptionalText=t[14].address.showOptionalText),r&16384&&(_.loadJs=t[14].address.loadJs),r&16384&&(_.inputHelpText=t[14].address.streetHelpText),!I&&r&1&&(I=!0,_.inputRef=t[0],k(()=>I=!1)),!w&&r&4&&(w=!0,_.inputValue=t[2].ownerStreet,k(()=>w=!1)),b.$set(_),c&&X(c.update)&&r&16384&&c.update.call(null,t[14].disableCss)},i(t){f||(D(p.$$.fragment,t),D(b.$$.fragment,t),f=!0)},o(t){M(p.$$.fragment,t),M(b.$$.fragment,t),f=!1},d(t){t&&h(s),j(p),j(b),L=!1,x()}}}function ie(o){let s,i,n,u;return s=new te({props:{title:"Components/Form/Combobox",args:{errorMessage:"Fyll inn dette feltet.",address:{streetLabel:"Søk etter gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",listName:"ownerStreet-list",isRequired:!1,showOptionalText:!1,streetHelpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,loadJs:!0},simple:{inputLabel:"Velg et tall",inputName:"choice",listName:"choices-list",inputError:void 0},disableCss:!1},argTypes:{disableCss:{control:"boolean"},disableJs:{control:"boolean"}}}}),n=new oe({props:{name:"Normal",$$slots:{default:[ae,({args:e})=>({14:e}),({args:e})=>e?16384:0]},$$scope:{ctx:o}}}),{c(){H(s.$$.fragment),i=S(),H(n.$$.fragment)},m(e,l){J(s,e,l),g(e,i,l),J(n,e,l),u=!0},p(e,[l]){const p={};l&49159&&(p.$$scope={dirty:l,ctx:e}),n.$set(p)},i(e){u||(D(s.$$.fragment,e),D(n.$$.fragment,e),u=!0)},o(e){M(s.$$.fragment,e),M(n.$$.fragment,e),u=!1},d(e){e&&h(i),j(s,e),j(n,e)}}}function re(o,s,i){let n,u,e={},l;async function p(a){if(a.length>2)try{const w=(await(await fetch(`https://ws.geonorge.no/adresser/v1/sok?sok=${a}&fuzzy=true&utkoordsys=4258&treffPerSide=10&side=0&asciiKompatibel=true`)).json()).adresser.map(({adressetekst:c,postnummer:f,poststed:L},x)=>{const q=document.createElement("u-option");return q.classList="option",Object.assign(q,{text:`${c}, ${f} ${L}`,value:`${x}: ${n.value}`,"data-street":`${c}`,"data-postalcode":`${f}`})});w.length===0?i(0,n.list.textContent="Ingen resultater",n):n.list.replaceChildren(...w)}catch{}}async function N(a){var b,I,w;if(a.inputType)if(!n.value)i(0,n.list.textContent="",n);else{const c=(w=(I=(b=a.target)==null?void 0:b.value)==null?void 0:I.trim())==null?void 0:w.replace(/,+/g,""),f=encodeURIComponent(c);clearTimeout(l),l=setTimeout(async()=>{await p(f)},300)}else{const c=Number(n.value.split(":")[0]),f=n.list.options[c];f&&(i(2,e.ownerStreet=f["data-street"],e),i(2,e.ownerZip=f["data-postalcode"],e),`${f["data-street"]}${f["data-postalcode"]}`)}}function C(a){u=a,i(1,u)}function m(a){o.$$.not_equal(e.choice,a)&&(e.choice=a,i(2,e))}function d(a){n=a,i(0,n)}function v(a){o.$$.not_equal(e.ownerStreet,a)&&(e.ownerStreet=a,i(2,e))}return[n,u,e,N,C,m,d,v]}class le extends K{constructor(s){super(),U(this,s,re,ie,B,{})}}const W=ee(le,{meta:{title:"Components/Form/Combobox"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={args.disableCss}>
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
      <svelte:fragment slot="options">
        <u-option>en</u-option>
        <u-option>to</u-option>
        <u-option>tre</u-option>
        <u-option>fire</u-option>
        <u-option>fem</u-option>
      </svelte:fragment>
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
      loadJs={args.address.loadJs}
      inputHelpText={args.address.streetHelpText}
      bind:inputRef={input}
      bind:inputValue={values['ownerStreet']}
      {handleInput}>
    </Combobox>
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","Combobox"]}),$e=W.meta,Ce=["Normal"],Ne=W.stories.Normal;export{Ne as Normal,Ce as __namedExportsOrder,$e as default};
