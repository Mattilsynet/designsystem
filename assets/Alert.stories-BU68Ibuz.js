import{a as n,t as l,m as w}from"./props-C0tvRuaH.js";import{p as R,f as _,a as T,s as c,c as k}from"./runtime-h0AMGDom.js";import{h as C}from"./html-CjI7j8Lz.js";import{a as y}from"./actions-EVnswImp.js";import{i as q}from"./lifecycle-DurhAeVF.js";import{d as z,c as B}from"./create-runtime-stories-BSZiRmpa.js";import{w as A}from"./utils-CMlWd0Pf.js";import{A as h}from"./Alert-BGu8mIhH.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./index-BK-JItfK.js";const{Story:D,meta:F}=z({title:"Components/Alert",component:h,argTypes:{disableCss:{control:"boolean"},alerts:{control:"object"}},args:{alerts:[{"data-color":"info",text:'<h1 class="mt-h4">Kan legge inn tittel</h1><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Andre paragrafen. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>',hasClose:!1},{"data-color":"success",text:'<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>',hasClose:!1},{"data-color":"warning",text:'<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a>. Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a> Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>',hasClose:!1},{"data-color":"danger",text:'<p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p><p>Paragrafen kommer under. Det skal være en <a href="https://www.mattilsynet.no">lenke til en side</a></p>',hasClose:!1}],disableCss:!1}});var G=l('<button type="button" aria-label="Lukk"></button>'),H=l("<p>Informasjon som kommer på en linje</p> <!>",1),J=l('<button type="button" aria-label="Lukk"></button>'),Q=l("<!> <!>",1),U=l('<div class="wrapper svelte-cur1ju"><!> <!></div>'),V=l('<button type="button" aria-label="Lukk"></button>'),X=l("<!> <!>",1),Y=l('<div class="wrapper svelte-cur1ju"><!></div>'),Z=l('<button type="button" aria-label="Lukk"></button>'),g=l("<!> <!>",1),$=l('<div class="wrapper svelte-cur1ju"><!></div>'),tt=l('<button type="button" aria-label="Lukk"></button>'),et=l("<!> <!>",1),at=l('<div class="wrapper svelte-cur1ju"><!></div>'),rt=l('<button type="button" aria-label="Lukk"></button>'),ot=l("<!> <!>",1),st=l('<div class="wrapper svelte-cur1ju"><!></div>'),nt=l("<!> <!> <!> <!> <!>",1);function W(E,K){R(K,!1),q();var I=nt(),L=_(I);D(L,{name:"Normal",children:(f,t)=>{let a=()=>t==null?void 0:t().alerts,b=()=>t==null?void 0:t().disableCss;var s=U(),m=k(s);h(m,{get"data-color"(){return a()[0]["data-color"]},children:(i,e)=>{var o=H(),v=c(_(o),2);{var p=r=>{var u=G();n(r,u)};w(v,r=>{a()[0].hasClose&&r(p)})}n(i,o)},$$slots:{default:!0}});var d=c(m,2);h(d,{get"data-color"(){return a()[0]["data-color"]},children:(i,e)=>{var o=Q(),v=_(o);C(v,()=>a()[0].text);var p=c(v,2);{var r=u=>{var O=J();n(u,O)};w(p,u=>{a()[0].hasClose&&u(r)})}n(i,o)},$$slots:{default:!0}}),y(s,(i,e)=>{var o;return(o=A)==null?void 0:o(i,e)},b),n(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="wrapper">
  <Alert data-color={alerts[0]['data-color']}>
    <p>Informasjon som kommer på en linje</p>
    {#if alerts[0].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
  <Alert data-color={alerts[0]['data-color']}>
    {@html alerts[0].text}
    {#if alerts[0].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
</div>`}}});var S=c(L,2);D(S,{name:"Information",children:(f,t)=>{let a=()=>t==null?void 0:t().alerts,b=()=>t==null?void 0:t().disableCss;var s=Y(),m=k(s);h(m,{get"data-color"(){return a()[0]["data-color"]},children:(d,i)=>{var e=X(),o=_(e);C(o,()=>a()[0].text);var v=c(o,2);{var p=r=>{var u=V();n(r,u)};w(v,r=>{a()[0].hasClose&&r(p)})}n(d,e)},$$slots:{default:!0}}),y(s,(d,i)=>{var e;return(e=A)==null?void 0:e(d,i)},b),n(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="wrapper">
  <Alert data-color={alerts[0]['data-color']}>
    {@html alerts[0].text}
    {#if alerts[0].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
</div>`}}});var j=c(S,2);D(j,{name:"Success",children:(f,t)=>{let a=()=>t==null?void 0:t().alerts,b=()=>t==null?void 0:t().disableCss;var s=$(),m=k(s);h(m,{get"data-color"(){return a()[1]["data-color"]},children:(d,i)=>{var e=g(),o=_(e);C(o,()=>a()[1].text);var v=c(o,2);{var p=r=>{var u=Z();n(r,u)};w(v,r=>{a()[1].hasClose&&r(p)})}n(d,e)},$$slots:{default:!0}}),y(s,(d,i)=>{var e;return(e=A)==null?void 0:e(d,i)},b),n(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="wrapper">
  <Alert data-color={alerts[1]['data-color']}>
    {@html alerts[1].text}
    {#if alerts[1].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
</div>`}}});var N=c(j,2);D(N,{name:"Warning",children:(f,t)=>{let a=()=>t==null?void 0:t().alerts,b=()=>t==null?void 0:t().disableCss;var s=at(),m=k(s);h(m,{get"data-color"(){return a()[2]["data-color"]},children:(d,i)=>{var e=et(),o=_(e);C(o,()=>a()[2].text);var v=c(o,2);{var p=r=>{var u=tt();n(r,u)};w(v,r=>{a()[2].hasClose&&r(p)})}n(d,e)},$$slots:{default:!0}}),y(s,(d,i)=>{var e;return(e=A)==null?void 0:e(d,i)},b),n(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="wrapper">
  <Alert data-color={alerts[2]['data-color']}>
    {@html alerts[2].text}
    {#if alerts[2].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
</div>`}}});var M=c(N,2);D(M,{name:"Danger",children:(f,t)=>{let a=()=>t==null?void 0:t().alerts,b=()=>t==null?void 0:t().disableCss;var s=st(),m=k(s);h(m,{get"data-color"(){return a()[3]["data-color"]},children:(d,i)=>{var e=ot(),o=_(e);C(o,()=>a()[3].text);var v=c(o,2);{var p=r=>{var u=rt();n(r,u)};w(v,r=>{a()[3].hasClose&&r(p)})}n(d,e)},$$slots:{default:!0}}),y(s,(d,i)=>{var e;return(e=A)==null?void 0:e(d,i)},b),n(f,s)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="wrapper">
  <Alert data-color={alerts[3]['data-color']}>
    {@html alerts[3].text}
    {#if alerts[3].hasClose}
      <button type="button" aria-label="Lukk"></button>
    {/if}
  </Alert>
</div>`}}}),n(E,I),T()}W.__docgen={version:3,name:"Alert.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const x=B(W,F),wt=["Normal","Information","Success","Warning","Danger"],kt=x.Normal,Ct=x.Information,yt=x.Success,At=x.Warning,Dt=x.Danger;export{Dt as Danger,Ct as Information,kt as Normal,yt as Success,At as Warning,wt as __namedExportsOrder,F as default};
