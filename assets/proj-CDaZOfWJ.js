function On(n,s,r){return Math.min(Math.max(n,s),r)}function Fn(n,s,r,t,i,a){const c=i-r,f=a-t;if(c!==0||f!==0){const o=((n-r)*c+(s-t)*f)/(c*c+f*f);o>1?(r=i,t=a):o>0&&(r+=c*o,t+=f*o)}return k(n,s,r,t)}function k(n,s,r,t){const i=r-n,a=t-s;return i*i+a*a}function An(n){const s=n.length;for(let t=0;t<s;t++){let i=t,a=Math.abs(n[t][t]);for(let f=t+1;f<s;f++){const o=Math.abs(n[f][t]);o>a&&(a=o,i=f)}if(a===0)return null;const c=n[i];n[i]=n[t],n[t]=c;for(let f=t+1;f<s;f++){const o=-n[f][t]/n[t][t];for(let e=t;e<s+1;e++)t==e?n[f][e]=0:n[f][e]+=o*n[t][e]}}const r=new Array(s);for(let t=s-1;t>=0;t--){r[t]=n[t][s]/n[t][t];for(let i=t-1;i>=0;i--)n[i][s]-=n[i][t]*r[t]}return r}function W(n){return n*180/Math.PI}function _(n){return n*Math.PI/180}function Nn(n,s){const r=n%s;return r*s<0?r+s:r}function Wn(n,s,r){return n+r*(s-n)}function $(n,s){const r=Math.pow(10,s);return Math.round(n*r)/r}function Xn(n,s){return Math.floor($(n,s))}function Ln(n,s){return Math.ceil($(n,s))}const u={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function bn(n){const s=Y();for(let r=0,t=n.length;r<t;++r)p(s,n[r]);return s}function qn(n,s,r){return r?(r[0]=n[0]-s,r[1]=n[1]-s,r[2]=n[2]+s,r[3]=n[3]+s,r):[n[0]-s,n[1]-s,n[2]+s,n[3]+s]}function Bn(n,s){return s?(s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=n[3],s):n.slice()}function Dn(n,s,r){let t,i;return s<n[0]?t=n[0]-s:n[2]<s?t=s-n[2]:t=0,r<n[1]?i=n[1]-r:n[3]<r?i=r-n[3]:i=0,t*t+i*i}function $n(n,s){return j(n,s[0],s[1])}function Yn(n,s){return n[0]<=s[0]&&s[2]<=n[2]&&n[1]<=s[1]&&s[3]<=n[3]}function j(n,s,r){return n[0]<=s&&s<=n[2]&&n[1]<=r&&r<=n[3]}function X(n,s){const r=n[0],t=n[1],i=n[2],a=n[3],c=s[0],f=s[1];let o=u.UNKNOWN;return c<r?o=o|u.LEFT:c>i&&(o=o|u.RIGHT),f<t?o=o|u.BELOW:f>a&&(o=o|u.ABOVE),o===u.UNKNOWN&&(o=u.INTERSECTING),o}function Y(){return[1/0,1/0,-1/0,-1/0]}function F(n,s,r,t,i){return i?(i[0]=n,i[1]=s,i[2]=r,i[3]=t,i):[n,s,r,t]}function V(n){return F(1/0,1/0,-1/0,-1/0,n)}function Vn(n,s){const r=n[0],t=n[1];return F(r,t,r,t,s)}function Hn(n,s,r,t,i){const a=V(i);return x(a,n,s,r,t)}function Kn(n,s){return n[0]==s[0]&&n[2]==s[2]&&n[1]==s[1]&&n[3]==s[3]}function Jn(n,s){return s[0]<n[0]&&(n[0]=s[0]),s[2]>n[2]&&(n[2]=s[2]),s[1]<n[1]&&(n[1]=s[1]),s[3]>n[3]&&(n[3]=s[3]),n}function p(n,s){s[0]<n[0]&&(n[0]=s[0]),s[0]>n[2]&&(n[2]=s[0]),s[1]<n[1]&&(n[1]=s[1]),s[1]>n[3]&&(n[3]=s[1])}function x(n,s,r,t,i){for(;r<t;r+=i)nn(n,s[r],s[r+1]);return n}function nn(n,s,r){n[0]=Math.min(n[0],s),n[1]=Math.min(n[1],r),n[2]=Math.max(n[2],s),n[3]=Math.max(n[3],r)}function Zn(n,s){let r;return r=s(H(n)),r||(r=s(K(n)),r)||(r=s(Z(n)),r)||(r=s(J(n)),r)?r:!1}function vn(n){let s=0;return on(n)||(s=S(n)*tn(n)),s}function H(n){return[n[0],n[1]]}function K(n){return[n[2],n[1]]}function sn(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function zn(n,s){let r;if(s==="bottom-left")r=H(n);else if(s==="bottom-right")r=K(n);else if(s==="top-left")r=J(n);else if(s==="top-right")r=Z(n);else throw new Error("Invalid corner");return r}function Qn(n,s,r,t,i){const[a,c,f,o,e,h,g,l]=rn(n,s,r,t);return F(Math.min(a,f,e,g),Math.min(c,o,h,l),Math.max(a,f,e,g),Math.max(c,o,h,l),i)}function rn(n,s,r,t){const i=s*t[0]/2,a=s*t[1]/2,c=Math.cos(r),f=Math.sin(r),o=i*c,e=i*f,h=a*c,g=a*f,l=n[0],E=n[1];return[l-o+g,E-e-h,l-o-g,E-e+h,l+o-g,E+e+h,l+o+g,E+e-h,l-o+g,E-e-h]}function tn(n){return n[3]-n[1]}function kn(n,s,r){const t=r||Y();return an(n,s)?(n[0]>s[0]?t[0]=n[0]:t[0]=s[0],n[1]>s[1]?t[1]=n[1]:t[1]=s[1],n[2]<s[2]?t[2]=n[2]:t[2]=s[2],n[3]<s[3]?t[3]=n[3]:t[3]=s[3]):V(t),t}function J(n){return[n[0],n[3]]}function Z(n){return[n[2],n[3]]}function S(n){return n[2]-n[0]}function an(n,s){return n[0]<=s[2]&&n[2]>=s[0]&&n[1]<=s[3]&&n[3]>=s[1]}function on(n){return n[2]<n[0]||n[3]<n[1]}function jn(n,s){return s?(s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=n[3],s):n}function pn(n,s,r){let t=!1;const i=X(n,s),a=X(n,r);if(i===u.INTERSECTING||a===u.INTERSECTING)t=!0;else{const c=n[0],f=n[1],o=n[2],e=n[3],h=s[0],g=s[1],l=r[0],E=r[1],G=(E-g)/(l-h);let M,w;a&u.ABOVE&&!(i&u.ABOVE)&&(M=l-(E-e)/G,t=M>=c&&M<=o),!t&&a&u.RIGHT&&!(i&u.RIGHT)&&(w=E-(l-o)*G,t=w>=f&&w<=e),!t&&a&u.BELOW&&!(i&u.BELOW)&&(M=l-(E-f)/G,t=M>=c&&M<=o),!t&&a&u.LEFT&&!(i&u.LEFT)&&(w=E-(l-c)*G,t=w>=f&&w<=e)}return t}function fn(n,s){const r=s.getExtent(),t=sn(n);if(s.canWrapX()&&(t[0]<r[0]||t[0]>=r[2])){const i=S(r),c=Math.floor((t[0]-r[0])/i)*i;n[0]-=c,n[2]-=c}return n}function xn(n,s){if(s.canWrapX()){const r=s.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[r[0],n[1],r[2],n[3]]];fn(n,s);const t=S(r);if(S(n)>t)return[[r[0],n[1],r[2],n[3]]];if(n[0]<r[0])return[[n[0]+t,n[1],r[2],n[3]],[r[0],n[1],n[2],n[3]]];if(n[2]>r[2])return[[n[0],n[1],r[2],n[3]],[r[0],n[1],n[2]-t,n[3]]]}return[n]}const cn={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};class v{constructor(s){this.code_=s.code,this.units_=s.units,this.extent_=s.extent!==void 0?s.extent:null,this.worldExtent_=s.worldExtent!==void 0?s.worldExtent:null,this.axisOrientation_=s.axisOrientation!==void 0?s.axisOrientation:"enu",this.global_=s.global!==void 0?s.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=s.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=s.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||cn[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(s){this.global_=s,this.canWrapX_=!!(s&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(s){this.defaultTileGrid_=s}setExtent(s){this.extent_=s,this.canWrapX_=!!(this.global_&&s)}setWorldExtent(s){this.worldExtent_=s}setGetPointResolution(s){this.getPointResolutionFunc_=s}getPointResolutionFunc(){return this.getPointResolutionFunc_}}const I=6378137,R=Math.PI*I,en=[-R,-R,R,R],un=[-180,-85,180,85],C=I*Math.log(Math.tan(Math.PI/2));class P extends v{constructor(s){super({code:s,units:"m",extent:en,global:!0,worldExtent:un,getPointResolution:function(r,t){return r/Math.cosh(t[1]/I)}})}}const L=[new P("EPSG:3857"),new P("EPSG:102100"),new P("EPSG:102113"),new P("EPSG:900913"),new P("http://www.opengis.net/def/crs/EPSG/0/3857"),new P("http://www.opengis.net/gml/srs/epsg.xml#3857")];function ln(n,s,r){const t=n.length;r=r>1?r:2,s===void 0&&(r>2?s=n.slice():s=new Array(t));for(let i=0;i<t;i+=r){s[i]=R*n[i]/180;let a=I*Math.log(Math.tan(Math.PI*(+n[i+1]+90)/360));a>C?a=C:a<-C&&(a=-C),s[i+1]=a}return s}function hn(n,s,r){const t=n.length;r=r>1?r:2,s===void 0&&(r>2?s=n.slice():s=new Array(t));for(let i=0;i<t;i+=r)s[i]=180*n[i]/R,s[i+1]=360*Math.atan(Math.exp(n[i+1]/I))/Math.PI-90;return s}const gn=6378137,b=[-180,-90,180,90],En=Math.PI*gn/180;class d extends v{constructor(s,r){super({code:s,units:"degrees",extent:b,axisOrientation:r,global:!0,metersPerUnit:En,worldExtent:b})}}const q=[new d("CRS:84"),new d("EPSG:4326","neu"),new d("urn:ogc:def:crs:OGC:1.3:CRS84"),new d("urn:ogc:def:crs:OGC:2:84"),new d("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new d("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new d("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];let U={};function dn(n){return U[n]||U[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function Mn(n,s){U[n]=s}let m={};function y(n,s,r){const t=n.getCode(),i=s.getCode();t in m||(m[t]={}),m[t][i]=r}function wn(n,s){let r;return n in m&&s in m[n]&&(r=m[n][s]),r}function ns(n,s){return n[0]+=+s[0],n[1]+=+s[1],n}function Pn(n,s){let r=!0;for(let t=n.length-1;t>=0;--t)if(n[t]!=s[t]){r=!1;break}return r}function ss(n,s){const r=Math.cos(s),t=Math.sin(s),i=n[0]*r-n[1]*t,a=n[1]*r+n[0]*t;return n[0]=i,n[1]=a,n}function rs(n,s){return n[0]*=s,n[1]*=s,n}function Rn(n,s){const r=n[0]-s[0],t=n[1]-s[1];return r*r+t*t}function ts(n,s){return Math.sqrt(Rn(n,s))}function is(n,s){if(s.canWrapX()){const r=S(s.getExtent()),t=mn(n,s,r);t&&(n[0]-=t*r)}return n}function mn(n,s,r){const t=s.getExtent();let i=0;return s.canWrapX()&&(n[0]<t[0]||n[0]>t[2])&&(r=r||S(t),i=Math.floor((n[0]-t[0])/r)),i}const z=63710088e-1;function B(n,s,r){r=r||z;const t=_(n[1]),i=_(s[1]),a=(i-t)/2,c=_(s[0]-n[0])/2,f=Math.sin(a)*Math.sin(a)+Math.sin(c)*Math.sin(c)*Math.cos(t)*Math.cos(i);return 2*r*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))}function as(n,s,r,t){t=t||z;const i=_(n[1]),a=_(n[0]),c=s/t,f=Math.asin(Math.sin(i)*Math.cos(c)+Math.cos(i)*Math.sin(c)*Math.cos(r)),o=a+Math.atan2(Math.sin(r)*Math.sin(c)*Math.cos(i),Math.cos(c)-Math.sin(i)*Math.sin(f));return[W(o),W(f)]}function Sn(...n){console.warn(...n)}let O=!0;function Tn(n){O=!1}function A(n,s){if(s!==void 0){for(let r=0,t=n.length;r<t;++r)s[r]=n[r];s=s}else s=n.slice();return s}function Q(n,s){if(s!==void 0&&n!==s){for(let r=0,t=n.length;r<t;++r)s[r]=n[r];n=s}return n}function _n(n){Mn(n.getCode(),n),y(n,n,A)}function In(n){n.forEach(_n)}function T(n){return typeof n=="string"?dn(n):n||null}function os(n,s,r,t){n=T(n);let i;const a=n.getPointResolutionFunc();if(a)i=a(s,r);else{const c=n.getUnits();if(c=="degrees"&&!t||t=="degrees")i=s;else{const f=N(n,T("EPSG:4326"));if(f===Q&&c!=="degrees")i=s*n.getMetersPerUnit();else{let e=[r[0]-s/2,r[1],r[0]+s/2,r[1],r[0],r[1]-s/2,r[0],r[1]+s/2];e=f(e,e,2);const h=B(e.slice(0,2),e.slice(2,4)),g=B(e.slice(4,6),e.slice(6,8));i=(h+g)/2}const o=n.getMetersPerUnit();o!==void 0&&(i/=o)}}return i}function D(n){In(n),n.forEach(function(s){n.forEach(function(r){s!==r&&y(s,r,A)})})}function Gn(n,s,r,t){n.forEach(function(i){s.forEach(function(a){y(i,a,r),y(a,i,t)})})}function fs(n,s){return n?typeof n=="string"?T(n):n:T(s)}function cs(n,s){return Tn(),yn(n,"EPSG:4326","EPSG:3857")}function es(n,s){if(n===s)return!0;const r=n.getUnits()===s.getUnits();return(n.getCode()===s.getCode()||N(n,s)===A)&&r}function N(n,s){const r=n.getCode(),t=s.getCode();let i=wn(r,t);return i||(i=Q),i}function Cn(n,s){const r=T(n),t=T(s);return N(r,t)}function yn(n,s,r){return Cn(s,r)(n,void 0,n.length)}function us(n,s){return n}function ls(n,s){return O&&!Pn(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(O=!1,Sn("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n}function hs(n,s){return n}function gs(n,s){return n}function Un(){D(L),D(q),Gn(q,L,ln,hn)}Un();export{Xn as $,gs as A,Nn as B,ss as C,ns as D,us as E,hs as F,Qn as G,Pn as H,Tn as I,J,Z as K,K as L,cn as M,H as N,vn as O,bn as P,p as Q,Jn as R,An as S,yn as T,os as U,$n as V,kn as W,rn as X,Kn as Y,F as Z,Ln as _,Y as a,zn as a0,es as a1,Q as a2,N as a3,X as a4,u as a5,Bn as a6,qn as a7,$ as a8,is as a9,fn as aa,xn as ab,rs as ac,Sn as ad,cs as ae,ts as af,V as b,On as c,tn as d,Cn as e,Hn as f,T as g,sn as h,Fn as i,Dn as j,Zn as k,Wn as l,x as m,an as n,Yn as o,pn as p,Vn as q,jn as r,k as s,j as t,on as u,as as v,S as w,_ as x,fs as y,ls as z};
