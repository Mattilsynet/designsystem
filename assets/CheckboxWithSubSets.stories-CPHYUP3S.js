import{p as g,a as I,t as H}from"./props-C0tvRuaH.js";import{b as M,g as s,p as E,a as R,d as q,s as d,c as n,h as o}from"./runtime-h0AMGDom.js";import{a as z}from"./actions-EVnswImp.js";import{d as B,c as G}from"./create-runtime-stories-BSZiRmpa.js";import{C as i}from"./CheckboxWithSubSets-BVGWh863.js";import{D as Q}from"./Disclosure-eHDyJ933.js";import{w as X}from"./utils-CMlWd0Pf.js";import{t as Y,i as Z}from"./utils-UxKBq1MU.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./index-Cvmj00a4.js";import"./input-Bhn6W10B.js";import"./proj-CDaZOfWJ.js";import"./html-CjI7j8Lz.js";import"./HeadingLevel-CsLaZNJ0.js";let h=M(g({key:"all",children:[{key:"dyr",displayName:"Dyr asdflaksjdf alksadfjklfdasjkfds  sdaff ads asd kaldsfjs",docCount:49,children:[{key:"produksjonsdyr",displayName:"Produksjonsdyr",docCount:38,children:[]},{key:"dyresykdommer",displayName:"Dyresykdommer asdfasd asdfjas asd asdf afdasdfasdfdsdasdf",docCount:2,children:[]},{key:"kjaeledyr",displayName:"Kjæledyr",docCount:1,children:[]}]},{key:"fisk-og-akvakultur",displayName:"Fisk og akvakultur",docCount:1,children:[{key:"fiskesykdommer",displayName:"Fiskesykdommer",docCount:1,children:[]}]},{key:"mat",displayName:"Mat",docCount:3,children:[{key:"import-av-mat",displayName:"Import av mat",docCount:1,children:[{key:"kommersiell-import",displayName:"Kommersiell import",docCount:1,children:[]}]}]},{key:"kosmetikk",displayName:"Kosmetikk",docCount:1,children:[]}]}));const{Story:$,meta:ee}=B({title:"Components/Form/CheckboxWithSubsets",args:{disableCss:!1,disableJs:!1,legend:"Tema",variation:"primary",options:s(h),optionsWithoutDocCount:{key:"all2",children:[{key:"dyr2",displayName:"Dyr",children:[{key:"produksjonsdyr2",displayName:"Produksjonsdyr",children:[]},{key:"dyresykdommer2",displayName:"Dyresykdommer",children:[]},{key:"kjaeledyr2",displayName:"Kjæledyr",children:[]}]},{key:"fisk-og-akvakultur2",displayName:"Fisk og akvakultur",children:[{key:"fiskesykdommer2",displayName:"Fiskesykdommer",children:[]}]}]},border:!1,disclosure:{title:"Dyr",headerTag:"h2",level1Legend:"Velg tema innen {0}",level2Legend:"Ønsker du å velge bare spesifikke tema?",checkAllLabel:"Velg alle",checkAllValue:"dyr3"},disclosureOptions:{key:"alldyr",checked:!1,children:[{key:"produksjonsdyr3",displayName:"Produksjonsdyr",children:[{key:"produksjonsdyr3/hest",displayName:"Hest",children:[]},{key:"produksjonsdyr3/storfe",displayName:"Storfe",children:[]},{key:"produksjonsdyr3/kanin",displayName:"Kanin",children:[]}]},{key:"dyresykdommer3",displayName:"Dyresykdommer",children:[{key:"dyresykdommer3/afrikanskHestepest",displayName:"Afrikansk hestepest",children:[]},{key:"dyresykdommer3/afrikanskSvinepest",displayName:"Afrikansk svinepest",children:[]}]},{key:"dyr-som-lider",displayName:"Dyr som lider",children:[]}]}},argTypes:{disableCss:{control:"boolean"},disableJs:{control:"boolean"},variation:{options:["primary","secondary"],control:"radio"}}});var se=H(`<div class="container layout-grid layout-grid--column-12"><section class="article-page col-1-span-12 svelte-1elmot9"><h1 class="mt-h1">Nested checkbox</h1> <h2 class="mt-h2 svelte-1elmot9">Nested checkbox with doc count</h2> <p class="svelte-1elmot9">Use variation="primary" (default) when checkboxes stand alone</p> <form class="mt-form"><!></form> <h2 class="mt-h2 svelte-1elmot9">Nested checkboxes without doc count and border</h2> <p class="svelte-1elmot9">User variation="primary" (default) when checkboxes stand alone</p> <form class="mt-form"><!> <h2 class="mt-h3 svelte-1elmot9">Variation = secondary</h2> <!></form> <h2 class="mt-h2 svelte-1elmot9">Nestede checkboxet inside disclosure</h2> <p class="svelte-1elmot9">Use variation="secondary" when checkboxes are used in combination with another component
          which has the title for the checkboxes, eg. Disclosure</p> <form class="mt-form"><!></form></section></div>`);function C(N,x){E(x,!0),$(N,{name:"Normal",children:(L,e)=>{let l=()=>e==null?void 0:e().disableJs,c=()=>e==null?void 0:e().legend,J=()=>e==null?void 0:e().disableCss,p=()=>e==null?void 0:e().variation,u=()=>e==null?void 0:e().optionsWithoutDocCount,k=()=>e==null?void 0:e().border,t=()=>e==null?void 0:e().disclosure,w=()=>e==null?void 0:e().disclosureOptions;var m=se(),S=n(m),y=d(n(S),6),D=n(y),_=o(()=>`${c()} i `),j=o(()=>!l());i(D,{helpText:"Velg et tema",get variation(){return p()},get level1Legend(){return c()},get level2Legend(){return s(_)},get loadJs(){return s(j)},get options(){return s(h)},set options(r){q(h,g(r))}});var v=d(y,6),b=n(v),W=o(()=>`${c()} i `),T=o(()=>!l());i(b,{get options(){return u()},get variation(){return p()},level1Legend:"Tema uten antall",get border(){return k()},get level2Legend(){return s(W)},get loadJs(){return s(T)}});var A=d(b,4),K=o(()=>!l());i(A,{get options(){return u()},variation:"secondary",level1Legend:"legend 1",level2Legend:"legend 2",get border(){return k()},get loadJs(){return s(K)}});var V=d(v,6),U=n(V),F=o(()=>!l()),O=o(()=>`${Y(t().title)}-title`);Q(U,{get title(){return t().title},get loadJs(){return s(F)},class:"disclosure-no-border--align-left",get id(){return s(O)},get headerTag(){return t().headerTag},children:(r,f)=>{var a=o(()=>Z(t().level1Legend,[t().title.toLowerCase()])),P=o(()=>!l());i(r,{variation:"secondary",get options(){return w()},hasCheckAll:!0,get checkAllLabel(){return t().checkAllLabel},get level1Legend(){return s(a)},get loadJs(){return s(P)}})},$$slots:{default:!0}}),z(m,(r,f)=>{var a;return(a=X)==null?void 0:a(r,f)},J),I(L,m)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <section class="article-page col-1-span-12">
    <h1 class="mt-h1">Nested checkbox</h1>
    <h2 class="mt-h2">Nested checkbox with doc count</h2>
    <p>Use variation="primary" (default) when checkboxes stand alone</p>
    <form class="mt-form">
      <CheckboxWithSubSets
        helpText="Velg et tema"
        bind:options
        {variation}
        level1Legend={legend}
        level2Legend={\`\${legend} i \`}
        loadJs={!disableJs} />
    </form>
    <h2 class="mt-h2">Nested checkboxes without doc count and border</h2>
    <p>User variation="primary" (default) when checkboxes stand alone</p>
    <form class="mt-form">
      <CheckboxWithSubSets
        options={optionsWithoutDocCount}
        {variation}
        level1Legend="Tema uten antall"
        {border}
        level2Legend={\`\${legend} i \`}
        loadJs={!disableJs} />
      <h2 class="mt-h3">Variation = secondary</h2>
      <CheckboxWithSubSets
        options={optionsWithoutDocCount}
        variation="secondary"
        level1Legend="legend 1"
        level2Legend="legend 2"
        {border}
        loadJs={!disableJs} />
    </form>
    <h2 class="mt-h2">Nestede checkboxet inside disclosure</h2>
    <p>
      Use variation="secondary" when checkboxes are used in combination with another component
      which has the title for the checkboxes, eg. Disclosure
    </p>
    <form class="mt-form">
      <Disclosure
        title={disclosure.title}
        loadJs={!disableJs}
        class="disclosure-no-border--align-left"
        id={\`\${toKebabCase(disclosure.title)}-title\`}
        headerTag={disclosure.headerTag}>
        <CheckboxWithSubSets
          variation="secondary"
          options={disclosureOptions}
          hasCheckAll={true}
          checkAllLabel={disclosure.checkAllLabel}
          level1Legend={interpolate(disclosure.level1Legend, [disclosure.title.toLowerCase()])}
          loadJs={!disableJs} />
      </Disclosure>
    </form>
  </section>
</div>`}}}),R()}C.__docgen={version:3,name:"CheckboxWithSubSets.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const oe=G(C,ee),xe=["Normal"],Le=oe.Normal;export{Le as Normal,xe as __namedExportsOrder,ee as default};
