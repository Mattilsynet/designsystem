import{p as c,c as d,m as _,a as l,r as se,G as R,b as oe,t as ae,H as le,I as ce}from"./props-C0tvRuaH.js";import{y as de,a3 as ye,z as fe,n as ue,B as pe,a1 as N,a8 as D,a2 as M,b as S,g as v,d as w,p as I,i as A,f as y,a as q,h as me}from"./runtime-h0AMGDom.js";import{O as ge}from"./index-D-8MO0q_.js";import{y as be,g as j}from"./index-DPS9-N-h.js";function ve(t,e,...r){var n=t,i=ue,s;de(()=>{i!==(i=e())&&(s&&(pe(s),s=null),s=fe(()=>i(n,...r)))},ye)}const ke=t=>t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),xe=t=>ge(t.replace(/([A-Z])/g," $1").trim()),U=t=>ke(xe(t)),E="storybook-stories-extractor-context";function Y(t){let e=c(t.isExtracting),r=c(t.register);return{get isExtracting(){return e},get register(){return r}}}function he(t){const{stories:e}=t,r=Y({isExtracting:!0,register:n=>{e.set(n.exportName??U(n.name),n)}});N(E,r)}function Ce(){return D(E)||N(E,Y({isExtracting:!1,register:()=>{}})),M(E)}const F="storybook-story-renderer-context";function _e(t){let e=S(c(t.currentStoryExportName)),r=S(c(t.args)),n=S(c(t.storyContext));function i(s){w(e,c(s.currentStoryExportName)),w(r,c(s.args)),w(n,c(s.storyContext))}return{get args(){return v(r)},get storyContext(){return v(n)},get currentStoryExportName(){return v(e)},set:i}}function Se(){const t=_e({currentStoryExportName:void 0,args:{},storyContext:{}});N(F,t)}function K(){return D(F)||Se(),M(F)}const O="storybook-stories-template-snippet-context";function we(){let t=S(void 0);function e(r){w(t,c(r))}return{get template(){return v(t)},set:e}}function Ee(){return D(O)||N(O,we()),M(O).template}var Ne=ae('<p>No story rendered. See <a href="https://github.com/storybookjs/addon-svelte-csf#defining-stories" target="_blank">the docs</a> on how to define stories.</p>');function L(t,e){I(e,!0);const r=se(e,["$$slots","$$events","$$legacy","children","name","exportName","play"]),n=e.exportName??U(e.name),i=Ce(),s=K(),a=Ee(),o=me(()=>!i.isExtracting&&s.currentStoryExportName===n);i.isExtracting&&i.register({children:e.children,name:e.name,exportName:n,play:e.play,...r});function f(p,k){k&&p.playFunction&&(p.playFunction.__play=k)}A(()=>{v(o)&&f(s.storyContext,e.play)});var u=d(),h=y(u);{var J=p=>{var k=d(),z=y(k);{var H=m=>{var x=d(),T=y(x);ve(T,()=>e.children,()=>s.args,()=>s.storyContext),l(m,x)},Z=m=>{var x=d(),T=y(x);{var Q=g=>{a(g,()=>s.args,()=>s.storyContext)},V=g=>{var P=d(),$=y(P);{var ee=b=>{var C=d(),re=y(C);R(re,()=>s.storyContext.component,(ne,ie)=>{ie(ne,oe(()=>s.args))}),l(b,C)},te=b=>{var C=Ne();l(b,C)};_($,b=>{s.storyContext.component?b(ee):b(te,!1)},!0)}l(g,P)};_(T,g=>{a?g(Q):g(V,!1)},!0)}l(m,x)};_(z,m=>{e.children?m(H):m(Z,!1)})}l(p,k)};_(h,p=>{v(o)&&p(J)})}l(t,u),q()}L.__docgen={data:[{name:"decorators",visibility:"public",description:`Wrapper components or Storybook decorators that wrap a story.

Decorators defined in Meta will be applied to every story variation.`,keywords:[],kind:"let",static:!1,readonly:!1},{name:"parameters",visibility:"public",description:"Custom metadata for a story.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"args",visibility:"public",description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"argTypes",visibility:"public",description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"loaders",visibility:"public",description:"Asynchronous functions which provide data for a story.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"beforeEach",visibility:"public",description:`Function to be called before each story. When the function is async, it will be awaited.

\`beforeEach\` can be added to preview, the default export and to a specific story.
They are run (and awaited) in the order: preview, default export, story

A cleanup function can be returned.`,keywords:[],kind:"let",static:!1,readonly:!1},{name:"render",visibility:"public",description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"tags",visibility:"public",description:"Named tags for a story, used to filter stories in different contexts.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"mount",visibility:"public",keywords:[],kind:"let",static:!1,readonly:!1},{name:"name",visibility:"public",description:"Override the display name in the UI (CSF v3)\nName of the story. Can be omitted if `exportName` is provided.",keywords:[],kind:"let",type:{kind:"type",type:"intersection",text:"string"},static:!1,readonly:!1},{name:"storyName",visibility:"public",description:"Override the display name in the UI (CSF v2)",keywords:[],kind:"let",static:!1,readonly:!1},{name:"play",visibility:"public",description:"Function that is executed after the story is rendered.",keywords:[],kind:"let",static:!1,readonly:!1},{name:"globals",visibility:"public",description:"Override the globals values for this story",keywords:[],kind:"let",static:!1,readonly:!1},{name:"story",visibility:"public",keywords:[],kind:"let",static:!1,readonly:!1},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"children",visibility:"public",description:`The content to render in the story, either as:
1. A snippet taking args and storyContext as parameters
2. Static markup

Can be omitted if a default template is set with [\`setTemplate()\`](https://github.com/storybookjs/addon-svelte-csf/blob/main/README.md#default-snippet)`,keywords:[],kind:"let",type:{kind:"function",text:'Snippet<[NonNullable<StoryAnnotations<TCmp>["args"]>, StoryContext<TCmp>]>'},static:!1,readonly:!1},{name:"exportName",visibility:"public",description:`exportName of the story.
If not provided, it will be generated from the 'name', by converting it to a valid, PascalCased JS variable name.
eg. 'My story!' -> 'MyStory'

Use this prop to explicitly set the export name of the story. This is useful if you have multiple stories with the names
that result in duplicate export names like "My story" and "My story!".
It's also useful for explicitly defining the export that can be imported in MDX docs.`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"autodocs",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"source",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1}],name:"Story.svelte"};function Be(t){return{Story:L,meta:t}}function W(t,e){I(e,!0),he(e.repository());var r=d(),n=y(r);R(n,()=>e.Stories,(i,s)=>{s(i,{})}),l(t,r),q()}W.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Component<{}, {}, string>"},static:!1,readonly:!1},{name:"repository",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"() => StoriesRepository<Cmp>"},static:!1,readonly:!1}],name:"StoriesExtractor.svelte"};function Te(t){switch(typeof t){case"number":case"symbol":return!1;case"string":return t.includes(".")||t.includes("[")||t.includes("]")}}function Oe(t){return Object.is(t,-0)?"-0":t.toString()}function Ae(t){const e=[],r=t.length;if(r===0)return e;let n=0,i="",s="",a=!1;for(t.charCodeAt(0)===46&&(e.push(""),n++);n<r;){const o=t[n];s?o==="\\"&&n+1<r?(n++,i+=t[n]):o===s?s="":i+=o:a?o==='"'||o==="'"?s=o:o==="]"?(a=!1,e.push(i),i=""):i+=o:o==="["?(a=!0,i&&(e.push(i),i="")):o==="."?i&&(e.push(i),i=""):i+=o,n++}return i&&e.push(i),e}function X(t,e,r){if(t==null)return r;switch(typeof e){case"string":{const n=t[e];return n===void 0?Te(e)?X(t,Ae(e),r):r:n}case"number":case"symbol":{typeof e=="number"&&(e=Oe(e));const n=t[e];return n===void 0?r:n}default:{if(Array.isArray(e))return Fe(t,e,r);Object.is(e==null?void 0:e.valueOf(),-0)?e="-0":e=String(e);const n=t[e];return n===void 0?r:n}}}function Fe(t,e,r){if(e.length===0)return r;let n=t;for(let i=0;i<e.length;i++){if(n==null)return r;n=n[e[i]]}return n===void 0?r:n}const{addons:Re}=__STORYBOOK_MODULE_PREVIEW_API__,De=Re.getChannel(),Me=t=>{const{storyContext:e}=t;if(Ie(e))return;const r=qe({code:e.parameters.__svelteCsf.rawCode,args:t.args});setTimeout(()=>{De.emit(be,{id:e.id,args:e.unmappedArgs,source:r})})},Ie=t=>{var i;const e=(i=t==null?void 0:t.parameters.docs)==null?void 0:i.source,r=t==null?void 0:t.parameters.__isArgsStory;return(t==null?void 0:t.parameters.__svelteCsf.rawCode)?(e==null?void 0:e.type)===j.DYNAMIC?!1:!r||(e==null?void 0:e.code)||(e==null?void 0:e.type)===j.CODE:!0},qe=({code:t,args:e})=>{const r=Object.entries(e??{}).map(([s,a])=>je(s,a)).filter(s=>s);let n=r.join(" ");return n.length>50&&(n=`
  ${r.join(`
  `)}
`),t.replaceAll("{...args}",n).replace(/args(?:[\w\d_$\.\?\[\]"'])+/g,s=>{const a=s.replaceAll("?",""),o=X({args:e},a);return B(o)})},Pe=t=>{var r;const e=((r=t.getMockName)==null?void 0:r.call(t))??t.name;return e&&e!=="spy"?e:"() => {}"},B=t=>{var e;return typeof t=="object"&&t[Symbol.for("svelte.snippet")]?"snippet":typeof t=="function"?Pe(t):(e=JSON.stringify(t,null,1))==null?void 0:e.replace(/\n/g,"").replace(new RegExp("(?<!\\s)([}\\]])$")," $1")},je=(t,e)=>{if(e==null)return null;if(e===!0)return t;const r=B(e);return typeof e=="string"?`${t}=${r}`:`${t}={${r}}`};function G(t,e){I(e,!0);const r=K();A(()=>{r.set({currentStoryExportName:e.exportName,args:e.args,storyContext:e.storyContext})}),A(()=>{Me({args:e.args,storyContext:e.storyContext})});var n=d(),i=y(n);R(i,()=>e.Stories,(s,a)=>{a(s,{})}),l(t,n),q()}G.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Component<{}, {}, string>"},static:!1,readonly:!1},{name:"exportName",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"args",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"intersection",text:"Partial<any> & Partial<{ [x: string]: any; }>"},static:!1,readonly:!1},{name:"storyContext",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"StoryContext<Cmp>"},static:!1,readonly:!1}],name:"StoryRenderer.svelte"};const{logger:Ue}=__STORYBOOK_MODULE_CLIENT_LOGGER__,Ye=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Ge=(t,e)=>{const r={stories:new Map};try{const i=le(W,{target:Ye(),props:{Stories:t,repository:()=>r}});ce(i)}catch(i){Ue.error(`Error in mounting stories ${i.toString()}`,i)}const n={};for(const[i,s]of r.stories){const a={...s,render:(f,u)=>({Component:G,props:{exportName:i,Stories:t,storyContext:u,args:f}})},o=e.play??s.play;o&&(a.play=f=>{var h;const u=(h=f.playFunction)==null?void 0:h.__play;return u?u(f):o(f)}),n[i]=a}return n};export{Ge as c,Be as d,ve as s};
