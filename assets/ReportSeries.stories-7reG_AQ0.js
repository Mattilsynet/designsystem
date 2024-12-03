import{S as Q,i as X,s as Y,c as j,m as N,t as w,a as P,d as A,b as ee,g as E,f as W,e as te}from"./index-D8riOviU.js";import{s as C,i as _,d as g,e as p,a as L,b as D,c as ie,f as S}from"./lifecycle-CcifP0R7.js";import{e as R}from"./each-Dzkb-YsG.js";import{p as ne,M as le,S as oe}from"./collect-stories-BMzKwk3M.js";import{D as re}from"./Disclosure-DjpXovmX.js";import{P as se}from"./Published-cEc3nsoO.js";import{L as ae}from"./Link-BBVzc4O1.js";import{w as fe}from"./utils-CMlWd0Pf.js";import"./index-DTCOkSMf.js";import"./HeadingLevel-RQgwHrl0.js";import"./utils-DjM8Id44.js";function O(r,n,e){const i=r.slice();return i[7]=n[e],i[9]=e,i}function U(r){let n,e=r[1]+"";return{c(){n=p("div"),L(n,"class","intro")},m(i,t){_(i,n,t),n.innerHTML=e},p(i,t){t&2&&e!==(e=i[1]+"")&&(n.innerHTML=e)},d(i){i&&g(n)}}}function x(r){let n,e=r[7].text+"";return{c(){n=p("div"),L(n,"class","text")},m(i,t){_(i,n,t),n.innerHTML=e},p(i,t){t&32&&e!==(e=i[7].text+"")&&(n.innerHTML=e)},d(i){i&&g(n)}}}function y(r){let n,e,i=r[7].subjectToExamination+"";return{c(){n=p("dt"),n.textContent="Hva undersøkte vi?",e=p("dd"),L(e,"class","text")},m(t,l){_(t,n,l),_(t,e,l),e.innerHTML=i},p(t,l){l&32&&i!==(i=t[7].subjectToExamination+"")&&(e.innerHTML=i)},d(t){t&&(g(n),g(e))}}}function V(r){let n,e,i=r[7].timePeriod+"";return{c(){n=p("dt"),n.textContent="Tidsrom",e=p("dd"),L(e,"class","text")},m(t,l){_(t,n,l),_(t,e,l),e.innerHTML=i},p(t,l){l&32&&i!==(i=t[7].timePeriod+"")&&(e.innerHTML=i)},d(t){t&&(g(n),g(e))}}}function Z(r){let n,e,i=r[7].lookingForWhat+"";return{c(){n=p("dt"),n.textContent="Hva lette vi etter?",e=p("dd"),L(e,"class","text")},m(t,l){_(t,n,l),_(t,e,l),e.innerHTML=i},p(t,l){l&32&&i!==(i=t[7].lookingForWhat+"")&&(e.innerHTML=i)},d(t){t&&(g(n),g(e))}}}function q(r){let n,e,i=r[7].findings+"";return{c(){n=p("dt"),n.textContent="Hva fant vi?",e=p("dd"),L(e,"class","text")},m(t,l){_(t,n,l),_(t,e,l),e.innerHTML=i},p(t,l){l&32&&i!==(i=t[7].findings+"")&&(e.innerHTML=i)},d(t){t&&(g(n),g(e))}}}function B(r){let n,e,i=r[7].organisationPerformingAssignment+"";return{c(){n=p("dt"),n.textContent="Hvem utførte oppdraget?",e=p("dd"),L(e,"class","text")},m(t,l){_(t,n,l),_(t,e,l),e.innerHTML=i},p(t,l){l&32&&i!==(i=t[7].organisationPerformingAssignment+"")&&(e.innerHTML=i)},d(t){t&&(g(n),g(e))}}}function z(r){let n,e,i,t=r[7].file.url&&G(r);return{c(){n=p("dt"),n.textContent="File",e=p("dd"),t&&t.c(),L(e,"class","text")},m(l,d){_(l,n,d),_(l,e,d),t&&t.m(e,null),i=!0},p(l,d){l[7].file.url?t?(t.p(l,d),d&32&&w(t,1)):(t=G(l),t.c(),w(t,1),t.m(e,null)):t&&(E(),P(t,1,1,()=>{t=null}),W())},i(l){i||(w(t),i=!0)},o(l){P(t),i=!1},d(l){l&&(g(n),g(e)),t&&t.d()}}}function G(r){let n,e;return n=new ae({props:{class:"document",href:r[7].file.url,linkText:r[7].title,fileName:r[7].file.text}}),{c(){j(n.$$.fragment)},m(i,t){N(n,i,t),e=!0},p(i,t){const l={};t&32&&(l.href=i[7].file.url),t&32&&(l.linkText=i[7].title),t&32&&(l.fileName=i[7].file.text),n.$set(l)},i(i){e||(w(n.$$.fragment,i),e=!0)},o(i){P(n.$$.fragment,i),e=!1},d(i){A(n,i)}}}function de(r){let n,e,i,t,l,d,H,M,$,c=r[7].text&&x(r),u=r[7].subjectToExamination&&y(r),m=r[7].timePeriod&&V(r),b=r[7].lookingForWhat&&Z(r),h=r[7].findings&&q(r),a=r[7].organisationPerformingAssignment&&B(r),f=r[7].file.url&&z(r);return{c(){c&&c.c(),n=C(),e=p("dl"),u&&u.c(),i=S(),m&&m.c(),t=S(),b&&b.c(),l=S(),h&&h.c(),d=S(),a&&a.c(),H=S(),f&&f.c(),M=C(),L(e,"class","mt-dl report-list")},m(o,v){c&&c.m(o,v),_(o,n,v),_(o,e,v),u&&u.m(e,null),D(e,i),m&&m.m(e,null),D(e,t),b&&b.m(e,null),D(e,l),h&&h.m(e,null),D(e,d),a&&a.m(e,null),D(e,H),f&&f.m(e,null),_(o,M,v),$=!0},p(o,v){o[7].text?c?c.p(o,v):(c=x(o),c.c(),c.m(n.parentNode,n)):c&&(c.d(1),c=null),o[7].subjectToExamination?u?u.p(o,v):(u=y(o),u.c(),u.m(e,i)):u&&(u.d(1),u=null),o[7].timePeriod?m?m.p(o,v):(m=V(o),m.c(),m.m(e,t)):m&&(m.d(1),m=null),o[7].lookingForWhat?b?b.p(o,v):(b=Z(o),b.c(),b.m(e,l)):b&&(b.d(1),b=null),o[7].findings?h?h.p(o,v):(h=q(o),h.c(),h.m(e,d)):h&&(h.d(1),h=null),o[7].organisationPerformingAssignment?a?a.p(o,v):(a=B(o),a.c(),a.m(e,H)):a&&(a.d(1),a=null),o[7].file.url?f?(f.p(o,v),v&32&&w(f,1)):(f=z(o),f.c(),w(f,1),f.m(e,null)):f&&(E(),P(f,1,1,()=>{f=null}),W())},i(o){$||(w(f),$=!0)},o(o){P(f),$=!1},d(o){o&&(g(n),g(e),g(M)),c&&c.d(o),u&&u.d(),m&&m.d(),b&&b.d(),h&&h.d(),a&&a.d(),f&&f.d()}}}function J(r){let n,e;return n=new re({props:{title:r[7].title,theme:"no-border",class:"background-mt-white col-3-span-8",startOpen:r[9]===0,headerTag:"h2",$$slots:{default:[de]},$$scope:{ctx:r}}}),{c(){j(n.$$.fragment)},m(i,t){N(n,i,t),e=!0},p(i,t){const l={};t&32&&(l.title=i[7].title),t&1056&&(l.$$scope={dirty:t,ctx:i}),n.$set(l)},i(i){e||(w(n.$$.fragment,i),e=!0)},o(i){P(n.$$.fragment,i),e=!1},d(i){A(n,i)}}}function ue(r){let n,e,i,t,l,d=r[0]+"",H,M,$,c,u,m,b,h,a=r[1]&&U(r);$=new se({props:{publishFrom:r[3],professionallyUpdated:r[4]}});let f=R(r[5]),o=[];for(let s=0;s<f.length;s+=1)o[s]=J(O(r,f,s));const v=s=>P(o[s],1,1,()=>{o[s]=null});return{c(){n=p("div"),e=p("article"),i=p("span"),i.textContent="Rapport",t=C(),l=p("h1"),H=C(),a&&a.c(),M=C(),j($.$$.fragment),c=C();for(let s=0;s<o.length;s+=1)o[s].c();L(l,"class","mt-h1"),L(e,"class","article-page col-1-span-12 report"),L(n,"class","layout-grid layout-grid--column-12")},m(s,k){_(s,n,k),D(n,e),D(e,i),D(e,t),D(e,l),l.innerHTML=d,D(e,H),a&&a.m(e,null),D(e,M),N($,e,null),D(e,c);for(let F=0;F<o.length;F+=1)o[F]&&o[F].m(e,null);m=!0,b||(h=ee(u=fe.call(null,n,r[6])),b=!0)},p(s,k){(!m||k&1)&&d!==(d=s[0]+"")&&(l.innerHTML=d),s[1]?a?a.p(s,k):(a=U(s),a.c(),a.m(e,M)):a&&(a.d(1),a=null);const F={};if(k&8&&(F.publishFrom=s[3]),k&16&&(F.professionallyUpdated=s[4]),$.$set(F),k&32){f=R(s[5]);let T;for(T=0;T<f.length;T+=1){const I=O(s,f,T);o[T]?(o[T].p(I,k),w(o[T],1)):(o[T]=J(I),o[T].c(),w(o[T],1),o[T].m(e,null))}for(E(),T=f.length;T<o.length;T+=1)v(T);W()}u&&te(u.update)&&k&64&&u.update.call(null,s[6])},i(s){if(!m){w($.$$.fragment,s);for(let k=0;k<f.length;k+=1)w(o[k]);m=!0}},o(s){P($.$$.fragment,s),o=o.filter(Boolean);for(let k=0;k<o.length;k+=1)P(o[k]);m=!1},d(s){s&&g(n),a&&a.d(),A($),ie(o,s),b=!1,h()}}}function ce(r){let n,e,i,t;return n=new le({props:{title:"Innhold/Rapportserie",args:{title:"Hovedoverskrift",intro:"Veterinær grensekontroll sjømat 2020",text:"Veterinær grensekontroll sjømat 2020",publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",publications:[{title:"Overskrift 1",text:"Tekst 1",subjectToExamination:"Dette undersøkte vi",timePeriod:"Dette er tidsperioden",lookingForWhat:"Dette så vi etter",organisationPerformingAssignment:"Disse utførte oppdraget",findings:"Dette fant vi",file:{text:"Filrapporten.pdf",url:"http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf"}},{title:"Overskrift 2",subjectToExamination:"Dette undersøkte vi",timePeriod:"Dette er tidsperioden",lookingForWhat:"Dette så vi etter",organisationPerformingAssignment:"Disse utførte oppdraget",findings:"Dette fant vi",file:{text:"Filrapporten",url:"http://www.mattilsynet-xp7prod.enonic.cloud/test.pdf"}}],disableCss:!1},argTypes:{title:{control:"text"},intro:{control:"text"},text:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},publications:{control:"array"},disableCss:{control:"boolean"}}}}),i=new oe({props:{name:"Normal",$$slots:{default:[ue,({title:l,intro:d,text:H,publishFrom:M,professionallyUpdated:$,publications:c,disableCss:u})=>({0:l,1:d,2:H,3:M,4:$,5:c,6:u}),({title:l,intro:d,text:H,publishFrom:M,professionallyUpdated:$,publications:c,disableCss:u})=>(l?1:0)|(d?2:0)|(H?4:0)|(M?8:0)|($?16:0)|(c?32:0)|(u?64:0)]},$$scope:{ctx:r}}}),{c(){j(n.$$.fragment),e=C(),j(i.$$.fragment)},m(l,d){N(n,l,d),_(l,e,d),N(i,l,d),t=!0},p(l,[d]){const H={};d&1147&&(H.$$scope={dirty:d,ctx:l}),i.$set(H)},i(l){t||(w(n.$$.fragment,l),w(i.$$.fragment,l),t=!0)},o(l){P(n.$$.fragment,l),P(i.$$.fragment,l),t=!1},d(l){l&&g(e),A(n,l),A(i,l)}}}class me extends Q{constructor(n){super(),X(this,n,null,ce,Y,{})}}const K=ne(me,{meta:{title:"Innhold/Rapportserie"},stories:{Normal:{name:"Normal",template:!1,source:`<div class="layout-grid layout-grid--column-12" use:wrapInShadowDom={disableCss}>
  <article class="article-page col-1-span-12 report">
    <span>Rapport</span>
    <h1 class="mt-h1">{@html title}</h1>
    {#if intro}
      <div class="intro">
        {@html intro}
      </div>
    {/if}
    <Published {publishFrom} {professionallyUpdated} />

    {#each publications as publication, index}
      <Disclosure
        title={publication.title}
        theme="no-border"
        class="background-mt-white col-3-span-8"
        startOpen={index === 0}
        headerTag="h2">
        {#if publication.text}
          <div class="text">
            {@html publication.text}
          </div>
        {/if}
        <dl class="mt-dl report-list">
          {#if publication.subjectToExamination}
            <dt>Hva undersøkte vi?</dt>
            <dd class="text">{@html publication.subjectToExamination}</dd>
          {/if}
          {#if publication.timePeriod}
            <dt>Tidsrom</dt>
            <dd class="text">{@html publication.timePeriod}</dd>
          {/if}
          {#if publication.lookingForWhat}
            <dt>Hva lette vi etter?</dt>
            <dd class="text">{@html publication.lookingForWhat}</dd>
          {/if}
          {#if publication.findings}
            <dt>Hva fant vi?</dt>
            <dd class="text">{@html publication.findings}</dd>
          {/if}
          {#if publication.organisationPerformingAssignment}
            <dt>Hvem utførte oppdraget?</dt>
            <dd class="text">{@html publication.organisationPerformingAssignment}</dd>
          {/if}
          {#if publication.file.url}
            <dt>File</dt>
            <dd class="text">
              {#if publication.file.url}
                <Link
                  class="document"
                  href={publication.file.url}
                  linkText={publication.title}
                  fileName={publication.file.text} />
              {/if}
            </dd>
          {/if}
        </dl>
      </Disclosure>
    {/each}
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Disclosure","Published","Link","wrapInShadowDom"]}),De=K.meta,Le=["Normal"],Me=K.stories.Normal;export{Me as Normal,Le as __namedExportsOrder,De as default};
