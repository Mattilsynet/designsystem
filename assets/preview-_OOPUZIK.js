var ue=Object.defineProperty,o=(e,t)=>ue(e,"name",{value:t,configurable:!0});function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(null,arguments)}o(m,"_extends");function L(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o(L,"_assertThisInitialized");function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},v(e,t)}o(v,"_setPrototypeOf");function Y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,v(e,t)}o(Y,"_inheritsLoose");function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(e)}o(k,"_getPrototypeOf");function U(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}o(U,"_isNativeFunction");function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=o(function(){return!!e},"_isNativeReflectConstruct"))()}o(H,"_isNativeReflectConstruct");function K(e,t,a){if(H())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var n=new(e.bind.apply(e,r));return a&&v(n,a.prototype),n}o(K,"_construct");function P(e){var t=typeof Map=="function"?new Map:void 0;return P=o(function(a){if(a===null||!U(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,r)}function r(){return K(a,arguments,k(this).constructor)}return o(r,"Wrapper"),r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,a)},"_wrapNativeSuper"),P(e)}o(P,"_wrapNativeSuper");var pe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function J(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[0],n=[],s;for(s=1;s<t.length;s+=1)n.push(t[s]);return n.forEach(function(l){r=r.replace(/%[a-z]/,l)}),r}o(J,"format");var d=function(e){Y(t,e);function t(a){for(var r,n=arguments.length,s=new Array(n>1?n-1:0),l=1;l<n;l++)s[l-1]=arguments[l];return r=e.call(this,J.apply(void 0,[pe[a]].concat(s)))||this,L(r)}return o(t,"PolishedError"),t}(P(Error));function C(e){return Math.round(e*255)}o(C,"colorToInt");function Q(e,t,a){return C(e)+","+C(t)+","+C(a)}o(Q,"convertToInt");function y(e,t,a,r){if(r===void 0&&(r=Q),t===0)return r(a,a,a);var n=(e%360+360)%360/60,s=(1-Math.abs(2*a-1))*t,l=s*(1-Math.abs(n%2-1)),u=0,p=0,f=0;n>=0&&n<1?(u=s,p=l):n>=1&&n<2?(u=l,p=s):n>=2&&n<3?(p=s,f=l):n>=3&&n<4?(p=l,f=s):n>=4&&n<5?(u=l,f=s):n>=5&&n<6&&(u=s,f=l);var g=a-s/2,b=u+g,c=p+g,E=f+g;return r(b,c,E)}o(y,"hslToRgb");var N={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function X(e){if(typeof e!="string")return e;var t=e.toLowerCase();return N[t]?"#"+N[t]:e}o(X,"nameToHex");var fe=/^#[a-fA-F0-9]{6}$/,de=/^#[a-fA-F0-9]{8}$/,ce=/^#[a-fA-F0-9]{3}$/,he=/^#[a-fA-F0-9]{4}$/,O=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ge=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,be=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,me=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new d(3);var t=X(e);if(t.match(fe))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(de)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(ce))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(he)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var n=O.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var s=ge.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var l=be.exec(t);if(l){var u=parseInt(""+l[1],10),p=parseInt(""+l[2],10)/100,f=parseInt(""+l[3],10)/100,g="rgb("+y(u,p,f)+")",b=O.exec(g);if(!b)throw new d(4,t,g);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var c=me.exec(t.substring(0,50));if(c){var E=parseInt(""+c[1],10),ie=parseInt(""+c[2],10)/100,le=parseInt(""+c[3],10)/100,q="rgb("+y(E,ie,le)+")",x=O.exec(q);if(!x)throw new d(4,t,q);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new d(5)}o(B,"parseToRgb");function W(e){var t=e.red/255,a=e.green/255,r=e.blue/255,n=Math.max(t,a,r),s=Math.min(t,a,r),l=(n+s)/2;if(n===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var u,p=n-s,f=l>.5?p/(2-n-s):p/(n+s);switch(n){case t:u=(a-r)/p+(a<r?6:0);break;case a:u=(r-t)/p+2;break;default:u=(t-a)/p+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:f,lightness:l,alpha:e.alpha}:{hue:u,saturation:f,lightness:l}}o(W,"rgbToHsl");function A(e){return W(B(e))}o(A,"parseToHsl");var ve=o(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),D=ve;function h(e){var t=e.toString(16);return t.length===1?"0"+t:t}o(h,"numberToHex");function S(e){return h(Math.round(e*255))}o(S,"colorToHex");function ee(e,t,a){return D("#"+S(e)+S(t)+S(a))}o(ee,"convertToHex");function F(e,t,a){return y(e,t,a,ee)}o(F,"hslToHex");function te(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return F(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return F(e.hue,e.saturation,e.lightness);throw new d(1)}o(te,"hsl");function ae(e,t,a,r){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?F(e,t,a):"rgba("+y(e,t,a)+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?F(e.hue,e.saturation,e.lightness):"rgba("+y(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new d(2)}o(ae,"hsla");function I(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return D("#"+h(e)+h(t)+h(a));if(typeof e=="object"&&t===void 0&&a===void 0)return D("#"+h(e.red)+h(e.green)+h(e.blue));throw new d(6)}o(I,"rgb");function w(e,t,a,r){if(typeof e=="string"&&typeof t=="number"){var n=B(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?I(e,t,a):"rgba("+e+","+t+","+a+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new d(7)}o(w,"rgba");var ye=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Fe=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),we=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),xe=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function Z(e){if(typeof e!="object")throw new d(8);if(Fe(e))return w(e);if(ye(e))return I(e);if(xe(e))return ae(e);if(we(e))return te(e);throw new d(8)}o(Z,"toColorString");function $(e,t,a){return o(function(){var r=a.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):$(e,t,r)},"fn")}o($,"curried");function M(e){return $(e,e.length,[])}o(M,"curry");function j(e,t,a){return Math.max(e,Math.min(t,a))}o(j,"guard");function re(e,t){if(t==="transparent")return t;var a=A(t);return Z(m({},a,{lightness:j(0,1,a.lightness-parseFloat(e))}))}o(re,"darken");var Ce=M(re),Se=Ce;function oe(e,t){if(t==="transparent")return t;var a=A(t);return Z(m({},a,{lightness:j(0,1,a.lightness+parseFloat(e))}))}o(oe,"lighten");var ke=M(oe),Pe=ke;function ne(e,t){if(t==="transparent")return t;var a=B(t),r=typeof a.alpha=="number"?a.alpha:1,n=m({},a,{alpha:j(0,1,+(r*100-parseFloat(e)*100).toFixed(2)/100)});return w(n)}o(ne,"transparentize");var Ie=M(ne),Te=Ie,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},V={app:"#F6F9FC",bar:i.lightest,content:i.lightest,preview:i.lightest,gridCellSize:10,hoverable:Te(.9,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},T={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Be={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:i.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},Me=Be,je={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:V.app,appContentBg:i.lightest,appPreviewBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:T.fonts.base,fontCode:T.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.dark,barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:V.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},G=je,Ee=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Oe}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:R}=Ee,Re=o(e=>typeof e!="string"?(Oe.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),_e=o(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),ze=o((e,t)=>e==="darken"?w(`${Se(1,t)}`,.95):e==="lighten"?w(`${Pe(1,t)}`,.95):t,"applyPolished"),se=o(e=>t=>{if(!Re(t)||!_e(t))return t;try{return ze(e,t)}catch{return t}},"colorFactory");se("lighten");se("darken");var De=o(()=>!R||!R.matchMedia?"light":R.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),_={light:G,dark:Me,normal:G},z=De(),He=o((e={base:z},t)=>{let a={..._[z],..._[e.base]||{},...e,base:_[e.base]?e.base:z};return{...t,...a,barSelectedColor:e.barSelectedColor||a.colorSecondary}},"create");const Ae="data:image/svg+xml,%3csvg%20id='mt-logo'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20252%2045'%20width='252'%20height='45'%20fill='none'%20%3e%3cpath%20fill='%23054449'%20d='M233.702%2030.469c-.823%201.566-2.261%202.364-4.29%202.364-2.747%200-4.914-2.02-5.073-4.716h13.845s.118-.32.118-1.524c0-6.093-3.584-9.866-9.356-9.866-2.392%200-4.752%201-6.472%202.742-1.836%201.855-2.845%204.427-2.845%207.242%200%203.037%201.02%205.632%202.946%207.497%201.781%201.727%204.211%202.679%206.835%202.679%203.95%200%206.488-1.934%207.823-4.175.386-.689.698-1.44.935-2.24h-4.47.004v-.003Zm-4.717-9.808c2.019%200%204.413%201.046%204.57%203.982h-9.095c.256-2.586%202.509-3.982%204.525-3.982ZM145.323%2013.827c1.72%200%203.069-1.314%203.069-2.993%200-1.679-1.378-3.032-3.069-3.032a3.023%203.023%200%200%200-3.032%203.032c0%201.672%201.359%202.993%203.032%202.993ZM147.423%2017.323h-4.687v19.043h4.687V17.323ZM157.433%208.174h-4.687v28.192h4.687V8.174ZM170.557%2024.957l-2.881-.58c-1.146-.226-1.83-.929-1.83-1.875%200-1.16%201.155-2.07%202.628-2.07%202.868%200%203.34%202.281%203.409%202.74l.015.105%203.999-1.134-.014-.084a6.206%206.206%200%200%200-1.817-3.373c-1.355-1.298-3.239-1.958-5.592-1.958-3.893%200-7.061%202.762-7.061%206.159%200%202.78%201.933%204.868%205.17%205.575l2.805.619c1.402.285%202.142.974%202.142%201.992s-.85%202.069-2.747%202.069c-2.564%200-3.626-1.681-3.76-3.12l-.01-.114-4.118%201.134.006.08c.143%201.299.879%202.68%201.97%203.696%201.454%201.35%203.51%202.069%205.946%202.069%204.764%200%207.254-3.079%207.254-6.122%200-3.043-2.012-5.053-5.524-5.81h.009l.001.002ZM209.47%2016.802c-2.321%200-4.353%201.047-5.51%202.813v-2.273h-4.585v19.021h4.702v-10.96c0-2.643%201.506-4.35%203.836-4.35%203.303%200%203.796%202.557%203.796%204.08v11.232h4.703V24.36c0-4.662-2.66-7.557-6.942-7.557V16.8v.001ZM123.953%2032.265c-.163.032-.9.152-1.538.152-1.623%200-2.316-.676-2.316-2.26V21.14h3.927v-3.79h-3.927v-5.755h-4.271v3c0%201.805-1.029%202.842-2.822%202.842h-1.067v3.704h3.5v9.752c0%203.514%202.21%205.697%205.771%205.697%201.55%200%202.419-.272%202.797-.433l.058-.025v-3.887l-.114.022h.002v-.002ZM138.456%2032.265a9.56%209.56%200%200%201-1.537.152c-1.623%200-2.314-.676-2.314-2.26V21.14h3.927v-3.79h-3.927v-5.755h-4.271v3c0%201.805-1.029%202.842-2.822%202.842h-1.067v3.704h3.5v9.752c0%203.514%202.21%205.697%205.772%205.697%201.549%200%202.417-.272%202.796-.433l.059-.025v-3.887l-.115.022v-.002h-.001ZM251.889%2032.265a9.664%209.664%200%200%201-1.539.152c-1.625%200-2.318-.676-2.318-2.26V21.14h3.93v-3.79h-3.93v-5.755h-4.27v3c0%201.805-1.031%202.842-2.822%202.842h-1.067v3.704h3.498v9.752c0%203.514%202.214%205.697%205.773%205.697%201.607%200%202.494-.301%202.798-.433l.057-.025v-3.887l-.114.022h.004v-.002ZM180.206%2043.656h5.036l12.049-26.333h-5.002l-5.044%2011.747-5.365-11.69-.026-.057h-5.319l8.153%2016.65-4.482%209.681v.002ZM82.06%208.77l-8.782%2020.764-8.872-20.709-.025-.056h-6.39v27.597h4.745v-19.73l8.321%2019.604h4.286l8.399-19.682v19.808h4.824V8.77h-6.507.002ZM109.536%2036.193h-.006c-.01-.047-.23-1.171-.23-2.994v-9.346c0-2.142-.791-7.125-8.123-7.125-5%200-7.65%203.142-8.03%206.105l4.298.97c.247-1.984%201.68-3.216%203.769-3.216%202.089%200%203.475%201.034%203.475%202.764%200%20.462-.136%201.092-1.314%201.257l-4.847.735c-3.62.521-5.782%202.678-5.782%205.772%200%201.527.621%202.957%201.745%204.023%201.21%201.145%202.849%201.75%204.749%201.75%203.31%200%205.023-1.762%205.727-2.76.021%201.317.156%201.997.198%202.113l.022.067h4.372l-.022-.115h-.001Zm-4.848-7.784c0%203.944-2.501%204.771-4.598%204.771-1.827%200-2.66-1.212-2.66-2.339%200-1.785%201.53-2.303%202.44-2.454l4.817-.72h.003v.742h-.002ZM22.31%200C11.745%200%202.9%207.34.595%2017.197A24.822%2024.822%200%200%201%2013.36%2020.62c1.036-4.977%205.182-7.415%208.943-7.415%204.037%200%208.476%202.843%209.073%208.29a24.816%2024.816%200%200%201%2013.005-2.39C42.838%208.304%2033.544%200%2022.31%200ZM44.608%2022.284l-.001-.188c-13.078-1.525-24.756%209.236-24.28%2022.386%2012.95%201.21%2024.35-9.188%2024.281-22.198ZM17.335%2043.887a24.73%2024.73%200%200%201%202.96-11.771C16.581%2024.689%208.434%2019.826.111%2020.163c-1.138%2011.215%206.603%2021.513%2017.225%2023.849v-.125Z'%20/%3e%3c/svg%3e",Ze=He({base:"light",brandTitle:"Mattilsynet",brandUrl:"https://mattilsynet.no",brandImage:Ae}),$e={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:Ze}},tags:["autodocs"]};export{$e as default};
