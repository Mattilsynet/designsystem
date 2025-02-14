import{d as $,s as v,a as g,p as ee,e as te,t as _}from"./props-C0tvRuaH.js";import{p as ae,a as ne,f as w,t as k,g as e,d as D,b as S,Z as le,c as a,s as l,h as u}from"./runtime-h0AMGDom.js";import{e as re,i as oe}from"./each-DBQXtrgh.js";import{h as F}from"./html-CjI7j8Lz.js";import{a as se}from"./actions-EVnswImp.js";import{s as ie}from"./attributes-Cx6y8_P7.js";import{s as P}from"./class-Dqk93oQ7.js";import{d as de,c as ce}from"./create-runtime-stories-BSZiRmpa.js";import{t as me}from"./utils-UxKBq1MU.js";import{D as fe}from"./DialogBox-9xbqpwpT.js";import{T as be}from"./TextArea-sJP_eN9s.js";import{w as ve}from"./utils-CMlWd0Pf.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./this-B-g0KYFp.js";import"./input-Bhn6W10B.js";import"./InputErrorMessage-Dd923iph.js";import"./count-characters-Cnk4sLIe.js";import"./proj-CDaZOfWJ.js";import"./Label-D8X8gfhz.js";let o=S(!1),x=S(void 0),ke=!0;async function A(){var d;D(o,!0),await le(),(d=e(x))==null||d.focus()}const{Story:ue,meta:pe}=de({title:"Innhold/Tilbakemeldingsboks",args:{title:"Regelveiledning samleside overskrift",intro:"Regelveiledning samleside ingress",tableOfContents:"Innhold på siden",text:`<h2 class='mt-h2'>Andre overskrift</h2>
      <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
      <ul class='mt-ul'>
        <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
        <li>
          En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
          selvstendig ansvar for dyr.
        </li>
      </ul>`,disableCss:!1,legalItems:[{title:"Første regelveiledning",intro:"Første regelveiledning intro tekst.",text:`<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"},{title:"Andre regelveiledning",intro:"Andre regelveiledning intro tekst.",text:`<h2 class='mt-h2'>Andre overskrift</h2>
          <p>Paragraf med tekst. Paragraf med tekst. <a class='mt-link' href=''>Paragraf med tekst.</a> Paragraf med tekst</p>
          <ul >
            <li>Valget om å skaffe dyr må være godt gjennomtenkt. Er hele familien enige og innstilt på det?</li>
            <li>
              En voksen person må være hovedansvarlig for dyret. I følge dyrevelferdsloven kan barn under 16 år ikke ha et
              selvstendig ansvar for dyr.
            </li>
          </ul>`,howToDoItTitle:"Slik gjør du",howToDoIt:"<p>Slik gjør du beskrivelse</p>"}]},argTypes:{title:{control:"text"},intro:{control:"text"},text:{control:"text"},tableOfContents:{control:"text"},label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableCss:{control:"boolean"}}});var he=_('<article class="legal-collection legal-collection__border-top col-3-span-6" aria-labelledby="collection-title-1"><h2 id="collection-title-1" class="mt-h2"> </h2> <div class="intro"> </div> <!></article>'),ge=_('<div role="group"><button id="feedback_yes" type="button" class="mt-button mt-button--secondary">Ja</button> <button id="feedback_no" type="button" class="mt-button mt-button--secondary">Nei</button></div> <form name="feedback_form" class="mt-form form-layout"><!> <button type="submit">Send svar</button></form>',1),xe=_('<div class="container content layout-grid layout-grid--column-12"><article class="article-page col-1-span-12 legal-guidance"><h1 class="mt-h1"> </h1> <div class="intro"><p> </p></div> <!> <!></article></div> <div class="feedback-container"><div class="feedback-box"><!></div></div>',1);function j(d,E){ae(E,!0),ue(d,{name:"Normal",children:(O,t)=>{let N=()=>t==null?void 0:t().title,R=()=>t==null?void 0:t().intro,B=()=>t==null?void 0:t().legalItems,V=()=>t==null?void 0:t().text,K=()=>t==null?void 0:t().disableCss;var y=xe(),p=w(y),J=a(p),T=a(J),M=a(T),C=l(T,2),Z=a(C),q=a(Z),I=l(C,2);F(I,V);var z=l(I,2);re(z,17,B,oe,(i,r)=>{var n=he();k(()=>ie(n,"id",me(e(r).title)));var s=a(n),c=a(s),m=l(s,2),f=a(m),b=l(m,2);F(b,()=>e(r).text),k(()=>{v(c,e(r).title),v(f,e(r).intro)}),g(i,n)}),se(p,(i,r)=>{var n;return(n=ve)==null?void 0:n(i,r)},K);var G=l(p,2),H=a(G),L=a(H),Q=u(()=>e(o)?"Takk for tilbakemeldingen.":"Fant du det du lette etter?");fe(L,{isOpen:ke,get title(){return e(Q)},ariaTitle:"Fant du det du lette etter?",children:(i,r)=>{var n=ge(),s=w(n),c=a(s);c.__click=A;var m=l(c,2);m.__click=A;var f=l(s,2),b=a(f),U=u(()=>e(o)?"":"hide-feedback"),W=u(()=>e(o)?"":"hide-feedback"),X=u(()=>e(o)?"":"hide-feedback");be(b,{name:"feedback_text",label:"Er det noe vi kan forbedre med nettsiden?",value:"",showOptionalText:!1,helpText:'Informasjon blir brukt til å forbedre nettstedet. Vi kan ikke svare. <a class="mt-link" href="" >Kontakt oss</a> hvis du luerer på noe',helpTextPlacement:"below",get textAreaClass(){return e(U)},get helpTextClass(){return e(W)},get labelClass(){return e(X)},get textAreaRef(){return e(x)},set textAreaRef(h){D(x,ee(h))}});var Y=l(b,2);k(()=>{P(s,`feedback-box--buttons ${(e(o)?"hide-feedback":"")??""}`),P(Y,`mt-button mt-button--primary ${(e(o)?"":"hide-feedback")??""}`)}),te("submit",f,h=>h.preventDefault()),g(i,n)},$$slots:{default:!0}}),k(()=>{v(M,N()),v(q,R())}),g(O,y)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div
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
          onclick={handleClick}
          >Ja
        </button>
        <button
          id="feedback_no"
          type="button"
          class="mt-button mt-button--secondary"
          onclick={handleClick}
          >Nei
        </button>
      </div>
      <form name="feedback_form" class="mt-form form-layout" onsubmit={e => e.preventDefault()}>
        <TextArea
          name="feedback_text"
          bind:textAreaRef={feedbackTextInput}
          label="Er det noe vi kan forbedre med nettsiden?"
          value=""
          showOptionalText={false}
          helpText={'Informasjon blir brukt til å forbedre nettstedet. Vi kan ikke svare. <a class="mt-link" ' +
            'href="" >Kontakt oss</a> hvis du luerer på noe'}
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
</div>`}}}),ne()}$(["click"]);j.__docgen={version:3,name:"FeedbackBox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const _e=ce(j,pe),ze=["Normal"],Ge=_e.Normal;export{Ge as Normal,ze as __namedExportsOrder,pe as default};
