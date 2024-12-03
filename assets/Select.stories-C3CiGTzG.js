import{S as de,i as ge,s as be,n as ne,c as $,m as k,t as w,a as y,d as F,b as ve,e as he,h as re,j as ie,k as ae,r as ye}from"./index-D8riOviU.js";import{e as c,s as b,a as d,i as L,b as u,d as O,g as N,l as J,p as x,B as Fe,h as oe}from"./lifecycle-CcifP0R7.js";import{p as Le,M as Oe,S as ue}from"./collect-stories-BMzKwk3M.js";import{S as Te,M as me}from"./Select-BxlaT_hi.js";import{w as _e}from"./utils-CMlWd0Pf.js";import"./each-Dzkb-YsG.js";import"./spread-CgU5AtxT.js";import"./index-DTCOkSMf.js";import"./Label-BX4PxQ2B.js";import"./InputErrorMessage-BPBNFNBW.js";import"./SummaryDetail-Bk7bDGdu.js";import"./utils-DjM8Id44.js";import"./proj-CDaZOfWJ.js";function fe(t){let e,r,l;return{c(){e=c("li"),r=c("a"),l=N("Figma"),d(r,"href",t[0]),d(r,"class","mt-link icon--figma"),d(e,"class","svelte-f28wfx")},m(s,n){L(s,e,n),u(e,r),u(r,l)},p(s,n){n&1&&d(r,"href",s[0])},d(s){s&&O(e)}}}function pe(t){let e,r,l;return{c(){e=c("li"),r=c("a"),l=N("GitHub"),d(r,"href",t[1]),d(r,"class","mt-link icon--github"),d(e,"class","svelte-f28wfx")},m(s,n){L(s,e,n),u(e,r),u(r,l)},p(s,n){n&2&&d(r,"href",s[1])},d(s){s&&O(e)}}}function Ne(t){let e,r,l=t[0]&&fe(t),s=t[1]&&pe(t);return{c(){e=c("ul"),l&&l.c(),r=b(),s&&s.c(),d(e,"class","mt-ul m-t-xxs list-unstyled layout-flex svelte-f28wfx")},m(n,f){L(n,e,f),l&&l.m(e,null),u(e,r),s&&s.m(e,null)},p(n,[f]){n[0]?l?l.p(n,f):(l=fe(n),l.c(),l.m(e,r)):l&&(l.d(1),l=null),n[1]?s?s.p(n,f):(s=pe(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:ne,o:ne,d(n){n&&O(e),l&&l.d(),s&&s.d()}}}function Re(t,e,r){let{figmaUrl:l=void 0}=e,{githubUrl:s=void 0}=e;return t.$$set=n=>{"figmaUrl"in n&&r(0,l=n.figmaUrl),"githubUrl"in n&&r(1,s=n.githubUrl)},[l,s]}class Se extends de{constructor(e){super(),ge(this,e,Re,Ne,be,{figmaUrl:0,githubUrl:1})}}Se.__docgen={version:3,name:"ResourceList.svelte",data:[{name:"figmaUrl",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"githubUrl",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Me(t){let e,r,l,s,n,f,i;return l=new Te({props:{options:[{text:"Hund",value:"dog"},{text:"Cat",value:"cat"}],label:t[5],helpText:t[6],name:"animal",error:void 0,idPrefix:"select-box-"}}),{c(){e=c("div"),r=c("form"),$(l.$$.fragment),d(r,"class","mt-form")},m(o,m){L(o,e,m),u(e,r),k(l,r,null),n=!0,f||(i=ve(s=_e.call(null,e,t[4])),f=!0)},p(o,m){const g={};m&32&&(g.label=o[5]),m&64&&(g.helpText=o[6]),l.$set(g),s&&he(s.update)&&m&16&&s.update.call(null,o[4])},i(o){n||(w(l.$$.fragment,o),n=!0)},o(o){y(l.$$.fragment,o),n=!1},d(o){o&&O(e),F(l),f=!1,i()}}}function Ae(t){let e,r,l,s,n,f,i,o,m,g,I,Y,R,Z,D,B,U=JSON.stringify(t[0],null,2)+"",E,z,M,j,Q,v,S,K,W,A,X,q,ee,V=JSON.stringify(t[0],null,2)+"",P,C,T,H,te;s=new Se({props:{figmaUrl:"https://www.figma.com/file/dp856nY6joVcAUSVSmPSRO/MT-Eksternt-Designsystem?node-id=1871%3A5152&t=3fZ5xL2MGOLfFwqv-4",githubUrl:"https://github.com/Mattilsynet/designsystem/blob/main/src/svelte/components/form/MultiSelect.svelte"}});function ke(a){t[1](a)}let le={options:t[3].multiselect.options,preferredOptions:t[3].multiselect.preferredOptions,label:t[3].multiselect.label,error:t[3].multiselect.error!==""?{key:"multi-select",message:t[3].multiselect.error}:void 0,name:"multi-select",loadJs:!0,tagsLabel:t[3].multiselect.tagsLabel,isRequired:t[3].multiselect.isRequired,helpText:t[3].multiselect.helpText};t[0]!==void 0&&(le.values=t[0]),g=new me({props:le}),re.push(()=>ie(g,"values",ke));function we(a){t[2](a)}let se={options:t[3].multiselect.options,preferredOptions:t[3].multiselect.preferredOptions,label:t[3].multiselect.label,error:t[3].multiselect.error!==""?{key:"multi-select",message:t[3].multiselect.error}:void 0,name:"multi-select-no-js",loadJs:!1,tagsLabel:t[3].multiselect.tagsLabel,isRequired:t[3].multiselect.isRequired,helpText:t[3].multiselect.helpText};return t[0]!==void 0&&(se.values=t[0]),S=new me({props:se}),re.push(()=>ie(S,"values",we)),{c(){e=c("div"),r=c("h1"),r.textContent="Flervalg",l=b(),$(s.$$.fragment),n=b(),f=c("section"),i=c("h2"),i.textContent="Normal",o=b(),m=c("form"),$(g.$$.fragment),Y=b(),R=c("button"),R.textContent="Submit",Z=b(),D=c("p"),B=N(`Values:
          `),E=N(U),z=b(),M=c("section"),j=c("h2"),j.textContent="Normal - without JS",Q=b(),v=c("form"),$(S.$$.fragment),W=b(),A=c("button"),A.textContent="Submit",X=b(),q=c("p"),ee=N(`Values:
          `),P=N(V),d(r,"class","mt-h1"),d(i,"class","mt-h2 svelte-1b8k3no"),d(R,"type","submit"),d(R,"class","mt-button"),d(m,"class","mt-form"),d(j,"class","mt-h2 svelte-1b8k3no"),d(A,"type","submit"),d(A,"class","mt-button"),d(v,"class","mt-form")},m(a,p){L(a,e,p),u(e,r),u(e,l),k(s,e,null),u(e,n),u(e,f),u(f,i),u(f,o),u(f,m),k(g,m,null),u(m,Y),u(m,R),u(m,Z),u(m,D),u(D,B),u(D,E),u(e,z),u(e,M),u(M,j),u(M,Q),u(M,v),k(S,v,null),u(v,W),u(v,A),u(v,X),u(v,q),u(q,ee),u(q,P),T=!0,H||(te=[J(m,"keyup",x(Ue)),J(m,"keydown",Fe(je)),J(m,"submit",x(ce)),J(v,"submit",x(ce)),ve(C=_e.call(null,e,t[4]))],H=!0)},p(a,p){const h={};p&8&&(h.options=a[3].multiselect.options),p&8&&(h.preferredOptions=a[3].multiselect.preferredOptions),p&8&&(h.label=a[3].multiselect.label),p&8&&(h.error=a[3].multiselect.error!==""?{key:"multi-select",message:a[3].multiselect.error}:void 0),p&8&&(h.tagsLabel=a[3].multiselect.tagsLabel),p&8&&(h.isRequired=a[3].multiselect.isRequired),p&8&&(h.helpText=a[3].multiselect.helpText),!I&&p&1&&(I=!0,h.values=a[0],ae(()=>I=!1)),g.$set(h),(!T||p&1)&&U!==(U=JSON.stringify(a[0],null,2)+"")&&oe(E,U);const _={};p&8&&(_.options=a[3].multiselect.options),p&8&&(_.preferredOptions=a[3].multiselect.preferredOptions),p&8&&(_.label=a[3].multiselect.label),p&8&&(_.error=a[3].multiselect.error!==""?{key:"multi-select",message:a[3].multiselect.error}:void 0),p&8&&(_.tagsLabel=a[3].multiselect.tagsLabel),p&8&&(_.isRequired=a[3].multiselect.isRequired),p&8&&(_.helpText=a[3].multiselect.helpText),!K&&p&1&&(K=!0,_.values=a[0],ae(()=>K=!1)),S.$set(_),(!T||p&1)&&V!==(V=JSON.stringify(a[0],null,2)+"")&&oe(P,V),C&&he(C.update)&&p&16&&C.update.call(null,a[4])},i(a){T||(w(s.$$.fragment,a),w(g.$$.fragment,a),w(S.$$.fragment,a),T=!0)},o(a){y(s.$$.fragment,a),y(g.$$.fragment,a),y(S.$$.fragment,a),T=!1},d(a){a&&O(e),F(s),F(g),F(S),H=!1,ye(te)}}}function De(t){let e,r,l,s,n,f;return e=new Oe({props:{title:"Components/Form/Select",args:{label:"Velg dyr",helpText:"Velg den typen dyr som denne saken gjelder",errorMessage:"Fyll inn dette feltet.",multiselect:{preferredOptions:[{value:"NO",text:"Norge",removeAriaLabel:"Fjern Norge fra listen"},{value:"SE",text:"Sverige",removeAriaLabel:"Fjern Sverig fra listen"},{value:"FI",text:"Finland",removeAriaLabel:"Fjern Finland fra listen"}],options:[{value:"DA",text:"Danmark",removeAriaLabel:"Fjern Danmark fra listen"},{value:"FI",text:"Finland",removeAriaLabel:"Fjern Finland fra listen"},{value:"FR",text:"Frankrike",removeAriaLabel:"Fjern Frankrike fra listen"},{value:"NO",text:"Norge",removeAriaLabel:"Fjern Norge fra listen"},{value:"PT",text:"Portugal",removeAriaLabel:"Fjern Portugal fra listen"},{value:"ES",text:"Spania",removeAriaLabel:"Fjern Spania fra listen"},{value:"SE",text:"Sverige",removeAriaLabel:"Fjern Sverige fra listen"},{value:"KR",text:"Sør Korea",removeAriaLabel:"Fjern Sør Korea fra listen"},{value:"DE",text:"Tyskland",removeAriaLabel:"Fjern Tyskland fra listen"}],label:"Hvilke land har du vært i?",error:"",tagsLabel:"Land du skal besøke:",helpText:"Legg til landene du har vært i før dere kom til Norge.",isRequired:!0},disableJs:!1,disableCss:!1},argTypes:{label:{control:"text"},helpText:{control:"text"},errorMessage:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}}}),l=new ue({props:{name:"Normal",$$slots:{default:[Me,({label:i,helpText:o,disableCss:m})=>({5:i,6:o,4:m}),({label:i,helpText:o,disableCss:m})=>(i?32:0)|(o?64:0)|(m?16:0)]},$$scope:{ctx:t}}}),n=new ue({props:{name:"Velg fler",$$slots:{default:[Ae,({args:i,disableCss:o})=>({3:i,4:o}),({args:i,disableCss:o})=>(i?8:0)|(o?16:0)]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),r=b(),$(l.$$.fragment),s=b(),$(n.$$.fragment)},m(i,o){k(e,i,o),L(i,r,o),k(l,i,o),L(i,s,o),k(n,i,o),f=!0},p(i,[o]){const m={};o&240&&(m.$$scope={dirty:o,ctx:i}),l.$set(m);const g={};o&153&&(g.$$scope={dirty:o,ctx:i}),n.$set(g)},i(i){f||(w(e.$$.fragment,i),w(l.$$.fragment,i),w(n.$$.fragment,i),f=!0)},o(i){y(e.$$.fragment,i),y(l.$$.fragment,i),y(n.$$.fragment,i),f=!1},d(i){i&&(O(r),O(s)),F(e,i),F(l,i),F(n,i)}}}function ce(){console.log("FORM handle submit")}function Ue(){console.log("HandleFormKeyUp")}function je(t){t.key==="Enter"&&t.target.type!=="submit"&&t.preventDefault()}function qe(t,e,r){let l=[];function s(f){l=f,r(0,l)}function n(f){l=f,r(0,l)}return[l,s,n]}class $e extends de{constructor(e){super(),ge(this,e,qe,De,be,{})}}$e.__docgen={version:3,name:"Select.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G=Le($e,{meta:{title:"Components/Form/Select"},stories:{Normal:{name:"Normal",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
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
      idPrefix="select-box-" />
  </form>
</div>`,tags:[],hasArgs:!0},VelgFler:{name:"Velg fler",template:!1,source:`<div use:wrapInShadowDom={disableCss}>
  <h1 class="mt-h1">Flervalg</h1>
  <ResourceList
    figmaUrl="https://www.figma.com/file/dp856nY6joVcAUSVSmPSRO/MT-Eksternt-Designsystem?node-id=1871%3A5152&t=3fZ5xL2MGOLfFwqv-4"
    githubUrl="https://github.com/Mattilsynet/designsystem/blob/main/src/svelte/components/form/MultiSelect.svelte" />
  <section>
    <h2 class="mt-h2">Normal</h2>
    <form
      class="mt-form"
      on:keyup|preventDefault={handleFormKeyUp}
      on:keydown|stopPropagation={handleFormKeyDown}
      on:submit|preventDefault={handleSubmit}>
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
        helpText={args.multiselect.helpText} />
      <button type="submit" class="mt-button">Submit</button>
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </section>
  <section>
    <h2 class="mt-h2">Normal - without JS</h2>
    <form class="mt-form" on:submit|preventDefault={handleSubmit}>
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
        helpText={args.multiselect.helpText} />
      <button type="submit" class="mt-button">Submit</button>
      <p>
        Values:
        {JSON.stringify(value, null, 2)}
      </p>
    </form>
  </section>
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Select","MultiSelect","wrapInShadowDom","ResourceList"]}),ze=G.meta,Qe=["Normal","VelgFler"],We=G.stories.Normal,Xe=G.stories.VelgFler;export{We as Normal,Xe as VelgFler,Qe as __namedExportsOrder,ze as default};
