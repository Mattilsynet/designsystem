import{h as t,p as I,c as me,m as Y,a as V,t as L}from"./props-C0tvRuaH.js";import{p as ke,b as _,f as A,a as be,g as a,d as b,s as x,t as xe,h as R}from"./runtime-h0AMGDom.js";import{s as P,c as S}from"./attributes-Cx6y8_P7.js";import{C as ve}from"./Combobox-DEY3fsk3.js";import{T as C}from"./TextInput-BqCUlEdm.js";import{i as he}from"./utils-UxKBq1MU.js";import"./proj-CDaZOfWJ.js";var we=L('<input type="hidden" class="form-field" data-testid="hidden-street"> <input type="hidden" class="form-field" data-testid="hidden-postal-code"> <input type="hidden" class="form-field" data-testid="hidden-postal-place">',1),Ce=L("<!> <!> <!>",1),Te=L("<!> <!>",1),Ie=L("<!> <!> <!>",1);function Ve(Z,e){ke(e,!0);let $=t(e,"inputName",3,""),ee=t(e,"listName",3,"address-list"),te=t(e,"streetLabel",3,""),E=t(e,"streetName",3,""),u=t(e,"streetValue",15),ae=t(e,"streetInputClass",3,""),D=t(e,"streetInputmode",3,"text"),J=t(e,"streetFallbackLabel",3,""),U=t(e,"streetFallbackHelpText",3,""),z=t(e,"postalCodeLabel",3,""),O=t(e,"postalCodeName",3,""),o=t(e,"postalCodeValue",15),K=t(e,"postalCodeInputClass",3,""),B=t(e,"postalCodeInputmode",3,"numeric"),G=t(e,"postalAreaLabel",3,""),F=t(e,"postalAreaName",3,""),p=t(e,"postalAreaValue",15),M=t(e,"postalAreaInputClass",3,""),Q=t(e,"postalAreaInputmode",3,"text"),ie=t(e,"formInProgressAriaLabel",3,"Søker"),v=t(e,"hiddenErrorText",3,"Feilmelding"),h=t(e,"textOptional",3,"Valgfritt"),le=t(e,"noResultsText",3,"Ingen resultater for {0}"),re=t(e,"fetchFailedText",3,"Skriv inn manuelt under"),w=t(e,"showOptionalText",3,!0),ne=t(e,"loadJs",3,!1),se=t(e,"hits",19,()=>"10"),N=t(e,"isFetchFallback",15,!1),n=_(void 0),q=_(I(u()&&o()&&p()?`${u()}, ${o()} ${p()}`:"")),H=_(!1),j=_(void 0),W;async function de(l){var y,f,g,m,k,i,r,d;if(u(void 0),o(void 0),p(void 0),l instanceof InputEvent)if(!((k=a(n))!=null&&k.value))a(n)&&a(n).list&&(a(n).list.textContent="");else{const s=(d=(r=(i=l.target)==null?void 0:i.value)==null?void 0:r.trim())==null?void 0:d.replace(/,+/g,""),c=encodeURIComponent(s);b(j,void 0),clearTimeout(W),W=setTimeout(async()=>{await oe(c)},300)}else{const s=Number((y=a(n))==null?void 0:y.value.split(":")[0]),c=(m=(g=(f=a(n))==null?void 0:f.list)==null?void 0:g.options)==null?void 0:m[s];c&&(u(c["data-street"]),o(c["data-postalcode"]),p(c["data-postalplace"]),b(q,I(u()&&o()&&p()?`${u()}, ${o()} ${p()}`:"")))}}function ue(l,y){return`https://ws.geonorge.no/adresser/v1/sok?sok=${l==null?void 0:l.replace(",","")}&fuzzy=true&utkoordsys=4258&treffPerSide=${y}&side=0&asciiKompatibel=true`}async function oe(l){if(l.length>2){b(H,!0);try{const g=(await(await fetch(ue(l,se()))).json()).adresser.map(({adressetekst:m,postnummer:k,poststed:i},r)=>{var s;const d=document.createElement("u-option");return d.classList.add("option"),Object.assign(d,{text:`${m}, ${k} ${i}`,value:`${r}: ${(s=a(n))==null?void 0:s.value}`,"data-street":`${m}`,"data-postalcode":`${k}`,"data-postalplace":`${i}`})});g.length===0?a(n)&&a(n).list&&(a(n).list.textContent=he(le(),[decodeURIComponent(l)])):a(n)&&a(n).list&&a(n).list.replaceChildren(...g)}catch{b(j,I({key:`${E()}-input`,message:re()})),N(!0)}b(H,!1)}}var X=me(),pe=A(X);{var ye=l=>{var y=Te(),f=A(y);ve(f,{get inputName(){return $()},get listName(){return ee()},get inputLabel(){return te()},get inputIsRequired(){return e.streetIsRequired},get inputHelpText(){return e.streetHelpText},get apiError(){return a(j)},get inputError(){return e.inputError},get isFetchFallback(){return N()},get isLoading(){return a(H)},onInput:de,get formInProgressAriaLabel(){return ie()},get inputValue(){return a(q)},set inputValue(i){b(q,I(i))},get inputRef(){return a(n)},set inputRef(i){b(n,I(i))}});var g=x(f,2);{var m=i=>{var r=we(),d=A(r),s=x(d,2),c=x(s,2);xe(()=>{P(d,"name",E()),S(d,u()),P(s,"name",O()),S(s,o()),P(c,"name",F()),S(c,p())}),V(i,r)},k=i=>{var r=Ce(),d=A(r);C(d,{get label(){return J()},get name(){return E()},get inputClass(){return ae()},get isRequired(){return e.streetIsRequired},get error(){return e.streetError},get inputmode(){return D()},get helpText(){return U()},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return u()},set value(T){u(T)}});var s=x(d,2),c=R(()=>`${K()} form-field--medium-width`);C(s,{get label(){return z()},get name(){return O()},get inputClass(){return a(c)},get isRequired(){return e.postalCodeIsRequired},get error(){return e.postalCodeError},get inputmode(){return B()},get helpText(){return e.postalCodeHelpText},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return o()},set value(T){o(T)}});var ge=x(s,2),fe=R(()=>`${M()}`);C(ge,{get label(){return G()},get name(){return F()},get inputClass(){return a(fe)},get isRequired(){return e.postalAreaIsRequired},get error(){return e.postalAreaError},get inputmode(){return Q()},get helpText(){return e.postalAreaHelpText},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return p()},set value(T){p(T)}}),V(i,r)};Y(g,i=>{N()?i(k,!1):i(m)})}V(l,y)},ce=l=>{var y=Ie(),f=A(y);C(f,{get label(){return J()},get name(){return E()},get isRequired(){return e.streetIsRequired},get error(){return e.streetError},get inputmode(){return D()},get helpText(){return U()},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return u()},set value(r){u(r)}});var g=x(f,2),m=R(()=>`${K()} form-field--medium-width`);C(g,{get label(){return z()},get name(){return O()},get inputClass(){return a(m)},get isRequired(){return e.postalCodeIsRequired},get error(){return e.postalCodeError},get inputmode(){return B()},get helpText(){return e.postalCodeHelpText},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return o()},set value(r){o(r)}});var k=x(g,2),i=R(()=>`${M()}`);C(k,{get label(){return G()},get name(){return F()},get inputClass(){return a(i)},get isRequired(){return e.postalAreaIsRequired},get error(){return e.postalAreaError},get inputmode(){return Q()},get helpText(){return e.postalAreaHelpText},get hiddenErrorText(){return v()},get textOptional(){return h()},get showOptionalText(){return w()},get value(){return p()},set value(r){p(r)}}),V(l,y)};Y(pe,l=>{ne()?l(ye):l(ce,!1)})}V(Z,X),be()}Ve.__docgen={data:[{name:"inputName",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"listName",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"address-list"'},{name:"streetLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"streetName",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"streetValue",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"streetIsRequired",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"streetError",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ErrorDetail"},static:!1,readonly:!1},{name:"streetHelpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"streetInputClass",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"streetInputmode",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"text",text:'"text"'},{kind:"const",type:"string",value:"decimal",text:'"decimal"'},{kind:"const",type:"string",value:"numeric",text:'"numeric"'},{kind:"const",type:"string",value:"tel",text:'"tel"'},{kind:"const",type:"string",value:"search",text:'"search"'},{kind:"const",type:"string",value:"email",text:'"email"'},{kind:"const",type:"string",value:"url",text:'"url"'}],text:'"text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'},static:!1,readonly:!1,defaultValue:'"text"'},{name:"streetFallbackLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"streetFallbackHelpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalCodeLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalCodeName",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalCodeValue",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"postalCodeIsRequired",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"postalCodeError",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ErrorDetail"},static:!1,readonly:!1},{name:"postalCodeHelpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"postalCodeInputClass",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalCodeInputmode",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"text",text:'"text"'},{kind:"const",type:"string",value:"decimal",text:'"decimal"'},{kind:"const",type:"string",value:"numeric",text:'"numeric"'},{kind:"const",type:"string",value:"tel",text:'"tel"'},{kind:"const",type:"string",value:"search",text:'"search"'},{kind:"const",type:"string",value:"email",text:'"email"'},{kind:"const",type:"string",value:"url",text:'"url"'}],text:'"text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'},static:!1,readonly:!1,defaultValue:'"numeric"'},{name:"postalAreaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalAreaName",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalAreaValue",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"postalAreaIsRequired",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"postalAreaError",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ErrorDetail"},static:!1,readonly:!1},{name:"postalAreaHelpText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"postalAreaInputClass",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"postalAreaInputmode",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"text",text:'"text"'},{kind:"const",type:"string",value:"decimal",text:'"decimal"'},{kind:"const",type:"string",value:"numeric",text:'"numeric"'},{kind:"const",type:"string",value:"tel",text:'"tel"'},{kind:"const",type:"string",value:"search",text:'"search"'},{kind:"const",type:"string",value:"email",text:'"email"'},{kind:"const",type:"string",value:"url",text:'"url"'}],text:'"text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"'},static:!1,readonly:!1,defaultValue:'"text"'},{name:"formInProgressAriaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Søker"'},{name:"hiddenErrorText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Feilmelding"'},{name:"textOptional",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Valgfritt"'},{name:"noResultsText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Ingen resultater for {0}"'},{name:"fetchFailedText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Skriv inn manuelt under"'},{name:"showOptionalText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"loadJs",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"hits",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"inputError",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"ErrorDetail"},static:!1,readonly:!1},{name:"isFetchFallback",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."}],name:"Address.svelte"};export{Ve as A};
