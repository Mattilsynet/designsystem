import{d as G,a,c as z,m as H,w as C,p as K,t as p}from"./props-C0tvRuaH.js";import{p as Q,i as U,g as r,a as W,b as O,s as n,f as k,d as j,c as o}from"./runtime-h0AMGDom.js";import{h as X}from"./html-CjI7j8Lz.js";import{d as Y,c as Z}from"./create-runtime-stories-BSZiRmpa.js";import{a as ee}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as i}from"./DialogBox-9xbqpwpT.js";import{B as L}from"./ButtonSpinner-Be5seiJn.js";import"./index-D-8MO0q_.js";import"./index-DPS9-N-h.js";import"./v4-CQkTLCs1.js";import"./attributes-Cx6y8_P7.js";import"./class-Dqk93oQ7.js";import"./hydration-C_mtSyjW.js";import"./this-B-g0KYFp.js";let m=!0,h=O(!1),d="Lukk dialogboks",S="Dette er en dialogboks tittel!",N="Dette er en skult dialogboks tittel!";function te(){j(h,!r(h))}const ae=ee("closeDialog");function se(f){ae(f)}const{Story:ne,meta:oe}=Y({title:"Components/Dialogboks",args:{content:`<h2 class='mt-h2'>Du bør varsle</h2>
      <p>At noen setter opp nye piggtrådgjerder</p>
      <p>Eldre piggtrådgjerder som utgjør en risiko for at dyr blir skadet</p>`},argTypes:{}});var re=p("<p>Dialogboks innhold</p>"),le=p("<p>Dialogboks innhold</p>"),ie=p('<div class="layout-flex" style="margin-top: 20px;"><!> <!></div>'),de=p("<p>Dialogboks innhold</p>"),pe=p('<h2 class="mt-h2 svelte-1a0u9zu">Default</h2> <div class="tags-wrapper svelte-1a0u9zu"><!></div> <h2 class="mt-h2 svelte-1a0u9zu">Ingen tittel</h2> <div class="tags-wrapper svelte-1a0u9zu"><!></div> <hr> <h2 class="mt-h2 svelte-1a0u9zu">Enkel</h2> <div class="tags-wrapper svelte-1a0u9zu"><!></div> <hr> <h2 class="mt-h2 svelte-1a0u9zu">Avansert</h2> <div class="tags-wrapper svelte-1a0u9zu"><!></div> <hr> <h2 class="mt-h2 svelte-1a0u9zu">Vises ved endring</h2> <div class="tags-wrapper svelte-1a0u9zu"><button class="mt-button toggle-button svelte-1a0u9zu">Toggle dialog</button> <!></div>',1);function I(f,T){Q(T,!0);let c=O(void 0);U(()=>{var b;r(c)&&r(h)&&((b=r(c))==null||b.scrollIntoView())}),ne(f,{name:"Normal",children:(R,_)=>{let B=()=>_==null?void 0:_().content;var x=pe(),$=n(k(x),2),E=o($);i(E,{title:S,isOpen:m,closeBtnAriaLabel:d,children:(e,v)=>{var t=re();a(e,t)},$$slots:{default:!0}});var w=n($,4),V=o(w);i(V,{title:"",isOpen:m,ariaTitle:N,closeBtnAriaLabel:d,children:(e,v)=>{var t=le();a(e,t)},$$slots:{default:!0}});var P=n(w,6),F=o(P);i(F,{isOpen:m,ariaTitle:N,closeBtnAriaLabel:d,children:(e,v)=>{var t=z(),u=k(t);{var D=s=>{var g=z(),l=k(g);X(l,B),a(s,g)};H(u,s=>{B()&&s(D)})}a(e,t)},$$slots:{default:!0}});var y=n(P,6),J=o(y);i(J,{title:"Fant du det du lette etter?",isOpen:m,closeBtnAriaLabel:d,children:(e,v)=>{var t=ie(),u=o(t);L(u,{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",spinnerPlacement:"start",children:(s,g)=>{var l=C("Ja");a(s,l)},$$slots:{default:!0}});var D=n(u,2);L(D,{formInProgressAriaLabel:"Sender inn skjema, venter på svar.",btnClassNames:"mt-button--secondary",spinnerPlacement:"end",children:(s,g)=>{var l=C("Nei");a(s,l)},$$slots:{default:!0}}),a(e,t)},$$slots:{default:!0}});var M=n(y,6),A=o(M);A.__click=te;var q=n(A,2);i(q,{title:S,get isOpen(){return r(h)},closeBtnAriaLabel:d,onClosingDialog:se,get dialogRef(){return r(c)},set dialogRef(e){j(c,K(e))},children:(e,v)=>{var t=de();a(e,t)},$$slots:{default:!0}}),a(R,x)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<h2 class="mt-h2">Default</h2>
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
  <button class="mt-button toggle-button" onclick={handleClick}>Toggle dialog</button>
  <DialogBox {title} isOpen={showDialog} {closeBtnAriaLabel} {onClosingDialog} bind:dialogRef>
    <p>Dialogboks innhold</p>
  </DialogBox>
</div>`}}}),W()}G(["click"]);I.__docgen={version:3,name:"DialogBox.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ce=Z(I,oe),Pe=["Normal"],ye=ce.Normal;export{ye as Normal,Pe as __namedExportsOrder,oe as default};
