import{d as P,a as s,t as r,c as Q,s as W}from"./props-C0tvRuaH.js";import{p as U,f as B,a as X,g as o,n as z,s as D,c as t,e as M,t as J}from"./runtime-h0AMGDom.js";import{e as q,i as R}from"./each-DBQXtrgh.js";import{a as G}from"./actions-EVnswImp.js";import{s as I}from"./attributes-Cx6y8_P7.js";import{i as Y}from"./lifecycle-DurhAeVF.js";import{d as Z,c as $}from"./create-runtime-stories-BSZiRmpa.js";import{D as N}from"./Dropdown-BFirrp-p.js";import{C as ee}from"./Checkbox-CtYh6S0x.js";import{C as te}from"./CardArticle-DCXPdwe0.js";import{w as H}from"./utils-CMlWd0Pf.js";import"./hydration-C_mtSyjW.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./html-CjI7j8Lz.js";import"./class-Dqk93oQ7.js";import"./index-Cvmj00a4.js";import"./index-client-B5MNzxnb.js";import"./proj-CDaZOfWJ.js";import"./InputErrorMessage-Dd923iph.js";import"./utils-UxKBq1MU.js";import"./HeadingLevel-CsLaZNJ0.js";const ne=(A,n=z)=>{var c=ie(),v=t(c),g=t(v),S=M(()=>!n().disableJs);N(g,{get title(){return n().buttonLabel},get loadJs(){return o(S)},icon:"icon--caret-down-after",class:"mt-button__small-text full-menu",children:(i,l)=>{let k=()=>l==null?void 0:l().titleId;var a=re();q(a,5,()=>n().items,R,(m,p)=>{var u=ae(),d=t(u),_=t(d);J(()=>{I(d,"href",o(p).url),W(_,o(p).title)}),s(m,u)}),J(()=>I(a,"aria-labelledby",k())),s(i,a)},$$slots:{default:!0}});var T=D(v,2),h=t(T);te(h,{get headingId(){return n().cardArticle.headingId},get title(){return n().cardArticle.title},get intro(){return n().cardArticle.intro},get text(){return n().cardArticle.text}}),G(c,(e,i)=>{var l;return(l=H)==null?void 0:l(e,i)},()=>n().disableCss),s(A,c)},E=[{buttonLabel:"Språk/language",disableJs:!1,disableCss:!1,cardArticle:{headingId:"testarticle",title:"Det er mulig å klikke utenfor",intro:"Denne er brukt i header. Innholdet i dropdown skal ta opp hele skjermbredden. Du kan klikke utenfor og eller bruke TAB for å lukke den når den er åpen.",text:'<p>Du kan teste det. En liten tekst med en lenke til <a class="mt-link" href="https://mattilsynet.no">Mattilsynet</a>.</p>'},items:[{title:"Vis siden på nynorsk",url:"#"},{title:"Show page in English",url:'#"'}]},{buttonLabel:"En annen tekst",disableJs:!1,disableCss:!1,items:[{title:"En kort lenke",url:"#"},{title:"En lengere lenke, med komma",url:'#"'}]}],le="checkbox";let V;async function se(){V.reset(),V.submit()}const{Story:F,meta:oe}=Z({title:"Components/Dropdown",argTypes:{buttonLabel:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}},args:{label:"",helpText:"",errorMessage:"Fyll inn dette feltet.",hiddenErrorText:"Feilmelding",isRequired:!1,textOptional:"",options:[{text:"Temasider",value:"true"},{text:"Nyheter",value:"no"}],disableCss:!1}});var ae=r('<li><a class="forward-arrow-small"> </a></li>'),re=r('<ol class="mt-ol m-t-xxs alt-language"></ol>'),ie=r('<div><section class="preview-wrapper svelte-1us6xtn"><!></section> <section class="preview-wrapper svelte-1us6xtn" aria-labelledby="how-to-heading"><!></section></div>'),de=r('<li><a class="mt-link forward-arrow-small"> </a></li>'),ce=r('<ol class="mt-ol m-t-xxs alt-language"></ol>'),me=r('<section class="preview-wrapper inline-block svelte-1us6xtn"><!></section>'),pe=r('<form class="mt-form"><!> <button class="mt-button mt-button--primary" type="submit">Filtrer</button> <button class="mt-button mt-button--secondary" type="reset">Tøm filter</button></form>'),ue=r('<div><section class="m-t-l layout-grid layout-grid--column-12"><!> <div class="m-t-l col-3-span-6"><h2>Annet innhold på samme side</h2> <p>Dropdown skal lukke seg når man trykker utenfor eller bruker TAB for å skifte fokus.</p> <a class="mt-link" href="/">Lenke til annet innhold</a></div></section></div>'),fe=r("<!> <!> <!>",1);function K(A,n){U(n,!1),Y();var c=fe(),v=B(c);F(v,{name:"Normal",get args(){return E[0]},children:ne,parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <section class="preview-wrapper">
    <Dropdown
      title={args.buttonLabel}
      loadJs={!args.disableJs}
      icon="icon--caret-down-after"
      class="mt-button__small-text full-menu">
      {#snippet children({ titleId })}
        <ol class="mt-ol m-t-xxs alt-language" aria-labelledby={titleId}>
          {#each args.items as item}
            <li>
              <a href={item.url} class="forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      {/snippet}
    </Dropdown>
  </section>
  <section class="preview-wrapper" aria-labelledby="how-to-heading">
    <CardArticle
      headingId={args.cardArticle.headingId}
      title={args.cardArticle.title}
      intro={args.cardArticle.intro}
      text={args.cardArticle.text} />
  </section>
</div>`}}});var g=D(v,2);F(g,{name:"Multiple",args:E,children:(h,e=z)=>{var i=Q(),l=B(i);q(l,1,()=>[e()[0],e()[1]],R,(k,a)=>{var m=me(),p=t(m),u=M(()=>!o(a).disableJs);N(p,{get title(){return o(a).buttonLabel},get loadJs(){return o(u)},icon:"icon--caret-down-after",class:"mt-button__small-text  full-menu",children:(_,w)=>{let L=()=>w==null?void 0:w().titleId;var f=ce();q(f,5,()=>o(a).items,R,(x,b)=>{var y=de(),C=t(y),O=t(C);J(()=>{I(C,"href",o(b).url),W(O,o(b).title)}),s(x,y)}),J(()=>I(f,"aria-labelledby",L())),s(_,f)},$$slots:{default:!0}}),s(k,m)}),s(h,i)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`{#each [configs[0], configs[1]] as args}
  <section class="preview-wrapper inline-block">
    <Dropdown
      title={args.buttonLabel}
      loadJs={!args.disableJs}
      icon="icon--caret-down-after"
      class="mt-button__small-text  full-menu">
      {#snippet children({ titleId })}
        <ol class="mt-ol m-t-xxs alt-language" aria-labelledby={titleId}>
          {#each args.items as item}
            <li>
              <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
            </li>
          {/each}
        </ol>
      {/snippet}
    </Dropdown>
  </section>
{/each}`}}});var S=D(g,2);F(S,{name:"Standalone",args:E,children:(h,e)=>{let i=()=>e==null?void 0:e().disableJs,l=()=>e==null?void 0:e().label,k=()=>e==null?void 0:e().helpText,a=()=>e==null?void 0:e().disableCss,m=()=>e==null?void 0:e().options,p=()=>e==null?void 0:e().isRequired,u=()=>e==null?void 0:e().textOptional;var d=ue(),_=t(d),w=t(_),L=M(()=>!i());N(w,{title:"Vis søkefilter",titleWhenOpen:"Skjul søkefilter",get loadJs(){return o(L)},icon:"icon--caret-down-after",class:"default-dropdown span-9-col-3-span-4",children:(x,b)=>{var y=pe(),C=t(y);ee(C,{name:le,get label(){return l()},get helpText(){return k()},get options(){return m()},get isRequired(){return p()},get textOptional(){return u()}});var O=D(C,4);O.__click=se,s(x,y)},$$slots:{default:!0}}),G(d,(f,x)=>{var b;return(b=H)==null?void 0:b(f,x)},a),s(h,d)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <section class="m-t-l layout-grid layout-grid--column-12">
    <Dropdown
      title="Vis søkefilter"
      titleWhenOpen="Skjul søkefilter"
      loadJs={!disableJs}
      icon="icon--caret-down-after"
      class="default-dropdown span-9-col-3-span-4">
      {#snippet children({ isOpen })}
        <form class="mt-form">
          <Checkbox {name} {label} {helpText} {options} {isRequired} {textOptional} />
          <button class="mt-button mt-button--primary" type="submit"> Filtrer</button>
          <button class="mt-button mt-button--secondary" type="reset" onclick={resetForm}>
            Tøm filter
          </button>
        </form>
      {/snippet}
    </Dropdown>

    <div class="m-t-l col-3-span-6">
      <h2>Annet innhold på samme side</h2>
      <p>
        Dropdown skal lukke seg når man trykker utenfor eller bruker TAB for å skifte fokus.
      </p>
      <a class="mt-link" href="/">Lenke til annet innhold</a>
    </div>
  </section>
</div>`}}}),s(A,c),X()}P(["click"]);K.__docgen={version:3,name:"Dropdown.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j=$(K,oe),Re=["Normal","Multiple","Standalone"],Ne=j.Normal,je=j.Multiple,Be=j.Standalone;export{je as Multiple,Ne as Normal,Be as Standalone,Re as __namedExportsOrder,oe as default};
