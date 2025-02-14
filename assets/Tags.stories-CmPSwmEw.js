import{p as l,d as j,a as k,t as F}from"./props-C0tvRuaH.js";import{b as w,p as L,a as N,f as S,g as q,d as b,n as A,s as t,c as a}from"./runtime-h0AMGDom.js";import{a as D}from"./actions-EVnswImp.js";import{d as I,c as W}from"./create-runtime-stories-BSZiRmpa.js";import{T as r}from"./Tags-Bsg0Ioyw.js";import{w as G}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";let o=w(l([{text:"Sverige",ariaLabel:"Fjern Sverige fra listen"},{text:"Norge",ariaLabel:"Fjern Norge fra listen"},{text:"Finland",ariaLabel:"Fjern Finland fra listen"}]));function M(){b(o,l([{text:"Sverige",ariaLabel:"Fjern Sverige fra listen"},{text:"Norge",ariaLabel:"Fjern Norge fra listen"},{text:"Finland",ariaLabel:"Fjern Finland fra listen"}]))}const{Story:$,meta:E}=I({title:"Components/Tags",args:{tags:[{text:"Hund",color:"no-color"},{text:"Katt",color:"no-color"},{text:"Ilder",color:"no-color"}],tagsWithColor:[{text:"PDF",color:"info"},{text:"Altinn",color:"success"},{text:"Altinn",color:"warning"},{text:"Altinn",color:"error"},{text:"Mattilsynets skjematjenester",color:"neutral"}],isClosable:!0,disableCss:!1},argTypes:{tags:{control:"object"},isClosable:{control:"boolean"},disableCss:{control:"boolean"}}});var H=F('<div></div> <h1 class="mt-h1">Tags</h1> <div class="tags-wrapper svelte-1yrqysb"><article><h2 class="mt-h2 svelte-1yrqysb">Tags</h2> <!></article> <article><h2 class="mt-h2 svelte-1yrqysb">Lukkbare tags</h2> <!> <button class="mt-button mt-button--link svelte-1yrqysb">Gjenopprett tags</button></article> <article><h2 class="mt-h2 svelte-1yrqysb">Tags med forskjellige farger</h2> <!></article></div>',1);function p(h,v){L(v,!0),$(h,{name:"Normal",children:(u,e=A)=>{var n=H(),i=S(n);D(i,(s,y)=>{var d;return(d=G)==null?void 0:d(s,y)},()=>e().disableCss);var f=t(i,4),c=a(f),_=t(a(c),2);r(_,{get tags(){return e().tags}});var g=t(c,2),m=t(a(g),2);r(m,{get isClosable(){return e().isClosable},get tags(){return q(o)},set tags(s){b(o,l(s))}});var x=t(m,2);x.__click=M;var T=t(g,2),C=t(a(T),2);r(C,{get tags(){return e().tagsWithColor}}),k(u,n)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}></div>
<h1 class="mt-h1">Tags</h1>
<div class="tags-wrapper">
  <article>
    <h2 class="mt-h2">Tags</h2>
    <Tags tags={args.tags} />
  </article>
  <article>
    <h2 class="mt-h2">Lukkbare tags</h2>
    <Tags bind:tags={closableTags} isClosable={args.isClosable} />
    <button class="mt-button mt-button--link" onclick={reset}>Gjenopprett tags</button>
  </article>
  <article>
    <h2 class="mt-h2">Tags med forskjellige farger</h2>
    <Tags tags={args.tagsWithColor} />
  </article>
</div>`}}}),N()}j(["click"]);p.__docgen={version:3,name:"Tags.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const K=W(p,E),et=["Normal"],at=K.Normal;export{at as Normal,et as __namedExportsOrder,E as default};
