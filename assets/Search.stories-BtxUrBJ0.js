import{S as Q,i as R,s as U,c as J,m as S,t as T,a as b,d as v,b as V,e as W}from"./index-D8riOviU.js";import{s as x,i as K,d as L,e as p,a as u,b as l}from"./lifecycle-CcifP0R7.js";import{p as X,M as Y,S as Z}from"./collect-stories-BMzKwk3M.js";import{w as ee}from"./utils-CMlWd0Pf.js";import{S as B}from"./Search-1Zlh2tVV.js";import"./Label-BX4PxQ2B.js";import"./utils-DjM8Id44.js";function te(s){let t,c,o,m,a,n,f,i,w,d,h,$,O,C,D,g,z,M,j,_,y,F,A,G;return m=new B({props:{name:"inputfield_3",searchButtonText:s[3],loadJs:s[0].loadJs}}),i=new B({props:{name:"inputfield_1",label:s[1],loadJs:s[0].loadJs}}),$=new B({props:{name:"inputfield_2",label:s[1],searchButtonText:s[3],loadJs:s[0].loadJs}}),g=new B({props:{name:"inputfield_3",label:s[1],placeholder:s[4],searchButtonText:s[3],loadJs:s[0].loadJs}}),_=new B({props:{name:"inputfield_4",label:s[1],helpText:s[6],searchButtonText:s[3],loadJs:s[0].loadJs}}),{c(){t=p("div"),c=p("article"),o=p("form"),J(m.$$.fragment),a=x(),n=p("article"),f=p("form"),J(i.$$.fragment),w=x(),d=p("article"),h=p("form"),J($.$$.fragment),O=x(),C=p("article"),D=p("form"),J(g.$$.fragment),z=x(),M=p("article"),j=p("form"),J(_.$$.fragment),u(o,"class","mt-form form-layout"),u(c,"class","svelte-1lkh4gi"),u(f,"class","mt-form form-layout"),u(n,"class","svelte-1lkh4gi"),u(h,"class","mt-form form-layout"),u(d,"class","svelte-1lkh4gi"),u(D,"class","mt-form form-layout"),u(C,"class","svelte-1lkh4gi"),u(j,"class","mt-form form-layout"),u(M,"class","svelte-1lkh4gi")},m(e,r){K(e,t,r),l(t,c),l(c,o),S(m,o,null),l(t,a),l(t,n),l(n,f),S(i,f,null),l(t,w),l(t,d),l(d,h),S($,h,null),l(t,O),l(t,C),l(C,D),S(g,D,null),l(t,z),l(t,M),l(M,j),S(_,j,null),F=!0,A||(G=V(y=ee.call(null,t,s[2])),A=!0)},p(e,r){const E={};r&8&&(E.searchButtonText=e[3]),r&1&&(E.loadJs=e[0].loadJs),m.$set(E);const H={};r&2&&(H.label=e[1]),r&1&&(H.loadJs=e[0].loadJs),i.$set(H);const q={};r&2&&(q.label=e[1]),r&8&&(q.searchButtonText=e[3]),r&1&&(q.loadJs=e[0].loadJs),$.$set(q);const k={};r&2&&(k.label=e[1]),r&16&&(k.placeholder=e[4]),r&8&&(k.searchButtonText=e[3]),r&1&&(k.loadJs=e[0].loadJs),g.$set(k);const I={};r&2&&(I.label=e[1]),r&64&&(I.helpText=e[6]),r&8&&(I.searchButtonText=e[3]),r&1&&(I.loadJs=e[0].loadJs),_.$set(I),y&&W(y.update)&&r&4&&y.update.call(null,e[2])},i(e){F||(T(m.$$.fragment,e),T(i.$$.fragment,e),T($.$$.fragment,e),T(g.$$.fragment,e),T(_.$$.fragment,e),F=!0)},o(e){b(m.$$.fragment,e),b(i.$$.fragment,e),b($.$$.fragment,e),b(g.$$.fragment,e),b(_.$$.fragment,e),F=!1},d(e){e&&L(t),v(m),v(i),v($),v(g),v(_),A=!1,G()}}}function ae(s){let t,c,o,m;return t=new Y({props:{title:"Components/Form/Search",args:{label:"Skriv inn navnet på skjema",helpText:"Her kan du søke etter artikler og veiledere",placeholder:"Søk etter artikler, skjemaer, pdfer og veiledere, veivisere, rapporter og mer",searchButtonText:"Søk",disableCss:!1,loadJs:!0},argTypes:{label:{control:"text"},helpText:{control:"text"},disableCss:{control:"boolean"},loadJs:{control:"boolean"}}}}),o=new Z({props:{name:"Search input",$$slots:{default:[te,({args:a,label:n,disableCss:f,searchButtonText:i,placeholder:w,primaryButton:d,helpText:h})=>({0:a,1:n,2:f,3:i,4:w,5:d,6:h}),({args:a,label:n,disableCss:f,searchButtonText:i,placeholder:w,primaryButton:d,helpText:h})=>(a?1:0)|(n?2:0)|(f?4:0)|(i?8:0)|(w?16:0)|(d?32:0)|(h?64:0)]},$$scope:{ctx:s}}}),{c(){J(t.$$.fragment),c=x(),J(o.$$.fragment)},m(a,n){S(t,a,n),K(a,c,n),S(o,a,n),m=!0},p(a,[n]){const f={};n&223&&(f.$$scope={dirty:n,ctx:a}),o.$set(f)},i(a){m||(T(t.$$.fragment,a),T(o.$$.fragment,a),m=!0)},o(a){b(t.$$.fragment,a),b(o.$$.fragment,a),m=!1},d(a){a&&L(c),v(t,a),v(o,a)}}}class N extends Q{constructor(t){super(),R(this,t,null,ae,U,{})}}N.__docgen={version:3,name:"Search.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const P=X(N,{meta:{title:"Components/Form/Search"},stories:{SearchInput:{name:"Search input",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_3" {searchButtonText} loadJs={args.loadJs} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_1" {label} loadJs={args.loadJs} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch name="inputfield_2" {label} {searchButtonText} loadJs={args.loadJs} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch
        name="inputfield_3"
        {label}
        {placeholder}
        {searchButtonText}
        loadJs={args.loadJs} />
    </form>
  </article>
  <article>
    <form class="mt-form form-layout">
      <TextInputSearch
        name="inputfield_4"
        {label}
        {helpText}
        {searchButtonText}
        loadJs={args.loadJs} />
    </form>
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","TextInputSearch"]}),ie=P.meta,pe=["SearchInput"],ue=P.stories.SearchInput;export{ue as SearchInput,pe as __namedExportsOrder,ie as default};
