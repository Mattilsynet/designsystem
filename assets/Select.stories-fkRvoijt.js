import{m as C,a as c,t as f,p as T,s as N,e as j}from"./props-C0tvRuaH.js";import{c as t,t as k,s as n,p as W,i as X,g as i,f as $,a as ee,b as H,d as O,n as te,h as M}from"./runtime-h0AMGDom.js";import{a as J}from"./actions-EVnswImp.js";import{d as le,c as re}from"./create-runtime-stories-BSZiRmpa.js";import{S as se,M as U}from"./Select-CaUUbbFq.js";import{w as q}from"./utils-CMlWd0Pf.js";import{s as D}from"./attributes-Cx6y8_P7.js";import{a as I}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./each-DBQXtrgh.js";import"./hydration-C_mtSyjW.js";import"./html-CjI7j8Lz.js";import"./class-Dqk93oQ7.js";import"./index-Cvmj00a4.js";import"./input-Bhn6W10B.js";import"./this-B-g0KYFp.js";import"./index-client-B5MNzxnb.js";import"./Label-D8X8gfhz.js";import"./InputErrorMessage-Dd923iph.js";import"./SummaryDetail-DNzTolJt.js";import"./universal-Cs0PP9_m.js";import"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";import"./v4-CQkTLCs1.js";var ne=f('<li class="svelte-f28wfx"><a class="mt-link icon--figma">Figma</a></li>'),ae=f('<li class="svelte-f28wfx"><a class="mt-link icon--github">GitHub</a></li>'),ie=f('<ul class="mt-ul m-t-xxs list-unstyled layout-flex svelte-f28wfx"><!> <!></ul>');function G(o,l){var a=ie(),p=t(a);{var m=r=>{var s=ne(),e=t(s);k(()=>D(e,"href",l.figmaUrl)),c(r,s)};C(p,r=>{l.figmaUrl&&r(m)})}var h=n(p,2);{var L=r=>{var s=ae(),e=t(s);k(()=>D(e,"href",l.githubUrl)),c(r,s)};C(h,r=>{l.githubUrl&&r(L)})}c(o,a)}G.__docgen={data:[{name:"figmaUrl",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"githubUrl",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],name:"ResourceList.svelte"};const oe=I("submitAction");let d=H(void 0);function E(o){o.preventDefault();const l=[];for(let a of new FormData(o.target)){const[p,m]=a;l.push(m)}oe(l.join(", "))}const{Story:P,meta:me}=le({title:"Components/Form/Select",args:{label:"Velg dyr",helpText:"Velg den typen dyr som denne saken gjelder",errorMessage:"Fyll inn dette feltet.",multiselect:{preferredOptions:[{value:"NO",text:"Norge",removeAriaLabel:"Fjern Norge fra listen"},{value:"SE",text:"Sverige",removeAriaLabel:"Fjern Sverig fra listen"},{value:"FI",text:"Finland",removeAriaLabel:"Fjern Finland fra listen"}],options:[{value:"DA",text:"Danmark",removeAriaLabel:"Fjern Danmark fra listen"},{value:"FR",text:"Frankrike",removeAriaLabel:"Fjern Frankrike fra listen"},{value:"PT",text:"Portugal",removeAriaLabel:"Fjern Portugal fra listen"},{value:"ES",text:"Spania",removeAriaLabel:"Fjern Spania fra listen"},{value:"KR",text:"Sør Korea",removeAriaLabel:"Fjern Sør Korea fra listen"},{value:"DE",text:"Tyskland",removeAriaLabel:"Fjern Tyskland fra listen"}],label:"Hvilke land har du vært i?",error:"",tagsLabel:"Land du skal besøke:",helpText:"Legg til landene du har vært i før dere kom til Norge.",isRequired:!0},disableJs:!1,disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}});var ue=f('<div><form class="mt-form"><!></form></div>'),de=f('<div><h1 class="mt-h1">Flervalg</h1> <!> <section><h2 class="mt-h2 svelte-1b8k3no">Normal</h2> <form class="mt-form"><!> <button type="submit" class="mt-button">Submit</button> <p> </p></form></section> <section><h2 class="mt-h2 svelte-1b8k3no">Normal - without JS</h2> <form class="mt-form"><!> <button type="submit" class="mt-button">Submit</button> <p> </p></form></section></div>'),ce=f("<!> <!>",1);function K(o,l){W(l,!0);let a=H(void 0);const p=I("valueChangedAction");X(()=>{p(i(a))});var m=ce(),h=$(m);P(h,{name:"Normal",children:(s,e)=>{let v=()=>e==null?void 0:e().label,x=()=>e==null?void 0:e().helpText,S=()=>e==null?void 0:e().disableCss;var u=ue(),y=t(u),w=t(y);se(w,{options:[{text:"Hund",value:"dog"},{text:"Cat",value:"cat"}],get label(){return v()},get helpText(){return x()},name:"animal",error:void 0,get value(){return i(a)},set value(b){O(a,T(b))}}),J(u,(b,F)=>{var _;return(_=q)==null?void 0:_(b,F)},S),c(s,u)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={disableCss}>
  <form class="mt-form">
    <Select
      options={[
        { text: 'Hund', value: 'dog' },
        { text: 'Cat', value: 'cat' }
      ]}
      {label}
      {helpText}
      name="animal"
      error={undefined}
      bind:value={singleValue} />
  </form>
</div>`}}});var L=n(h,2);P(L,{name:"Velg fler",children:(s,e=te)=>{var v=de(),x=n(t(v),2);G(x,{figmaUrl:"https://www.figma.com/file/dp856nY6joVcAUSVSmPSRO/MT-Eksternt-Designsystem?node-id=1871%3A5152&t=3fZ5xL2MGOLfFwqv-4",githubUrl:"https://github.com/Mattilsynet/designsystem/blob/main/src/svelte/components/form/MultiSelect.svelte"});var S=n(x,2),u=n(t(S),2),y=t(u),w=M(()=>e().multiselect.error!==""?{key:"multi-select",message:e().multiselect.error}:void 0);U(y,{get options(){return e().multiselect.options},get preferredOptions(){return e().multiselect.preferredOptions},get label(){return e().multiselect.label},get error(){return i(w)},name:"multi-select",loadJs:!0,get tagsLabel(){return e().multiselect.tagsLabel},get isRequired(){return e().multiselect.isRequired},get helpText(){return e().multiselect.helpText},textOptional:"Valgfritt",hiddenErrorText:void 0,get values(){return i(d)},set values(g){O(d,T(g))}});var b=n(y,4),F=t(b);k(()=>N(F,`Values:
            ${JSON.stringify(i(d),null,2)??""}`));var _=n(S,2),V=n(t(_),2),A=t(V),Z=M(()=>e().multiselect.error!==""?{key:"multi-select",message:e().multiselect.error}:void 0);U(A,{get options(){return e().multiselect.options},get preferredOptions(){return e().multiselect.preferredOptions},get label(){return e().multiselect.label},get error(){return i(Z)},name:"multi-select-no-js",loadJs:!1,get tagsLabel(){return e().multiselect.tagsLabel},get isRequired(){return e().multiselect.isRequired},get helpText(){return e().multiselect.helpText},textOptional:"Valgfritt",hiddenErrorText:void 0,get values(){return i(d)},set values(g){O(d,T(g))}});var z=n(A,4),B=t(z);k(()=>N(B,`Values:
            ${JSON.stringify(i(d),null,2)??""}`)),J(v,(g,Q)=>{var R;return(R=q)==null?void 0:R(g,Q)},()=>e().disableCss),j("submit",u,E),j("submit",V,E),c(s,v)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <h1 class="mt-h1">Flervalg</h1>
  <ResourceList
    figmaUrl="https://www.figma.com/file/dp856nY6joVcAUSVSmPSRO/MT-Eksternt-Designsystem?node-id=1871%3A5152&t=3fZ5xL2MGOLfFwqv-4"
    githubUrl="https://github.com/Mattilsynet/designsystem/blob/main/src/svelte/components/form/MultiSelect.svelte" />
  <section>
    <h2 class="mt-h2">Normal</h2>
    <form class="mt-form" onsubmit={handleSubmit}>
      <MultiSelect
        options={args.multiselect.options}
        preferredOptions={args.multiselect.preferredOptions}
        label={args.multiselect.label}
        error={args.multiselect.error !== ''
          ? { key: 'multi-select', message: args.multiselect.error }
          : undefined}
        name="multi-select"
        bind:values={value}
        loadJs={true}
        tagsLabel={args.multiselect.tagsLabel}
        isRequired={args.multiselect.isRequired}
        helpText={args.multiselect.helpText}
        textOptional="Valgfritt"
        hiddenErrorText={undefined} />
      <button type="submit" class="mt-button">Submit</button>
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </section>
  <section>
    <h2 class="mt-h2">Normal - without JS</h2>
    <form class="mt-form" onsubmit={handleSubmit}>
      <MultiSelect
        options={args.multiselect.options}
        preferredOptions={args.multiselect.preferredOptions}
        label={args.multiselect.label}
        error={args.multiselect.error !== ''
          ? { key: 'multi-select', message: args.multiselect.error }
          : undefined}
        name="multi-select-no-js"
        bind:values={value}
        loadJs={false}
        tagsLabel={args.multiselect.tagsLabel}
        isRequired={args.multiselect.isRequired}
        helpText={args.multiselect.helpText}
        textOptional="Valgfritt"
        hiddenErrorText={undefined} />
      <button type="submit" class="mt-button">Submit</button>
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </section>
</div>`}}}),c(o,m),ee()}K.__docgen={version:3,name:"Select.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Y=re(K,me),qe=["Normal","VelgFler"],De=Y.Normal,Ee=Y.VelgFler;export{De as Normal,Ee as VelgFler,qe as __namedExportsOrder,me as default};
