import{S as re,i as se,s as ne,c as k,m as $,t as C,a as x,d as w,h as G,j as H,b as P,k as z,e as B}from"./index-D8riOviU.js";import{s as T,i as A,d as E,e as I,a as R,b as _}from"./lifecycle-CcifP0R7.js";import{p as oe,M as le,S as K}from"./collect-stories-BMzKwk3M.js";import{T as Q}from"./TextInput-DryNv1tU.js";import{w as U}from"./utils-CMlWd0Pf.js";import{T as X}from"./TextArea-BQbWmFWN.js";import{R as Y}from"./RadioGroup-BLUVfYYc.js";import{C as ee}from"./Checkbox-_9qRH8JF.js";import{C as ie}from"./CheckboxWithSubSets-DjRkeQ8_.js";import{A as de}from"./Address-DVstXyMw.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./count-characters-Cnk4sLIe.js";import"./utils-DjM8Id44.js";import"./proj-CDaZOfWJ.js";import"./Label-BX4PxQ2B.js";import"./each-Dzkb-YsG.js";import"./index-DTCOkSMf.js";import"./Combobox-BGuEmSs-.js";function me(e){let m,p,s,h,u,l,a,n,o,i,g,b,c,r,f,N,v,S,y,J;h=new Q({props:{name:"inputfield",label:e[6],helpText:e[7],error:void 0,isRequired:!0,textOptional:"Valgfritt",inputmode:"text",placeholder:"",autocomplete:""}}),l=new X({props:{name:"email",label:e[6],helpText:e[7],countCharactersLeftLabel:e[12],error:void 0,isRequired:!0,textOptional:"Valgfritt",inputmode:"text",maxlength:"300",rows:"3",cols:"5"}}),n=new Y({props:{options:e[1],name:V,error:void 0,helpText:e[7],label:e[9],isRequired:!0,textOptional:"Valgfritt"}}),i=new ee({props:{name:q,label:e[10],helpText:e[7],options:e[2],textOptional:"Valgfritt"}}),b=new ie({props:{name:fe,level1Legend:e[13],options:e[3]}});function te(t){e[4](t)}function ae(t){e[5](t)}let F={streetLabel:e[11].address.streetLabel,streetFallbackLabel:e[11].address.streetFallbackLabel,streetName:e[11].address.streetName,postalCodeLabel:e[11].address.postalCodeLabel,postalCodeName:e[11].address.postalCodeName,streetError:e[11].address.streetError,streetIsRequired:!0,postalCodeIsRequired:!0,loadJs:e[11].address.loadJs,streetHelpText:e[7]};return e[0].ownerStreet!==void 0&&(F.streetValue=e[0].ownerStreet),e[0].ownerZip!==void 0&&(F.postalCodeValue=e[0].ownerZip),r=new de({props:F}),G.push(()=>H(r,"streetValue",te)),G.push(()=>H(r,"postalCodeValue",ae)),{c(){m=I("div"),p=I("div"),s=I("form"),k(h.$$.fragment),u=T(),k(l.$$.fragment),a=T(),k(n.$$.fragment),o=T(),k(i.$$.fragment),g=T(),k(b.$$.fragment),c=T(),k(r.$$.fragment),R(s,"class","mt-form"),R(p,"class","col-3-span-6 multipage-form-view"),R(m,"class","layout-grid layout-grid--column-12")},m(t,d){A(t,m,d),_(m,p),_(p,s),$(h,s,null),_(s,u),$(l,s,null),_(s,a),$(n,s,null),_(s,o),$(i,s,null),_(s,g),$(b,s,null),_(s,c),$(r,s,null),S=!0,y||(J=P(v=U.call(null,m,e[11].disableCss)),y=!0)},p(t,d){const W={};d&64&&(W.label=t[6]),d&128&&(W.helpText=t[7]),h.$set(W);const O={};d&64&&(O.label=t[6]),d&128&&(O.helpText=t[7]),d&4096&&(O.countCharactersLeftLabel=t[12]),l.$set(O);const j={};d&128&&(j.helpText=t[7]),d&512&&(j.label=t[9]),n.$set(j);const D={};d&1024&&(D.label=t[10]),d&128&&(D.helpText=t[7]),i.$set(D);const Z={};d&8192&&(Z.level1Legend=t[13]),b.$set(Z);const L={};d&2048&&(L.streetLabel=t[11].address.streetLabel),d&2048&&(L.streetFallbackLabel=t[11].address.streetFallbackLabel),d&2048&&(L.streetName=t[11].address.streetName),d&2048&&(L.postalCodeLabel=t[11].address.postalCodeLabel),d&2048&&(L.postalCodeName=t[11].address.postalCodeName),d&2048&&(L.streetError=t[11].address.streetError),d&2048&&(L.loadJs=t[11].address.loadJs),d&128&&(L.streetHelpText=t[7]),!f&&d&1&&(f=!0,L.streetValue=t[0].ownerStreet,z(()=>f=!1)),!N&&d&1&&(N=!0,L.postalCodeValue=t[0].ownerZip,z(()=>N=!1)),r.$set(L),v&&B(v.update)&&d&2048&&v.update.call(null,t[11].disableCss)},i(t){S||(C(h.$$.fragment,t),C(l.$$.fragment,t),C(n.$$.fragment,t),C(i.$$.fragment,t),C(b.$$.fragment,t),C(r.$$.fragment,t),S=!0)},o(t){x(h.$$.fragment,t),x(l.$$.fragment,t),x(n.$$.fragment,t),x(i.$$.fragment,t),x(b.$$.fragment,t),x(r.$$.fragment,t),S=!1},d(t){t&&E(m),w(h),w(l),w(n),w(i),w(b),w(r),y=!1,J()}}}function pe(e){let m,p,s,h,u,l,a,n,o,i,g,b,c;return s=new Q({props:{name:"name",label:e[6],helpText:e[7],countCharactersLeftLabel:e[12],error:{key:"name",message:e[8]},isRequired:!0,textOptional:"(valgfritt felt)",inputmode:"text",placeholder:"",autocomplete:""}}),u=new X({props:{name:"textfield",label:e[6],helpText:e[7],error:{key:"textfield",message:e[8]},isRequired:!0,textOptional:"(valgfritt felt)",inputmode:"text",maxlength:"300",rows:"3",cols:"5"}}),a=new Y({props:{options:e[1],name:V,error:{key:V,message:e[8]},helpText:e[7],label:e[9],isRequired:"true",textOptional:"valgfritt"}}),o=new ee({props:{name:q,label:e[10],helpText:e[7],options:e[2],error:{key:q,message:e[8]}}}),{c(){m=I("div"),p=I("form"),k(s.$$.fragment),h=T(),k(u.$$.fragment),l=T(),k(a.$$.fragment),n=T(),k(o.$$.fragment),R(p,"class","mt-form form-layout")},m(r,f){A(r,m,f),_(m,p),$(s,p,null),_(p,h),$(u,p,null),_(p,l),$(a,p,null),_(p,n),$(o,p,null),g=!0,b||(c=P(i=U.call(null,m,e[11].disableCss)),b=!0)},p(r,f){const N={};f&64&&(N.label=r[6]),f&128&&(N.helpText=r[7]),f&4096&&(N.countCharactersLeftLabel=r[12]),f&256&&(N.error={key:"name",message:r[8]}),s.$set(N);const v={};f&64&&(v.label=r[6]),f&128&&(v.helpText=r[7]),f&256&&(v.error={key:"textfield",message:r[8]}),u.$set(v);const S={};f&256&&(S.error={key:V,message:r[8]}),f&128&&(S.helpText=r[7]),f&512&&(S.label=r[9]),a.$set(S);const y={};f&1024&&(y.label=r[10]),f&128&&(y.helpText=r[7]),f&256&&(y.error={key:q,message:r[8]}),o.$set(y),i&&B(i.update)&&f&2048&&i.update.call(null,r[11].disableCss)},i(r){g||(C(s.$$.fragment,r),C(u.$$.fragment,r),C(a.$$.fragment,r),C(o.$$.fragment,r),g=!0)},o(r){x(s.$$.fragment,r),x(u.$$.fragment,r),x(a.$$.fragment,r),x(o.$$.fragment,r),g=!1},d(r){r&&E(m),w(s),w(u),w(a),w(o),b=!1,c()}}}function ue(e){let m,p,s,h,u,l;return m=new le({props:{title:"Components/Form/All",args:{label:"Når skjedde det?",radioLabel:"Kan vi kontakte deg?",checkboxLabel:"Hva liker du?",checkboxWithSubsetsLegend:"Hvilkt tema er det du er interessert i?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",countCharactersLeftLabel:"karakterer igjen",address:{streetLabel:"Søk i gateadresse",streetFallbackLabel:"Gateadresse",streetName:"ownerStreet",streetError:void 0,postalCodeLabel:"Postnummer",postalCodeName:"ownerZip",postalCodeError:void 0,loadJs:!0},disableCss:!1},argTypes:{label:{control:"text"},radioLabel:{control:"text"},checkboxLabel:{control:"text"},checkboxWithSubsetsLegend:{control:"text"},helpText:{control:"text"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"}}}}),s=new K({props:{name:"Normal",$$slots:{default:[me,({label:a,helpText:n,radioLabel:o,checkboxLabel:i,checkboxWithSubsetsLegend:g,countCharactersLeftLabel:b,args:c})=>({6:a,7:n,9:o,10:i,13:g,12:b,11:c}),({label:a,helpText:n,radioLabel:o,checkboxLabel:i,checkboxWithSubsetsLegend:g,countCharactersLeftLabel:b,args:c})=>(a?64:0)|(n?128:0)|(o?512:0)|(i?1024:0)|(g?8192:0)|(b?4096:0)|(c?2048:0)]},$$scope:{ctx:e}}}),u=new K({props:{name:"Input with error",$$slots:{default:[pe,({label:a,helpText:n,errorMessage:o,radioLabel:i,checkboxLabel:g,args:b,countCharactersLeftLabel:c})=>({6:a,7:n,8:o,9:i,10:g,11:b,12:c}),({label:a,helpText:n,errorMessage:o,radioLabel:i,checkboxLabel:g,args:b,countCharactersLeftLabel:c})=>(a?64:0)|(n?128:0)|(o?256:0)|(i?512:0)|(g?1024:0)|(b?2048:0)|(c?4096:0)]},$$scope:{ctx:e}}}),{c(){k(m.$$.fragment),p=T(),k(s.$$.fragment),h=T(),k(u.$$.fragment)},m(a,n){$(m,a,n),A(a,p,n),$(s,a,n),A(a,h,n),$(u,a,n),l=!0},p(a,[n]){const o={};n&32449&&(o.$$scope={dirty:n,ctx:a}),s.$set(o);const i={};n&24512&&(i.$$scope={dirty:n,ctx:a}),u.$set(i)},i(a){l||(C(m.$$.fragment,a),C(s.$$.fragment,a),C(u.$$.fragment,a),l=!0)},o(a){x(m.$$.fragment,a),x(s.$$.fragment,a),x(u.$$.fragment,a),l=!1},d(a){a&&(E(p),E(h)),w(m,a),w(s,a),w(u,a)}}}const V="radiobuttons",q="checkboxes",fe="checkboxesWithSubsets";function be(e,m,p){const s=[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}],h=[{text:"Is",value:"Is"},{text:"Pizza",value:"Pizza"}],u={children:[{key:"dyr",displayName:"Dyr",docCount:49,children:[{key:"produksjonsdyr",displayName:"Produksjonsdyr asdf asdfklj jlkjsadflkf jlafdj kl lkjasdfaasdf",docCount:38,children:[]},{key:"dyresykdommer",displayName:"Dyresykdommer",docCount:2,children:[]},{key:"kjaeledyr",displayName:"Kjæledyr",docCount:1,children:[]}]},{key:"fisk-og-akvakultur",displayName:"Fisk og akvakultur",docCount:1,children:[{key:"fiskesykdommer",displayName:"Fiskesykdommer",docCount:1,children:[]}]},{key:"mat",displayName:"Mat",docCount:3,children:[{key:"import-av-mat",displayName:"Import av mat",docCount:1,children:[{key:"kommersiell-import",displayName:"Kommersiell import",docCount:1,children:[]}]}]},{key:"kosmetikk",displayName:"Kosmetikk",docCount:1,children:[]}]};let l={};function a(o){e.$$.not_equal(l.ownerStreet,o)&&(l.ownerStreet=o,p(0,l))}function n(o){e.$$.not_equal(l.ownerZip,o)&&(l.ownerZip=o,p(0,l))}return[l,s,h,u,a,n]}class he extends re{constructor(m){super(),se(this,m,be,ue,ne,{})}}const M=oe(he,{meta:{title:"Components/Form/All"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={args.disableCss} class="layout-grid layout-grid--column-12">
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
        autocomplete="" />
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
        maxlength="300"
        rows="3"
        cols="5" />

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
        streetLabel={args.address.streetLabel}
        streetFallbackLabel={args.address.streetFallbackLabel}
        streetName={args.address.streetName}
        postalCodeLabel={args.address.postalCodeLabel}
        postalCodeName={args.address.postalCodeName}
        streetError={args.address.streetError}
        streetIsRequired={true}
        postalCodeIsRequired={true}
        loadJs={args.address.loadJs}
        streetHelpText={helpText}
        bind:streetValue={values['ownerStreet']}
        bind:postalCodeValue={values['ownerZip']}>
      </Address>
    </form>
  </div>
</div>`,tags:[],hasArgs:!0},InputWithError:{name:"Input with error",template:!1,source:`<div use:wrapInShadowDom={args.disableCss}>
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
      autocomplete="" />

    <TextArea
      name="textfield"
      {label}
      {helpText}
      error={{ key: 'textfield', message: errorMessage }}
      isRequired={true}
      textOptional="(valgfritt felt)"
      inputmode="text"
      maxlength="300"
      rows="3"
      cols="5" />

    <!--  Radio -->
    <RadioGroup
      options={radioOptions}
      name={radioName}
      error={{ key: radioName, message: errorMessage }}
      {helpText}
      label={radioLabel}
      isRequired="true"
      textOptional="valgfritt" />

    <!--    Checkbox-->
    <Checkbox
      name={checkboxName}
      label={checkboxLabel}
      {helpText}
      options={checkBoxOptions}
      error={{ key: checkboxName, message: errorMessage }} />
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","TextInput","wrapInShadowDom","TextArea","RadioGroup","Checkbox","CheckboxWithSubSets","Address"]}),Ae=M.meta,Ee=["Normal","InputWithError"],Fe=M.stories.Normal,We=M.stories.InputWithError;export{We as InputWithError,Fe as Normal,Ee as __namedExportsOrder,Ae as default};
