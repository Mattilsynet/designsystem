import{S as ne,i as re,s as se,c as H,m as R,t as S,a as j,d as O,b as oe,g as ie,f as de,e as ce,n as me}from"./index-D8riOviU.js";import{s as _,i as q,d as B,e as k,g as M,a as f,b as o,h as U,c as Y,H as Q}from"./lifecycle-CcifP0R7.js";import{e as G}from"./each-Dzkb-YsG.js";import{p as fe,M as ge,S as he}from"./collect-stories-BMzKwk3M.js";import{C as X}from"./CardArticle-DAPgikOA.js";import{S as ue}from"./SummaryDetail-Bk7bDGdu.js";import{t as J}from"./utils-DjM8Id44.js";import{w as pe}from"./utils-CMlWd0Pf.js";import"./HeadingLevel-RQgwHrl0.js";function Z(i,e,l){const r=i.slice();return r[6]=e[l],r}function ee(i,e,l){const r=i.slice();return r[6]=e[l],r}function te(i){let e,l,r=i[6].title+"",h,t,c;return{c(){e=k("li"),l=k("a"),h=M(r),c=_(),f(l,"href",t="#"+J(i[6].title)),f(l,"class","mt-link down-arrow")},m(g,p){q(g,e,p),o(e,l),o(l,h),o(e,c)},p(g,p){p&4&&r!==(r=g[6].title+"")&&U(h,r),p&4&&t!==(t="#"+J(g[6].title))&&f(l,"href",t)},d(g){g&&B(e)}}}function ke(i){let e,l,r,h;return e=new X({props:{type:"legal-text",title:"Dette er tittelen",text:"Noe tekst i kroppen",linkUrl:"http://",linkText:"Last ned mal for internkontroll"}}),r=new X({props:{type:"legal-text",title:"Dette er tittelen",text:"Noe tekst i kroppen",linkUrl:"http://",linkText:"Last ned mal for internkontroll"}}),{c(){H(e.$$.fragment),l=_(),H(r.$$.fragment)},m(t,c){R(e,t,c),q(t,l,c),R(r,t,c),h=!0},p:me,i(t){h||(S(e.$$.fragment,t),S(r.$$.fragment,t),h=!0)},o(t){j(e.$$.fragment,t),j(r.$$.fragment,t),h=!1},d(t){t&&B(l),O(e,t),O(r,t)}}}function le(i){let e,l,r=i[6].title+"",h,t,c,g=i[6].intro+"",p,w,$,E=i[6].text+"",y,v,x,N=i[6].howToDoItTitle+"",V,P,K,C=i[6].howToDoIt+"",A,I,L,b,T,F,D,d;return I=new X({props:{type:"task",class:"background-mt-white",title:"Dette er tittelen",text:"Noe tekst i kroppen",linkUrl:"http://",linkText:"Last ned mal for internkontroll",headerTag:"h4"}}),T=new ue({props:{title:"Regelverk",detailsClass:"color-neutral border-neutral",summaryWrapperClass:"background-mt-white layout-flex-col gap-13",$$slots:{default:[ke]},$$scope:{ctx:i}}}),{c(){e=k("article"),l=k("h2"),h=M(r),t=_(),c=k("div"),p=M(g),w=_(),$=new Q(!1),y=_(),v=k("section"),x=k("h3"),V=M(N),P=_(),K=new Q(!1),A=_(),H(I.$$.fragment),L=_(),b=k("section"),H(T.$$.fragment),F=_(),f(l,"id","collection-title-1"),f(l,"class","mt-h2"),f(c,"class","intro"),$.a=y,f(x,"id","how-to-heading-1"),f(x,"class","mt-h3"),K.a=A,f(v,"class","article-page children-full-width"),f(v,"aria-labelledby","how-to-heading-1"),f(b,"class","layout-flex-col layout-flex-col--x-small"),f(e,"id",D=J(i[6].title)),f(e,"class","legal-collection legal-collection__border-top col-1-span-12"),f(e,"aria-labelledby","collection-title-1")},m(m,s){q(m,e,s),o(e,l),o(l,h),o(e,t),o(e,c),o(c,p),o(e,w),$.m(E,e),o(e,y),o(e,v),o(v,x),o(x,V),o(v,P),K.m(C,v),o(v,A),R(I,v,null),o(e,L),o(e,b),R(T,b,null),o(e,F),d=!0},p(m,s){(!d||s&4)&&r!==(r=m[6].title+"")&&U(h,r),(!d||s&4)&&g!==(g=m[6].intro+"")&&U(p,g),(!d||s&4)&&E!==(E=m[6].text+"")&&$.p(E),(!d||s&4)&&N!==(N=m[6].howToDoItTitle+"")&&U(V,N),(!d||s&4)&&C!==(C=m[6].howToDoIt+"")&&K.p(C);const z={};s&2048&&(z.$$scope={dirty:s,ctx:m}),T.$set(z),(!d||s&4&&D!==(D=J(m[6].title)))&&f(e,"id",D)},i(m){d||(S(I.$$.fragment,m),S(T.$$.fragment,m),d=!0)},o(m){j(I.$$.fragment,m),j(T.$$.fragment,m),d=!1},d(m){m&&B(e),O(I),O(T)}}}function ve(i){let e,l,r,h=i[0]+"",t,c,g,p,w=i[1]+"",$,E,y,v,x=i[4]+"",N,V,P,K,C,A=i[3]+"",I,L,b,T,F,D=G(i[2]),d=[];for(let a=0;a<D.length;a+=1)d[a]=te(ee(i,D,a));let m=G(i[2]),s=[];for(let a=0;a<m.length;a+=1)s[a]=le(Z(i,m,a));const z=a=>j(s[a],1,1,()=>{s[a]=null});return{c(){e=k("div"),l=k("article"),r=k("h1"),t=M(h),c=_(),g=k("div"),p=k("p"),$=M(w),E=_(),y=k("section"),v=k("h2"),N=M(x),V=_(),P=k("ol");for(let a=0;a<d.length;a+=1)d[a].c();K=_(),C=new Q(!1),I=_();for(let a=0;a<s.length;a+=1)s[a].c();f(r,"class","mt-h1"),f(g,"class","intro"),f(v,"id","table-of-contents"),f(v,"class","mt-h4"),f(P,"class","mt-ol m-t-xxs list-unstyled"),f(y,"class","table-of-contents"),f(y,"aria-labelledby","table-of-contents"),C.a=I,f(l,"class","article-page col-1-span-12 legal-guidance"),f(e,"class","container layout-grid layout-grid--column-12")},m(a,u){q(a,e,u),o(e,l),o(l,r),o(r,t),o(l,c),o(l,g),o(g,p),o(p,$),o(l,E),o(l,y),o(y,v),o(v,N),o(y,V),o(y,P);for(let n=0;n<d.length;n+=1)d[n]&&d[n].m(P,null);o(l,K),C.m(A,l),o(l,I);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(l,null);b=!0,T||(F=oe(L=pe.call(null,e,i[5])),T=!0)},p(a,u){if((!b||u&1)&&h!==(h=a[0]+"")&&U(t,h),(!b||u&2)&&w!==(w=a[1]+"")&&U($,w),(!b||u&16)&&x!==(x=a[4]+"")&&U(N,x),u&4){D=G(a[2]);let n;for(n=0;n<D.length;n+=1){const W=ee(a,D,n);d[n]?d[n].p(W,u):(d[n]=te(W),d[n].c(),d[n].m(P,null))}for(;n<d.length;n+=1)d[n].d(1);d.length=D.length}if((!b||u&8)&&A!==(A=a[3]+"")&&C.p(A),u&4){m=G(a[2]);let n;for(n=0;n<m.length;n+=1){const W=Z(a,m,n);s[n]?(s[n].p(W,u),S(s[n],1)):(s[n]=le(W),s[n].c(),S(s[n],1),s[n].m(l,null))}for(ie(),n=m.length;n<s.length;n+=1)z(n);de()}L&&ce(L.update)&&u&32&&L.update.call(null,a[5])},i(a){if(!b){for(let u=0;u<m.length;u+=1)S(s[u]);b=!0}},o(a){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)j(s[u]);b=!1},d(a){a&&B(e),Y(d,a),Y(s,a),T=!1,F()}}}function _e(i){let e,l,r,h;return e=new ge({props:{title:"Innhold/Samleside",args:{title:"Regelveiledning samleside overskrift",intro:"Regelveiledning samleside ingress",tableOfContents:"Innhold på siden",text:`<h2 class="mt-h2">Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class="mt-link" href="">Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul >
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,disableCss:!1,legalItems:[{title:"Første regelveiledning",intro:"Første regelveiledning intro tekst.",text:`<h2 class="mt-h2">Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class="mt-link" href="">Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>
          <table class="mt-table responsive-table col-2-span-10" role="table">
          <caption class="mt-caption">Merkeregler for flaskevann</caption>
          <thead role="rowgroup" class="mt-thead">
          <tr role="row" class="mt-tr"><th role="columnheader" scope="col" class="mt-th">Produkt/merking med</th>
          <th role="columnheader" scope="col" class="mt-th">Handelsnavn/varenavn/varemerke</th>
          <th role="columnheader" scope="col" class="mt-th">Kilde/utvinningssted for kilden (for naturlig mineralvann/kildevann)</th>
          <th role="columnheader" scope="col" class="mt-th">Varebetegnelse</th></tr></thead>
          <tbody><tr role="row">
          <td class="text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Produkt/merking med</span>Naturlig mineralvann/kildevann</td>
          <td class="text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Handelsnavn/varenavn/varemerke</span>Skal ikke frambys under mer enn ett handelsnavn/varenavn.</td>
          <td class="text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Kilde/utvinningssted for kilden (for naturlig mineralvann/kildevann)</span>Navnet på kilden/utvinningsstedet skal være dominerende.</td>
          <td class="text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Varebetegnelse</span>Naturlig mineralvann eller kildevann.<br><br>Varebetegnelsen naturlig mineralvann tillates bare på vann som har et naturlig mineralinnhold som avviker fra kildevann og drikkevann.</td></tr>
          </tbody></table>

          `,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"},{title:"Andre regelveiledning",intro:"Andre regelveiledning intro tekst.",text:`<h2 class="mt-h2">Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class="mt-link" href="">Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"}]},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}}}),r=new he({props:{name:"Normal",$$slots:{default:[ve,({title:t,intro:c,legalItems:g,text:p,tableOfContents:w,disableCss:$})=>({0:t,1:c,2:g,3:p,4:w,5:$}),({title:t,intro:c,legalItems:g,text:p,tableOfContents:w,disableCss:$})=>(t?1:0)|(c?2:0)|(g?4:0)|(p?8:0)|(w?16:0)|($?32:0)]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment),l=_(),H(r.$$.fragment)},m(t,c){R(e,t,c),q(t,l,c),R(r,t,c),h=!0},p(t,[c]){const g={};c&2111&&(g.$$scope={dirty:c,ctx:t}),r.$set(g)},i(t){h||(S(e.$$.fragment,t),S(r.$$.fragment,t),h=!0)},o(t){j(e.$$.fragment,t),j(r.$$.fragment,t),h=!1},d(t){t&&B(l),O(e,t),O(r,t)}}}class be extends ne{constructor(e){super(),re(this,e,null,_e,se,{})}}const ae=fe(be,{meta:{title:"Innhold/Samleside"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
  <article class="article-page col-1-span-12 legal-guidance">
    <h1 class="mt-h1">{title}</h1>
    <div class="intro">
      <p>{intro}</p>
    </div>

    <section class="table-of-contents" aria-labelledby="table-of-contents">
      <h2 id="table-of-contents" class="mt-h4">
        {tableOfContents}
      </h2>
      <ol class="mt-ol m-t-xxs list-unstyled">
        {#each legalItems as legal}
          <li>
            <a href="#{toKebabCase(legal.title)}" class="mt-link down-arrow">{legal.title}</a>
          </li>
        {/each}
      </ol>
    </section>

    {@html text}

    {#each legalItems as legal}
      <article
        id={toKebabCase(legal.title)}
        class="legal-collection legal-collection__border-top col-1-span-12"
        aria-labelledby="collection-title-1">
        <h2 id="collection-title-1" class="mt-h2">{legal.title}</h2>

        <div class="intro">
          {legal.intro}
        </div>

        {@html legal.text}

        <section class="article-page children-full-width" aria-labelledby="how-to-heading-1">
          <h3 id="how-to-heading-1" class="mt-h3">
            {legal.howToDoItTitle}
          </h3>
          {@html legal.howToDoIt}
          <CardArticle
            type="task"
            class="background-mt-white"
            title="Dette er tittelen"
            text="Noe tekst i kroppen"
            linkUrl="http://"
            linkText="Last ned mal for internkontroll"
            headerTag="h4" />
        </section>

        <section class="layout-flex-col layout-flex-col--x-small">
          <SummaryDetail
            title="Regelverk"
            detailsClass="color-neutral border-neutral"
            summaryWrapperClass="background-mt-white layout-flex-col gap-13">
            <CardArticle
              type="legal-text"
              title="Dette er tittelen"
              text="Noe tekst i kroppen"
              linkUrl="http://"
              linkText="Last ned mal for internkontroll" />
            <CardArticle
              type="legal-text"
              title="Dette er tittelen"
              text="Noe tekst i kroppen"
              linkUrl="http://"
              linkText="Last ned mal for internkontroll" />
          </SummaryDetail>
        </section>
      </article>
    {/each}
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","CardArticle","SummaryDetail","toKebabCase","wrapInShadowDom"]}),Ne=ae.meta,Pe=["Normal"],Ae=ae.stories.Normal;export{Ae as Normal,Pe as __namedExportsOrder,Ne as default};
