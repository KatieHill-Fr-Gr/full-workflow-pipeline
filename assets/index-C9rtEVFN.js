(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const O of a)if(O.type==="childList")for(const R of O.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&r(R)}).observe(document,{childList:!0,subtree:!0});function A(a){const O={};return a.integrity&&(O.integrity=a.integrity),a.referrerPolicy&&(O.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?O.credentials="include":a.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function r(a){if(a.ep)return;a.ep=!0;const O=A(a);fetch(a.href,O)}})();function v_(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function P_(n,{bannerText:I="Hello CI",textColor:A="#111827",bgColor:r="#f9fafb",fontSize:a=14,now:O=()=>new Date().toLocaleString(),asciiRenderer:R=H=>H}={}){if(!n)throw new Error("Missing target element");const H=v_(R(I));n.innerHTML=`
    <pre
      class="preview"
      aria-label="ascii-art"
      style="color:${A};background-color:${r};font-size:${a}px"
    >${H}</pre>
    <p class="timestamp">Rendered at: ${O()}</p>
  `}const x_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class G_{constructor(){this.comment="",this.numChars=0,this.options={}}}const Y=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],I_={"ANSI-Compact":"ANSI Compact"},v=n=>I_[n]?I_[n]:n;function b_(n){return/[.*+?^${}()|[\]\\]/.test(n)?"\\"+n:n}const z=(()=>{const{FULL_WIDTH:n=0,FITTING:I,SMUSHING:A,CONTROLLED_SMUSHING:r}=x_,a={},O={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function R(e,$,_){const t=b_(e.trim().slice(-1))||"@",o=$===_-1?new RegExp(t+t+"?\\s*$"):new RegExp(t+"\\s*$");return e.replace(o,"")}function H(e=-1,$=null){let _={},t,o=[[16384,"vLayout",A],[8192,"vLayout",I],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",A],[64,"hLayout",I],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];t=$!==null?$:e;for(const[T,E,L]of o)t>=T?(t-=T,_[E]===void 0&&(_[E]=L)):E!=="vLayout"&&E!=="hLayout"&&(_[E]=!1);return typeof _.hLayout>"u"?e===0?_.hLayout=I:e===-1?_.hLayout=n:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=r:_.hLayout=A:_.hLayout===A&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=r),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=r:_.vLayout=n:_.vLayout===A&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=r),_}function m(e,$,_=""){return e===$&&e!==_?e:!1}function K(e,$){let _="|/\\[]{}()<>";if(e==="_"){if(_.indexOf($)!==-1)return $}else if($==="_"&&_.indexOf(e)!==-1)return e;return!1}function k(e,$){let _="| /\\ [] {} () <>",t=_.indexOf(e),o=_.indexOf($);if(t!==-1&&o!==-1&&t!==o&&Math.abs(t-o)!==1){const T=Math.max(t,o),E=T+1;return _.substring(T,E)}return!1}function q(e,$){let _="[] {} ()",t=_.indexOf(e),o=_.indexOf($);return t!==-1&&o!==-1&&Math.abs(t-o)<=1?"|":!1}function __(e,$){return{"/\\":"|","\\/":"Y","><":"X"}[e+$]||!1}function n_(e,$,_=""){return e===_&&$===_?_:!1}function t_(e,$){return e===$?e:!1}function e_(e,$){return K(e,$)}function $_(e,$){return k(e,$)}function o_(e,$){return e==="-"&&$==="_"||e==="_"&&$==="-"?"=":!1}function T_(e,$){return e==="|"&&$==="|"?"|":!1}function w(e,$,_){return $===" "||$===""||$===_&&e!==" "?e:$}function N_(e,$,_){if(_.fittingRules&&_.fittingRules.vLayout===n)return"invalid";let t,o=Math.min(e.length,$.length),T,E,L=!1,h;if(o===0)return"invalid";for(t=0;t<o;t++)if(T=e.substring(t,t+1),E=$.substring(t,t+1),T!==" "&&E!==" "){if(_.fittingRules&&_.fittingRules.vLayout===I)return"invalid";if(_.fittingRules&&_.fittingRules.vLayout===A)return"end";if(T_(T,E)){L=L||!1;continue}if(h=!1,h=_.fittingRules&&_.fittingRules.vRule1?t_(T,E):h,h=!h&&_.fittingRules&&_.fittingRules.vRule2?e_(T,E):h,h=!h&&_.fittingRules&&_.fittingRules.vRule3?$_(T,E):h,h=!h&&_.fittingRules&&_.fittingRules.vRule4?o_(T,E):h,L=!0,!h)return"invalid"}return L?"end":"valid"}function f_(e,$,_){let t=e.length,o=e.length,T,E,L,h=1,s,u,i;for(;h<=t;){for(T=e.slice(Math.max(0,o-h),o),E=$.slice(0,Math.min(t,h)),L=E.length,i="",s=0;s<L;s++)if(u=N_(T[s],E[s],_),u==="end")i=u;else if(u==="invalid"){i=u;break}else i===""&&(i="valid");if(i==="invalid"){h--;break}if(i==="end")break;i==="valid"&&h++}return Math.min(t,h)}function S_(e,$,_){let t,o=Math.min(e.length,$.length),T,E,L="",h;const s=_.fittingRules||{};for(t=0;t<o;t++)T=e.substring(t,t+1),E=$.substring(t,t+1),T!==" "&&E!==" "?s.vLayout===I||s.vLayout===A?L+=w(T,E):(h=!1,h=s.vRule5?T_(T,E):h,h=!h&&s.vRule1?t_(T,E):h,h=!h&&s.vRule2?e_(T,E):h,h=!h&&s.vRule3?$_(T,E):h,h=!h&&s.vRule4?o_(T,E):h,L+=h):L+=w(T,E);return L}function H_(e,$,_,t){let o=e.length,T=$.length,E=e.slice(0,Math.max(0,o-_)),L=e.slice(Math.max(0,o-_),o),h=$.slice(0,Math.min(_,T)),s,u,i,X=[],M;for(u=L.length,s=0;s<u;s++)s>=T?i=L[s]:i=S_(L[s],h[s],t),X.push(i);return M=$.slice(Math.min(_,T),T),[...E,...X,...M]}function E_(e,$){const _=" ".repeat($);return e.map(t=>t+_)}function m_(e,$,_){let t=e[0].length,o=$[0].length,T;return t>o?$=E_($,t-o):o>t&&(e=E_(e,o-t)),T=f_(e,$,_),H_(e,$,T,_)}function d_(e,$,_){const t=_.fittingRules||{};if(t.hLayout===n)return 0;let o,T=e.length,E=$.length,L=T,h=1,s=!1,u,i,X,M;if(T===0)return 0;_:for(;h<=L;){const N=T-h;for(u=e.substring(N,N+h),i=$.substring(0,Math.min(h,E)),o=0;o<Math.min(h,E);o++)if(X=u.substring(o,o+1),M=i.substring(o,o+1),X!==" "&&M!==" "){if(t.hLayout===I){h=h-1;break _}else if(t.hLayout===A){(X===_.hardBlank||M===_.hardBlank)&&(h=h-1);break _}else if(s=!0,!(t.hRule1&&m(X,M,_.hardBlank)||t.hRule2&&K(X,M)||t.hRule3&&k(X,M)||t.hRule4&&q(X,M)||t.hRule5&&__(X,M)||t.hRule6&&n_(X,M,_.hardBlank))){h=h-1;break _}}if(s)break;h++}return Math.min(L,h)}function Z(e,$,_,t){let o,T,E=[],L,h,s,u,i,X,M,N;const c=t.fittingRules||{};if(typeof t.height!="number")throw new Error("height is not defined.");for(o=0;o<t.height;o++){M=e[o],N=$[o],i=M.length,X=N.length,L=i-_,h=M.slice(0,Math.max(0,L)),s="";const W=Math.max(0,i-_);let f=M.substring(W,W+_),d=N.substring(0,Math.min(_,X));for(T=0;T<_;T++){let U=T<i?f.substring(T,T+1):" ",g=T<X?d.substring(T,T+1):" ";if(U!==" "&&g!==" ")if(c.hLayout===I||c.hLayout===A)s+=w(U,g,t.hardBlank);else{const W_=c.hRule1&&m(U,g,t.hardBlank)||c.hRule2&&K(U,g)||c.hRule3&&k(U,g)||c.hRule4&&q(U,g)||c.hRule5&&__(U,g)||c.hRule6&&n_(U,g,t.hardBlank)||w(U,g,t.hardBlank);s+=W_}else s+=w(U,g,t.hardBlank)}_>=X?u="":u=N.substring(_,_+Math.max(0,X-_)),E[o]=h+s+u}return E}function D(e){return new Array(e).fill("")}const y=function(e){return Math.max(...e.map($=>$.length))};function p(e,$,_){return e.reduce(function(t,o){return Z(t,o.fig,o.overlap||0,_)},D($))}function w_(e,$,_){for(let t=e.length-1;t>0;t--){const o=p(e.slice(0,t),$,_);if(y(o)<=_.width)return{outputFigText:o,chars:e.slice(t)}}return{outputFigText:D($),chars:e}}function D_(e,$,_){let t,o,T=0,E,L,h,s=_.height,u=[],i,X={chars:[],overlap:T},M=[],N,c,W,f,d;if(typeof s!="number")throw new Error("height is not defined.");L=D(s);const U=_.fittingRules||{};for(_.printDirection===1&&(e=e.split("").reverse().join("")),h=e.length,t=0;t<h;t++)if(N=e.substring(t,t+1),c=N.match(/\s/),o=$[N.charCodeAt(0)],f=null,o){if(U.hLayout!==n){for(T=1e4,E=0;E<s;E++)T=Math.min(T,d_(L[E],o[E],_));T=T===1e4?0:T}if(_.width>0&&(_.whitespaceBreak?(W=p(X.chars.concat([{fig:o,overlap:T}]),s,_),f=p(M.concat([{fig:W,overlap:X.overlap}]),s,_),i=y(f)):(f=Z(L,o,T,_),i=y(f)),i>=_.width&&t>0&&(_.whitespaceBreak?(L=p(M.slice(0,-1),s,_),M.length>1&&(u.push(L),L=D(s)),M=[]):(u.push(L),L=D(s)))),_.width>0&&_.whitespaceBreak&&((!c||t===h-1)&&X.chars.push({fig:o,overlap:T}),c||t===h-1)){for(d=null;f=p(X.chars,s,_),i=y(f),i>=_.width;)d=w_(X.chars,s,_),X={chars:d.chars},u.push(d.outputFigText);i>0&&(d?M.push({fig:f,overlap:1}):M.push({fig:f,overlap:X.overlap})),c&&(M.push({fig:o,overlap:T}),L=D(s)),t===h-1&&(L=p(M,s,_)),X={chars:[],overlap:T};continue}L=Z(L,o,T,_)}return y(L)>0&&u.push(L),_.showHardBlanks||u.forEach(function(g){for(h=g.length,E=0;E<h;E++)g[E]=g[E].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),e===""&&u.length===0&&u.push(new Array(s).fill("")),u}const p_=function(e,$){let _;const t=$.fittingRules||{};if(e==="default")_={hLayout:t.hLayout,hRule1:t.hRule1,hRule2:t.hRule2,hRule3:t.hRule3,hRule4:t.hRule4,hRule5:t.hRule5,hRule6:t.hRule6};else if(e==="full")_={hLayout:n,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(e==="fitted")_={hLayout:I,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(e==="controlled smushing")_={hLayout:r,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(e==="universal smushing")_={hLayout:A,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return _},y_=function(e,$){let _={};const t=$.fittingRules||{};if(e==="default")_={vLayout:t.vLayout,vRule1:t.vRule1,vRule2:t.vRule2,vRule3:t.vRule3,vRule4:t.vRule4,vRule5:t.vRule5};else if(e==="full")_={vLayout:n,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(e==="fitted")_={vLayout:I,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(e==="controlled smushing")_={vLayout:r,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(e==="universal smushing")_={vLayout:A,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return _},L_=function(e,$,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=v(e);let o=_.split(`
`),T=[],E,L,h;for(L=o.length,E=0;E<L;E++)T=T.concat(D_(o[E],a[t],$));for(L=T.length,h=T[0],E=1;E<L;E++)h=m_(h,T[E],$);return h?h.join(`
`):""};function h_(e,$){let _;if(typeof structuredClone<"u"?_=structuredClone(e):_=JSON.parse(JSON.stringify(e)),_.showHardBlanks=$.showHardBlanks||!1,_.width=$.width||-1,_.whitespaceBreak=$.whitespaceBreak||!1,$.horizontalLayout){const t=p_($.horizontalLayout,e);t&&Object.assign(_.fittingRules,t)}if($.verticalLayout){const t=y_($.verticalLayout,e);t&&Object.assign(_.fittingRules,t)}return _.printDirection=$.printDirection!==null&&$.printDirection!==void 0?$.printDirection:e.printDirection,_}const C=async function(e,$,_){return C.text(e,$,_)};return C.text=async function(e,$,_){e=e+"";let t,o;typeof $=="function"?(o=$,t={font:O.font}):typeof $=="string"?(t={font:$},o=_):$?(t=$,o=_):(t={font:O.font},o=_);const T=t.font||O.font;try{const E=await C.loadFont(T),L=E?L_(T,h_(E,t),e):"";return o&&o(null,L),L}catch(E){const L=E instanceof Error?E:new Error(String(E));if(o)return o(L),"";throw L}},C.textSync=function(e,$){e=e+"",typeof $=="string"?$={font:$}:$=$||{};const _=$.font||O.font;let t=h_(C.loadFontSync(_),$);return L_(_,t,e)},C.metadata=async function(e,$){e=e+"";try{const _=await C.loadFont(e);if(!_)throw new Error("Error loading font.");const t=v(e),o=a[t]||{},T=[_,o.comment||""];return $&&$(null,_,o.comment),T}catch(_){const t=_ instanceof Error?_:new Error(String(_));if($)return $(t),null;throw t}},C.defaults=function(e){return e&&typeof e=="object"&&Object.assign(O,e),typeof structuredClone<"u"?structuredClone(O):JSON.parse(JSON.stringify(O))},C.parseFont=function(e,$,_=!0){if(a[e]&&!_)return a[e].options;$=$.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const t=new G_,o=$.split(`
`),T=o.shift();if(!T)throw new Error("Invalid font file: missing header");const E=T.split(" "),L={hardBlank:E[0].substring(5,6),height:parseInt(E[1],10),baseline:parseInt(E[2],10),maxLength:parseInt(E[3],10),oldLayout:parseInt(E[4],10),numCommentLines:parseInt(E[5],10),printDirection:E[6]?parseInt(E[6],10):0,fullLayout:E[7]?parseInt(E[7],10):null,codeTagCount:E[8]?parseInt(E[8],10):null};if((L.hardBlank||"").length!==1||[L.height,L.baseline,L.maxLength,L.oldLayout,L.numCommentLines].some(u=>u==null||isNaN(u)))throw new Error("FIGlet header contains invalid values.");if(L.height==null||L.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");L.fittingRules=H(L.oldLayout,L.fullLayout),t.options=L;const s=[];for(let u=32;u<=126;u++)s.push(u);if(s.push(196,214,220,228,246,252,223),o.length<L.numCommentLines+L.height*s.length)throw new Error(`FIGlet file is missing data. Line length: ${o.length}. Comment lines: ${L.numCommentLines}. Height: ${L.height}. Num chars: ${s.length}.`);for(t.comment=o.splice(0,L.numCommentLines).join(`
`),t.numChars=0;o.length>0&&t.numChars<s.length;){const u=s[t.numChars];t[u]=o.splice(0,L.height);for(let i=0;i<L.height;i++)typeof t[u][i]>"u"?t[u][i]="":t[u][i]=R(t[u][i],i,L.height);t.numChars++}for(;o.length>0;){const u=o.shift();if(!u||u.trim()==="")break;let i=u.split(" ")[0],X;if(/^-?0[xX][0-9a-fA-F]+$/.test(i))X=parseInt(i,16);else if(/^-?0[0-7]+$/.test(i))X=parseInt(i,8);else if(/^-?[0-9]+$/.test(i))X=parseInt(i,10);else throw new Error(`Error parsing data. Invalid data: ${i}`);if(X===-1||X<-2147483648||X>2147483647){const M=X===-1?"The char code -1 is not permitted.":`The char code cannot be ${X<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${M}`)}t[X]=o.splice(0,L.height);for(let M=0;M<L.height;M++)typeof t[X][M]>"u"?t[X][M]="":t[X][M]=R(t[X][M],M,L.height);t.numChars++}return a[e]=t,L},C.loadedFonts=()=>Object.keys(a),C.clearLoadedFonts=()=>{Object.keys(a).forEach(e=>{delete a[e]})},C.loadFont=async function(e,$){const _=v(e);if(a[_]){const t=a[_].options;return $&&$(null,t),Promise.resolve(t)}try{if(!O.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const t=await fetch(`${O.fontPath}/${_}.flf`);if(!t.ok)throw new Error(`Network response was not ok: ${t.status}`);const o=await t.text(),T=C.parseFont(_,o);return $&&$(null,T),T}catch(t){const o=t instanceof Error?t:new Error(String(t));if($)return $(o),null;throw o}},C.loadFontSync=function(e){const $=v(e);if(a[$])return a[$].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},C.preloadFonts=async function(e,$){try{for(const _ of e){const t=v(_),o=await fetch(`${O.fontPath}/${t}.flf`);if(!o.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${t}, status code: ${o.statusText}`);const T=await o.text();C.parseFont(t,T)}$&&$()}catch(_){const t=_ instanceof Error?_:new Error(String(_));if($){$(t);return}throw _}},C.fonts=function(e){return new Promise(function($,_){$(Y),e&&e(null,Y)})},C.fontsSync=function(){return Y},C.figFonts=a,C})(),F_=`flf2a$ 8 6 59 15 10 0 24463
Big by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
Greek characters by Bruce Jakeway <pbjakeway@neumann.uwaterloo.ca>
figlet release 2.2 -- November 1996
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 | |@
 |_|@
 (_)@
    @
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
   $  @
      @
      @@
    _  _   @
  _| || |_ @
 |_  __  _|@
  _| || |_ @
 |_  __  _|@
   |_||_|  @
           @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @
      @
      @@
  _   __@
 (_) / /@
    / / @
   / /  @
  / / _ @
 /_/ (_)@
        @
        @@
         @
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
  $ @
    @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
 | | @
  \\_\\@
     @@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
  | |@
 /_/ @
     @@
     _    @
  /\\| |/\\ @
  \\ \` ' / @
 |_     _|@
  / , . \\ @
  \\/|_|\\/ @
          @
          @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
    $   @
        @
        @@
    @
    @
    @
    @
  _ @
 ( )@
 |/ @
    @@
         @
         @
  ______ @
 |______|@
     $   @
     $   @
         @
         @@
    @
    @
    @
    @
  _ @
 (_)@
    @
    @@
      __@
     / /@
    / / @
   / /  @
  / /   @
 /_/    @
        @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  __ @
 /_ |@
  | |@
  | |@
  | |@
  |_|@
     @
     @@
  ___  @
 |__ \\ @
   $) |@
   / / @
  / /_ @
 |____|@
       @
       @@
  ____  @
 |___ \\ @
   __) |@
  |__ < @
  ___) |@
 |____/ @
        @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    | |  @
    |_|  @
         @
         @@
  _____ @
 | ____|@
 | |__  @
 |___ \\ @
  ___) |@
 |____/ @
        @
        @@
    __  @
   / /  @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  ______ @
 |____  |@
    $/ / @
    / /  @
   / /   @
  /_/    @
         @
         @@
   ___  @
  / _ \\ @
 | (_) |@
  > _ < @
 | (_) |@
  \\___/ @
        @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    / / @
   /_/  @
        @
        @@
    @
  _ @
 (_)@
  $ @
  _ @
 (_)@
    @
    @@
    @
  _ @
 (_)@
  $ @
  _ @
 ( )@
 |/ @
    @@
    __@
   / /@
  / / @
 < <  @
  \\ \\ @
   \\_\\@
      @
      @@
         @
  ______ @
 |______|@
  ______ @
 |______|@
         @
         @
         @@
 __   @
 \\ \\  @
  \\ \\ @
   > >@
  / / @
 /_/  @
      @
      @@
  ___  @
 |__ \\ @
    ) |@
   / / @
  |_|  @
  (_)  @
       @
       @@
          @
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @
          @@
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / ____ \\ @
 /_/    \\_\\@
           @
           @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 | |_) |@
 |____/ @
        @
        @@
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
         @
         @@
  _____  @
 |  __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
 |_____/ @
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |____ @
 |______|@
         @
         @@
  ______ @
 |  ____|@
 | |__   @
 |  __|  @
 | |     @
 |_|     @
         @
         @@
   _____ @
  / ____|@
 | |  __ @
 | | |_ |@
 | |__| |@
  \\_____|@
         @
         @@
  _    _ @
 | |  | |@
 | |__| |@
 |  __  |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _____ @
 |_   _|@
   | |  @
   | |  @
  _| |_ @
 |_____|@
        @
        @@
       _ @
      | |@
      | |@
  _   | |@
 | |__| |@
  \\____/ @
         @
         @@
  _  __@
 | |/ /@
 | ' / @
 |  <  @
 | . \\ @
 |_|\\_\\@
       @
       @@
  _      @
 | |     @
 | |     @
 | |     @
 | |____ @
 |______|@
         @
         @@
  __  __ @
 |  \\/  |@
 | \\  / |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | . \` |@
 | |\\  |@
 |_| \\_|@
        @
        @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 | |     @
 |_|     @
         @
         @@
   ____  @
  / __ \\ @
 | |  | |@
 | |  | |@
 | |__| |@
  \\___\\_\\@
         @
         @@
  _____  @
 |  __ \\ @
 | |__) |@
 |  _  / @
 | | \\ \\ @
 |_|  \\_\\@
         @
         @@
   _____ @
  / ____|@
 | (___  @
  \\___ \\ @
  ____) |@
 |_____/ @
         @
         @@
  _______ @
 |__   __|@
    | |   @
    | |   @
    | |   @
    |_|   @
          @
          @@
  _    _ @
 | |  | |@
 | |  | |@
 | |  | |@
 | |__| |@
  \\____/ @
         @
         @@
 __      __@
 \\ \\    / /@
  \\ \\  / / @
   \\ \\/ /  @
    \\  /   @
     \\/    @
           @
           @@
 __          __@
 \\ \\        / /@
  \\ \\  /\\  / / @
   \\ \\/  \\/ /  @
    \\  /\\  /   @
     \\/  \\/    @
               @
               @@
 __   __@
 \\ \\ / /@
  \\ V / @
   > <  @
  / . \\ @
 /_/ \\_\\@
        @
        @@
 __     __@
 \\ \\   / /@
  \\ \\_/ / @
   \\   /  @
    | |   @
    |_|   @
          @
          @@
  ______@
 |___  /@
   $/ / @
   / /  @
  / /__ @
 /_____|@
        @
        @@
  ___ @
 |  _|@
 | |  @
 | |  @
 | |  @
 | |_ @
 |___|@
      @@
 __     @
 \\ \\    @
  \\ \\   @
   \\ \\  @
    \\ \\ @
     \\_\\@
        @
        @@
  ___ @
 |_  |@
   | |@
   | |@
   | |@
  _| |@
 |___|@
      @@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
   $ @
     @
     @@
         @
         @
         @
         @
         @
     $   @
  ______ @
 |______|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
  $ @
    @
    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @
        @@
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @
       @@
      _ @
     | |@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
       @
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 | |  @
 |_|  @
      @
      @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
   __/ |@
  |___/ @@
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
  _ @
 (_)@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
    _ @
   (_)@
    _ @
   | |@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | |   @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
            @
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @
            @@
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
        @
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
        @
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
        @
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     | |@
     |_|@@
       @
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @
       @@
      @
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @
      @@
  _   @
 | |  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @
      @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
        @
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @
        @@
           @
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @
           @@
       @
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @
       @@
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
      @
      @
  ____@
 |_  /@
  / / @
 /___|@
      @
      @@
    __@
   / /@
  | | @
 / /  @
 \\ \\  @
  | | @
   \\_\\@
      @@
  _ @
 | |@
 | |@
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   \\ \\@
   / /@
  | | @
 /_/  @
      @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
   $  @
      @
      @@
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 | |@
 |_|@
    @
    @@
162  CENT SIGN
       @
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @
       @@
163  POUND SIGN
     ___   @
    / ,_\\  @
  _| |_    @
 |__ __|   @
   | |____ @
  (_,_____|@
           @
           @@
164  CURRENCY SIGN
        @
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @
        @@
165  YEN SIGN
  __   __ @
  \\ \\ / / @
  _\\ V /_ @
 |___ ___|@
 |___ ___|@
    |_|   @
          @
          @@
166  BROKEN BAR
  _ @
 | |@
 | |@
 |_|@
  _ @
 | |@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @
       @
       @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
  $   $ @
        @
        @@
169  COPYRIGHT SIGN
    ________   @
   /  ____  \\  @
  /  / ___|  \\ @
 |  | |       |@
 |  | |___    |@
  \\  \\____|  / @
   \\________/  @
               @@
170  FEMININE ORDINAL INDICATOR
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
 |_____|@
    $   @
        @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
    ____@
   / / /@
  / / / @
 < < <  @
  \\ \\ \\ @
   \\_\\_\\@
        @
        @@
172  NOT SIGN
         @
         @
  ______ @
 |____  |@
      |_|@
     $   @
         @
         @@
173  SOFT HYPHEN
        @
        @
  _____ @
 |_____|@
    $   @
    $   @
        @
        @@
174  REGISTERED SIGN
    ________   @
   /  ____  \\  @
  /  |  _ \\  \\ @
 |   | |_) |  |@
 |   |  _ <   |@
  \\  |_| \\_\\ / @
   \\________/  @
               @@
175  MACRON
  ______ @
 |______|@
     $   @
     $   @
     $   @
     $   @
         @
         @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
    $  @
       @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
   |_|  @
  _____ @
 |_____|@
        @
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
   $  @
      @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
   $  @
      @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
  $ @
    @
    @@
181  MICRO SIGN
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
182  PILCROW SIGN
   ______ @
  /      |@
 | (| || |@
  \\__ || |@
    | || |@
    |_||_|@
          @
          @@
183  MIDDLE DOT
    @
    @
  _ @
 (_)@
  $ @
  $ @
    @
    @@
184  CEDILLA
    @
    @
    @
    @
    @
  _ @
 )_)@
    @@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
  $ @
    @
    @@
186  MASCULINE ORDINAL INDICATOR
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
 |_____|@
    $   @
        @
        @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____   @
 \\ \\ \\  @
  \\ \\ \\ @
   > > >@
  / / / @
 /_/_/  @
        @
        @@
188  VULGAR FRACTION ONE QUARTER
  _   __   @
 / | / /   @
 | |/ / _  @
 |_/ / | | @
  / /|_  _|@
 /_/   |_| @
           @
           @@
189  VULGAR FRACTION ONE HALF
  _   __  @
 / | / /  @
 | |/ /__ @
 |_/ /_  )@
  / / / / @
 /_/ /___|@
          @
          @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __   @
 |__ / / /   @
  |_ \\/ / _  @
 |___/ / | | @
    / /|_  _|@
   /_/   |_| @
             @
             @@
191  INVERTED QUESTION MARK
    _  @
   (_) @
   | | @
  / /  @
 | (__ @
  \\___|@
       @
       @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __    @
    \\_\\   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __   @
    /_/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
    //\\   @
   |/_\\|  @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
195  LATIN CAPITAL LETTER A WITH TILDE
    /\\/|  @
   |/\\/   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
   _   _  @
  (_)_(_) @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
     _    @
    (o)   @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @
          @@
198  LATIN CAPITAL LETTER AE
      _______ @
     /   ____|@
    /   |__   @
   / /|  __|  @
  / ___ |____ @
 /_/  |______|@
              @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   _____ @
  / ____|@
 | | $   @
 | | $   @
 | |____ @
  \\_____|@
    )_)  @
         @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
  | | @
 |___|@
      @
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
   | |  @
  |___| @
        @
        @@
208  LATIN CAPITAL LETTER ETH
    _____  @
   |  __ \\ @
  _| |_ | |@
 |__ __|| |@
   | |__| |@
   |_____/ @
           @
           @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/| @
  |/\\/_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @
        @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
   $ @
     @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / __// @
 | | // |@
 | |//| |@
 | //_| |@
  //___/ @
         @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @
        @@
222  LATIN CAPITAL LETTER THORN
  _      @
 | |___  @
 |  __ \\ @
 | |__) |@
 |  ___/ @
 |_|     @
         @
         @@
223  LATIN SMALL LETTER SHARP S
   ___  @
  / _ \\ @
 | | ) |@
 | |< < @
 | | ) |@
 | ||_/ @
 |_|    @
        @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_) (_)@
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @
        @@
230  LATIN SMALL LETTER AE
           @
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @
       @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/ \\|@
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 |  __/ @
  \\___| @
        @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
  _ @
 | |@
 | |@
 |_|@
    @
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/ \\|@
   _  @
  | | @
  | | @
  |_| @
      @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_) (_)@
    _   @
   | |  @
   | |  @
   |_|  @
        @
        @@
240  LATIN SMALL LETTER ETH
  /\\/\\  @
  >  <  @
  \\/\\ \\ @
  / _\` |@
 | (_) |@
  \\___/ @
        @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_) (_)@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @
        @@
247  DIVISION SIGN
     _    @
    (_)   @
  _______ @
 |_______|@
     _    @
    (_)   @
          @
          @@
248  LATIN SMALL LETTER O WITH STROKE
         @
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
   \\_\\  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
   /_/  @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |    @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 | |    @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
   __/ |@
  |___/ @@
0x02BC  MODIFIER LETTER APOSTROPHE
   @
   @
 ))@
   @
   @
   @
   @
   @@
0x02BD  MODIFIER LETTER REVERSED COMMA
   @
   @
 ((@
   @
   @
   @
   @
   @@
0x037A  GREEK YPOGEGRAMMENI
   @
   @
   @
   @
   @
   @
   @
 ||@@
0x0387  GREEK ANO TELEIA
    @
  $ @
  _ @
 (_)@
    @
  $ @
    @
    @@
0x0391  GREEK CAPITAL LETTER ALPHA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0392  GREEK CAPITAL LETTER BETA
  ____  @
 |  _ \\ @
 | |_) )@
 |  _ ( @
 | |_) )@
 |____/ @
        @
        @@
0x0393  GREEK CAPITAL LETTER GAMMA
  _____ @
 |  ___)@
 | |$   @
 | |$   @
 | |    @
 |_|    @
        @
        @@
0x0394  GREEK CAPITAL LETTER DELTA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /__\\ \\ @
 /________\\@
           @
           @@
0x0395  GREEK CAPITAL LETTER EPSILON
  _____ @
 |  ___)@
 | |_   @
 |  _)  @
 | |___ @
 |_____)@
        @
        @@
0x0396  GREEK CAPITAL LETTER ZETA
  ______@
 (___  /@
    / / @
   / /  @
  / /__ @
 /_____)@
        @
        @@
0x0397  GREEK CAPITAL LETTER ETA
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 | | | |@
 |_| |_|@
        @
        @@
0x0398  GREEK CAPITAL LETTER THETA
   ____  @
  / __ \\ @
 | |__| |@
 |  __  |@
 | |__| |@
  \\____/ @
         @
         @@
0x0399  GREEK CAPITAL LETTER IOTA
  ___ @
 (   )@
  | | @
  | | @
  | | @
 (___)@
      @
      @@
0x039A  GREEK CAPITAL LETTER KAPPA
  _   __@
 | | / /@
 | |/ / @
 |   <  @
 | |\\ \\ @
 |_| \\_\\@
        @
        @@
0x039B  GREEK CAPITAL LETTER LAMDA
           @
     /\\    @
    /  \\   @
   / /\\ \\  @
  / /  \\ \\ @
 /_/    \\_\\@
           @
           @@
0x039C  GREEK CAPITAL LETTER MU
  __   __ @
 |  \\ /  |@
 |   v   |@
 | |\\_/| |@
 | |   | |@
 |_|   |_|@
          @
          @@
0x039D  GREEK CAPITAL LETTER NU
  _   _ @
 | \\ | |@
 |  \\| |@
 |     |@
 | |\\  |@
 |_| \\_|@
        @
        @@
0x039E  GREEK CAPITAL LETTER XI
  _____ @
 (_____)@
   ___  @
  (___) @
  _____ @
 (_____)@
        @
        @@
0x039F  GREEK CAPITAL LETTER OMICRON
   ___  @
  / _ \\ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03A0  GREEK CAPITAL LETTER PI
  _______ @
 (   _   )@
  | | | | @
  | | | | @
  | | | | @
  |_| |_| @
          @
          @@
0x03A1  GREEK CAPITAL LETTER RHO
  ____  @
 |  _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @
        @
        @@
0x03A3  GREEK CAPITAL LETTER SIGMA
 ______ @
 \\  ___)@
  \\ \\   @
   > >  @
  / /__ @
 /_____)@
        @
        @@
0x03A4  GREEK CAPITAL LETTER TAU
  _____ @
 (_   _)@
   | |  @
   | |  @
   | |  @
   |_|  @
        @
        @@
0x03A5  GREEK CAPITAL LETTER UPSILON
  __   __ @
 (_ \\ / _)@
   \\ v /  @
    | |   @
    | |   @
    |_|   @
          @
          @@
0x03A6  GREEK CAPITAL LETTER PHI
     _    @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    |_|   @
          @
          @@
0x03A7  GREEK CAPITAL LETTER CHI
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03A8  GREEK CAPITAL LETTER PSI
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @
          @
          @@
0x03A9  GREEK CAPITAL LETTER OMEGA
    ____   @
   / __ \\  @
  | |  | | @
  | |  | | @
  _\\ \\/ /_ @
 (___||___)@
           @
           @@
0x03B1  GREEK SMALL LETTER ALPHA
         @
         @
   __  __@
  /  \\/ /@
 ( ()  < @
  \\__/\\_\\@
         @
         @@
0x03B2  GREEK SMALL LETTER BETA
   ___  @
  / _ \\ @
 | |_) )@
 |  _ < @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03B3  GREEK SMALL LETTER GAMMA
        @
        @
  _   _ @
 ( \\ / )@
  \\ v / @
   | |  @
   | |  @
   |_|  @@
0x03B4  GREEK SMALL LETTER DELTA
    __  @
   / _) @
   \\ \\  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03B5  GREEK SMALL LETTER EPSILON
      @
      @
  ___ @
 / __)@
 > _) @
 \\___)@
      @
      @@
0x03B6  GREEK SMALL LETTER ZETA
 _____  @
 \\__  ) @
   / /  @
  / /   @
 | |__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03B7  GREEK SMALL LETTER ETA
        @
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
     |_|@@
0x03B8  GREEK SMALL LETTER THETA
   ___  @
  / _ \\ @
 | |_| |@
 |  _  |@
 | |_| |@
  \\___/ @
        @
        @@
0x03B9  GREEK SMALL LETTER IOTA
     @
     @
  _  @
 | | @
 | | @
  \\_)@
     @
     @@
0x03BA  GREEK SMALL LETTER KAPPA
       @
       @
  _  __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @
       @@
0x03BB  GREEK SMALL LETTER LAMDA
 __     @
 \\ \\    @
  \\ \\   @
   > \\  @
  / ^ \\ @
 /_/ \\_\\@
        @
        @@
0x03BC  GREEK SMALL LETTER MU
        @
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 | |    @
 |_|    @@
0x03BD  GREEK SMALL LETTER NU
       @
       @
  _  __@
 | |/ /@
 | / / @
 |__/  @
       @
       @@
0x03BE  GREEK SMALL LETTER XI
 \\=\\__  @
  > __) @
 ( (_   @
  > _)  @
 ( (__  @
  \\__ \\ @
     ) )@
    (_/ @@
0x03BF  GREEK SMALL LETTER OMICRON
        @
        @
   ___  @
  / _ \\ @
 ( (_) )@
  \\___/ @
        @
        @@
0x03C0  GREEK SMALL LETTER PI
         @
         @
  ______ @
 (  __  )@
  | || | @
  |_||_| @
         @
         @@
0x03C1  GREEK SMALL LETTER RHO
        @
        @
   ___  @
  / _ \\ @
 | |_) )@
 |  __/ @
 | |    @
 |_|    @@
0x03C2  GREEK SMALL LETTER FINAL SIGMA
        @
        @
   ____ @
  / ___)@
 ( (__  @
  \\__ \\ @
    _) )@
   (__/ @@
0x03C3  GREEK SMALL LETTER SIGMA
        @
        @
   ____ @
  /  ._)@
 ( () ) @
  \\__/  @
        @
        @@
0x03C4  GREEK SMALL LETTER TAU
      @
      @
  ___ @
 (   )@
  | | @
   \\_)@
      @
      @@
0x03C5  GREEK SMALL LETTER UPSILON
        @
        @
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @
        @@
0x03C6  GREEK SMALL LETTER PHI
     _    @
    | |   @
   _| |_  @
  /     \\ @
 ( (| |) )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C7  GREEK SMALL LETTER CHI
        @
        @
 __   __@
 \\ \\ / /@
  \\ v / @
   > <  @
  / ^ \\ @
 /_/ \\_\\@@
0x03C8  GREEK SMALL LETTER PSI
          @
          @
  _  _  _ @
 | || || |@
 | \\| |/ |@
  \\_   _/ @
    | |   @
    |_|   @@
0x03C9  GREEK SMALL LETTER OMEGA
            @
            @
   __   __  @
  / / _ \\ \\ @
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
0x03D1  GREEK THETA SYMBOL
     ___    @
    / _ \\   @
   ( (_| |_ @
  _ \\ _   _)@
 | |___| |  @
  \\_____/   @
            @
            @@
0x03D5  GREEK PHI SYMBOL
          @
          @
  _   __  @
 | | /  \\ @
 | || || )@
  \\_   _/ @
    | |   @
    |_|   @@
0x03D6  GREEK PI SYMBOL
            @
            @
  _________ @
 (  _____  )@
 | |_/ \\_| |@
  \\___^___/ @
            @
            @@
-0x0005  
alpha = a, beta = b, gamma = g, delta = d, epsilon = e   @
zeta = z, eta = h, theta = q, iota = i, lamda = l, mu = m@
nu = n, xi = x, omicron = o, pi = p, rho = r, sigma = s  @
phi = f, chi = c, psi = y, omega = w, final sigma = V    @
     pi symbol = v, theta symbol = J, phi symbol = j     @
     middle dot = :, ypogegrammeni = _                   @
     rough breathing = (, smooth breathing = )           @
     acute accent = ', grave accent = \`, dialytika = ^   @@
`,B_=`flf2a$ 8 6 14 15 16
DOOM by Frans P. de Vries <fpv@xymph.iaf.nl>  18 Jun 1996
based on Big by Glenn Chappell 4/93 -- based on Standard
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Explanation of first line:
flf2 - "magic number" for file identification
a    - should always be \`a', for now
$    - the "hardblank" -- prints as a blank, but can't be smushed
8    - height of a character
6    - height of a character, not including descenders
14   - max line length (excluding comment lines) + a fudge factor
15   - default smushmode for this font
16   - number of comment lines

$@
$@
$@
$@
$@
$@
$@
$@@
 _ @
| |@
| |@
| |@
|_|@
(_)@
   @
   @@
 _ _ @
( | )@
 V V @
  $  @
  $  @
  $  @
     @
     @@
   _  _   @
 _| || |_ @
|_  __  _|@
 _| || |_ @
|_  __  _|@
  |_||_|  @
          @
          @@
  _  @
 | | @
/ __)@
\\__ \\@
(   /@
 |_| @
     @
     @@
 _   __@
(_) / /@
   / / @
  / /  @
 / / _ @
/_/ (_)@
       @
       @@
        @
  ___   @
 ( _ )  @
 / _ \\/\\@
| (_>  <@
 \\___/\\/@
        @
        @@
 _ @
( )@
|/ @
 $ @
 $ @
 $ @
   @
   @@
  __@
 / /@
| | @
| | @
| | @
| | @
 \\_\\@
    @@
__  @
\\ \\ @
 | |@
 | |@
 | |@
 | |@
/_/ @
    @@
    _    @
 /\\| |/\\ @
 \\ \` ' / @
|_     _|@
 / , . \\ @
 \\/|_|\\/ @
         @
         @@
       @
   _   @
 _| |_ @
|_   _|@
  |_|  @
   $   @
       @
       @@
   @
   @
   @
   @
 _ @
( )@
|/ @
   @@
        @
        @
 ______ @
|______|@
    $   @
    $   @
        @
        @@
   @
   @
   @
   @
 _ @
(_)@
   @
   @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @
       @
       @@
 _____ @
|  _  |@
| |/' |@
|  /| |@
\\ |_/ /@
 \\___/ @
       @
       @@
 __  @
/  | @
\`| | @
 | | @
_| |_@
\\___/@
     @
     @@
 _____ @
/ __  \\@
\`' / /'@
  / /  @
./ /___@
\\_____/@
       @
       @@
 _____ @
|____ |@
    / /@
  $ \\ \\@
.___/ /@
\\____/ @
       @
       @@
   ___ @
  /   |@
 / /| |@
/ /_| |@
\\___  |@
    |_/@
       @
       @@
 _____ @
|  ___|@
|___ \\ @
    \\ \\@
/\\__/ /@
\\____/ @
       @
       @@
  ____ @
 / ___|@
/ /___ @
| ___ \\@
| \\_/ |@
\\_____/@
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /   @
\\_/    @
       @
       @@
 _____ @
|  _  |@
 \\ V / @
 / _ \\ @
| |_| |@
\\_____/@
       @
       @@
 _____ @
|  _  |@
| |_| |@
\\____ |@
.___/ /@
\\____/ @
       @
       @@
   @
 _ @
(_)@
 $ @
 _ @
(_)@
   @
   @@
   @
 _ @
(_)@
 $ @
 _ @
( )@
|/ @
   @@
   __@
  / /@
 / / @
< <  @
 \\ \\ @
  \\_\\@
     @
     @@
        @
 ______ @
|______|@
 ______ @
|______|@
        @
        @
        @@
__   @
\\ \\  @
 \\ \\ @
  > >@
 / / @
/_/  @
     @
     @@
 ___  @
|__ \\ @
   ) |@
  / / @
 |_|  @
 (_)  @
      @
      @@
         @
   ____  @
  / __ \\ @
 / / _\` |@
| | (_| |@
 \\ \\__,_|@
  \\____/ @
         @@
  ___  @
 / _ \\ @
/ /_\\ \\@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
______ @
| ___ \\@
| |_/ /@
| ___ \\@
| |_/ /@
\\____/ @
       @
       @@
 _____ @
/  __ \\@
| /  \\/@
| |    @
| \\__/\\@
 \\____/@
       @
       @@
______ @
|  _  \\@
| | | |@
| | | |@
| |/ / @
|___/  @
       @
       @@
 _____ @
|  ___|@
| |__  @
|  __| @
| |___ @
\\____/ @
       @
       @@
______ @
|  ___|@
| |_   @
|  _|  @
| |    @
\\_|    @
       @
       @@
 _____ @
|  __ \\@
| |  \\/@
| | __ @
| |_\\ \\@
 \\____/@
       @
       @@
 _   _ @
| | | |@
| |_| |@
|  _  |@
| | | |@
\\_| |_/@
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
 _| |_ @
 \\___/ @
       @
       @@
   ___ @
  |_  |@
  $ | |@
    | |@
/\\__/ /@
\\____/ @
       @
       @@
 _   __@
| | / /@
| |/ / @
|    \\ @
| |\\  \\@
\\_| \\_/@
       @
       @@
 _     @
| | $  @
| | $  @
| |    @
| |____@
\\_____/@
       @
       @@
___  ___@
|  \\/  |@
| .  . |@
| |\\/| |@
| |  | |@
\\_|  |_/@
        @
        @@
 _   _ @
| \\ | |@
|  \\| |@
| . \` |@
| |\\  |@
\\_| \\_/@
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
______ @
| ___ \\@
| |_/ /@
|  __/ @
| |    @
\\_|    @
       @
       @@
 _____ @
|  _  |@
| | | |@
| | | |@
\\ \\/' /@
 \\_/\\_\\@
       @
       @@
______ @
| ___ \\@
| |_/ /@
|    / @
| |\\ \\ @
\\_| \\_|@
       @
       @@
 _____ @
/  ___|@
\\ \`--. @
 \`--. \\@
/\\__/ /@
\\____/ @
       @
       @@
 _____ @
|_   _|@
  | |  @
  | |  @
  | |  @
  \\_/  @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
| | | |@
| | | |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _    _ @
| |  | |@
| |  | |@
| |/\\| |@
\\  /\\  /@
 \\/  \\/ @
        @
        @@
__   __@
\\ \\ / /@
 \\ V / @
 /   \\ @
/ /^\\ \\@
\\/   \\/@
       @
       @@
__   __@
\\ \\ / /@
 \\ V / @
  \\ /  @
  | |  @
  \\_/  @
       @
       @@
 ______@
|___  /@
  $/ / @
  / /  @
./ /___@
\\_____/@
       @
       @@
 ___ @
|  _|@
| |  @
| |  @
| |  @
| |_ @
|___|@
     @@
__     @
\\ \\    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @
       @@
 ___ @
|_  |@
  | |@
  | |@
  | |@
 _| |@
|___|@
     @@
 /\\ @
|/\\|@
  $ @
  $ @
  $ @
  $ @
    @
    @@
        @
        @
        @
        @
        @
    $   @
 ______ @
|______|@@
 _ @
( )@
 \\|@
 $ @
 $ @
 $ @
   @
   @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _     @
| |    @
| |__  @
| '_ \\ @
| |_) |@
|_.__/ @
       @
       @@
      @
      @
  ___ @
 / __|@
| (__ @
 \\___|@
      @
      @@
     _ @
    | |@
  __| |@
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
      @
      @
  ___ @
 / _ \\@
|  __/@
 \\___|@
      @
      @@
  __ @
 / _|@
| |_ @
|  _|@
| |  @
|_|  @
     @
     @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
  __/ |@
 |___/ @@
 _     @
| |    @
| |__  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
 _ @
(_)@
 _ @
| |@
| |@
|_|@
   @
   @@
   _ @
  (_)@
   _ @
  | |@
  | |@
  | |@
 _/ |@
|__/ @@
 _    @
| |   @
| | __@
| |/ /@
|   < @
|_|\\_\\@
      @
      @@
 _ @
| |@
| |@
| |@
| |@
|_|@
   @
   @@
           @
           @
 _ __ ___  @
| '_ \` _ \\ @
| | | | | |@
|_| |_| |_|@
           @
           @@
       @
       @
 _ __  @
| '_ \\ @
| | | |@
|_| |_|@
       @
       @@
       @
       @
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
       @
       @
 _ __  @
| '_ \\ @
| |_) |@
| .__/ @
| |    @
|_|    @@
       @
       @
  __ _ @
 / _\` |@
| (_| |@
 \\__, |@
    | |@
    |_|@@
      @
      @
 _ __ @
| '__|@
| |   @
|_|   @
      @
      @@
     @
     @
 ___ @
/ __|@
\\__ \\@
|___/@
     @
     @@
 _   @
| |  @
| |_ @
| __|@
| |_ @
 \\__|@
     @
     @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
       @
       @
__   __@
\\ \\ / /@
 \\ V / @
  \\_/  @
       @
       @@
          @
          @
__      __@
\\ \\ /\\ / /@
 \\ V  V / @
  \\_/\\_/  @
          @
          @@
      @
      @
__  __@
\\ \\/ /@
 >  < @
/_/\\_\\@
      @
      @@
       @
       @
 _   _ @
| | | |@
| |_| |@
 \\__, |@
  __/ |@
 |___/ @@
     @
     @
 ____@
|_  /@
 / / @
/___|@
     @
     @@
   __@
  / /@
 | | @
/ /  @
\\ \\  @
 | | @
  \\_\\@
     @@
 _ @
| |@
| |@
| |@
| |@
| |@
| |@
|_|@@
__   @
\\ \\  @
 | | @
  \\ \\@
  / /@
 | | @
/_/  @
     @@
 /\\/|@
|/\\/ @
  $  @
  $  @
  $  @
  $  @
     @
     @@
 _   _ @
(_)_(_)@
 / _ \\ @
/ /_\\ \\@
|  _  |@
\\_| |_/@
       @
       @@
 _   _ @
(_)_(_)@
|  _  |@
| | | |@
\\ \\_/ /@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
| | | |@
| | | |@
| |_| |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
  __ _ @
 / _\` |@
| (_| |@
 \\__,_|@
       @
       @@
 _   _ @
(_) (_)@
  ___  @
 / _ \\ @
| (_) |@
 \\___/ @
       @
       @@
 _   _ @
(_) (_)@
 _   _ @
| | | |@
| |_| |@
 \\__,_|@
       @
       @@
  ___  @
 / _ \\ @
| | ) |@
| |< < @
| | ) |@
| ||_/ @
\\_|    @
       @@
`,V_=`flf2a$ 9 8 15 0 20 0 16255 0
Author : myflix
Date   : 2004/9/26 12:46:52
Version: 1.0
-------------------------------------------------

-------------------------------------------------
This font has been created using JavE's FIGlet font export assistant.
Have a look at: http://www.jave.de

Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

---

Font modified June 17, 2007 by patorjk 
- Widened the space character.

Font modified May 26, 2012 by patorjk
- Switched the _ and - character (which were swapped).
- Added the 0xCA0 character
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $#
$    $##
,---. #
|   | #
|   | #
|   | #
|   | #
|  .' #
\`--'  #
.--.  #
'--'  ##
         #
,--.,--. #
\\  |\\  | #
 \`-' \`-' #
         #
         #
         #
         #
         ##
             #
   ,-. ,-.   #
   | | | |   #
,--| |-| |--.#
'--| |-| |--'#
'--| |-| |--'#
   | | | |   #
   \`-' \`-'   #
             ##
   ,-.    #
 .-| |-.  #
|  | |_/  #
\\  | |.   #
 '-| | '. #
.- | |  | #
| \`| |  / #
 \`-| |'\`  #
   \`-'    ##
      ,-. #
 ,--. / / #
 '--'/ /  #
    / /   #
   / /    #
  / /     #
 / / ,--. #
/ /  '--' #
\`-'       ##
             #
 .-----.     #
/  .-.  \\    #
|  \\_.' /    #
/  .-. ',-.  #
| |   | . /_ #
\\  '-'  _.__)#
 \`----''     #
             ##
     #
,--. #
\\  | #
 \`-' #
     #
     #
     #
     #
     ##
  ,-. #
 /  | #
'  .' #
|  |  #
|  |  #
|  |  #
'  '. #
 \\  | #
  \`-' ##
,-.   #
|  \\  #
'.  ' #
 |  | #
 |  | #
 |  | #
.'  ' #
|  /  #
\`-'   ##
            #
    .-.     #
 .-,| |,-.  #
 _\\ ' ' /_  #
(__     __) #
  / . . \\   #
 \`-'| |\`-'  #
    \`-'     #
            ##
            #
            #
    ,-.     #
    | |     #
,---| |---. #
'---| |---' #
    | |     #
    \`-'     #
            ##
    #
    #
    #
    #
    #
    #
    #
.-. #
',/ ##
          #
          #
          #
   .-')   #
 _(  OO)  #
(,------. #
 '------' #
          #
          ##
    #
    #
    #
    #
    #
    #
    #
.-. #
\`-' ##
      ,-. #
      / / #
     / /  #
    / /   #
   / /    #
  / /     #
 / /      #
/ /       #
\`-'       ##
           #
           #
  .----.   #
 /  ..  \\  #
.  /  \\  . #
|  |  '  | #
'  \\  /  ' #
 \\  \`'  /  #
  \`---''   ##
       #
       #
 .---. #
/_   | #
 |   | #
 |   | #
 |   | #
 |   | #
 \`---' ##
          #
          #
 .-----.  #
/ ,-.   \\ #
'-'  |  | #
   .'  /  #
 .'  /__  #
|       | #
\`-------' ##
          #
          #
 .-----.  #
/  -.   \\ #
'-' _'  | #
   |_  <  #
.-.  |  | #
\\ \`-'   / #
 \`----''  ##
            #
            #
    .---.   #
   / .  |   #
  / /|  |   #
 / / |  |_  #
/  '-'    | #
\`----|  |-' #
     \`--'   ##
          #
          #
.------.  #
|   ___|  #
|  '--.   #
\`---.  '. #
.-   |  | #
| \`-'   / #
 \`----''  ##
          #
          #
  ,--.    #
 /  .'    #
.  / -.   #
| .-.  '  #
' \\  |  | #
\\  \`'  /  #
 \`----'   ##
           #
           #
.--------. #
|   __   ' #
\`--' .  /  #
    /  /   #
   .  /    #
  /  /     #
 \`--'      ##
            #
            #
  .-----.   #
 /  .-.  \\  #
|   \\_.' /  #
 /  .-. '.  #
|  |   |  | #
 \\  '-'  /  #
  \`----''   ##
           #
           #
  .----.   #
 /  ,.  \\  #
|  |  \\  | #
 '  \`-'  ' #
  \`- /  '  #
   ,'  /   #
  \`---'    ##
    #
    #
.-. #
\`-' #
    #
.-. #
\`-' #
    #
    ##
    #
    #
.-. #
'-' #
    #
.-. #
',/ #
    #
    ##
       #
   ,-. #
  / /  #
 / /   #
/ /    #
\\ \\    #
 \\ \\   #
  \\ \\  #
   \`-' ##
        #
        #
,-----. #
'-----' #
        #
,-----. #
'-----' #
        #
        ##
       #
,-.    #
 \\ \\   #
  \\ \\  #
   \\ \\ #
   / / #
  / /  #
 / /   #
\`-'    ##
 ,------.  #
'  .--.  ' #
|  |  |  | #
'--'  |  | #
    __.  | #
   |   .'  #
   |___|   #
   .---.   #
   '---'   ##
          #
          #
   ____   #
 .' __ \\  #
/ .'  \\ | #
| | (_/ | #
\\ \`.__.'\\ #
 \`.___ .' #
          ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
,----. #
|    | #
|  .-' #
|  |   #
|  |   #
|  |   #
|  '-. #
|    | #
\`----' ##
,-.       #
\\ \\       #
 \\ \\      #
  \\ \\     #
   \\ \\    #
    \\ \\   #
     \\ \\  #
      \\ \\ #
      \`-' ##
,----. #
|    | #
\`-.  | #
  |  | #
  |  | #
  |  | #
.-'  | #
|    | #
\`----' ##
          #
          #
  ,---.   #
 /  \\  \\  #
\`--' \`--' #
          #
          #
          #
          ##
          #
          #
          #
          #
          #
  (\`-.    #
 (OO  )_  #
,------.) #
\`------'  ##
       #
       #
,--.   #
'.  \\  #
  \`--' #
       #
       #
       #
       ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
.-. .-')   #
\\  ( OO )  #
 ;-----.\\  #
 | .-.  |  #
 | '-' /_) #
 | .-. \`.  #
 | |  \\  | #
 | '--'  / #
 \`------'  ##
            #
            #
   .-----.  #
  '  .--./  #
  |  |('-.  #
 /_) |OO  ) #
 ||  |\`-'|  #
(_'  '--'\\  #
   \`-----'  ##
 _ .-') _   #
( (  OO) )  #
 \\     .'_  #
 ,\`'--..._) #
 |  |  \\  ' #
 |  |   ' | #
 |  |   / : #
 |  '--'  / #
 \`-------'  ##
   ('-.   #
 _(  OO)  #
(,------. #
 |  .---' #
 |  |     #
(|  '--.  #
 |  .--'  #
 |  \`---. #
 \`------' ##
            #
            #
   ,------. #
('-| _.---' #
(OO|(_\\     #
/  |  '--.  #
\\_)|  .--'  #
  \\|  |_)   #
   \`--'     ##
             #
             #
  ,----.     #
 '  .-./-')  #
 |  |_( O- ) #
 |  | .--, \\ #
(|  | '. (_/ #
 |  '--'  |  #
  \`------'   ##
 ('-. .-. #
( OO )  / #
,--. ,--. #
|  | |  | #
|   .|  | #
|       | #
|  .-.  | #
|  | |  | #
\`--' \`--' ##
          #
          #
  ,-.-')  #
  |  |OO) #
  |  |  \\ #
  |  |(_/ #
 ,|  |_.' #
(_|  |    #
  \`--'    ##
          #
          #
     ,--. #
 .-')| ,| #
( OO |(_| #
| \`-'|  | #
,--. |  | #
|  '-'  / #
 \`-----'  ##
.-. .-')   #
\\  ( OO )  #
,--. ,--.  #
|  .'   /  #
|      /,  #
|     ' _) #
|  .   \\   #
|  |\\   \\  #
\`--' '--'  ##
           #
           #
 ,--.      #
 |  |.-')  #
 |  | OO ) #
 |  |\`-' | #
(|  '---.' #
 |      |  #
 \`------'  ##
 _   .-')    #
( '.( OO )_  #
 ,--.   ,--.)#
 |   \`.'   | #
 |         | #
 |  |'.'|  | #
 |  |   |  | #
 |  |   |  | #
 \`--'   \`--' ##
     .-') _  #
    ( OO ) ) #
,--./ ,--,'  #
|   \\ |  |\\  #
|    \\|  | ) #
|  .     |/  #
|  |\\    |   #
|  | \\   |   #
\`--'  \`--'   ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
   _ (\`-.  #
  ( (OO  ) #
 _.\`     \\ #
(__...--'' #
 |  /  | | #
 |  |_.' | #
 |  .___.' #
 |  |      #
 \`--'      ##
     .-')    #
   .(  OO)   #
  (_)---\\_)  #
  '  .-.  '  #
 ,|  | |  |  #
(_|  | |  |  #
  |  | |  |  #
  '  '-'  '-.#
   \`-----'--'##
 _  .-')   #
( \\( -O )  #
 ,------.  #
 |   /\`. ' #
 |  /  | | #
 |  |_.' | #
 |  .  '.' #
 |  |\\  \\  #
 \`--' '--' ##
  .-')    #
 ( OO ).  #
(_)---\\_) #
/    _ |  #
\\  :\` \`.  #
 '..\`''.) #
.-._)   \\ #
\\       / #
 \`-----'  ##
 .-') _    #
(  OO) )   #
/     '._  #
|'--...__) #
'--.  .--' #
   |  |    #
   |  |    #
   |  |    #
   \`--'    ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
      (\`-.   #
    _(OO  )_ #
,--(_/   ,. \\#
\\   \\   /(__/#
 \\   \\ /   / #
  \\   '   /, #
   \\     /__)#
    \\   /    #
     \`-'     ##
  (\`\\ .-') /\`#
   \`.( OO ),'#
,--./  .--.  #
|      |  |  #
|  |   |  |, #
|  |.'.|  |_)#
|         |  #
|   ,'.   |  #
'--'   '--'  ##
) (\`-.      #
 ( OO ).    #
(_/.  \\_)-. #
 \\  \`.'  /  #
  \\     /\\  #
   \\   \\ |  #
  .'    \\_) #
 /  .'.  \\  #
'--'   '--' ##
             #
             #
  ,--.   ,--.#
   \\  \`.'  / #
 .-')     /  #
(OO  \\   /   #
 |   /  /\\_  #
 \`-./  /.__) #
   \`--'      ##
   .-') _  #
  (  OO) ) #
,(_)----.  #
|       |  #
'--.   /   #
(_/   /    #
 /   /___  #
|        | #
\`--------' ##
   ,--. #
  |   | #
  |  .' #
 .'  /  #
<   <   #
 \`.  \\  #
  |  '. #
  |   | #
   \`--' ##
,-. #
| | #
| | #
| | #
| | #
| | #
| | #
| | #
\`-' ##
,--.    #
|   |   #
'.  |   #
  \\  \`  #
   >  > #
  /  .  #
.'  |   #
|   |   #
\`--'    ##
           #
      .--, #
  .--'  /  #
 /  ---\`   #
\`--'       #
           #
           #
           #
           ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
   ('-.     #
  ( OO ).-. #
  / . --. / #
  | \\-.  \\  #
.-'-'  |  | #
 \\| |_.'  | #
  |  .-.  | #
  |  | |  | #
  \`--' \`--' ##
             #
             #
 .-'),-----. #
( OO'  .-.  '#
/   |  | |  |#
\\_) |  |\\|  |#
  \\ |  | |  |#
   \`'  '-'  '#
     \`-----' ##
             #
             #
 ,--. ,--.   #
 |  | |  |   #
 |  | | .-') #
 |  |_|( OO )#
 |  | | \`-' /#
('  '-'(_.-' #
  \`-----'    ##
�#
 #
 #
 #
 #
 #
 #
 #
 ##
0xCA0  KANNADA LETTER TTHA
          #
          #
  _ _ _ _)#
 |______/ #
 ,-----.  #
'  .-.  ' #
|  | |  | #
'  '-'  ' #
 \`-----'  ##`,K_=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`,k_=`flf2a$ 5 4 13 15 10 0 22415
Small by Glenn Chappell 4/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
      @@
    _ _   @
  _| | |_ @
 |_  .  _|@
 |_     _|@
   |_|_|  @@
     @
  ||_@
 (_-<@
 / _/@
  || @@
  _  __ @
 (_)/ / @
   / /_ @
  /_/(_)@
        @@
  __     @
 / _|___ @
 > _|_ _|@
 \\_____| @
         @@
  _ @
 ( )@
 |/ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
 /_/ @@
     @
 _/\\_@
 >  <@
  \\/ @
     @@
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
  _ @
 ( )@
 |/ @@
      @
  ___ @
 |___|@
   $  @
      @@
    @
    @
  _ @
 (_)@
    @@
    __@
   / /@
  / / @
 /_/  @
      @@
   __  @
  /  \\ @
 | () |@
  \\__/ @
       @@
  _ @
 / |@
 | |@
 |_|@
    @@
  ___ @
 |_  )@
  / / @
 /___|@
      @@
  ____@
 |__ /@
  |_ \\@
 |___/@
      @@
  _ _  @
 | | | @
 |_  _|@
   |_| @
       @@
  ___ @
 | __|@
 |__ \\@
 |___/@
      @@
   __ @
  / / @
 / _ \\@
 \\___/@
      @@
  ____ @
 |__  |@
   / / @
  /_/  @
       @@
  ___ @
 ( _ )@
 / _ \\@
 \\___/@
      @@
  ___ @
 / _ \\@
 \\_, /@
  /_/ @
      @@
  _ @
 (_)@
  _ @
 (_)@
    @@
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 < < @
  \\_\\@
     @@
      @
  ___ @
 |___|@
 |___|@
      @@
 __  @
 \\ \\ @
  > >@
 /_/ @
     @@
  ___ @
 |__ \\@
   /_/@
  (_) @
      @@
   ____  @
  / __ \\ @
 / / _\` |@
 \\ \\__,_|@
  \\____/ @@
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  ___ @
 | _ )@
 | _ \\@
 |___/@
      @@
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
  ___  @
 |   \\ @
 | |) |@
 |___/ @
       @@
  ___ @
 | __|@
 | _| @
 |___|@
      @@
  ___ @
 | __|@
 | _| @
 |_|  @
      @@
   ___ @
  / __|@
 | (_ |@
  \\___|@
       @@
  _  _ @
 | || |@
 | __ |@
 |_||_|@
       @@
  ___ @
 |_ _|@
  | | @
 |___|@
      @@
     _ @
  _ | |@
 | || |@
  \\__/ @
       @@
  _  __@
 | |/ /@
 | ' < @
 |_|\\_\\@
       @@
  _    @
 | |   @
 | |__ @
 |____|@
       @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 |_|  |_|@
         @@
  _  _ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  ___ @
 | _ \\@
 |  _/@
 |_|  @
      @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__\\_\\@
        @@
  ___ @
 | _ \\@
 |   /@
 |_|_\\@
      @@
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _____ @
 |_   _|@
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
 __      __@
 \\ \\    / /@
  \\ \\/\\/ / @
   \\_/\\_/  @
           @@
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
  ____@
 |_  /@
  / / @
 /___|@
      @@
  __ @
 | _|@
 | | @
 | | @
 |__|@@
 __   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
  __ @
 |_ |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
     @@
      @
      @
      @
  ___ @
 |___|@@
  _ @
 ( )@
  \\|@
  $ @
    @@
       @
  __ _ @
 / _\` |@
 \\__,_|@
       @@
  _    @
 | |__ @
 | '_ \\@
 |_.__/@
       @@
     @
  __ @
 / _|@
 \\__|@
     @@
     _ @
  __| |@
 / _\` |@
 \\__,_|@
       @@
      @
  ___ @
 / -_)@
 \\___|@
      @@
   __ @
  / _|@
 |  _|@
 |_|  @
      @@
       @
  __ _ @
 / _\` |@
 \\__, |@
 |___/ @@
  _    @
 | |_  @
 | ' \\ @
 |_||_|@
       @@
  _ @
 (_)@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
  _/ |@
 |__/ @@
  _   @
 | |__@
 | / /@
 |_\\_\\@
      @@
  _ @
 | |@
 | |@
 |_|@
    @@
        @
  _ __  @
 | '  \\ @
 |_|_|_|@
        @@
       @
  _ _  @
 | ' \\ @
 |_||_|@
       @@
      @
  ___ @
 / _ \\@
 \\___/@
      @@
       @
  _ __ @
 | '_ \\@
 | .__/@
 |_|   @@
       @
  __ _ @
 / _\` |@
 \\__, |@
    |_|@@
      @
  _ _ @
 | '_|@
 |_|  @
      @@
     @
  ___@
 (_-<@
 /__/@
     @@
  _   @
 | |_ @
 |  _|@
  \\__|@
      @@
       @
  _  _ @
 | || |@
  \\_,_|@
       @@
      @
 __ __@
 \\ V /@
  \\_/ @
      @@
         @
 __ __ __@
 \\ V  V /@
  \\_/\\_/ @
         @@
      @
 __ __@
 \\ \\ /@
 /_\\_\\@
      @@
       @
  _  _ @
 | || |@
  \\_, |@
  |__/ @@
     @
  ___@
 |_ /@
 /__|@
     @@
    __@
   / /@
 _| | @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | |_@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
      @@
  _  _ @
 (_)(_)@
  /--\\ @
 /_/\\_\\@
       @@
  _  _ @
 (_)(_)@
 / __ \\@
 \\____/@
       @@
  _   _ @
 (_) (_)@
 | |_| |@
  \\___/ @
        @@
  _  _ @
 (_)(_)@
 / _\` |@
 \\__,_|@
       @@
  _   _ @
 (_)_(_)@
  / _ \\ @
  \\___/ @
        @@
  _  _ @
 (_)(_)@
 | || |@
  \\_,_|@
       @@
   ___ @
  / _ \\@
 | |< <@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 |_|@
    @@
162  CENT SIGN
     @
  || @
 / _)@
 \\ _)@
  || @@
163  POUND SIGN
    __  @
  _/ _\\ @
 |_ _|_ @
 (_,___|@
        @@
164  CURRENCY SIGN
 /\\_/\\@
 \\ . /@
 / _ \\@
 \\/ \\/@
      @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
 | |@
 |_|@@
167  SECTION SIGN
    __ @
   / _)@
  /\\ \\ @
  \\ \\/ @
 (__/  @@
168  DIAERESIS
  _  _ @
 (_)(_)@
  $  $ @
  $  $ @
       @@
169  COPYRIGHT SIGN
   ____  @
  / __ \\ @
 / / _| \\@
 \\ \\__| /@
  \\____/ @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 < < < @
  \\_\\_\\@
       @@
172  NOT SIGN
  ____ @
 |__  |@
    |_|@
   $   @
       @@
173  SOFT HYPHEN
     @
  __ @
 |__|@
   $ @
     @@
174  REGISTERED SIGN
   ____  @
  / __ \\ @
 / | -) \\@
 \\ ||\\\\ /@
  \\____/ @@
175  MACRON
  ___ @
 |___|@
   $  @
   $  @
      @@
176  DEGREE SIGN
  _ @
 /.\\@
 \\_/@
  $ @
    @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@@
178  SUPERSCRIPT TWO
  __ @
 |_ )@
 /__|@
   $ @
     @@
179  SUPERSCRIPT THREE
  ___@
 |_ /@
 |__)@
   $ @
     @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
    @@
181  MICRO SIGN
       @
  _  _ @
 | || |@
 | .,_|@
 |_|   @@
182  PILCROW SIGN
  ____ @
 /    |@
 \\_ | |@
  |_|_|@
       @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
    @@
184  CEDILLA
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  > > >@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _  __   @
 / |/ /__ @
 |_/ /_' |@
  /_/  |_|@
          @@
189  VULGAR FRACTION ONE HALF
  _  __  @
 / |/ /_ @
 |_/ /_ )@
  /_//__|@
         @@
190  VULGAR FRACTION THREE QUARTERS
  ___ __   @
 |_ // /__ @
 |__) /_' |@
   /_/  |_|@
           @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
  __   @
  \\_\\  @
  /--\\ @
 /_/\\_\\@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __ @
   /_/ @
  /--\\ @
 /_/\\_\\@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   /\\  @
  |/\\| @
  /--\\ @
 /_/\\_\\@
       @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/|@
  |/\\/ @
  /--\\ @
 /_/\\_\\@
       @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _  _ @
 (_)(_)@
  /--\\ @
 /_/\\_\\@
       @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
   __  @
  (()) @
  /--\\ @
 /_/\\_\\@
       @@
198  LATIN CAPITAL LETTER AE
    ____ @
   /, __|@
  / _ _| @
 /_/|___|@
         @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
  __ @
  \\_\\@
 | -<@
 |__<@
     @@
201  LATIN CAPITAL LETTER E WITH ACUTE
   __@
  /_/@
 | -<@
 |__<@
     @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
  /\\ @
 |/\\|@
 | -<@
 |__<@
     @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _  _ @
 (_)(_)@
  | -< @
  |__< @
       @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
   ____  @
  | __ \\ @
 |_ _|) |@
  |____/ @
         @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
  __   @
  \\_\\_ @
 / __ \\@
 \\____/@
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __ @
  _/_/ @
 / __ \\@
 \\____/@
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 / __ \\@
 \\____/@
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/|@
  |/\\/ @
 / __ \\@
 \\____/@
       @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _  _ @
 (_)(_)@
 / __ \\@
 \\____/@
       @@
215  MULTIPLICATION SIGN
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
 _/_/_@
 \\ V /@
  |_| @
      @@
222  LATIN CAPITAL LETTER THORN
  _   @
 | |_ @
 | -_)@
 |_|  @
      @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |< <@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
  __   @
  \\_\\_ @
 / _\` |@
 \\__,_|@
       @@
225  LATIN SMALL LETTER A WITH ACUTE
    __ @
  _/_/ @
 / _\` |@
 \\__,_|@
       @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 / _\` |@
 \\__,_|@
       @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/|@
  |/\\/ @
 / _\` |@
 \\__,_|@
       @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _  _ @
 (_)(_)@
 / _\` |@
 \\__,_|@
       @@
229  LATIN SMALL LETTER A WITH RING ABOVE
   __  @
  (()) @
 / _\` |@
 \\__,_|@
       @@
230  LATIN SMALL LETTER AE
         @
  __ ___ @
 / _\` -_)@
 \\__,___|@
         @@
231  LATIN SMALL LETTER C WITH CEDILLA
     @
  __ @
 / _|@
 \\__|@
  )_)@@
232  LATIN SMALL LETTER E WITH GRAVE
  __  @
  \\_\\ @
 / -_)@
 \\___|@
      @@
233  LATIN SMALL LETTER E WITH ACUTE
   __ @
  /_/ @
 / -_)@
 \\___|@
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 / -_)@
 \\___|@
      @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / -_) @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
  \\\\/\\ @
  \\/\\\\ @
 / _\` |@
 \\___/ @
       @@
241  LATIN SMALL LETTER N WITH TILDE
  /\\/| @
 |/\\/  @
 | ' \\ @
 |_||_|@
       @@
242  LATIN SMALL LETTER O WITH GRAVE
  __  @
  \\_\\ @
 / _ \\@
 \\___/@
      @@
243  LATIN SMALL LETTER O WITH ACUTE
   __ @
  /_/ @
 / _ \\@
 \\___/@
      @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 / _ \\@
 \\___/@
      @@
245  LATIN SMALL LETTER O WITH TILDE
  /\\/|@
 |/\\/ @
 / _ \\@
 \\___/@
      @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
  \\___/ @
        @@
247  DIVISION SIGN
   _  @
  (_) @
 |___|@
  (_) @
      @@
248  LATIN SMALL LETTER O WITH STROKE
      @
  ___ @
 / //\\@
 \\//_/@
      @@
249  LATIN SMALL LETTER U WITH GRAVE
  __   @
  \\_\\_ @
 | || |@
  \\_,_|@
       @@
250  LATIN SMALL LETTER U WITH ACUTE
    __ @
  _/_/ @
 | || |@
  \\_,_|@
       @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   /\\  @
  |/\\| @
 | || |@
  \\_,_|@
       @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _  _ @
 (_)(_)@
 | || |@
  \\_,_|@
       @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __ @
  _/_/ @
 | || |@
  \\_, |@
  |__/ @@
254  LATIN SMALL LETTER THORN
  _    @
 | |__ @
 | '_ \\@
 | .__/@
 |_|   @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _  _ @
 (_)(_)@
 | || |@
  \\_, |@
  |__/ @@
`,Z_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;var Y_=()=>{const n=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[a-zA-Z\\d]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");return new RegExp(n,"g")},j_=n=>typeof n=="string"?n.replace(Y_(),""):n,z_=n=>Number.isNaN(n)?!1:n>=4352&&(n<=4447||n===9001||n===9002||11904<=n&&n<=12871&&n!==12351||12880<=n&&n<=19903||19968<=n&&n<=42182||43360<=n&&n<=43388||44032<=n&&n<=55203||63744<=n&&n<=64255||65040<=n&&n<=65049||65072<=n&&n<=65131||65281<=n&&n<=65376||65504<=n&&n<=65510||110592<=n&&n<=110593||127488<=n&&n<=127569||131072<=n&&n<=262141),J=n=>{if(typeof n!="string"||n.length===0)return 0;n=j_(n);let I=0;for(let A=0;A<n.length;A++){const r=n.codePointAt(A);r<=31||r>=127&&r<=159||r>=768&&r<=879||(r>65535&&A++,I+=z_(r)?2:1)}return I},J_=function(n,I){var A={first:["/","\\"],middle:["|","|"],last:["\\","/"],only:["<",">"]};return M_(n,I,A)},Q_=function(n,I){var A={first:["(",")"],middle:["(",")"],last:["(",")"],only:["(",")"]};return M_(n,I,A)};function M_(n,I,A){var r=q_(n,I),a=_n(r),O;if(r.length===1)O=[" "+A_(a),A.only[0]+" "+r[0]+" "+A.only[1]," "+s_(a)];else{O=[" "+A_(a)];for(var R=0,H=r.length;R<H;R+=1){var m;R===0?m=A.first:R===H-1?m=A.last:m=A.middle,O.push(m[0]+" "+nn(r[R],a)+" "+m[1])}O.push(" "+s_(a))}return O.join(`
`)}function q_(n,I){n=n.replace(/\r\n?|[\n\u2028\u2029]/g,`
`).replace(/^\uFEFF/,"").replace(/\t/g,"        ");var A=[];if(!I)A=n.split(`
`);else for(var r=0;r<n.length;){var a=n.indexOf(`
`,r),O=Math.min(r+I,a===-1?n.length:a);A.push(n.substring(r,O)),r=O,n.charAt(r)===`
`&&(r+=1)}return A}function _n(n){for(var I=0,A=0,r=n.length;A<r;A+=1)J(n[A])>I&&(I=J(n[A]));return I}function nn(n,I){return n+new Array(I-J(n)+1).join(" ")}function A_(n){return new Array(n+3).join("_")}function s_(n){return new Array(n+3).join("-")}var tn={say:J_,think:Q_},en=function(n,I){var A=r_(I.eyes),r=A.charAt(0),a=A.charAt(1),O=r_(I.tongue);return n.indexOf("$the_cow")!==-1&&(n=$n(n)),n.replace(/\$thoughts/g,I.thoughts).replace(/\$eyes/g,A).replace(/\$tongue/g,O).replace(/\$\{eyes\}/g,A).replace(/\$eye/,r).replace(/\$eye/,a).replace(/\$\{tongue\}/g,O)};function r_(n){return n&&n.replace?n.replace(/\$/g,"$$$$"):n}function $n(n){n=n.replace(/\r\n?|[\n\u2028\u2029]/g,`
`).replace(/^\uFEFF/,"");var I=/\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(n);return I?I[1].replace(/\\{2}/g,"\\").replace(/\\@/g,"@").replace(/\\\$/g,"$"):(console.error(`Cannot parse cow file
`,n),n)}var a_={b:{eyes:"==",tongue:"  "},d:{eyes:"xx",tongue:"U "},g:{eyes:"$$",tongue:"  "},p:{eyes:"@@",tongue:"  "},s:{eyes:"**",tongue:"U "},t:{eyes:"--",tongue:"  "},w:{eyes:"OO",tongue:"  "},y:{eyes:"..",tongue:"  "}},on=function(n){for(var I in a_)if(n[I]===!0)return a_[I];return{eyes:n.e||"oo",tongue:n.T||"  "}},l_=`$the_cow = <<"EOC";
        $thoughts   ^__^
         $thoughts  ($eyes)\\\\_______
            (__)\\\\       )\\\\/\\\\
             $tongue ||----w |
                ||     ||
EOC
`,Tn=`# Admiral Ackbar
#
# based on 'ack --bar' from http://beyondgrep.com/
$the_cow = <<EOC;
         $thoughts
          $thoughts
                      ?IIIIIII7II?????+
                   ~III777II777I?+==++==+:
                  ???I7I???I7II++=====++===
                 ??+??????????+===~~=+++??==+
                ??+??II??????+==~=~~=+++++==++
               I+?????????+?+====~=~==+==++?==?
              ?????II?????+++++=======?===~~~~==
            ,?????II????????++++====~===::~~~~:~
            I?I??II?+++??+?+++==~~~~:~:~:,:,,:::~
           I??????+==+???++++=~~:~:~:,:::,:,,,,,::
          +I?++++=+=+????+++=~~:~~:::,,,,::,,,:,:
          I??+?+====+???+++===~~::::,::,:,,,,,,::
         I????=~===++?+=+=~==~:~~:,,,,,,,.,,,,,:~
        =??+?=~~~~??+?+===~~==,==~~~~,,,,..,,,.:=
        II++==~~=++++++=~~=~,~+=?+?=I?++=..,.,,:
     IIII?+?=====+~+++~=~~~:::=~+~===:,,,,,.,.::
    I?=?I+??+=~=~?I?=+=~~~::,~~=~::~=::,,,,,,::
    ?+I??++=++~,::+++~~~:::,,=~~=,~,..,::.:
    ++=+?++~=:~::I+,~=:~,:,,,,:~~......::~,,,
     ~=~=:.++~:,.,~=::::.,,:,.:~,:=...==~,::
     =~?++??+=~~,.:?~.:,:,,,.,::,,~:=~=::,~
     ++~~:~===~:~,.~::,~=~.:,..,:,,:==:.,:7
     ~~,::...:=:,::+:~:.,~,...,.,,,,::~,,::~=
      =~===+=~~,.::,,,:::,..,,,,,,,,,,,:,..,=+?
      ~=~=~::~~~::,.,,,~:.+,..,,,,..,,,,...,+I?
      ~==~:~~:~~,~=~~:,:~,:,,,,,,....,,,..+?I?I
      ~=~=+,:~:=,:~~~~~~::::,.,,.,,.,,,..~+????I
      ~=~==~=:~~:,~~~~~:::,::,.,,,..,,,I77I?+??II
      +I7:::~~=~:,::~~~~.=.,~,,,,...,~7III?+??II7
     777?+~:=~=~~:,::~~:::.,,,,,,,,,777II??I777777
     777I==:=~::~~~~::~:::,:,:~:::,777I???777777777
    7777+,~===~:~:~~~~:::,.~:=,,:777II???77777777777=?
    777I~,~~~=~::~:,:,,,:=~~,,:7777I???I7777777777+=++
  I7777I,,:,.==::::,:,,,,::::7777I+??I77777777777??I7I7,
 ,77777I::,..~~:,,,,,,.,:~I7777I+??I777777777777?I7777777,
 77777777,...~~:,,,,,.,77777I7???II777777777777+?7777777777
77777777777:,~~~,,=7777777I???II777777777777777+77777777777
77777777777777777777777I+7?7II77777777777777777+777777777777
EOC

`,En=`# Aperture Science logo, without the text inside
# via http://pastebin.com/1AZwKrKp 
$the_cow = <<EOC;
    $thoughts
     $thoughts
              .,-:;//;:=,
          . :H\\@\\@\\@MM\\@M#H/.,+%;,
       ,/X+ +M\\@\\@M\\@MM%=,-%HMMM\\@X/,
     -+\\@MM; \\$M\\@\\@MH+-,;XMMMM\\@MMMM\\@+-
    ;\\@M\\@\\@M- XM\\@X;. -+XXXXXHHH\\@M\\@M#\\@/.
  ,%MM\\@\\@MH ,\\@%=            .---=-=:=,.
  =\\@#\\@\\@\\@MX .,              -%HX\\$\\$%%%+;
 =-./\\@M\\@M\\$                  .;\\@MMMM\\@MM:
 X\\@/ -\\$MM/                    .+MM\\@\\@\\@M\\$
,\\@M\\@H: :\\@:                    . =X#\\@\\@\\@\\@-
,\\@\\@\\@MMX, .                    /H- ;\\@M\\@M=
.H\\@\\@\\@\\@M\\@+,                    %MM+..%#\\$.
 /MMMM\\@MMH/.                  XM\\@MH; =;
  /%+%\\$XHH\\@\\$=              , .H\\@\\@\\@\\@MX,
   .=--------.           -%H.,\\@\\@\\@\\@\\@MX,
   .%MM\\@\\@\\@HHHXX\\$\\$\\$%+- .:\\$MMX =M\\@\\@MM%.
     =XMMM\\@MM\\@MM#H;,-+HMM\\@M+ /MMMX=
       =%\\@M\\@M#\\@\\$-.=\\$\\@MM\\@\\@\\@M; %M%=
         ,:+\\$+-,/H#MMMMMMM\\@= =,
               =++%%%%+/:-.
EOC
`,Ln=`# Aperture Science logo
# via http://pastebin.com/1AZwKrKp 
$the_cow = <<EOC;
    $thoughts
     $thoughts
              .,-:;//;:=,
          . :H\\@\\@\\@MM\\@M#H/.,+%;,
       ,/X+ +M\\@\\@M\\@MM%=,-%HMMM\\@X/,
     -+\\@MM; \\$M\\@\\@MH+-,;XMMMM\\@MMMM\\@+-
    ;\\@M\\@\\@M- XM\\@X;. -+XXXXXHHH\\@M\\@M#\\@/.
  ,%MM\\@\\@MH ,\\@%=            .---=-=:=,.
  =\\@#\\@\\@\\@MX .,      WE      -%HX\\$\\$%%%+;
 =-./\\@M\\@M\\$         DO       .;\\@MMMM\\@MM:
 X\\@/ -\\$MM/        WHAT        .+MM\\@\\@\\@M\\$
,\\@M\\@H: :\\@:         WE         . =X#\\@\\@\\@\\@-
,\\@\\@\\@MMX, .        MUST        /H- ;\\@M\\@M=
.H\\@\\@\\@\\@M\\@+,      BECAUSE       %MM+..%#\\$.
 /MMMM\\@MMH/.       WE         XM\\@MH; =;
  /%+%\\$XHH\\@\\$=     CAN      , .H\\@\\@\\@\\@MX,
   .=--------.           -%H.,\\@\\@\\@\\@\\@MX,
   .%MM\\@\\@\\@HHHXX\\$\\$\\$%+- .:\\$MMX =M\\@\\@MM%.
     =XMMM\\@MM\\@MM#H;,-+HMM\\@M+ /MMMX=
       =%\\@M\\@M#\\@\\$-.=\\$\\@MM\\@\\@\\@M; %M%=
         ,:+\\$+-,/H#MMMMMMM\\@= =,
               =++%%%%+/:-.
EOC
`,hn=`# armadillo
#
# based on http://ascii.co.uk/art/armadillo
$the_cow = <<EOC;
         $thoughts
          $thoughts
               ,.-----__
            ,:::://///,:::-.
           /:''/////// \`\`:::\`;/|/
          /'   ||||||     :://'\`\\\\
        .' ,   ||||||     \`/(  e \\\\
  -===~__-'\\\\__X_\`\`\`\`\`\\\\_____/~\`-._ \`.
              ~~        ~~       \`~-'
EOC

`,In=`# ATAT
# from http://www.asciiworld.com/-Robots,24-.html (accessed 4/30/2014)
$the_cow = <<EOC;
  $thoughts                         ________
   $thoughts                    _.-Y  |  |  Y-.,_
    $thoughts                .-"   |  |  |  ||   "~-.      
          _____     |""[]"|" !""! "|"=="" "I      
       .-"{-. "I----]_   :|------..| []  __L      
      P-=}=(r\\_I]_[L__] _l|______l |..  |___I     
      ^-=\\[_c=-'  ~j______[________]_L______L]    
                    [_L--.\\_==I|I==/.--.j_I_/     
                      j)==(["-----\`])==((_]       
                       I--I"~~"""~~"I--I          
                       |[]|         |[]|          
                       j__l         j__l          
                       |!!|         |!!|          
                       |..|         |..|         
                       )[](         )[](          
                       ]--[         ]--[          
                       [L_]         [L_]          
                      /|..|\\       /|..|\\         
                     '={--}=\`     '={--}=\`        
                    .-^-r--^-.   .-^-r--^-.       
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Modified ATAT from Row  (the Ascii-Wizard of Oz)
EOC
`,An=`# atom
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
       $thoughts
        $thoughts
                  =/;;/-
                 +:    //
                /;      /;
               -X        H.
 .//;;;:;;-,   X=        :+   .-;:=;:;%;.
 M-       ,=;;;#:,      ,:#;;:=,       ,\\@
 :%           :%.=/++++/=.\\$=           %=
  ,%;         %/:+/;,,/++:+/         ;+.
    ,+/.    ,;\\@+,        ,%H;,    ,/+,
       ;+;;/= \\@.  .H##X   -X :///+;
       ;+=;;;.\\@,  .XM\\@\\$.  =X.//;=%/.
    ,;:      :\\@%=        =\\$H:     .+%-
  ,%=         %;-///==///-//         =%,
 ;+           :%-;;;:;;;;-X-           +:
 \\@-      .-;;;;M-        =M/;;;-.      -X
  :;;::;;-.    %-        :+    ,-;;-;:==
               ,X        H.
                ;/      %=
                 //    +;
                  ,////,

EOC
`,sn=`# awesome face
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
    $thoughts
     $thoughts
                  \\#[/[#:xxxxxx:#[/[\\\\x
             [/\\\\ &3N            W3& \\\\/[x
          [[x\\@W                      W\\@x[[\\\\
        /#&N                             N_#
      /#\\@                                  \\@#/x
    [/ NH_  ^\\@W               Nd_  ^\\@p      N /#
   [[d\\@#_ zz\\@[/x3           3x:d9zz \\\\/#_N     d[[
  /[3^[JMMMJ/////&         ^#NMMMMM ////#W     H[[
 [/\\@p/NMMMML\\@#[:^/3       d/JMMMMMMEx[# x\\\\      &/#
 /x &/LMMMMMMMMMM[_       x:MMMMMMMMMMMM /p      :/
[/d d/ELLLLLLLLLD/&        \\#LLLLLLLLLLLL3/N      d/[
//N   xxxxxxxxxxxxN       Wxxxxxxxxxxxxxx_       W//
/[                                                //
//N   p333333333333333333333333333333333p        W//
[/d   _^/#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/H       \\@/[
 /:     \\\\#                              [x       :/
 [/\\@    d/x                             \\#:      &/#
  [[H    ^[x                            [      H[[
   [[d    _[x            &Hppp3d_      \\#\\\\N    \\@[[
    [/ N   d#\\\\        &NzDDDDDDDDJp^ x[xN   N /#
      /#&   N [:     pDDDDDDDDDDDDJ&#:H    &#/
       :/#_W  W^##x 3DDDDDDDDDJN&:\\\\^p   W_#/
          [[x&W  p& xx ^^^^ x:x \\@W   W&x/[
             [/# &HW   WWWWN    WH& \\#/[
                 [/[#\\\\xxxxxx\\\\#[/[\\\\x^\\@
EOC
`,rn=`# Banana 
#  http://www.ascii-art.de/ascii/ab/banana.txt
$the_cow = <<EOC;
       $thoughts
        $thoughts

     ".           ,#  
     \\\\ \`-._____,-'=/
  ____\`._ ----- _,'_____PhS
         \`-----'
EOC
`,an=`##
## acsii picture from http://www.ascii-art.de/ascii/ab/bear.txt
##
$the_cow = <<EOC;
 $thoughts
  $thoughts
     .--.              .--.
    : (\\\\ ". _......_ ." /) :
     '.    \`        \`    .'
      /'   _        _   \`\\\\
     /     $eye}      {$eye     \\\\
    |       /      \\\\       |
    |     /'        \`\\\\     |
     \\\\   | .  .==.  . |   /
      '._ \\\\.' \\\\__/ './ _.'
      /  \`\`'._-''-_.'\`\`  \\\\
EOC
`,un=`##
## Beavis, with Zen philosophy removed.
##
$the_cow = <<EOC;
   $thoughts         __------~~-,
    $thoughts      ,'            ,
          /               \\\\
         /                :
        |                  '
        |                  |
        |                  |
         |   _--           |
         _| =-.     .-.   ||
         $eye|/$eye/       _.   |
         /  ~          \\\\ |
       (____\\@)  ___~    |
          |_===~~~.\`    |
       _______.--~     |
       \\\\________       |
                \\\\      |
              __/-___-- -__
             /            _ \\\\
EOC
`,Xn="# Bees/beehive\n#  http://www.asciiworld.com/-Bees-.html\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n\n\n      ^^      .-=-=-=-.  ^^\n  ^^        (`-=-=-=-=-`)         ^^\n          (`-=-=-=-=-=-=-`)  ^^         ^^\n    ^^   (`-=-=-=-=-=-=-=-`)   ^^                            ^^\n        ( `-=-=-=-(@)-=-=-` )      ^^\n        (`-=-=-=-=-=-=-=-=-`)  ^^\n        (`-=-=-=-=-=-=-=-=-`)              ^^\n        (`-=-=-=-=-=-=-=-=-`)                      ^^\n        (`-=-=-=-=-=-=-=-=-`)  ^^\n         (`-=-=-=-=-=-=-=-`)          ^^\n          (`-=-=-=-=-=-=-`)  ^^                 ^^\n      jgs   (`-=-=-=-=-`)\n             `-=-=-=-=-`\nEOC\n",On=`# Bill the Cat
#
# Based on 'ack --th[pt]+t+'
#  from http://beyondgrep.com/ack-2.14-single-file
$the_cow = <<EOC;
 $thoughts
  $thoughts
 _   /|
 \\\\'o.O'
 =(___)=
    U
EOC
`,Mn=`# biohazard symbol
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
     $thoughts
      $thoughts
              =+\\$HM####\\@H%;,
           /H###############M\\$,
           ,\\@################+
            .H##############+
              X############/
               \\$##########/
                %########/
                 /X/;;+X/
 
                  -XHHX-
                 ,######,
 \\#############X  .M####M.  X#############
 \\##############-   -//-   -##############
 X##############%,      ,+##############X
 -##############X        X##############-
  %############%          %############%
   %##########;            ;##########%
    ;#######M=              =M#######;
     .+M###\\@,                ,\\@###M+.
        :XH.                  .HX:

EOC
`,ln=`# Bishop (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
    <>_
  (\\\\)  )
   \\\\__/
  (____)
   |  |
   |__|
  /____\\\\
 (______)
EOC
`,Cn=`# Black Mesa logo
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
    $thoughts
     $thoughts
           .-;+\\$XHHHHHHX\\$+;-.
        ,;X\\@\\@X%/;=----=:/%X\\@\\@X/,
      =\\$\\@\\@%=.              .=+H\\@X:
    -XMX:                      =XMX=
   /\\@\\@:                          =H\\@+
  %\\@X,                            .\\$\\@\\$
 +\\@X.                               \\$\\@%
-\\@\\@,                                .\\@\\@=
%\\@%                                  +\\@\\$
H\\@:                                  :\\@H
H\\@:         :HHHHHHHHHHHHHHHHHHX,    =\\@H
%\\@%         ;\\@M\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@H-   +\\@\\$
=\\@\\@,        :\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@= .\\@\\@:
 +\\@X        :\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\@\\@:%\\@%
  \\$\\@\\$,      ;\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\@\\@\\$.
   +\\@\\@HHHHHHH\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@+
    =X\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@X=
      :\\$\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\$:
        ,;\\$\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@X/-
           .-;+\\$XXHHHHHX\\$+;-.
EOC
`,Rn=`##
## A cow with a bong, from lars@csua.berkeley.edu
##
$the_cow = <<EOC;
         $thoughts
          $thoughts
            ^__^ 
    _______/($eyes)
/\\\\/(       /(__)
   | W----|| |~|
   ||     || |~|  ~~
             |~|  ~
             |_| o
             |#|/
            _+#+_
EOC
`,cn=`# Box
$the_cow = <<EOC;
     $thoughts
      $thoughts
         __________________
        /\\\\  ______________ \\\\
       /::\\\\ \\\\ZZZZZZZZZZZZ/\\\\ \\\\
      /:/\\\\.\\\\ \\\\        /:/\\\\:\\\\ \\\\
     /:/Z/\\\\:\\\\ \\\\      /:/Z/\\\\:\\\\ \\\\
    /:/Z/__\\\\:\\\\ \\\\____/:/Z/  \\\\:\\\\ \\\\
   /:/Z/____\\\\:\\\\ \\\\___\\\\/Z/    \\\\:\\\\ \\\\
   \\\\:\\\\ \\\\ZZZZZ\\\\:\\\\ \\\\ZZ/\\\\ \\\\     \\\\:\\\\ \\\\
    \\\\:\\\\ \\\\     \\\\:\\\\ \\\\ \\\\:\\\\ \\\\     \\\\:\\\\ \\\\
     \\\\:\\\\ \\\\     \\\\:\\\\ \\\\_\\\\;\\\\_\\\\_____\\\\;\\\\ \\\\
      \\\\:\\\\ \\\\     \\\\:\\\\_________________\\\\
       \\\\:\\\\ \\\\    /:/ZZZZZZZZZZZZZZZZZ/
        \\\\:\\\\ \\\\  /:/Z/    \\\\:\\\\ \\\\  /:/Z/
         \\\\:\\\\ \\\\/:/Z/      \\\\:\\\\ \\\\/:/Z/
          \\\\:\\\\/:/Z/________\\\\;\\\\/:/Z/
           \\\\::/Z/_______itz__\\\\/Z/
            \\\\/ZZZZZZZZZZZZZZZZZ/
EOC
`,gn=`# broken heart
# via http://pastebin.com/1AZwKrKp
# TODO: replace "thoughts" with "feelings"
$the_cow = <<EOC;
     $thoughts
      $thoughts
                          .,---.
                        ,/XM#MMMX;,
                      -%##########M%,
                     -\\@######%  \\$###\\@=
      .,--,         -H#######\\$   \\$###M:
   ,;\\$M###MMX;     .;##########\\$;HM###X=
 ,/\\@##########H=      ;################+
-+#############M/,      %##############+
%M###############=      /##############:
H################      .M#############;.
\\@###############M      ,\\@###########M:.
X################,      -\\$=X#######\\@:
/\\@##################%-     +######\\$-
.;##################X     .X#####+,
 .;H################/     -X####+.
   ,;X##############,       .MM/
      ,:+\\$H\\@M#######M#\\$-    .\\$\\$=
           .,-=;+\\$\\@###X:    ;/=.
                  .,/X\\$;   .::,
                      .,    ..
EOC
`,Un=`##
## The Budweiser frogs
##
$the_cow = <<EOC;
     $thoughts
      $thoughts
          oO)-.                       .-(Oo
         /__  _\\\\                     /_  __\\\\
         \\\\  \\\\(  |     ()~()         |  )/  /
          \\\\__|\\\\ |    (-___-)        | /|__/
          '  '--'    ==\`-'==        '--'  '
EOC
`,Nn=`##
## A cute little wabbit
##
$the_cow = <<EOC;
  $thoughts
   $thoughts   \\\\
        \\\\ /\\\\
        ( )
      .( o ).
EOC
`,fn=`# C3PO
#
# adapted from 'telnet -e x towel.blinkenlights.nl'
$the_cow = <<EOC;
   $thoughts
    $thoughts
       /~\\\\
      |oo )
      _\\\\=/_
     /     \\\\
    //|/.\\\\|\\\\\\\\
   ||  \\\\_/  ||
   || |\\\\ /| ||
    \\# \\\\_ _/  \\#
      | | |
      | | |
      []|[]
      | | |
     /_]_[_\\\\
EOC
`,Sn=`# Cake, from Portal 
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
    $thoughts
     $thoughts
            ,:/+/-
            /M/              .,-=;//;-
       .:/= ;MH/,    ,=/+%\\$XH@MM#@:
      -\\$##@+\\$###@H@MMM#######H:.    -/H#
 .,H@H@ X######@ -H#####@+-     -+H###@X
  .,@##H;      +XM##M/,     =%@###@X;-
X%-  :M##########$.    .:%M###@%:
M##H,   +H@@@$/-.  ,;\\$M###@%,          -
M####M=,,---,.-%%H####M\\$:          ,+@##
@##################@/.         :%H##@\\$-
M###############H,         ;HM##M\\$=
\\#################.    .=\\$M##M\\$=
\\#################H..;XM##M\\$=          .:+
M###################@%=           =+@MH%
@################M/.          =+H#X%=
=+M##############M,       -/X#X+;.
  .;XM##########H=    ,/X#H+:,
     .=+HM######M+/+HM@+=.
         ,:/%XM####H/.
              ,.:=-.
EOC
`,Hn=`# cake with candles
# via http://chris.com/ascii/index.php?art=events/birthday
$the_cow = <<EOC;
     $thoughts
      $thoughts
       $thoughts
                                    (
                       (
               )                    )             (
                       )           (o)    )
               (      (o)    )     ,|,            )
              (o)     ,|,          |~\\\\    (      (o)
              ,|,     |~\\\\    (     \\\\ |   (o)     ,|,
              \\\\~|     \\\\ |   (o)    |\`\\\\   ,|,     |~\\\\
              |\`\\\\     |\`\\\\\\@\\@\\@,|,\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\~|     \\\\ |
              \\\\ | o\\@\\@\\@\\\\ |\\@\\@\\@\\\\~|\\@\\@\\@\\@|\`\\\\\\@\\@\\@|\`\\\\\\@\\@\\@o |\`\\\\
             o|\`\\\\\\@\\@\\@\\@\\@|\`\\\\\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |o
           o\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\@|\`\\\\\\@\\@o
          \\@\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@
          p\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@q
          \\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|\`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@
          \\@:\\@\\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@::\\@
          ::\\@\\@::\\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@:\\@\\@::\\@
          ::\\@\\@::\\@\\@\\@\\@::oo\\@\\@\\@\\@oo\\@\\@\\@\\@\\@ooo\\@\\@\\@\\@\\@o:::\\@\\@\\@::::::
          %::::::\\@::::::\\@\\@\\@\\@:::\\@\\@\\@:::::\\@\\@\\@\\@:::::\\@\\@:::::%
          %%::::::::::::\\@\\@::::::\\@:::::::\\@\\@::::::::::::%%
          ::%%%::::::::::\\@::::::::::::::\\@::::::::::%%%::
        .#::%::%%%%%%:::::::::::::::::::::::::%%%%%::%::#.
      .###::::::%%:::%:%%%%%%%%%%%%%%%%%%%%%:%:::%%:::::###.
    .#####::::::%:::::%%::::::%%%%:::::%%::::%::::::::::#####.
   .######\`:::::::::::%:::::::%:::::::::%::::%:::::::::\\'######.
   .#########\`\`::::::::::::::::::::::::::::::::::::\\'\\'#########.
   \`.#############\`\`\`::::::::::::::::::::::::\\'\\'\\'#############.\\'
    \`.######################################################.\\'
      \` .###########,._.,,,. \\#######<_\\\\##################. \\'
         \` .#######,;:      \`,/____,__\`\\\\_____,_________,_____
            \`  .###;;;\`.   _,;>-,------,,--------,----------\\'
                \`  \`,;\\' ~~~ ,\\'\\\\######_/\\'#######  .  \\'
                    \\'\\'~\`\\'\\'\\'\\'    -  .\\'/;  -    \\'       -Catalyst
EOC
`,mn=`#
#	Cat picture by Joan Stark
#	Transformed into cowfile by Myroslav Golub
#
$the_cow = <<EOC;
       $thoughts  
        $thoughts
         $thoughts
          $thoughts
          |\\\\___/|
         =) $eyeY$eye (=            
          \\\\  ^  /
           )=*=(       
          /     \\\\
          |     |
         /| | | |\\\\
         \\\\| | |_|/\\\\
         //_// ___/
             \\\\_) 
EOC
`,dn=`# Cat
#
# used https://github.com/paulkaefer/flipFile.py
#  python flipFile.py cat " "
# and 
#  cat cat_flipped | sed 's/\\\\/\\\\\\\\/g' > cat.cow
#
$the_cow = <<EOC;
  $thoughts
   $thoughts                       _
                          / )      
                         / /       
      //|                \\\\ \\\\       
   .-\`^ \\\\   .-\`\`\`\`\`-.     \\\\ \\\\      
 o\` {|}  \\\\_/         \\\\    / /      
 '--,  _ //   .---.   \\\\  / /       
   ^^^\` )/  ,/     \\\\   \\\\/ /        
        (  /)      /\\\\/   /         
        / / (     / (   /          
    ___/ /) (  __/ __\\\\ (           
   (((__)((__)((__(((___)          
EOC

`,wn=`#
#	Cat picture by Joan Stark
#	Transformed into cowfile by Myroslav Golub
#
$the_cow = <<EOC;
       $thoughts     *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
        $thoughts        MMMM88&&&&&&&
     *           MMM88&&&&&&&&
         $thoughts       MMM88&&&&&&&&
                 'MMM88&&&&&&'
          $thoughts        'MMM8&&&'      *
          |\\\\___/|
         =) $eyeY$eye (=            .              '
          \\\\  ^  /
           )=*=(       *
          /     \\\\
          |     |
         /| | | |\\\\
         \\\\| | |_|/\\\\
  _/\\\\_/\\\\_//_// ___/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_
  |  |  |  | \\\\_) |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |     
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

EOC
`,Dn="$the_cow = <<\"EOC\";\n                        $thoughts\n                         $thoughts     ___.\n                          $thoughts    L._, \\\\\n               _.,         $thoughts   <  <\\\\                _\n             ,' '           $thoughts  `.   | \\\\            ( `\n          ../, `.            $thoughts  |    .\\\\`.           \\\\ \\\\_\n         ,' ,..  .           _.,'    ||\\\\l            )  '\".\n        , ,'   \\\\           ,'.-.`-._,'  |           .  _._`.\n      ,' /      \\\\ \\\\        `' ' `--/   | \\\\          / /   ..\\\\\n    .'  /        \\\\ .         |\\\\__ - _ ,'` `        / /     `.`.\n    |  '          ..         `-...-\"  |  `-'      / /        . `.\n    | /           |L__           |    |          / /          `. `.\n   , /            .   .          |    |         / /             ` `\n  / /          ,. ,`._ `-_       |    |  _   ,-' /               ` \\\\\n / .           \\\\\"`_/. `-_ \\\\_,.  ,'    +-' `-'  _,        ..,-.    \\\\`.\n  '         .-f    ,'   `    '.       \\\\__.---'     _   .'   '     \\\\ \\\\\n' /          `.'    l     .' /          \\\\..      ,_|/   `.  ,'`     L`\n|'      _.-\"\"` `.    \\\\ _,'  `            \\\\ `.___`.'\"`-.  , |   |    | \\\\\n||    ,'      `. `.   '       _,...._        `  |    `/ '  |   '     .|\n||  ,'          `. ;.,.---' ,'       `.   `.. `-'  .-' /_ .'    ;_   ||\n|| '              V      / /           `   | `   ,'   ,' '.    !  `. ||\n||/            _,-------7 '              . |  `-'    l         /    `||\n |          ,' .-   ,' ||               | .-.        `.      .'     ||\n `'        ,'    `\".'    |               |    `.        '. -.'       `'\n          /      ,'      |               |,'    \\\\-.._,.'/'\n          .     /        .               .       \\\\    .''\n        .`.    |         `.             /         :_,'.'\n          \\\\ `...\\\\   _     ,'-.        .'         /_.-'\n           `-.__ `,  `'   .  _.>----''.  _  __  /\n                .'        /\"'          |  \"'   '_\n               /_|.-'\\\\ ,\".             '.'`__'-( \\\\\n                 / ,\"'\"\\\\,'               `/  `-.|\" m\nEOC\n",pn=`##
## KMB is God.
##
$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts     ,, ＿
        ／      ｀､
       /   (_ﾉL_） ヽ
      /   ´・ ・｀  l
    （l      し     l）
      l     ＿＿    l
      >  ､ _      ィ
    ／        ￣    ヽ
   /  |              iヽ
   |＼|              |/|
   |  ||/＼／＼／＼/ | |
EOC
`,yn=`##
## The cheese from milk & cheese
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
      _____   _________
     /     \\\\_/         |
    |                 ||
    |                 ||
   |    ###\\\\  /###   | |
   |     $eye  \\\\/  $eye    | |
  /|                 | |
 / |        <        |\\\\ \\\\
| /|                 | | |
| |     \\\\_______/   |  | |
| |        $tongue       | / /
/||                 /|||
   ----------------|
        | |    | |
        ***    ***
       /___\\\\  /___\\\\
EOC
`,Wn=`# Chessmen Lineup
#
# based on ASCII chess pieces from http://www.chessvariants.org/d.pieces/ascii.html
#
# used https://github.com/paulkaefer/connectFiles.py
#   to "glue" the pieces together into one file
$the_cow = <<EOC;
    $thoughts
     $thoughts 
      $thoughts
       $thoughts
                                           .::.                      
                                           _::_                      
                                 ()      _/____\\\\_                    
                               <~~~~>    \\\\      /                    
                       <>_      \\\\__/      \\\\____/      <>_            
           __/"""\\\\   (\\\\)  )    (____)     (____)    (\\\\)  )   __/"""\\\\ 
  WWWWWW  ]___ 0  }   \\\\__/      |  |       |  |      \\\\__/   ]___ 0  }  WWWWWW
   |  |       /   }  (____)     |  |       |__|     (____)      /   }   |  |
   |  |     /~    }   |  |      |__|      /    \\\\     |  |     /~    }   |  |
   |__|     \\\\____/    |__|     /____\\\\    (______)    |__|     \\\\____/    |__|
  /____\\\\    /____\\\\   /____\\\\   (______)  (________)  /____\\\\    /____\\\\   /____\\\\
 (______)  (______) (______) (________) /________\\\\ (______)  (______) (______)

    __        __       __        __         __        __        __       __
   (  )      (  )     (  )      (  )       (  )      (  )      (  )     (  )
    ||        ||       ||        ||         ||        ||        ||       ||
   /__\\\\      /__\\\\     /__\\\\      /__\\\\       /__\\\\      /__\\\\      /__\\\\     /__\\\\
  (____)    (____)   (____)    (____)     (____)    (____)    (____)   (____)
EOC
`,vn=`#
# ちーちゃん
#
$the_cow = <<EOC;
   $thoughts
    $thoughts
                -一     一-
        ／                       ＼
       /             ________
      /     -~                     ミ､
      レ'     _  一ｧiァ ￢}￣Tii一- _  ＼
    ／    --::|::::/斗士  /   |[_Vい＿＞」
  ／ イ「::::|:::Y/  ｲ::ハ      ｨ-ﾐヽい
  ＜___｜:::へ|::|{ 乂-夕     {::ｄﾘ|い
        ＼八 |::｜             \`''   ﾊ|
    ＿ --＼ヽ|::|                  .ｲ ﾘ
  ／------.ゝ|:ﾄ|        -       ィ:|
  ＼        ＞ミ|\`ヽ!ﾆ  T  ﾌ￣.≧｜:/
     ∨         |::\\/ }-/く＼   /｜/ 
EOC
`,Pn=`# claw arm
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
  $thoughts
   $thoughts
       X MM X
       X MM X
       X MM X
       X MM X
       + HX +
     ,=\\$\\$XX%/-
   =X#########\\@%-
  ;##############=
 -###############M,
 ;##\\@\\@\\@######M\\@###=
 .+:;+:=H##\\$=:/:;H.
 - +###- \\## :###,,;
 +\\@:/%;-H##H==/::H;
  /#\\@/-=+\\$\\$%::+H#\\$
  \\$#%-,      ,.:##-
 -\\@/            =X%.
 %H=             -\\$;
  =HH,         .%M;
   /MM/       :\\@M/.
    .:XX,   -\\$H:.
EOC
`,xn=`# Clippy
#
# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltg01p
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
     __ 
    /  \\\\  
    |  |
    @  @
    |  |
    || |/ 
    || || 
    |\\\\_/|
    \\\\___/
EOC

`,Gn=`# Companion Cube from Portal
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
     $thoughts
      $thoughts

 +\\@##########M/             :\\@#########\\@/
 \\##############\\$;H#######\\@;+#############
 \\###############M########################
 \\##############X,-/++/+%+/,%#############
 \\############M\\$:           -X############
 \\##########H;.      ,--.     =X##########
 :X######M;     -\\$H\\@M##MH%:    :H#######\\@
   =%#M+=,   ,+\\@#######M###H:    -=/M#%
   %M##\\@+   .X##\\$, ./+- ./###;    +M##%
   %####M.  /###=         \\@##M.   X###%
   %####M.  ;M##H:.     =\\$###X.   \\$###%
   %####\\@.   /####M\\$-./\\@#####:    %###%
   %H#M/,     /H###########\\@:     ./M#%
  ;\\$H##\\@\\@H:    .;\\$HM#MMMH\\$;,   ./H\\@M##M\\$=
 X#########%.      ..,,.     .;\\@#########
 \\###########H+:.           ./\\@###########
 \\##############/ ./%%%%+/.-M#############
 \\##############H\\$\\@#######\\@\\@##############
 \\##############X%########M\\$M#############
 +M##########H:            .\\$##########X=
EOC
`,bn=`##
## A cowering cow
##
$the_cow = <<EOC;
     $thoughts
      $thoughts
        ,__, |    | 
        ($eyes)\\\\|    |___
        (__)\\\\|    |   )\\\\_
         $tongue  |    |_w |  \\\\
             |    |  ||   *

             Cower....
EOC
`,Fn=`$the_cow = <<EOC;
   $thoughts      {
    $thoughts  }   }   {
      {   {  }  }
       }   }{  {
      {  }{  }  }
     ( }{ }{  { )
    .-{   }   }-.
   ( ( } { } { } )
   |\`-.._____..-'|
   |             ;--.
   |   (__)     (__  \\\\
   |   ($eyes)      | )  )
   |    \\\\/       |/  /
   |     $tongue      /  /
   |            (  /
   \\\\             y'
    \`-.._____..-'
EOC
`,Bn=`# Cthulhu
#
$the_cow = <<EOC;
  $thoughts
   $thoughts

      ^(;,;)^

EOC

`,Vn=`# Cube
#
# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltrase
#   also available at https://gist.github.com/th3m4ri0/6e3f631866da31d05030
# 
$the_cow = <<EOC;
   $thoughts
    $thoughts
       ____________
      /\\\\  ________ \\\\
     / /\\\\ \\\\______/\\\\ \\\\
    / / /\\\\ \\\\  / /\\\\ \\\\ \\\\
   / / /__\\\\ \\\\/ / /\\\\ \\\\ \\\\
  / /_/____\\\\ \\\\/_/__\\\\_\\\\ \\\\
  \\\\ \\\\ \\\\____/ / ________ \\\\
   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /
    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /
     \\\\ \\\\/ / /__\\\\_\\\\/ / /
      \\\\  / /______\\\\/ /
       \\\\/___________/
EOC

`,Kn=`##
## 4.4 >> 5.4
##
$the_cow = <<EOC;
   $thoughts         ,        ,
    $thoughts       /(        )\`
     $thoughts      \\\\ \\\\___   / |
            /- _  \`-/  '
           (/\\\\/ \\\\ \\\\   /\\\\
           / /   | \`    \\\\
           $eye $eye   ) /    |
           \`-^--'\`<     '
          (_.)  _  )   /
           \`.___/\`    /
             \`-----' /
<----.     __ / __   \\\\
<----|====O)))==) \\\\) /====
<----'    \`--' \`.__,' \\\\
             |        |
              \\\\       /
        ______( (_  / \\\\______
      ,'  ,-----'   |        \\\\
      \`--{__________)        \\\\/
EOC
`,kn=`# Dalek
# from http://www.ascii-art.de/ascii/def/dr_who.txt (accessed 4/30/2014)
$the_cow = <<EOC;
   $thoughts
    $thoughts
              ___
      D>=G==='   '.
            |======|
            |======|
        )--/]IIIIII]
           |_______|
           C O O O D
          C O  O  O D
         C  O  O  O  D
         C__O__O__O__D
snd     [_____________]
EOC
`,Zn=`# Dalek
# from http://www.asciiworld.com/-Robots,24-.html (accessed 4/30/2014)
$the_cow = <<EOC;
                                    $thoughts
                                     $thoughts
                                                         ____                   
                                               [(=]|[==/   @  \\\\     
                                                      |--------|                
     *                                     *  .       ==========                
.  / *    .                         *   .* . * /.     ==========                
 / /  .                      *   .    *  \\\\. * /      ||||||||||||               
 =-=-=-=-=-=-----==-=--=-=--=-=-=-=---=--= -. %%%%%%[-- ||||||||||              
  \\\\  \\\\ .                             *  (===========[  /=========]              
.  \\\\   *  *                          .    /  * \\\\   |==============]             
         *                        *      *         C @ @ @ @ @ @ |D             
        *  *                          .           /              |              
                                         .       C  @ @ @  @ @  @ |D            
          *                          *          /                 |             
                                               C  @  @  @  @  @  @ |D           
                                              /                    |            
                                             C  @   @   @   @  @  @ |D          
                                            /                       |           
                                           |@@@@@@@@@@@@@@@@@@@@@@@@@|          
                                            -------------------------           
Modified from howard1\\@vax.oxford.ac.uk
EOC
`,Yn=`##
## docker whale
##
$the_cow = <<EOC;
         $thoughts
          $thoughts
                    ##        .
              ## ## ##       ==
           ## ## ## ##      ===
       /""""""""""""""""\\___/ ===
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
       \\______ o          __/
         \\    \\        __/
          \\____\\______/

EOC
`,jn=`##
## Doge
##
$the_cow = <<EOC;
   $thoughts
    $thoughts

           _                _
          / /.           _-//
         / ///         _-   /
        //_-//=========     /
      _///        //_ ||   ./
    _|                 -__-||
   |  __              - \\\\   \\
  |  |#-       _-|_           |
  |            |#|||       _   |  
 |  _==_                       ||
- ==|.=.=|_ =                  |
|  |-|-  ___                  |
|    --__   _                /
||     ===                  |
 |                     _. //
  ||_         __-   _-  _|
     \\_______/  ___/  _|
                   --*
EOC
`,zn=`# dolphin (tiny)
#
# from http://www.chris.com/ascii/index.php?art=animals/other%20(water)
$the_cow = <<EOC;
     $thoughts
      $thoughts
               ,
             __)\\\\_  
       (\\_.-'    a\`-.
  jgs  (/~~\`\`\`\`(/~^^\` 

EOC
`,Jn=`##
## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu
##
$the_cow = <<EOC;
                       $thoughts                    ^    /^
                        $thoughts                  / \\\\  // \\\\
                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\
                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*
                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |
                            \\@___\\@\`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\
                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\
                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /
                 0/0/0/0/0/0/\`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \\\\     \\\\__/        \`/\\\\      /                 ~-. _ .-~      /
             \\\\____($eyes)           *.   }            {                   /
             (    (--)          .----~-.\\\\        \\\\-\`                 .~
             //__\\\\\\\\$tongue\\\\__ Ack!   ///.----..<        \\\\             _ -~
            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~
EOC
`,Qn=`##
## The Whitespace Dragon
##
$the_cow = <<EOC;
      $thoughts                    / \\\\  //\\\\
       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\
            /$eye  $eye  \\\\__  /    //  | \\\\ \\\\    
           /     /  \\\\/_/    //   |  \\\\  \\\\  
           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ 
           //_^_/     \\\\/_ //     |    \\\\    \\\\
        ( //) |        \\\\///      |     \\\\     \\\\
      ( / /) _|_ /   )  //       |      \\\\     _\\\\
    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.
  (( / / )) ,-{        _      \`-.|.-~-.           .~         \`.
 (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\
 (( /// ))      \`.   {            }                   /      \\\\  \\\\
  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  \`. \\\\^-.
             ///.----..>        \\\\             _ -~             \`.  ^-\`  ^-_
               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
                                                                  /.-~
EOC
`,qn=`#
# えびフライ
#

$the_cow = <<EOC;
  $thoughts
   $thoughts
      ,.,,､,..,､､.,､,､､.,_          ／i
    ;'\`;、､:、..:、:,:,.::｀'::ﾞ":,'´ --i
    '､;:..: ,:.､.:',.:.::_.;..;:.‐'ﾞ

EOC
`,_t=`# Elephant
$the_cow = <<EOC;
  $thoughts
   $thoughts                                 
      /  \\\\~~~/  \\\\         
     (    ..     )----,      
      \\\\__     __/      \\\\     
        )|  /)         |\\\\    
         | /\\\\  /___\\\\   / ^   
          "-|__|   |__|      
EOC
`,nt=`##
## An elephant out and about
##
$the_cow = <<EOC;
 $thoughts     /\\\\  ___  /\\\\
  $thoughts   // \\\\/   \\\\/ \\\\\\\\
     ((    $eye $eye    ))
      \\\\\\\\ /     \\\\ //
       \\\\/  | |  \\\\/ 
        |  | |  |  
        |  | |  |  
        |   o   |  
        | |   | |  
        |m|   |m|  
EOC
`,tt=`##
## Do we need to explain this?
##
$the_cow = <<EOC;
   $thoughts
    $thoughts              ....       
           ........    .      
          .            .      
         .             .      
.........              .......
..............................

Elephant inside ASCII snake
EOC
`,et=`# Explosion
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
    $thoughts
     $thoughts
            .+
             /M;
              H#@:              ;,
              -###H-          -@/
               %####\\$.  -;  .%#X
                M#####+;#H :M#M.
..          .+/;%#########X###-
 -/%H%+;-,    +##############/
    .:\\$M###MH\\$%+############X  ,--=;-
        -/H#####################H+=.
           .+#################X.
         =%M####################H;.
            /@###############+;;/%%;,
         -%###################\\$.
       ;H######################M=
    ,%#####MH\\$%;+#####M###-/@####%
  :\\$H%+;=-      -####X.,H#   -+M##@-
 .              ,###;    ;      =\\$##+
                .#H,               :XH,
                 +                   .;-
EOC
`,$t=`##
## Evil-looking eyes
##
$the_cow = <<EOC;
    $thoughts
     $thoughts
                                   .::!!!!!!!:.
  .!!!!!:.                        .:!!!!!!!!!!!!
  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ 
      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P 
      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$"  \\$\\$\\$\\$\\$\\$\\$\\$# 
      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* 
      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R" 
        "*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#" 
             """"          """"""" 
EOC
`,ot=`# fatter banana
# via https://www.reddit.com/r/cowsay/comments/3bkpwv/any_love_for_bananasay/
$the_cow = <<EOC;
           $thoughts
            $thoughts
        "-.. __      __.='>
         \`.     """""   ,'
           "-..__   _.-"
   ~ ~~ ~ ~  ~   """  ~~  ~
EOC
`,Tt=`# fatter cow
# via https://www.reddit.com/r/cowsay/comments/39htd0/with_all_this_reddit_hype_what_about_a_little/
$the_cow = <<EOC;
  $thoughts
   $thoughts

    A__A
   ( OO )\\\\_----__
   (____)\\\\      )\\\\/\\\\
        ||      |
        ||\`---w||
EOC
`,Et=`$the_cow = <<EOC;
                          $thoughts
                           $thoughts         __.----.___
           ||            ||  (\\\\(__)/)-'||      ;--\` ||
          _||____________||___\`($eyes)'___||______;____||_
          -||------------||----)  (----||-----------||-
          _||____________||___(o  o)___||______;____||_
          -||------------||----\`--'----||-----------||-
           ||            ||     $tongue \`|| ||| || ||     ||jgs
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
EOC
`,Lt=`# Fire
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
      $thoughts
       $thoughts
                     -\\$-
                    .H##H,
                   +######+
                .+#########H.
              -\\$############\\@.
            =H###############\\@  -X:
          .\\$##################:  \\@#\\@-
     ,;  .M###################;  H###;
   ;\\@#:  \\@###################\\@  ,#####:
 -M###.  M#################\\@.  ;######H
 M####-  +###############\\$   =\\@#######X
 H####\\$   -M###########+   :#########M,
  /####X-   =########%   :M########\\@/.
    ,;%H\\@X;   .\\$###X   :##MM\\@%+;:-
                 ..
  -/;:-,.              ,,-==+M########H
 -##################\\@HX%%+%%\\$%%%+:,,
    .-/H%%%+%%\\$H\\@###############M\\@+=:/+:
/XHX%:#####MH%=    ,---:;;;;/%%XHM,:###\\$
\\$\\@#MX %+;-                           .
EOC
`,ht=`##
## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)
##
$the_cow = <<EOC;
  $thoughts            .    .     .   
   $thoughts      .  . .     \`  ,     
    $thoughts    .; .  : .' :  :  : . 
     $thoughts   i..\`: i\` i.i.,i  i . 
      $thoughts   \`,--.|i |i|ii|ii|i: 
           U\${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@\`.||' 
           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  
             $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)    
                \`YY~~~~YY'    
                 ||    ||     
EOC
`,It=`# Fox
# http://www.retrojunkie.com/asciiart/animals/foxes.htm
$the_cow = <<EOC;
$thoughts
 $thoughts
   /\\\\   /\\\\   Todd Vargo
  //\\\\\\\\_//\\\\\\\\     ____
  \\\\_     _/    /   /
   / * * \\\\    /^^^]
   \\\\_\\\\O/_/    [   ]
    /   \\\\_    [   /
    \\\\     \\\\_  /  /
     [ [ /  \\\\/ _/
    _[ [ \\\\  /_/
EOC
`,At=`##
## Ghostbusters!
##
$the_cow = <<EOC;
          $thoughts
           $thoughts
            $thoughts          __---__
                    _-       /--______
               __--( /     \\\\ )XXXXXXXXXXX\\\\v.
             .-XXX(   $eye   $eye  )XXXXXXXXXXXXXXX-
            /XXX(       U     )        XXXXXXX\\\\
          /XXXXX(              )--_  XXXXXXXXXXX\\\\
         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\
         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX
         XXXXXX__/          XXXXXX         \\\\__---->
 ---___  XXX__/          XXXXXX      \\\\__         /
   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=
    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX
       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX
         \\\\XXXXXXXXX   \\\\                    /XXXXX/
          \\\\XXXXXX      >                 _/XXXXX/
            \\\\XXXXX--__/              __-- XXXX/
             -XXXXXXXX---------------  XXXXXX-
                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/
                  ""VXXXXXXXXXXXXXXXXXXV""
EOC
`,st="# art by Joan G. Stark, https://en.wikipedia.org/wiki/Joan_Stark\n$the_cow = <<\"EOC\";\n     $thoughts     .-.\n      $thoughts  .'   `.\n       $thoughts :g g   :\n        $thoughts: o    `.\n        :         ``.\n       :             `.\n      :  :         .   `.\n      :   :          ` . `.\n       `.. :            `. ``;\n          `:;             `:'\n             :              `.\n              `.              `.     .\n                `'`'`'`---..,___`;.-'\nEOC\n\n",rt=`# GLaDOS from Portal
# via http://pastebin.com/1AZwKrKp 
$the_cow = <<EOC;
  $thoughts
   $thoughts
       \\#+ \\@      \\# \\#              M#\\@
 .    .X  X.%##\\@;# \\#   +\\@#######X. \\@#%
   ,==.   ,######M+  -#####%M####M-    \\#
  :H##M%:=##+ .M##M,;#####/+#######% ,M#
 .M########=  =\\@#\\@.=#####M=M#######=  X#
 :\\@\\@MMM##M.  -##M.,#######M#######. =  M
             \\@##..###:.    .H####. \\@\\@ X,
   \\############: \\###,/####;  /##= \\@#. M
           ,M## ;##,\\@#M;/M#M  \\@# X#% X#
.%=   \\######M## \\##.M#:   ./#M ,M \\#M ,#\\$
\\##/         \\$## \\#+;#: \\#### ;#/ M M- \\@# :
\\#+ \\#M\\@MM###M-;M \\#:\\$#-##\\$H# .#X \\@ + \\$#. \\#
      \\######/.: \\#%=# M#:MM./#.-#  \\@#: H#
+,.=   \\@###: /\\@ %#,\\@  \\##\\@X \\#,-#\\@.##% .\\@#
\\#####+;/##/ \\@##  \\@#,+       /#M    . X,
   ;###M#\\@ M###H .#M-     ,##M  ;\\@\\@; \\###
   .M#M##H ;####X ,\\@#######M/ -M###\\$  -H
    .M###%  X####H  .\\@\\@MM\\@;  ;\\@#M\\@
      H#M    /\\@####/      ,++.  / ==-,
               ,=/:, .+X\\@MMH\\@#H  \\#####\\$=
EOC
`,at=`#
#	CodeGoat.io: https://github.com/danyshaanan/goatsay
#
$the_cow = <<EOC;
        $thoughts
         $thoughts
          )__(
         '|$eyes|'________/
          |__|         |
           $tongue||"""""""||
             ||       ||

EOC
`,it=`##
## ejm97 http://www.ascii-art.de/ascii/ghi/goat.txt
##
$the_cow = <<EOC;
       $thoughts
        $thoughts
         $thoughts  _))
           > $eye\\\\     _~
           \`;'\\\\\\\\__-' \\\\_
              | )  _ \\\\ \\\\
             / / \`\`   w w
            w w
EOC





`,ut=`# Golden Eagle (Marquette University mascot)
# 
$the_cow = <<EOC;
    $thoughts                                       ,:=+++++???++?+=+=
     $thoughts                               :+?????\\$MUUUUUUUUUMO+??~
      $thoughts                         :+I??\\$UUUUMUMMMMUUMUMUUMUUMM???I+:
       $thoughts                     ,+??+ZOUUMMUMMMUUUUUMUUUMUUUMUMUUMZI+?+:
        $thoughts                 ~I?+MMUMUUUMUUUOOUMMMMMMUUUUUMMMUUUUUUMMUM$??~
                       I?+7MMMMMUUO7?+?IUMMMMMMMMUUMUUMUUUUUUUUUUMMMUMO?I
                    ~I?+MMMUUUO????+?IOUZ7?,.......,+\\$\\$OUMUUUUUUMUMUUUMUU+I:
                   =??\\$UMUUU7++??????II???????=.....,?OUUMMMUUMUUUUUUUMMUUU+=
                 +??UUMMM7??????+??+?????+??=,...\\$MUMUUUUMUUMUUUUUUUUMMUM7II??=
               ,+?IUMMMI???III?++??+?????+~....... ......MUUMUUUUUUUUUMMU7?~
               IIUMMM+?+?IUUUUMUUM7I?????????????I?+=:......MUUMMUMUMMMMUUU+~
             :?+UMMU+?+?7UMMUUUZ7\\$\\$7????+++????????????=.....+UMUUUUMMMMMMUZ?
             ?+UMUM???+MMMMMU?++???????????++????????++????....OMMMUMMMMUMMUI:
            +\\$MMUM?+?ZMMU:\\$MM???OUUU+??+???+????????????????,...UMUMUUUUMMUMM?~
            IUUUU?I?OUUU,..UU?IMMUUMUUI???+?????????????????I,..:UUMUUUUMMUMU?+
            ?UUUMUM\\$UMUU~..UUUUU\\$,IUUUMM7+?????????????????+?I~..UUUUUUUMMMUU+?
            ?OUMUUUUMMUI+.?UUUU=...~UMMUU\\$?????+???????????????..MUMUUUUUMUMU??
           :??IUUMMUMUMMOMUU7........OUUUMMU?I????????????????I..MUMUUUUMUUMU?+
         +IIUMUO.IUUUUUUO..............?UMUMUM7??????????????+?..UUMUUUUMUUMU?=
       ,IZMMU,.:UU7:..........,UUUMUZ....MUUMMO+???????????????..UUUUUUUUUUU?:
       IZUUU:..UUUI=....... IUUUUUMMUZ,.MMUMU$?+???????????????.MUUMUUUUMUMUI
     ,+IUUM..O=..........\\$UUMMMUU?~....UMMUUI?????????????????=.UMMUUUUUMMU?+
     +?UMU~............OUMMUU~..... .UUMUMM+?????????????????=.UMMUMUMUUMOI=
     ?\\$MU~...    ...:MUMU=~........,UUMMMUI+????????????????+IUMMMUUUUMUU?+
     +OMU....   ...?UMU=..:~~,.....MMMUUU+?+????????????????~MMUUUUMUMMU?+~   
     ?OMU~ .. ...?UMUUUMUMUMUMUMUUUMUUMUI???????????????+?+OUUMUUMMMMUIUUUMO,
     ??UMU~.....\\$MUUUOM???UMMUUUMMMUUMM7?++????????????++OMMMUMUUMMUI??UMIU+~
     :?7UUU\\$...UMMM?I~,  +?MMUUMMMMMMUU?????????????+??\\$UMMMMUUUMU\\$?: ,??I?:
       ?IMUMUUZMU+?,      =?UMMMMMMMMO??????????????+UMUMMUMUMUU?I~
        ?+\\$MUMUMU??        ?MMMMMMMMU??+???????????IUMMMUUUMUUZ?=
          ,+???ZUO?~       +ZUMMUMUMU???++??+???IUMMUMUMMUUO??~
               ,,:~=       ,?UMUMUMU???+??+?+?7UMUMUMUMUI??:
                            ?UMUMMMM?+??++?ZUUMUMUMUZ++?,                  
                            ?UMMMMMO+???MMUMUMUMUMOII=,                       
                            ?UUUMUUZOMUUMUMMUMM+??=
                            ?UMMUMMUUUMUMM\\$???~
                           ,?UMUUMUUU\\$?+?~:                                  
                           :IUUUM?+?I=:                                  
                           ????~,
EOC
`,Xt=`##
## これが私の本当の姿だ！
##  
##
$the_cow = <<EOC;
       $thoughts
        $thoughts
                           __ 
                  l^ヽ    /  }    _
                  |  |   /  /   ／  )
                  |  |  /  /  ／  ／ _
                  j. し'  / ／  ／ ／  )
                 /  .＿__ ´  ／ ／  ／
                /   {  /:｀ヽ ｀¨ ／
               /     ∨::::::ﾊ   ／
              |廴     ＼:::ノ}  /
    {￣￣￣￣ヽ  廴     ｀ー'  ー-､
    ヽ ＿＿_   ＼ 廴        ＿＿＿ﾉ
        ／       ＼ 辷_´￣
      ／           ﾍ￣
    ／             ,ﾍ
                  /、ﾍ
                 /＼__ﾉ
EOC

`,Ot=`# happy whale
#
# modified from http://www.chris.com/ascii/index.php?art=animals/other%20(water)
$the_cow = <<EOC;
   $thoughts
    $thoughts
     $thoughts
        __ \\ / __
       /  \\\\ | /  \\\\
           \\\\|/
       _.---v---.,_
      /            \\\\  /\\\\__/\\\\
     /              \\\\ \\\\_  _/
     |__ @           |_/ /
      _/                / 
      \\\\       \\\\__,     /  
   ~~~~\\\\~~~~~~~~~~~~~~\`~~~

EOC
`,Mt=`##
## A cute little hedgehog
##
$the_cow = <<EOC;
  $thoughts
   $thoughts ..:::::::::.
    ::::::::::::::
   /. \`::::::::::::
  O__,_:::::::::::'
EOC
`,lt=`##
## Hello Kitty
##
$the_cow = <<EOC;
  $thoughts
   $thoughts
      /\\\\_)o<
     |      \\\\
     | $eye . $eye|
      \\\\_____/
         $tongue
EOC
`,Ct=`$the_cow = <<EOC;
                       $thoughts              ___
                        $thoughts            ///\\\\\\\\\\\\/----
                         $thoughts           ||//\\\\///\\\\\\\\\\\\\\\\
                          $thoughts         /\`-.__\\\\\\\\\\\\\\\\///|
                           $thoughts       /_  _   \`--._|
                               ___-\`---.___     |
                          ----------       \`-.__|
                       ----------( \\\\.-.$eye $eye;_  \\\\\\\\\\\\\\\\\\\\\\\\
                      ------------| \`-'-.(_)--/\\\\\\\\\\\\\\\\\\\\
                     /////------//|   \`-'       )\\\\\\\\\\\\\\\\\\\\\\\\
                     /////------///\\\\  \`--'\\\\  /"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                     ////--------///\\\\  \`-' /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   .-.  _
                      //////------////>---'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  | | / )
        _              ////////////// |__| )\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  | |/ /
       / \`.       _    ////////.-'  >\\\\    <-._.--.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  _|__ /_
      (    \\\\  . .' )    /////// ( .- (    )() ( )_)\\\\\\\\\\\\\\\\\\\\\\\\\\\\  / __)-' )
       \`-   | |/          //// ( ) ( )|--'() ( ) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   \\\\  \`(.-')
          .---/ _()        /// ( ) () |  /() ( )  \\\\\\\\\\\\\\\\\\\\\\\\     > ._>-'
        ()+8 8 |            |  ( )( ) | /( ) ( )   \\\\        / \\\\/
        ()+8 8/-()__        /  ( )( ) \\\\/ ( ) ( )\\\\   \\\\      /\\\\ /
          |8 8|     \`.     |   () ( ).--.( ) ( )-\\\\   \\\\    /   |
        ()+||||-() (_/    _/   /| ()/ || \\\\ )  ()()\\\\   \\\\__/   /
        .-\`||||          /\\\\\\\\  / / ()|/  \\\\ ()     \\\\ \`.  /|   |
       (_  ||||        .'   _/-/  ()\\\\/||\\\\/()     \\\\-. \\\\     /
           ||( \\\\_    .'    ( )/  ( ) \`--' ( )     > ) \`.  /
        .--|_|\\\\_ \\\\ .'    .'( )_  ( )-.___.-( )  (  )    ""
        \`.__)-.( /.'\\\\  .'   (  )'_)-.______( ).-')'
          (___)|  \\\\ .-'      \`--'\`-._.---._.(_))-'
          (__)|| +-)'           |   /_.--.\\\\    |
          (__)||-'              \`._|\`-'  ) )  _|
            |||||                |  \`.\`-'.'--' /
            |||||               .'    | |   .\\\\|
            |||||             .'   _.-|_|     \\\\
            |||||            /   .'.-'  \\\\\\\\     |
            ||||||         .'     /      \\\\     \\\\
             |||||        /     .'        \\\\     \\\\
             |||||      .'     /           |    |
            _|||||----./     .'            \\\\     \\\\
         .-' |||||   \`/     /               \\\\    |
       .'     |||||   (    /                |    |
      /       |||||   |    |\\\\                \\\\   |
      |     .'|||||.  |    ||                |    )
       \\\\    | |||||\\\\  |    |/                |    \\\\
        \\\\   | ||||||  |    |                 /    |
        |    \`.||||' /     |                |     \\\\
        |      ||||  |     \\\\                |      |
        /      ||||| |      |\\\\             /       |
       /       |||||_/      | \\\\            |        \\\\
      /      ------'|       |  |           |        |
     |      |___.---|        \\\\ |           /        |
     |             /         | |          |         \\\\
     |             |         \\\\/           |          |
     |             /          |           |          |
      \\\\           |           |           |          |
       \`.        /             \\\\          |           \\\\
         \`--.___\`-_            |_         |           |
           .-.__.-''-,_         -         |           \\\\_'
          <\`.         '.-//|-/\`\`        (_)          _.-'
           \`._-.____.-'.|   /            '//, ,\\\\.-'\`\` |--.
              \`-.____.' |__/               '''\\\\      -'/ |
                                               \`.   _.// |
                                                 \`-.__.-'

VK
EOC
`,Rt=`$the_cow = <<EOC;
           $thoughts     (      )
            $thoughts    ~(^^^^)~
             $thoughts    ) $eyes \\\\~_          |\\\\
              $thoughts  /     | \\\\        \\\\~ /
                ( 0  0  ) \\\\        | |
                 ---___/~  \\\\       | |
                  /'__/ |   ~-_____/ |
   o          _   ~----~      ___---~
     O       //     |         |
            ((~\\\\  _|         -|
      o  O //-_ \\\\/ |        ~  |
           ^   \\\\_ /         ~  |
                  |          ~ |
                  |     /     ~ |
                  |     (       |
                   \\\\     \\\\      /\\\\
                  / -_____-\\\\   \\\\ ~~-*
                  |  /       \\\\  \\\\       .==.
                  / /         / /       |  |
                /~  |      //~  |       |__|         W<
                ~~~~        ~~~~
EOC
`,ct=`##
## ひよ子
##
$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts
      ,､ ,._
      ﾉ ・  ヽ
     / :::   i  
    / :::    ﾞ､
   ,i:::       \`ｰ-､
   |:::           i
   !::::..        ﾉ
    \`ー――――'" 
EOC
`,gt=`# Homer Simpson
#
# from http://www.reddit.com/r/textfiles/comments/2s9ybk/random_ascii_art/
#
$the_cow = <<EOC;
            $thoughts
             $thoughts                __ 
                   _ ,___,-'",-=-. 
       __,-- _ _,-'_)_  (""\`'-._\\\\ \`. 
    _,'  __ |,' ,-' __)  ,-     /. | 
  ,'_,--'   |     -'  _)/         \`\\\\ 
,','      ,'       ,-'_,\`           : 
,'     ,-'       ,(,-(              : 
     ,'       ,-' ,    _            ; 
    /        ,-._/\`---'            / 
   /        (____)(----. )       ,' 
  /         (      \`.__,     /\\\\ /, 
 :           ;-.___         /__\\\\/| 
 |         ,'      \`--.      -,\\\\ | 
 :        /            \\\\    .__/ 
  \\\\      (__            \\\\    |_ 
   \\\\       ,\`-, *       /   _|,\\\\ 
    \\\\    ,'   \`-.     ,'_,-'    \\\\ 
   (_\\\\,-'    ,'\\\\")--,'-'       __\\\\ 
    \\\\       /  // ,'|      ,--'  \`-. 
     \`-.    \`-/ \\\\'  |   _,'         \`. 
        \`-._ /      \`--'/             \\\\ 
-hrr-      ,'           |              \\\\ 
          /             |               \\\\ 
       ,-'              |               / 
      /                 |             -'
EOC
`,Ut=`$the_cow =<<"EOC"
  $thoughts
     ___        _--_
    /    -    /     \\\\
   ( $eyes   \\\\  (    $eyes )
   |  $eyes _;\\\\-/|  $eyes _|
    \\\\___/######\\\\___/\\\\
      /##############\\\\
     /  ######   ##  #|
    /  ##@##@##       |
   /    ######     ##  \\\\
 <______-------___\\\\  . //_
    |       ____  | | //# \\\\__~__
     \\\\      $tongue    \\\\  //###  \\\\   \\\\
      |             /\\'  ##  ##  ##\\\\   __--~--_
       \\\\_________- /\\\\ )    ^     ##|--########\\\\
  /--~-_\\\\________/_  |          #@##|#######Y##|
 | \\\\ \`  /|       /O/ ( ###  \\')    ##/######/###/
 \\\\  \\\\  | |       --  |  ###        /LLLLL--###/
  \\\\_ \\\\/  |            \\\\_   \\\\    ) /####_____--
 ___ /    \\\\           /     |   _-####\\\\
(___/     -\\\\_________/     / -- |#####@@@@@@\\'_
 (__\\\\_      __,) (.___     ,/    /#####      \`@@
      | -\\\\\\\\-          //-//      @@  @@@@@.
      | | \\\\\\\\_       _// //      @\\'       \\'@@.
      (.)   \\\\_)    / / //                   @@@
                  (_) (_\\'
EOC
`,Nt=`#
# International Business Machines
#

$the_cow = << EOC;
  $thoughts
   $thoughts

■■■■■   ■■■■■■■■     ■■■■■       ■■■■■
■■■■■   ■■■■■■■■■■   ■■■■■■     ■■■■■■
 ■■■     ■■■   ■■■    ■■■■■■   ■■■■■■
 ■■■     ■■■■■■■■     ■■■■■■■ ■■■■■■■
 ■■■     ■■■■■■■■     ■■■ ■■■■■■■ ■■■
 ■■■     ■■■   ■■■    ■■■  ■■■■■  ■■■
■■■■■   ■■■■■■■■■■   ■■■■   ■■■   ■■■■
■■■■■   ■■■■■■■■     ■■■■    ■    ■■■■
EOC
`,ft=`##
## いわし
##  
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
         ＿＿＿＿ ＿＿＿＿＿__
      ｨ''  ＠ :. ,! ，， ， ，￣￣ ¨\` ‐-            ＿＿
       ＼    ノ   i            ’ ’’ ’’､_;:\`:‐.-_-‐ニ＝=彳
         ｀ ＜. _  .ｰ ､                       !三  ＜
                 ｀¨  ‐= . ＿＿＿_.. ﾆ=-‐‐\`'´｀ﾐ､   三＞
                                                 ￣￣
EOC
`,St=`# jellyfish
#
# from http://ascii.co.uk/art/jellyfish
$the_cow = <<EOC;
     $thoughts
      $thoughts

         .-;\\':\\':\\'-.
        {\\'.\\'.\\'.\\'.\\'.}
         )        \\'\`.
        \\'-. ._ ,_.-=\\'
          \`). ( \`);(
          (\\'. .)(,\\'.)
           ) ( ,\\').(
          ( .\\').\\'(\\').
          .) (\\' ).(\\'
           '  ) (  ).
            .\\'( .)\\'
              .).\\'
jgs

EOC
`,Ht=`##
## Karl Marx
##  
##
$the_cow = <<EOC;
       $thoughts
        $thoughts
                   ,―ヾヽヽ/ｖへ／⌒ー
                , ⌒ヽ ヽ ヽ / ／ ノ  ⌒ヽ、
              / ／ヾ,ゞ -ゞゞゞ､_ ⌒  ノ ヽ
            ／  ／            \`ヾ  ー   ミヽ
          ,/   /                   ヾ ＼  ヽﾐ
         /    /                      ゞ      ヽ
         i   /                       /      ＼
        /    -=ﾆヽ､,_  ,,,,;r;==-     ヾ  ヾミ ヽ
        | ;: \`ゞﾂヽ〉^\`ヾだ'=-､_        i    彡 ヽ
        i ,   /::::/     \`'''"""        ﾉ  ゞ ヾ ヽ
        } ;  |    人､,;-,'^            /    くヾ  ）
        /    彡ノノノﾉﾉﾉ(((((        ／ﾍミ        /
       /     /ﾉﾉﾉﾉﾉ,.-―ミヽヾヾヾヾヾヾ     _ノ\`ｰ'"
      ,i          -ー‐ \`ゞ           ヽ   ヽ
      彡彡                        ミ       ヽ
''""￣彡      /   /   /   /            ミ   ﾂ＼
      ＜    /   /   /   /        ヾ   ヾ  ノﾉﾉ
        '―彡                         ｒー'"
            ヾノ人,,.r--､ノノノノノり'"
EOC
`,mt=`# Kilroy
# from http://www.ascii-art.de/ascii/jkl/kilroy.txt (accessed 8/14/2014)
$the_cow = <<EOC;
     $thoughts 
      $thoughts
           ,,,
          (0 0)
   +---ooO-(_)-Ooo---+
   |                 |
EOC

`,dt=`# King (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
    .::.
    _::_
  _/____\\\\_
  \\\\      /
   \\\\____/
   (____)
    |  |
    |__|
   /    \\\\
  (______)
 (________)
 /________\\\\
EOC
`,wt=`##
## A lovers' empbrace
##
$the_cow = <<EOC;
     $thoughts
      $thoughts
             ,;;;;;;;,
            ;;;;;;;;;;;,
           ;;;;;'_____;'
           ;;;(/))))|((\\\\
           _;;((((((|))))
          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     .--~(  \\\\ ~))))))))))))
    /     \\\\  \`\\\\-(((((((((((\\\\\\\\
    |    | \`\\\\   ) |\\\\       /|)
     |    |  \`. _/  \\\\_____/ |
      |    , \`\\\\~            /
       |    \\\\  \\\\           /
      | \`.   \`\\\\|          /
      |   ~-   \`\\\\        /
       \\\\____~._/~ -_,   (\\\\
        |-----|\\\\   \\\\    ';;
       |      | :;;;'     \\\\
      |  /    |            |
      |       |            |
EOC
`,Dt=`# Kitten
#
# based on rfksay by Andrew Northern
# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay
#
$the_cow = <<EOC;
   $thoughts
    $thoughts

     |\\\\_/|
     |o o|__
     --*--__\\\\
     C_C_(___)
EOC
`,pt=`##
## A kitten of sorts, I think
##
$the_cow = <<EOC;
     $thoughts
      $thoughts
       ("\`-'  '-/") .___..--' ' "\`-._
         \` $eye_ $eye  )    \`-.   (      ) .\`-.__. \`)
         (_Y_.) ' ._   )   \`._\` ;  \`\` -. .-'
      _.. \`--'_..-_/   /--' _ .' ,4
   ( i l ),-''  ( l i),'  ( ( ! .-'    
EOC
`,yt=`# Knight (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
  __/"""\\\\
 ]___ 0  }
     /   }
   /~    }
   \\\\____/
   /____\\\\
  (______)
EOC
`,Wt=`##
## From the canonical koala collection
##
$the_cow = <<EOC;
  $thoughts
   $thoughts
       ___  
     {~$eye_$eye~}
      ( Y )
     ()~*~()   
     (_)-(_)   
EOC
`,vt=`##
## It's a Kosh Cow!
##
$the_cow = <<EOC;
    $thoughts
     $thoughts
      $thoughts
  ___       _____     ___
 /   \\\\     /    /|   /   \\\\
|     |   /    / |  |     |
|     |  /____/  |  |     |     
|     |  |    |  |  |     |
|     |  | {} | /   |     |
|     |  |____|/    |     |
|     |    |==|     |     |
|      \\\\___________/      |
|                         |
|                         |
EOC
`,Pt=`$the_cow = <<EOC;
 $thoughts
  $thoughts
  ,-''''-.
 (.  ,.   L        ___...__
 /$eye} ,-\`  \`'-==''\`\`        ''._
//{                           '\`.
\\\\_,X ,                         : )
 $tongue 7                          ;\`
    :                  ,       /
     \\\\_,                \\\\     ;
       Y   L_    __..--':\`.    L
       |  /| \`\`\`\`       ;  y  J
       [ j J            / / L ;
       | |Y \\\\          /_J  | |
       L_J/_)         /_)   L_J
      /_)               sk /_)
EOC
`,xt=`$the_cow = <<EOC;
                 $thoughts
                  $thoughts  _,._
                 __.'   _)
                <_,)'.-"$eye\\\\
                  /' (    \\\\
      _.-----..,-'   (\`"--^
     //              |   $tongue
    (|   \`;      ,   |  
      \\\\   ;.----/  ,/ 
       ) // /   | |\\\\ \\\\
       \\\\ \\\\\\\\\`\\\\   | |/ /
        \\\\ \\\\\\\\ \\\\  | |\\\\/
EOC
`,Gt=`# lightbulb
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
$thoughts
 $thoughts
         ,=;%\\$%%\\$X%%%%;/%%%%;=,
     ,/\\$\\$+:-                -:+\\$\\$/,
   :X\\$=                          =\\$X:
 ;M%.                              .%M;
+#/                                  /#+
\\##                                    M#
H#,                     =;+/;,       ,#X
.HM-       :\\@X+%H:   .%M%- .M#.     -M\\@.
  /#%.     \\@#-  ,H\\@--MH, .;\\@\\$-    .%#+
   .\\$M;    .+\\@X;, MM#\\@:/\\$X;.     ;M\\$,
     =\\@H,     ,:+%H#M%;-       ,H\\@=
      .\\$#;        -#H         =#\\$
        %#;        \\#M        ;#%
         H#-       \\##       -#H
         ;#+       \\##       +#;
          ;H+;;;;;;HH;;;;;;+H/
           =H#\\@HHHHHHHHHH\\@#H=
           =\\@#H%%%%%%%\\$HH\\@#\\@=
           =\\@#X%%%%%%%\\$M###\\@=
               =+%XHHX%+=
EOC
`,bt=`# Lobster
#   lobster jgs   10/96
#   http://ascii.co.uk/art/lobster
$the_cow = <<EOC;
             $thoughts
              $thoughts
                             ,.---._
                   ,,,,     /       \`,
                    \\\\\\\\\\\\\\\\   /    '\\\\_  ;
                     |||| /\\\\/\`\`-.__\\\\;'
                     ::::/\\\\/_
     {{\`-.__.-'(\`(^^(^^^(^ 9 \`.========='
    {{{{{{ { ( ( (  (   (-----:=
     {{.-'~~'-.(,(,,(,,,(__6_.'=========.
                     ::::\\\\/\\\\
                     |||| \\\\/\\\\  ,-'/,
                    ////   \\\\ \`\` _/ ;
                   ''''     \\\\  \`  .'
                             \`---'
EOC
`,Ft=`# LOLLERSKATES
$the_cow = <<EOC;
   $thoughts
    $thoughts
        /\\\\O
         /\\\\/
        /\\\\
       /  \\\\
      LOL LOL
:-D LOLLERSKATES :-D
EOC
`,Bt=`##
## From the canonical koala collection
##
$the_cow = <<EOC;
  $thoughts
   $thoughts          .
       ___   //
     {~$eye_$eye~}// 
      ( Y )K/  
     ()~*~()   
     (_)-(_)   
     Luke    
     Skywalker
     koala   
EOC
`,Vt=`# MailChimp
#
# view-source:http://mailchimp.com/
$the_cow = <<EOC;
$thoughts
 $thoughts
    ______
   / ___M ]__
C{ ( o o )}
    {     ••
      \\\\___
      ----´
EOC
`,Kt=`# maze-runner.cow
#
#   a guy running through an ASCII maze
#   found at http://pip.readthedocs.org/en/user_builds/pip/rtd-builds/latest/installing/
#
$the_cow = <<EOC;
    $thoughts
     $thoughts
      $thoughts
       \\\\
        \\\\
         \\\\
    \\\\     \\\\                     /
     \\\\     \\\\                   /
      \\\\     \\\\                 /
       ]     \\\\               [    ,'|
       ]      \\\\              [   /  |
       ]___               ___[ ,'   |
       ]  ]\\\\             /[  [ |:   |
       ]  ] \\\\           / [  [ |:   |
       ]  ]  ]         [  [  [ |:   |
       ]  ]  ]__     __[  [  [ |:   |
       ]  ]  ] ]\\\\ _ /[ [  [  [ |:   |
       ]  ]  ] ] (#) [ [  [  [ :===='
       ]  ]  ]_].nHn.[_[  [  [
       ]  ]  ]  HHHHH. [  [  [
       ]  ] /   \`HH("N  \\\\ [  [
       ]__]/     HHH  "  \\\\[__[
       ]         NNN         [
       ]         N/"         [
       ]         N H         [
      /          N            \\\\
     /           q,            \\\\
    /                           \\\\
EOC

`,kt=`$the_cow = <<EOC;
      $thoughts                            |     |
       $thoughts                        ,--|     |-.
                         __,----|  |     | |
                       ,;::     |  \`_____' |
                       \`._______|    i^i   |
                                \`----| |---'| .
                           ,-------._| |== ||//
                           |       |_|P\`.  /'/
                           \`-------' 'Y Y/'/'
                                     .==\\ /_\\
   ^__^                             /   /'|  \`i
   ($eyes)\\_______                   /'   /  |   |
   (__)\\       )\\/\\             /'    /   |   \`i
    $tongue ||----w |           ___,;\`----'.___L_,-'\`\\__
       ||     ||          i_____;----\\.____i""\\____\\
EOC
`,Zt=`##
## A meowing tiger?
##
$the_cow = <<EOC;
  $thoughts
   $thoughts ,   _ ___.--'''\`--''//-,-_--_.
      \\\\\`"' \` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\\`,_
     /'\`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ \`-,
    /\\$eye"\\\\  \` \\\\ \`\\\\ |  | ||/ // | \\\\/  \\\\  \`-._\`-,_.,
   /  _.-. \`.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     \`-._._)
   \`-'\`\`/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\
    $tongue  \`-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |
          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'
         (((__/(((_.' ((___..-'((__,'
EOC
`,Yt=`##
## Milk from Milk and Cheese
##
$the_cow = <<EOC;
 $thoughts     ____________ 
  $thoughts    |__________|
      /           /\\\\
     /           /  \\\\
    /___________/___/|
    |          |     |
    |  ==\\\\ /== |     |
    |   $eye   $eye  | \\\\ \\\\ |
    |     <    |  \\\\ \\\\|
   /|          |   \\\\ \\\\
  / |  \\\\_____/ |   / /
 / /|    $tongue    |  / /|
/||\\\\|          | /||\\\\/
    -------------|   
        | |    | | 
       <__/    \\\\__>
EOC
`,jt=`$the_cow = <<"EOC";
        $thoughts   ^__^
         $thoughts  ($eyes)
            (__)
           /-||-\\\\
           \\\\|\\\\/|/
            o==o 
            ||||
            ()()
EOC
`,zt=`# Mona Lisa
#
# from http://www.heartnsoul.com/ascii_art/mona_lisa_ascii.htm
$the_cow = <<EOC;
          $thoughts
           $thoughts

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>''''''<!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!'''''\`             \`\`'!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!''\`          .....         \`'!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!'\`      .      :::::'            \`'!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!'     .   '     .::::'                \`!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!'      :          \`\`\`\`\`                   \`!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!        .,cchcccccc,,.                       \`!!!!!!!!!!!!
!!!!!!!!!!!!!!!     .-"?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$c,                      \`!!!!!!!!!!!
!!!!!!!!!!!!!!    ,ccc\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$,                     \`!!!!!!!!!!
!!!!!!!!!!!!!    z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$;.                    \`!!!!!!!!!
!!!!!!!!!!!!    <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$:.                    \`!!!!!!!!
!!!!!!!!!!!     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h;:.                   !!!!!!!!
!!!!!!!!!!'     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h;.                   !!!!!!!
!!!!!!!!!'     <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$                   !!!!!!!
!!!!!!!!'      \`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F                   \`!!!!!!
!!!!!!!!        c\\$\\$\\$\\$???\\$\\$\\$\\$\\$\\$\\$P""  """??????"                      !!!!!!
!!!!!!!         \`"" .,.. "\\$\\$\\$\\$F    .,zcr                            !!!!!!
!!!!!!!         .  dL    .?\\$\\$\\$   .,cc,      .,z\\$h.                  !!!!!!
!!!!!!!!        <. \\$\\$c= <\\$d\\$\\$\\$   <\\$\\$\\$\\$=-=+"\\$\\$\\$\\$\\$\\$\\$                  !!!!!!
!!!!!!!         d\\$\\$\\$hcccd\\$\\$\\$\\$\\$   d\\$\\$\\$hcccd\\$\\$\\$\\$\\$\\$\\$F                  \`!!!!!
!!!!!!         ,\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$                   \`!!!!!
!!!!!          \`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$<\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$'                    !!!!!
!!!!!          \`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$"\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$P>                     !!!!!
!!!!!           ?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$??\\$c\`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$?>'                     \`!!!!
!!!!!           \`?\\$\\$\\$\\$\\$\\$I7?""    ,\\$\\$\\$\\$\\$\\$\\$\\$\\$?>>'                       !!!!
!!!!!.           <<?\\$\\$\\$\\$\\$\\$c.    ,d\\$\\$?\\$\\$\\$\\$\\$F>>''                       \`!!!
!!!!!!            <i?\\$P"??\\$\\$r--"?""  ,\\$\\$\\$\\$h;>''                       \`!!!
!!!!!!             \\$\\$\\$hccccccccc= cc\\$\\$\\$\\$\\$\\$\\$>>'                         !!!
!!!!!              \`?\\$\\$\\$\\$\\$\\$F""""  \`"\\$\\$\\$\\$\\$>>>''                         \`!!
!!!!!                "?\\$\\$\\$\\$\\$cccccc\\$\\$\\$\\$??>>>>'                           !!
!!!!>                  "\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F>>>>''                            \`!
!!!!!                    "\\$\\$\\$\\$\\$\\$\\$\\$???>'''                                !
!!!!!>                     \`"""""                                        \`
!!!!!!;                       .                                          \`
!!!!!!!                       ?h.
!!!!!!!!                       \\$\\$c,
!!!!!!!!>                      ?\\$\\$\\$h.              .,c
!!!!!!!!!                       \\$\\$\\$\\$\\$\\$\\$\\$\\$hc,.,,cc\\$\\$\\$\\$\\$
!!!!!!!!!                  .,zcc\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$
!!!!!!!!!               .z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$
!!!!!!!!!             ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$          .
!!!!!!!!!           ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$         !!
!!!!!!!!!         ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$        ,!'
!!!!!!!!>        c\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$.       !'
!!!!!!''       ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>       '
!!!''         z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>
!'           ,\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>             ..
            z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$'           ;!!!!''\`
            \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F       ,;;!'\`'  .''
           <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>    ,;'\`'  ,;
           \`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F   -'   ,;!!'
            "?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F     .<!!!'''       <!
         !>    ""??\\$\\$\\$?C3\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$""     ;!'''          !!!
       ;!!!!;,      \`"''""????\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$""   ,;-''               ',!
      ;!!!!<!!!; .                \`"""""""""""    \`'                  ' '
      !!!! ;!!! ;!!!!>;,;, ..                  ' .                   '  '
     !!' ,;!!! ;'\`!!!!!!!!;!!!!!;  .        >' .''                 ;
    !!' ;!!'!';! !! !!!!!!!!!!!!!  '         -'
   <!!  !! \`!;! \`!' !!!!!!!!!!<!       .
   \`!  ;!  ;!!! <' <!!!! \`!!! <       /
  \`;   !>  <!! ;'  !!!!'  !!';!     ;'
   !   !   !!! !   \`!!!  ;!! !      '  '
  ;   \`!  \`!! ,'    !'   ;!'
      '   /\`! !    <     !! <      '
           / ;!        >;! ;>
             !'       ; !! '
          ' ;!        > ! '

EOC
`,Jt=`##
## MOOfasa.
##
$the_cow = <<EOC;
       $thoughts    ____
        $thoughts  /    \\\\
          | ^__^ |
          | ($eyes) |______
          | (__) |      )\\\\/\\\\
           \\\\____/|----w |
                ||     ||

	         Moofasa
EOC
`,Qt="$the_cow = <<EOC;\n $thoughts       $thoughts      $thoughts      \n  $thoughts        ^__^  $thoughts        \n    ^__^   ($eyes)   ^__^  \n    ($eyes)   (__)   ($eyes)   \n    (__)    $tongue    (__)   \noyo/:$tongue            $tongue:/oy+\n/mmmmm+   syyyyo  `ommmmm/\n smmmmms. -ymmy. .smmmmmo \n `+dmmmmd+``::``+dmmmmd+  \n   -ymmmmmh/``+hmmmmmy-   \n    `/hmmmmmhhmmmmmh/`    \n      `/hmmmmmmmmh/`      \n        `/hmmmmmd/        \n      `oo.`/dmmmmdo`      \n     `ymmd+``ommmmmy`     \n     smmmmd-  /mmmmms     \n    -mmmmm+    ommmmm-    \n    -ooooo`    .ooooo.     \nEOC\n",qt="$the_cow = <<EOC;\n     $thoughts              \n      $thoughts    /ss/           \n   `oys:  .dmmd`  :syo`   \n   /dmmy   .//.   hmmd:   \n    -/:`          `:/-    \noyo/:.     ^__^     .:/oy+\n/mmmmm+   <($eyes\\)>  `ommmmm/\n smmmmms. -(__). .smmmmmo \n `+dmmmmd+``$tongue``+dmmmmd+  \n   -ymmmmmh/``+hmmmmmy-   \n    `/hmmmmmhhmmmmmh/`    \n      `/hmmmmmmmmh/`      \n        `/hmmmmmd/        \n      `oo.`/dmmmmdo`      \n     `ymmd+`VVmmmmmy`     \n     smmmmd-  /mmmmms     \n    -mmmmm+    ommmmm-    \n    -ooooo`    .ooooo.    \nEOC\n",_e=`$the_cow = <<EOC;
  $thoughts
   $thoughts   \\\\_\\\\_    _/_/
    $thoughts      \\\\__/
           ($eyes)\\\\_______
           (__)\\\\       )\\\\/\\\\
            $tongue ||----- |
               ||     ||
EOC
`,ne=`# Mule
#
# based on mule from http://rossmason.blogspot.com/2008/10/friday-ascii-art.html 
#
$the_cow = <<EOC;
     $thoughts
      $thoughts 
  /\\\\          /\\\\                               
 ( \\\\\\\\        // )                              
  \\\\ \\\\\\\\      // /                               
   \\\\_\\\\\\\\||||//_/                                
     / _  _ \\\\/                                 
                                               
     |(o)(o)|\\\\/                                
     |      | \\\\/                               
     \\\\      /  \\\\/_____________________         
      |____|     \\\\\\\\                  \\\\\\\\        
     /      \\\\     ||                  \\\\\\\\       
     \\\\ 0  0 /     |/                  |\\\\\\\\      
      \\\\____/ \\\\    V           (       / \\\\\\\\     
       / \\\\    \\\\     )          \\\\     /   \\\\\\\\    
      / | \\\\    \\\\_|  |___________\\\\   /     "" 
                  ||  |     \\\\   /\\\\  \\\\          
                  ||  /      \\\\  \\\\ \\\\  \\\\         
                  || |        | |  | |         
                  || |        | |  | |         
                  ||_|        |_|  |_|         
                 //_/        /_/  /_/          
EOC
`,te=`##
## A mutilated cow, from aspolito@csua.berkeley.edu
##
$the_cow = <<EOC;
       $thoughts   \\\\_______
 v__v   $thoughts  \\\\   O   )
 ($eyes)      ||----w |
 (__)      ||     ||  \\\\/\\\\
  $tongue
EOC
`,ee=`# Nyan Cat
#
# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/clt4ybl
#
$the_cow = <<EOC;
       $thoughts
        $thoughts

+      o     +              o   
    +             o     +       +
o          +
    o  +           +        +
+        o     o       +        o
-_-_-_-_-_-_-_,------,      o 
_-_-_-_-_-_-_-|   /\\\\_/\\\\  
-_-_-_-_-_-_-~|__( ^ .^)  +     +  
_-_-_-_-_-_-_-''  ''      
+      o         o   +       o
    +         +
o        o         o      o     +
    o           +
+      +     o        o      +    
EOC

`,$e=`# octopus
#   http://www.ascii-art.de/ascii/mno/octopus.txt
$the_cow = <<EOC;
        $thoughts               ___
         $thoughts           .-'   \`'.
                    /         \\\\
                    |         ;
                    |         |           ___.--,
           _.._     |0) ~ (0) |    _.---'\`__.-( (_.
    __.--'\`_.. '.__.\\\\    '--. \\\\_.-' ,.--'\`     \`""\`
   ( ,.--'\`   ',__ /./;   ;, '.__.'\`    __
   _\`) )  .---.__.' / |   |\\\\   \\\\__..--""  """--.,_
  \`---' .'.''-._.-'\`_./  /\\\\ '.  \\\\ _.-~~~\`\`\`\`~~~-._\`-.__.'
        | |  .' _.-' |  |  \\\\  \\\\  '.               \`~---\`
         \\\\ \\\\/ .'     \\\\  \\\\   '. '-._)
          \\\\/ /        \\\\  \\\\    \`=.__\`~-.
     jgs  / /\\\\         \`) )    / / \`"".\`\\\\
    , _.-'.'\\\\ \\\\        / /    ( (     / /
     \`--~\`   ) )    .-'.'      '.'.  | (
            (/\`    ( (\`          ) )  '-;
             \`      '-;         (-'
EOC
`,oe=`#
# おかず
#

$the_cow = <<EOC;
  $thoughts
   $thoughts                _, _ ,､
    $thoughts          , - ´      \`--、
             ノ               丶
           ／                  \`､_
         ,´                        、
        ,'                          丶
       ﾉ                             ヽ
    ＿;＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿',＿
    ヽ三三三三三三三三三三三三三三三三三ﾉ
      ヽ                              /
       ヽ三三三三三三三三三三三三三三/
         ＼                        ／
           ＼三三三三三三三三三三／
             \`＜              ＞´
               ｀丁三三三三丁´
     ＿          ｀ ｰ----‐ ´
  ／::/＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿_
（;;;ﾌ ｰ─----＝＝ === ニニニ 二二二三三三｣

         ＿|＿ ＼  ＿ｌ＿＼  _＿|＿_ヽヽ
          _|＿       ｜ヽ     __|
        ／ |  ヽ     ﾉ  │   (__|
        ＼ノ  ノ    ﾉ ヽﾉ     _ノ 
EOC
`,Te=`##
## An owl
##
$the_cow = <<EOC;
         $thoughts
          $thoughts
           ___
          (o o)
         (  V  )
        /--m-m-
EOC
`,Ee=`# Pawn (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
     __
    (  )
     ||
    /__\\\\
   (____)
EOC
`,Le=`$the_cow = <<EOC;
$thoughts
 $thoughts
   1A   2A                                         3A  4A  5A  6A  7A  8A
  -----                                                               -----
1 | H |                                                               |He |
  |---+----                                       --------------------+---|
2 |Li |Be |                                       | B | C | N | O | F |Ne |
  |---+---|                                       |---+---+---+---+---+---|
3 |Na |Mg |3B  4B  5B  6B  7B |    8B     |1B  2B |Al |Si | P | S |Cl |Ar |
  |---+---+---------------------------------------+---+---+---+---+---+---|
4 | K |Ca |Sc |Ti | V |Cr |Mn |Fe |Co |Ni |Cu |Zn |Ga |Ge |As |Se |Br |Kr |
  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|
5 |Rb |Sr | Y |Zr |Nb |Mo |Tc |Ru |Rh |Pd |Ag |Cd |In |Sn |Sb |Te | I |Xe |
  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|
6 |Cs |Ba |Lu |Hf |Ta | W |Re |Os |Ir |Pt |Au |Hg |Tl |Pb |Bi |Po |At |Rn |
  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|
7 |Fr |Ra |Lr |Rf |Db |Sg |Bh |Hs |Mt |Ds |Rg |Cn |Nh |Fl |Mc |Lv |Ts |Og |
  -------------------------------------------------------------------------
              -------------------------------------------------------------
   Lanthanide |La |Ce |Pr |Nd |Pm |Sm |Eu |Gd |Tb |Dy |Ho |Er |Tm |Yb |Lu |
              |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|
   Actinide   |Ac |Th |Pa | U |Np |Pu |Am |Cm |Bk |Cf |Es |Fm |Md |No |Lr |
              -------------------------------------------------------------
EOC
`,he=`# Personality Sphere from Portal/Portal 2
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
   $thoughts
    $thoughts
      .-+\\$H###MM\\@MMMMM##\\@\\$+-,. ....
-\\@\\$+%\\$+%HX+--..  .  . .,:X\\$/+/++\\$#:
-#MXH\\$=                      \\$HXH#:
 .--,:#+   ,+\\$HMX =\\@\\@X%, . .X#:,,,
     =#\\@\\$H :####H =####;,M%\\$#X
     X###\\$ \\$####X =####H %###X
    ;###X /###\\@\\$: ,+HM##H.+###;
   :###;,X##%=;%H\\@H\\$;-;M#\\@-;###/
  ,M##;.\\@##;-H#######M=.M##-:###-
  ;##M ;##X \\@###H-=\\@###.;##X H##;
  ;##M./##X.\\@###H:/M###-=##X X##;
  -###;,M##:,\\@########+-H##; \\@##-
   %##M==\\@##%==%HMH%::/M##+.X##+
    %###/./###X+: -+\\$M##M=,X##+
     X###X X####H +#####% \\@##H
     :###H %####H +#####; X##;
     /#\\$.  -HM##H /###\\@+.  +#\\$. .
/HX%\\$X:      .,-, .-,.      =XX\\$H\\@-
/#H+/+%+/+;=.          .=/%;;/;;+#+
 ..  .,-:XM#MM\\@\\@\\@\\@\\@\\@H\\@\\@M#\\@+=,.   ,,
EOC
`,Ie=`# Pinball machine
#
# from http://ascii.co.uk/art/pinball
$the_cow = <<EOC;
    $thoughts
     $thoughts
              /\\\\
             <  \\\\
             |\\\\  \\\\
             | \\\\  \\\\
             | .\\\\  >
             |  .\\\\/|
             |   .||
             |    ||
            / \\\\   ||
           /,-.\\\\: ||
          /,,  \`\\\\ ||
         /,  ', \`\\\\||
        /, *   ''/ |
       /,    *,'/  |
      /,     , /   |
     / :    , /   .|
    /\\\\ :   , /   /||
   |\\\\ \\\\ .., /   / ||
   |.\\\\ \\\\ . /   /  ||
   |  \\\\ \\\\ /   /   ||
   |   \\\\ /   /    |'
   |\\\\o '|o  /
   ||\\\\o |  /
   || \\\\ | /
   ||  \\\\|/
   |'   ||
        ||
        ||
        |'
EOC
`,Ae=`use utf8;
$the_cow = <<EOC;
 $thoughts      .------------------------.
  $thoughts     |       PSYCHIATRIC      |
   $thoughts    |         HELP  5¢       |
    $thoughts   |________________________|
     $thoughts  ||     .-"""--.         ||
      $thoughts ||    /        \\\\.-.     ||
        ||   |     ._,     \\\\    ||
        ||   \\\\_/\`-'   '-.,_/    ||
        ||   (_   (' _)') \\\\     ||
        ||   /|           |\\\\    ||
        ||  | \\\\     __   / |    ||
        ||   \\\\_).,_____,/}/     ||
      __||____;_--'___'/ (      ||
     |\\\\ ||   (__,\\\\\\\\    \\\\_/------||
     ||\\\\||______________________||
     ||||                        |
     ||||       THE DOCTOR       |
     \\\\|||         IS [IN]   _____|
      \\\\||                  (______)
 jgs   \`|___________________//||\\\\\\\\
                           //=||=\\\\\\\\
                           \`  \`\`  \`
EOC
`,se=`$the_cow = <<EOC;
        $thoughts         ____________________
         $thoughts       |                    |
          $thoughts      |     PSYCHIATRIC    |
           $thoughts     |        HELP        |
            $thoughts    |____________________|
             $thoughts   ||  ,-..'\`\`.        ||
              $thoughts  || (,-..'\`. )       ||
                 ||   )-c - \`)\\\\      ||
   ,.,._.-.,_,.,-||,.(\`.--  ,\`',.-,_,||.-.,.,-,._.
              ___||____,\`,'--._______||
             |\`._||______\`'__________||
             |   ||     __           ||
             |   ||    |.-' ,|-      ||
   _,_,,..-,_|   ||    ._)) \`|-      ||,.,_,_.-.,_
            . \`._||__________________||   ____    .
     .              .           .     . <.____\`>
   .SSt  .      .     .      .    .   _.()\`'()\`'  .
EOC
   `,re=`# pterodactyl.cow
#
#   a pterodactyl with its mouth open
#
$the_cow = <<EOC;
    $thoughts
     $thoughts
      $thoughts
                                                                                 -/- 
                                                                              -/ --/    
                                                                            /- -  /     
                                                                         //      /      
                                                                        /       /       
                                                                      //       /        
                                                                    //        /         
                                                                  //          /         
                                                                ///           /         
                                                               //            /          
                                                              //            /           
                                                             //          . ./           
                                                             //       .    /            
                                                             //    .      /             
                                                             //  .       /              
                                                            // .         /              
                                                          (=>            /              
                                                         (==>            /              
                                                          (=>            /              
             -_                                           //.           /               
             \\\\\\\\-_                                        //   .         /               
              \\\\ \\\\_-_                                     //     .       /               
               \\\\_ \\\\_--_                                 //        . . . /               
                 \\\\_ \\\\_ -_                              //              /                
                   \\\\_ \\\\_ (O)-___                      //               /                
                     \\\\ _\\\\   __  --__                  /                /                
                     _/    \\\\  ----__--____          //                 /                
                   _/  _/   \\\\       -------       //                  /                 
                 _/ __/ \\\\\\\\   \\\\\\\\                  /                   /                  
               _/ _/      \\\\\\\\   \\\\\\\\              //                   /                   
              -__/          \\\\\\\\   \\\\\\\\\\\\          //                   /                    
                              \\\\\\\\    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//   -                /                    
                                \\\\\\\\         _/         -            /                    
                                  \\\\\\\\                      -        \\\\                    
                                    \\\\\\\\\\\\                       -     \\\\                   
                                        \\\\\\\\                       -   \\\\                  
                                          \\\\\\\\\\\\                         \\\\--__             
                                           | \\\\\\\\                            \\\\__________  
                                            |  \\\\\\\\\\\\\\\\                ___      _________-\\\\\\\\
                                            |    \\\\\\\\\\\\\\\\\\\\                \\\\--__/____        
                                            |        \\\\\\\\\\\\\\\\________---\\\\-    ______-----   
                                             |                   /    \\\\--  \\\\_______     
                                             |                   /       \\\\-_________\\\\   
                                             \\\\                   /                  \\\\\\\\  
                                             \\\\                 ./                       
                                             \\\\            .     /                       
                                              \\\\        .       /                        
                                              \\\\    .           //                       
                                              \\\\                /                        
                                              |__              /                        
                                              \\\\==              /                        
                                               \\\\\\\\              \\\\                        
                                                \\\\\\\\  .          \\\\                        
                                                  \\\\\\\\    .  .   \\\\                        
                                                   \\\\           .\\\\                       
                                                   \\\\\\\\            \\\\                      
                                                     \\\\           \\\\                      
                                                      \\\\\\\\          \\\\                     
                                                        \\\\\\\\         \\\\                    
                                                          \\\\         \\\\--                 
                                                           \\\\\\\\          \\\\                
                                                             \\\\\\\\         \\\\\\\\\\\\\\\\            
                                                               \\\\\\\\\\\\\\\\_________\\\\\\\\\\\\         
EOC

`,ae=`# Queen (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts
     ()
   <~~~~>
    \\\\__/
   (____)
    |  |
    |  |
    |__|
   /____\\\\
  (______)
 (________)
EOC
`,ie=`# R2-D2
#
# from http://www.ascii-art.de/ascii/s/starwars.txt
$the_cow = <<EOC;
   $thoughts
    $thoughts
         _____
       .\\'/L|__\`.
      / =[_]O|\` \\\\
      |\\"+_____\\":|
    __:='|____\`-:__
   ||[] ||====| []||
   ||[] | |=| | []||
   |:||_|=|U| |_||:|
   |:|||]_=_ =[_||:| LS
   | |||] [_][]C|| |
   | ||-\\'\\"\\"\\"\\"\\"\`-|| |
   /|\\\\\\\\_\\\\_|_|_/_//|\\\\
  |___|   /|\\\\   |___|
  \`---\\'  |___|  \`---\\'
         \`---'
EOC
`,ue=`# radio from Portal
# via http://pastebin.com/1AZwKrKp
$the_cow = <<EOC;
     $thoughts
      $thoughts
                    ;=
                    /=
                    ;=
                    /=
                    ;=
                    /=
                    ;=
                    /=
             ,--==-:\\$;
         ,/\\$@#######\\@X+-
      ./@###############X=
     /M#####X+/;;;;+H#####\\$.
    %####M/;+H\\@XX@@%;;\\@####\\@,
   +####H=+##\\$,--,=M#X-%####\\@.
  -####X,X\\@HHXH##MXHXXH-+####\\$
  X###\\@.X/\\$M\\$:####\\$=\\@X/X,X####-
 .####:+\\$:##\\@:####\\$:##H/X=####%
 -%%\\$%,+==%\\$+-\\$+:\\$;-\\$\\$%-+,/\\$%%+
 -/+%%X\\$XX\\$\\$\\$\\$\\$\\$\\$%\\$\\$\\$%\\$X\\$X\\$%+/-
EOC
`,Xe=`##
## Ren 
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
    ____  
   /# /_\\\\_
  |  |/$eye\\\\$eye\\\\
  |  \\\\\\\\_/_/
 / |_   |  
|  ||\\\\_ ~| 
|  ||| \\\\/  
|  |||_    
 \\\\//  |    
  ||  |    
  ||_  \\\\   
  \\\\_|  o|  
  /\\\\___/   
 /  ||||__ 
    (___)_)
EOC
`,Oe=`##
## Nyanpasu~
##
$the_cow = <<EOC;
     $thoughts               _
      $thoughts            ´   ＼   __
       $thoughts        ／ ／⌒\\\\ | ／   ＼
   f|{r、       | /     '|/ ／⌒＼＼
   ||J |        \\\\/＞--＜\\\\/ /--    |
(＼|\`\` し]ﾄ----／          ⌒\` ＼| /
 ＼      ﾉ\\\\   /                ＼|/\\\\   --、___
  ゛    /  ＼/      /     |         \\\\/_       ﾉ
   \\\\、/\\\\_／/ｲ    ,/'|    /\\\\ 、        Ⅵ   __／
    [\\\\/   \\\\/_|   /\\\\|/|   |-]  、     く-く
    |      \\\\/|  |/___ﾉ\\\\  /\\\\___ \\\\     /   ＼
    {/      <|小| _ﾒﾘ  \\\\/  _ﾒﾘ\` \\\\   ｜|   |
     \\\\        ｜| \\\\/ｿ      \\\\/ｿ  ﾉ / /\\\\|＼_/
      \\\\       ｜|              /_ｲ\\\\/
       \\\\      ｜|     /ヽ      / /ﾉ
        \\\\     ｜/\\\\   └-     ,/ /'
         \\\\    ｜ |／>> r -=≦{{/ /ﾆ=_
          \\\\   人 | ／ｨ|     /ﾚ/__   ﾉﾆ-、
           ＼   \\\\|/  Xﾉ    / /   入//⌒Yﾊ
             \\\\  /し ｜\`---' //  /  \\\\ﾆﾆﾆﾉ|
              ＼/  / \\\\  --ｱ ｜  |   | _]|
               ｜ /   \\\\/\\\\/  ｜  |   |___|
               r勺    ｜_｜ ｜  |   |  ||
               |\`7    ｜ ｜ ｜  |   |   |
EOC
`,Me=`# Robot
#
# based on rfksay by Andrew Northern
# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay
#
$the_cow = <<EOC;
  $thoughts
   $thoughts

     [-]
     (+)=C
     | |
     OOO
EOC
`,le=`# Robot finds kitten <3
#
# based on rfksay by Andrew Northern
# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay
#
$the_cow = <<EOC;
  $thoughts
   $thoughts

    [-]   |\\\\_/|
    (+)=C |o o|__
    | |   --*--__\\\\
    OOO   C_C_(___)
EOC
`,Ce=`$the_cow = <<EOC;
   $thoughts
    $thoughts
 ROFL:ROFL:ROFL:ROFL
         _^___
 L    __/   $eyes \\\\    
LOL===__        \\\\ 
 L      \\\\________]
         I   I  $tongue
        --------/
EOC
`,Re=`# Rook (Chess piece)
#
# from http://www.chessvariants.org/d.pieces/ascii.html
#   by David Moeser
#
$the_cow = <<EOC;
 $thoughts
  $thoughts

   WWWWWW
    |  |
    |  |
    |__|
   /____\\\\
  (______)
EOC
`,ce=`#
# プロデューサーさんは独特の変わったセンスをしてますね！
#
$the_cow = <<EOC;
     $thoughts
      $thoughts
       $thoughts
             , -――- 、
          ／          ヽ、
        /爻ﾉﾘﾉﾊﾉﾘlﾉ ゝ  l
     ＜ﾉﾘﾉ‐'    ｰ  ﾘ ＞ }
        l ﾉ ┃    ┃ l ﾉ  ﾉ
        l人   r‐┐   !ﾉ＾)
           ゝ \` ´ ‐＜´
EOC
`,ge=`##
## Satanic cow, source unknown.
##
$the_cow = <<EOC;
     $thoughts
      $thoughts  (__)  
         (\\\\/)  
  /-------\\\\/    
 / | 666 ||$tongue  
*  ||----||      
   ~~    ~~      
EOC
`,Ue=`# large seahorse
#
# adapted from http://www.chris.com/ascii/index.php?art=animals/other%20(water)
$the_cow = <<EOC;
     $thoughts
      $thoughts
                  ,
         ___     /^\\\\   ,
        \`\\  \\'...\`   \\\\_/^\\\\
          ) ~     ',    /__,
         /       ,.    ,, /___,
        (  .-.   \\'.\\'. /// ___/
         ) .-.\\'  .\`.\`///-.\\'.
        / ( o )  .\\"\\". ====) \\\\
       (   \\'-\`   \\\\  |\\'~~~\`  u\\\\,
        \\\\ _~  .\\"\\"\\"\` |~|^u^ u^(\\"\\"
        //  ."     /~/^ u^ u^\\
       // ."      /~  u^ u  ^u\\      _
      // ."      /~/U^ U^ U^ ^(     / )
     /\` ."       |~  U^ U^ ^ U^\\   /) _)
   ./\` ."        |~|^ U^ ^U ^ U(  / _  _)
  ;.\`."          |~ ^U ^ U^ U ^/ /)_ =  _)
   \\"\\"            |~|^ ^U ^ ^ U(_/_    )- _)
                 |~ U ^ ^U ^U ^ )   =    _)
                 \\\\~|^ U U^ U ^ =  ~ )  - _)
                  \\\\ U ^U ^ ^U^_)     =  _)
                   \\",^U^ ^U ^/ \\\\)_~   -_)
                     \\".u^u ^|   \\\\_  = _)
                      ).u ^u|    \\\\)  _)
                      \\\\u ^u^(     \\\\__)
                       )^u ^u\\\\
                       \\\\u ^u ^|
             ____       )^u ^u|
          ,-\`    '-.    )u ^u^|
         /  .---. ' \\\\  / ^ u^/
        |  ;  \`  '  | /u^u ^/
        |  ;  '-\` . \`:u^u^u/
        \\\\.\\'^\\'._   _.\`u ^.-\`
         \\\\_.~=_\`\`\`-.^.-\\"
           \\'\\"------\\"\`

EOC
`,Ne=`# seahorse
#
# adapted from http://www.chris.com/ascii/index.php?art=animals/other%20(water)
$the_cow = <<EOC;
   $thoughts
    $thoughts

      (\\\\(\\\\/
  .-._)oo  '_
  \\'---.     .\\'\\\\
       )    \\\\.-\\'\\\\
      /__ ;     (
      |__ : /'._/
       \\\\_  (
       .,)  )
       \\'-.-\\'

EOC
`,fe=`##
## The non-flaming sheep.
##
$the_cow = <<EOC
  $thoughts
   $thoughts
       __     
      U\${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@\`.
      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)
        $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)
           \`YY~~~~YY'
            ||    ||
EOC
`,Se=`$the_cow = <<EOC;
  $thoughts
   $thoughts

     Lｰ'{r ｧjｰノ
      _\`)-ﾑ{
    /´::( ･)ヽ-- ､
   {::::::::::::::}
   ゝ:::::.ノー-
     しｿ¨UU
EOC
`,He=`$the_cow = <<EOC;
  $thoughts
¯\\\\_(ツ)_/¯
EOC
`,me=`##
## This 'Scowleton' brought to you by one of 
## {appel,kube,rowe}@csua.berkeley.edu
##
$the_cow = <<EOC;
          $thoughts      (__)      
           $thoughts     /$eyes|  
            $thoughts   (_"_)*+++++++++*
                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\
                   I[I|I|||||I I \`
                   I\`I'///'' I I
                   I I       I I
                   ~ ~       ~ ~
                     Scowleton
EOC
`,de=`##
## A small cow, artist unknown
##
$eyes = ".." unless ($eyes);
$the_cow = <<EOC;
       $thoughts   ,__,
        $thoughts  ($eyes)____
           (__)    )\\\\
            $tongue||--|| *
EOC
`,we=`# 
$the_cow = <<EOC;
      $thoughts
       $thoughts
        $thoughts                                     ,
                                            ,o
                                            :o
                   _....._                  \`:o
                 .\\'       \`\`-.                \\\\o
                /  _      _   \\\\                \\\\o
               :  /*\\\\    /*\\\\   )                ;o
               |  \\\\_/    \\\\_/   /                ;o
               (       U      /                 ;o
                \\\\  (\\\\_____/) /                  /o
                 \\\\   \\\\_m_/  (                  /o
                  \\\\         (                ,o:
                  )          \\\\,           .o;o\\'           ,o\\'o\\'o.
                ./          /\\\\o;o,,,,,;o;o;\\'\\'         _,-o,-\\'\\'\\'-o:o.
 .             ./o./)        \\\\    \\'o\\'o\\'o\\'\\'         _,-\\'o,o\\'         o
 o           ./o./ /       .o \\\\.              __,-o o,o\\'
 \\\\o.       ,/o /  /o/)     | o o\\'-..____,,-o\\'o o_o-\\'
 \`o:o...-o,o-\\' ,o,/ |     \\\\   \\'o.o_o_o_o,o--\\'\\'
 .,  \`\`o-o\\'  ,.oo/   \\'o /\\\\.o\`.
 \`o\`o-....o\\'o,-\\'   /o /   \\\\o \\\\.                       ,o..         o
   \`\`o-o.o--      /o /      \\\\o.o--..          ,,,o-o\\'o.--o:o:o,,..:o
                 (oo(          \`--o.o\`o---o\\'o\\'o,o,-\\'\\'\\'        o\\'o\\'o
                  \\\\ o\\\\              \`\`-o-o\\'\\'\\'\\'
   ,-o;o           \\\\o \\\\
  /o/               )o )  Carl Pilcher
 (o(               /o /                |
  \\\\o\\.       ...-o\\'o /              \\\\   |
    \\\\o\`o\`-o\\'o o,o,--\\'       ~~~~~~~~\\\\~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      \`\`\`o--\\'\\'\\'                       \\\\| /
                                       |/
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                       |
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

EOC
`,De=`##
## acsii picture From: kwok@menpachi.nmfs.hawaii.edu (William Kwok)
## from http://www.ascii-art.de/ascii/s/snoopy.txt
$the_cow = <<EOC;
 $thoughts
  $thoughts          , ----.
   $thoughts        -  -     \`
      ,__.,'           \\\\
    .'                 *\`
   /       $eye   $eye     / **\\\\
  .                 / ****.
  |    mm           | ****|
   \\\\                | ****|
    \` ._______      \\\\ ****/
              \\\\      /\`---'
               \\\\___(
               /~~~~\\\\
              /      \\\\
             /      | \\\\
            |       |  \\\\
  , ~~ .    |, ~~ . |  |\\\\
 ( |||| )   ( |||| )(,,,)\`
( |||||| )-( |||||| )    | ^
( |||||| ) ( |||||| )    |'/
( |||||| )-( |||||| )___,'-
 ( |||| )   ( |||| )
  \` ~~ '     \` ~~ '
EOC
`,pe=`##
## acsii picture from http://www.ascii-art.de/ascii/s/snoopy.txt
##
$the_cow = <<EOC;
       $thoughts
        $thoughts       __---__                         ______
         $thoughts     /    ___\\\\_             o  O  O _(      )__
              /====(_____\\\\___---_  o        _(           )_
             |                    \\\\        (_  AI-YA!!!!   )
             |                     |@        (_  Shot      _)
              \\\\       ___         /           (__  Again!__)
 \\\\ __----____--_\\\\____(____\\\\_____/                (______)
==|__----____--______|
 /              /    \\\\____/)_
              /        ______)
             /           |  |
            |           _|  |
       ______\\\\______________|______
      /                    *   *   \\\\
     /_____________*____*___________\\\\
     /   *     *                    \\\\
    /________________________________\\\\
    / *                              \\\\
   /__________________________________\\\\
        |                        |
        |________________________|
        |                        |
        |________________________|
EOC
`,ye=`##
## picture from http://www.ascii-art.de/ascii/ab/beagle.txt
## 
$the_cow = <<EOC;
 $thoughts
  $thoughts
   $thoughts     O_      __)(
       ,'  \`.   (_".\`.
      :      :    /|\`
      |      |   ((|_  ,-.
      ; -   /:  ,'  \`:(( -\\\\
     /    -'  \`: ____ \\\\\\\\\\\\-:
    _\\\\__   ____|___  \\\\____|_
   ;    | |        '-\`      :
  :_____|:|__________________:
  ;     |:|                  :
 :      |:|                   :
 ;_______\`'___________________:
:                              :
|______________________________|
 \`---.--------------------.---'
     |____________________|
     |                    |
     |____________________|
     |                    |
   _\\\\|_\\\\|_\\\\/(__\\\\__)\\\\__\\\\//_|(_
EOC
`,We=`$the_cow = <<EOC;
          $thoughts     (
           $thoughts     )
            $thoughts   (
         /\\\\  .-""""-.  /\\\\
        //\\\\\\\\/  ,,,,  \\\\//\\\\\\\\
        |/\\\\| ,;;;;;;, |/\\\\|
        //\\\\\\\\\\\\;-""""-;///\\\\\\\\
       //  \\\\/   ..   \\\\/  \\\\\\\\
      (| ,-_| \\\\ || / |_-, |)
        //\`__(\\\\(__)/)__\`\\\\\\\\
       // /.-\\\\\`($eyes)'/-.\\\\ \\\\\\\\
      (\\\\ |)   ')  ('   (| /)
       \` (|   (o  o)   |) \`
         \\\\)    \`--'    (/
                $tongue
EOC
`,ve=`#
# これスプラトゥーン感あるね
#

$the_cow = <<EOC;
    $thoughts
     $thoughts                                                           ＿＿＿ノ^l
      $thoughts                                            ＿,,ノ\`\`ｰ-'￣￣        ｌ
                                                 く                       /
                                                  \`ヽ,   __､-'           /
                                                    __＞‐´               |
                                           ._,;‐''\`\`              ,     /
                                         _;"                     /     /
                                       ／                       /     く
                                     ／                        /       |
                                   ／                        ／       ｌ
                                 ノ                        ／￣ヽ     /
                                /                        ／     ） _ノ
                            ,r'″ヽ、                   ／        ￣
                           /      ヽ                 ／
                        ＿ﾉ        \`r            _､‐'
                      ／          _l,_       _､‐'
                 __,r'          ／r;;,ヽ   ／
               ,/              ｜.;●,;;|  ノ
              ノ ／  ／／       ヽ､!!!ﾞﾉ "
            ／ ／／／  ／／___,r''"￣
           / ／ / / /／ / /
      ___／／/／／／ ／／/
  ／￣＿_／／／/ / ／／／
 l ／´___／／／／／／ /
 しレ"／／/ /  ／／//／
      / ,/ / ／／／ /
      ﾚ'   ﾚ'／／ ／
           ／l｜l/
          ｜|ﾚ'lノ
           レ'
EOC
`,Pe=`$the_cow = <<EOC;
  $thoughts
     $thoughts
                  _ _
       | \\__/|  .~    ~.
       /$eyes \`./      .'
      {o__,   \\    {
        / .  . )    \\
        \`-\` '-' \\    }
       .(   _(   )_.'
      '---.~_ _ _|
                                                     
EOC
`,xe=`##
## A stegosaur with a top hat?
##
$the_cow = <<EOC;
$thoughts                             .       .
 $thoughts                           / \`.   .' " 
  $thoughts                  .---.  <    > <    >  .---.
   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |
         _____          ..-~             ~-..-~
        |     |   \\\\~~~\\\\.'                    \`./~~~/
       ---------   \\\\__/                        \\\\__/
      .'  $eye    \\\\     /               /       \\\\  " 
     (_____,    \`._.'               |         }  \\\\/~~~/
      \`----.          /       }     |        /    \\\\__/
            \`-.      |       /      |       /      \`. ,~~|
                ~-.__|      /_ - ~ ^|      /- _      \`..-‘ / \\\\  /\\\\
                     |     /        |     /     ~-.     \`-/ _ \\\\/__\\\\
                     |_____|        |_____|         ~ - . _ _ _ _ _>
EOC
`,Ge=`##
## Stimpy!
##
$the_cow = <<EOC;
  $thoughts     .    _  .    
   $thoughts    |\\\\_|/__/|    
       / / \\\\/ \\\\  \\\\  
      /__|$eye||$eye|__ \\\\ 
     |/_ \\\\_/\\\\_/ _\\\\ |  
     | | (____) | ||  
     \\\\/\\\\___/\\\\__/  // 
     (_/         ||
      |          ||
      |          ||\\\\   
       \\\\        //_/  
        \\\\______//
       __ || __||
      (____(____)
EOC
`,be=`# Sudowoodo (Pokémon)
#
# https://gist.github.com/rzabcik/9233650/
#
$the_cow = <<EOC;
     $thoughts
      $thoughts
     _              __
    / \`\\\\  (~._    ./  )
    \\\\__/ __\`-_\\\\__/ ./
   _ \\\\ \\\\/  \\\\   \\\\ |_   __
 (   )  \\\\__/ -^    \\\\ /  \\\\
  \\\\_/ "  \\\\  | o  o  |.. /  __
       \\\\. --' ====  /  || /  \\\\
         \\\\   .  .  |---__.\\\\__/
         /  :     /   |   |
         /   :   /     \\\\_/
      --/ ::    (
     (  |     (  (____
   .--  .. ----**.____)
   \\\\___/
EOC
`,Fe=`##
## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)
##
$the_cow = <<EOC;
  $thoughts   ^__^
   $thoughts  ($eyes)\\\\_______        ________
      (__)\\\\       )\\\\/\\\\    |Super |
       $tongue ||----W |       |Milker|
          ||    UDDDDDDDDD|______|
EOC
`,Be=`##
## A cow operation, artist unknown
##
$the_cow = <<EOC;
          $thoughts           \\\\  / 
           $thoughts           \\\\/  
               (__)    /\\\\         
               ($eyes)   O  O        
               _\\\\/_   //         
         *    (    ) //       
          \\\\  (\\\\\\\\    //       
           \\\\(  \\\\\\\\    )                              
            (   \\\\\\\\   )   /\\\\                          
  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     
 |\\\\__[=======______//________)__\\\\                    
 \\\\|_______________//____________|                    
     |||      || //||     |||
     |||      || @.||     |||                        
      ||      \\\\/  .\\\\/      ||                        
                 . .                                 
                '.'.\`                                

            COW-OPERATION                           
EOC
`,Ve=`$the_cow = <<EOC;
  $thoughts
(╯°□°）╯︵ ┻━┻
EOC
`,Ke=`# Taxi cab
#
# from http://ascii.co.uk/art/taxi
$the_cow = <<EOC;
     $thoughts
      $thoughts
                   [\\\\
              .----' \`-----.
             //^^^^;;^^^^^^\`\\\\
     _______//_____||_____()_\\\\________
    /826    :      : ___              \`\\\\
   |>   ____;      ;  |/\\\\><|   ____   _<)
  {____/    \\\\_________________/    \\\\____}
       \\\\ '' /                 \\\\ '' /
 jgs    '--'                   '--'
EOC
`,ke=`##
## A cow performing an unnatural act, artist unknown.
##
$the_cow = <<EOC;
      $thoughts                _
       $thoughts              (_)   <-- TeleBEARS
        $thoughts   ^__^       / \\\\
         $thoughts  ($eyes)\\\\_____/_\\\\ \\\\
            (__)\\\\  you  ) /
             $tongue ||----w ((
                ||     ||>> 
EOC
`,Ze=`# 
$the_cow = <<EOC;
$thoughts
 $thoughts
EOC
`,Ye=`$the_cow = <<EOC;
       $thoughts
        $thoughts
         $thoughts
             ＿＿＿＿
           ／＿＿＿＿＼
         ／／ (⌒ ⌒ ヽ＼＼
        ｜｜  ﾉz(⌒ )| ｜｜
        ｜｜ <   (_ノ ｜｜
        ｜｜  L_／ )  ｜｜
         ＼＼ /＿／  ／／
           ＼⌒ )  (⌒ ／
           ／／    ＼＼
           ＼＼_  _／／
             ﾍ＿)(＿/
             ｜＝＝｜
              ＼三／
                ∧
              ／  ＼
              ＼  ／
                Ｖ
EOC
`,je=`# Three cubes
#
# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltcqs1
#   also available at https://gist.github.com/th3m4ri0/6e3f631866da31d05030
# 
$the_cow = <<EOC;
  $thoughts
   $thoughts
        ____________
       /\\\\  ________ \\\\
      /  \\\\ \\\\______/\\\\ \\\\
     / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\
    / / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\
   / / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\ \\\\__________
  / /_/____\\\\ \\\\__________  ________ \\\\
  \\\\ \\\\ \\\\____/ / ________/\\\\ \\\\______/\\\\ \\\\
   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\
    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\
     \\\\ \\\\/ / /__\\\\_\\\\/ / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\ \\\\
      \\\\  /_/______\\\\/_/____\\\\ \\\\___________\\\\
      /  \\\\ \\\\______/\\\\ \\\\____/ / ________  /
     / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /
    / / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /
   / / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\/ / /__\\\\_\\\\/ / /
  / /_/____\\\\ \\\\_________\\\\/ /______\\\\/ /
  \\\\ \\\\ \\\\____/ / ________  __________/
   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /
    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /
     \\\\ \\\\/ / /__\\\\_\\\\/ / /
      \\\\  / /______\\\\/ /
       \\\\/___________/
EOC

`,ze=`# Toaster
#   http://ascii.co.uk/art/toaster 
$the_cow = <<EOC;
   $thoughts                     .___________.
    $thoughts                    |           |
     $thoughts    ___________.   |  |    /~\\\\ |
         / __   __  /|   | _ _   |_| |
        / /:/  /:/ / |   !________|__!
       / /:/  /:/ /  |            |
      / /:/  /:/ /   |____________!
     / /:/  /:/ /    |
    / /:/  /:/ /     |
   /  ~~   ~~ /      |
   |~~~~~~~~~~|      |
   |    ::    |     /
   |    ==    |    /
   |    ::    |   /
   |    ::    |  /
   |    ::  @ | /
   !__________!/
EOC
`,Je=`# Tortoise
# from http://svn.haxx.se/tsvn/archive-2005-06/1030.shtml (accessed 9/11/2014)
$the_cow = <<EOC;
  $thoughts
   $thoughts       ___
      oo  // \\\\\\\\
     (_,\\\\/ \\\\_/ \\\\
       \\\\ \\\\_/_\\\\_/>
       /_/   \\\\_\\\\
EOC
`,Qe=`##
## Turkey!
##
$the_cow = <<EOC;
  $thoughts                                  ,+*^^*+___+++_
   $thoughts                           ,*^^^^              )
    $thoughts                       _+*                     ^**+_
     $thoughts                    +^       _ _++*+_+++_,         )
              _+^^*+_    (     ,+*^ ^          \\\\+_        )
             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\
            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )
           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /
          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\
           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )
            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /
          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^
         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)
          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^
          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)
           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)
             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\
                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\
                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)
                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)
                      ^^^ ^^ ^^^ ^
EOC
`,qe=`##
## A mysterious turtle...
##
$the_cow = <<EOC;
    $thoughts                                  ___-------___
     $thoughts                             _-~~             ~~-_
      $thoughts                         _-~                    /~-_
             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\
           /|  $eye|| $eye|        /      \\\\_______________/        \\\\
          | |___||__|      /       /                \\\\          \\\\
          |          \\\\    /      /                    \\\\          \\\\
          |   (_______) /______/                        \\\\_________ \\\\
          |      $tongue / /         \\\\                      /            \\\\
           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /
             \\\\         ||           \\\\______________/      _-_       //\\\\__//
               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/
                 ~-----||====/~     |==================|       |/~~~~~
                  (_(__/  ./     /                    \\\\_\\\\      \\\\.
                         (_(___/                         \\\\_____)_)
EOC
`,_$=`# Tux the Penguin (large version)
#  seen when connected to irc.uslug.org
$the_cow = <<EOC;
       $thoughts
        $thoughts          .88888888:.
         $thoughts        88888888.88888.
               .8888888888888888.
               888888888888888888
               88' _\`88'_  \`88888
               88 88 88 88  88888
               88_88_::_88_:88888
               88:::,::,:::::8888
               88\`:::::::::'\`8888
              .88  \`::::'    8:88.
             8888            \`8:888.
           .8888'             \`888888.
          .8888:..  .::.  ...:'8888888:.
         .8888.'     :'     \`'::\`88:88888
        .8888        '         \`.888:8888.
       888:8         .           888:88888
     .888:88        .:           888:88888:   
     8888888.       ::           88:888888
     \`.::.888.      ::          .88888888
    .::::::.888.    ::         :::\`8888'.:.
   ::::::::::.888   '         .::::::::::::
   ::::::::::::.8    '      .:8::::::::::::.
  .::::::::::::::.        .:888:::::::::::::
  :::::::::::::::88:.__..:88888:::::::::::'
   \`'.:::::::::::88888888888.88:::::::::'
         \`':::_:' -- '' -'-' \`':_::::'\`
EOC
`,n$=`##
## TuX
## (c) pborys@p-soft.silesia.linux.org.pl 
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
        .--.
       |$eye_$eye |
       |:_/ |
      //   \\\\ \\\\
     (|     | )
    /'\\\\_   _/\`\\\\
    \\\\___)=(___/

EOC
`,t$=`# Tweety bird
#  from http://pastebin.com/isRcSy01
$the_cow = <<EOC;
    $thoughts
     $thoughts
      $thoughts
                    ___
                _.-'   \`\`\`'--.._    
              .'                \`-._ 
             /                      \`.     
            /                         \`.  
           /                            \`.  
          :       (                       \\\\   
          |    (   \\\\_                  )   \`.  
          |     \\\\__/ '.               /  )  ;  
          |   (___:    \\\\            _/__/   ;  
          :       | _  ;          .'   |__) :  
           :      |\` \\\\ |         /     /   /  
            \\\\     |_  ;|        /\`\\\\   /   / 
             \\\\    ; ) :|       ;_  ; /   /  
              \\\\_  .-''-.       | ) :/   /  
             .-         \`      .--.'   /  
            :         _.----._     \`  < 
            :       -'........'-       \`.
             \`.        \`''''\`           ;
               \`'-.__                  ,'
                     \`\`--.   :'-------'
                         :   :
                        .'   '.
EOC
`,e$=`# USA flag
#
# from http://chris.com/ascii/index.php?art=objects/flags
$the_cow = <<EOC;
   $thoughts
    $thoughts

  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|
  | * * * * * * * * *  :::::::::::::::::::::::::|
  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|
  | * * * * * * * * *  :::::::::::::::::::::::::|
  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|
  | * * * * * * * * *  :::::::::::::::::::::::::|
  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|
  |:::::::::::::::::::::::::::::::::::::::::::::|
  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|
  |:::::::::::::::::::::::::::::::::::::::::::::|
  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|
  |:::::::::::::::::::::::::::::::::::::::::::::|
  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|

EOC
`,$$=`##
## Cowth Vader, from geordan@csua.berkeley.edu
##
$the_cow = <<EOC;
        $thoughts    ,-^-.
         $thoughts   !$eyeY$eye!
          $thoughts /./=\\\\.\\\\______
               ##      $tongue)\\\\/\\\\
                ||-----w||
                ||      ||

               Cowth Vader
EOC
`,o$=`##
## Another canonical koala?
##
$the_cow = <<EOC;
   $thoughts
    $thoughts        .
     .---.  //
    Y|$eye $eye|Y// 
   /_(i=i)K/ 
   ~()~*~()~  
    (_)-(_)   

     Darth 
     Vader    
     koala        
EOC
`,T$=`#
# Weeping Angel
#
# Don't blink!
#
# based on design found at http://shirt.woot.com/derby/entry/73182/dont-blink
#   and http://infinitywave.deviantart.com/art/Don-t-Blink-tee-391963389
#
$the_cow = <<EOC;
       $thoughts
        $thoughts

                                     ...I..
                            :XX:X\\$ . .7N..            ..\\$\\$.. .:~..
                            X:XX.. 8XXI..         ....XX..7..7KKK8.. .
                              N. .XXX,          ..:ZD- ..M.\\$K:XN?XX.XN .
                              .. XX\\$.            *. .KN7XXX+ -XX,CN.,XX
                        IXX?..                  ...--+..IXX:X:X..-ZN?DX,.
                      .\\$XXXXX. .X               ..XX~-7=\\$7+IX5\\$...+IM+XXXX.
                    .  +....7D=               .7=IX,: 7+..   . ,.  =+XXID..
                    .-\\$-.. .    .             .MM-,,..... . ,=7OI.. .,:N7%
          ..17KN. ..XX:XZ.  ..., .            .:.. .     .-IN78IN7=-.,..CMO.                     ..-.
        ..XXXXMO..  ..8X:X= 8D0..               .8 .    .+I:N-X:XXDXXXX.ID..                  ..-XX:XX- .
        .X:DX:XX.     ...8KI78M,                .X......-IM.D.XDXXXXXXX?:. .                .:++7CXXXXXX?.
      . X7XXXXD8 .      .  ?8XXX.....            X+ : ...XX.X.DCO.  .+X-8X,.              . .=?2XXXXXXXXXX.
       .=XXX887+.       .=:+?,:I.XXXXZ.         .7NO.=8+ ...M?.. 8X.\\$\\$X 7=..              ..=?X:X7++\\$NXXXXX:
       =XX:D-...  .:..  .  ...  ...?XXX         .*. X(O)X  :X .X(O)X+X.,.                .*XXX=    . -IXXXD,
     ,-X:XI..     ,.     ...           .       .X..........XX-....=.?N?.O?               .+XXX..       .-XX:X.
    .:ZX8-      . .   ..+\\$:,..                .DX..D:\\$78. .XX?:XXXXD?XZ...               +DXX,    ..  .. =X:XX
    --\\$D   .    ......+XX. .I.                  X-.*XX ..XZXXXXX.XXXXXX 8.              -.XXO.    .:=-7=..:8XX,
  ..:7Z. .      ..  +X:XX.  X..                 :I.........XXX....XX:XX  .            ..7X7Z..  .-II\\$%>I?+,-X:X.
   :,7..       , ...8X:XX.  XX                  .X ...  . .. .8XX:,-ZXX.              .7IXXX .  .+ODC8:\\$II7:ZXX:
  .,=.      ..?.  ,8X\\$XX=   .XX..               ..+..  .-..%77.XXX.\\$XX .            . *IXXXX    :78DX8D08DN7-XXX.
  .:..       *-...-XXXXX.   .,XX..                8,...O..VVVVV XX:XX               . ZOX:XI  . =ID0X0XODOX:+\\$XX..
  .:        .? . ,IX:X:X,    .:X=.                .\\$ .N VV ....VVM+XX.              .=ZOXXX.  . IDO0X0X0D0X:0?XX?.
  ,         ...  :IXXXXXX- .....O.                 7- O...,I.Z.X.X:X,               .7\\$:\\$\\$..   .OCO0X\\$%DCOXXD\\$7X>.
  -  ...    ?..  =+X:X:XXDX:XX+ .. . .            ., .I. .VVVVV  XX\\$..              :.\\$XXX     +DCXXX\\$+%\\$D8ZXXDXO+
  , .*...   .%7...,,,%%0%XXXXXXXXXXO-D\\$7J0\\$: ..-:.. ...W,XXXXX,-IXX                .:7XXXX    .CD88DCW..\\$DX:X:XX?%
 .,.-%,-.   . ?7.  .. ..+%8XX:X:XX:X:X:NO\\$DX..,XXX.. . ..XXDXXI\\$XX .               .-O:XX     -CDOI8XX*.*DX:X:X7=%
.--.:\\$.+ .     .I%       .:7XXXXXXXXXX    . . ....      ..*.-XDXX..               .-:XXX .   .=78CD8XX+  +IXXX>..Z
 ?=:=?.+.        .XX..      ...?8:XXXX-.           .    .:-Z+XX- ....... .       .+,DXX.    .7.,\\$88DXX:  .:OD%..%O.
 ?+IO--+           -XX.  .        .-7O.    .              .\\$\\$.. .7.M.\\$XXX:...   .++DZM.   ..I\\$  .\\$8DX7.,..  .. IXX..
 +??D,\\$\\$              .X8.       .        .*      .   . ..  ...*XX X,X:X-: ON?...,XIO     .-O\\$.   .-. =O,. .  OXXX-.
.:?ID,Z7              .. ....:I-..        .      ...  .+..   :7 XXD. XX,:...+XXX-.,*..    .=\\$?..  . .:O8.\\$D7 .IXXX?
 ,+78:Z7 . ,*. ..*.           .....  .....D . ?+.     .:+.  -X+.XX7.8XZ.*.  ..+7XX,     ..*+:.  ... ,8:+.-D0..7XXX7.
.,=\\$8I88   ,7  :XD-.  ....             +.:,...--|.. ..      7% CXZ..XX,.*.  ....+XX+.   ..:.    .\\$O..DO,  8D+.-XXXX,
 :-\\$X0XX ..,*. -DX,... 7... .           .X...::::::-O...    .  .. .7XX...  .,XX. 78-+:..        .OZ.-87   CD\\$.7XXXX.
.--7O0XI.. :-O:ZM8...-*O.  -.           :% .::-,,::..:,::::--*+I88XXXD....X:X:XX.7XXXXX:        .8%7DO....-8O77DXXX,
 -=78XX.   .**%XX .   %7:..Z .          8. .:X7.::*,* :,,,::-:-*7\\$DXX+.,.XXX?I+.7X:X:X.-X:      .-%%8O .  .8ODIDXXX,
 -=7IX8.    .*87.   ..\\$O7-I\\$..    -.    .... .. ....:,:O:,::-: .7IDXX ..XX..  .:X:... XXXXX.    ..=7+.    .=0D7CXXX:
.-+7IN..          . :..O\\$7X,      =.  ..,.  ..   ...   O..7.::. ?.XXX,.  .      ..  .X:XZ08. . .          ..\\$D8%XXX:
.-7II.            .+%. :77:.    .:..  . XD  .-  :...  .:. .   ..... ..          .-  ,X7...,X%.:            . DO8XXX,
 ,I* ,       -?:..8XX. . .....   ...   :XX...X .\\$  , .?%: ,? ==7X7., .           D..? . .XXXXX:%...         ..%8DXX
 ..      ..  DOX .8XX..-..:==.:  . .   .X%  .X .% .%. XXO DX.D?\\$X?               XX.  . 7XI.XX.. :.   ....    ..-?,.
        ... .DXX..8XX .?8-Z\\$?..*.* .    X-  .X..7 7\\$..XXX.DX+XXXX,   .        . .XX.  .  .  .XX...     .*.  ..  ..
  ....  :,:. IXX-.8XX .-XDXX- .++\\$..  . X,  .X.%,.+% .XXX.\\$XIDDDD. .=.  .. ...,8XO..        -XXXX ..    *...., .....
   ,,\\$. -:*. -DXO+8X\\$ .,ZXD7,  .:...  .,X.  .?.X- +-..XXX 7XOXXXXO. ..  .NXXXXXXXXX         87%:XX..    -..I7\\$:.,-.
 . .DX,.-I% ..\\$XX8DXI   *OI-..  ..    .XX   ..7X8.?,  XXX.\\$DX:XXID     .XXXXXXX8.. ..       .+XXXXX+  ..,  \\$XX..:?..
 . .8X-.-%8...*DO\\$XX7   ......         XX   . XX .I.. XXD 7XX:XX?,     ,..              .8D\\$X:XXXXXX   ... \\$8X. ,I7.
    I8\\$.-OXX..,\\$D8XX... .  -,,....     XX.  ..X  .?:. ZXO -XX:X\\$,:...                 .... :XX:IXXXX   ... %8X  .\\$X.
..  -8D.-O8X...-\\$CX+ ..D,  -X7,-,.     XX   . 7. .I7 .7X\\$ :X\\$XX-.XXI .                .:: ..X:XXXXXX.. ,. .%XX  .CX:
..  .CD.+OCX  . .,. .-.XO. ?8I,IX.  . :X7.  ...   78..8X-.+X+XX, XXD.     .     .:    ..*N= -XXXXXXD  .:. .OXN  .8XI
 .   78*COyX,       .8*XX  =8....   ..\\$X..... .   XXI XX .XX.XX..?XX..7.  ?,    ..      ..?XXXXXXXX.  ,:. ,OX*  ,DX\\$
 .  .%D7CO7X\\$ . .... X7XX   ..        XX . ..   ..XX\\$ X8  XX.XX...XXX%8   %-              .. .=\\$XX..  ,:. :ZX   :DX%
.... +XO8O7XD ...+.  X8XX.          .:X.  .7-    ,XX\\$.D= .XX 8X   DXX\\$X:  XD.                         .-,.*OX.  =DX%
 .,. .XD8O\\$XX  ,,\\$:. OXXX-          .XX.  .D?.  .XXX:-8. +XX DX:   XX7X\\$  XX                          .=-IZXD   +DX8 .
 ::.  XXXXZX\\$  .,\\$D  7XDXI          OX... O8?   .XXX.%8  IXX ZXI   ZX7XD. DX.             ..   .      .=+Z\\$X=   7DX%
.-:.  IXXN7X. ..:IX. 7DNK\\$        ..XZ  .\\$XX- ..OXX8 %Z  7XX.-XX ..+XDXX+.7X-.           :+   .D      .-*\\$+X... %DX%
.*,,. .XXDIX, ..??X. IDXXI        .XX   .XX8,  :XXX  %% .=DX..XX.. .XX:X8 .XX.           .=.  .X      ..+??X  ..%DX?
.+*-  .OX7?%. .:%77\\$.7DXX         -X7.  XXX+...XXX:. ZO...DX\\$.OXX  .+X\\$XX,.XX,          ....  ,X       .-8\\$.  .-OXX+
 *I*,. .8+ZI  .=D+XX ,8XX.        XX. .8XX%...7XX7...%X   8XX .XXX  .X\\$XX\\$.XXX..              -X      . -X. ..?+DXX:.
 =O7%:. :-I  ..*O+XX  I8,.       .XI. .XX%.. -XXD   .:X:  .XX* ZXXZ..\\$X7XD.:XX7.              ?8        .-...I8\\$XXX..
 -X\\$O%:    .,..=7-XX. .,..      .*X   .OD.  .:+%..   *XD  .8X- .7XX..XX..II +CO               -.     ..   .,%XODXXX...
 :XOOX-.  ..?..:I:XX..                 .\\$,  .:.     ..,:  .I?,. +8?..\\$%.  . ..,.            . ,.    .?..   =XX:XXXX
 .XXXD=    ,O. .I.\\$M=                    .     .     ...  ......-....,..     ..             ..X=     X .   -DXX8XXX
 .XXX8*.  ,,\\$:. .?+XX                                               .                        =N?..   D     :OXD8XXX
  %XXXI.  ,,7\\$. +I78N.            ...                                                        ID?.   .I    ..%X8CXX+
  +ICOI   .,:Z- .-XXD.            .,..                                    ..                 7D*..  ..      \\$D\\$ZDD..
  ,IOO+.  ,::Z7..7\\$\\$D              ,.. .                                  .@.                -O\\$.:  7.     .78OZ8D..
  .888..  ,-:7O+.7778.            .,.  I .     ..      ....     ...:..  . OO..               .--*:. 7.. .   :%XZ8.
.,.:%I..  ,+:?O?.=I7\\$.             .   .      ....... . ::    , .*7%..  :.OO=.               ..-+..,?.. .   .I?OI.
    .     ,7:=\\$7,,II7.            ..  ..   .. .-    ..  +7.   :  77\\$.-..? %%+                 .7\\$. +=:,..   .,..
          .+::7Z7.:I+.            ..  :.    .. -* .. \\$  I\\$ .  -,.I\\$7 =  7.XXI                 .*...*,,.... .    .
        . .-*:I\\$?..*.              .  *.    .  -7.. .7. I\\$.,  :-.7\\$7.=  7-\\$\\$7                ..    .,- .  ..  ...
    . ...  :7:777. .                  -.    +- +7.   7..7\\$+ ..?.?77  =  7+777                 .. ..7?I....-   .. .
    = .....,7:-7I-.                   -.    II =I:   :?.?I7   ?.?II. = .I?7::                   ..+--?.. -*,  .=?
    ,,..,. ,**,I?I..              .   ,.   .II :*?.   ?.??I.. ?.:?I. - .I?II?                   . ,:*?-. ==I..=I?.
    .=...+ .*+,-??.*              .   .:.   +7:.-7.  .+,+??:..*:.+7. :. 7777+                   .,7+++7. -+,.-=7*.
    .=...*. :=:,++:.  .           .   .:. .. =+=.-*: .=*=**= .:-.**, ,..*****.                  .,:=*=*.,:*..***=.
    .....-. ,*-,===.              .   .:  .  ,== :-*. .,*,*+*. .-.** :  -****.                   ,:**:*.,:+..*+*:
    .. .... .:-:=== .             .   .:     .*: ,:*.  .*,--*,  -.-***  :****,                   .:---: ,:-..-**,
.   ..    .. ,--:-- .             .    ,     .-: .,-,.  -::--,..:,---:, .----:                   .:=:=. .::.,===.
       :-::. .::::- .             ..   .     .::  ,:-   .::--:, ,,,;:.  .---::                   .,:.: ..:,.::-:.
     ,..,,,.  ,::::                .   .     .,,  ,,:.  .:,:::,..,.:::. .:::::                   .,,,, ..,.,::::
        ,,,,  .,,,,                .   ..     .,  .,:,   ,,:,,,. ,.,,,.  .:,,,                    ..,.. ...,,:,,
    ,,...,,,   ,,,.                    .      .,. .,,,   .,,,,,. ,.,,,.. .,,,,                    .    .,,.,,,,.
     .,......  ...                     .      ...  ,,,   .,,,,,. ...,,,. .,,,,                          ...,.,,.
      ,......  ...                  .  ...     ..  .....  .................,.,.                           ...,.
      .......   .                        .     ... ....   ....... ....... .....                      ...........
      ... ....                          ..     ...  ...   ....... .............                        ........
       .......                          ...     ..  ...    ...... .............                       ........
        ......                          ...     ...  ...   ... ..  ............                         ......
        .....                           ....      .   .      ....  ............                        .... .
        .. ...                       .. . ..           ..       .   . .... .. ..                       ....
           . .                          . .       ..   ...   ...      ... ....                          .  .
           .                              .       ..          .       .  .   ..
             .                           .                    . .    ..    . .                             .
EOC
`,E$=`# whale
#
# modified from https://www.reddit.com/r/pics/comments/25ji0n/man_face_to_face_with_whale/chi1kdy?context=3
$the_cow = <<EOC;
   $thoughts
    $thoughts
     $thoughts
                '-.
      .---._     \\\\ \\.--'
    /       \`-..__)  ,-'
   |    0           /
    \\--.__,   .__.,\`
     \`-.___'._\\\\_.'

EOC
`,L$=`# Wizard
#
$the_cow = <<EOC;
  $thoughts
   $thoughts
                     _____
                   .\\'* *.\\'
               ___/_*_(_
              / _______ \\\\
             _\\\\_)/___\\\\(_/_
            / _((\\\\- -/))_ \\\\
            \\\\ \\\\())(-)(()/ /
             ' \\\\(((()))/ \\'
            / \\' \\\\)).))\\\\ \\' \\\\
           / _ \\\\ - | - /_  \\\\
          (   ( .;\\'\\'\\';. .\\'  )
          _\\\\\\"__ /    )\\\\ __\\"/_
            \\\\/  \\\\   \\' /  \\\\/
             .\\'  \\'...\\' \\'  )
              / /  |   \\\\  \\\\
             / .   .    .  \\\\
            /   .      .    \\\\
           /   /   |    \\\\    \\\\
         .\\'   /    b     \\'.   \\'.
     _.-\\'    /     Bb      \\'-.  \\'-_
 _.-\\'       |      BBb        \\'-.  \\'-.
(________mrf\\____.dBBBb._________)____)
EOC

`,h$=`#
#  木
# 木木
#

$the_cow = <<EOC;
  $thoughts
   $thoughts   --木--
       ／｜＼
     ／  ｜  ＼
  --木-- ｜ --木--
  ／｜＼    ／｜＼
／  ｜　＼／  ｜  ＼
    ｜        ｜
EOC
`,I$=`# World
$the_cow = <<EOC;
   $thoughts
    $thoughts
          _,--',   _._.--._____
   .--.--';_'-.', ";_      _.,-'
  .'--'.  _.'    {\`'-;_ .-.>.'
        '-:_      )  / \`' '=.
          ) >     {_/,     /~)
  snd     |/               \`^ .'
EOC
`,A$=`##
## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu
##
$the_cow = <<EOC;
        $thoughts   ^__^
         $thoughts  ($eyes)\\\\_______
            (__)\\\\       )\\\\/\\\\
             $tongue ||--WWW |
                ||     ||
EOC
`,s$=`##
## やすなちゃん
##  
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
  
            . .: ───:. .
         .／.: .: .: .: .: ヽ
        .:   .:l.:   .: .: .:.
        |.l:..ﾊ.ハ..|ヽ.ﾄ､:: |
        |:l.:/ヽ､_ヽ|_ノV:.:.|
        |:lﾊ.  {j    {j  |:ヽl
        ﾉ:l} ''        ''|:ノヽ／ )
        ヽﾍ:ヽ.､ r---､  ｨﾉ ┬' \`／
     γ::ヽ  ｀^Y\`TﾇΤ\` {__├'\`'
     ｀‐< ＼_ ハ |:|  Y
          ヽ_>､|  |:|／|
               /   V   l
             〈        〉
           〈:｀-:';\`-´:〉
            .>-:ｧ─--‐r-:ｨ
            /  /     |  |
           /  /      |  |
          /-,/       |--|
         に7         |二|
EOC
`,r$=`##
## やすなちゃん
##  
##
          $the_cow = <<EOC;
           $thoughts
            $thoughts
                           _.. .:-―-:. .._
                      .: .: .: .: .: .: .: .: .: 
                   ／ .: .: .: .: .: .: .: .: .: .＼
                 ,'         ,!    ∧           : .: ヽ
                /, .:: :｜./ |.:./ヽ.:iﾍ.: .: .: .: ::.
               ,''|.:: .人/--|':/  ヽ:| ､＿.: : .: .::|
                  |.:: ｲ  ,,=､ﾚ        ゞ=ﾐ､.:|..: .: :|
                  |.:: ｜{{    }}     {{    }}八.: .: :|
                 /.: : /  ゛= "        ゛= "    ;.:r ､:|
                /,.ｲ.:〈                     ,, //' ｝:|
               '  ヽ:: ゝ、        ｰ--┐       //  ノ::.
                    ヾ::.､＞ .    ヽ _ﾉ    ..  ＜¨ｨ.:}~＼
                      \`゜ヾ/｀>了、.    v 〔:／|:/  レ'
                        _ . -/: ,K:::>､/: :ﾄ._
                       |: :く_.:|/:〈 /: :}: /~ヽ
              r「「「ｈ,>:|: <: |'::ｿ::<¨.:n｢「「!､
              ゝ＿_ﾉ /: : |::ヽ |::/: ／: :.ﾍ＿_ノ｝
               | ￣ |,': :/: : ヽ:' ／ : :.:| ￣ |:}
EOC
`,a$=`##
## ソーニャちゃんおめでとー！ソーニャちゃんおめでとー！
##
$the_cow = <<EOC;
 $thoughts
  $thoughts
   $thoughts
            . .: -----  .
         ／: .: .: .:.: .:＼
        /    ..  . l.: .: .:ヽ
       : .: ,/|-/|:ハ.:|-.ｌ.:
       |: :ノ |/.|/  ヽ|.Vﾊ.:|
       |.::|  =＝     ＝= }.:| 
       |.γ|| ''  ＿_   ''{::ﾊ 
       ﾉノﾊﾘ   ｛   }     ﾉV
       ∨Vvヽ､._  --'_ .イV
            γ:/:{.又 }ﾍヽ 
          ／:〉:V ﾊ.ﾘ〈: ＼ 
        ／ : Vヽ:V// /:V ::＼ 
    rイ: : ／|: :＼Vノ: :|ヽ: ヽ-､
   ｢  ヽ:／  |: o :  o:|   ＼:/ 」
    ー'    ./: : : : : ﾊ      ー' 
          ./::o: : : :o ﾊ 
          /ヽ: : :Λ: : :ﾉ:、 
        〈:::￣￣:::￣:::::〉 
          ＼:__:::::::__:／ 
            |  Τ￣Τ | 
            |  |   |  | 
            |''|   |''| 
EOC
`,i$=`##
## ソーニャちゃんおめでとー！ソーニャちゃんおめでとー！
##
$the_cow = <<EOC;
            . .: -----  .
         ／: .: .: .:.: .:＼
        /    ..  . l.: .: .:ヽ
       : .: ,/|-/|:ハ.:|-.ｌ.:
       |: :ノ |/.|/  ヽ|.Vﾊ.:|
       |.::|  =＝     ＝= }.:| 
       |.γ|| ''  ＿_   ''{::ﾊ 
       ﾉノﾊﾘ   ｛   }     ﾉV
       ∨Vvヽ､._  --'_ .イV
            γ:/:{.又 }ﾍヽ 
          ／:〉:V ﾊ.ﾘ〈: ＼ 
        ／ : Vヽ:V// /:V ::＼ 
    rイ: : ／|: :＼Vノ: :|ヽ: ヽ-､
   ｢  ヽ:／  |: o :  o:|   ＼:/ 」
    ー'    ./: : : : : ﾊ      ー' 
          ./::o: : : :o ﾊ 
          /ヽ: : :Λ: : :ﾉ:、 
        〈:::￣￣:::￣:::::〉 
          ＼:__:::::::__:／ 
            |  Τ￣Τ | 
            |  |   |  | 
            |''|   |''| 
EOC
`,u$=`##
## 湿布
##
$the_cow = <<EOC;
            $thoughts
             $thoughts
              $thoughts
                    .  .:----.:  .      
                  ／    .: .: .: .:＼
                 .          .. .: .: ヽ
                /.: :/|:/.:ﾊ::ﾊ : .: .:.  
              ノ.: ./-|/ |/ V- V､.: .:.:|            
               ｜:ノ   _     _   V: .:,:|
                |:}  =＝     ＝= |:l､:.:|
                |:ﾉ''    ＿_   ''|:| }::|
               八:ヽ.   V_ 丿   .|ﾉｲ: :八
                 ヽ/≧=-z:-:r:=≦l:ﾉ|:／
                    ／/ ﾚﾇﾘ: 〉 ＼
                   / :〉|/l/:< : ハ  
                  /:}:{:|:/:/ : : :.     
                 /: { : ': /: : {: :|            
                 {: : :ヽ:/: : : : :}          
                /} :}:o : : o: {: : ﾊ                
                {: :ﾘ: : : : : |: : }  
EOC
`,X$=`##
## ダーツの才能
##
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
       ／ .: .: .: .: .: .: .:  .: .: . ＼
     ./   .: .: .: .: .: .: .:  .: .: .: .ヽ
     /          /  . ..l..  ヽ.: .: .: .: .:.
    ,    .. .: /  .| : ハ: .|  ＼.: .: .: .: .
    |.: .:.l.:/  ヽ|.:/  ､ .|.ノ ＼ .l:.: .: |
    |.: .:.|:/.ｨ≠ﾐ|:/    ＼| ィ≠ミ､|.:.: .:|
    |.: .: ノ /Y::::ヽ       Y::::ヽヽ＼ .: ｜
   /:.: /^|:|{.{:::::}       {:::::}.} |:|ヽ:､
 ノ:ノ: { |:| Ｕうーソ       うーソ  |:| }ヽ:＼
    | : ヽ|.|  '' ￣           ￣ ''U|:| /:|
     :: ::人|                        |人::ﾘ
     Vﾊ:: :: \\                     /::  ﾊ/
      \\|ヽ:: ::ヽ､     --      ,イ::／|／
          ＼| ヽ:≧=r-r---r-r=≦:ノ|／
             . :´:.ヽ二二.ノ: :｀: .
            ／: : :  ／ハ＼: : : : ＼
EOC
`,O$=`##
## 策士
##  
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
 
              ,.:￣￣￣￣:.､
            ／ .: .: .: .: .:＼
          ／   __ l  __    .: .ヽ
        ／:  ./ＶＶＶ＼:ﾄ､\`.: .:.
   (＼  ￣/.:ｲ.ｨ=ﾐ\` ´ｨ=ﾐ､ヽ,: .:|
   {ﾐと^ヘl.:ﾉ{ぅｿ,  ぅｿ}|:|^ヽ:|
    ヽ〃: ﾚ｛    __ -､ " |:| ﾉ::|
      ＼: :ﾊ＼  {    }  ,ﾚイ:::八
        ＼ :V.:>:ニニﾆ:＜ＶＶＶ
          ＼ :v:〈|父 /:|:ﾊ┐
            ヾ{:｢|/:|/ <:/:ﾉ＼
              {:\\|::/:／:{: :ヽ
              {: : : :\`: /> : :>
             / : ﾟ : : ﾟ : Y: :/
            /: : : : : : : |ヽ/
           〈: :ﾟ: ﾊ : :ﾟ: ∟ｺ
           /::---':::------く 
EOC
`,M$=`##
## ごぼう
##  
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
     $thoughts
               ＿＿＿＿＿
           .:´.: .: . : :. \`  、
     ..: ／.: .: .: . : .: .:   ＼
    .::／:::       ﾉ   /､         ＼
   ..:/.: ::.:|＿／::|:/  ＼:__|:  .\\
 .:: :::: :::/|／｀ヽ|/    '＼:ﾄ、:  .
 .:::|.:: ::/:ｨf于ミ     .ィ≠ﾐ､Ｖ: :. .
..:::|.:::ノ::{{:::}       {:::}}{: |＼|
..:::::::_::|::うﾆソ       う:ソＶ: |
.::: /.:/ |:|:ヽヽ       ｀      }: |
.:::/ｲ:{  |:|:    ／￣￣ ｧ      ﾉ  :|
 ..::|.ゝ,ヽ|:   /      /     ／:::八
 .:::Ｖ:::::＞:._ヽ、 ./__ .イ:ﾊ:／
  ..::＼|＼:斗:ｰrﾍ\`ア又＜Ｖ|／
   ..::::／⌒: :|:ＶＶ{ヽ:＼
      .:/.: :|::l::ﾍ}/\\|:}:.＼
    ..::｢.: :|::＞:Ｖ//|〈:.}.}
  ...::/.:: :|::＼: Ｖ/| / :}:.┐
 ...::/.::::rｰ::::＼:Ｖ|/〈::::.ヽ
..:::/.::::ｲ::::::: ＼ Y::ヽ:::::.＼ 
EOC
`,l$=`#
# ごぼう2
#

$the_cow << EOC;
  $thoughts
   $thoughts
    $thoughts
          ,.:──‐-:.,
        ／:.           ＼
      ／:. :. :. }:. :. :.ヽ
     .: :. :. }.:/＼.:|,:. :ﾍ
     |:.:. :. /Ｖノ ヽﾄ＼:|､ﾍ
     |:.:. /Ｖ_ﾆ    ﾆ＿_ {::ﾍ
     |:.ﾍ .| ΓT      | |Ｖ.＼
     |:{ |:|.l｜      | |八:ー
     ハ:\`:Ｖ､l｜∠二l.|.ｲ:ﾊ:ﾉ
      _Ｖ＼;＞=r rr r=＜ﾊ／   ＿＿
     |ざ |ﾍ :{Ｖ/V:}:＼      |ご  |
    {ﾐ}く{)}:＞Ｖ/< :  ＞-:-'{}ぼ{ﾐ}
     |ろ_|:ﾉ:＼:Y / }ﾐ : : : |  うY
          ﾉ :o: : :oj \`ー─-´ ￣￣
         / : : : : :{
        /: : o : :o:ﾍ
      〈 : : : /\\: : 〉
       /::ー──'::ー‐ﾍ
     〈:::::::::::::::::〉
       ￣|￣｢￣|￣|￣
         |  |  |  | 
EOC
`,C$=`#
# ちびきゃら
#

$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts
    
           ____
       ,: .: .: :.ヽ
     ,'       /\\   ｉ
     {: .:ﾉﾚﾍ/  Viﾍ:}
    .{,､〈 Ｏ   Ｏ{.:.
    ノヽ\\!"       }.:ﾊ
      Ｗﾊw=-､へ,ｬ<,V'      
         /ﾍ }{./\\
        ;: i:V:!;}
        |:｜: :｜}
        |:|:｡: ｡l}
        >-'-ﾟ-'\`ﾟu
        ｰi-i～i-i~
         |.|  |.|
         |-|  |-|
         ヒｺ  ヒｺ 
EOC
`,R$=`#
# 何でそういうときだけ凄そうなの！
#

$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts
             ＿＿＿＿
       ＜ :: :: :: :: \`丶､
       ／   _, ｨ:ﾊ ､＿: ::＼
     ∠:: :/ |/|/ \\/  \\/:: |
rヘn  /:\\/ c=＝.::.＝=っ\\/ |  rvへ
ヽ／＼i:｜   ┌──┐   i::|／＼ノ
  ＼::|(||   |:::::|    ||)|::／
    ＼|人|.、|:::::| .ｨ|ﾉ:八／
      ＼\\/\\/>|:::::|<\\/\\/／
        ＼ :::>TﾇT<::: ／
          Y : ＼W／ : Y 
EOC
`,c$=`#
# きゅーっ！
#

$the_cow = <<EOC;
  $thoughts
   $thoughts          . .: -ーー― :._
    $thoughts       ／.: .: .: .:     ＞  r⌒ヽ
           / .:         ｜.､.:＼  ﾉ ノ
          .: .: .:|＼  |斗ﾍﾄ.:.:Ｖ  /
          |: .: /\\|ノ＼| ／ Ｖ::Ｎ./
          |: .:/ c─-        Ｙ:| /
          |:ﾊ:{\`\`   ,  --┐  人V /
          ﾉ:L＼>   く_,￣┘／  ＼
   /⌒￣￣￣|￣￣＞--r-rｭ＜|   ／
   L_,vー─-|    ､ }  ＶYﾊ   Y
             ￣￣Ｖ  ｜/∧   ﾍ
                  {   |//∧  ﾍ
                  {    ＼//   ﾍ
                  {            ＼
                  ｝             >
EOC
`,g$=`#
# からあげ
#

$the_cow = <<EOC;
       $thoughts
        $thoughts
         $thoughts        .:  ￣￣￣￣:.丶､
               ／.: .: .: .: .: .: ＼
              /    ／|    /\\.:| .: :.
             / .:|乂 |/{:/ _乂/\\ .:.:|
           ノ.:\\/ｨ庁ﾐ\` \\/ｨ庁ﾐx  \\/:.:|
             |:}{弋.ﾉ    弋ノ } /.:.:|
             ﾚ:ﾘ''          '' ｜:ハ:＼
             {人       ,、    ,｜/ノ:厂 
EOC
`,U$=`#
# 転んでも泣かない！
#

$the_cow = <<EOC;
       $thoughts
        $thoughts    ｡
         $thoughts       ＿＿＿__{_    o
      ○   ヽ￣    .: .: .: ｀丶＿_
           ／ .: .／;|.:/|::∧.:＼        О
     (ヽn∠ .::|∠二:|:/:|ン-:∨:「ﾚ^L
     ζ, ヘ /::(___)|/:(￣￣ )|.:/、  ζ
     \`く: :/_:ﾉ(_) ＿＿ ￣(_) |:/:\`ｰ:/
  。    ＼|＼人   |/   \`⌒ヽ ｜/ : :/  o
      __┌   ＼\`ヘ|/ヽ/ヽ／^ヽ/／/:/／/
      ＼                        /:／ / 
EOC
`,N$=`#
# くっ、くぅー！
#
$the_cow = <<EOC;
       $thoughts
        $thoughts
         $thoughts
                 .:-────-:.  .
             .: .: .: .: .: .: .: :.
          ／.: .: .: .: .: .: .: .:  ＼
         .: .:          /:  |        :.
        .: .: : :  |.:./ |.: ハ.:.|::|.: :＼
       /.: .: .: .:|.:/ u|.:/ u ､:|::|.:｜―\`
      /.: .: .:|:,|.＼._ｨ.:/ ､_／｜∨,::|
     /.: .: .: |:/ィ≠ミ |/  ィ=ミ､ ∨::｜
    /..: ,--|:｜  {んi:i}     ri:i}} ﾊ::|
   /.ノ.:/へ|:|.   ∨:タ...::.ヾ:タ  .:.:､
   ／:: :ﾊ (|:| u ''       '    ''  {:|ヽ:＼
     {: :＼_|:| ｕ   __          u ﾉ:｜
     ∨ﾊ:ﾊ:ヽ.|､   （- \`ｰｧ      ..ｲ::/ﾉ
       ,:＜:￣/|､＞:._￣..:-=≦::ﾊ:／
      /: ヽ::/:| ＼_ィ .ハ＞:、
     」: : :く:｜／{;;}∨: }::ﾊ
    /:＼ : }/￣\`Yヽ:∥:／: /:「Y二ヽ
   / : : : /  ￣}-':/::〉: }:/Y{─ }
  /: : : :/  .二ﾌ::/::/: : ﾘ::ﾊ{-- ﾉ
./へ──‐ﾊ  ,-ｲ :/::/ : :ﾑ:-{､_エノ
{: : : :.ヽ>イ:|:/::ノ: :/ : {{ ／ﾉ 
EOC
`,f$=`$the_cow = <<EOC;
   $thoughts
    $thoughts
         ..: ￣￣￣￣: :.
       ／::  /｜.:/ |.: .:＼
      ,  /｜/  |./  |.ﾊ.: .:ヽ
    ./.:ｲ__ノ   ヽ､___∨.: .:.
   ./: .:≡≡     ≡≡.|.: .:｜
   /ノ|/} }.      } } |:ﾊ:.:｜
     .ヽ{,{ -~~~- {,{｜:/ﾉ:从
      ∨v､＞z-r-x-:r＜/ﾚﾚへ 
EOC
`,S$=`#
# さっそく試してみよう 道具持ってないから作るしかないかな
#  

$the_cow = <<EOC;
   $thoughts
    $thoughts
     $thoughts                 ____
                 .: :<::. ::.>: :.
               ／:: ::. :. ::. ::\`:、
               \`::. ::.ィ:.i::.、::.ヽ
             /'      ./|..ﾄ.}V.. .. ﾊ
            '.. .. ./L/｜:| 一V::. ::１
            i::. ::/}/\` V:| V Vﾄ::. ::i
            |::. :/Y芋ミV!Y 芋ミ|::. .|
            ,::. ハ {::}  V {::}}:r,:代
            /::. :}  つﾉ    つﾉ｜:レ:}ゝ  ヽ
              V::八    r一 ┐   ｨ!::.:ﾘ      }
       ｛r     ＼ﾊ:＞- .一-'.s<:ハ}ヽ}   __ノ ﾉ
        弋二一   ヽ:{＞}_ノ  / ゝ､
                ｡＜   〈ﾊ〉  {    \`、
              ／     i       \`､.    \`、
            ／    フ^|   　   ',ﾞ、   \`、
           く   ／   |         ', ﾞ、y ヽ
           tゝ_r     r          ',  ><一'
                    /  ゞ＿      '
                   /      一      \`
EOC
`,H$=`#
# ま、ありがちな言い訳だよね
#  

$the_cow = <<EOC;
   $thoughts
    $thoughts
                      ,:二二二二:. .,
                   ／.／＿＿＿_  ＼.:＼
                  /. /／.: .: .:＼  : .:＼
                 /.: .: .:/｜:/\\ .:＼}.: .:.
                .: |.:/一/ |:/ 一.:}: .: .:｜
                |.:|ノ |/_｜/ _  \\/ﾍ: .: .:|
                |.: ｜= ＝    ＝＝= \\/}: .:|
                |:: ﾘ''           '' /:/､.:|
               ノ:|:人    一一 ､    /:/ ﾉ.:|
                , ┴＜＼  {     ｝ ,{:/イ::八
               /_..   ＼\` ー┬一r＜:八八／
               ／  T＼   \`＜}ゞ=彡'⌒＼＼_>
              /___ |  >､    ｀''＼   ｜
             /ﾆ}::\\/／  ＼       ｜  ｜
          　{ﾆﾉ:: /''＼ | \`|r--ｯ＜|_／|
           /__   V    ｝|  》=《      |
           ＼ ＼/｀一ﾍノ|  { 6 }     ｛ 
             ￣        ｢   ゞ= '      }
                      ﾉ               〉 
EOC
`,m$=`#
# やすなちゃんのまんまるお目目
#

$the_cow = <<EOC;
  $thoughts
   $thoughts

:. :.孑|:/仔:./  ＼:.| V｜:. ﾄ:. :.
:. :/  |/  |:/     ヽ|   \\/:!\\/:.:
:. / ,ィf芋ミ     ィf芋｀:V  .\\/.
:./ ,' :'::::ﾊ      ,':::::ﾊ ヽ /:.
:t  { {k)::::!     !k)::::!  },'.:
:ﾊ    弋 一ソ      弋 一 ｿ ,: ::
:.{      ￣    ,       ￣  ; :./
:.| ''                  '' |:./
:.ﾄ､      \` ､      ノ     ﾉ!:/ノ
ﾄ､!:＞ ､.     一  '   .,＜:|/::.
:: :: :: ::>z-一-z<:: :: :: :: :.
V|＼:/}ﾍ/  \`ー又ー' \\/}ノ{／|:／
  ,z'￣ ﾍ   /{ .ﾄ､  /￣  ヽ
／      /\\./x 一 ﾐ./       ＼ 
EOC
`,d$=`#
# yasuna_20.cow - もしかしたら新種かも！
#

$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts            ________
             .:          :｀丶
           /.:   ｛ :｜､  .: .:＼
          /   |.: /\\.:|ﾉ＼.} .: :.
         .: .:/\\乂  ＼ｨ=ミV.:}.: |
         |.:\\/ ｨ=ﾐ    ﾋソ｝V:|.:｜
         |.:ﾊ{ ﾋソ '    ''｜:|ヽ｜
         |.: ﾊ''          ｜:ﾉノ:＼
        丿.:|人    ⌒ヽ    ｲ::\\/ ￣
    /^^ﾍ  \\/Vv:＞=rr::rr＜vV\\/
  ｛   ﾉ    ノ   \\/ヌ\\／ ＼
    ＼  ＼,く  }   |:|   V ＼
      ＼     >ィ   |:|   ｝  ﾉ
        ＼／  ﾉ    |:|   }-く ＼
             /      V     \\  ＼  ＼ 
EOC
`,w$=`##
## 山田うどん
##
$the_cow = <<EOC;
   $thoughts
    $thoughts
  
             _ - ￣ - _
           _-_＿＿＿＿_- _
         ￣ｌ  ●   ●  l￣
            ヽ､_ ⌒ _ノ
         _ -‐ニ ￣ ニ‐- _
  /⌒ ‐ﾆ‐ ￣   /    \\ ￣ ‐ﾆ‐⌒ヽ
 ヽ､_ノ       └-ｕ‐┘      ヽ､_ノ
EOC
`,D$=`$the_cow = <<EOC;
  $thoughts
   $thoughts
    $thoughts

     iﾆﾆi
    /   /ヽ
   ｜農｜｜
   ｜協｜｜
   ｜牛｜｜＿
 ／｜乳｜｜／
 ￣￣￣￣￣
EOC
`;function C_(n){const I={e:n.eyes||"oo",T:n.tongue||"  ",n:n.wrap,W:n.wrapLength||40,text:n.text||"",_:n.text||[],f:n.cow};return n.mode&&(I[n.mode]=!0),I}function R_(n,I){const A=n.f||l_,r=on(n);return r.thoughts=I?"\\":"o",tn[I?"say":"think"](n.text||n._.join(" "),n.n?null:n.W)+`
`+en(A,r)}function c_(n){return R_(C_(n),!0)}function p$(n){return R_(C_(n),!1)}const y$=Object.freeze(Object.defineProperty({__proto__:null,ACKBAR:Tn,APERTURE:Ln,APERTURE_BLANK:En,ARMADILLO:hn,ATAT:In,ATOM:An,AWESOME_FACE:sn,BANANA:rn,BEARFACE:an,BEAVIS_ZEN:un,BEES:Xn,BILL_THE_CAT:On,BIOHAZARD:Mn,BISHOP:ln,BLACK_MESA:Cn,BONG:Rn,BOX:cn,BROKEN_HEART:gn,BUD_FROGS:Un,BUNNY:Nn,C3PO:fn,CAKE:Sn,CAKE_WITH_CANDLES:Hn,CAT:dn,CAT2:mn,CATFENCE:wn,CHARIZARDVICE:Dn,CHARLIE:pn,CHEESE:yn,CHESSMEN:Wn,CHITO:vn,CLAW_ARM:Pn,CLIPPY:xn,COMPANION_CUBE:Gn,COWER:bn,COWFEE:Fn,CTHULHU_MINI:Bn,CUBE:Vn,DAEMON:Kn,DALEK:kn,DALEK_SHOOTING:Zn,DEFAULT:l_,DOCKER_WHALE:Yn,DOGE:jn,DOLPHIN:zn,DRAGON:Qn,DRAGON_AND_COW:Jn,EBI_FURAI:qn,ELEPHANT:nt,ELEPHANT2:_t,ELEPHANT_IN_SNAKE:tt,EXPLOSION:et,EYES:$t,FAT_BANANA:ot,FAT_COW:Tt,FENCE:Et,FIRE:Lt,FLAMING_SHEEP:ht,FOX:It,GHOST:st,GHOSTBUSTERS:At,GLADOS:rt,GOAT:it,GOAT2:at,GOLDEN_EAGLE:ut,HAND:Xt,HAPPY_WHALE:Ot,HEDGEHOG:Mt,HELLOKITTY:lt,HIPPIE:Ct,HIYA:Rt,HIYOKO:ct,HOMER:gt,HYPNO:Ut,IBM:Nt,IWASHI:ft,JELLYFISH:St,KARL_MARX:Ht,KILROY:mt,KING:dt,KISS:wt,KITTEN:Dt,KITTY:pt,KNIGHT:yt,KOALA:Wt,KOSH:vt,LAMB:xt,LAMB2:Pt,LIGHTBULB:Gt,LOBSTER:bt,LOLLERSKATES:Ft,LUKE_KOALA:Bt,MAILCHIMP:Vt,MAZE_RUNNER:Kt,MECH_AND_COW:kt,MEOW:Zt,MILK:Yt,MINOTAUR:jt,MONA_LISA:zt,MOOFASA:Jt,MOOGHIDJIRAH:Qt,MOOJIRA:qt,MOOSE:_e,MULE:ne,MUTILATED:te,NYAN:ee,OCTOPUS:$e,OKAZU:oe,OWL:Te,PAWN:Ee,PERIODIC_TABLE:Le,PERSONALITY_SPHERE:he,PINBALL_MACHINE:Ie,PSYCHIATRICHELP:se,PSYCHIATRICHELP2:Ae,PTERODACTYL:re,QUEEN:ae,R2_D2:ie,RADIO:ue,REN:Xe,RENGE:Oe,ROBOT:Me,ROBOTFINDSKITTEN:le,ROFLCOPTER:Ce,ROOK:Re,SACHIKO:ce,SATANIC:ge,SEAHORSE:Ne,SEAHORSE_BIG:Ue,SHEEP:fe,SHIKATO:Se,SHRUG:He,SKELETON:me,SMALL:de,SMILING_OCTOPUS:we,SNOOPY:De,SNOOPYHOUSE:pe,SNOOPYSLEEP:ye,SPIDERCOW:We,SQUID:ve,SQUIRREL:Pe,STEGOSAURUS:xe,STIMPY:Ge,SUDOWOODO:be,SUPERMILKER:Fe,SURGERY:Be,TABLEFLIP:Ve,TAXI:Ke,TELEBEARS:ke,TEMPLATE:Ze,THREADER:Ye,THREECUBES:je,TOASTER:ze,TORTOISE:Je,TURKEY:Qe,TURTLE:qe,TUX:n$,TUX_BIG:_$,TWEETY_BIRD:t$,USA:e$,VADER:$$,VADER_KOALA:o$,WEEPING_ANGEL:T$,WHALE:E$,WIZARD:L$,WOOD:h$,WORLD:I$,WWW:A$,YASUNA_01:s$,YASUNA_02:r$,YASUNA_03:i$,YASUNA_03A:a$,YASUNA_04:u$,YASUNA_05:X$,YASUNA_06:O$,YASUNA_07:M$,YASUNA_08:l$,YASUNA_09:C$,YASUNA_10:R$,YASUNA_11:c$,YASUNA_12:g$,YASUNA_13:U$,YASUNA_14:N$,YASUNA_16:f$,YASUNA_17:S$,YASUNA_18:H$,YASUNA_19:m$,YASUNA_20:d$,YMD_UDON:w$,ZEN_NOH_MILK:D$,say:c_,think:p$},Symbol.toStringTag,{value:"Module"})),j=c_,Q=Object.fromEntries(Object.entries(y$).filter(([n,I])=>n==="say"||n==="think"||n==="EYES"?!1:typeof I=="string")),W$=["DEFAULT","BUNNY","CHEESE","DRAGON","ELEPHANT","GHOSTBUSTERS","KITTY","KOALA","MOOSE","SHEEP","SKELETON","STEGOSAURUS","TURKEY","TURTLE","VADER"],v$=["Standard","Ghost","Slant","Small","Big","Doom"],P$={Standard:Z_,Ghost:V_,Slant:K_,Small:k_,Big:F_,Doom:B_};let i_=!1;function g_(){i_||(Object.entries(P$).forEach(([n,I])=>{const A=I.default??I;z.parseFont(n,A)}),i_=!0)}function x$(n,I="Standard"){const A=(n||"").trim()||"Type something!";g_();try{return z.textSync(A,{font:I})}catch{return z.textSync(A,{font:"Standard"})}}function G$(n,I="DEFAULT"){const A=(n||"").trim()||"Type something!";if(typeof j!="function")return A;const r=Q[I]??Q.DEFAULT;try{return j({text:A,cow:r})}catch{return j({text:A})}}async function b$(){return g_(),v$}async function F$(){const n=Object.keys(Q).sort();return n.length>0?n:W$}const B$=document.getElementById("app"),P=document.getElementById("text-input"),x=document.getElementById("mode-select"),G=document.getElementById("figlet-select"),b=document.getElementById("cow-select"),u_=document.getElementById("figlet-group"),X_=document.getElementById("cow-group"),F=document.getElementById("text-color"),B=document.getElementById("bg-color"),V=document.getElementById("size-range"),l={text:(P==null?void 0:P.value)||"Pipeline Workshop",mode:(x==null?void 0:x.value)||"figlet",figletFont:"Standard",cow:"DEFAULT",textColor:(F==null?void 0:F.value)||"#111827",bgColor:(B==null?void 0:B.value)||"#f9fafb",fontSize:Number((V==null?void 0:V.value)||14)};function U_(){const n=l.mode==="figlet";u_&&(u_.hidden=!n),X_&&(X_.hidden=n)}function V$(){return l.mode==="cowsay"?n=>G$(n,l.cow):n=>x$(n,l.figletFont)}function S(){P_(B$,{bannerText:l.text,textColor:l.textColor,bgColor:l.bgColor,fontSize:l.fontSize,asciiRenderer:V$()})}function O_(n,I){n&&(n.innerHTML="",I.forEach(A=>{const r=document.createElement("option");r.value=A,r.textContent=A.toLowerCase().replaceAll("_"," ").replace(/\b\w/g,a=>a.toUpperCase()),n.append(r)}))}async function K$(){const[n,I]=await Promise.all([b$(),F$()]),A=Array.isArray(n)&&n.length?n:["Standard"],r=Array.isArray(I)&&I.length?I:["default"];O_(G,A),O_(b,r),A.includes(l.figletFont)||(l.figletFont=A[0]),r.includes(l.cow)||(l.cow=r[0]),G&&(G.value=l.figletFont),b&&(b.value=l.cow),U_(),S()}P&&P.addEventListener("input",n=>{l.text=n.target.value,S()});x&&x.addEventListener("change",n=>{l.mode=n.target.value,U_(),S()});G&&G.addEventListener("change",n=>{l.figletFont=n.target.value,S()});b&&b.addEventListener("change",n=>{l.cow=n.target.value,S()});F&&F.addEventListener("input",n=>{l.textColor=n.target.value,S()});B&&B.addEventListener("input",n=>{l.bgColor=n.target.value,S()});V&&V.addEventListener("input",n=>{l.fontSize=Number(n.target.value),S()});K$().catch(()=>{S()});
