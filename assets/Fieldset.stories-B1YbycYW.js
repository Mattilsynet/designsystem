import{a as v,t as k}from"./props-C0tvRuaH.js";import{p as O,f as V,a as P,g as d,n as j,s as c,c as r,e as i}from"./runtime-h0AMGDom.js";import{a as C}from"./actions-EVnswImp.js";import{i as q}from"./lifecycle-DurhAeVF.js";import{d as K,c as M}from"./create-runtime-stories-BSZiRmpa.js";import{w as S}from"./utils-CMlWd0Pf.js";import{F}from"./Fieldset-BD61EESS.js";import{C as $}from"./CheckboxWithSubSets-BVGWh863.js";import{D as N}from"./Disclosure-eHDyJ933.js";import{i as w}from"./utils-UxKBq1MU.js";import{E as A}from"./ErrorSummary-DU0MDTeC.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./InputErrorMessage-Dd923iph.js";import"./each-DBQXtrgh.js";import"./index-Cvmj00a4.js";import"./input-Bhn6W10B.js";import"./proj-CDaZOfWJ.js";import"./html-CjI7j8Lz.js";import"./HeadingLevel-CsLaZNJ0.js";import"./index-BK-JItfK.js";const{Story:D,meta:R}=K({title:"Components/Form/Fieldset",args:{legend:"Temaer for nyhetsbrev",errorsNormal:[],errors:[{key:"fieldset-id",message:"Fyll inn ett av feltene."}],errorSummaryHeading:"Feil oppstod",fieldsetId:"fieldset-id",disclosure:{title:"Dyr",headerTag:"h2",level1Legend:"Velg tema innen {0}",level2Legend:"Ønsker du å velge bare spesifikke tema?",checkAllLabel:"Velg alle",checkAllValue:"dyr3"},disclosureOptions:{key:"alldyr",checked:!1,children:[{key:"produksjonsdyr3",displayName:"Produksjonsdyr asdf kljdfalskj sadk ffkljdsas jdfklasj fdlkasdfj lkajs flk fadslkfaj sklsalaslkdladks asdkljdkdajf",children:[{key:"produksjonsdyr3/hest",displayName:"Hest asdf kljdfalskj sadk ffkljdsas jdfklasj fdlkasdfj lkajs flk fadslkfaj sklsalaslkdladks asdkljdkdajf",children:[]},{key:"produksjonsdyr3/storfe",displayName:"Storfe",children:[]},{key:"produksjonsdyr3/kanin",displayName:"Kanin",children:[]}]},{key:"dyresykdommer3",displayName:"Dyresykdommer",children:[{key:"dyresykdommer3/afrikanskHestepest",displayName:"Afrikansk hestepest",children:[]},{key:"dyresykdommer3/afrikanskSvinepest",displayName:"Afrikansk svinepest",children:[]}]},{key:"dyr-som-lider",displayName:"Dyr som lider",children:[]}]},hiddenErrorText:"Fyll inn tekst",disableJs:!1,disableCss:!1},argTypes:{legend:{control:"text"},disableJs:{control:"boolean"},disableCss:{control:"boolean"}}});var z=k('<div><div class="container layout-grid layout-grid--column-12"><section class="article-page col-1-span-12"><h1 class="mt-h1">Fieldset</h1> <h2 class="mt-h2">Normal</h2> <!> <form class="mt-form col-3-span-8 form-layout"><!></form></section></div></div>'),B=k('<div><div class="container layout-grid layout-grid--column-12"><section class="article-page col-1-span-12"><div class="col-3-span-8 text"><h1 class="mt-h1">Fieldset</h1> <h2 class="mt-h2">With form validation errors</h2> <p>To get validation for a fieldset, populate the `error: ErrorDetail` parameter with\n              errors.</p> <!></div> <form class="mt-form col-3-span-8 form-layout"><!></form></section></div></div>'),G=k("<!> <!>",1);function T(I,J){O(J,!1),q();var y=G(),b=V(y);D(b,{name:"Normal",children:(m,e=j)=>{var l=z(),u=r(l),f=r(u),n=c(r(f),4);A(n,{get errors(){return e().errorsNormal},get heading(){return e().errorSummaryHeading}});var g=c(n,2),h=r(g),p=i(()=>e().errorsNormal.find(o=>o.key===e().fieldsetId));F(h,{class:"validation m-t-m",get legend(){return e().legend},get error(){return d(p)},children:(o,s)=>{var a=i(()=>!e().disableJs);N(o,{get id(){return e().fieldsetId},get title(){return e().disclosure.title},get loadJs(){return d(a)},class:"disclosure-no-border--align-left",get headerTag(){return e().disclosure.headerTag},children:(t,L)=>{var _=i(()=>w(e().disclosure.level1Legend,[e().disclosure.title.toLowerCase()]));$(t,{variation:"secondary",get options(){return e().disclosureOptions},hasCheckAll:!0,get checkAllLabel(){return e().disclosure.checkAllLabel},get level1Legend(){return d(_)},get level2Legend(){return e().disclosure.level2Legend}})},$$slots:{default:!0}})},$$slots:{default:!0}}),C(l,(o,s)=>{var a;return(a=S)==null?void 0:a(o,s)},()=>e().disableCss),v(m,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <div class="container layout-grid layout-grid--column-12">
    <section class="article-page col-1-span-12">
      <h1 class="mt-h1">Fieldset</h1>
      <h2 class="mt-h2">Normal</h2>

      <ErrorSummary errors={args.errorsNormal} heading={args.errorSummaryHeading} />
      <form class="mt-form col-3-span-8 form-layout">
        <Fieldset
          class="validation m-t-m"
          legend={args.legend}
          error={args.errorsNormal.find((error: ErrorDetail) => error.key === args.fieldsetId)}>
          <Disclosure
            id={args.fieldsetId}
            title={args.disclosure.title}
            loadJs={!args.disableJs}
            class="disclosure-no-border--align-left"
            headerTag={args.disclosure.headerTag}>
            <CheckboxWithSubSets
              variation="secondary"
              options={args.disclosureOptions}
              hasCheckAll={true}
              checkAllLabel={args.disclosure.checkAllLabel}
              level1Legend={interpolate(args.disclosure.level1Legend, [
                args.disclosure.title.toLowerCase()
              ])}
              level2Legend={args.disclosure.level2Legend} />
          </Disclosure>
        </Fieldset>
      </form>
    </section>
  </div>
</div>`}}});var x=c(b,2);D(x,{name:"With form validation errors",children:(m,e=j)=>{var l=B(),u=r(l),f=r(u),n=r(f),g=c(r(n),6);A(g,{get errors(){return e().errors},get heading(){return e().errorSummaryHeading}});var h=c(n,2),p=r(h),o=i(()=>e().errors.find(s=>s.key===e().fieldsetId));F(p,{class:"validation m-t-m",get legend(){return e().legend},get error(){return d(o)},legendClass:"mt-h2",children:(s,a)=>{var t=i(()=>!e().disableJs);N(s,{get id(){return e().fieldsetId},get title(){return e().disclosure.title},get loadJs(){return d(t)},class:"disclosure-no-border--align-left",get headerTag(){return e().disclosure.headerTag},children:(L,_)=>{var H=i(()=>w(e().disclosure.level1Legend,[e().disclosure.title.toLowerCase()]));$(L,{variation:"secondary",get options(){return e().disclosureOptions},hasCheckAll:!0,get checkAllLabel(){return e().disclosure.checkAllLabel},get level1Legend(){return d(H)},get level2Legend(){return e().disclosure.level2Legend}})},$$slots:{default:!0}})},$$slots:{default:!0}}),C(l,(s,a)=>{var t;return(t=S)==null?void 0:t(s,a)},()=>e().disableCss),v(m,l)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<div use:wrapInShadowDom={args.disableCss}>
  <div class="container layout-grid layout-grid--column-12">
    <section class="article-page col-1-span-12">
      <div class="col-3-span-8 text">
        <h1 class="mt-h1">Fieldset</h1>
        <h2 class="mt-h2">With form validation errors</h2>
        <p>
          To get validation for a fieldset, populate the \`error: ErrorDetail\` parameter with
          errors.
        </p>
        <ErrorSummary errors={args.errors} heading={args.errorSummaryHeading} />
      </div>
      <form class="mt-form col-3-span-8 form-layout">
        <Fieldset
          class="validation m-t-m"
          legend={args.legend}
          error={args.errors.find((error: ErrorDetail) => error.key === args.fieldsetId)}
          legendClass="mt-h2">
          <Disclosure
            id={args.fieldsetId}
            title={args.disclosure.title}
            loadJs={!args.disableJs}
            class="disclosure-no-border--align-left"
            headerTag={args.disclosure.headerTag}>
            <CheckboxWithSubSets
              variation="secondary"
              options={args.disclosureOptions}
              hasCheckAll={true}
              checkAllLabel={args.disclosure.checkAllLabel}
              level1Legend={interpolate(args.disclosure.level1Legend, [
                args.disclosure.title.toLowerCase()
              ])}
              level2Legend={args.disclosure.level2Legend} />
          </Disclosure>
        </Fieldset>
      </form>
    </section>
  </div>
</div>`}}}),v(I,y),P()}T.__docgen={version:3,name:"Fieldset.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const E=M(T,R),ye=["Normal","WithFormValidationErrors"],be=E.Normal,Le=E.WithFormValidationErrors;export{be as Normal,Le as WithFormValidationErrors,ye as __namedExportsOrder,R as default};
