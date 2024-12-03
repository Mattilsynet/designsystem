import{S as j,i as z,s as B,c as w,m as T,t as x,a as C,d as S,b as G,e as J}from"./index-D8riOviU.js";import{s as $,i as K,d as P,e as g,g as y,a as p,b as m,h as H,H as E,f as Q}from"./lifecycle-CcifP0R7.js";import{p as V,M as W,S as X}from"./collect-stories-BMzKwk3M.js";import{P as Y}from"./Published-cEc3nsoO.js";import{w as ee}from"./utils-CMlWd0Pf.js";import{T as te,a as q}from"./TableCol-CFhQVoST.js";import"./utils-DjM8Id44.js";import"./each-Dzkb-YsG.js";function ae(n){let e,t=n[9].text+"",l,s;return{c(){e=g("th"),l=y(t),p(e,"slot","headers"),p(e,"role","columnheader"),p(e,"scope","col"),p(e,"class",s="mt-th "+n[9].class)},m(a,r){K(a,e,r),m(e,l)},p(a,r){r&512&&t!==(t=a[9].text+"")&&H(l,t),r&512&&s!==(s="mt-th "+a[9].class)&&p(e,"class",s)},d(a){a&&P(e)}}}function le(n){let e=n[8].tittel1+"",t;return{c(){t=y(e)},m(l,s){K(l,t,s)},p(l,s){s&256&&e!==(e=l[8].tittel1+"")&&H(t,e)},d(l){l&&P(t)}}}function se(n){let e,t=n[8].tittel2+"",l;return{c(){e=new E(!1),l=Q(),e.a=l},m(s,a){e.m(t,s,a),K(s,l,a)},p(s,a){a&256&&t!==(t=s[8].tittel2+"")&&e.p(t)},d(s){s&&(P(l),e.d())}}}function ne(n){let e=n[8].tittel3+"",t;return{c(){t=y(e)},m(l,s){K(l,t,s)},p(l,s){s&256&&e!==(e=l[8].tittel3+"")&&H(t,e)},d(l){l&&P(t)}}}function re(n){var h,b,u;let e,t,l,s,a,r,c;return t=new q({props:{header:(h=n[5][0])==null?void 0:h.text,$$slots:{default:[le]},$$scope:{ctx:n}}}),s=new q({props:{header:(b=n[5][1])==null?void 0:b.text,$$slots:{default:[se]},$$scope:{ctx:n}}}),r=new q({props:{header:(u=n[5][2])==null?void 0:u.text,$$slots:{default:[ne]},$$scope:{ctx:n}}}),{c(){e=g("tr"),w(t.$$.fragment),l=$(),w(s.$$.fragment),a=$(),w(r.$$.fragment),p(e,"class","mt-tr"),p(e,"slot","row")},m(o,i){K(o,e,i),T(t,e,null),m(e,l),T(s,e,null),m(e,a),T(r,e,null),c=!0},p(o,i){var v,N,R;const D={};i&32&&(D.header=(v=o[5][0])==null?void 0:v.text),i&1280&&(D.$$scope={dirty:i,ctx:o}),t.$set(D);const _={};i&32&&(_.header=(N=o[5][1])==null?void 0:N.text),i&1280&&(_.$$scope={dirty:i,ctx:o}),s.$set(_);const M={};i&32&&(M.header=(R=o[5][2])==null?void 0:R.text),i&1280&&(M.$$scope={dirty:i,ctx:o}),r.$set(M)},i(o){c||(x(t.$$.fragment,o),x(s.$$.fragment,o),x(r.$$.fragment,o),c=!0)},o(o){C(t.$$.fragment,o),C(s.$$.fragment,o),C(r.$$.fragment,o),c=!1},d(o){o&&P(e),S(t),S(s),S(r)}}}function oe(n){let e,t,l,s,a,r=n[2]+"",c,h,b,u,o=n[4]+"",i,D,_,M,v,N,R,F=n[3]+"",I,k,L,A;return h=new Y({props:{publishFrom:n[0],professionallyUpdated:n[1]}}),_=new te({props:{headers:n[5],rows:n[6],style:"--spacer-large: var(--spacer-x-small)",$$slots:{row:[re,({row:d})=>({8:d}),({row:d})=>d?256:0],headers:[ae,({header:d})=>({9:d}),({header:d})=>d?512:0]},$$scope:{ctx:n}}}),{c(){e=g("div"),t=g("article"),l=g("h1"),l.textContent="Publisert og faglig oppdatert er samme dato",s=$(),a=g("div"),c=$(),w(h.$$.fragment),b=$(),u=g("div"),i=y(o),D=$(),w(_.$$.fragment),M=$(),v=g("h2"),v.textContent="Tabell uten bruk av komponenter",N=$(),R=new E(!1),p(l,"class","mt-h1"),p(a,"class","intro"),p(u,"class","m-t-m"),p(u,"id","list-title"),p(u,"role","status"),p(u,"aria-live","polite"),p(v,"class","p-t-s mt-h2"),R.a=null,p(t,"class","article-page new-thing col-1-span-12"),p(e,"class","container layout-grid layout-grid--column-12")},m(d,f){K(d,e,f),m(e,t),m(t,l),m(t,s),m(t,a),a.innerHTML=r,m(t,c),T(h,t,null),m(t,b),m(t,u),m(u,i),m(t,D),T(_,t,null),m(t,M),m(t,v),m(t,N),R.m(F,t),k=!0,L||(A=G(I=ee.call(null,e,n[7])),L=!0)},p(d,f){(!k||f&4)&&r!==(r=d[2]+"")&&(a.innerHTML=r);const Z={};f&1&&(Z.publishFrom=d[0]),f&2&&(Z.professionallyUpdated=d[1]),h.$set(Z),(!k||f&16)&&o!==(o=d[4]+"")&&H(i,o);const U={};f&32&&(U.headers=d[5]),f&64&&(U.rows=d[6]),f&1824&&(U.$$scope={dirty:f,ctx:d}),_.$set(U),(!k||f&8)&&F!==(F=d[3]+"")&&R.p(F),I&&J(I.update)&&f&128&&I.update.call(null,d[7])},i(d){k||(x(h.$$.fragment,d),x(_.$$.fragment,d),k=!0)},o(d){C(h.$$.fragment,d),C(_.$$.fragment,d),k=!1},d(d){d&&P(e),S(h),S(_),L=!1,A()}}}function de(n){let e,t,l,s;return e=new W({props:{title:"Components/Tabell",args:{intro:"<p>Paragraf med tekst. Paragraf med tekst.",statusTitle:"Status tittel",text:`<p>Status tekst</p>
<table role="table" class="mt-table" style='--spacer-large: 0'>
<caption class="mt-caption">Dette er tittelen til tabellen</caption>
<thead class="mt-thead">
<tr role="row" class="mt-tr">
<th role="columnheader" scope="col" class="mt-th">Kolonne 1</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 2</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 3</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 4</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 5</th>
<th role="columnheader" scope="col" class="mt-th">Kolonne 6</th>
</tr>
</thead>
<tbody class="mt-tbody">
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 1:</span>Rad 1</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 2:</span><p>Rad 1 - med beskrivende tekst</p></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 3:</span>Rad 1 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 4:</span>Rad 1</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 5:</span><p>Rad 1 med en lang beskrivende og status tekst</p></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 1 tittel 6:</span>Rad 1</td>
</tr>
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 1:</span>Rad 2</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 2:</span>Rad 2 - med beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 3:</span>Rad 2 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 4:</span><p>Rad 2</p> <ul><li>liste item 1</li><li>liste item 2</li></ul></td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 5:</span>Rad 2 med en lang beskrivende og status tekst </td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 2 tittel 6:</span>Rad 2</td>
</tr>
</tr>
<tr role="row" class="mt-tr">
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 1:</span>Rad 3</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 2:</span>Rad 3 - med beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 3:</span>Rad 3 - med mer beskrivende tekst</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 4:</span>Rad 3</td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 5:</span>Rad 3 med en lang beskrivende og status tekst </td>
<td class="mt-td text" role="cell"><span class="responsive-table__heading" aria-hidden="true">Rad 3 tittel 6:</span>Rad 3</td>
</tr>
</tbody>
</table>`,headers:[{text:"Kolonne 1",class:"width-20"},{text:"Kolonne 2",class:""},{text:"Kolonne 3",class:"width-20"}],rows:[{tittel1:"Rad 1 kolonne 1",tittel2:"Rad 1 kolonne 2 - med beskrivende tekst",tittel3:"Rad 1 kolonne 3 - med mer beskrivende tekst"},{tittel1:"Rad 2 kolonne 1",tittel2:"Rad 2 kolonne 2 - med beskrivende tekst",tittel3:"Rad 2 kolonne 3 - med mer beskrivende tekst"},{tittel1:"Rad 3 kolonne 1",tittel2:"Rad 3 kolonne 2 - <p>Rad 2</p> <ul><li>liste item 1</li><li>liste item 2</li></ul>",tittel3:"Rad 3 kolonne 3 - med mer beskrivende tekst"}],publishFrom:"2021-06-24T11:40:02.889Z",professionallyUpdated:"2021-06-24T11:32:22Z",disableCss:!1},argTypes:{intro:{control:"text"},publishFrom:{control:"text"},professionallyUpdated:{control:"text"},disableCss:{control:"boolean"}}}}),l=new X({props:{name:"Normal",$$slots:{default:[oe,({publishFrom:a,professionallyUpdated:r,intro:c,text:h,statusTitle:b,headers:u,rows:o,disableCss:i})=>({0:a,1:r,2:c,3:h,4:b,5:u,6:o,7:i}),({publishFrom:a,professionallyUpdated:r,intro:c,text:h,statusTitle:b,headers:u,rows:o,disableCss:i})=>(a?1:0)|(r?2:0)|(c?4:0)|(h?8:0)|(b?16:0)|(u?32:0)|(o?64:0)|(i?128:0)]},$$scope:{ctx:n}}}),{c(){w(e.$$.fragment),t=$(),w(l.$$.fragment)},m(a,r){T(e,a,r),K(a,t,r),T(l,a,r),s=!0},p(a,[r]){const c={};r&1279&&(c.$$scope={dirty:r,ctx:a}),l.$set(c)},i(a){s||(x(e.$$.fragment,a),x(l.$$.fragment,a),s=!0)},o(a){C(e.$$.fragment,a),C(l.$$.fragment,a),s=!1},d(a){a&&P(t),S(e,a),S(l,a)}}}class ie extends j{constructor(e){super(),z(this,e,null,de,B,{})}}const O=V(ie,{meta:{title:"Components/Tabell"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss} class="container layout-grid layout-grid--column-12">
  <article class="article-page new-thing col-1-span-12">
    <h1 class="mt-h1">Publisert og faglig oppdatert er samme dato</h1>
    <div class="intro">
      {@html intro}
    </div>
    <Published {publishFrom} {professionallyUpdated} />
    <div class="m-t-m" id="list-title" role="status" aria-live="polite">
      {statusTitle}
    </div>
    <Table {headers} {rows} style="--spacer-large: var(--spacer-x-small)">
      <th slot="headers" let:header role="columnheader" scope="col" class="mt-th {header.class}">
        {header.text}
      </th>
      <tr class="mt-tr" slot="row" let:row>
        <TableCol header={headers[0]?.text}>{row.tittel1}</TableCol>
        <TableCol header={headers[1]?.text}>{@html row.tittel2}</TableCol>
        <TableCol header={headers[2]?.text}>{row.tittel3}</TableCol>
      </tr>
    </Table>
    <h2 class="p-t-s mt-h2">Tabell uten bruk av komponenter</h2>
    {@html text}
  </article>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Published","wrapInShadowDom","Table","TableCol"]}),$e=O.meta,ge=["Normal"],ve=O.stories.Normal;export{ve as Normal,ge as __namedExportsOrder,$e as default};
