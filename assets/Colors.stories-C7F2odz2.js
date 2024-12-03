import{S as A,i as x,s as k,c as b,m as _,t as y,a as F,d as v,b as B,e as S,n as j}from"./index-D8riOviU.js";import{s as d,i as f,d as C,e as g,a as i,m as I,c as M,b as c}from"./lifecycle-CcifP0R7.js";import{e as q}from"./each-Dzkb-YsG.js";import{p as N,M as V,S as O}from"./collect-stories-BMzKwk3M.js";import{w as R}from"./utils-CMlWd0Pf.js";import{g as T}from"./_commonjsHelpers-CqkleIqs.js";var h,$;function z(){return $||($=1,h=[{name:"mt-blue",color:"hsl(196, 89%, 25%)"},{name:"mt-red",color:"hsl(3,76%,52%)"},{name:"mt-red-uu",color:"hsl(3, 76%, 36%)"},{name:"mt-beige",color:"hsl(55,19%,61%)"},{name:"mt-beige-50",color:"hsla(55,18%,61%,0.5)"},{name:"mt-light-beige",color:"hsl(37, 39%, 91%)"},{name:"mt-background",color:"hsl(38,40%,96%)"},{name:"mt-light-blue",color:"hsl(193, 52%, 42%)"},{name:"mt-lighter-light-blue",color:"hsl(193,39%,88%)"},{name:"mt-rationale-blue",color:"hsl(193, 39%, 88%)",onColor:"hsla(0,1%,25%, 1)"},{name:"mt-brown",color:"hsla(0, 1%, 25%, 1)"},{name:"mt-grey",color:"hsl(216,3%,66%)"},{name:"mt-white",color:"hsl(0,0%,100%)",onColor:"#032C30"},{name:"mt-green",color:"hsla(79, 41%, 64%, 1)"},{name:"mt-green-100",color:"#F3F8F1"},{name:"mt-green-300",color:"#D3E8E0"},{name:"mt-green-400",color:"#BCDCD0"},{name:"mt-light-green",color:"hsla(80, 41%, 85%, 1)"},{name:"primary",alias:"mt-blue",color:"hsl(196, 89%, 25%)",onColor:"hsl(0,0%,100%)"},{name:"mt-blue-medium",color:"hsl(193,52%,42%)"},{name:"secondary",alias:"mt-beige",color:"hsl(54,19%,61%)"},{name:"mt-text-dark",alias:"mt-brown",color:"hsla(0,1%,25%, 1)"},{name:"error",alias:"mt-red-uu",color:"hsl(3, 76%, 36%)",onColor:"hsl(0,0%,100%)"},{name:"error-50",color:"hsl(3, 76%, 36%, 0.5)"},{name:"mt-yellowgreen",color:"hsla(63, 75%, 41%, 1)"},{name:"mt-yellowgreen-lighter",color:"hsla(63, 52%, 82%, 1)"},{name:"mt-new-white",color:"#ffffff",onColor:"#032C30"},{name:"mt-granskog",color:"#054449",onColor:"#FAF6F3"},{name:"mt-granskog-dark",color:"#032C30"},{name:"mt-furu",color:"#68B096"},{name:"mt-furu-dark",color:"#3C725E"},{name:"mt-lys-furu",color:"#9BCAB9"},{name:"mt-bg-furu",color:"#E2F1DF",onColor:"#032C30"},{name:"mt-bg-success",alias:"mt-bg-furu",color:"#E2F1DF",onColor:"#032C30"},{name:"mt-fjord",color:"#153F7B"},{name:"mt-lys-fjord",color:"#9ECCED"},{name:"mt-bg-fjord",color:"#D8EAF3",onColor:"#032C30"},{name:"mt-bg-neutral",alias:"mt-bg-fjord",color:"#D8EAF3",onColor:"#032C30"},{name:"mt-rognebaer-contrast",color:"#92301C"},{name:"mt-rognebaer",color:"#DA573B"},{name:"mt-lys-rognebaer",color:"#F9C4AA"},{name:"mt-bg-rognebaer",color:"#FFE4D6",onColor:"#032C30"},{name:"mt-bg-danger",alias:"mt-bg-rognebaer",color:"#FFE4D6",onColor:"#032C30"},{name:"mt-sommerdag-contrast",color:"#F1BE3C"},{name:"mt-sommerdag",color:"#F9CC76"},{name:"mt-lys-sommerdag",color:"#F8DE9C"},{name:"mt-bg-sommerdag",color:"#FBECC6",onColor:"#032C30"},{name:"mt-bg-warning",alias:"mt-bg-sommerdag",color:"#FBECC6",onColor:"#032C30"},{name:"mt-mellombeige",color:"#F4ECE6",onColor:"#032C30"},{name:"mt-bg-info",alias:"mt-mellombeige",color:"#F4ECE6",onColor:"#032C30"},{name:"mt-bg-beige",color:"#FAF6F3",onColor:"#032C30"},{name:"mt-havdyp",color:"#116E6B"},{name:"mt-brevann",color:"#ABE1CD"}]),h}var G=z();const H=T(G);function J(s,o,r){const t=s.slice();return t[2]=o[r],t}function K(s){let o;return{c(){o=g("span"),o.textContent=`Alias: ${s[2].alias}`,i(o,"class","text-small")},m(r,t){f(r,o,t)},d(r){r&&C(o)}}}function L(s){let o,r,t,n,e,a,l,u,m=s[2].alias&&K(s);return{c(){o=g("div"),r=g("div"),t=d(),n=g("span"),n.textContent=`Navn: ${s[2].name}`,e=d(),m&&m.c(),a=d(),l=g("span"),l.textContent=`Farge: ${s[2].color}`,u=d(),i(r,"class","colors svelte-100g4tp"),i(r,"style",`background-color: var(--color-${s[2].name})`),i(n,"class","text-small"),i(l,"class","text-small"),i(o,"class","layout-flex-col svelte-100g4tp")},m(p,D){f(p,o,D),c(o,r),c(o,t),c(o,n),c(o,e),m&&m.m(o,null),c(o,a),c(o,l),c(o,u)},p:j,d(p){p&&C(o),m&&m.d()}}}function P(s){let o,r,t,n,e=q(H),a=[];for(let l=0;l<e.length;l+=1)a[l]=L(J(s,e,l));return{c(){o=g("div");for(let l=0;l<a.length;l+=1)a[l].c();i(o,"class","layout-grid layout-grid--column-3 svelte-100g4tp"),I(o,"--wrap","wrap")},m(l,u){f(l,o,u);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(o,null);t||(n=B(r=R.call(null,o,s[1])),t=!0)},p(l,u){r&&S(r.update)&&u&2&&r.update.call(null,l[1])},d(l){l&&C(o),M(a,l),t=!1,n()}}}function Q(s){let o,r,t,n;return o=new V({props:{title:"Visual Style/Colors",args:{disableCss:!1},argTypes:{title:{control:"text"},disableCss:{control:"boolean"}}}}),t=new O({props:{name:"All",$$slots:{default:[P,({primary:e,disableCss:a})=>({0:e,1:a}),({primary:e,disableCss:a})=>(e?1:0)|(a?2:0)]},$$scope:{ctx:s}}}),{c(){b(o.$$.fragment),r=d(),b(t.$$.fragment)},m(e,a){_(o,e,a),f(e,r,a),_(t,e,a),n=!0},p(e,[a]){const l={};a&34&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){n||(y(o.$$.fragment,e),y(t.$$.fragment,e),n=!0)},o(e){F(o.$$.fragment,e),F(t.$$.fragment,e),n=!1},d(e){e&&C(r),v(o,e),v(t,e)}}}class w extends A{constructor(o){super(),x(this,o,null,Q,k,{})}}w.__docgen={version:3,name:"Colors.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const E=N(w,{meta:{title:"Visual Style/Colors"},stories:{All:{name:"All",template:!1,source:`<div
  use:wrapInShadowDom={disableCss}
  class="layout-grid layout-grid--column-3"
  style="--wrap: wrap"
>
  {#each colors as color}
    <div class="layout-flex-col">
      <div class="colors" style={\`background-color: var(--color-\${color.name})\`} />
      <span class="text-small">Navn: {color.name}</span>
      {#if color.alias}
        <span class="text-small">Alias: {color.alias}</span>
      {/if}
      <span class="text-small">Farge: {color.color}</span>
    </div>
  {/each}
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","wrapInShadowDom","colors"]}),eo=E.meta,lo=["All"],ao=E.stories.All;export{ao as All,lo as __namedExportsOrder,eo as default};
