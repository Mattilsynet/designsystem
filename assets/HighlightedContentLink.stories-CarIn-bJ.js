import{a as i,t as b,c as w}from"./props-C0tvRuaH.js";import{p as E,f as p,a as J,s as u,c as a}from"./runtime-h0AMGDom.js";import{h as _}from"./html-CjI7j8Lz.js";import{a as x}from"./actions-EVnswImp.js";import{i as R}from"./lifecycle-DurhAeVF.js";import{d as M,c as O}from"./create-runtime-stories-BSZiRmpa.js";import{H as T}from"./HighlightedContentLink-Cenzmbxy.js";import{i as g}from"./testbilde-Dfgflfv9.js";import{w as k}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:H,meta:q}=M({title:"Innhold/Fremhevet innhold",args:{text:"<p>Haster det? Er det fare for at dyr dør eller blir påført store belastninger. Ring mattilsynet på tlf. <a class='mt-link' href='tel:22400000'>22 40 00 00</a> eller politiet <a class='mt-link' href='tel:02800'>02800</a></p>",title:"Dette er tittelen",shortTitle:"Dette er kort tittel",disableJs:!1,disableCss:!1},argTypes:{text:{control:"text"},title:{control:"text"},shortTitle:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}});var z=b('<main class="mt-main container layout-flex-col svelte-2j2j12"><h1 class="mt-h1">Fremhevet innhold med bilde</h1> <section class="layout-flex-col svelte-2j2j12"><!></section> <h2 class="mt-h2 svelte-2j2j12">Fremhevet innhold uten bilde</h2> <section class="layout-flex-col svelte-2j2j12"><!></section></main>'),B=b('<main class="mt-main container layout-flex-col svelte-2j2j12"><h1 class="mt-h1">Fremhevet innhold CTA type</h1> <section class="layout-flex-col svelte-2j2j12"><!></section> <h2 class="mt-h1 svelte-2j2j12">Fremhevet innhold CTA type med ekstern lenke</h2> <section class="layout-flex-col svelte-2j2j12"><!></section></main>'),G=b('<h2 class="mt-h2 svelte-2j2j12">Fremhevet innhold - promotion</h2> <main class="mt-main container layout-grid layout-grid--column-12 svelte-2j2j12"><section class="col-1-span-12 layout-grid layout-grid--column-12 highlighted svelte-2j2j12"><!></section></main>',1),K=b("<!> <!> <!>",1);function S(I,P){E(P,!1),R();var F=K(),L=p(F);H(L,{name:"Normal",children:(y,t)=>{let r=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().disableCss,h=()=>t==null?void 0:t().title,m=()=>t==null?void 0:t().shortTitle;var s=z(),o=u(a(s),2),v=a(o);T(v,{displayType:"normal",href:"https://www.mattilsynet.no",image:{src:g,alt:"Her er alt tekst til bildet"},headingClass:"mt-h3",get title(){return h()},get shortTitle(){return m()},children:(l,n)=>{var e=w(),c=p(e);_(c,r),i(l,e)},$$slots:{default:!0}});var C=u(o,4),d=a(C);T(d,{displayType:"normal",href:"https://www.mattilsynet.no",headingClass:"mt-h3",get title(){return h()},get shortTitle(){return m()},children:(l,n)=>{var e=w(),c=p(e);_(c,r),i(l,e)},$$slots:{default:!0}}),x(s,(l,n)=>{var e;return(e=k)==null?void 0:e(l,n)},f),i(y,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
  <h1 class="mt-h1">Fremhevet innhold med bilde</h1>
  <section class="layout-flex-col">
    <HighlightedContentLink
      displayType="normal"
      href="https://www.mattilsynet.no"
      image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
      headingClass="mt-h3"
      {title}
      {shortTitle}>
      {@html text}
    </HighlightedContentLink>
  </section>

  <h2 class="mt-h2">Fremhevet innhold uten bilde</h2>
  <section class="layout-flex-col">
    <HighlightedContentLink
      displayType="normal"
      href="https://www.mattilsynet.no"
      headingClass="mt-h3"
      {title}
      {shortTitle}>
      {@html text}
    </HighlightedContentLink>
  </section>
</main>`}}});var A=u(L,2);H(A,{name:"CTA type",children:(y,t)=>{let r=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().disableCss,h=()=>t==null?void 0:t().title,m=()=>t==null?void 0:t().shortTitle;var s=B(),o=u(a(s),2),v=a(o);T(v,{displayType:"cta",href:"https://www.mattilsynet.no",image:{src:g,alt:"Her er alt tekst til bildet"},headingClass:"mt-h3",get title(){return h()},get shortTitle(){return m()},children:(l,n)=>{var e=w(),c=p(e);_(c,r),i(l,e)},$$slots:{default:!0}});var C=u(o,4),d=a(C);T(d,{displayType:"cta",href:"https://www.nav.no",image:{src:g,alt:"Her er alt tekst til bildet"},headingClass:"mt-h3",get title(){return h()},get shortTitle(){return m()},children:(l,n)=>{var e=w(),c=p(e);_(c,r),i(l,e)},$$slots:{default:!0}}),x(s,(l,n)=>{var e;return(e=k)==null?void 0:e(l,n)},f),i(y,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<main use:wrapInShadowDom={disableCss} class="mt-main container layout-flex-col">
  <h1 class="mt-h1">Fremhevet innhold CTA type</h1>
  <section class="layout-flex-col">
    <HighlightedContentLink
      displayType="cta"
      href="https://www.mattilsynet.no"
      image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
      headingClass="mt-h3"
      {title}
      {shortTitle}>
      {@html text}
    </HighlightedContentLink>
  </section>
  <h2 class="mt-h1">Fremhevet innhold CTA type med ekstern lenke</h2>
  <section class="layout-flex-col">
    <HighlightedContentLink
      displayType="cta"
      href="https://www.nav.no"
      image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
      headingClass="mt-h3"
      {title}
      {shortTitle}>
      {@html text}
    </HighlightedContentLink>
  </section>
</main>`}}});var N=u(A,2);H(N,{name:"Campaign",children:(y,t)=>{let r=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().disableCss,h=()=>t==null?void 0:t().title,m=()=>t==null?void 0:t().shortTitle;var s=G(),o=u(p(s),2),v=a(o),C=a(v);T(C,{displayType:"campaign",href:"https://www.mattilsynet.no",class:"col-1-span-12 layout-grid layout-grid--column-12",image:{src:g,alt:"Her er alt tekst til bildet"},headingClass:"mt-h3",get title(){return h()},get shortTitle(){return m()},children:(d,l)=>{var n=w(),e=p(n);_(e,r),i(d,n)},$$slots:{default:!0}}),x(o,(d,l)=>{var n;return(n=k)==null?void 0:n(d,l)},f),i(y,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<h2 class="mt-h2">Fremhevet innhold - promotion</h2>
<main
  use:wrapInShadowDom={disableCss}
  class="mt-main container layout-grid layout-grid--column-12">
  <section class="col-1-span-12 layout-grid layout-grid--column-12 highlighted">
    <HighlightedContentLink
      displayType="campaign"
      href="https://www.mattilsynet.no"
      class="col-1-span-12 layout-grid layout-grid--column-12"
      image={{ src: imageFile, alt: 'Her er alt tekst til bildet' }}
      headingClass="mt-h3"
      {title}
      {shortTitle}>
      {@html text}
    </HighlightedContentLink>
  </section>
</main>`}}}),i(I,F),J()}S.__docgen={version:3,name:"HighlightedContentLink.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=O(S,q),ht=["Normal","CTAType","Campaign"],mt=j.Normal,dt=j.CTAType,ct=j.Campaign;export{dt as CTAType,ct as Campaign,mt as Normal,ht as __namedExportsOrder,q as default};
