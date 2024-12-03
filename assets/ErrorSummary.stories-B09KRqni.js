import{S as Z,i as x,s as ee,c as N,m as E,t as M,a as C,d as D,b as V,e as W}from"./index-D8riOviU.js";import{s as h,i as T,d as F,e as g,g as K,a as o,b as u,h as P}from"./lifecycle-CcifP0R7.js";import{p as re,M as ne,S as Q}from"./collect-stories-BMzKwk3M.js";import{w as X}from"./utils-CMlWd0Pf.js";import{F as Y}from"./FormErrorSummary-CAgzVA7K.js";import"./each-Dzkb-YsG.js";function R(s){let r,l=s[3]+"";return{c(){r=g("div"),o(r,"class","hint")},m(a,n){T(a,r,n),r.innerHTML=l},p(a,n){n&8&&l!==(l=a[3]+"")&&(r.innerHTML=l)},d(a){a&&F(r)}}}function U(s){let r,l=s[3]+"";return{c(){r=g("div"),o(r,"class","hint")},m(a,n){T(a,r,n),r.innerHTML=l},p(a,n){n&8&&l!==(l=a[3]+"")&&(r.innerHTML=l)},d(a){a&&F(r)}}}function te(s){let r,l,a,n,m,b,e,t,f,d,$=s[2]+"",_,z,H,y,I,B,k=s[1][0].message+"",L,G,w,O,S,A,J;l=new Y({props:{errors:s[1],heading:s[4]}});let p=s[3]&&R(s),c=s[3]&&U(s);return{c(){r=g("div"),N(l.$$.fragment),a=h(),n=g("form"),m=g("label"),m.textContent="Navn",b=h(),p&&p.c(),e=h(),t=g("input"),f=h(),d=g("label"),_=K($),z=h(),c&&c.c(),H=h(),y=g("span"),I=g("span"),I.textContent="Feilmelding:",B=h(),L=K(k),G=h(),w=g("input"),o(m,"class","mt-label"),o(m,"for","inputfield"),o(t,"id","inputfield"),o(t,"name","name"),o(t,"class","mt-input form-field"),o(t,"aria-describedby","inputfield-hint inputfield-error"),o(d,"class","mt-label"),o(d,"for","inputfield"),o(I,"class","inclusively-hidden"),o(y,"id","inputfield-error"),o(y,"class","form-error"),o(w,"id","email"),o(w,"name","email"),o(w,"class","mt-input form-field error"),o(w,"aria-invalid","true"),o(w,"aria-describedby","inputfield-hint inputfield-error"),o(n,"class","mt-form form-layout")},m(i,v){T(i,r,v),E(l,r,null),u(r,a),u(r,n),u(n,m),u(n,b),p&&p.m(n,null),u(n,e),u(n,t),u(n,f),u(n,d),u(d,_),u(n,z),c&&c.m(n,null),u(n,H),u(n,y),u(y,I),u(y,B),u(y,L),u(n,G),u(n,w),S=!0,A||(J=V(O=X.call(null,r,s[5])),A=!0)},p(i,v){const q={};v&2&&(q.errors=i[1]),v&16&&(q.heading=i[4]),l.$set(q),i[3]?p?p.p(i,v):(p=R(i),p.c(),p.m(n,e)):p&&(p.d(1),p=null),(!S||v&4)&&$!==($=i[2]+"")&&P(_,$),i[3]?c?c.p(i,v):(c=U(i),c.c(),c.m(n,H)):c&&(c.d(1),c=null),(!S||v&2)&&k!==(k=i[1][0].message+"")&&P(L,k),O&&W(O.update)&&v&32&&O.update.call(null,i[5])},i(i){S||(M(l.$$.fragment,i),S=!0)},o(i){C(l.$$.fragment,i),S=!1},d(i){i&&F(r),D(l),p&&p.d(),c&&c.d(),A=!1,J()}}}function le(s){let r,l,a,n,m,b;return l=new Y({props:{errors:s[1],heading:s[4],linkToFields:!1}}),{c(){r=g("div"),N(l.$$.fragment)},m(e,t){T(e,r,t),E(l,r,null),n=!0,m||(b=V(a=X.call(null,r,s[5])),m=!0)},p(e,t){const f={};t&2&&(f.errors=e[1]),t&16&&(f.heading=e[4]),l.$set(f),a&&W(a.update)&&t&32&&a.update.call(null,e[5])},i(e){n||(M(l.$$.fragment,e),n=!0)},o(e){C(l.$$.fragment,e),n=!1},d(e){e&&F(r),D(l),m=!1,b()}}}function ae(s){let r,l,a,n,m,b;return r=new ne({props:{title:"Components/Error Summary",args:{label:"E-post",helpText:"",errorMessage:"Fyll inn dette feltet.",heading:"Feil oppstod",errors:[{fieldName:"name",message:"Fyll inn navn"},{fieldName:"phone",message:"Fyll inn telefonnummer"},{fieldName:"email",message:"Fyll inn epost"}],disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}}}),a=new Q({props:{name:"Normal",$$slots:{default:[te,({errors:e,label:t,helpText:f,heading:d,disableCss:$,errorMessage:_})=>({1:e,2:t,3:f,4:d,5:$,6:_}),({errors:e,label:t,helpText:f,heading:d,disableCss:$,errorMessage:_})=>(e?2:0)|(t?4:0)|(f?8:0)|(d?16:0)|($?32:0)|(_?64:0)]},$$scope:{ctx:s}}}),m=new Q({props:{name:"Text only",$$slots:{default:[le,({errors:e,label:t,helpText:f,heading:d,disableCss:$,errorMessage:_})=>({1:e,2:t,3:f,4:d,5:$,6:_}),({errors:e,label:t,helpText:f,heading:d,disableCss:$,errorMessage:_})=>(e?2:0)|(t?4:0)|(f?8:0)|(d?16:0)|($?32:0)|(_?64:0)]},$$scope:{ctx:s}}}),{c(){N(r.$$.fragment),l=h(),N(a.$$.fragment),n=h(),N(m.$$.fragment)},m(e,t){E(r,e,t),T(e,l,t),E(a,e,t),T(e,n,t),E(m,e,t),b=!0},p(e,[t]){const f={};t&190&&(f.$$scope={dirty:t,ctx:e}),a.$set(f);const d={};t&178&&(d.$$scope={dirty:t,ctx:e}),m.$set(d)},i(e){b||(M(r.$$.fragment,e),M(a.$$.fragment,e),M(m.$$.fragment,e),b=!0)},o(e){C(r.$$.fragment,e),C(a.$$.fragment,e),C(m.$$.fragment,e),b=!1},d(e){e&&(F(l),F(n)),D(r,e),D(a,e),D(m,e)}}}function se(s){return[]}class ie extends Z{constructor(r){super(),x(this,r,se,ae,ee,{})}}const j=re(ie,{meta:{title:"Components/Error Summary"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <FormErrorSummary {errors} {heading} />

  <form class="mt-form form-layout">
    <label class="mt-label" for="inputfield"> Navn </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <input
      id="inputfield"
      name="name"
      class="mt-input form-field"
      aria-describedby="inputfield-hint inputfield-error" />

    <label class="mt-label" for="inputfield">
      {label}
    </label>

    {#if helpText}
      <div class="hint">
        {@html helpText}
      </div>
    {/if}

    <span id="inputfield-error" class="form-error">
      <span class="inclusively-hidden">Feilmelding:</span>
      {errors[0].message}
    </span>

    <input
      id="email"
      name="email"
      class="mt-input form-field error"
      aria-invalid="true"
      aria-describedby="inputfield-hint inputfield-error" />
  </form>
</div>`,tags:[],hasArgs:!0},TextOnly:{name:"Text only",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <FormErrorSummary {errors} {heading} linkToFields={false} />
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","FormErrorSummary"]}),ce=j.meta,$e=["Normal","TextOnly"],_e=j.stories.Normal,ge=j.stories.TextOnly;export{_e as Normal,ge as TextOnly,$e as __namedExportsOrder,ce as default};
