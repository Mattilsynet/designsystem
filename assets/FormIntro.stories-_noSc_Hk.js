import{a as r,t as x,m as L,s as A,c as E}from"./props-C0tvRuaH.js";import{p as W,f as T,a as X,t as F,s as k,c as l}from"./runtime-h0AMGDom.js";import{h as C}from"./html-CjI7j8Lz.js";import{a as b}from"./actions-EVnswImp.js";import{s as Y}from"./attributes-Cx6y8_P7.js";import{i as Z}from"./lifecycle-DurhAeVF.js";import{d as g,c as $}from"./create-runtime-stories-BSZiRmpa.js";import{C as O}from"./CardArticle-DCXPdwe0.js";import{w as y}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:w,meta:tt}=g({title:"Innhold/Skjemaforside",args:{title:"Varsle om piggtrådgjerder",intro:"<p>Dette er introen</p>",text:`<p>Du bør varsle Mattilsynet hvis du oppdager</p>
           <ul>
            <li>at noen setter opp nye piggtrådgjerder</li>
            <li>eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</li>
           </ul>`,moreText:`<h2>Du bør varsle</h2>
               <p>At noen setter opp nye piggtrådgjerder</p>
               <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`,formLinkUrl:"http://www.mattilsynet.no",formLinkText:"Lenke til skjema",disableCss:!1},argTypes:{title:{control:"text"},intro:{control:"text"},text:{control:"text"},moreText:{control:"text"},formLinkUrl:{control:"text"},formLinkText:{control:"text"},disableCss:{control:"boolean"}}});var et=x('<div class="intro"><!></div>'),nt=x('<p><a class="mt-link link--transport link--transport--primary"> </a></p>'),ot=x('<div class="container layout-grid layout-grid--column-12"><article class="article-page col-1-span-12"><h1> </h1> <!> <!> <!> <!></article></div>'),it=x('<div class="container"><!></div>'),rt=x('<div class="container"><!></div>'),lt=x("<!> <!> <!>",1);function R(V,q){W(q,!1),Z();var M=lt(),j=T(M);w(j,{name:"Normal",children:(_,t)=>{let s=()=>t==null?void 0:t().title,a=()=>t==null?void 0:t().intro,p=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().moreText,c=()=>t==null?void 0:t().formLinkUrl,v=()=>t==null?void 0:t().formLinkText,i=()=>t==null?void 0:t().disableCss;var d=ot(),h=l(d),u=l(h),m=l(u),I=k(u,2);{var B=e=>{var n=et(),o=l(n);C(o,a),r(e,n)};L(I,e=>{a()&&e(B)})}var N=k(I,2);{var G=e=>{var n=E(),o=T(n);C(o,p),r(e,n)};L(N,e=>{p()&&e(G)})}var S=k(N,2);{var J=e=>{var n=E(),o=T(n);C(o,f),r(e,n)};L(S,e=>{f()&&e(J)})}var K=k(S,2);{var P=e=>{var n=nt(),o=l(n),Q=l(o);F(()=>{Y(o,"href",c()),A(Q,v())}),r(e,n)};L(K,e=>{c()&&v()&&e(P)})}b(d,(e,n)=>{var o;return(o=y)==null?void 0:o(e,n)},i),F(()=>A(m,s())),r(_,d)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
  <article class="article-page col-1-span-12">
    <h1>{title}</h1>

    {#if intro}
      <div class="intro">
        {@html intro}
      </div>
    {/if}

    {#if text}
      {@html text}
    {/if}

    {#if moreText}
      {@html moreText}
    {/if}

    {#if formLinkUrl && formLinkText}
      <p>
        <a href={formLinkUrl} class="mt-link link--transport link--transport--primary">
          {formLinkText}
        </a>
      </p>
    {/if}
  </article>
</div>`}}});var D=k(j,2);w(D,{name:"Modul - normal",children:(_,t)=>{let s=()=>t==null?void 0:t().title,a=()=>t==null?void 0:t().intro,p=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().formLinkUrl,c=()=>t==null?void 0:t().formLinkText,v=()=>t==null?void 0:t().disableCss;var i=it(),d=l(i);O(d,{type:"form-intro-module",get linkText(){return c()},get linkUrl(){return f()},get intro(){return a()},get title(){return s()},get text(){return p()},get id(){return s()}}),b(i,(h,u)=>{var m;return(m=y)==null?void 0:m(h,u)},v),r(_,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="container">
  <CardArticle
    type="form-intro-module"
    linkText={formLinkText}
    linkUrl={formLinkUrl}
    {intro}
    {title}
    {text}
    id={title} />
</div>`}}});var z=k(D,2);w(z,{name:"Modul - H2 heading",children:(_,t)=>{let s=()=>t==null?void 0:t().title,a=()=>t==null?void 0:t().intro,p=()=>t==null?void 0:t().text,f=()=>t==null?void 0:t().formLinkUrl,c=()=>t==null?void 0:t().formLinkText,v=()=>t==null?void 0:t().disableCss;var i=rt(),d=l(i);O(d,{type:"form-intro-module",get linkText(){return c()},get linkUrl(){return f()},get intro(){return a()},get title(){return s()},get text(){return p()},headerTag:"h2",get id(){return s()}}),b(i,(h,u)=>{var m;return(m=y)==null?void 0:m(h,u)},v),r(_,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss} class="container">
  <CardArticle
    type="form-intro-module"
    linkText={formLinkText}
    linkUrl={formLinkUrl}
    {intro}
    {title}
    {text}
    headerTag="h2"
    id={title} />
</div>`}}}),r(V,M),X()}R.__docgen={version:3,name:"FormIntro.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const U=$(R,tt),bt=["Normal","ModulNormal","ModulH2Heading"],yt=U.Normal,wt=U.ModulNormal,Ut=U.ModulH2Heading;export{Ut as ModulH2Heading,wt as ModulNormal,yt as Normal,bt as __namedExportsOrder,tt as default};
