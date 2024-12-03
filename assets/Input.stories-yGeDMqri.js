import{S as Z,i as ee,s as te,c as R,m as v,t as $,a as b,d as w,b as K,g as N,f as G,e as J}from"./index-D8riOviU.js";import{s as k,i as L,d as H,e as z,a as S,b as I,c as P}from"./lifecycle-CcifP0R7.js";import{e as j}from"./each-Dzkb-YsG.js";import{p as ne,M as le,S as W}from"./collect-stories-BMzKwk3M.js";import{T as E}from"./TextInput-DryNv1tU.js";import{w as Q}from"./utils-CMlWd0Pf.js";import{T as U}from"./TextInputHorizontal-JuyydV3M.js";import"./spread-CgU5AtxT.js";import"./InputErrorMessage-BPBNFNBW.js";import"./count-characters-Cnk4sLIe.js";import"./utils-DjM8Id44.js";import"./proj-CDaZOfWJ.js";import"./Label-BX4PxQ2B.js";import"./index-DTCOkSMf.js";function V(t,o,a){const e=t.slice();return e[6]=o[a],e[8]=a,e}function A(t,o,a){const e=t.slice();return e[6]=o[a],e}function B(t){let o,a;return o=new U({props:{name:"inputfield4",label:t[6].label,textOptional:t[6].textOptional,helpText:t[6].helpText,inputmode:"text",isRequired:t[6].isRequired,maxlength:t[6].maxLength,placeholder:"",autocomplete:"",inputClass:"form-field--small form-field--small-width"}}),{c(){R(o.$$.fragment)},m(e,m){v(o,e,m),a=!0},p(e,m){const r={};m&16&&(r.label=e[6].label),m&16&&(r.textOptional=e[6].textOptional),m&16&&(r.helpText=e[6].helpText),m&16&&(r.isRequired=e[6].isRequired),m&16&&(r.maxlength=e[6].maxLength),o.$set(r)},i(e){a||($(o.$$.fragment,e),a=!0)},o(e){b(o.$$.fragment,e),a=!1},d(e){w(o,e)}}}function oe(t){let o,a,e,m,r,T,n,u,g,d,s,O,i,c,_;e=new E({props:{name:"inputfield",label:t[0],helpText:t[1],textOptional:t[4].textOptional,inputmode:"text",isRequired:t[4].isRequired,placeholder:"",autocomplete:""}}),r=new E({props:{name:"inputfield2",label:t[0],helpText:t[1],textOptional:t[4].textOptional,inputmode:"text",isRequired:t[4].isRequired,placeholder:"Skriv noe",autocomplete:""}}),n=new E({props:{name:"inputfield3",label:t[0],helpText:t[1],textOptional:t[4].textOptional,inputmode:"text",isRequired:t[4].isRequired,placeholder:"",autocomplete:"",tooManyCharactersErrorText:t[4].tooManyCharactersErrorText,maxlength:30}});let h=j(t[4].horizontal),f=[];for(let l=0;l<h.length;l+=1)f[l]=B(A(t,h,l));const Y=l=>b(f[l],1,1,()=>{f[l]=null});return{c(){o=z("div"),a=z("form"),R(e.$$.fragment),m=k(),R(r.$$.fragment),T=k(),R(n.$$.fragment),u=k(),g=z("h2"),g.textContent="Horisontal layout",d=k(),s=z("div");for(let l=0;l<f.length;l+=1)f[l].c();S(g,"class","mt-h2"),S(s,"class","collapsable-input-list-grid svelte-8eupcf"),S(a,"class","mt-form form-layout")},m(l,p){L(l,o,p),I(o,a),v(e,a,null),I(a,m),v(r,a,null),I(a,T),v(n,a,null),I(a,u),I(a,g),I(a,d),I(a,s);for(let q=0;q<f.length;q+=1)f[q]&&f[q].m(s,null);i=!0,c||(_=K(O=Q.call(null,o,t[3])),c=!0)},p(l,p){const q={};p&1&&(q.label=l[0]),p&2&&(q.helpText=l[1]),p&16&&(q.textOptional=l[4].textOptional),p&16&&(q.isRequired=l[4].isRequired),e.$set(q);const M={};p&1&&(M.label=l[0]),p&2&&(M.helpText=l[1]),p&16&&(M.textOptional=l[4].textOptional),p&16&&(M.isRequired=l[4].isRequired),r.$set(M);const C={};if(p&1&&(C.label=l[0]),p&2&&(C.helpText=l[1]),p&16&&(C.textOptional=l[4].textOptional),p&16&&(C.isRequired=l[4].isRequired),p&16&&(C.tooManyCharactersErrorText=l[4].tooManyCharactersErrorText),n.$set(C),p&16){h=j(l[4].horizontal);let x;for(x=0;x<h.length;x+=1){const F=A(l,h,x);f[x]?(f[x].p(F,p),$(f[x],1)):(f[x]=B(F),f[x].c(),$(f[x],1),f[x].m(s,null))}for(N(),x=h.length;x<f.length;x+=1)Y(x);G()}O&&J(O.update)&&p&8&&O.update.call(null,l[3])},i(l){if(!i){$(e.$$.fragment,l),$(r.$$.fragment,l),$(n.$$.fragment,l);for(let p=0;p<h.length;p+=1)$(f[p]);i=!0}},o(l){b(e.$$.fragment,l),b(r.$$.fragment,l),b(n.$$.fragment,l),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)b(f[p]);i=!1},d(l){l&&H(o),w(e),w(r),w(n),P(f,l),c=!1,_()}}}function y(t){let o,a;return o=new U({props:{name:"inputfield"+t[8],label:t[6].label,textOptional:t[6].textOptional,helpText:t[6].helpText,inputmode:"text",error:{key:"inputfield",message:"Feltet er påkrevd"},isRequired:t[6].isRequired,placeholder:"",autocomplete:"",inputClass:"form-field--small form-field--small-width"}}),{c(){R(o.$$.fragment)},m(e,m){v(o,e,m),a=!0},p(e,m){const r={};m&16&&(r.label=e[6].label),m&16&&(r.textOptional=e[6].textOptional),m&16&&(r.helpText=e[6].helpText),m&16&&(r.isRequired=e[6].isRequired),o.$set(r)},i(e){a||($(o.$$.fragment,e),a=!0)},o(e){b(o.$$.fragment,e),a=!1},d(e){w(o,e)}}}function ae(t){let o,a,e,m,r,T,n,u,g;e=new E({props:{name:"inputfield",label:t[0],helpText:t[1],countCharactersLeftLabel:"karakterer igjen",error:{key:"inputfield",message:t[2]},textOptional:t[4].textOptional,inputmode:"text",maxlength:10,placeholder:"",autocomplete:""}});let d=j(t[4].horizontal),s=[];for(let i=0;i<d.length;i+=1)s[i]=y(V(t,d,i));const O=i=>b(s[i],1,1,()=>{s[i]=null});return{c(){o=z("div"),a=z("form"),R(e.$$.fragment),m=k(),r=z("div");for(let i=0;i<s.length;i+=1)s[i].c();S(r,"class","collapsable-input-list-grid svelte-8eupcf"),S(a,"class","mt-form form-layout")},m(i,c){L(i,o,c),I(o,a),v(e,a,null),I(a,m),I(a,r);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(r,null);n=!0,u||(g=K(T=Q.call(null,o,t[3])),u=!0)},p(i,c){const _={};if(c&1&&(_.label=i[0]),c&2&&(_.helpText=i[1]),c&4&&(_.error={key:"inputfield",message:i[2]}),c&16&&(_.textOptional=i[4].textOptional),e.$set(_),c&16){d=j(i[4].horizontal);let h;for(h=0;h<d.length;h+=1){const f=V(i,d,h);s[h]?(s[h].p(f,c),$(s[h],1)):(s[h]=y(f),s[h].c(),$(s[h],1),s[h].m(r,null))}for(N(),h=d.length;h<s.length;h+=1)O(h);G()}T&&J(T.update)&&c&8&&T.update.call(null,i[3])},i(i){if(!n){$(e.$$.fragment,i);for(let c=0;c<d.length;c+=1)$(s[c]);n=!0}},o(i){b(e.$$.fragment,i),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)b(s[c]);n=!1},d(i){i&&H(o),w(e),P(s,i),u=!1,g()}}}function re(t){let o,a,e,m,r,T;return o=new le({props:{title:"Components/Form/Input",args:{label:"Når skjedde det?",helpText:"Skriv når hendelsen skjedde og om det har pågått over lengere periode.",errorMessage:"Fyll inn dette feltet.",textOptional:"Valgfritt",isRequired:!1,horizontal:[{label:"Hund, antall",textOptional:"Valgfritt",helpText:"Hjelpetekst",isRequired:!0,maxLength:2},{label:"Katt, antall",textOptional:"Valgfritt",helpText:"Hjelpetekst",isRequired:!0}],countCharactersLeftLabel:"karakterer igjen",tooManyCharactersErrorText:"For lang tekst",disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},isRequired:{control:"boolean"},textOptional:{control:"text"},errorMessage:{control:"text"},tooManyCharactersErrorText:{control:"text"},horizontal:{control:"object"},countCharactersLeftLabel:{control:"text"},disableCss:{control:"boolean"}}}}),e=new W({props:{name:"Input",$$slots:{default:[oe,({label:n,helpText:u,disableCss:g,args:d})=>({0:n,1:u,3:g,4:d}),({label:n,helpText:u,disableCss:g,args:d})=>(n?1:0)|(u?2:0)|(g?8:0)|(d?16:0)]},$$scope:{ctx:t}}}),r=new W({props:{name:"Input with error",$$slots:{default:[ae,({label:n,helpText:u,errorMessage:g,disableCss:d,args:s,countCharactersLeftLabel:O})=>({0:n,1:u,2:g,3:d,4:s,5:O}),({label:n,helpText:u,errorMessage:g,disableCss:d,args:s,countCharactersLeftLabel:O})=>(n?1:0)|(u?2:0)|(g?4:0)|(d?8:0)|(s?16:0)|(O?32:0)]},$$scope:{ctx:t}}}),{c(){R(o.$$.fragment),a=k(),R(e.$$.fragment),m=k(),R(r.$$.fragment)},m(n,u){v(o,n,u),L(n,a,u),v(e,n,u),L(n,m,u),v(r,n,u),T=!0},p(n,[u]){const g={};u&2075&&(g.$$scope={dirty:u,ctx:n}),e.$set(g);const d={};u&2079&&(d.$$scope={dirty:u,ctx:n}),r.$set(d)},i(n){T||($(o.$$.fragment,n),$(e.$$.fragment,n),$(r.$$.fragment,n),T=!0)},o(n){b(o.$$.fragment,n),b(e.$$.fragment,n),b(r.$$.fragment,n),T=!1},d(n){n&&(H(a),H(m)),w(o,n),w(e,n),w(r,n)}}}class X extends Z{constructor(o){super(),ee(this,o,null,re,te,{})}}X.__docgen={version:3,name:"Input.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const D=ne(X,{meta:{title:"Components/Form/Input"},stories:{Input:{name:"Input",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      textOptional={args.textOptional}
      inputmode="text"
      isRequired={args.isRequired}
      placeholder=""
      autocomplete="" />

    <TextInput
      name="inputfield2"
      {label}
      {helpText}
      textOptional={args.textOptional}
      inputmode="text"
      isRequired={args.isRequired}
      placeholder="Skriv noe"
      autocomplete="" />

    <TextInput
      name="inputfield3"
      {label}
      {helpText}
      textOptional={args.textOptional}
      inputmode="text"
      isRequired={args.isRequired}
      placeholder=""
      autocomplete=""
      tooManyCharactersErrorText={args.tooManyCharactersErrorText}
      maxlength={30} />

    <h2 class="mt-h2">Horisontal layout</h2>
    <div class="collapsable-input-list-grid">
      {#each args.horizontal as horizontal}
        <TextInputHorizontal
          name="inputfield4"
          label={horizontal.label}
          textOptional={horizontal.textOptional}
          helpText={horizontal.helpText}
          inputmode="text"
          isRequired={horizontal.isRequired}
          maxlength={horizontal.maxLength}
          placeholder=""
          autocomplete=""
          inputClass="form-field--small form-field--small-width" />
      {/each}
    </div>
  </form>
</div>`,tags:[],hasArgs:!0},InputWithError:{name:"Input with error",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form form-layout">
    <TextInput
      name="inputfield"
      {label}
      {helpText}
      countCharactersLeftLabel="karakterer igjen"
      error={{ key: 'inputfield', message: errorMessage }}
      textOptional={args.textOptional}
      inputmode="text"
      maxlength={10}
      placeholder=""
      autocomplete="" />
    <div class="collapsable-input-list-grid">
      {#each args.horizontal as horizontal, index}
        <TextInputHorizontal
          name="inputfield{index}"
          label={horizontal.label}
          textOptional={horizontal.textOptional}
          helpText={horizontal.helpText}
          inputmode="text"
          error={{ key: 'inputfield', message: 'Feltet er påkrevd' }}
          isRequired={horizontal.isRequired}
          placeholder=""
          autocomplete=""
          inputClass="form-field--small form-field--small-width" />
      {/each}
    </div>
  </form>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","TextInput","wrapInShadowDom","TextInputHorizontal"]}),Te=D.meta,Oe=["Input","InputWithError"],qe=D.stories.Input,Ie=D.stories.InputWithError;export{qe as Input,Ie as InputWithError,Oe as __namedExportsOrder,Te as default};
