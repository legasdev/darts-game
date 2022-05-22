var Z=Object.defineProperty,x=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var P=(s,e,t)=>e in s?Z(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,b=(s,e)=>{for(var t in e||(e={}))q.call(e,t)&&P(s,t,e[t]);if(S)for(var t of S(e))U.call(e,t)&&P(s,t,e[t]);return s},v=(s,e)=>x(s,$(e));var A=(s,e)=>{var t={};for(var r in s)q.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&S)for(var r of S(s))e.indexOf(r)<0&&U.call(s,r)&&(t[r]=s[r]);return t};import{w as ee}from"./index-8afca181.js";import{S as C,i as F,s as H,l as W,g as N,n as te,o as L,p as se,q as B,d as _,T as G,F as V,e as D,c as E,a as h,b as c,N as K,G as Q,H as R,I as X,w as le,x as ne,y as ae,B as re,t as ie,k as oe,U as j,h as ue,m as ce,V as z,J as p,j as fe}from"./index-2e7372d8.js";const Y=!0,I={gameData:"darts-game"};function _e(){try{const s=localStorage.getItem(I.gameData);return s&&JSON.parse(s)}catch(s){return console.error(s),null}}function de(){const s=_e(),{subscribe:e,set:t,update:r}=ee(s);function u(o){!o||!Y||localStorage.setItem(I.gameData,JSON.stringify(o))}function i(o){t(o),u(o)}function a(){t(null),localStorage.removeItem(I.gameData)}function n(o,d,k){r(T=>{var y=T,{players:w}=y,J=A(y,["players"]);const m=v(b({},J),{players:w==null?void 0:w.map(g=>g.id!==o?g:v(b({},g),{turn:g.turn.map((M,O)=>({value:d[O],multiple:k[O]}))}))});return u(m),m})}function l(o){n(o,[0,0,0],[1,1,1])}function f(o,d){r(J=>{var T=J,{players:k}=T,w=A(T,["players"]);const y=v(b({},w),{players:Array.isArray(k)?[...k].map((m,g)=>{if(m.id===o)return v(b({},m),{score:+m.score+d,isTurn:!1});const M=o===k.length-1?0:o+1;if(g===M)return v(b({},m),{isTurn:!0})}):k});return u(y),y})}return{subscribe:e,set:i,update:r,updatePlayerTurn:n,clearPlayerTurn:l,newGame:a,nextPlayer:f}}const Se=de();function me(s){let e,t,r,u;const i=s[4].default,a=V(i,s,s[3],null);return{c(){e=D("button"),a&&a.c(),this.h()},l(n){e=E(n,"BUTTON",{class:!0,style:!0});var l=h(e);a&&a.l(l),l.forEach(_),this.h()},h(){c(e,"class","button svelte-13a9a0k"),e.disabled=s[2],c(e,"style",s[0])},m(n,l){N(n,e,l),a&&a.m(e,null),t=!0,r||(u=K(e,"click",s[6]),r=!0)},p(n,l){a&&a.p&&(!t||l&8)&&Q(a,i,n,n[3],t?X(i,n[3],l,null):R(n[3]),null),(!t||l&4)&&(e.disabled=n[2]),(!t||l&1)&&c(e,"style",n[0])},i(n){t||(B(a,n),t=!0)},o(n){L(a,n),t=!1},d(n){n&&_(e),a&&a.d(n),r=!1,u()}}}function he(s){let e,t,r,u;const i=s[4].default,a=V(i,s,s[3],null);return{c(){e=D("a"),a&&a.c(),this.h()},l(n){e=E(n,"A",{class:!0,href:!0,style:!0});var l=h(e);a&&a.l(l),l.forEach(_),this.h()},h(){c(e,"class","button svelte-13a9a0k"),c(e,"href",s[1]),c(e,"style",s[0])},m(n,l){N(n,e,l),a&&a.m(e,null),t=!0,r||(u=K(e,"click",s[5]),r=!0)},p(n,l){a&&a.p&&(!t||l&8)&&Q(a,i,n,n[3],t?X(i,n[3],l,null):R(n[3]),null),(!t||l&2)&&c(e,"href",n[1]),(!t||l&1)&&c(e,"style",n[0])},i(n){t||(B(a,n),t=!0)},o(n){L(a,n),t=!1},d(n){n&&_(e),a&&a.d(n),r=!1,u()}}}function ke(s){let e,t,r,u;const i=[he,me],a=[];function n(l,f){return l[1]?0:1}return e=n(s),t=a[e]=i[e](s),{c(){t.c(),r=W()},l(l){t.l(l),r=W()},m(l,f){a[e].m(l,f),N(l,r,f),u=!0},p(l,[f]){let o=e;e=n(l),e===o?a[e].p(l,f):(te(),L(a[o],1,1,()=>{a[o]=null}),se(),t=a[e],t?t.p(l,f):(t=a[e]=i[e](l),t.c()),B(t,1),t.m(r.parentNode,r))},i(l){u||(B(t),u=!0)},o(l){L(t),u=!1},d(l){a[e].d(l),l&&_(r)}}}function ge(s,e,t){let{$$slots:r={},$$scope:u}=e,{style:i={}}=e,{isLink:a=""}=e,{disabled:n=!1}=e;function l(o){G.call(this,s,o)}function f(o){G.call(this,s,o)}return s.$$set=o=>{"style"in o&&t(0,i=o.style),"isLink"in o&&t(1,a=o.isLink),"disabled"in o&&t(2,n=o.disabled),"$$scope"in o&&t(3,u=o.$$scope)},[i,a,n,u,r,l,f]}class be extends C{constructor(e){super(),F(this,e,ge,ke,H,{style:0,isLink:1,disabled:2})}}function ve(s){let e,t,r,u,i,a,n;return{c(){e=D("span"),t=D("span"),r=ie(s[0]),u=oe(),i=j("svg"),a=j("path"),n=j("path"),this.h()},l(l){e=E(l,"SPAN",{class:!0});var f=h(e);t=E(f,"SPAN",{class:!0});var o=h(t);r=ue(o,s[0]),o.forEach(_),u=ce(f),i=z(f,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var d=h(i);a=z(d,"path",{class:!0,d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),h(a).forEach(_),n=z(d,"path",{class:!0,d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),h(n).forEach(_),d.forEach(_),f.forEach(_),this.h()},h(){c(t,"class","value-text svelte-17vy3z2"),c(a,"class","svg-line svelte-17vy3z2"),c(a,"d","M8.85083 19.1988L16.2686 11.9206"),c(a,"stroke","#2B2B2B"),c(a,"stroke-linecap","round"),c(a,"stroke-linejoin","round"),c(n,"class","svg-line svelte-17vy3z2"),c(n,"d","M8.85083 4.90973L16.2686 11.9205"),c(n,"stroke","#2B2B2B"),c(n,"stroke-linecap","round"),c(n,"stroke-linejoin","round"),c(i,"width","24"),c(i,"height","24"),c(i,"viewBox","0 0 24 24"),c(i,"fill","none"),c(i,"xmlns","http://www.w3.org/2000/svg"),c(e,"class","wrapper svelte-17vy3z2")},m(l,f){N(l,e,f),p(e,t),p(t,r),p(e,u),p(e,i),p(i,a),p(i,n)},p(l,f){f&1&&fe(r,l[0])},d(l){l&&_(e)}}}function pe(s){let e,t;return e=new be({props:{style:s[1],isLink:s[2],disabled:s[3],$$slots:{default:[ve]},$$scope:{ctx:s}}}),e.$on("click",s[4]),{c(){le(e.$$.fragment)},l(r){ne(e.$$.fragment,r)},m(r,u){ae(e,r,u),t=!0},p(r,[u]){const i={};u&2&&(i.style=r[1]),u&4&&(i.isLink=r[2]),u&8&&(i.disabled=r[3]),u&33&&(i.$$scope={dirty:u,ctx:r}),e.$set(i)},i(r){t||(B(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){re(e,r)}}}function we(s,e,t){let{value:r=""}=e,{style:u={}}=e,{isLink:i=""}=e,{disabled:a=!1}=e;function n(l){G.call(this,s,l)}return s.$$set=l=>{"value"in l&&t(0,r=l.value),"style"in l&&t(1,u=l.style),"isLink"in l&&t(2,i=l.isLink),"disabled"in l&&t(3,a=l.disabled)},[r,u,i,a,n]}class De extends C{constructor(e){super(),F(this,e,we,pe,H,{value:0,style:1,isLink:2,disabled:3})}}export{De as B,Se as g};
