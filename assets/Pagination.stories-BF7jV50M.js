import{S as v,i as N,s as x,c as f,m as d,t as $,a as P,d as _,b as I,e as T}from"./index-D8riOviU.js";import{s as w,i as C,d as S,e as g,a as D,b as c}from"./lifecycle-CcifP0R7.js";import{p as y,M,S as A}from"./collect-stories-BMzKwk3M.js";import{w as F}from"./utils-CMlWd0Pf.js";import{a as G}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as q}from"./Pagination-CFU9ZgkZ.js";import"./v4-CQkTLCs1.js";import"./each-Dzkb-YsG.js";import"./utils-DjM8Id44.js";function E(i){let t,r,n,o,e,a,l,m,h;return e=new q({props:{pages:i[4].pages,currentPageIndex:i[0],nextText:"Neste",previousText:"Forrige",labelPage:"Side",toPageTitle:"Gå til side {0} av {1}",class:""}}),e.$on("page-change",i[1]),{c(){t=g("div"),r=g("article"),n=g("h2"),n.textContent="Pagination",o=w(),f(e.$$.fragment),D(n,"class","mt-h2")},m(s,p){C(s,t,p),c(t,r),c(r,n),c(r,o),d(e,r,null),l=!0,m||(h=I(a=F.call(null,t,i[3])),m=!0)},p(s,p){const u={};p&16&&(u.pages=s[4].pages),p&1&&(u.currentPageIndex=s[0]),e.$set(u),a&&T(a.update)&&p&8&&a.update.call(null,s[3])},i(s){l||($(e.$$.fragment,s),l=!0)},o(s){P(e.$$.fragment,s),l=!1},d(s){s&&S(t),_(e),m=!1,h()}}}function O(i){let t,r,n,o;return t=new M({props:{title:"Components/Pagination",args:{disableCss:!1,pages:[{url:"?0"},{url:"?1"},{url:"?2"},{url:"?3"},{url:"?4"},{url:"?5"},{url:"?6"},{url:"?7"},{url:"?8"},{url:"?9"},{url:"?10"},{url:"?11"}]},argTypes:{disableCss:{control:"boolean"},pages:{control:"array"}}}}),n=new A({props:{name:"Normal",$$slots:{default:[E,({disableCss:e,args:a})=>({3:e,4:a}),({disableCss:e,args:a})=>(e?8:0)|(a?16:0)]},$$scope:{ctx:i}}}),{c(){f(t.$$.fragment),r=w(),f(n.$$.fragment)},m(e,a){d(t,e,a),C(e,r,a),d(n,e,a),o=!0},p(e,[a]){const l={};a&57&&(l.$$scope={dirty:a,ctx:e}),n.$set(l)},i(e){o||($(t.$$.fragment,e),$(n.$$.fragment,e),o=!0)},o(e){P(t.$$.fragment,e),P(n.$$.fragment,e),o=!1},d(e){e&&S(r),_(t,e),_(n,e)}}}function j(i,t,r){const n=G("pageChange");let o=0;function e(a){a.preventDefault(),n(a),r(0,o=a.detail.index)}return[o,e]}class k extends v{constructor(t){super(),N(this,t,j,O,x,{})}}const b=y(k,{meta:{title:"Components/Pagination"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <article>
    <h2 class="mt-h2">Pagination</h2>
    <Pagination
      pages={args.pages}
      currentPageIndex={currentPageNumber}
      on:page-change={handlePageChange}
      nextText="Neste"
      previousText="Forrige"
      labelPage="Side"
      toPageTitle={\`Gå til side {0} av {1}\`}
      class="" />
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","action","Pagination"]}),V=b.meta,W=["Normal"],X=b.stories.Normal;export{X as Normal,W as __namedExportsOrder,V as default};
