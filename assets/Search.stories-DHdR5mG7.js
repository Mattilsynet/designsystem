import{a as H,t as M}from"./props-C0tvRuaH.js";import{p as O,a as R,c as t,s as l}from"./runtime-h0AMGDom.js";import{a as g}from"./actions-EVnswImp.js";import{i as q}from"./lifecycle-DurhAeVF.js";import{d as z,c as A}from"./create-runtime-stories-BSZiRmpa.js";import{w as G}from"./utils-CMlWd0Pf.js";import{S as r}from"./Search-BB_luxE-.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./input-Bhn6W10B.js";import"./this-B-g0KYFp.js";import"./Label-D8X8gfhz.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:J,meta:K}=z({title:"Components/Form/Search",args:{label:"Skriv inn navnet på skjema",helpText:"Her kan du søke etter artikler og veiledere",placeholder:"Søk etter artikler, skjemaer, pdfer og veiledere, veivisere, rapporter og mer",searchButtonText:"Søk",disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},disableCss:{control:"boolean"}}});var L=M('<div><article class="svelte-1lkh4gi"><form class="mt-form form-layout"><!></form></article> <article class="svelte-1lkh4gi"><form class="mt-form form-layout"><!></form></article> <article class="svelte-1lkh4gi"><form class="mt-form form-layout"><!></form></article> <article class="svelte-1lkh4gi"><form class="mt-form form-layout"><!></form></article> <article class="svelte-1lkh4gi"><form class="mt-form form-layout"><!></form></article></div>');function p(u,d){O(d,!1),q(),J(u,{name:"Search input",children:(h,e)=>{let o=()=>e==null?void 0:e().label,v=()=>e==null?void 0:e().disableCss,a=()=>e==null?void 0:e().searchButtonText,_=()=>e==null?void 0:e().placeholder,x=()=>e==null?void 0:e().helpText;var n=L(),s=t(n),S=t(s),T=t(S);r(T,{name:"inputfield_0",get searchButtonText(){return a()}});var i=l(s,2),b=t(i),k=t(b);r(k,{name:"inputfield_1",get label(){return o()}});var m=l(i,2),y=t(m),B=t(y);r(B,{name:"inputfield_2",get label(){return o()},get searchButtonText(){return a()},searchString:"test",shouldFocus:!0});var c=l(m,2),I=t(c),C=t(I);r(C,{name:"inputfield_3",get label(){return o()},get placeholder(){return _()},get searchButtonText(){return a()}});var w=l(c,2),F=t(w),j=t(F);r(j,{name:"inputfield_4",get label(){return o()},get helpText(){return x()},get searchButtonText(){return a()}}),g(n,(D,E)=>{var f;return(f=G)==null?void 0:f(D,E)},v),H(h,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_0" {searchButtonText} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_1" {label} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch
        name="inputfield_2"
        {label}
        {searchButtonText}
        searchString="test"
        shouldFocus />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_3" {label} {placeholder} {searchButtonText} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_4" {label} {helpText} {searchButtonText} />
    </form>
  </article>
</div>`}}}),R()}p.__docgen={version:3,name:"Search.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N=A(p,K),ce=["SearchInput"],fe=N.SearchInput;export{fe as SearchInput,ce as __namedExportsOrder,K as default};
