import{S as ht,i as Pt,s as yt,c as F,m as D,t as M,a as H,d as q,b as _t,e as St}from"./index-D8riOviU.js";import{s as i,i as B,d as I,e as l,g as P,a as r,m as wt,b as e,h as K}from"./lifecycle-CcifP0R7.js";import{p as Lt,M as Bt,S as gt}from"./collect-stories-BMzKwk3M.js";import{B as ot}from"./ButtonSpinner-crx1uMJs.js";import{w as kt}from"./utils-CMlWd0Pf.js";function It(s){let t,o,p,v,$,d,n=s[2]+"",a,m,g,c,y=s[3]+"",S,C,w,k,L=s[3]+"",u,b,N,h,A,j,R=s[5]+"",et,U,lt,E,rt,G,it,O,ut,T,pt,z,mt,Q,dt,V,bt,W,ct,X,ft,Y,vt,Z,J,x=s[2]+"",nt,tt,st,$t;return{c(){t=l("div"),o=l("h1"),o.textContent="Knapper",p=i(),v=l("p"),v.textContent="Hovedknapp - stor",$=i(),d=l("button"),a=P(n),g=i(),c=l("button"),S=P(y),w=i(),k=l("button"),u=P(L),N=i(),h=l("p"),h.textContent="Sekundær - stor",A=i(),j=l("button"),et=P(R),lt=i(),E=l("p"),E.textContent="Lenkeknapp",rt=i(),G=l("button"),G.textContent="...",it=i(),O=l("p"),O.textContent="Flat - stor",ut=i(),T=l("button"),T.textContent="Uten ikon",pt=i(),z=l("button"),z.textContent="Avbryt",mt=i(),Q=l("p"),Q.textContent="Flat med icon - stor",dt=i(),V=l("button"),V.textContent="Med ikon",bt=i(),W=l("p"),W.textContent="Flat med icon på venstre side",ct=i(),X=l("button"),X.textContent="Søk",ft=i(),Y=l("p"),Y.textContent="På blå - stor",vt=i(),Z=l("div"),J=l("button"),nt=P(x),r(o,"class","mt-h1"),r(v,"class","description svelte-63naed"),r(d,"class","mt-button mt-button--primary svelte-63naed"),d.disabled=m=s[4],r(c,"class","mt-button mt-button--primary svelte-63naed"),c.disabled=C=s[4],r(k,"class","mt-button mt-button--primary svelte-63naed"),k.disabled=b=s[4],wt(k,"width","15rem"),r(h,"class","description svelte-63naed"),r(j,"class","mt-button mt-button--secondary svelte-63naed"),j.disabled=U=s[4],r(E,"class","description svelte-63naed"),r(G,"class","mt-button mt-button--link svelte-63naed"),r(O,"class","description svelte-63naed"),r(T,"class","mt-button mt-button--flat no-icon svelte-63naed"),r(z,"class","mt-button mt-button--flat no-icon svelte-63naed"),r(Q,"class","description svelte-63naed"),r(V,"class","mt-button mt-button--flat closable svelte-63naed"),r(W,"class","description svelte-63naed"),r(X,"class","mt-button mt-button--flat icon--search-before svelte-63naed"),r(Y,"class","description svelte-63naed"),r(J,"type","button"),r(J,"class","mt-button mt-button--on-primary svelte-63naed"),r(Z,"class","background-mt-blue p-xxs")},m(f,_){B(f,t,_),e(t,o),e(t,p),e(t,v),e(t,$),e(t,d),e(d,a),e(t,g),e(t,c),e(c,S),e(t,w),e(t,k),e(k,u),e(t,N),e(t,h),e(t,A),e(t,j),e(j,et),e(t,lt),e(t,E),e(t,rt),e(t,G),e(t,it),e(t,O),e(t,ut),e(t,T),e(t,pt),e(t,z),e(t,mt),e(t,Q),e(t,dt),e(t,V),e(t,bt),e(t,W),e(t,ct),e(t,X),e(t,ft),e(t,Y),e(t,vt),e(t,Z),e(Z,J),e(J,nt),st||($t=_t(tt=kt.call(null,t,s[0])),st=!0)},p(f,_){_&4&&n!==(n=f[2]+"")&&K(a,n),_&16&&m!==(m=f[4])&&(d.disabled=m),_&8&&y!==(y=f[3]+"")&&K(S,y),_&16&&C!==(C=f[4])&&(c.disabled=C),_&8&&L!==(L=f[3]+"")&&K(u,L),_&16&&b!==(b=f[4])&&(k.disabled=b),_&32&&R!==(R=f[5]+"")&&K(et,R),_&16&&U!==(U=f[4])&&(j.disabled=U),_&4&&x!==(x=f[2]+"")&&K(nt,x),tt&&St(tt.update)&&_&1&&tt.update.call(null,f[0])},d(f){f&&I(t),st=!1,$t()}}}function Nt(s){let t;return{c(){t=P("Spinner placement start")},m(o,p){B(o,t,p)},d(o){o&&I(t)}}}function At(s){let t;return{c(){t=P("Spinner placement end")},m(o,p){B(o,t,p)},d(o){o&&I(t)}}}function jt(s){let t;return{c(){t=P("Send in skjema")},m(o,p){B(o,t,p)},d(o){o&&I(t)}}}function Ft(s){let t,o,p,v,$,d,n,a,m,g,c,y,S,C,w,k,L;return n=new ot({props:{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--primary",spinnerPlacement:"start",inProgress:s[1],$$slots:{default:[Nt]},$$scope:{ctx:s}}}),m=new ot({props:{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--primary",inProgress:s[1],spinnerPlacement:"end",$$slots:{default:[At]},$$scope:{ctx:s}}}),S=new ot({props:{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",inProgress:s[1],spinnerPlacement:"end",$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){t=l("div"),o=l("h1"),o.textContent="Loading",p=i(),v=l("p"),v.textContent="Hovedknapp",$=i(),d=l("div"),F(n.$$.fragment),a=i(),F(m.$$.fragment),g=i(),c=l("p"),c.textContent="Sekundær",y=i(),F(S.$$.fragment),r(o,"class","mt-h1"),r(v,"class","description svelte-63naed"),r(d,"class","layout-flex"),r(c,"class","description svelte-63naed")},m(u,b){B(u,t,b),e(t,o),e(t,p),e(t,v),e(t,$),e(t,d),D(n,d,null),e(d,a),D(m,d,null),e(t,g),e(t,c),e(t,y),D(S,t,null),w=!0,k||(L=_t(C=kt.call(null,t,s[0])),k=!0)},p(u,b){const N={};b&2&&(N.inProgress=u[1]),b&64&&(N.$$scope={dirty:b,ctx:u}),n.$set(N);const h={};b&2&&(h.inProgress=u[1]),b&64&&(h.$$scope={dirty:b,ctx:u}),m.$set(h);const A={};b&2&&(A.inProgress=u[1]),b&64&&(A.$$scope={dirty:b,ctx:u}),S.$set(A),C&&St(C.update)&&b&1&&C.update.call(null,u[0])},i(u){w||(M(n.$$.fragment,u),M(m.$$.fragment,u),M(S.$$.fragment,u),w=!0)},o(u){H(n.$$.fragment,u),H(m.$$.fragment,u),H(S.$$.fragment,u),w=!1},d(u){u&&I(t),q(n),q(m),q(S),k=!1,L()}}}function Dt(s){let t,o,p,v,$,d;return t=new Bt({props:{title:"Components/Buttons",args:{primary:"Gå videre",primaryLong:"Send inn til Mattilsynet",secondary:"Avbryt",inProgress:!1,uploadRequired:!1,disabled:!1,disableJs:!1,disableCss:!1},argTypes:{primary:{control:"text"},inProgress:{control:"boolean"},disabled:{control:"boolean"},disableJs:{control:"boolean"},disableCss:{control:"boolean"},uploadRequired:{control:"boolean"},removeFile:{action:"removeFile"}}}}),p=new gt({props:{name:"Normal",$$slots:{default:[It,({primary:n,primaryLong:a,disableCss:m,disabled:g,secondary:c})=>({2:n,3:a,0:m,4:g,5:c}),({primary:n,primaryLong:a,disableCss:m,disabled:g,secondary:c})=>(n?4:0)|(a?8:0)|(m?1:0)|(g?16:0)|(c?32:0)]},$$scope:{ctx:s}}}),$=new gt({props:{name:"Loading",$$slots:{default:[Ft,({disableCss:n,inProgress:a})=>({0:n,1:a}),({disableCss:n,inProgress:a})=>(n?1:0)|(a?2:0)]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment),o=i(),F(p.$$.fragment),v=i(),F($.$$.fragment)},m(n,a){D(t,n,a),B(n,o,a),D(p,n,a),B(n,v,a),D($,n,a),d=!0},p(n,[a]){const m={};a&125&&(m.$$scope={dirty:a,ctx:n}),p.$set(m);const g={};a&67&&(g.$$scope={dirty:a,ctx:n}),$.$set(g)},i(n){d||(M(t.$$.fragment,n),M(p.$$.fragment,n),M($.$$.fragment,n),d=!0)},o(n){H(t.$$.fragment,n),H(p.$$.fragment,n),H($.$$.fragment,n),d=!1},d(n){n&&(I(o),I(v)),q(t,n),q(p,n),q($,n)}}}class Ct extends ht{constructor(t){super(),Pt(this,t,null,Dt,yt,{})}}Ct.__docgen={version:3,name:"Buttons.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const at=Lt(Ct,{meta:{title:"Components/Buttons"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Knapper</h1>
  <p class="description">Hovedknapp - stor</p>
  <button class="mt-button mt-button--primary" {disabled}>{primary}</button>
  <button class="mt-button mt-button--primary" {disabled}>{primaryLong}</button>
  <button class="mt-button mt-button--primary" {disabled} style="width: 15rem"
    >{primaryLong}</button>

  <p class="description">Sekundær - stor</p>
  <button class="mt-button mt-button--secondary" {disabled}>{secondary}</button>

  <p class="description">Lenkeknapp</p>
  <button class="mt-button mt-button--link"> ... </button>

  <p class="description">Flat - stor</p>
  <button class="mt-button mt-button--flat no-icon">Uten ikon</button>
  <button class="mt-button mt-button--flat no-icon">Avbryt</button>

  <p class="description">Flat med icon - stor</p>
  <button class="mt-button mt-button--flat closable">Med ikon</button>

  <p class="description">Flat med icon på venstre side</p>
  <button class="mt-button mt-button--flat icon--search-before">Søk</button>

  <p class="description">På blå - stor</p>
  <div class="background-mt-blue p-xxs">
    <button type="button" class="mt-button mt-button--on-primary">{primary}</button>
  </div>
</div>`,tags:[],hasArgs:!0},Loading:{name:"Loading",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Loading</h1>
  <p class="description">Hovedknapp</p>
  <div class="layout-flex">
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="mt-button--primary"
      spinnerPlacement="start"
      {inProgress}>
      Spinner placement start
    </ButtonSpinner>
    <ButtonSpinner
      formInProgressAriaLabel="Sender inn skjema, venter på svar."
      btnClassNames="mt-button--primary"
      {inProgress}
      spinnerPlacement="end">
      Spinner placement end
    </ButtonSpinner>
  </div>

  <p class="description">Sekundær</p>
  <ButtonSpinner
    formInProgressAriaLabel="Sender inn skjema, venter på svar."
    btnClassNames="mt-button--secondary"
    {inProgress}
    spinnerPlacement="end">
    Send in skjema
  </ButtonSpinner>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","ButtonSpinner","wrapInShadowDom"]}),Rt=at.meta,Ut=["Normal","Loading"],Et=at.stories.Normal,Gt=at.stories.Loading;export{Gt as Loading,Et as Normal,Ut as __namedExportsOrder,Rt as default};
