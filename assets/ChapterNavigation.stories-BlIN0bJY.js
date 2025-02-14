import{a as b,t as x,p as N}from"./props-C0tvRuaH.js";import{p as f,a as w,g as _,b as y,d as I,s as K,c as n}from"./runtime-h0AMGDom.js";import{a as T}from"./actions-EVnswImp.js";import{d as F,c as S}from"./create-runtime-stories-BSZiRmpa.js";import{w as D}from"./utils-CMlWd0Pf.js";import{a as j}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{C as k}from"./ChapterNavigation-1lizL3j-.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./v4-CQkTLCs1.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";const A=j("chapterChange"),{Story:E,meta:M}=F({title:"Components/Chapter Navigation",args:{disableCss:!1,chapters:[{index:0,url:"?0",heading:"Formål"},{index:1,url:"?1",heading:"Virkeområde"},{index:2,url:"?2",heading:"Definisjoner av dyr og dyrehold"},{index:3,url:"?3",heading:"Forurensning av vann"},{index:4,url:"?4",heading:"Kapittel 4"},{index:5,url:"?5",heading:"Kapittel 5"},{index:6,url:"?6",heading:"Kapittel 6"}],showChapterNumber:!0},argTypes:{disableCss:{control:"boolean"},chapters:{control:"object"},showChapterNumber:{control:"boolean"}}});var O=x('<div><article><h1 class="mt-h2">Kapittelnavigering</h1> <!></article></div>');function s(i,p){f(p,!0);let r=y(0);function h(t){A(t),I(r,N(t))}E(i,{name:"Normal",children:(l,e)=>{let d=()=>e==null?void 0:e().disableCss,c=()=>e==null?void 0:e().showChapterNumber,m=()=>e==null?void 0:e().chapters;var a=O(),u=n(a),C=K(n(u),2);k(C,{get showChapterNumber(){return c()},get chapters(){return m()},get currentChapterIndex(){return _(r)},onChapterChange:h,nextText:"Neste",previousText:"Forrige",class:"chapter-navigation--bottom"}),T(a,(v,g)=>{var o;return(o=D)==null?void 0:o(v,g)},d),b(l,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <article>
    <h1 class="mt-h2">Kapittelnavigering</h1>
    <ChapterNavigation
      {showChapterNumber}
      {chapters}
      {currentChapterIndex}
      onChapterChange={chapterChange}
      nextText="Neste"
      previousText="Forrige"
      class="chapter-navigation--bottom" />
  </article>
</div>`}}}),w()}s.__docgen={version:3,name:"ChapterNavigation.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R=S(s,M),Y=["Normal"],Z=R.Normal;export{Z as Normal,Y as __namedExportsOrder,M as default};
