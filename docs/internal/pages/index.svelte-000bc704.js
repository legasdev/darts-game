import{S as R,i as V,s as Y,e as v,t as L,k as b,c as p,a as d,h as N,d as i,m as w,b as h,g as y,J as u,E,j,w as P,x as S,y as q,q as $,o as x,B,a0 as C,p as G,R as J,n as M}from"../chunks/index-2e7372d8.js";import{b as T}from"../chunks/paths-396f020f.js";import{B as z,g as H}from"../chunks/index-44395234.js";import{P as K}from"../chunks/PageTitle-39c3a20c.js";import"../chunks/index-8afca181.js";function Q(o){let e,t,s,a,r,f;return{c(){e=v("footer"),t=v("span"),s=L("\u0410\u0440\u0442\u0435\u043C \u0421\u0442\u0435\u043F\u0430\u043D\u043E\u0432"),a=b(),r=v("span"),f=L(o[0]),this.h()},l(c){e=p(c,"FOOTER",{class:!0});var m=d(e);t=p(m,"SPAN",{class:!0});var g=d(t);s=N(g,"\u0410\u0440\u0442\u0435\u043C \u0421\u0442\u0435\u043F\u0430\u043D\u043E\u0432"),g.forEach(i),a=w(m),r=p(m,"SPAN",{class:!0});var _=d(r);f=N(_,o[0]),_.forEach(i),m.forEach(i),this.h()},h(){h(t,"class","footer__text svelte-698ovd"),h(r,"class","footer__text svelte-698ovd"),h(e,"class","footer svelte-698ovd")},m(c,m){y(c,e,m),u(e,t),u(t,s),u(e,a),u(e,r),u(r,f)},p:E,i:E,o:E,d(c){c&&i(e)}}}function U(o){return[new Date().getFullYear()]}class W extends R{constructor(e){super(),V(this,e,U,Q,Y,{})}}function X(o){let e,t;return{c(){e=v("a"),t=L(o[1]),this.h()},l(s){e=p(s,"A",{class:!0,href:!0});var a=d(e);t=N(a,o[1]),a.forEach(i),this.h()},h(){h(e,"class","link svelte-9ehrr0"),h(e,"href",o[0])},m(s,a){y(s,e,a),u(e,t)},p(s,[a]){a&2&&j(t,s[1]),a&1&&h(e,"href",s[0])},i:E,o:E,d(s){s&&i(e)}}}function Z(o,e,t){let{href:s="/"}=e,{value:a=""}=e;return o.$$set=r=>{"href"in r&&t(0,s=r.href),"value"in r&&t(1,a=r.value)},[s,a]}class ee extends R{constructor(e){super(),V(this,e,Z,X,Y,{href:0,value:1})}}function O(o){let e,t,s;return t=new ee({props:{href:`${T}/game/`,value:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u0443\u044E \u0438\u0433\u0440\u0443"}}),{c(){e=v("div"),P(t.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var r=d(e);S(t.$$.fragment,r),r.forEach(i),this.h()},h(){h(e,"class","save-game-block svelte-186pxeh")},m(a,r){y(a,e,r),q(t,e,null),s=!0},p:E,i(a){s||($(t.$$.fragment,a),s=!0)},o(a){x(t.$$.fragment,a),s=!1},d(a){a&&i(e),B(t)}}}function te(o){let e,t,s,a,r,f,c,m,g,_,D;a=new K({props:{title:"\u0414\u0430\u0440\u0442\u0441"}}),c=new z({props:{value:"\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443",style:"min-width: 230px;",isLink:`${T}/game/`}});let n=o[0]&&O();return _=new W({}),{c(){e=b(),t=v("div"),s=v("div"),P(a.$$.fragment),r=b(),f=v("main"),P(c.$$.fragment),m=b(),n&&n.c(),g=b(),P(_.$$.fragment),this.h()},l(l){C('[data-svelte="svelte-12l06vt"]',document.head).forEach(i),e=w(l),t=p(l,"DIV",{class:!0});var A=d(t);s=p(A,"DIV",{class:!0});var F=d(s);S(a.$$.fragment,F),r=w(F),f=p(F,"MAIN",{class:!0});var I=d(f);S(c.$$.fragment,I),m=w(I),n&&n.l(I),I.forEach(i),F.forEach(i),g=w(A),S(_.$$.fragment,A),A.forEach(i),this.h()},h(){document.title="Darts Game",h(f,"class","svelte-186pxeh"),h(s,"class","wrapper svelte-186pxeh"),h(t,"class","center-block svelte-186pxeh")},m(l,k){y(l,e,k),y(l,t,k),u(t,s),q(a,s,null),u(s,r),u(s,f),q(c,f,null),u(f,m),n&&n.m(f,null),u(t,g),q(_,t,null),D=!0},p(l,[k]){l[0]?n?(n.p(l,k),k&1&&$(n,1)):(n=O(),n.c(),$(n,1),n.m(f,null)):n&&(M(),x(n,1,1,()=>{n=null}),G())},i(l){D||($(a.$$.fragment,l),$(c.$$.fragment,l),$(n),$(_.$$.fragment,l),D=!0)},o(l){x(a.$$.fragment,l),x(c.$$.fragment,l),x(n),x(_.$$.fragment,l),D=!1},d(l){l&&i(e),l&&i(t),B(a),B(c),n&&n.d(),B(_)}}}function ae(o,e,t){let s;return J(o,H,a=>t(0,s=a)),[s]}class ie extends R{constructor(e){super(),V(this,e,ae,te,Y,{})}}export{ie as default};
