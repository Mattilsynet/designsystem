import{S,i as D,s as I,c as h,m as $,t as g,a as T,d as x,b as v,e as k}from"./index-D8riOviU.js";import{s as _,i as d,d as b,e as C,a as y,b as w}from"./lifecycle-CcifP0R7.js";import{p as O,M as V,S as M}from"./collect-stories-BMzKwk3M.js";import{T as A}from"./TextArea-BQbWmFWN.js";import{w as E}from"./utils-CMlWd0Pf.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./count-characters-Cnk4sLIe.js";import"./utils-DjM8Id44.js";import"./Label-BX4PxQ2B.js";function F(o){let n,i,r,p,s,f,e,a,l;return r=new A({props:{name:"email",label:o[0],helpText:o[1],countCharactersLeftLabel:o[4],countCharactersTooManyLabel:o[5],tooManyCharactersErrorText:o[6],maxlength:"100",textOptional:"Valgfritt",inputmode:"text",rows:"3",cols:"5"}}),s=new A({props:{name:"email2",label:o[0],helpText:o[1],countCharactersLeftLabel:o[4],countCharactersTooManyLabel:o[5],tooManyCharactersErrorText:o[6],textOptional:"Valgfritt",inputmode:"text",maxlength:"100",isRequired:!0,placeholder:"Skriv inn tekst her",rows:"3",cols:"5"}}),{c(){n=C("div"),i=C("form"),h(r.$$.fragment),p=_(),h(s.$$.fragment),y(i,"class","mt-form form-layout")},m(t,m){d(t,n,m),w(n,i),$(r,i,null),w(i,p),$(s,i,null),e=!0,a||(l=v(f=E.call(null,n,o[3])),a=!0)},p(t,m){const u={};m&1&&(u.label=t[0]),m&2&&(u.helpText=t[1]),m&16&&(u.countCharactersLeftLabel=t[4]),m&32&&(u.countCharactersTooManyLabel=t[5]),m&64&&(u.tooManyCharactersErrorText=t[6]),r.$set(u);const c={};m&1&&(c.label=t[0]),m&2&&(c.helpText=t[1]),m&16&&(c.countCharactersLeftLabel=t[4]),m&32&&(c.countCharactersTooManyLabel=t[5]),m&64&&(c.tooManyCharactersErrorText=t[6]),s.$set(c),f&&k(f.update)&&m&8&&f.update.call(null,t[3])},i(t){e||(g(r.$$.fragment,t),g(s.$$.fragment,t),e=!0)},o(t){T(r.$$.fragment,t),T(s.$$.fragment,t),e=!1},d(t){t&&b(n),x(r),x(s),a=!1,l()}}}function N(o){let n,i,r,p,s,f,e;return r=new A({props:{name:"email",label:o[0],helpText:o[1],error:{key:"email",message:o[2]},textOptional:"(valgfritt felt)",inputmode:"text",maxlength:"100",rows:"3",cols:"5"}}),{c(){n=C("div"),i=C("form"),h(r.$$.fragment),y(i,"class","mt-form form-layout")},m(a,l){d(a,n,l),w(n,i),$(r,i,null),s=!0,f||(e=v(p=E.call(null,n,o[3])),f=!0)},p(a,l){const t={};l&1&&(t.label=a[0]),l&2&&(t.helpText=a[1]),l&4&&(t.error={key:"email",message:a[2]}),r.$set(t),p&&k(p.update)&&l&8&&p.update.call(null,a[3])},i(a){s||(g(r.$$.fragment,a),s=!0)},o(a){T(r.$$.fragment,a),s=!1},d(a){a&&b(n),x(r),f=!1,e()}}}function W(o){let n,i,r,p,s,f;return n=new V({props:{title:"Components/Form/TextArea",args:{label:"Hva gjelder bekymringen?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",disableCss:!1,countCharactersLeftLabel:"karakterer igjen",countCharactersTooManyLabel:"karakterer for mange",tooManyCharactersErrorText:"For lang tekst"},argTypes:{label:{control:"text"},helpText:{control:"text"},countCharactersLeft:{control:"text"},countCharactersTooManyLabel:{control:"text"},tooManyCharactersErrorText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}}}),r=new M({props:{name:"TextArea normal",$$slots:{default:[F,({label:e,helpText:a,disableCss:l,countCharactersLeftLabel:t,countCharactersTooManyLabel:m,tooManyCharactersErrorText:u})=>({0:e,1:a,3:l,4:t,5:m,6:u}),({label:e,helpText:a,disableCss:l,countCharactersLeftLabel:t,countCharactersTooManyLabel:m,tooManyCharactersErrorText:u})=>(e?1:0)|(a?2:0)|(l?8:0)|(t?16:0)|(m?32:0)|(u?64:0)]},$$scope:{ctx:o}}}),s=new M({props:{name:"TextArea with error",$$slots:{default:[N,({label:e,helpText:a,errorMessage:l,disableCss:t})=>({0:e,1:a,2:l,3:t}),({label:e,helpText:a,errorMessage:l,disableCss:t})=>(e?1:0)|(a?2:0)|(l?4:0)|(t?8:0)]},$$scope:{ctx:o}}}),{c(){h(n.$$.fragment),i=_(),h(r.$$.fragment),p=_(),h(s.$$.fragment)},m(e,a){$(n,e,a),d(e,i,a),$(r,e,a),d(e,p,a),$(s,e,a),f=!0},p(e,[a]){const l={};a&251&&(l.$$scope={dirty:a,ctx:e}),r.$set(l);const t={};a&143&&(t.$$scope={dirty:a,ctx:e}),s.$set(t)},i(e){f||(g(n.$$.fragment,e),g(r.$$.fragment,e),g(s.$$.fragment,e),f=!0)},o(e){T(n.$$.fragment,e),T(r.$$.fragment,e),T(s.$$.fragment,e),f=!1},d(e){e&&(b(i),b(p)),x(n,e),x(r,e),x(s,e)}}}class q extends S{constructor(n){super(),D(this,n,null,W,I,{})}}const L=O(q,{meta:{title:"Components/Form/TextArea"},stories:{TextAreaNormal:{name:"TextArea normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      {countCharactersTooManyLabel}
      {tooManyCharactersErrorText}
      maxlength="100"
      textOptional="Valgfritt"
      inputmode="text"
      rows="3"
      cols="5" />

    <TextArea
      name="email2"
      {label}
      {helpText}
      {countCharactersLeftLabel}
      {countCharactersTooManyLabel}
      {tooManyCharactersErrorText}
      textOptional="Valgfritt"
      inputmode="text"
      maxlength="100"
      isRequired={true}
      placeholder="Skriv inn tekst her"
      rows="3"
      cols="5" />
  </form>
</div>`,tags:[],hasArgs:!0},TextAreaWithError:{name:"TextArea with error",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextArea
      name="email"
      {label}
      {helpText}
      error={{ key: 'email', message: errorMessage }}
      textOptional="(valgfritt felt)"
      inputmode="text"
      maxlength="100"
      rows="3"
      cols="5" />
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","TextArea","wrapInShadowDom"]}),U=L.meta,X=["TextAreaNormal","TextAreaWithError"],Y=L.stories.TextAreaNormal,Z=L.stories.TextAreaWithError;export{Y as TextAreaNormal,Z as TextAreaWithError,X as __namedExportsOrder,U as default};
