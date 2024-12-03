import{S as H,i as U,s as G,c as D,m as A,t as b,a as w,d as C,b as R,e as j,g as K,f as P,n as Q}from"./index-D8riOviU.js";import{s as v,i as g,d as _,e as $,a as m,b as p,f as X,c as M,l as Y,g as V,h as Z}from"./lifecycle-CcifP0R7.js";import{e as y}from"./each-Dzkb-YsG.js";import{p as ee,M as te,T as le,S as E}from"./collect-stories-BMzKwk3M.js";import{D as x}from"./Dropdown-Dci4y9TZ.js";import{C as ne}from"./Checkbox-_9qRH8JF.js";import{C as ae}from"./CardArticle-DAPgikOA.js";import{w as W}from"./utils-CMlWd0Pf.js";import"./index-DTCOkSMf.js";import"./toggle-machine-BRWFjtir.js";import"./useMachine-BoQ-JPCB.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./utils-DjM8Id44.js";import"./HeadingLevel-RQgwHrl0.js";function L(i,t,o){const r=i.slice();return r[3]=t[o],r[12]=o,r}function N(i,t,o){const r=i.slice();return r[14]=t[o],r}function O(i,t,o){const r=i.slice();return r[14]=t[o],r}function F(i){let t,o,r=i[14].title+"",a,n,s;return{c(){t=$("li"),o=$("a"),a=V(r),s=v(),m(o,"href",n=i[14].url),m(o,"class","forward-arrow-small")},m(e,c){g(e,t,c),p(t,o),p(o,a),p(t,s)},p(e,c){c&8&&r!==(r=e[14].title+"")&&Z(a,r),c&8&&n!==(n=e[14].url)&&m(o,"href",n)},d(e){e&&_(t)}}}function se(i){let t,o,r=y(i[3].items),a=[];for(let n=0;n<r.length;n+=1)a[n]=F(O(i,r,n));return{c(){t=$("ol");for(let n=0;n<a.length;n+=1)a[n].c();m(t,"class","mt-ol m-t-xxs alt-language"),m(t,"aria-labelledby",o=i[13])},m(n,s){g(n,t,s);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)},p(n,s){if(s&8){r=y(n[3].items);let e;for(e=0;e<r.length;e+=1){const c=O(n,r,e);a[e]?a[e].p(c,s):(a[e]=F(c),a[e].c(),a[e].m(t,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=r.length}s&8192&&o!==(o=n[13])&&m(t,"aria-labelledby",o)},d(n){n&&_(t),M(a,n)}}}function oe(i){let t,o,r,a,n,s,e,c,d,f;return r=new x({props:{title:i[3].buttonLabel,loadJs:!i[3].disableJs,icon:"icon--caret-down-after",class:"mt-button__small-text full-menu",$$slots:{default:[se,({titleId:l})=>({13:l}),({titleId:l})=>l?8192:0]},$$scope:{ctx:i}}}),s=new ae({props:{headingId:i[3].cardArticle.headingId,title:i[3].cardArticle.title,intro:i[3].cardArticle.intro,text:i[3].cardArticle.text}}),{c(){t=$("div"),o=$("section"),D(r.$$.fragment),a=v(),n=$("section"),D(s.$$.fragment),m(o,"class","preview-wrapper svelte-1us6xtn"),m(n,"class","preview-wrapper svelte-1us6xtn"),m(n,"aria-labelledby","how-to-heading")},m(l,u){g(l,t,u),p(t,o),A(r,o,null),p(t,a),p(t,n),A(s,n,null),c=!0,d||(f=R(e=W.call(null,t,i[3].disableCss)),d=!0)},p(l,u){const k={};u&8&&(k.title=l[3].buttonLabel),u&8&&(k.loadJs=!l[3].disableJs),u&532488&&(k.$$scope={dirty:u,ctx:l}),r.$set(k);const h={};u&8&&(h.headingId=l[3].cardArticle.headingId),u&8&&(h.title=l[3].cardArticle.title),u&8&&(h.intro=l[3].cardArticle.intro),u&8&&(h.text=l[3].cardArticle.text),s.$set(h),e&&j(e.update)&&u&8&&e.update.call(null,l[3].disableCss)},i(l){c||(b(r.$$.fragment,l),b(s.$$.fragment,l),c=!0)},o(l){w(r.$$.fragment,l),w(s.$$.fragment,l),c=!1},d(l){l&&_(t),C(r),C(s),d=!1,f()}}}function q(i){let t,o,r=i[14].title+"",a,n;return{c(){t=$("li"),o=$("a"),a=V(r),n=v(),m(o,"href",i[14].url),m(o,"class","mt-link forward-arrow-small")},m(s,e){g(s,t,e),p(t,o),p(o,a),p(t,n)},p:Q,d(s){s&&_(t)}}}function re(i){let t,o,r=y(i[3].items),a=[];for(let n=0;n<r.length;n+=1)a[n]=q(N(i,r,n));return{c(){t=$("ol");for(let n=0;n<a.length;n+=1)a[n].c();m(t,"class","mt-ol m-t-xxs alt-language"),m(t,"aria-labelledby",o=i[13])},m(n,s){g(n,t,s);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,null)},p(n,s){if(s&1){r=y(n[3].items);let e;for(e=0;e<r.length;e+=1){const c=N(n,r,e);a[e]?a[e].p(c,s):(a[e]=q(c),a[e].c(),a[e].m(t,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=r.length}s&8192&&o!==(o=n[13])&&m(t,"aria-labelledby",o)},d(n){n&&_(t),M(a,n)}}}function B(i){let t,o,r,a;return o=new x({props:{title:i[3].buttonLabel,loadJs:!i[3].disableJs,icon:"icon--caret-down-after",class:"mt-button__small-text  full-menu",$$slots:{default:[re,({titleId:n})=>({13:n}),({titleId:n})=>n?8192:0]},$$scope:{ctx:i}}}),{c(){t=$("section"),D(o.$$.fragment),r=v(),m(t,"class","preview-wrapper inline-block svelte-1us6xtn")},m(n,s){g(n,t,s),A(o,t,null),p(t,r),a=!0},p(n,s){const e={};s&532480&&(e.$$scope={dirty:s,ctx:n}),o.$set(e)},i(n){a||(b(o.$$.fragment,n),a=!0)},o(n){w(o.$$.fragment,n),a=!1},d(n){n&&_(t),C(o)}}}function ie(i){let t,o,r=y([i[0][0],i[0][1]]),a=[];for(let s=0;s<2;s+=1)a[s]=B(L(i,r,s));const n=s=>w(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<2;s+=1)a[s].c();t=X()},m(s,e){for(let c=0;c<2;c+=1)a[c]&&a[c].m(s,e);g(s,t,e),o=!0},p(s,e){if(e&8193){r=y([s[0][0],s[0][1]]);let c;for(c=0;c<2;c+=1){const d=L(s,r,c);a[c]?(a[c].p(d,e),b(a[c],1)):(a[c]=B(d),a[c].c(),b(a[c],1),a[c].m(t.parentNode,t))}for(K(),c=2;c<2;c+=1)n(c);P()}},i(s){if(!o){for(let e=0;e<2;e+=1)b(a[e]);o=!0}},o(s){a=a.filter(Boolean);for(let e=0;e<2;e+=1)w(a[e]);o=!1},d(s){s&&_(t),M(a,s)}}}function ce(i){let t,o,r,a,n,s,e,c,d;return o=new ne({props:{name:me,label:i[4],helpText:i[5],options:i[7],isRequired:i[8],textOptional:i[9]}}),{c(){t=$("form"),D(o.$$.fragment),r=v(),a=$("button"),a.textContent="Filtrer",n=v(),s=$("button"),s.textContent="Tøm filter",m(a,"class","mt-button mt-button--primary"),m(a,"type","submit"),m(s,"class","mt-button mt-button--secondary"),m(s,"type","reset"),m(t,"class","mt-form")},m(f,l){g(f,t,l),A(o,t,null),p(t,r),p(t,a),p(t,n),p(t,s),e=!0,c||(d=Y(s,"click",i[1]),c=!0)},p(f,l){const u={};l&16&&(u.label=f[4]),l&32&&(u.helpText=f[5]),l&128&&(u.options=f[7]),l&256&&(u.isRequired=f[8]),l&512&&(u.textOptional=f[9]),o.$set(u)},i(f){e||(b(o.$$.fragment,f),e=!0)},o(f){w(o.$$.fragment,f),e=!1},d(f){f&&_(t),C(o),c=!1,d()}}}function ue(i){let t,o,r,a,n,s,e,c,d;return r=new x({props:{title:"Vis søkefilter",titleWhenOpen:"Skjul søkefilter",loadJs:!i[3].disableJs,icon:"icon--caret-down-after",class:"default-dropdown span-9-col-3-span-4",$$slots:{default:[ce,({isOpen:f})=>({10:f}),({isOpen:f})=>f?1024:0]},$$scope:{ctx:i}}}),{c(){t=$("div"),o=$("section"),D(r.$$.fragment),a=v(),n=$("div"),n.innerHTML='<h2>Annet innhold på samme side</h2> <p>Dropdown skal lukke seg når man trykker utenfor eller bruker TAB for å skifte fokus.</p> <a class="mt-link" href="/">Lenke til annet innhold</a>',m(n,"class","m-t-l col-3-span-6"),m(o,"class","m-t-l layout-grid layout-grid--column-12")},m(f,l){g(f,t,l),p(t,o),A(r,o,null),p(o,a),p(o,n),e=!0,c||(d=R(s=W.call(null,t,i[6])),c=!0)},p(f,l){const u={};l&8&&(u.loadJs=!f[3].disableJs),l&525232&&(u.$$scope={dirty:l,ctx:f}),r.$set(u),s&&j(s.update)&&l&64&&s.update.call(null,f[6])},i(f){e||(b(r.$$.fragment,f),e=!0)},o(f){w(r.$$.fragment,f),e=!1},d(f){f&&_(t),C(r),c=!1,d()}}}function fe(i){let t,o,r,a,n,s,e,c,d,f;return t=new te({props:{parameters:{xstate:!0,inspectUrl:"https://stately.ai/viz?inspect",layout:"fullscreen",disableCss:!1},title:"Components/Dropdown",argTypes:{buttonLabel:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}},args:{label:"",helpText:"",errorMessage:"Fyll inn dette feltet.",hiddenErrorText:"Feilmelding",isRequired:!1,textOptional:"",options:[{text:"Temasider",value:"true"},{text:"Nyheter",value:"no"}],disableCss:!1}}}),r=new le({props:{$$slots:{default:[oe,({args:l})=>({3:l}),({args:l})=>l?8:0]},$$scope:{ctx:i}}}),n=new E({props:{name:"Normal",args:i[0][0]}}),e=new E({props:{name:"Multiple",args:i[0],$$slots:{default:[ie,({args:l})=>({3:l}),({args:l})=>l?8:0]},$$scope:{ctx:i}}}),d=new E({props:{name:"Standalone",args:i[0],$$slots:{default:[ue,({args:l,label:u,helpText:k,disableCss:h,options:S,isRequired:J,textOptional:T})=>({3:l,4:u,5:k,6:h,7:S,8:J,9:T}),({args:l,label:u,helpText:k,disableCss:h,options:S,isRequired:J,textOptional:T})=>(l?8:0)|(u?16:0)|(k?32:0)|(h?64:0)|(S?128:0)|(J?256:0)|(T?512:0)]},$$scope:{ctx:i}}}),{c(){D(t.$$.fragment),o=v(),D(r.$$.fragment),a=v(),D(n.$$.fragment),s=v(),D(e.$$.fragment),c=v(),D(d.$$.fragment)},m(l,u){A(t,l,u),g(l,o,u),A(r,l,u),g(l,a,u),A(n,l,u),g(l,s,u),A(e,l,u),g(l,c,u),A(d,l,u),f=!0},p(l,[u]){const k={};u&524296&&(k.$$scope={dirty:u,ctx:l}),r.$set(k);const h={};u&524288&&(h.$$scope={dirty:u,ctx:l}),e.$set(h);const S={};u&525304&&(S.$$scope={dirty:u,ctx:l}),d.$set(S)},i(l){f||(b(t.$$.fragment,l),b(r.$$.fragment,l),b(n.$$.fragment,l),b(e.$$.fragment,l),b(d.$$.fragment,l),f=!0)},o(l){w(t.$$.fragment,l),w(r.$$.fragment,l),w(n.$$.fragment,l),w(e.$$.fragment,l),w(d.$$.fragment,l),f=!1},d(l){l&&(_(o),_(a),_(s),_(c)),C(t,l),C(r,l),C(n,l),C(e,l),C(d,l)}}}const me="checkbox";function de(i){const t=[{buttonLabel:"Språk/language",disableJs:!1,disableCss:!1,cardArticle:{headingId:"testarticle",title:"Det er mulig å klikke utenfor",intro:"Denne er brukt i header. Innholdet i dropdown skal ta opp hele skjermbredden. Du kan klikke utenfor og eller bruke TAB for å lukke den når den er åpen.",text:'<p>Du kan teste det. En liten tekst med en lenke til <a class="mt-link" href="https://mattilsynet.no">Mattilsynet</a>.</p>'},items:[{title:"Vis siden på nynorsk",url:"#"},{title:"Show page in English",url:'#"'}]},{buttonLabel:"En annen tekst",disableJs:!1,disableCss:!1,items:[{title:"En kort lenke",url:"#"},{title:"En lengere lenke, med komma",url:'#"'}]}];let o;async function r(){o.reset(),o.submit()}return[t,r]}class z extends H{constructor(t){super(),U(this,t,de,fe,G,{})}}z.__docgen={version:3,name:"Dropdown.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I=ee(z,{meta:{title:"Components/Dropdown"},stories:{"tpl:default":{name:"default",template:!0,source:`<div use:wrapInShadowDom={args.disableCss}>
  <section class="preview-wrapper">
    <Dropdown
      title={args.buttonLabel}
      loadJs={!args.disableJs}
      let:titleId
      icon="icon--caret-down-after"
      class="mt-button__small-text full-menu">
      <ol class="mt-ol m-t-xxs alt-language" aria-labelledby={titleId}>
        {#each args.items as item}
          <li>
            <a href={item.url} class="forward-arrow-small">{item.title}</a>
          </li>
        {/each}
      </ol>
    </Dropdown>
  </section>
  <section class="preview-wrapper" aria-labelledby="how-to-heading">
    <CardArticle
      headingId={args.cardArticle.headingId}
      title={args.cardArticle.title}
      intro={args.cardArticle.intro}
      text={args.cardArticle.text} />
  </section>
</div>`,tags:[],hasArgs:!0},Normal:{name:"Normal",template:!1,source:"",tags:[],hasArgs:!1},Multiple:{name:"Multiple",template:!1,source:`{#each [configs[0], configs[1]] as args, i}
  <section class="preview-wrapper inline-block">
    <Dropdown
      title={args.buttonLabel}
      loadJs={!args.disableJs}
      let:titleId
      icon="icon--caret-down-after"
      class="mt-button__small-text  full-menu">
      <ol class="mt-ol m-t-xxs alt-language" aria-labelledby={titleId}>
        {#each args.items as item}
          <li>
            <a href={item.url} class="mt-link forward-arrow-small">{item.title}</a>
          </li>
        {/each}
      </ol>
    </Dropdown>
  </section>
{/each}`,tags:[],hasArgs:!0},Standalone:{name:"Standalone",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <section class="m-t-l layout-grid layout-grid--column-12">
    <Dropdown
      let:isOpen
      title="Vis søkefilter"
      titleWhenOpen="Skjul søkefilter"
      loadJs={!args.disableJs}
      icon="icon--caret-down-after"
      class="default-dropdown span-9-col-3-span-4">
      <form class="mt-form">
        <Checkbox {name} {label} {helpText} {options} {isRequired} {textOptional} />
        <button class="mt-button mt-button--primary" type="submit"> Filtrer </button>
        <button class="mt-button mt-button--secondary" type="reset" on:click={resetForm}>
          Tøm filter
        </button>
      </form>
    </Dropdown>

    <div class="m-t-l col-3-span-6">
      <h2>Annet innhold på samme side</h2>
      <p>Dropdown skal lukke seg når man trykker utenfor eller bruker TAB for å skifte fokus.</p>
      <a class="mt-link" href="/">Lenke til annet innhold</a>
    </div>
  </section>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Template","Dropdown","Checkbox","CardArticle","wrapInShadowDom"]}),Je=I.meta,Te=["Normal","Multiple","Standalone"],Ee=I.stories.Normal,Me=I.stories.Multiple,xe=I.stories.Standalone;export{Me as Multiple,Ee as Normal,xe as Standalone,Te as __namedExportsOrder,Je as default};
