import{S as J,i as Q,s as U,n as C}from"./index-D8riOviU.js";import{f as R,i as I,d as L,j as X,o as Y,e as w,s as N,g as A,a as s,b as P,l as S,p as O,h as M,c as Z,t as D}from"./lifecycle-CcifP0R7.js";import{e as B}from"./each-Dzkb-YsG.js";import{i as F}from"./utils-DjM8Id44.js";function K(i,e,l){const t=i.slice();return t[20]=e[l],t[22]=l,t}function W(i){let e,l,t,a,f,u,m,r,d,v,T,b,y,c=!i[8]&&j(i),p=B(i[11]),o=[];for(let n=0;n<p.length;n+=1)o[n]=q(K(i,p,n));let g=i[8]&&H(i);return{c(){e=w("nav"),c&&c.c(),l=N(),t=w("ul");for(let n=0;n<o.length;n+=1)o[n].c();a=N(),g&&g.c(),f=N(),u=w("a"),m=A(i[0]),s(t,"class","mt-ul list-unstyled"),s(u,"href",r=i[13]?i[13].url:void 0),s(u,"title",i[0]),s(u,"class",d="mt-link next-link "+(G(i[6],i[5])?"":"inclusively-hidden--fit-content")),s(u,"aria-disabled",v=!G(i[6],i[5])),s(e,"class",T="mt-pagination "+i[7]),s(e,"aria-label",i[2])},m(n,_){I(n,e,_),c&&c.m(e,null),P(e,l),P(e,t);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(t,null);P(e,a),g&&g.m(e,null),P(e,f),P(e,u),P(u,m),b||(y=S(u,"click",O(i[18])),b=!0)},p(n,_){if(n[8]?c&&(c.d(1),c=null):c?c.p(n,_):(c=j(n),c.c(),c.m(e,l)),_&18552){p=B(n[11]);let h;for(h=0;h<p.length;h+=1){const V=K(n,p,h);o[h]?o[h].p(V,_):(o[h]=q(V),o[h].c(),o[h].m(t,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=p.length}n[8]?g?g.p(n,_):(g=H(n),g.c(),g.m(e,f)):g&&(g.d(1),g=null),_&1&&M(m,n[0]),_&8192&&r!==(r=n[13]?n[13].url:void 0)&&s(u,"href",r),_&1&&s(u,"title",n[0]),_&96&&d!==(d="mt-link next-link "+(G(n[6],n[5])?"":"inclusively-hidden--fit-content"))&&s(u,"class",d),_&96&&v!==(v=!G(n[6],n[5]))&&s(u,"aria-disabled",v),_&128&&T!==(T="mt-pagination "+n[7])&&s(e,"class",T),_&4&&s(e,"aria-label",n[2])},d(n){n&&L(e),c&&c.d(),Z(o,n),g&&g.d(),b=!1,y()}}}function j(i){let e,l,t,a,f,u,m;return{c(){e=w("a"),l=A(i[1]),s(e,"href",t=i[12]?i[12].url:void 0),s(e,"class",a="mt-link previous-link "+(E(i[6])?"":"inclusively-hidden--fit-content")),s(e,"title",i[1]),s(e,"aria-disabled",f=!E(i[6]))},m(r,d){I(r,e,d),P(e,l),u||(m=S(e,"click",O(i[15])),u=!0)},p(r,d){d&2&&M(l,r[1]),d&4096&&t!==(t=r[12]?r[12].url:void 0)&&s(e,"href",t),d&64&&a!==(a="mt-link previous-link "+(E(r[6])?"":"inclusively-hidden--fit-content"))&&s(e,"class",a),d&2&&s(e,"title",r[1]),d&64&&f!==(f=!E(r[6]))&&s(e,"aria-disabled",f)},d(r){r&&L(e),u=!1,m()}}}function x(i){let e,l,t,a,f,u=i[22]+1+"",m,r,d,v,T,b,y;function c(){return i[16](i[22])}return{c(){e=w("li"),l=w("a"),t=w("span"),a=A(i[3]),f=N(),m=A(u),T=N(),s(t,"class","inclusively-hidden-initial"),s(l,"href",r=i[20].url),s(l,"class","mt-link"),s(l,"title",d=F(i[4],[i[22]+1,i[5].length])),s(l,"aria-current",v=i[22]===i[6]?"page":void 0),s(e,"class","mt-li pagination-item"),D(e,"pagination-item--current",i[22]===i[6]?"page":void 0)},m(p,o){I(p,e,o),P(e,l),P(l,t),P(t,a),P(l,f),P(l,m),P(e,T),b||(y=S(l,"click",O(c)),b=!0)},p(p,o){i=p,o&8&&M(a,i[3]),o&2048&&r!==(r=i[20].url)&&s(l,"href",r),o&48&&d!==(d=F(i[4],[i[22]+1,i[5].length]))&&s(l,"title",d),o&64&&v!==(v=i[22]===i[6]?"page":void 0)&&s(l,"aria-current",v),o&64&&D(e,"pagination-item--current",i[22]===i[6]?"page":void 0)},d(p){p&&L(e),b=!1,y()}}}function $(i){let e;return{c(){e=w("li"),e.textContent="...",s(e,"class","mt-li ellipsis"),s(e,"role","presentation")},m(l,t){I(l,e,t)},p:C,d(l){l&&L(e)}}}function q(i){let e;function l(f,u){if(f[20].ellipsis)return $;if(!f[20].hidden)return x}let t=l(i),a=t&&t(i);return{c(){a&&a.c(),e=R()},m(f,u){a&&a.m(f,u),I(f,e,u)},p(f,u){t===(t=l(f))&&a?a.p(f,u):(a&&a.d(1),a=t&&t(f),a&&(a.c(),a.m(e.parentNode,e)))},d(f){f&&L(e),a&&a.d(f)}}}function H(i){let e,l,t,a,f,u,m;return{c(){e=w("a"),l=A(i[1]),s(e,"href",t=i[12]?i[12].url:void 0),s(e,"class",a="mt-link previous-link "+(E(i[6])?"":"inclusively-hidden--fit-content")),s(e,"title",i[1]),s(e,"aria-disabled",f=!E(i[6]))},m(r,d){I(r,e,d),P(e,l),u||(m=S(e,"click",O(i[17])),u=!0)},p(r,d){d&2&&M(l,r[1]),d&4096&&t!==(t=r[12]?r[12].url:void 0)&&s(e,"href",t),d&64&&a!==(a="mt-link previous-link "+(E(r[6])?"":"inclusively-hidden--fit-content"))&&s(e,"class",a),d&2&&s(e,"title",r[1]),d&64&&f!==(f=!E(r[6]))&&s(e,"aria-disabled",f)},d(r){r&&L(e),u=!1,m()}}}function ee(i){let e,l=i[5].length>1&&W(i);return{c(){l&&l.c(),e=R()},m(t,a){l&&l.m(t,a),I(t,e,a)},p(t,[a]){t[5].length>1?l?l.p(t,a):(l=W(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:C,o:C,d(t){t&&L(e),l&&l.d(t)}}}const ie="1024px",le="page-change",te=5,ne=3;function G(i,e){return i<e.length-1}function E(i){return i>0}function ae(i,e,l){const{floor:t,min:a,max:f}=Math,[u,m,r,d,v,T,b]=[0,1,2,3,l.length-2,l.length-1,l.length],y=i?ne:te,c=y-1,p=y+2;if(b<=p)return l;const o=f(1,a(e-t((y-3)/2),b-y+2)),g=a(b,f(e+t((y-2)/2),c));return l.map((n,_)=>o>r&&_===m?{...n,ellipsis:o!==d}:o>m&&_===u||_>=o-1&&_<g?n:g<T&&_===v?{...n,ellipsis:g!==v}:g<b&&_===T||e<=c&&_===c||e>b-y&&_===b-y?n:{...n,hidden:!0})}function se(i,e,l){let t,a,f,u,m,r,{nextText:d="Neste"}=e,{previousText:v="Forrige"}=e,{paginationLabel:T="Paginering"}=e,{labelPage:b="Side"}=e,{toPageTitle:y="Gå til side {0} av {1}"}=e,{pages:c=[]}=e,{currentPageIndex:p=0}=e,{class:o=""}=e;const g=X();Y(()=>{l(8,m=(window==null?void 0:window.matchMedia(`(max-width: ${ie})`).matches)===!0)});function n(k){g(le,{index:k})}const _=()=>n(f),h=k=>n(k),V=()=>n(f),z=()=>n(t);return i.$$set=k=>{"nextText"in k&&l(0,d=k.nextText),"previousText"in k&&l(1,v=k.previousText),"paginationLabel"in k&&l(2,T=k.paginationLabel),"labelPage"in k&&l(3,b=k.labelPage),"toPageTitle"in k&&l(4,y=k.toPageTitle),"pages"in k&&l(5,c=k.pages),"currentPageIndex"in k&&l(6,p=k.currentPageIndex),"class"in k&&l(7,o=k.class)},i.$$.update=()=>{i.$$.dirty&64&&l(10,t=p+1),i.$$.dirty&1056&&l(13,a=c[t]),i.$$.dirty&64&&l(9,f=p-1),i.$$.dirty&544&&l(12,u=c[f]),i.$$.dirty&352&&l(11,r=ae(m,p+1,c))},l(8,m=void 0),[d,v,T,b,y,c,p,o,m,f,t,r,u,a,n,_,h,V,z]}class fe extends J{constructor(e){super(),Q(this,e,se,ee,U,{nextText:0,previousText:1,paginationLabel:2,labelPage:3,toPageTitle:4,pages:5,currentPageIndex:6,class:7})}}fe.__docgen={version:3,name:"Pagination.svelte",data:[{name:"nextText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Neste"'},{name:"previousText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Forrige"'},{name:"paginationLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Paginering"'},{name:"labelPage",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Side"'},{name:"toPageTitle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Gå til side {0} av {1}"'},{name:"pages",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"Page[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"currentPageIndex",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"number",value:0,text:"0"},{kind:"const",type:"number",value:1,text:"1"}],text:"0 | 1"},static:!1,readonly:!1,defaultValue:"0"},{name:"class",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"page-change"}],slots:[],refs:[]};export{fe as P};
