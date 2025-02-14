import{a as d,t as k}from"./props-C0tvRuaH.js";import{p as x,a as h,g as e}from"./runtime-h0AMGDom.js";import{e as f,i as u}from"./each-DBQXtrgh.js";import{a as g}from"./actions-EVnswImp.js";import{i as T}from"./lifecycle-DurhAeVF.js";import{d as w,c as y}from"./create-runtime-stories-BSZiRmpa.js";import{w as C}from"./utils-CMlWd0Pf.js";import{C as v}from"./CardArticle-DCXPdwe0.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./HeadingLevel-CsLaZNJ0.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";const{Story:A,meta:L}=w({title:"Innhold/Fremhevet lenke",args:{tasks:[{title:"Tittel med ingen ikon",text:"<p>Norge får nytt regelverk.</p>",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"Mer informasjon om nytt regelverk",headerTag:"h3",iconClass:"",linkTypeButton:!1},{title:"Link type knapp",text:"<p>Noe tekst</p>",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"En lenke",linkTypeButton:!0},{title:"Tittel med info ikon",text:"<p>Noe tekst</p>",nextActionUrl:"http://www.nav.no",nextActionLinkText:"En lenke",iconClass:"info-icon",linkTypeButton:!1},{title:"Tittel med advarsel ikon",text:"<p>Noe tekst</p>",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"En lenke",iconClass:"warning-icon",linkTypeButton:!1},{title:"Tittel med oppgave ikon",text:"<p>Noe tekst</p>",nextActionUrl:"http://www.mattilsynet.no",nextActionLinkText:"En lenke",iconClass:"task-icon",linkTypeButton:!1},{title:"Manglende lenke",text:"<p>Noe tekst</p>",nextActionLinkText:"En lenke",linkTypeButton:!1}],disableCss:!1},argTypes:{tasks:{control:"object"},disableCss:{control:"boolean"}}});var N=k('<div class="container layout-flex-col layout-flex-col--x-small"></div>');function s(a,r){x(r,!1),T(),A(a,{name:"Normal",children:(p,n)=>{let c=()=>n==null?void 0:n().tasks,m=()=>n==null?void 0:n().disableCss;var i=N();f(i,5,c,u,(o,t)=>{v(o,{type:"highlighted-link",class:"background-mt-white",get linkText(){return e(t).nextActionLinkText},get linkUrl(){return e(t).nextActionUrl},get title(){return e(t).title},get text(){return e(t).text},get headingId(){return e(t).title},get headerTag(){return e(t).headerTag},get iconClass(){return e(t).iconClass}})}),g(i,(o,t)=>{var l;return(l=C)==null?void 0:l(o,t)},m),d(p,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
  use:wrapInShadowDom={disableCss}
  class="container layout-flex-col layout-flex-col--x-small">
  {#each tasks as task}
    <CardArticle
      type="highlighted-link"
      class="background-mt-white"
      linkText={task.nextActionLinkText}
      linkUrl={task.nextActionUrl}
      title={task.title}
      text={task.text}
      headingId={task.title}
      headerTag={task.headerTag}
      iconClass={task.iconClass} />
  {/each}
</div>`}}}),h()}s.__docgen={version:3,name:"HighlightedLink.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const _=y(s,L),P=["Normal"],Q=_.Normal;export{Q as Normal,P as __namedExportsOrder,L as default};
