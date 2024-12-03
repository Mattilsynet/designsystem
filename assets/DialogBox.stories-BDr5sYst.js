import{S as fe,i as $e,s as de,c as g,m as b,t as _,a as v,d as h,n as X}from"./index-D8riOviU.js";import{s as f,i as a,d as i,e as m,a as d,b as W,l as ce,f as re,m as ge,g as pe,H as be}from"./lifecycle-CcifP0R7.js";import{p as _e,M as ve,S as he}from"./collect-stories-BMzKwk3M.js";import{D as O}from"./DialogBox-ccDRg-Cj.js";import{B as le}from"./ButtonSpinner-crx1uMJs.js";function De(u){let e;return{c(){e=m("p"),e.textContent="Dialogboks innhold"},m(t,s){a(t,e,s)},p:X,d(t){t&&i(e)}}}function xe(u){let e;return{c(){e=m("p"),e.textContent="Dialogboks innhold"},m(t,s){a(t,e,s)},p:X,d(t){t&&i(e)}}}function oe(u){let e,t=u[2]+"",s;return{c(){e=new be(!1),s=re(),e.a=s},m(o,r){e.m(t,o,r),a(o,s,r)},p(o,r){r&4&&t!==(t=o[2]+"")&&e.p(t)},d(o){o&&(i(s),e.d())}}}function ke(u){let e,t=u[2]&&oe(u);return{c(){t&&t.c(),e=re()},m(s,o){t&&t.m(s,o),a(s,e,o)},p(s,o){s[2]?t?t.p(s,o):(t=oe(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){s&&i(e),t&&t.d(s)}}}function Be(u){let e;return{c(){e=pe("Ja")},m(t,s){a(t,e,s)},d(t){t&&i(e)}}}function we(u){let e;return{c(){e=pe("Nei")},m(t,s){a(t,e,s)},d(t){t&&i(e)}}}function Ce(u){let e,t,s,o,r;return t=new le({props:{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",spinnerPlacement:"start",$$slots:{default:[Be]},$$scope:{ctx:u}}}),o=new le({props:{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",spinnerPlacement:"end",$$slots:{default:[we]},$$scope:{ctx:u}}}),{c(){e=m("div"),g(t.$$.fragment),s=f(),g(o.$$.fragment),d(e,"class","layout-flex"),ge(e,"margin-top","20px")},m(p,$){a(p,e,$),b(t,e,null),W(e,s),b(o,e,null),r=!0},p(p,$){const D={};$&8&&(D.$$scope={dirty:$,ctx:p}),t.$set(D);const c={};$&8&&(c.$$scope={dirty:$,ctx:p}),o.$set(c)},i(p){r||(_(t.$$.fragment,p),_(o.$$.fragment,p),r=!0)},o(p){v(t.$$.fragment,p),v(o.$$.fragment,p),r=!1},d(p){p&&i(e),h(t),h(o)}}}function Se(u){let e;return{c(){e=m("p"),e.textContent="Dialogboks innhold"},m(t,s){a(t,e,s)},p:X,d(t){t&&i(e)}}}function Ae(u){let e,t,s,o,r,p,$,D,c,T,y,E,C,M,S,x,F,H,J,A,V,N,k,q,G,K,z,Q,B,L,Y,w,j,R,Z;return o=new O({props:{title:ae,isOpen:I,closeBtnAriaLabel:P,$$slots:{default:[De]},$$scope:{ctx:u}}}),c=new O({props:{title:"",isOpen:I,ariaTitle:ie,closeBtnAriaLabel:P,$$slots:{default:[xe]},$$scope:{ctx:u}}}),x=new O({props:{isOpen:I,ariaTitle:ie,closeBtnAriaLabel:P,$$slots:{default:[ke]},$$scope:{ctx:u}}}),k=new O({props:{title:"Fant du det du lette etter?",isOpen:I,closeBtnAriaLabel:P,$$slots:{default:[Ce]},$$scope:{ctx:u}}}),w=new O({props:{title:ae,isOpen:u[0],closeBtnAriaLabel:P,$$slots:{default:[Se]},$$scope:{ctx:u}}}),{c(){e=m("h2"),e.textContent="Default",t=f(),s=m("div"),g(o.$$.fragment),r=f(),p=m("h2"),p.textContent="Ingen tittel",$=f(),D=m("div"),g(c.$$.fragment),T=f(),y=m("hr"),E=f(),C=m("h2"),C.textContent="Enkel",M=f(),S=m("div"),g(x.$$.fragment),F=f(),H=m("hr"),J=f(),A=m("h2"),A.textContent="Avansert",V=f(),N=m("div"),g(k.$$.fragment),q=f(),G=m("hr"),K=f(),z=m("h2"),z.textContent="Vises ved endring",Q=f(),B=m("div"),L=m("button"),L.textContent="Toggle dialog",Y=f(),g(w.$$.fragment),d(e,"class","mt-h2 svelte-1a0u9zu"),d(s,"class","tags-wrapper svelte-1a0u9zu"),d(p,"class","mt-h2 svelte-1a0u9zu"),d(D,"class","tags-wrapper svelte-1a0u9zu"),d(C,"class","mt-h2 svelte-1a0u9zu"),d(S,"class","tags-wrapper svelte-1a0u9zu"),d(A,"class","mt-h2 svelte-1a0u9zu"),d(N,"class","tags-wrapper svelte-1a0u9zu"),d(z,"class","mt-h2 svelte-1a0u9zu"),d(L,"class","mt-button toggle-button svelte-1a0u9zu"),d(B,"class","tags-wrapper svelte-1a0u9zu")},m(n,l){a(n,e,l),a(n,t,l),a(n,s,l),b(o,s,null),a(n,r,l),a(n,p,l),a(n,$,l),a(n,D,l),b(c,D,null),a(n,T,l),a(n,y,l),a(n,E,l),a(n,C,l),a(n,M,l),a(n,S,l),b(x,S,null),a(n,F,l),a(n,H,l),a(n,J,l),a(n,A,l),a(n,V,l),a(n,N,l),b(k,N,null),a(n,q,l),a(n,G,l),a(n,K,l),a(n,z,l),a(n,Q,l),a(n,B,l),W(B,L),W(B,Y),b(w,B,null),j=!0,R||(Z=ce(L,"click",u[1]),R=!0)},p(n,l){const ee={};l&8&&(ee.$$scope={dirty:l,ctx:n}),o.$set(ee);const te={};l&8&&(te.$$scope={dirty:l,ctx:n}),c.$set(te);const ne={};l&12&&(ne.$$scope={dirty:l,ctx:n}),x.$set(ne);const se={};l&8&&(se.$$scope={dirty:l,ctx:n}),k.$set(se);const U={};l&1&&(U.isOpen=n[0]),l&8&&(U.$$scope={dirty:l,ctx:n}),w.$set(U)},i(n){j||(_(o.$$.fragment,n),_(c.$$.fragment,n),_(x.$$.fragment,n),_(k.$$.fragment,n),_(w.$$.fragment,n),j=!0)},o(n){v(o.$$.fragment,n),v(c.$$.fragment,n),v(x.$$.fragment,n),v(k.$$.fragment,n),v(w.$$.fragment,n),j=!1},d(n){n&&(i(e),i(t),i(s),i(r),i(p),i($),i(D),i(T),i(y),i(E),i(C),i(M),i(S),i(F),i(H),i(J),i(A),i(V),i(N),i(q),i(G),i(K),i(z),i(Q),i(B)),h(o),h(c),h(x),h(k),h(w),R=!1,Z()}}}function Ne(u){let e,t,s,o;return e=new ve({props:{title:"Components/Dialogboks",args:{content:`<h2 class="mt-h2">Du bør varsle</h2>
      <p>At noen setter opp nye piggtrådgjerder</p>
      <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`},argTypes:{}}}),s=new he({props:{name:"Normal",$$slots:{default:[Ae,({content:r})=>({2:r}),({content:r})=>r?4:0]},$$scope:{ctx:u}}}),{c(){g(e.$$.fragment),t=f(),g(s.$$.fragment)},m(r,p){b(e,r,p),a(r,t,p),b(s,r,p),o=!0},p(r,[p]){const $={};p&13&&($.$$scope={dirty:p,ctx:r}),s.$set($)},i(r){o||(_(e.$$.fragment,r),_(s.$$.fragment,r),o=!0)},o(r){v(e.$$.fragment,r),v(s.$$.fragment,r),o=!1},d(r){r&&i(t),h(e,r),h(s,r)}}}let I=!0,P="Lukk dialogboks",ae="Dette er en dialogboks tittel!",ie="Dette er en skult dialogboks tittel!";function ze(u,e,t){let s=!1;function o(){t(0,s=!s)}return[s,o]}class ue extends fe{constructor(e){super(),$e(this,e,ze,Ne,de,{})}}ue.__docgen={version:3,name:"DialogBox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const me=_e(ue,{meta:{title:"Components/Dialogboks"},stories:{Normal:{name:"Normal",template:!1,source:`<h2 class="mt-h2">Default</h2>
<div class="tags-wrapper">
  <DialogBox {title} {isOpen} {closeBtnAriaLabel}>
    <p>Dialogboks innhold</p>
  </DialogBox>
</div>
<h2 class="mt-h2">Ingen tittel</h2>
<div class="tags-wrapper">
  <DialogBox title="" {isOpen} {ariaTitle} {closeBtnAriaLabel}>
    <p>Dialogboks innhold</p>
  </DialogBox>
</div>

<hr />
<h2 class="mt-h2">Enkel</h2>
<div class="tags-wrapper">
  <DialogBox {isOpen} {ariaTitle} {closeBtnAriaLabel}>
    {#if content}
      {@html content}
    {/if}
  </DialogBox>
</div>
<hr />
<h2 class="mt-h2">Avansert</h2>
<div class="tags-wrapper">
  <DialogBox title="Fant du det du lette etter?" {isOpen} {closeBtnAriaLabel}>
    <div class="layout-flex" style="margin-top: 20px;">
      <ButtonSpinner
        formInProgressAriaLabel="Sender inn skjema, venter på svar."
        btnClassNames="mt-button--secondary"
        spinnerPlacement="start">
        Ja
      </ButtonSpinner>
      <ButtonSpinner
        formInProgressAriaLabel="Sender inn skjema, venter på svar."
        btnClassNames="mt-button--secondary"
        spinnerPlacement="end">
        Nei
      </ButtonSpinner>
    </div>
  </DialogBox>
</div>
<hr />
<h2 class="mt-h2">Vises ved endring</h2>
<div class="tags-wrapper">
  <button class="mt-button toggle-button" on:click={handleClick}>Toggle dialog</button>
  <DialogBox {title} isOpen={showDialog} {closeBtnAriaLabel}>
    <p>Dialogboks innhold</p>
  </DialogBox>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","DialogBox","ButtonSpinner"]}),Te=me.meta,ye=["Normal"],Ee=me.stories.Normal;export{Ee as Normal,ye as __namedExportsOrder,Te as default};
