import{S as se,i as te,s as oe,c as $,m as v,t as C,a as w,d as N,b as ae,e as ne}from"./index-D8riOviU.js";import{s as h,i as X,d as Y,e as c,a as m,b as l}from"./lifecycle-CcifP0R7.js";import{p as le,M as re,S as ie}from"./collect-stories-BMzKwk3M.js";import{C as F}from"./CheckboxWithSubSets-DjRkeQ8_.js";import{D as de}from"./Disclosure-DjpXovmX.js";import{w as ce}from"./utils-CMlWd0Pf.js";import{t as Q,i as R}from"./utils-DjM8Id44.js";import"./each-Dzkb-YsG.js";import"./index-DTCOkSMf.js";import"./HeadingLevel-RQgwHrl0.js";function me(a){let n,e;return n=new F({props:{variation:"secondary",options:a[5].disclosureOptions,hasCheckAll:!0,checkAllLabel:a[5].disclosure.checkAllLabel,level1Legend:R(a[5].disclosure.level1Legend,[a[5].disclosure.title.toLowerCase()])}}),{c(){$(n.$$.fragment)},m(o,i){v(n,o,i),e=!0},p(o,i){const t={};i&32&&(t.options=o[5].disclosureOptions),i&32&&(t.checkAllLabel=o[5].disclosure.checkAllLabel),i&32&&(t.level1Legend=R(o[5].disclosure.level1Legend,[o[5].disclosure.title.toLowerCase()])),n.$set(t)},i(o){e||(C(n.$$.fragment,o),e=!0)},o(o){w(n.$$.fragment,o),e=!1},d(o){N(n,o)}}}function he(a){let n,e,o,i,t,d,u,L,k,p,M,j,O,W,P,f,y,H,A,q,g,E,T,z,x,B,I,b,K,V,J,G;return p=new F({props:{helpText:"Velg et tema",options:a[1],variation:a[3],level1Legend:a[0],level2Legend:`${a[0]} i `}}),y=new F({props:{options:a[4],variation:a[3],level1Legend:"Tema uten antall",border:a[5].border,level2Legend:`${a[0]} i `}}),g=new F({props:{options:a[4],variation:"secondary",level1Legend:"legend 1",level2Legend:"legend 2",border:a[5].border}}),b=new de({props:{title:a[5].disclosure.title,loadJs:!a[5].disableJs,class:"disclosure-no-border--align-left",headingId:`${Q(a[5].disclosure.title)}-title`,headerTag:a[5].disclosure.headerTag,$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){n=c("div"),e=c("section"),o=c("h1"),o.textContent="Nested checkbox",i=h(),t=c("h2"),t.textContent="Nested checkbox with doc count",d=h(),u=c("p"),u.textContent='Use variation="primary" (default) when checkboxes stand alone',L=h(),k=c("form"),$(p.$$.fragment),M=h(),j=c("h2"),j.textContent="Nested checkboxes without doc count and border",O=h(),W=c("p"),W.textContent='User variation="primary" (default) when checkboxes stand alone',P=h(),f=c("form"),$(y.$$.fragment),H=h(),A=c("h2"),A.textContent="Variation = secondary",q=h(),$(g.$$.fragment),E=h(),T=c("h2"),T.textContent="Nestede checkboxet inside disclosure",z=h(),x=c("p"),x.textContent=`Use variation="secondary" when checkboxes are used in combination with another component
        which has the title for the checkboxes, eg. Disclosure`,B=h(),I=c("form"),$(b.$$.fragment),m(o,"class","mt-h1"),m(t,"class","mt-h2 svelte-1ddf5k0"),m(u,"class","svelte-1ddf5k0"),m(k,"class","mt-form"),m(j,"class","mt-h2 svelte-1ddf5k0"),m(W,"class","svelte-1ddf5k0"),m(A,"class","mt-h3 svelte-1ddf5k0"),m(f,"class","mt-form"),m(T,"class","mt-h2 svelte-1ddf5k0"),m(x,"class","svelte-1ddf5k0"),m(I,"class","mt-form"),m(e,"class","article-page col-1-span-12 svelte-1ddf5k0"),m(n,"class","container layout-grid layout-grid--column-12")},m(s,r){X(s,n,r),l(n,e),l(e,o),l(e,i),l(e,t),l(e,d),l(e,u),l(e,L),l(e,k),v(p,k,null),l(e,M),l(e,j),l(e,O),l(e,W),l(e,P),l(e,f),v(y,f,null),l(f,H),l(f,A),l(f,q),v(g,f,null),l(e,E),l(e,T),l(e,z),l(e,x),l(e,B),l(e,I),v(b,I,null),V=!0,J||(G=ae(K=ce.call(null,n,a[2])),J=!0)},p(s,r){const _={};r&2&&(_.options=s[1]),r&8&&(_.variation=s[3]),r&1&&(_.level1Legend=s[0]),r&1&&(_.level2Legend=`${s[0]} i `),p.$set(_);const D={};r&16&&(D.options=s[4]),r&8&&(D.variation=s[3]),r&32&&(D.border=s[5].border),r&1&&(D.level2Legend=`${s[0]} i `),y.$set(D);const U={};r&16&&(U.options=s[4]),r&32&&(U.border=s[5].border),g.$set(U);const S={};r&32&&(S.title=s[5].disclosure.title),r&32&&(S.loadJs=!s[5].disableJs),r&32&&(S.headingId=`${Q(s[5].disclosure.title)}-title`),r&32&&(S.headerTag=s[5].disclosure.headerTag),r&96&&(S.$$scope={dirty:r,ctx:s}),b.$set(S),K&&ne(K.update)&&r&4&&K.update.call(null,s[2])},i(s){V||(C(p.$$.fragment,s),C(y.$$.fragment,s),C(g.$$.fragment,s),C(b.$$.fragment,s),V=!0)},o(s){w(p.$$.fragment,s),w(y.$$.fragment,s),w(g.$$.fragment,s),w(b.$$.fragment,s),V=!1},d(s){s&&Y(n),N(p),N(y),N(g),N(b),J=!1,G()}}}function ue(a){let n,e,o,i;return n=new re({props:{title:"Components/Form/CheckboxWithSubsets",disableCss:!1,args:{legend:"Tema",variation:"primary",options:{key:"all",children:[{key:"dyr",displayName:"Dyr asdflaksjdf alksadfjklfdasjkfds  sdaff ads asd kaldsfjs",docCount:49,children:[{key:"produksjonsdyr",displayName:"Produksjonsdyr",docCount:38,children:[]},{key:"dyresykdommer",displayName:"Dyresykdommer asdfasd asdfjas asd asdf afdasdfasdfdsdasdf",docCount:2,children:[]},{key:"kjaeledyr",displayName:"Kjæledyr",docCount:1,children:[]}]},{key:"fisk-og-akvakultur",displayName:"Fisk og akvakultur",docCount:1,children:[{key:"fiskesykdommer",displayName:"Fiskesykdommer",docCount:1,children:[]}]},{key:"mat",displayName:"Mat",docCount:3,children:[{key:"import-av-mat",displayName:"Import av mat",docCount:1,children:[{key:"kommersiell-import",displayName:"Kommersiell import",docCount:1,children:[]}]}]},{key:"kosmetikk",displayName:"Kosmetikk",docCount:1,children:[]}]},optionsWithoutDocCount:{key:"all2",children:[{key:"dyr2",displayName:"Dyr",children:[{key:"produksjonsdyr2",displayName:"Produksjonsdyr",children:[]},{key:"dyresykdommer2",displayName:"Dyresykdommer",children:[]},{key:"kjaeledyr2",displayName:"Kjæledyr",children:[]}]},{key:"fisk-og-akvakultur2",displayName:"Fisk og akvakultur",children:[{key:"fiskesykdommer2",displayName:"Fiskesykdommer",children:[]}]}]},border:!1,disclosure:{title:"Dyr",headerTag:"h2",level1Legend:"Velg tema innen {0}",level2Legend:"Ønsker du å velge bare spesifikke tema?",checkAllLabel:"Velg alle",checkAllValue:"dyr3"},disclosureOptions:{key:"alldyr",checked:!1,children:[{key:"produksjonsdyr3",displayName:"Produksjonsdyr",children:[{key:"produksjonsdyr3/hest",displayName:"Hest",children:[]},{key:"produksjonsdyr3/storfe",displayName:"Storfe",children:[]},{key:"produksjonsdyr3/kanin",displayName:"Kanin",children:[]}]},{key:"dyresykdommer3",displayName:"Dyresykdommer",children:[{key:"dyresykdommer3/afrikanskHestepest",displayName:"Afrikansk hestepest",children:[]},{key:"dyresykdommer3/afrikanskSvinepest",displayName:"Afrikansk svinepest",children:[]}]},{key:"dyr-som-lider",displayName:"Dyr som lider",children:[]}]}},argTypes:{disableCss:{control:"boolean"},variation:{options:["primary","secondary"],control:"radio"}}}}),o=new ie({props:{name:"Normal",$$slots:{default:[he,({legend:t,options:d,disableCss:u,variation:L,optionsWithoutDocCount:k,args:p})=>({0:t,1:d,2:u,3:L,4:k,5:p}),({legend:t,options:d,disableCss:u,variation:L,optionsWithoutDocCount:k,args:p})=>(t?1:0)|(d?2:0)|(u?4:0)|(L?8:0)|(k?16:0)|(p?32:0)]},$$scope:{ctx:a}}}),{c(){$(n.$$.fragment),e=h(),$(o.$$.fragment)},m(t,d){v(n,t,d),X(t,e,d),v(o,t,d),i=!0},p(t,[d]){const u={};d&127&&(u.$$scope={dirty:d,ctx:t}),o.$set(u)},i(t){i||(C(n.$$.fragment,t),C(o.$$.fragment,t),i=!0)},o(t){w(n.$$.fragment,t),w(o.$$.fragment,t),i=!1},d(t){t&&Y(e),N(n,t),N(o,t)}}}class Z extends se{constructor(n){super(),te(this,n,null,ue,oe,{})}}Z.__docgen={version:3,name:"CheckboxWithSubSets.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ee=le(Z,{meta:{title:"Components/Form/CheckboxWithSubsets"},stories:{Normal:{name:"Normal",template:!1,source:`<div class="container layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <section class="article-page col-1-span-12">
    <h1 class="mt-h1">Nested checkbox</h1>
    <h2 class="mt-h2">Nested checkbox with doc count</h2>
    <p>Use variation="primary" (default) when checkboxes stand alone</p>
    <form class="mt-form">
      <CheckboxWithSubSets
        helpText="Velg et tema"
        {options}
        {variation}
        level1Legend={legend}
        level2Legend={\`\${legend} i \`} />
    </form>
    <h2 class="mt-h2">Nested checkboxes without doc count and border</h2>
    <p>User variation="primary" (default) when checkboxes stand alone</p>
    <form class="mt-form">
      <CheckboxWithSubSets
        options={optionsWithoutDocCount}
        {variation}
        level1Legend="Tema uten antall"
        border={args.border}
        level2Legend={\`\${legend} i \`} />
      <h2 class="mt-h3">Variation = secondary</h2>
      <CheckboxWithSubSets
        options={optionsWithoutDocCount}
        variation="secondary"
        level1Legend="legend 1"
        level2Legend="legend 2"
        border={args.border} />
    </form>
    <h2 class="mt-h2">Nestede checkboxet inside disclosure</h2>
    <p>
      Use variation="secondary" when checkboxes are used in combination with another component
      which has the title for the checkboxes, eg. Disclosure
    </p>
    <form class="mt-form">
      <Disclosure
        title={args.disclosure.title}
        loadJs={!args.disableJs}
        class="disclosure-no-border--align-left"
        headingId={\`\${toKebabCase(args.disclosure.title)}-title\`}
        headerTag={args.disclosure.headerTag}>
        <CheckboxWithSubSets
          variation="secondary"
          options={args.disclosureOptions}
          hasCheckAll={true}
          checkAllLabel={args.disclosure.checkAllLabel}
          level1Legend={interpolate(args.disclosure.level1Legend, [
            args.disclosure.title.toLowerCase()
          ])} />
      </Disclosure>
    </form>
  </section>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","CheckboxWithSubSets","Disclosure","wrapInShadowDom","interpolate","toKebabCase"]}),Ne=ee.meta,Le=["Normal"],Se=ee.stories.Normal;export{Se as Normal,Le as __namedExportsOrder,Ne as default};
