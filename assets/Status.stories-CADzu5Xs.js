import{a as l,t as r,s as h}from"./props-C0tvRuaH.js";import{p as B,a as I,s as k,c as n,t as y}from"./runtime-h0AMGDom.js";import{a as j}from"./actions-EVnswImp.js";import{i as N}from"./lifecycle-DurhAeVF.js";import{d as E,c as O}from"./create-runtime-stories-BSZiRmpa.js";import{S as T}from"./Status-BWc7f4Sb.js";import{w as z}from"./utils-CMlWd0Pf.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./Published-f7fbW3jP.js";const{Story:R,meta:Z}=E({title:"Innhold/Status",args:{title:"Dette er viktig",text:'<p>Dette er en melding om at det har skjedd noe</p><h3 class="mt-h3">Overskrift</h3><p>Mer tekst kommer her</p>',actionsTakenByMattilsynet:'<p>Dette er gjør Mattilsynet</p><h3 class="mt-h3">Overskrift</h3><p>Mer tekst kommer her</p>',statusType1:"important",statusType2:"none",linkUrl:"https://www.mattilsynet.no",linkText:"Mattilsynet",linkIsExternal:!0,updatedDate:"2021-06-26T11:32:22Z",disableCss:!1},argTypes:{title:{control:"text"},text:{control:"text"},actionsTakenByMattilsynet:{control:"text"},statusType1:{control:"radio",options:["important","none"]},statusType2:{control:"radio",options:["important","none"]},linkUrl:{control:"text"},linkText:{control:"text"},linkIsExternal:{control:"boolean"},disableCss:{control:"boolean"}}});var q=r('<h2 class="mt-h2"> </h2>'),A=r('<h2 class="mt-h2"> </h2>'),F=r('<div class="container layout-grid layout-grid--column-12"><article class="col-3-span-8"><h1 class="mt-h1">Status med tekst, "hva gjør Mattilsynet" og link</h1> <!> <h1 class="mt-h1 margin-top svelte-1lep6z8">Status med tekst og link</h1> <!></article></div>');function x(v,f){B(f,!1),N(),R(v,{name:"Normal",children:(_,t)=>{let p=()=>t==null?void 0:t().title,d=()=>t==null?void 0:t().text,S=()=>t==null?void 0:t().actionsTakenByMattilsynet,m=()=>t==null?void 0:t().linkUrl,u=()=>t==null?void 0:t().linkText,M=()=>t==null?void 0:t().disableCss,D=()=>t==null?void 0:t().statusType1,b=()=>t==null?void 0:t().statusType2,w=()=>t==null?void 0:t().updatedDate;var a=F(),U=n(a),c=k(n(U),2);T(c,{get text(){return d()},get actionsTakenByMattilsynet(){return S()},get linkUrl(){return m()},get linkText(){return u()},get updatedDate(){return w()},get statusType(){return D()},heading:s=>{var e=q(),i=n(e);y(()=>h(i,p())),l(s,e)},$$slots:{heading:!0}});var C=k(c,4);T(C,{get text(){return d()},get linkUrl(){return m()},get linkText(){return u()},get statusType(){return b()},updatedDate:"2024-12-24",publishedText:"test",heading:s=>{var e=A(),i=n(e);y(()=>h(i,p())),l(s,e)},$$slots:{heading:!0}}),j(a,(o,s)=>{var e;return(e=z)==null?void 0:e(o,s)},M),l(_,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <article class="col-3-span-8">
    <h1 class="mt-h1">Status med tekst, "hva gjør Mattilsynet" og link</h1>
    <Status
      {text}
      {actionsTakenByMattilsynet}
      {linkUrl}
      {linkText}
      {updatedDate}
      statusType={statusType1}>
      {#snippet heading()}
        <h2 class="mt-h2">{title}</h2>
      {/snippet}
    </Status>

    <h1 class="mt-h1 margin-top">Status med tekst og link</h1>
    <Status
      {text}
      {linkUrl}
      {linkText}
      statusType={statusType2}
      updatedDate="2024-12-24"
      publishedText="test">
      {#snippet heading()}
        <h2 class="mt-h2">{title}</h2>
      {/snippet}
    </Status>
  </article>
</div>`}}}),I()}x.__docgen={version:3,name:"Status.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=O(x,Z),ot=["Normal"],it=G.Normal;export{it as Normal,ot as __namedExportsOrder,Z as default};
