const M=typeof window<"u"&&typeof document<"u",_={capture:!0,passive:!0};function r(t,o,e){return e===void 0?t.getAttribute(o)??null:(e===null?t.removeAttribute(o):t.getAttribute(o)!==e&&t.setAttribute(o,e),null)}let U=0;const J=`${Date.now().toString(36)}${Math.random().toString(36).slice(2,5)}`;function $(t){return t.id||(t.id=`${J}${++U}`),t.id}const K=(t,o,e)=>{for(const i of e[0].split(","))e[0]=i,o[`${t}EventListener`](...e)},d=(t,...o)=>K("add",t,o),w=new Map,g=M?document.createElement("div"):null;g&&r(g,"style","position:absolute;padding:1px;top:0;left:0px");M&&d(window,"load,resize,scroll",()=>{for(const[t,o]of w)o()},_);const b={top:0,right:1,bottom:2,left:3};function y(t,o,e){var i;if(!o||!o.isConnected||!t.isConnected)return w.delete(t);if(g!=null&&g.isConnected||document.body.append(g||""),!w.has(t)){const G=b[e]??b.bottom;return(i=w.set(t,()=>y(t,o,G)).get(t))==null?void 0:i()}const{offsetWidth:n,offsetHeight:l}=t,{offsetWidth:s,offsetHeight:c}=o,{width:I,height:D,left:F,top:P}=o.getBoundingClientRect(),m=Math.round(F-(s-I)/2),f=Math.round(P-(c-D)/2),W=m-n>0,q=s+s+n<window.innerWidth,R=f-l>0,O=f+c+l<window.innerHeight,X=e===b.bottom&&q||!W,Y=e===b.bottom&&O||!R,z=Math.min(Math.max(10,m-(n-s)/2),window.innerWidth-n-10),V=Math.min(Math.max(10,f-(l-c)/2),window.innerHeight-l-10),T=e===b.top||e===b.bottom;t.style.left=`${Math.round(T?z:X?m+s:m-n)}px`,t.style.top=`${Math.round(T?Y?f+c:f-l:V)}px`,g==null||g.style.setProperty("translate",`${Math.round(window.scrollX+m+s+n+30)} ${Math.round(window.scrollY+f+c+l+30)}px`)}function Q(t){let o=0;const e=()=>setTimeout(i,200),i=()=>{t([],n),o=0},n=new MutationObserver(()=>{o||(o=requestAnimationFrame(e))});return n}const h=new WeakMap,Z=t=>{var o;const e=h.get(t);if(!e||!t.isConnected)(o=e==null?void 0:e.observer)==null||o.disconnect(),h.delete(t);else for(const[,i]of e.collections)i()},x=(t,o,e)=>{const i=t.getElementsByClassName(o);let n=h.get(t);n||(n={collections:new Map,observer:Q(()=>Z(t))},n.observer.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),h.set(t,n)),e?n.collections.set(o,()=>e(i)):n.collections.delete(o)},A=t=>t instanceof HTMLElement&&"validity"in t&&!(t instanceof HTMLButtonElement),tt=({clientX:t,clientY:o,target:e})=>{if(e instanceof HTMLDialogElement&&r(e,"data-closedby")==="any"){const{top:i,right:n,bottom:l,left:s}=e.getBoundingClientRect();i<=o&&o<=l&&s<=t&&t<=n||e.close()}};function et(t){d(t,"click",tt,_)}const ot="_alert_ybgjr_1 _ds-alert_1w6ss_1",nt="_avatar_ybgjr_1 _ds-avatar_1w6ss_1",it="_badge_ybgjr_1",st="_breadcrumbs_ybgjr_1 _ds-breadcrumbs_1w6ss_1",lt="_button_ybgjr_1 _ds-button_1w6ss_1",rt="_card_ybgjr_1",at="_chip_ybgjr_1 _ds-chip_1w6ss_1",dt="_details_ybgjr_1 _ds-details_1w6ss_1",ct="_dialog_ybgjr_1 _ds-modal_1w6ss_1",_t="_divider_ybgjr_1",ut="_errorsummary_ybgjr_1 _ds-error-summary_1w6ss_1",gt="_field_ybgjr_1 _ds-field_1w6ss_1",ft="_affixes_ybgjr_1 _ds-field-affixes_1w6ss_1",bt="_count_ybgjr_1",pt="_fieldset_ybgjr_1 _ds-fieldset_1w6ss_1",mt="_heading_ybgjr_1 _ds-heading_1w6ss_1",yt="_input_ybgjr_1 _ds-input_1w6ss_1",vt="_grid_ybgjr_1",$t="_flex_ybgjr_1",wt="_link_ybgjr_1",ht="_logo_ybgjr_1 _ds-focus_1w6ss_1",jt="_pagination_ybgjr_1 _ds-pagination_1w6ss_1",Mt="_popover_ybgjr_1",Et="_skeleton_ybgjr_1 _ds-skeleton_1w6ss_1",xt="_spinner_ybgjr_1",At="_table_ybgjr_1 _ds-table_1w6ss_1",Tt="_scrollShadow_ybgjr_1",Lt="_tabs_ybgjr_1 _ds-tabs_1w6ss_1",kt="_tag_ybgjr_1 _ds-tag_1w6ss_1",Ct="_togglegroup_ybgjr_1",Ht="_tooltip_ybgjr_1",St="_validation_ybgjr_1 _ds-validation-message_1w6ss_1",Bt="_body_ybgjr_119",p={alert:ot,avatar:nt,badge:it,breadcrumbs:st,button:lt,card:rt,chip:at,details:dt,dialog:ct,divider:_t,errorsummary:ut,field:gt,affixes:ft,count:bt,fieldset:pt,heading:mt,input:yt,grid:vt,flex:$t,link:wt,logo:ht,pagination:jt,popover:Mt,skeleton:Et,spinner:xt,table:At,scrollShadow:Tt,tabs:Lt,tag:kt,togglegroup:Ct,tooltip:Ht,validation:St,body:Bt},Nt=p.field.split(" ")[0],H=p.validation.split(" "),It=H[0];function Dt(t){for(const o of t){const e=[],i=[];let n=null,l=!0;for(const s of o.getElementsByTagName("*"))s instanceof HTMLLabelElement?e.push(s):A(s)?n=s:s.classList.contains(It)?(l=s.getAttribute("data-color")==="success",i.unshift($(s))):s instanceof HTMLParagraphElement&&i.push($(s));if(n){for(const s of e)s.htmlFor=$(n);S(n),r(n,"aria-describedby",i.join(" ")),r(n,"aria-invalid",`${!l}`)}}}function Ft({target:t}){A(t)&&S(t)}function S(t){const o=t==null?void 0:t.nextElementSibling,e=o==null?void 0:o.getAttribute("data-count");if(o&&e){const i=Number(e)-t.value.length,n=i<0;if(o.getAttribute("aria-live")==="polite"!==n){r(o,"aria-live",n?"polite":"off");for(const l of H)o.classList.toggle(l,n)}o.textContent=`${Math.abs(i)} tegn ${n?"for mye":"igjen"}`}}function Pt(t){x(t,Nt,Dt),d(t,"input",Ft,_)}const Wt=p.fieldset.split(" ")[0],qt=p.validation.split(" ")[0];function Rt(t){for(const o of t){const e=[];let i="";for(const n of o.getElementsByTagName("*"))n.classList.contains(qt)?i=$(n):A(n)&&e.push(n);if(i)for(const n of e)r(n,"aria-describedby",i),r(n,"aria-invalid","true")}}const Ot=t=>x(t,Wt,Rt),Xt=({target:t})=>{};function Yt(t){d(t,"click",Xt,_)}function zt(t){d(t,"toggle",Vt,_),d(t,"click",Gt)}const B=p.popover.split(" ")[0];function Vt({target:t,newState:o}){var e;if(t instanceof HTMLElement&&t.classList.contains(B)){const i=(e=t.getRootNode())==null?void 0:e.querySelector(`[popovertarget="${t.id}"]`);o==="closed"?y(t,!1):i&&y(t,i,t.getAttribute("data-position")||"bottom")}}function Gt({target:t}){var o,e;const i=(o=t==null?void 0:t.closest)==null?void 0:o.call(t,"a");if(i){const n=i.getRootNode(),l=((e=n.getElementById)==null?void 0:e.call(n,r(i,"popovertarget")||""))||i.closest(`.${B}`),s=r(i,"popovertargetaction")||"toggle";l==null||l.togglePopover(s==="show"||(s==="hide"?!1:void 0))}}const Ut=p.table.split(" ")[0];function Jt(t){var o,e;for(const i of t)if(i instanceof HTMLTableElement){const n=Array.from(((e=(o=i.tHead)==null?void 0:o.rows[0])==null?void 0:e.cells)||[],l=>{var s;return(s=l.innerText)==null?void 0:s.trim()});for(const l of i.tBodies)for(const s of l.rows)for(const c of s.cells)r(c,"data-th",n[c.cellIndex]||":empty")}}const Kt=t=>x(t,Ut,Jt),Qt="_tooltip_1pse6_5",Zt={tooltip:Qt},L="aria-describedby",v="aria-labelledby",te="--mtds-tooltip-position",ee=100,j="mtds-tooltip",k="Escape";let u=null,N=Number.NEGATIVE_INFINITY,C=0,a=null;function E({target:t,type:o,key:e}){if(o==="keydown"&&e!==k)return;const i=N+ee-Date.now();clearTimeout(C),C=setTimeout(oe,Math.max(i,0),e===k?null:t)}function oe(t){var o;if(N=Date.now(),!a||t===a)return;let e=((o=t==null?void 0:t.closest)==null?void 0:o.call(t,"[data-tooltip]"))||null;if(e===u)return;const i=(e==null?void 0:e.getAttribute("data-tooltip"))||"",n=(e==null?void 0:e.getAttribute("data-tooltip-position"))||window.getComputedStyle(e||document.body).getPropertyValue(te)||"top",l=!!(e!=null&&e.innerText.trim())||(e==null?void 0:e.hasAttribute(v))||(e==null?void 0:e.hasAttribute("aria-label"));(!i||i==="false"||i==="true"||n==="none")&&(e=null),e&&(a.textContent=i),u==null||u.removeAttribute(u.getAttribute(v)===j?v:L),y(a,!1),u=e,u==null||u.setAttribute(l?L:v,j),a.togglePopover(!!e),y(a,e,n)}M&&!document.getElementById(j)&&(a=document.body.appendChild(document.createElement("div")),a.classList.add(...Zt.tooltip.split(" ")),a.id=j,r(a,"popover","manual"),d(document,"blur,focus,mouseout,mouseover",E,_),d(window,"keydown",E,_),d(window,"blur",E,_));if(M){const t=document.readyState==="loading",o=()=>ne(document.body);t?document.addEventListener("DOMContentLoaded",o):o()}function ne(t){et(t),Pt(t),Ot(t),Yt(t),zt(t),Kt(t)}export{ot as _,ut as i,ht as m};
