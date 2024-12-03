import{S as z,i as L,s as P,c as w,m as O,t as C,a as S,d as y,h as W,j as q,b as A,k as j,e as J}from"./index-D8riOviU.js";import{s as R,i as I,d as N,e as v,a as _,b as f}from"./lifecycle-CcifP0R7.js";import{p as Q,M as U,S as F}from"./collect-stories-BMzKwk3M.js";import{R as V}from"./RadioGroup-BLUVfYYc.js";import{w as H}from"./utils-CMlWd0Pf.js";import"./each-Dzkb-YsG.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./utils-DjM8Id44.js";function X(o){let t,p,d,m,i,g,e,a,l,s,b,$,c,k,T,D,E;e=new V({props:{options:o[1],name:x,helpText:o[6],label:o[5],error:void 0,textOptional:"Valgfritt",theme:"radio"}});function r(n){o[3](n)}let h={options:o[2],name:o[9].buttonRadio.name,helpText:o[6],label:o[9].buttonRadio.label,error:void 0,textOptional:o[9].buttonRadio.textOptional,theme:"button"};return o[0]!==void 0&&(h.value=o[0]),$=new V({props:h}),W.push(()=>q($,"value",r)),{c(){t=v("div"),p=v("h1"),p.textContent="Radioknapper",d=R(),m=v("h2"),m.textContent="Theme - radio",i=R(),g=v("form"),w(e.$$.fragment),a=R(),l=v("h2"),l.textContent="Theme - button",s=R(),b=v("form"),w($.$$.fragment),_(p,"class","mt-h1"),_(m,"class","mt-h2"),_(g,"class","mt-form form-layout"),_(l,"id","theme"),_(l,"class","mt-h2 svelte-1oh2qt4"),_(b,"action",""),_(b,"class","mt-form form-layout")},m(n,u){I(n,t,u),f(t,p),f(t,d),f(t,m),f(t,i),f(t,g),O(e,g,null),f(t,a),f(t,l),f(t,s),f(t,b),O($,b,null),T=!0,D||(E=A(k=H.call(null,t,o[7])),D=!0)},p(n,u){const B={};u&64&&(B.helpText=n[6]),u&32&&(B.label=n[5]),e.$set(B);const M={};u&512&&(M.name=n[9].buttonRadio.name),u&64&&(M.helpText=n[6]),u&512&&(M.label=n[9].buttonRadio.label),u&512&&(M.textOptional=n[9].buttonRadio.textOptional),!c&&u&1&&(c=!0,M.value=n[0],j(()=>c=!1)),$.$set(M),k&&J(k.update)&&u&128&&k.update.call(null,n[7])},i(n){T||(C(e.$$.fragment,n),C($.$$.fragment,n),T=!0)},o(n){S(e.$$.fragment,n),S($.$$.fragment,n),T=!1},d(n){n&&N(t),y(e),y($),D=!1,E()}}}function Y(o){let t,p,d,m,i,g,e,a,l,s,b,$,c,k,T;i=new V({props:{options:o[1],name:x,helpText:o[6],label:o[5],error:{key:x,message:o[8]},textOptional:"valgfritt"}});function D(r){o[4](r)}let E={options:o[2],name:o[9].buttonRadio.name,helpText:o[6],label:o[9].buttonRadio.label,error:{key:x,message:o[8]},textOptional:o[9].buttonRadio.textOptional,theme:"button"};return o[0]!==void 0&&(E.value=o[0]),s=new V({props:E}),W.push(()=>q(s,"value",D)),{c(){t=v("div"),p=v("h2"),p.textContent="Theme - radio",d=R(),m=v("form"),w(i.$$.fragment),g=R(),e=v("h2"),e.textContent="Theme - button",a=R(),l=v("form"),w(s.$$.fragment),_(p,"class","mt-h2"),_(m,"class","mt-form form-layout"),_(e,"id","theme"),_(e,"class","mt-h2 svelte-1oh2qt4"),_(l,"class","mt-form form-layout")},m(r,h){I(r,t,h),f(t,p),f(t,d),f(t,m),O(i,m,null),f(t,g),f(t,e),f(t,a),f(t,l),O(s,l,null),c=!0,k||(T=A($=H.call(null,t,o[7])),k=!0)},p(r,h){const n={};h&64&&(n.helpText=r[6]),h&32&&(n.label=r[5]),h&256&&(n.error={key:x,message:r[8]}),i.$set(n);const u={};h&512&&(u.name=r[9].buttonRadio.name),h&64&&(u.helpText=r[6]),h&512&&(u.label=r[9].buttonRadio.label),h&256&&(u.error={key:x,message:r[8]}),h&512&&(u.textOptional=r[9].buttonRadio.textOptional),!b&&h&1&&(b=!0,u.value=r[0],j(()=>b=!1)),s.$set(u),$&&J($.update)&&h&128&&$.update.call(null,r[7])},i(r){c||(C(i.$$.fragment,r),C(s.$$.fragment,r),c=!0)},o(r){S(i.$$.fragment,r),S(s.$$.fragment,r),c=!1},d(r){r&&N(t),y(i),y(s),k=!1,T()}}}function Z(o){let t,p,d,m,i,g;return t=new U({props:{title:"Components/Form/RadioButtons",args:{label:"Kan vi kontakte deg?",helpText:"Beskriv kort og konkret hva du har observert og hvor alvorlig hendelsen er. Vær oppmerksom på den ansvarlige ofte får se meldingen.",errorMessage:"Fyll inn dette feltet.",buttonRadio:{label:"Reiser du selv med dyret?",helpText:"Hjelpetekst",errorMessage:"Fyll inn dette feltet.",name:"travelWithAnimal",textOptional:"Valgfritt"},disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}}}),d=new F({props:{name:"Normal",$$slots:{default:[X,({label:e,helpText:a,disableCss:l,args:s})=>({5:e,6:a,7:l,9:s}),({label:e,helpText:a,disableCss:l,args:s})=>(e?32:0)|(a?64:0)|(l?128:0)|(s?512:0)]},$$scope:{ctx:o}}}),i=new F({props:{name:"Radio with error",$$slots:{default:[Y,({label:e,helpText:a,disableCss:l,errorMessage:s,args:b})=>({5:e,6:a,7:l,8:s,9:b}),({label:e,helpText:a,disableCss:l,errorMessage:s,args:b})=>(e?32:0)|(a?64:0)|(l?128:0)|(s?256:0)|(b?512:0)]},$$scope:{ctx:o}}}),{c(){w(t.$$.fragment),p=R(),w(d.$$.fragment),m=R(),w(i.$$.fragment)},m(e,a){O(t,e,a),I(e,p,a),O(d,e,a),I(e,m,a),O(i,e,a),g=!0},p(e,[a]){const l={};a&1761&&(l.$$scope={dirty:a,ctx:e}),d.$set(l);const s={};a&2017&&(s.$$scope={dirty:a,ctx:e}),i.$set(s)},i(e){g||(C(t.$$.fragment,e),C(d.$$.fragment,e),C(i.$$.fragment,e),g=!0)},o(e){S(t.$$.fragment,e),S(d.$$.fragment,e),S(i.$$.fragment,e),g=!1},d(e){e&&(N(p),N(m)),y(t,e),y(d,e),y(i,e)}}}const x="radiobuttons";function ee(o,t,p){const d=[{text:"Dere kan kontakte meg",value:"yes"},{text:"Jeg ønsker å være anonym",value:"no"}];let m;const i=[{text:"Ja",value:"1"},{text:"Nei",value:"2"}];function g(a){m=a,p(0,m)}function e(a){m=a,p(0,m)}return[m,d,i,g,e]}class K extends z{constructor(t){super(),L(this,t,ee,Z,P,{})}}K.__docgen={version:3,name:"RadioButtons.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=Q(K,{meta:{title:"Components/Form/RadioButtons"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Radioknapper</h1>
  <h2 class="mt-h2">Theme - radio</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      {options}
      {name}
      {helpText}
      {label}
      error={undefined}
      textOptional="Valgfritt"
      theme="radio" />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form action="" class="mt-form form-layout">
    <RadioGroup
      options={buttonOptions}
      bind:value={buttonRadioValue}
      name={args.buttonRadio.name}
      {helpText}
      label={args.buttonRadio.label}
      error={undefined}
      textOptional={args.buttonRadio.textOptional}
      theme="button" />
  </form>
</div>`,tags:[],hasArgs:!0},RadioWithError:{name:"Radio with error",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h2 class="mt-h2">Theme - radio</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      {options}
      {name}
      {helpText}
      {label}
      error={{ key: name, message: errorMessage }}
      textOptional="valgfritt" />
  </form>
  <h2 id="theme" class="mt-h2">Theme - button</h2>
  <form class="mt-form form-layout">
    <RadioGroup
      options={buttonOptions}
      bind:value={buttonRadioValue}
      name={args.buttonRadio.name}
      {helpText}
      label={args.buttonRadio.label}
      error={{ key: name, message: errorMessage }}
      textOptional={args.buttonRadio.textOptional}
      theme="button" />
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","RadioGroup","wrapInShadowDom"]}),ue=G.meta,pe=["Normal","RadioWithError"],fe=G.stories.Normal,de=G.stories.RadioWithError;export{fe as Normal,de as RadioWithError,pe as __namedExportsOrder,ue as default};
