import{S as R,i as V,s as W,c as w,m as S,t as P,a as T,d as F,b as X,e as Y}from"./index-D8riOviU.js";import{s as p,i as I,d as L,e as u,a as f,b as l,g as x,h as tt}from"./lifecycle-CcifP0R7.js";import{p as et,M as st,S as at}from"./collect-stories-BMzKwk3M.js";import{P as K}from"./Published-cEc3nsoO.js";import{S as lt}from"./Status-CIcBTCO6.js";import{w as rt}from"./utils-CMlWd0Pf.js";import"./utils-DjM8Id44.js";function nt(o){let s,t=o[4]+"",r;return{c(){s=u("h3"),r=x(t),f(s,"class","mt-h3"),f(s,"slot","heading")},m(i,e){I(i,s,e),l(s,r)},p(i,e){e&16&&t!==(t=i[4]+"")&&tt(r,t)},d(i){i&&L(s)}}}function ot(o){let s,t,r,i,e,n=o[2]+"",h,m,b,c,Z,k,j,y,G,v,C=o[2]+"",q,$,A,E,O,M,z,g,D,_,N,B;return m=new K({props:{publishFrom:o[0],professionallyUpdated:o[1]}}),$=new K({props:{publishFrom:o[0],professionallyUpdated:"2021-07-24T11:32:22Z"}}),g=new lt({props:{statusType:"important",updatedDate:o[0],text:o[3],$$slots:{heading:[nt]},$$scope:{ctx:o}}}),{c(){s=u("div"),t=u("article"),r=u("h1"),r.textContent="Publisert og faglig oppdatert er samme dato",i=p(),e=u("div"),h=p(),w(m.$$.fragment),b=p(),c=u("dl"),c.innerHTML='<dt class="mt-dt">Publisert</dt><dd class="mt-dd">01.02.2024</dd><dt class="mt-dt">Gjelder til og med</dt><dd class="mt-dd">01.02.2024</dd>',Z=p(),k=u("hr"),j=p(),y=u("h2"),y.textContent="Faglig oppdatert er etter publisert",G=p(),v=u("div"),q=p(),w($.$$.fragment),A=p(),E=u("hr"),O=p(),M=u("h2"),M.textContent="Status viser alltid oppdatert",z=p(),w(g.$$.fragment),f(r,"class","mt-h1"),f(e,"class","intro"),f(c,"class","mt-dl meta-rows"),f(y,"class","mt-h2"),f(v,"class","intro"),f(M,"class","mt-h2"),f(t,"class","article-page col-3-span-8"),f(s,"class","container layout-grid layout-grid--column-12")},m(a,d){I(a,s,d),l(s,t),l(t,r),l(t,i),l(t,e),e.innerHTML=n,l(t,h),S(m,t,null),l(t,b),l(t,c),l(t,Z),l(t,k),l(t,j),l(t,y),l(t,G),l(t,v),v.innerHTML=C,l(t,q),S($,t,null),l(t,A),l(t,E),l(t,O),l(t,M),l(t,z),S(g,t,null),_=!0,N||(B=X(D=rt.call(null,s,o[5])),N=!0)},p(a,d){(!_||d&4)&&n!==(n=a[2]+"")&&(e.innerHTML=n);const H={};d&1&&(H.publishFrom=a[0]),d&2&&(H.professionallyUpdated=a[1]),m.$set(H),(!_||d&4)&&C!==(C=a[2]+"")&&(v.innerHTML=C);const J={};d&1&&(J.publishFrom=a[0]),$.$set(J);const U={};d&1&&(U.updatedDate=a[0]),d&8&&(U.text=a[3]),d&80&&(U.$$scope={dirty:d,ctx:a}),g.$set(U),D&&Y(D.update)&&d&32&&D.update.call(null,a[5])},i(a){_||(P(m.$$.fragment,a),P($.$$.fragment,a),P(g.$$.fragment,a),_=!0)},o(a){T(m.$$.fragment,a),T($.$$.fragment,a),T(g.$$.fragment,a),_=!1},d(a){a&&L(s),F(m),F($),F(g),N=!1,B()}}}function it(o){let s,t,r,i;return s=new st({props:{title:"Components/Publisert",args:{intro:"<p>Paragraf med tekst. Paragraf med tekst.",statusTitle:"Status tittel",text:"<p>Status tekst</p>",publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",disableCss:!1},argTypes:{intro:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},disableCss:{control:"boolean"}}}}),r=new at({props:{name:"Normal",$$slots:{default:[ot,({publishFrom:e,professionallyUpdated:n,intro:h,text:m,statusTitle:b,disableCss:c})=>({0:e,1:n,2:h,3:m,4:b,5:c}),({publishFrom:e,professionallyUpdated:n,intro:h,text:m,statusTitle:b,disableCss:c})=>(e?1:0)|(n?2:0)|(h?4:0)|(m?8:0)|(b?16:0)|(c?32:0)]},$$scope:{ctx:o}}}),{c(){w(s.$$.fragment),t=p(),w(r.$$.fragment)},m(e,n){S(s,e,n),I(e,t,n),S(r,e,n),i=!0},p(e,[n]){const h={};n&127&&(h.$$scope={dirty:n,ctx:e}),r.$set(h)},i(e){i||(P(s.$$.fragment,e),P(r.$$.fragment,e),i=!0)},o(e){T(s.$$.fragment,e),T(r.$$.fragment,e),i=!1},d(e){e&&L(t),F(s,e),F(r,e)}}}class dt extends R{constructor(s){super(),V(this,s,null,it,W,{})}}const Q=et(dt,{meta:{title:"Components/Publisert"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
  <article class="article-page col-3-span-8">
    <h1 class="mt-h1">Publisert og faglig oppdatert er samme dato</h1>
    <div class="intro">
      {@html intro}
    </div>
    <Published {publishFrom} {professionallyUpdated} />
    <dl class="mt-dl meta-rows">
      <dt class="mt-dt">Publisert</dt>
      <dd class="mt-dd">01.02.2024</dd>
      <dt class="mt-dt">Gjelder til og med</dt>
      <dd class="mt-dd">01.02.2024</dd>
    </dl>

    <hr />
    <h2 class="mt-h2">Faglig oppdatert er etter publisert</h2>
    <div class="intro">
      {@html intro}
    </div>
    <Published {publishFrom} professionallyUpdated="2021-07-24T11:32:22Z" />
    <hr />
    <h2 class="mt-h2">Status viser alltid oppdatert</h2>
    <Status statusType={'important'} updatedDate={publishFrom} {text}>
      <h3 class="mt-h3" slot="heading">{statusTitle}</h3>
    </Status>
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Published","Status","wrapInShadowDom"]}),gt=Q.meta,bt=["Normal"],_t=Q.stories.Normal;export{_t as Normal,bt as __namedExportsOrder,gt as default};
