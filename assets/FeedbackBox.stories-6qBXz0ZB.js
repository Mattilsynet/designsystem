import{S as W,i as X,s as Y,c as O,m as R,t as N,a as B,d as K,b as Z,e as ee,B as te,h as ae,j as le,k as ne,r as se}from"./index-D8riOviU.js";import{s as w,i as A,d as D,e as v,g as E,a as o,b as c,h as M,c as oe,r as re,l as V,p as ie,H as Q}from"./lifecycle-CcifP0R7.js";import{e as q}from"./each-Dzkb-YsG.js";import{p as de,M as fe,S as ce}from"./collect-stories-BMzKwk3M.js";import{t as z}from"./utils-DjM8Id44.js";import{D as me}from"./DialogBox-ccDRg-Cj.js";import{T as ue}from"./TextArea-BQbWmFWN.js";import{w as be}from"./utils-CMlWd0Pf.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./count-characters-Cnk4sLIe.js";import"./Label-BX4PxQ2B.js";function G(l,e,a){const r=l.slice();return r[14]=e[a],r}function L(l){let e,a,r=l[14].title+"",i,t,f,n=l[14].intro+"",m,k,p,_=l[14].text+"",y,x;return{c(){e=v("article"),a=v("h2"),i=E(r),t=w(),f=v("div"),m=E(n),k=w(),p=new Q(!1),y=w(),o(a,"id","collection-title-1"),o(a,"class","mt-h2"),o(f,"class","intro"),p.a=y,o(e,"id",x=z(l[14].title)),o(e,"class","legal-collection legal-collection__border-top col-3-span-6"),o(e,"aria-labelledby","collection-title-1")},m(u,g){A(u,e,g),c(e,a),c(a,i),c(e,t),c(e,f),c(f,m),c(e,k),p.m(_,e),c(e,y)},p(u,g){g&2048&&r!==(r=u[14].title+"")&&M(i,r),g&2048&&n!==(n=u[14].intro+"")&&M(m,n),g&2048&&_!==(_=u[14].text+"")&&p.p(_),g&2048&&x!==(x=z(u[14].title))&&o(e,"id",x)},d(u){u&&D(e)}}}function ke(l){let e,a,r,i,t,f,n,m,k,p,_,y,x,u,g,P;function F(d){l[6](d)}let S={name:"feedback_text",label:"Er det noe vi kan forbedre med nettsiden?",value:"",showOptionalText:!1,helpText:'Informasjon blir brukt til å forbedre nettstedet. Vi kan ikke svare. <a class="mt-link" href="" on:click|preventDefault>Kontakt oss</a> hvis du luerer på noe',helpTextPlacement:"below",textAreaClass:l[0]?"":"hide-feedback",helpTextClass:l[0]?"":"hide-feedback",labelClass:l[0]?"":"hide-feedback"};return l[1]!==void 0&&(S.textAreaRef=l[1]),m=new ue({props:S}),ae.push(()=>le(m,"textAreaRef",F)),{c(){e=v("div"),a=v("button"),a.textContent="Ja",r=w(),i=v("button"),i.textContent="Nei",f=w(),n=v("form"),O(m.$$.fragment),p=w(),_=v("button"),y=E("Send svar"),o(a,"id","feedback_yes"),o(a,"type","button"),o(a,"class","mt-button mt-button--secondary"),o(i,"id","feedback_no"),o(i,"type","button"),o(i,"class","mt-button mt-button--secondary"),o(e,"role","group"),o(e,"class",t="feedback-box--buttons "+(l[0]?"hide-feedback":"")),o(_,"type","submit"),o(_,"class",x="mt-button mt-button--primary "+(l[0]?"":"hide-feedback")),o(n,"name","feedback_form"),o(n,"class","mt-form form-layout")},m(d,b){A(d,e,b),c(e,a),c(e,r),c(e,i),A(d,f,b),A(d,n,b),R(m,n,null),c(n,p),c(n,_),c(_,y),u=!0,g||(P=[V(a,"click",l[4]),V(i,"click",l[5]),V(n,"submit",ie(l[3]))],g=!0)},p(d,b){(!u||b&1&&t!==(t="feedback-box--buttons "+(d[0]?"hide-feedback":"")))&&o(e,"class",t);const C={};b&1&&(C.textAreaClass=d[0]?"":"hide-feedback"),b&1&&(C.helpTextClass=d[0]?"":"hide-feedback"),b&1&&(C.labelClass=d[0]?"":"hide-feedback"),!k&&b&2&&(k=!0,C.textAreaRef=d[1],ne(()=>k=!1)),m.$set(C),(!u||b&1&&x!==(x="mt-button mt-button--primary "+(d[0]?"":"hide-feedback")))&&o(_,"class",x)},i(d){u||(N(m.$$.fragment,d),u=!0)},o(d){B(m.$$.fragment,d),u=!1},d(d){d&&(D(e),D(f),D(n)),K(m),g=!1,se(P)}}}function pe(l){let e,a,r,i=l[9]+"",t,f,n,m,k=l[10]+"",p,_,y,x=l[12]+"",u,g,P,F,S,d,b,C,H,j=q(l[11]),h=[];for(let s=0;s<j.length;s+=1)h[s]=L(G(l,j,s));return d=new me({props:{isOpen:he,title:l[0]?"Takk for tilbakemeldingen.":"Fant du det du lette etter?",ariaTitle:"Fant du det du lette etter?",$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){e=v("div"),a=v("article"),r=v("h1"),t=E(i),f=w(),n=v("div"),m=v("p"),p=E(k),_=w(),y=new Q(!1),u=w();for(let s=0;s<h.length;s+=1)h[s].c();P=w(),F=v("div"),S=v("div"),O(d.$$.fragment),o(r,"class","mt-h1"),o(n,"class","intro"),y.a=u,o(a,"class","article-page col-1-span-12 legal-guidance"),o(e,"class","container content layout-grid layout-grid--column-12"),o(S,"class","feedback-box"),o(F,"class","feedback-container")},m(s,$){A(s,e,$),c(e,a),c(a,r),c(r,t),c(a,f),c(a,n),c(n,m),c(m,p),c(a,_),y.m(x,a),c(a,u);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(a,null);A(s,P,$),A(s,F,$),c(F,S),R(d,S,null),b=!0,C||(H=Z(g=be.call(null,e,l[13])),C=!0)},p(s,$){if((!b||$&512)&&i!==(i=s[9]+"")&&M(t,i),(!b||$&1024)&&k!==(k=s[10]+"")&&M(p,k),(!b||$&4096)&&x!==(x=s[12]+"")&&y.p(x),$&2048){j=q(s[11]);let T;for(T=0;T<j.length;T+=1){const J=G(s,j,T);h[T]?h[T].p(J,$):(h[T]=L(J),h[T].c(),h[T].m(a,null))}for(;T<h.length;T+=1)h[T].d(1);h.length=j.length}g&&ee(g.update)&&$&8192&&g.update.call(null,s[13]);const I={};$&1&&(I.title=s[0]?"Takk for tilbakemeldingen.":"Fant du det du lette etter?"),$&131075&&(I.$$scope={dirty:$,ctx:s}),d.$set(I)},i(s){b||(N(d.$$.fragment,s),b=!0)},o(s){B(d.$$.fragment,s),b=!1},d(s){s&&(D(e),D(P),D(F)),oe(h,s),K(d),C=!1,H()}}}function ge(l){let e,a,r,i;return e=new fe({props:{title:"Innhold/Tilbakemeldingsboks",args:{title:"Regelveiledning samleside overskrift",intro:"Regelveiledning samleside ingress",tableOfContents:"Innhold på siden",text:`<h2 class="mt-h2">Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class="mt-link" href="">Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul class="mt-ul">
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
          </ul>`,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"},{title:"Andre regelveiledning",intro:"Andre regelveiledning intro tekst.",text:`<h2 class="mt-h2">Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class="mt-link" href="">Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"}]},argTypes:{title:{control:"text"},intro:{control:"text"},text:{control:"text"},tableOfContents:{control:"text"},label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}}}),r=new ce({props:{name:"Normal",$$slots:{default:[pe,({title:t,intro:f,legalItems:n,text:m,disableCss:k})=>({9:t,10:f,11:n,12:m,13:k}),({title:t,intro:f,legalItems:n,text:m,disableCss:k})=>(t?512:0)|(f?1024:0)|(n?2048:0)|(m?4096:0)|(k?8192:0)]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment),a=w(),O(r.$$.fragment)},m(t,f){R(e,t,f),A(t,a,f),R(r,t,f),i=!0},p(t,[f]){const n={};f&146947&&(n.$$scope={dirty:f,ctx:t}),r.$set(n)},i(t){i||(N(e.$$.fragment,t),N(r.$$.fragment,t),i=!0)},o(t){B(e.$$.fragment,t),B(r.$$.fragment,t),i=!1},d(t){t&&D(a),K(e,t),K(r,t)}}}let he=!0;function ve(l,e,a){let r=!1,i;async function t(){a(0,r=!0),await te(),i.focus()}function f(p){re.call(this,l,p)}const n=()=>{t()},m=()=>{t()};function k(p){i=p,a(1,i)}return[r,i,t,f,n,m,k]}class _e extends W{constructor(e){super(),X(this,e,ve,ge,Y,{})}}const U=de(_e,{meta:{title:"Innhold/Tilbakemeldingsboks"},stories:{Normal:{name:"Normal",template:!1,source:`<div
  use:wrapInShadowDom={disableCss}
  class="container content layout-grid layout-grid--column-12">
  <article class="article-page col-1-span-12 legal-guidance">
    <h1 class="mt-h1">{title}</h1>
    <div class="intro">
      <p>{intro}</p>
    </div>

    {@html text}

    {#each legalItems as legal}
      <article
        id={toKebabCase(legal.title)}
        class="legal-collection legal-collection__border-top col-3-span-6"
        aria-labelledby="collection-title-1">
        <h2 id="collection-title-1" class="mt-h2">{legal.title}</h2>

        <div class="intro">
          {legal.intro}
        </div>

        {@html legal.text}
      </article>
    {/each}
  </article>
</div>
<div class="feedback-container">
  <div class="feedback-box">
    <DialogBox
      isOpen={dialogOpen}
      title={hideFeedbackText ? 'Takk for tilbakemeldingen.' : 'Fant du det du lette etter?'}
      ariaTitle="Fant du det du lette etter?">
      <div role="group" class="feedback-box--buttons {hideFeedbackText ? 'hide-feedback' : ''}">
        <button
          id="feedback_yes"
          type="button"
          class="mt-button mt-button--secondary"
          on:click={() => {
            handleClick('yes')
          }}>Ja</button>
        <button
          id="feedback_no"
          type="button"
          class="mt-button mt-button--secondary"
          on:click={() => {
            handleClick('no')
          }}>Nei</button>
      </div>
      <form name="feedback_form" class="mt-form form-layout" on:submit|preventDefault>
        <TextArea
          name="feedback_text"
          bind:textAreaRef={feedbackTextInput}
          label="Er det noe vi kan forbedre med nettsiden?"
          value=""
          showOptionalText={false}
          helpText={'Informasjon blir brukt til å forbedre nettstedet. Vi kan ikke svare. <a class="mt-link" ' +
            'href="" ' +
            'on:click|preventDefault>Kontakt oss</a> hvis du luerer på noe'}
          helpTextPlacement="below"
          textAreaClass={hideFeedbackText ? '' : 'hide-feedback'}
          helpTextClass={hideFeedbackText ? '' : 'hide-feedback'}
          labelClass={hideFeedbackText ? '' : 'hide-feedback'} />
        <button
          type="submit"
          class="mt-button mt-button--primary {hideFeedbackText ? '' : 'hide-feedback'}">
          Send svar
        </button>
      </form>
    </DialogBox>
  </div>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","toKebabCase","DialogBox","tick","TextArea","wrapInShadowDom"]}),je=U.meta,Ee=["Normal"],Oe=U.stories.Normal;export{Oe as Normal,Ee as __namedExportsOrder,je as default};
