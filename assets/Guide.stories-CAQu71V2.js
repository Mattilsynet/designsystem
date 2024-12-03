import{S as C1,i as b1,s as _1,w as v1,c as j,m as F,t as k,a as E,d as B,g as K,f as P,n as w1}from"./index-D8riOviU.js";import{s as D,i as y,l as W,d as L,e as _,a as u,b as w,c as R,g as d1,h as u1,f as p1,H as V1}from"./lifecycle-CcifP0R7.js";import{e as z}from"./each-Dzkb-YsG.js";import{p as k1,M as $1,S as y1}from"./collect-stories-BMzKwk3M.js";import{D as Q}from"./Dropdown-Dci4y9TZ.js";import{C as L1}from"./ChapterMenu-CYoc3bSq.js";import{a as H1}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as c1}from"./Disclosure-DjpXovmX.js";import"./index-DTCOkSMf.js";import"./toggle-machine-BRWFjtir.js";import"./useMachine-BoQ-JPCB.js";import"./utils-DjM8Id44.js";import"./v4-CQkTLCs1.js";import"./HeadingLevel-RQgwHrl0.js";const M1=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{window:h1}=M1;function Y(l,n,t){const e=l.slice();return e[13]=n[t],e[15]=t,e}function x(l,n,t){const e=l.slice();return e[16]=n[t],e[18]=t,e}function e1(l,n,t){const e=l.slice();return e[19]=n[t],e[21]=t,e}function n1(l){let n,t,e=l[5][0].heading+"",a,i,h,d,s=(l[2]||!l[2]&&l[1])&&l1(l);return{c(){n=_("div"),t=_("a"),a=d1(e),i=D(),s&&s.c(),u(t,"class","mt-link"),u(t,"href","#"),u(n,"class","mobile-menu"),u(n,"aria-expanded",l[1])},m(p,o){y(p,n,o),w(n,t),w(t,a),w(n,i),s&&s.m(n,null),h||(d=W(t,"click",l[7]),h=!0)},p(p,o){o&32&&e!==(e=p[5][0].heading+"")&&u1(a,e),p[2]||!p[2]&&p[1]?s?s.p(p,o):(s=l1(p),s.c(),s.m(n,null)):s&&(s.d(1),s=null),o&2&&u(n,"aria-expanded",p[1])},d(p){p&&L(n),s&&s.d(),h=!1,d()}}}function l1(l){let n,t,e;return{c(){n=_("button"),u(n,"class","mt-button--unstyled show-menu icon--arrow-down-menu-on-dark-before"),u(n,"aria-haspopup","true"),u(n,"aria-expanded",l[1])},m(a,i){y(a,n,i),t||(e=W(n,"click",l[3]),t=!0)},p(a,i){i&2&&u(n,"aria-expanded",a[1])},d(a){a&&L(n),t=!1,e()}}}function t1(l){let n,t,e;return{c(){n=_("button"),n.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99996 0.158691L8.26544 1.89321L15.1297 8.7698H0.158691V11.2301H15.1297L8.26544 18.1067L9.99996 19.8412L19.8412 9.99996L9.99996 0.158691Z" fill="#F9F6F1"></path><title>Open</title></svg> <span class="closed-label">Innhold</span>',u(n,"class","mt-button--unstyled btn-open")},m(a,i){y(a,n,i),t||(e=W(n,"click",l[3]),t=!0)},p:w1,d(a){a&&L(n),t=!1,e()}}}function a1(l){let n,t,e;return t=new L1({props:{chapters:l[5],showChapterNumbers:l[10],currentChapterNumber:q,menuTitle:"Innhold"}}),{c(){n=_("div"),j(t.$$.fragment),u(n,"class","guide-menu")},m(a,i){y(a,n,i),F(t,n,null),e=!0},p(a,i){const h={};i&32&&(h.chapters=a[5]),i&1024&&(h.showChapterNumbers=a[10]),t.$set(h)},i(a){e||(k(t.$$.fragment,a),e=!0)},o(a){E(t.$$.fragment,a),e=!1},d(a){a&&L(n),B(t)}}}function E1(l){let n,t,e,a,i,h=l[13].heading+"",d,s,p,o,C=l[13].body+"",f,I,G,T,$=l[10]&&i1(l),S=z(l[13].subchapters||[]),m=[];for(let c=0;c<S.length;c+=1)m[c]=o1(x(l,S,c));const O=c=>E(m[c],1,1,()=>{m[c]=null});return{c(){n=_("div"),t=_("article"),e=_("h1"),$&&$.c(),a=D(),i=_("span"),d=d1(h),p=D(),o=new V1(!1),f=D(),I=_("section");for(let c=0;c<m.length;c+=1)m[c].c();G=D(),u(i,"class","title"),u(e,"class",s="mt-h1 "+(l[10]?"heading-with-chapter col-2-span-9":"")),o.a=null,u(t,"class","article-page col-1-span-12 in-other-content"),u(n,"class","layout-grid layout-grid--column-12"),u(I,"class","layout-grid layout-grid--column-12 m-t-s")},m(c,v){y(c,n,v),w(n,t),w(t,e),$&&$.m(e,null),w(e,a),w(e,i),w(i,d),w(t,p),o.m(C,t),y(c,f,v),y(c,I,v);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(I,null);w(I,G),T=!0},p(c,v){if(c[10]?$||($=i1(c),$.c(),$.m(e,a)):$&&($.d(1),$=null),(!T||v&32)&&h!==(h=c[13].heading+"")&&u1(d,h),(!T||v&1024&&s!==(s="mt-h1 "+(c[10]?"heading-with-chapter col-2-span-9":"")))&&u(e,"class",s),(!T||v&32)&&C!==(C=c[13].body+"")&&o.p(C),v&1056){S=z(c[13].subchapters||[]);let g;for(g=0;g<S.length;g+=1){const M=x(c,S,g);m[g]?(m[g].p(M,v),k(m[g],1)):(m[g]=o1(M),m[g].c(),k(m[g],1),m[g].m(I,G))}for(K(),g=S.length;g<m.length;g+=1)O(g);P()}},i(c){if(!T){for(let v=0;v<S.length;v+=1)k(m[v]);T=!0}},o(c){m=m.filter(Boolean);for(let v=0;v<m.length;v+=1)E(m[v]);T=!1},d(c){c&&(L(n),L(f),L(I)),$&&$.d(),R(m,c)}}}function i1(l){let n;return{c(){n=_("span"),n.textContent=`${l[15]+1}.`,u(n,"class","chapter-number")},m(t,e){y(t,n,e)},d(t){t&&L(n)}}}function I1(l){let n,t,e=l[19].body+"";return{c(){n=_("div"),t=_("article"),u(t,"class","article-page col-1-span-12 children-full-width"),u(n,"class","layout-grid layout-grid--column-12")},m(a,i){y(a,n,i),w(n,t),t.innerHTML=e},p(a,i){i&32&&e!==(e=a[19].body+"")&&(t.innerHTML=e)},d(a){a&&L(n)}}}function s1(l){let n,t;return n=new c1({props:{title:l[19].heading,headerTag:"h3",class:"layout-grid layout-grid--column-12 col-1-span-12 "+(l[10]?"disclosure-with-number":""),chapter:l[10]?`${l[15]+1}.${l[18]+1}.${l[21]+1}`:void 0,headerClass:"col-1-span-12 text-h4",panelClass:"col-1-span-12",$$slots:{default:[I1]},$$scope:{ctx:l}}}),{c(){j(n.$$.fragment)},m(e,a){F(n,e,a),t=!0},p(e,a){const i={};a&32&&(i.title=e[19].heading),a&1024&&(i.class="layout-grid layout-grid--column-12 col-1-span-12 "+(e[10]?"disclosure-with-number":"")),a&1024&&(i.chapter=e[10]?`${e[15]+1}.${e[18]+1}.${e[21]+1}`:void 0),a&4194336&&(i.$$scope={dirty:a,ctx:e}),n.$set(i)},i(e){t||(k(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){B(n,e)}}}function Z1(l){let n,t,e=l[16].body+"",a,i,h,d=z(l[16].subchapters||[]),s=[];for(let o=0;o<d.length;o+=1)s[o]=s1(e1(l,d,o));const p=o=>E(s[o],1,1,()=>{s[o]=null});return{c(){n=_("div"),t=_("article"),a=D();for(let o=0;o<s.length;o+=1)s[o].c();i=p1(),u(t,"class","article-page col-1-span-12 children-full-width"),u(n,"class","layout-grid layout-grid--column-12")},m(o,C){y(o,n,C),w(n,t),t.innerHTML=e,y(o,a,C);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,C);y(o,i,C),h=!0},p(o,C){if((!h||C&32)&&e!==(e=o[16].body+"")&&(t.innerHTML=e),C&1056){d=z(o[16].subchapters||[]);let f;for(f=0;f<d.length;f+=1){const I=e1(o,d,f);s[f]?(s[f].p(I,C),k(s[f],1)):(s[f]=s1(I),s[f].c(),k(s[f],1),s[f].m(i.parentNode,i))}for(K(),f=d.length;f<s.length;f+=1)p(f);P()}},i(o){if(!h){for(let C=0;C<d.length;C+=1)k(s[C]);h=!0}},o(o){s=s.filter(Boolean);for(let C=0;C<s.length;C+=1)E(s[C]);h=!1},d(o){o&&(L(n),L(a),L(i)),R(s,o)}}}function o1(l){let n,t;return n=new c1({props:{title:l[16].heading,headerTag:"h2",chapter:l[10]?`${l[15]+1}.${l[18]+1}`:void 0,class:"layout-grid layout-grid--column-12 col-3-span-8 "+(l[10]?"disclosure-with-number":""),headerClass:"col-1-span-12 text-h3",panelClass:"col-1-span-12",$$slots:{default:[Z1]},$$scope:{ctx:l}}}),{c(){j(n.$$.fragment)},m(e,a){F(n,e,a),t=!0},p(e,a){const i={};a&32&&(i.title=e[16].heading),a&1024&&(i.chapter=e[10]?`${e[15]+1}.${e[18]+1}`:void 0),a&1024&&(i.class="layout-grid layout-grid--column-12 col-3-span-8 "+(e[10]?"disclosure-with-number":"")),a&4195360&&(i.$$scope={dirty:a,ctx:e}),n.$set(i)},i(e){t||(k(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){B(n,e)}}}function r1(l){let n,t,e=l[15]===q&&E1(l);return{c(){e&&e.c(),n=p1()},m(a,i){e&&e.m(a,i),y(a,n,i),t=!0},p(a,i){a[15]===q&&e.p(a,i)},i(a){t||(k(e),t=!0)},o(a){E(e),t=!1},d(a){a&&L(n),e&&e.d(a)}}}function N1(l){let n,t,e,a,i,h,d,s,p,o,C,f,I,G,T,$,S,m,O,c,v,g;i=new Q({props:{title:"Språk/language",loadJs:!l[12],class:"dropdown mt-button__small-text responsive-hide"}}),d=new Q({props:{title:l[11].title,class:"dropdown mt-button__small-text full-menu",loadJs:!l[12]}});let M=(!l[2]&&l[1]||l[2])&&n1(l),N=!l[2]&&!l[1]&&t1(l),H=l[1]&&a1(l),J=z(l[5]),V=[];for(let r=0;r<J.length;r+=1)V[r]=r1(Y(l,J,r));const g1=r=>E(V[r],1,1,()=>{V[r]=null});return{c(){n=_("header"),t=_("div"),e=_("a"),e.innerHTML='<svg viewBox="0 0 184 36" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Gå til forsiden</title><path d="M14.1539 22.9053H11.2772L3.84106 5.97346L4.0039 26.4195H0.312988V0.116516H4.87235L12.7427 18.1665L20.5587 0.116516H25.1181V26.4195H21.4272L21.6443 5.97346L14.1539 22.9053Z" fill="#E23128"></path><path d="M37.4935 11.7772C35.3766 11.7772 32.6627 12.3629 31.36 12.8421V9.48763C32.7713 8.84869 35.8108 8.42273 37.4935 8.42273C42.9755 8.42273 44.4411 10.872 44.4411 14.5459V26.4195H41.9985L41.6729 25.5143C40.2074 26.3663 38.2534 26.8987 36.6793 26.8987C31.74 26.8987 30.1659 23.9702 30.1659 20.882C30.1659 18.1133 31.4686 15.664 36.7878 15.2381L40.8044 14.9186V14.5459C40.7501 12.6823 40.0445 11.7772 37.4935 11.7772ZM36.6793 18.2198C34.4539 18.4328 33.8026 19.6574 33.8026 20.882C33.8026 22.0534 34.0739 23.5443 36.6793 23.5443C38.1991 23.5443 39.7731 23.0118 40.7501 22.4794V17.9003L36.6793 18.2198Z" fill="#E23128"></path><path d="M59.3675 26.6857C58.4991 26.8987 57.4135 26.8987 57.1421 26.8987C54.2111 26.8987 51.2258 25.4078 51.2258 22.0002V11.9901H47.9148V9.80707L51.2258 8.90191V4.48258L54.8624 3.52417V8.90191H60.1274V11.9901H54.8624V21.6807C54.8624 23.1715 55.8394 23.5975 57.4135 23.5975C58.0648 23.5975 58.9876 23.5443 59.3675 23.4378V26.6857Z" fill="#E23128"></path><path d="M73.7512 26.6857C73.2627 26.739 72.8285 26.7922 72.34 26.7922C69.3547 26.9519 66.5322 25.6208 66.4237 22.2132V10.8187H62.8413V9.75384L66.4237 8.74219V3.95015L68.9205 3.25797V8.84868H74.4568V10.7655H68.9205V22.0534C69.0833 24.1832 70.2231 24.7689 72.34 24.7689C72.8285 24.7689 73.2627 24.7157 73.7512 24.7157V26.6857Z" fill="#E23128"></path><path d="M78.7991 2.40604C78.7991 3.47094 79.6676 4.32286 80.7531 4.32286C81.8387 4.32286 82.7072 3.47094 82.7072 2.40604C82.7072 1.34115 81.8387 0.489227 80.7531 0.489227C79.6133 0.489227 78.7991 1.2879 78.7991 2.40604ZM83.467 26.7922V24.7689C82.3815 24.7689 81.9473 24.3962 81.9473 23.1716V8.90192H79.5047V22.9053C79.5047 25.7273 80.8617 26.7922 83.467 26.7922Z" fill="#E23128"></path><path d="M89.1662 22.9053V0.116516H91.6087V23.1716C91.6087 24.3962 91.9886 24.7689 93.1285 24.7689V26.7922C90.5231 26.7922 89.1662 25.7273 89.1662 22.9053Z" fill="#E23128"></path><path d="M104.201 16.3562C109.249 16.8354 110.497 18.486 110.497 21.3612C110.497 24.0767 108.761 26.739 103.333 26.739C101.596 26.739 99.1533 26.313 98.0135 25.887V23.7572C99.099 24.13 100.836 24.5559 103.387 24.5559C107.078 24.5559 108.109 23.0118 108.109 21.3612C108.109 19.7639 107.621 18.6457 104.093 18.3263C98.9362 17.8471 97.8506 16.09 97.8506 13.6407C97.8506 11.1382 99.479 8.47595 104.527 8.47595C106.209 8.47595 108.109 8.68893 109.683 9.32787V11.4577C108.272 10.9785 106.915 10.659 104.473 10.659C100.944 10.659 100.185 11.9369 100.185 13.694C100.13 15.2913 100.782 16.09 104.201 16.3562Z" fill="#E23128"></path><path d="M129.006 27.8039C129.006 32.1699 128.138 35.5776 121.679 35.5776C118.911 35.5776 117.065 35.2049 115.6 34.6192V32.3297C117.228 33.1283 119.291 33.5543 121.679 33.5543C126.455 33.5543 126.51 30.3064 126.51 27.8571L126.455 25.3546C124.935 26.313 123.307 26.7922 121.625 26.7922C117.391 26.7922 115.6 24.8754 115.6 21.521L115.545 8.90192H118.042L118.096 21.7339C118.096 24.0235 119.399 24.7157 121.625 24.7157C123.958 24.7157 125.153 24.3429 126.455 23.5975V8.90192H128.952L129.006 27.8039Z" fill="#E23128"></path><path d="M145.615 13.694C145.615 11.4044 144.259 10.7123 142.033 10.7123C139.699 10.7123 138.505 11.085 137.202 11.8304V26.4195H134.706V8.90193H136.117L136.66 10.3928C138.342 9.16815 140.188 8.58246 142.033 8.58246C146.267 8.58246 148.112 10.4993 148.112 13.8537V26.4727H145.615V13.694Z" fill="#E23128"></path><path d="M155.765 18.7522C155.928 21.7872 156.797 24.5559 160.868 24.5559C163.419 24.5559 164.993 24.2897 166.675 23.5975L166.73 25.7273C164.721 26.5792 162.496 26.7922 160.759 26.7922C154.734 26.7922 153.269 22.7456 153.323 17.6873C153.323 12.6291 154.788 8.58246 160.813 8.58246C165.644 8.58246 167.544 11.2447 167.49 14.2264C167.544 16.9419 166.187 18.8055 160.922 18.8055L155.765 18.7522ZM161.139 16.7289C164.179 16.7289 164.993 15.877 164.993 14.1732C165.047 12.5758 164.179 10.7123 160.759 10.7123C156.634 10.7123 155.874 13.6407 155.765 16.7822L161.139 16.7289Z" fill="#E23128"></path><path d="M182.307 26.6857C181.819 26.739 181.385 26.7922 180.896 26.7922C177.911 26.9519 175.088 25.6208 174.98 22.2132V10.8187H171.397V9.75384L174.98 8.74219V3.95015L177.477 3.25797V8.84868H183.013V10.7655H177.477V22.0534C177.639 24.1832 178.779 24.7689 180.896 24.7689C181.385 24.7689 181.819 24.7157 182.307 24.7157V26.6857Z" fill="#E23128"></path></svg>',a=D(),j(i.$$.fragment),h=D(),j(d.$$.fragment),s=D(),p=_("div"),o=_("aside"),M&&M.c(),C=D(),N&&N.c(),f=D(),H&&H.c(),G=D(),T=_("div"),$=_("main"),S=_("div"),m=_("div");for(let r=0;r<V.length;r+=1)V[r].c();c=D(),v=_("footer"),v.innerHTML='<h2 id="footer-title" class="mt-h2 inclusively-hidden">Footer</h2> <div class="col">Col 1</div> <div class="col">Col 2</div> <div class="col">Col 3</div>',u(e,"class","mt-link fit-content"),u(e,"href","https://mattilsynet.no/"),u(t,"class","container mt-header-wrapper mt-header-wrapper--regular"),u(n,"class","mt-header"),u(o,"class",I=`mt-aside ${l[1]?"expanded":""}`),u(S,"data-portal-region","main"),u($,"id","main"),u($,"class","mt-main"),u(T,"class",O="container content "+(l[1]?"menu-is-expanded":"")),u(p,"class","layout-with-sidebar has-js"),u(v,"class","mt-footer footer--regular svelte-pcpaaz"),u(v,"aria-labelledby","footer-title")},m(r,b){y(r,n,b),w(n,t),w(t,e),w(t,a),F(i,t,null),w(t,h),F(d,t,null),y(r,s,b),y(r,p,b),w(p,o),M&&M.m(o,null),w(o,C),N&&N.m(o,null),w(o,f),H&&H.m(o,null),w(p,G),w(p,T),w(T,$),w($,S),w(S,m);for(let U=0;U<V.length;U+=1)V[U]&&V[U].m(m,null);y(r,c,b),y(r,v,b),g=!0},p(r,b){const U={};b&4096&&(U.loadJs=!r[12]),i.$set(U);const A={};if(b&2048&&(A.title=r[11].title),b&4096&&(A.loadJs=!r[12]),d.$set(A),!r[2]&&r[1]||r[2]?M?M.p(r,b):(M=n1(r),M.c(),M.m(o,C)):M&&(M.d(1),M=null),!r[2]&&!r[1]?N?N.p(r,b):(N=t1(r),N.c(),N.m(o,f)):N&&(N.d(1),N=null),r[1]?H?(H.p(r,b),b&2&&k(H,1)):(H=a1(r),H.c(),k(H,1),H.m(o,null)):H&&(K(),E(H,1,1,()=>{H=null}),P()),(!g||b&2&&I!==(I=`mt-aside ${r[1]?"expanded":""}`))&&u(o,"class",I),b&1056){J=z(r[5]);let Z;for(Z=0;Z<J.length;Z+=1){const X=Y(r,J,Z);V[Z]?(V[Z].p(X,b),k(V[Z],1)):(V[Z]=r1(X),V[Z].c(),k(V[Z],1),V[Z].m(m,null))}for(K(),Z=J.length;Z<V.length;Z+=1)g1(Z);P()}(!g||b&2&&O!==(O="container content "+(r[1]?"menu-is-expanded":"")))&&u(T,"class",O)},i(r){if(!g){k(i.$$.fragment,r),k(d.$$.fragment,r),k(H);for(let b=0;b<J.length;b+=1)k(V[b]);g=!0}},o(r){E(i.$$.fragment,r),E(d.$$.fragment,r),E(H),V=V.filter(Boolean);for(let b=0;b<V.length;b+=1)E(V[b]);g=!1},d(r){r&&(L(n),L(s),L(p),L(c),L(v)),B(i),B(d),M&&M.d(),N&&N.d(),H&&H.d(),R(V,r)}}}function D1(l){let n,t,e,a,i,h;return v1(l[6]),n=new $1({props:{title:"Innhold/Veileder",parameters:{layout:"fullscreen"},args:{menu:{title:"Meny"},chapters:[{heading:"Innledning",body:l[4],subchapters:[{heading:"Påstanden skal ikke brukes slik at den villeder forbrukern (artikkel 3)",body:l[4],subchapters:[{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel",body:l[4]},{heading:"Under under kapitel 2",body:l[4]}]},{heading:"Krav til gunstig virkning og til sammmensetning av produktet (artikkel 5(1))",body:`<p>Innhold i underkapittel</p>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
</section>`,subchapters:[{heading:"Virkningen påstanden viser til må være gunstig",body:l[4]},{heading:"Produktet må være sammensat slik at den gunstige virkningen kan oppnås",body:l[4]}]},{heading:"Innledning - underkapittel 3",body:`<p>Innhold i underkapittel</p>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
</section>`,subchapters:[{heading:"Innledning - under 3 under kapitel"},{heading:"Innledning - under 3 under kapitel 2"}]}]},{heading:"Virkeområde",body:l[4],subchapters:[{heading:"Virkeområde - underkapittel"},{heading:"Virkeområde - underkapittel 2"},{heading:"Virkeområde - underkapittel 3"}]},{heading:"Definisjoner",body:l[4],subchapters:[{heading:"Definisjoner - underkapittel"},{heading:"Definisjoner - underkapittel 2"},{heading:"Definisjoner - underkapittel 3"}]}],showChapterNumbers:!0,disableJs:!1},argTypes:{menu:{control:"object"},chapters:{control:"array"},showChapterNumbers:{control:"boolean"},disableJs:{control:"boolean"}}}}),e=new y1({props:{name:"Normal",$$slots:{default:[N1,({showChapterNumbers:d,menu:s,disableJs:p,chapters:o})=>({10:d,11:s,12:p,5:o}),({showChapterNumbers:d,menu:s,disableJs:p,chapters:o})=>(d?1024:0)|(s?2048:0)|(p?4096:0)|(o?32:0)]},$$scope:{ctx:l}}}),{c(){j(n.$$.fragment),t=D(),j(e.$$.fragment)},m(d,s){F(n,d,s),y(d,t,s),F(e,d,s),a=!0,i||(h=W(h1,"resize",l[6]),i=!0)},p(d,[s]){const p={};s&4201510&&(p.$$scope={dirty:s,ctx:d}),e.$set(p)},i(d){a||(k(n.$$.fragment,d),k(e.$$.fragment,d),a=!0)},o(d){E(n.$$.fragment,d),E(e.$$.fragment,d),a=!1},d(d){d&&L(t),B(n,d),B(e,d),i=!1,h()}}}let q=0,T1=1200;function S1(l,n,t){let e,a=[{index:0,url:"?kapittel=0-innledning",heading:"Innledning"},{index:1,url:"?kapittel=1-virkeomrde",heading:"Virkeområde"},{index:2,url:"?kapittel=2-definisjoner",heading:"Definisjoner"},{index:3,url:"?kapittel=3-forurrensning",heading:"Forurensning"}];H1("chapterChange");let i=!1,h=window==null?void 0:window.innerWidth;function d(){t(1,i=!i)}let s=`<p>Innhold i underkapittel</p>
<ul>
<li>liste 1</li>
<li>liste 2</li>
</ul>
<section class="layout-flex-col layout-flex-col--x-small">
  <p>Innhold i section</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
     industry's standard dummy text ever since the 1500s
  </p>
</section>`;function p(){t(0,h=h1.innerWidth)}const o=()=>t(1,i=!1);return l.$$.update=()=>{l.$$.dirty&1&&t(2,e=h<=T1)},[h,i,e,d,s,a,p,o]}class f1 extends C1{constructor(n){super(),b1(this,n,S1,D1,_1,{})}}f1.__docgen={version:3,name:"Guide.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const m1=k1(f1,{meta:{title:"Innhold/Veileder"},stories:{Normal:{name:"Normal",template:!1,source:`<header class="mt-header">
  <div class="container mt-header-wrapper mt-header-wrapper--regular">
    <a class="mt-link fit-content" href="https://mattilsynet.no/">
      <svg viewBox="0 0 184 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Gå til forsiden</title>
        <path
          d="M14.1539 22.9053H11.2772L3.84106 5.97346L4.0039 26.4195H0.312988V0.116516H4.87235L12.7427 18.1665L20.5587 0.116516H25.1181V26.4195H21.4272L21.6443 5.97346L14.1539 22.9053Z"
          fill="#E23128" />
        <path
          d="M37.4935 11.7772C35.3766 11.7772 32.6627 12.3629 31.36 12.8421V9.48763C32.7713 8.84869 35.8108 8.42273 37.4935 8.42273C42.9755 8.42273 44.4411 10.872 44.4411 14.5459V26.4195H41.9985L41.6729 25.5143C40.2074 26.3663 38.2534 26.8987 36.6793 26.8987C31.74 26.8987 30.1659 23.9702 30.1659 20.882C30.1659 18.1133 31.4686 15.664 36.7878 15.2381L40.8044 14.9186V14.5459C40.7501 12.6823 40.0445 11.7772 37.4935 11.7772ZM36.6793 18.2198C34.4539 18.4328 33.8026 19.6574 33.8026 20.882C33.8026 22.0534 34.0739 23.5443 36.6793 23.5443C38.1991 23.5443 39.7731 23.0118 40.7501 22.4794V17.9003L36.6793 18.2198Z"
          fill="#E23128" />
        <path
          d="M59.3675 26.6857C58.4991 26.8987 57.4135 26.8987 57.1421 26.8987C54.2111 26.8987 51.2258 25.4078 51.2258 22.0002V11.9901H47.9148V9.80707L51.2258 8.90191V4.48258L54.8624 3.52417V8.90191H60.1274V11.9901H54.8624V21.6807C54.8624 23.1715 55.8394 23.5975 57.4135 23.5975C58.0648 23.5975 58.9876 23.5443 59.3675 23.4378V26.6857Z"
          fill="#E23128" />
        <path
          d="M73.7512 26.6857C73.2627 26.739 72.8285 26.7922 72.34 26.7922C69.3547 26.9519 66.5322 25.6208 66.4237 22.2132V10.8187H62.8413V9.75384L66.4237 8.74219V3.95015L68.9205 3.25797V8.84868H74.4568V10.7655H68.9205V22.0534C69.0833 24.1832 70.2231 24.7689 72.34 24.7689C72.8285 24.7689 73.2627 24.7157 73.7512 24.7157V26.6857Z"
          fill="#E23128" />
        <path
          d="M78.7991 2.40604C78.7991 3.47094 79.6676 4.32286 80.7531 4.32286C81.8387 4.32286 82.7072 3.47094 82.7072 2.40604C82.7072 1.34115 81.8387 0.489227 80.7531 0.489227C79.6133 0.489227 78.7991 1.2879 78.7991 2.40604ZM83.467 26.7922V24.7689C82.3815 24.7689 81.9473 24.3962 81.9473 23.1716V8.90192H79.5047V22.9053C79.5047 25.7273 80.8617 26.7922 83.467 26.7922Z"
          fill="#E23128" />
        <path
          d="M89.1662 22.9053V0.116516H91.6087V23.1716C91.6087 24.3962 91.9886 24.7689 93.1285 24.7689V26.7922C90.5231 26.7922 89.1662 25.7273 89.1662 22.9053Z"
          fill="#E23128" />
        <path
          d="M104.201 16.3562C109.249 16.8354 110.497 18.486 110.497 21.3612C110.497 24.0767 108.761 26.739 103.333 26.739C101.596 26.739 99.1533 26.313 98.0135 25.887V23.7572C99.099 24.13 100.836 24.5559 103.387 24.5559C107.078 24.5559 108.109 23.0118 108.109 21.3612C108.109 19.7639 107.621 18.6457 104.093 18.3263C98.9362 17.8471 97.8506 16.09 97.8506 13.6407C97.8506 11.1382 99.479 8.47595 104.527 8.47595C106.209 8.47595 108.109 8.68893 109.683 9.32787V11.4577C108.272 10.9785 106.915 10.659 104.473 10.659C100.944 10.659 100.185 11.9369 100.185 13.694C100.13 15.2913 100.782 16.09 104.201 16.3562Z"
          fill="#E23128" />
        <path
          d="M129.006 27.8039C129.006 32.1699 128.138 35.5776 121.679 35.5776C118.911 35.5776 117.065 35.2049 115.6 34.6192V32.3297C117.228 33.1283 119.291 33.5543 121.679 33.5543C126.455 33.5543 126.51 30.3064 126.51 27.8571L126.455 25.3546C124.935 26.313 123.307 26.7922 121.625 26.7922C117.391 26.7922 115.6 24.8754 115.6 21.521L115.545 8.90192H118.042L118.096 21.7339C118.096 24.0235 119.399 24.7157 121.625 24.7157C123.958 24.7157 125.153 24.3429 126.455 23.5975V8.90192H128.952L129.006 27.8039Z"
          fill="#E23128" />
        <path
          d="M145.615 13.694C145.615 11.4044 144.259 10.7123 142.033 10.7123C139.699 10.7123 138.505 11.085 137.202 11.8304V26.4195H134.706V8.90193H136.117L136.66 10.3928C138.342 9.16815 140.188 8.58246 142.033 8.58246C146.267 8.58246 148.112 10.4993 148.112 13.8537V26.4727H145.615V13.694Z"
          fill="#E23128" />
        <path
          d="M155.765 18.7522C155.928 21.7872 156.797 24.5559 160.868 24.5559C163.419 24.5559 164.993 24.2897 166.675 23.5975L166.73 25.7273C164.721 26.5792 162.496 26.7922 160.759 26.7922C154.734 26.7922 153.269 22.7456 153.323 17.6873C153.323 12.6291 154.788 8.58246 160.813 8.58246C165.644 8.58246 167.544 11.2447 167.49 14.2264C167.544 16.9419 166.187 18.8055 160.922 18.8055L155.765 18.7522ZM161.139 16.7289C164.179 16.7289 164.993 15.877 164.993 14.1732C165.047 12.5758 164.179 10.7123 160.759 10.7123C156.634 10.7123 155.874 13.6407 155.765 16.7822L161.139 16.7289Z"
          fill="#E23128" />
        <path
          d="M182.307 26.6857C181.819 26.739 181.385 26.7922 180.896 26.7922C177.911 26.9519 175.088 25.6208 174.98 22.2132V10.8187H171.397V9.75384L174.98 8.74219V3.95015L177.477 3.25797V8.84868H183.013V10.7655H177.477V22.0534C177.639 24.1832 178.779 24.7689 180.896 24.7689C181.385 24.7689 181.819 24.7157 182.307 24.7157V26.6857Z"
          fill="#E23128" />
      </svg>
    </a>
    <Dropdown
      title="Språk/language"
      loadJs={!disableJs}
      class="dropdown mt-button__small-text responsive-hide"
      let:titleId />
    <Dropdown
      title={menu.title}
      class="dropdown mt-button__small-text full-menu"
      loadJs={!disableJs}
      let:titleId />
  </div>
</header>
<div class="layout-with-sidebar has-js">
  <aside class={\`mt-aside \${isExpanded ? 'expanded' : ''}\`}>
    {#if (!isMobile && isExpanded) || isMobile}
      <div class="mobile-menu" aria-expanded={isExpanded}>
        <a on:click={() => (isExpanded = false)} class="mt-link" href="#"
          >{chapters[0].heading}</a>
        {#if isMobile || (!isMobile && isExpanded)}
          <button
            class="mt-button--unstyled show-menu icon--arrow-down-menu-on-dark-before"
            aria-haspopup="true"
            aria-expanded={isExpanded}
            on:click={handleClickClose} />
        {/if}
      </div>
    {/if}
    {#if !isMobile && !isExpanded}
      <button class="mt-button--unstyled btn-open" on:click={handleClickClose}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99996 0.158691L8.26544 1.89321L15.1297 8.7698H0.158691V11.2301H15.1297L8.26544 18.1067L9.99996 19.8412L19.8412 9.99996L9.99996 0.158691Z"
            fill="#F9F6F1" />
          <title>Open</title>
        </svg>
        <span class="closed-label">Innhold</span>
      </button>
    {/if}

    {#if isExpanded}
      <div class="guide-menu">
        <ChapterMenu
          {chapters}
          {showChapterNumbers}
          {currentChapterNumber}
          menuTitle={'Innhold'} />
      </div>
    {/if}
  </aside>

  <div class="container content {isExpanded ? 'menu-is-expanded' : ''}">
    <main id="main" class="mt-main">
      <div data-portal-region="main">
        <div>
          {#each chapters as chapter, chapterIndex}
            {#if chapterIndex === currentChapterNumber}
              <div class="layout-grid layout-grid--column-12">
                <article class="article-page col-1-span-12 in-other-content">
                  <h1
                    class="mt-h1 {showChapterNumbers ? 'heading-with-chapter col-2-span-9' : ''}">
                    {#if showChapterNumbers}
                      <span class="chapter-number">
                        {chapterIndex + 1}.
                      </span>
                    {/if}
                    <span class="title">
                      {chapter.heading}
                    </span>
                  </h1>
                  {@html chapter.body}
                </article>
              </div>
              <section class="layout-grid layout-grid--column-12 m-t-s">
                {#each chapter.subchapters || [] as subChapter, subChapterIndex}
                  <Disclosure
                    title={subChapter.heading}
                    headerTag="h2"
                    chapter={showChapterNumbers
                      ? \`\${chapterIndex + 1}.\${subChapterIndex + 1}\`
                      : undefined}
                    class="layout-grid layout-grid--column-12 col-3-span-8 {showChapterNumbers
                      ? 'disclosure-with-number'
                      : ''}"
                    headerClass={'col-1-span-12 text-h3'}
                    panelClass={'col-1-span-12'}>
                    <div class="layout-grid layout-grid--column-12">
                      <article class="article-page col-1-span-12 children-full-width">
                        {@html subChapter.body}
                      </article>
                    </div>
                    {#each subChapter.subchapters || [] as subSubChapter, subSubIndex}
                      <Disclosure
                        title={subSubChapter.heading}
                        headerTag="h3"
                        class="layout-grid layout-grid--column-12 col-1-span-12 {showChapterNumbers
                          ? 'disclosure-with-number'
                          : ''}"
                        chapter={showChapterNumbers
                          ? \`\${chapterIndex + 1}.\${subChapterIndex + 1}.\${subSubIndex + 1}\`
                          : undefined}
                        headerClass={'col-1-span-12 text-h4'}
                        panelClass={'col-1-span-12'}>
                        <div class="layout-grid layout-grid--column-12">
                          <article class="article-page col-1-span-12 children-full-width">
                            {@html subSubChapter.body}
                          </article>
                        </div>
                      </Disclosure>
                    {/each}
                  </Disclosure>
                {/each}
              </section>
            {/if}
          {/each}
        </div>
      </div>
    </main>
  </div>
</div>
<footer class="mt-footer footer--regular" aria-labelledby="footer-title">
  <h2 id="footer-title" class="mt-h2 inclusively-hidden">Footer</h2>
  <div class="col">Col 1</div>
  <div class="col">Col 2</div>
  <div class="col">Col 3</div>
</footer>`,tags:[],hasArgs:!0}},allocatedIds:["default","Meta","Story","Dropdown","ChapterMenu","toKebabCase","action","Disclosure"]}),X1=m1.meta,Q1=["Normal"],Y1=m1.stories.Normal;export{Y1 as Normal,Q1 as __namedExportsOrder,X1 as default};
