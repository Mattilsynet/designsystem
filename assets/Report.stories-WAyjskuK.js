import{S as oe,i as re,s as ae,c as W,m as Z,t as M,a as P,d as q,b as fe,g as ne,f as ie,e as de}from"./index-D8riOviU.js";import{s as R,i as p,d as c,e as a,g as me,f as U,a as T,b as u,h as ue}from"./lifecycle-CcifP0R7.js";import{p as pe,M as ce,S as _e}from"./collect-stories-BMzKwk3M.js";import{P as ge}from"./Published-cEc3nsoO.js";import{L as be}from"./Link-BBVzc4O1.js";import{w as ke}from"./utils-CMlWd0Pf.js";import"./utils-DjM8Id44.js";function J(s){let l,t=s[1]+"";return{c(){l=a("div"),T(l,"class","intro")},m(n,e){p(n,l,e),l.innerHTML=t},p(n,e){e&2&&t!==(t=n[1]+"")&&(l.innerHTML=t)},d(n){n&&c(l)}}}function K(s){let l,t=s[2]+"";return{c(){l=a("div"),T(l,"class","text")},m(n,e){p(n,l,e),l.innerHTML=t},p(n,e){e&4&&t!==(t=n[2]+"")&&(l.innerHTML=t)},d(n){n&&c(l)}}}function Q(s){let l,t,n=s[5]+"";return{c(){l=a("dt"),l.textContent="Hva undersøkte vi?",t=a("dd"),T(t,"class","text")},m(e,i){p(e,l,i),p(e,t,i),t.innerHTML=n},p(e,i){i&32&&n!==(n=e[5]+"")&&(t.innerHTML=n)},d(e){e&&(c(l),c(t))}}}function X(s){let l,t,n=s[6]+"";return{c(){l=a("dt"),l.textContent="Tidsrom",t=a("dd"),T(t,"class","text")},m(e,i){p(e,l,i),p(e,t,i),t.innerHTML=n},p(e,i){i&64&&n!==(n=e[6]+"")&&(t.innerHTML=n)},d(e){e&&(c(l),c(t))}}}function Y(s){let l,t,n=s[7]+"";return{c(){l=a("dt"),l.textContent="Hva lette vi etter?",t=a("dd"),T(t,"class","text")},m(e,i){p(e,l,i),p(e,t,i),t.innerHTML=n},p(e,i){i&128&&n!==(n=e[7]+"")&&(t.innerHTML=n)},d(e){e&&(c(l),c(t))}}}function x(s){let l,t,n=s[8]+"";return{c(){l=a("dt"),l.textContent="Hva fant vi?",t=a("dd"),T(t,"class","text")},m(e,i){p(e,l,i),p(e,t,i),t.innerHTML=n},p(e,i){i&256&&n!==(n=e[8]+"")&&(t.innerHTML=n)},d(e){e&&(c(l),c(t))}}}function ee(s){let l,t,n=s[10]+"";return{c(){l=a("dt"),l.textContent="Hvem utførte oppdraget?",t=a("dd"),T(t,"class","text")},m(e,i){p(e,l,i),p(e,t,i),t.innerHTML=n},p(e,i){i&1024&&n!==(n=e[10]+"")&&(t.innerHTML=n)},d(e){e&&(c(l),c(t))}}}function te(s){let l,t,n,e=s[11].url&&le(s);return{c(){l=a("dt"),l.textContent="File",t=a("dd"),e&&e.c(),T(t,"class","text")},m(i,f){p(i,l,f),p(i,t,f),e&&e.m(t,null),n=!0},p(i,f){i[11].url?e?(e.p(i,f),f&2048&&M(e,1)):(e=le(i),e.c(),M(e,1),e.m(t,null)):e&&(ne(),P(e,1,1,()=>{e=null}),ie())},i(i){n||(M(e),n=!0)},o(i){P(e),n=!1},d(i){i&&(c(l),c(t)),e&&e.d()}}}function le(s){let l,t;return l=new be({props:{class:"document",href:s[11].url,linkText:s[0],fileName:s[11].text}}),{c(){W(l.$$.fragment)},m(n,e){Z(l,n,e),t=!0},p(n,e){const i={};e&2048&&(i.href=n[11].url),e&1&&(i.linkText=n[0]),e&2048&&(i.fileName=n[11].text),l.$set(i)},i(n){t||(M(l.$$.fragment,n),t=!0)},o(n){P(l.$$.fragment,n),t=!1},d(n){q(l,n)}}}function he(s){let l,t,n,e=s[9]+"",i,f,w,F=s[0]+"",j,C,H,A,L,D,r,N,S,I,O,V,y,E,z,G,_=s[1]&&J(s);H=new ge({props:{publishFrom:s[3],professionallyUpdated:s[4]}});let g=s[2]&&K(s),b=s[5]&&Q(s),k=s[6]&&X(s),h=s[7]&&Y(s),v=s[8]&&x(s),$=s[10]&&ee(s),d=s[11].url&&te(s);return{c(){l=a("div"),t=a("article"),n=a("span"),i=me(e),f=R(),w=a("h1"),j=R(),_&&_.c(),C=R(),W(H.$$.fragment),A=R(),L=a("section"),g&&g.c(),D=R(),r=a("dl"),b&&b.c(),N=U(),k&&k.c(),S=U(),h&&h.c(),I=U(),v&&v.c(),O=U(),$&&$.c(),V=U(),d&&d.c(),T(w,"class","mt-h1"),T(r,"class","mt-dl report-list"),T(L,"class","background-mt-white col-3-span-8 p-xs m-t-m"),T(t,"class","article-page col-1-span-12 report"),T(l,"class","layout-grid layout-grid--column-12")},m(o,m){p(o,l,m),u(l,t),u(t,n),u(n,i),u(t,f),u(t,w),w.innerHTML=F,u(t,j),_&&_.m(t,null),u(t,C),Z(H,t,null),u(t,A),u(t,L),g&&g.m(L,null),u(L,D),u(L,r),b&&b.m(r,null),u(r,N),k&&k.m(r,null),u(r,S),h&&h.m(r,null),u(r,I),v&&v.m(r,null),u(r,O),$&&$.m(r,null),u(r,V),d&&d.m(r,null),E=!0,z||(G=fe(y=ke.call(null,l,s[13])),z=!0)},p(o,m){(!E||m&512)&&e!==(e=o[9]+"")&&ue(i,e),(!E||m&1)&&F!==(F=o[0]+"")&&(w.innerHTML=F),o[1]?_?_.p(o,m):(_=J(o),_.c(),_.m(t,C)):_&&(_.d(1),_=null);const B={};m&8&&(B.publishFrom=o[3]),m&16&&(B.professionallyUpdated=o[4]),H.$set(B),o[2]?g?g.p(o,m):(g=K(o),g.c(),g.m(L,D)):g&&(g.d(1),g=null),o[5]?b?b.p(o,m):(b=Q(o),b.c(),b.m(r,N)):b&&(b.d(1),b=null),o[6]?k?k.p(o,m):(k=X(o),k.c(),k.m(r,S)):k&&(k.d(1),k=null),o[7]?h?h.p(o,m):(h=Y(o),h.c(),h.m(r,I)):h&&(h.d(1),h=null),o[8]?v?v.p(o,m):(v=x(o),v.c(),v.m(r,O)):v&&(v.d(1),v=null),o[10]?$?$.p(o,m):($=ee(o),$.c(),$.m(r,V)):$&&($.d(1),$=null),o[11].url?d?(d.p(o,m),m&2048&&M(d,1)):(d=te(o),d.c(),M(d,1),d.m(r,null)):d&&(ne(),P(d,1,1,()=>{d=null}),ie()),y&&de(y.update)&&m&8192&&y.update.call(null,o[13])},i(o){E||(M(H.$$.fragment,o),M(d),E=!0)},o(o){P(H.$$.fragment,o),P(d),E=!1},d(o){o&&c(l),_&&_.d(),q(H),g&&g.d(),b&&b.d(),k&&k.d(),h&&h.d(),v&&v.d(),$&&$.d(),d&&d.d(),z=!1,G()}}}function ve(s){let l,t,n,e;return l=new ce({props:{title:"Innhold/Rapport",args:{reportType:"Rapport",title:"Veterinær grensekontroll sjømat 2020",intro:"Intro til grensekontroll",text:"Teksten til grensekontrollen",publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",subjectToExamination:"Dette undersøkte vi",timePeriod:"Dette er tidsperioden",lookingForWhat:"Dette så vi etter",organisationPerformingAssignment:"Disse utførte oppdraget",findings:"Dette fant vi",file:{text:"Filrapporten.pdf",url:"http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf"},disableCss:!1},argTypes:{title:{control:"text"},reportType:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},subjectToExamination:{control:"text"},timePeriod:{control:"text"},lookingForWhat:{control:"text"},organisationPerformingAssignment:{control:"text"},findings:{control:"text"},file:{control:"object"},disableCss:{control:"boolean"}}}}),n=new _e({props:{name:"Normal",$$slots:{default:[he,({title:i,intro:f,text:w,publishFrom:F,professionallyUpdated:j,subjectToExamination:C,timePeriod:H,lookingForWhat:A,findings:L,reportType:D,organisationPerformingAssignment:r,file:N,linkGroups:S,disableCss:I})=>({0:i,1:f,2:w,3:F,4:j,5:C,6:H,7:A,8:L,9:D,10:r,11:N,12:S,13:I}),({title:i,intro:f,text:w,publishFrom:F,professionallyUpdated:j,subjectToExamination:C,timePeriod:H,lookingForWhat:A,findings:L,reportType:D,organisationPerformingAssignment:r,file:N,linkGroups:S,disableCss:I})=>(i?1:0)|(f?2:0)|(w?4:0)|(F?8:0)|(j?16:0)|(C?32:0)|(H?64:0)|(A?128:0)|(L?256:0)|(D?512:0)|(r?1024:0)|(N?2048:0)|(S?4096:0)|(I?8192:0)]},$$scope:{ctx:s}}}),{c(){W(l.$$.fragment),t=R(),W(n.$$.fragment)},m(i,f){Z(l,i,f),p(i,t,f),Z(n,i,f),e=!0},p(i,[f]){const w={};f&28671&&(w.$$scope={dirty:f,ctx:i}),n.$set(w)},i(i){e||(M(l.$$.fragment,i),M(n.$$.fragment,i),e=!0)},o(i){P(l.$$.fragment,i),P(n.$$.fragment,i),e=!1},d(i){i&&c(t),q(l,i),q(n,i)}}}class $e extends oe{constructor(l){super(),re(this,l,null,ve,ae,{})}}const se=pe($e,{meta:{title:"Innhold/Rapport"},stories:{Normal:{name:"Normal",template:!1,source:`<div class="layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <article class="article-page col-1-span-12 report">
    <span>{reportType}</span>
    <h1 class="mt-h1">{@html title}</h1>

    {#if intro}
      <div class="intro">
        {@html intro}
      </div>
    {/if}

    <Published {publishFrom} {professionallyUpdated} />

    <section class="background-mt-white col-3-span-8 p-xs m-t-m">
      {#if text}
        <div class="text">
          {@html text}
        </div>
      {/if}
      <dl class="mt-dl report-list">
        {#if subjectToExamination}
          <dt>Hva undersøkte vi?</dt>
          <dd class="text">{@html subjectToExamination}</dd>
        {/if}
        {#if timePeriod}
          <dt>Tidsrom</dt>
          <dd class="text">{@html timePeriod}</dd>
        {/if}
        {#if lookingForWhat}
          <dt>Hva lette vi etter?</dt>
          <dd class="text">{@html lookingForWhat}</dd>
        {/if}
        {#if findings}
          <dt>Hva fant vi?</dt>
          <dd class="text">{@html findings}</dd>
        {/if}
        {#if organisationPerformingAssignment}
          <dt>Hvem utførte oppdraget?</dt>
          <dd class="text">{@html organisationPerformingAssignment}</dd>
        {/if}
        {#if file.url}
          <dt>File</dt>
          <dd class="text">
            {#if file.url}
              <Link class="document" href={file.url} linkText={title} fileName={file.text} />
            {/if}
          </dd>
        {/if}
      </dl>
    </section>
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Published","Link","wrapInShadowDom"]}),Ce=se.meta,De=["Normal"],Ne=se.stories.Normal;export{Ne as Normal,De as __namedExportsOrder,Ce as default};
