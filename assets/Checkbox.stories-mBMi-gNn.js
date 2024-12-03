import{S as z,i as G,s as H,c as q,m as R,t as E,a as S,d as D,h as L,j as P,b as A,k as Q,e as J}from"./index-D8riOviU.js";import{s as T,i as I,d as N,e as v,a as k,b}from"./lifecycle-CcifP0R7.js";import{p as U,M as X,S as j}from"./collect-stories-BMzKwk3M.js";import{C as F}from"./Checkbox-_9qRH8JF.js";import{w as B}from"./utils-CMlWd0Pf.js";import"./each-Dzkb-YsG.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./utils-DjM8Id44.js";function Y(t){let o,u,p,c,h,g,e,s,a,l,f,i,d,_,n,m,C;e=new F({props:{name:w,label:t[2],helpText:t[3],options:t[7],isRequired:t[9],textOptional:t[10]}}),e.$on("onChange",ee);function x(r){t[1](r)}let W={name:w,label:t[2],isRequired:t[9],textOptional:t[10],options:t[8],helpText:t[3],theme:"button"};return t[0]!==void 0&&(W.value=t[0]),i=new F({props:W}),L.push(()=>P(i,"value",x)),{c(){o=v("div"),u=v("h1"),u.textContent="Checkbox",p=T(),c=v("h2"),c.textContent="Theme - checkbox",h=T(),g=v("form"),q(e.$$.fragment),s=T(),a=v("h2"),a.textContent="Theme - button",l=T(),f=v("form"),q(i.$$.fragment),k(u,"class","mt-h1"),k(c,"id","theme"),k(c,"class","mt-h2 svelte-1oh2qt4"),k(g,"class","mt-form"),k(a,"id","theme"),k(a,"class","mt-h2 svelte-1oh2qt4"),k(f,"action",""),k(f,"class","mt-form form-layout")},m(r,$){I(r,o,$),b(o,u),b(o,p),b(o,c),b(o,h),b(o,g),R(e,g,null),b(o,s),b(o,a),b(o,l),b(o,f),R(i,f,null),n=!0,m||(C=A(_=B.call(null,o,t[4])),m=!0)},p(r,$){const M={};$&4&&(M.label=r[2]),$&8&&(M.helpText=r[3]),$&128&&(M.options=r[7]),$&512&&(M.isRequired=r[9]),$&1024&&(M.textOptional=r[10]),e.$set(M);const O={};$&4&&(O.label=r[2]),$&512&&(O.isRequired=r[9]),$&1024&&(O.textOptional=r[10]),$&256&&(O.options=r[8]),$&8&&(O.helpText=r[3]),!d&&$&1&&(d=!0,O.value=r[0],Q(()=>d=!1)),i.$set(O),_&&J(_.update)&&$&16&&_.update.call(null,r[4])},i(r){n||(E(e.$$.fragment,r),E(i.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),S(i.$$.fragment,r),n=!1},d(r){r&&N(o),D(e),D(i),m=!1,C()}}}function Z(t){let o,u,p,c,h,g,e,s,a,l,f,i,d,_;return h=new F({props:{name:w,label:t[2],helpText:t[3],options:t[7],isRequired:t[9],hiddenErrorText:t[6],textOptional:t[10],error:{key:w,message:t[5]}}}),l=new F({props:{name:w,label:t[2],helpText:t[3],isRequired:t[9],hiddenErrorText:t[6],textOptional:t[10],options:t[8],error:{key:w,message:t[5]},theme:"button"}}),{c(){o=v("div"),u=v("h2"),u.textContent="Theme - checkbox",p=T(),c=v("form"),q(h.$$.fragment),g=T(),e=v("h2"),e.textContent="Theme - button",s=T(),a=v("form"),q(l.$$.fragment),k(u,"id","theme"),k(u,"class","mt-h2 svelte-1oh2qt4"),k(c,"class","mt-form"),k(e,"id","theme"),k(e,"class","mt-h2 svelte-1oh2qt4"),k(a,"class","mt-form")},m(n,m){I(n,o,m),b(o,u),b(o,p),b(o,c),R(h,c,null),b(o,g),b(o,e),b(o,s),b(o,a),R(l,a,null),i=!0,d||(_=A(f=B.call(null,o,t[4])),d=!0)},p(n,m){const C={};m&4&&(C.label=n[2]),m&8&&(C.helpText=n[3]),m&128&&(C.options=n[7]),m&512&&(C.isRequired=n[9]),m&64&&(C.hiddenErrorText=n[6]),m&1024&&(C.textOptional=n[10]),m&32&&(C.error={key:w,message:n[5]}),h.$set(C);const x={};m&4&&(x.label=n[2]),m&8&&(x.helpText=n[3]),m&512&&(x.isRequired=n[9]),m&64&&(x.hiddenErrorText=n[6]),m&1024&&(x.textOptional=n[10]),m&256&&(x.options=n[8]),m&32&&(x.error={key:w,message:n[5]}),l.$set(x),f&&J(f.update)&&m&16&&f.update.call(null,n[4])},i(n){i||(E(h.$$.fragment,n),E(l.$$.fragment,n),i=!0)},o(n){S(h.$$.fragment,n),S(l.$$.fragment,n),i=!1},d(n){n&&N(o),D(h),D(l),d=!1,_()}}}function y(t){let o,u,p,c,h,g;return o=new X({props:{title:"Components/Form/Checkbox",args:{label:"Kan vi kontakte deg?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",hiddenErrorText:"Feilmelding",isRequired:!1,textOptional:"Valgfitt",options:[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}],buttonOptions:[{text:"Ja",value:"1"},{text:"Nei",value:"2"}],disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},hiddenErrorText:{control:"text"},isRequired:{control:"boolean"},textOptional:{control:"text"},options:{control:"object"},buttonOptions:{control:"object"},disableCss:{control:"boolean"}}}}),p=new j({props:{name:"Normal",$$slots:{default:[Y,({label:e,helpText:s,disableCss:a,options:l,buttonOptions:f,isRequired:i,textOptional:d})=>({2:e,3:s,4:a,7:l,8:f,9:i,10:d}),({label:e,helpText:s,disableCss:a,options:l,buttonOptions:f,isRequired:i,textOptional:d})=>(e?4:0)|(s?8:0)|(a?16:0)|(l?128:0)|(f?256:0)|(i?512:0)|(d?1024:0)]},$$scope:{ctx:t}}}),h=new j({props:{name:"Checkbox with error",$$slots:{default:[Z,({label:e,helpText:s,disableCss:a,errorMessage:l,hiddenErrorText:f,options:i,buttonOptions:d,isRequired:_,textOptional:n})=>({2:e,3:s,4:a,5:l,6:f,7:i,8:d,9:_,10:n}),({label:e,helpText:s,disableCss:a,errorMessage:l,hiddenErrorText:f,options:i,buttonOptions:d,isRequired:_,textOptional:n})=>(e?4:0)|(s?8:0)|(a?16:0)|(l?32:0)|(f?64:0)|(i?128:0)|(d?256:0)|(_?512:0)|(n?1024:0)]},$$scope:{ctx:t}}}),{c(){q(o.$$.fragment),u=T(),q(p.$$.fragment),c=T(),q(h.$$.fragment)},m(e,s){R(o,e,s),I(e,u,s),R(p,e,s),I(e,c,s),R(h,e,s),g=!0},p(e,[s]){const a={};s&3997&&(a.$$scope={dirty:s,ctx:e}),p.$set(a);const l={};s&4092&&(l.$$scope={dirty:s,ctx:e}),h.$set(l)},i(e){g||(E(o.$$.fragment,e),E(p.$$.fragment,e),E(h.$$.fragment,e),g=!0)},o(e){S(o.$$.fragment,e),S(p.$$.fragment,e),S(h.$$.fragment,e),g=!1},d(e){e&&(N(u),N(c)),D(o,e),D(p,e),D(h,e)}}}const w="checkbox";function ee(t){console.log(t.detail)}function te(t,o,u){let p=[];function c(h){p=h,u(0,p)}return[p,c]}class K extends z{constructor(o){super(),G(this,o,te,y,H,{})}}K.__docgen={version:3,name:"Checkbox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const V=U(K,{meta:{title:"Components/Form/Checkbox"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Checkbox</h1>
  <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
  <form class="mt-form">
    <Checkbox
      {name}
      {label}
      {helpText}
      {options}
      {isRequired}
      {textOptional}
      on:onChange={handleOnChange} />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form action="" class="mt-form form-layout">
    <Checkbox
      {name}
      {label}
      {isRequired}
      {textOptional}
      options={buttonOptions}
      {helpText}
      theme="button"
      bind:value={buttonCheckboxValue} />
  </form>
</div>`,tags:[],hasArgs:!0},CheckboxWithError:{name:"Checkbox with error",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h2 id="theme" class="mt-h2">Theme - checkbox</h2>
  <form class="mt-form">
    <Checkbox
      {name}
      {label}
      {helpText}
      {options}
      {isRequired}
      {hiddenErrorText}
      {textOptional}
      error={{ key: name, message: errorMessage }}
      let:isRequired />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form class="mt-form">
    <Checkbox
      {name}
      {label}
      {helpText}
      {isRequired}
      {hiddenErrorText}
      {textOptional}
      options={buttonOptions}
      error={{ key: name, message: errorMessage }}
      theme="button" />
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Checkbox","wrapInShadowDom"]}),fe=V.meta,pe=["Normal","CheckboxWithError"],ue=V.stories.Normal,ce=V.stories.CheckboxWithError;export{ce as CheckboxWithError,ue as Normal,pe as __namedExportsOrder,fe as default};
