var Me=Object.defineProperty,Ne=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var fe=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ce=(s,e,i)=>e in s?Me(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,F=(s,e)=>{for(var i in e||(e={}))je.call(e,i)&&ce(s,i,e[i]);if(fe)for(var i of fe(e))Ie.call(e,i)&&ce(s,i,e[i]);return s},ne=(s,e)=>Ne(s,Se(e));import{S as H,i as C,s as O,e as y,t as ee,k as I,w as B,U as L,c as T,a as k,h as te,d as m,m as P,x as M,V as D,b as f,g as w,J as g,y as N,N as Y,E as A,q as v,o as b,B as S,W as x,j as se,O as J,P as Q,Q as W,l as j,L as ae,Y as Pe,Z as qe,_ as _e,$ as Le,n as Z,M as Be,p as K,R as De}from"../../chunks/index-2e7372d8.js";import{B as Ve,g as Ge}from"../../chunks/index-44395234.js";import{w as Ae}from"../../chunks/index-8afca181.js";import{U as He,I as Ce,S as ie,a as ue}from"../../chunks/InputNumber-9bcb34ff.js";function Oe(){const{subscribe:s,update:e}=Ae([]);function i(a,u){e(l=>{var n;return[...l,{id:((n=l[l.length-1])==null?void 0:n.id)+1||0,name:a,color:u,isTurn:l.length===0}]})}function t(a){e(u=>u.filter(({id:l})=>a!==l))}return{subscribe:s,add:i,remove:t}}const oe=Oe();function Ue(s){let e,i,t,a,u,l,n,r,o,c,_,h,d,p;return l=new He({props:{color:s[1],name:s[0]}}),{c(){e=y("div"),i=y("span"),t=ee(s[0]),a=I(),u=y("div"),B(l.$$.fragment),n=I(),r=y("button"),o=L("svg"),c=L("path"),_=L("path"),this.h()},l(E){e=T(E,"DIV",{class:!0});var q=k(e);i=T(q,"SPAN",{class:!0});var R=k(i);t=te(R,s[0]),R.forEach(m),a=P(q),u=T(q,"DIV",{class:!0});var U=k(u);M(l.$$.fragment,U),n=P(U),r=T(U,"BUTTON",{class:!0});var z=k(r);o=D(z,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var $=k(o);c=D($,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(c).forEach(m),_=D($,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(_).forEach(m),$.forEach(m),z.forEach(m),U.forEach(m),q.forEach(m),this.h()},h(){f(i,"class","user_name svelte-8osvux"),f(c,"d","M8 8.21948L16 15.7805"),f(c,"stroke","#2B2B2B"),f(c,"stroke-linecap","round"),f(c,"stroke-linejoin","round"),f(_,"d","M16 8.21948L8.00001 15.7805"),f(_,"stroke","#2B2B2B"),f(_,"stroke-linecap","round"),f(_,"stroke-linejoin","round"),f(o,"width","24"),f(o,"height","24"),f(o,"viewBox","0 0 24 24"),f(o,"fill","none"),f(o,"xmlns","http://www.w3.org/2000/svg"),f(r,"class","svelte-8osvux"),f(u,"class","user_ui svelte-8osvux"),f(e,"class","user svelte-8osvux")},m(E,q){w(E,e,q),g(e,i),g(i,t),g(e,a),g(e,u),N(l,u,null),g(u,n),g(u,r),g(r,o),g(o,c),g(o,_),h=!0,d||(p=Y(r,"click",s[2]),d=!0)},p:A,i(E){h||(v(l.$$.fragment,E),h=!0)},o(E){b(l.$$.fragment,E),h=!1},d(E){E&&m(e),S(l),d=!1,p()}}}function Re(s,e,i){let{player:t={id:null,name:null,color:null}}=e;const{id:a,name:u,color:l}=t;function n(){oe.remove(a)}return s.$$set=r=>{"player"in r&&i(3,t=r.player)},[u,l,n,t]}class ze extends H{constructor(e){super(),C(this,e,Re,Ue,O,{player:3})}}function re(){const i=Math.pow(16,Math.min(6,8)-1),t=Math.pow(16,Math.min(6,8))-1;let u=(Math.floor(Math.random()*(t-i+1))+i).toString(16);for(;u.length<6;)u=u+re();return u}function Xe(s){let e,i,t,a;return{c(){e=y("div"),i=y("input"),this.h()},l(u){e=T(u,"DIV",{class:!0,style:!0});var l=k(e);i=T(l,"INPUT",{id:!0,type:!0,class:!0}),l.forEach(m),this.h()},h(){f(i,"id",s[1]),f(i,"type","color"),f(i,"class","svelte-huv6aq"),f(e,"class","wrapper svelte-huv6aq"),f(e,"style",s[2])},m(u,l){w(u,e,l),g(e,i),x(i,s[0]),t||(a=Y(i,"input",s[3]),t=!0)},p(u,[l]){l&2&&f(i,"id",u[1]),l&1&&x(i,u[0]),l&4&&f(e,"style",u[2])},i:A,o:A,d(u){u&&m(e),t=!1,a()}}}function Fe(s,e,i){let{id:t=Math.random()}=e,{style:a=""}=e,{value:u}=e;function l(){u=this.value,i(0,u)}return s.$$set=n=>{"id"in n&&i(1,t=n.id),"style"in n&&i(2,a=n.style),"value"in n&&i(0,u=n.value)},[u,t,a,l]}class Je extends H{constructor(e){super(),C(this,e,Fe,Xe,O,{id:1,style:2,value:0})}}function he(s){let e,i;return{c(){e=y("label"),i=ee(s[2]),this.h()},l(t){e=T(t,"LABEL",{class:!0,for:!0});var a=k(e);i=te(a,s[2]),a.forEach(m),this.h()},h(){f(e,"class","label svelte-1q6jnob"),f(e,"for",s[1])},m(t,a){w(t,e,a),g(e,i)},p(t,a){a&4&&se(i,t[2]),a&2&&f(e,"for",t[1])},d(t){t&&m(e)}}}function Qe(s){let e,i,t,a,u,l=s[2]&&he(s);return{c(){e=y("div"),l&&l.c(),i=I(),t=y("input"),this.h()},l(n){e=T(n,"DIV",{class:!0});var r=k(e);l&&l.l(r),i=P(r),t=T(r,"INPUT",{id:!0,type:!0,placeholder:!0,"aria-placeholder":!0,class:!0}),r.forEach(m),this.h()},h(){f(t,"id",s[1]),f(t,"type","text"),f(t,"placeholder",s[3]),f(t,"aria-placeholder",s[3]),f(t,"class","svelte-1q6jnob"),f(e,"class","input-wrapper svelte-1q6jnob")},m(n,r){w(n,e,r),l&&l.m(e,null),g(e,i),g(e,t),x(t,s[0]),a||(u=Y(t,"input",s[4]),a=!0)},p(n,[r]){n[2]?l?l.p(n,r):(l=he(n),l.c(),l.m(e,i)):l&&(l.d(1),l=null),r&2&&f(t,"id",n[1]),r&8&&f(t,"placeholder",n[3]),r&8&&f(t,"aria-placeholder",n[3]),r&1&&t.value!==n[0]&&x(t,n[0])},i:A,o:A,d(n){n&&m(e),l&&l.d(),a=!1,u()}}}function We(s,e,i){let{id:t=Math.random()}=e,{label:a=null}=e,{placeholder:u=""}=e,{value:l=""}=e;function n(){l=this.value,i(0,l)}return s.$$set=r=>{"id"in r&&i(1,t=r.id),"label"in r&&i(2,a=r.label),"placeholder"in r&&i(3,u=r.placeholder),"value"in r&&i(0,l=r.value)},[l,t,a,u,n]}class Ye extends H{constructor(e){super(),C(this,e,We,Qe,O,{id:1,label:2,placeholder:3,value:0})}}function Ze(s){let e,i,t,a,u,l,n,r,o,c,_,h,d,p,E;function q($){s[3]($)}let R={id:"userName",placeholder:"\u0418\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430"};s[0]!==void 0&&(R.value=s[0]),i=new Ye({props:R}),J.push(()=>Q(i,"value",q));function U($){s[4]($)}let z={id:"userColor"};return s[1]!==void 0&&(z.value=s[1]),l=new Je({props:z}),J.push(()=>Q(l,"value",U)),{c(){e=y("div"),B(i.$$.fragment),a=I(),u=y("div"),B(l.$$.fragment),r=I(),o=y("button"),c=L("svg"),_=L("path"),h=L("path"),this.h()},l($){e=T($,"DIV",{class:!0});var V=k(e);M(i.$$.fragment,V),a=P(V),u=T(V,"DIV",{class:!0});var G=k(u);M(l.$$.fragment,G),r=P(G),o=T(G,"BUTTON",{class:!0});var X=k(o);c=D(X,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var le=k(c);_=D(le,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(_).forEach(m),h=D(le,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(h).forEach(m),le.forEach(m),X.forEach(m),G.forEach(m),V.forEach(m),this.h()},h(){f(_,"d","M11.4817 15.3479L18.8996 8.06984"),f(_,"stroke","#2B2B2B"),f(_,"stroke-linecap","round"),f(_,"stroke-linejoin","round"),f(h,"d","M7.10983 10.7586L11.4316 15.3"),f(h,"stroke","#2B2B2B"),f(h,"stroke-linecap","round"),f(h,"stroke-linejoin","round"),f(c,"width","24"),f(c,"height","24"),f(c,"viewBox","0 0 24 24"),f(c,"fill","none"),f(c,"xmlns","http://www.w3.org/2000/svg"),f(o,"class","input-block_add svelte-1gmbrzv"),f(u,"class","input-block_ui svelte-1gmbrzv"),f(e,"class","input-block svelte-1gmbrzv")},m($,V){w($,e,V),N(i,e,null),g(e,a),g(e,u),N(l,u,null),g(u,r),g(u,o),g(o,c),g(c,_),g(c,h),d=!0,p||(E=Y(o,"click",s[2]),p=!0)},p($,[V]){const G={};!t&&V&1&&(t=!0,G.value=$[0],W(()=>t=!1)),i.$set(G);const X={};!n&&V&2&&(n=!0,X.value=$[1],W(()=>n=!1)),l.$set(X)},i($){d||(v(i.$$.fragment,$),v(l.$$.fragment,$),d=!0)},o($){b(i.$$.fragment,$),b(l.$$.fragment,$),d=!1},d($){$&&m(e),S(i),S(l),p=!1,E()}}}function Ke(s,e,i){let t="",a=`#${re()}`;function u(){!t||(oe.add(t,a),i(0,t=""),i(1,a=`#${re()}`))}function l(r){t=r,i(0,t)}function n(r){a=r,i(1,a)}return[t,a,u,l,n]}class xe extends H{constructor(e){super(),C(this,e,Ke,Ze,O,{})}}function me(s,e,i){const t=s.slice();return t[6]=e[i],t}function de(s){let e,i;return{c(){e=y("label"),i=ee(s[2]),this.h()},l(t){e=T(t,"LABEL",{class:!0,for:!0});var a=k(e);i=te(a,s[2]),a.forEach(m),this.h()},h(){f(e,"class","label svelte-1r2qk57"),f(e,"for",s[1])},m(t,a){w(t,e,a),g(e,i)},p(t,a){a&4&&se(i,t[2]),a&2&&f(e,"for",t[1])},d(t){t&&m(e)}}}function pe(s){let e=[],i=new Map,t,a=s[3];const u=l=>l[6].id;for(let l=0;l<a.length;l+=1){let n=me(s,a,l),r=u(n);i.set(r,e[l]=ge(r,n))}return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=j()},l(l){for(let n=0;n<e.length;n+=1)e[n].l(l);t=j()},m(l,n){for(let r=0;r<e.length;r+=1)e[r].m(l,n);w(l,t,n)},p(l,n){n&8&&(a=l[3],e=ae(e,n,u,1,l,a,i,t.parentNode,Pe,ge,t,me))},d(l){for(let n=0;n<e.length;n+=1)e[n].d(l);l&&m(t)}}}function ge(s,e){let i,t=e[6].name+"",a,u;return{key:s,first:null,c(){i=y("option"),a=ee(t),this.h()},l(l){i=T(l,"OPTION",{});var n=k(i);a=te(n,t),n.forEach(m),this.h()},h(){i.__value=u=e[6].id,i.value=i.__value,this.first=i},m(l,n){w(l,i,n),g(i,a)},p(l,n){e=l,n&8&&t!==(t=e[6].name+"")&&se(a,t),n&8&&u!==(u=e[6].id)&&(i.__value=u,i.value=i.__value)},d(l){l&&m(i)}}}function et(s){let e,i,t,a,u,l,n,r,o,c,_=s[2]&&de(s),h=s[3]&&pe(s);return{c(){e=y("div"),_&&_.c(),i=I(),t=y("select"),h&&h.c(),a=I(),u=L("svg"),l=L("rect"),n=L("path"),r=L("path"),this.h()},l(d){e=T(d,"DIV",{class:!0,style:!0});var p=k(e);_&&_.l(p),i=P(p),t=T(p,"SELECT",{id:!0,class:!0});var E=k(t);h&&h.l(E),E.forEach(m),a=P(p),u=D(p,"svg",{class:!0,width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var q=k(u);l=D(q,"rect",{width:!0,height:!0,fill:!0}),k(l).forEach(m),n=D(q,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(n).forEach(m),r=D(q,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),k(r).forEach(m),q.forEach(m),p.forEach(m),this.h()},h(){f(t,"id",s[1]),f(t,"class","svelte-1r2qk57"),s[0]===void 0&&qe(()=>s[5].call(t)),f(l,"width","44"),f(l,"height","44"),f(l,"fill","white"),f(n,"d","M19.5076 18L26.7857 25.4178"),f(n,"stroke","#2B2B2B"),f(n,"stroke-linecap","round"),f(n,"stroke-linejoin","round"),f(r,"d","M33.7966 18L26.7858 25.4178"),f(r,"stroke","#2B2B2B"),f(r,"stroke-linecap","round"),f(r,"stroke-linejoin","round"),f(u,"class","input_arrow svelte-1r2qk57"),f(u,"width","44"),f(u,"height","44"),f(u,"viewBox","0 0 44 44"),f(u,"fill","none"),f(u,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","input-wrapper svelte-1r2qk57"),f(e,"style",s[4])},m(d,p){w(d,e,p),_&&_.m(e,null),g(e,i),g(e,t),h&&h.m(t,null),_e(t,s[0]),g(e,a),g(e,u),g(u,l),g(u,n),g(u,r),o||(c=Y(t,"change",s[5]),o=!0)},p(d,[p]){d[2]?_?_.p(d,p):(_=de(d),_.c(),_.m(e,i)):_&&(_.d(1),_=null),d[3]?h?h.p(d,p):(h=pe(d),h.c(),h.m(t,null)):h&&(h.d(1),h=null),p&2&&f(t,"id",d[1]),p&9&&_e(t,d[0]),p&16&&f(e,"style",d[4])},i:A,o:A,d(d){d&&m(e),_&&_.d(),h&&h.d(),o=!1,c()}}}function tt(s,e,i){let{id:t=Math.random()}=e,{label:a=null}=e,{list:u=[]}=e,{value:l}=e,{style:n=""}=e;function r(){l=Le(this),i(0,l),i(3,u)}return s.$$set=o=>{"id"in o&&i(1,t=o.id),"label"in o&&i(2,a=o.label),"list"in o&&i(3,u=o.list),"value"in o&&i(0,l=o.value),"style"in o&&i(4,n=o.style)},[l,t,a,u,n,r]}class Te extends H{constructor(e){super(),C(this,e,tt,et,O,{id:1,label:2,list:3,value:0,style:4})}}function ve(s,e,i){const t=s.slice();return t[4]=e[i],t[5]=e,t[6]=i,t}function ke(s){let e=[],i=new Map,t,a,u=s[1];const l=n=>n[4].id;for(let n=0;n<u.length;n+=1){let r=ve(s,u,n),o=l(r);i.set(o,e[n]=be(o,r))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=j()},l(n){for(let r=0;r<e.length;r+=1)e[r].l(n);t=j()},m(n,r){for(let o=0;o<e.length;o+=1)e[o].m(n,r);w(n,t,r),a=!0},p(n,r){r&3&&(u=n[1],Z(),e=ae(e,r,l,1,n,u,i,t.parentNode,Be,be,t,ve),K())},i(n){if(!a){for(let r=0;r<u.length;r+=1)v(e[r]);a=!0}},o(n){for(let r=0;r<e.length;r+=1)b(e[r]);a=!1},d(n){for(let r=0;r<e.length;r+=1)e[r].d(n);n&&m(t)}}}function lt(s){let e,i,t;function a(l){s[3](l,s[4])}let u={id:s[4].id,label:s[4].name,min:s[4].min,max:s[4].max};return s[0][s[4].id]!==void 0&&(u.value=s[0][s[4].id]),e=new Ce({props:u}),J.push(()=>Q(e,"value",a)),{c(){B(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},p(l,n){s=l;const r={};n&2&&(r.id=s[4].id),n&2&&(r.label=s[4].name),n&2&&(r.min=s[4].min),n&2&&(r.max=s[4].max),!i&&n&3&&(i=!0,r.value=s[0][s[4].id],W(()=>i=!1)),e.$set(r)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){S(e,l)}}}function nt(s){let e,i,t;function a(l){s[2](l,s[4])}let u={id:s[4].id,label:s[4].name,list:s[4].options,style:"margin-bottom: 32px;"};return s[0][s[4].id]!==void 0&&(u.value=s[0][s[4].id]),e=new Te({props:u}),J.push(()=>Q(e,"value",a)),{c(){B(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},p(l,n){s=l;const r={};n&2&&(r.id=s[4].id),n&2&&(r.label=s[4].name),n&2&&(r.list=s[4].options),!i&&n&3&&(i=!0,r.value=s[0][s[4].id],W(()=>i=!1)),e.$set(r)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){S(e,l)}}}function be(s,e){let i,t,a,u,l;const n=[nt,lt],r=[];function o(c,_){return c[4].type==="select"?0:c[4].type==="number"?1:-1}return~(t=o(e))&&(a=r[t]=n[t](e)),{key:s,first:null,c(){i=j(),a&&a.c(),u=j(),this.h()},l(c){i=j(),a&&a.l(c),u=j(),this.h()},h(){this.first=i},m(c,_){w(c,i,_),~t&&r[t].m(c,_),w(c,u,_),l=!0},p(c,_){e=c;let h=t;t=o(e),t===h?~t&&r[t].p(e,_):(a&&(Z(),b(r[h],1,1,()=>{r[h]=null}),K()),~t?(a=r[t],a?a.p(e,_):(a=r[t]=n[t](e),a.c()),v(a,1),a.m(u.parentNode,u)):a=null)},i(c){l||(v(a),l=!0)},o(c){b(a),l=!1},d(c){c&&m(i),~t&&r[t].d(c),c&&m(u)}}}function it(s){let e,i,t=s[1]&&ke(s);return{c(){t&&t.c(),e=j()},l(a){t&&t.l(a),e=j()},m(a,u){t&&t.m(a,u),w(a,e,u),i=!0},p(a,[u]){a[1]?t?(t.p(a,u),u&2&&v(t,1)):(t=ke(a),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(Z(),b(t,1,1,()=>{t=null}),K())},i(a){i||(v(t),i=!0)},o(a){b(t),i=!1},d(a){t&&t.d(a),a&&m(e)}}}function rt(s,e,i){let{settings:t}=e,{gameSettings:a}=e;function u(n,r){s.$$.not_equal(a[r.id],n)&&(a[r.id]=n,i(0,a))}function l(n,r){s.$$.not_equal(a[r.id],n)&&(a[r.id]=n,i(0,a))}return s.$$set=n=>{"settings"in n&&i(1,t=n.settings),"gameSettings"in n&&i(0,a=n.gameSettings)},[a,t,u,l]}class st extends H{constructor(e){super(),C(this,e,rt,it,O,{settings:1,gameSettings:0})}}function $e(s,e,i){const t=s.slice();return t[8]=e[i],t}function we(s){let e=[],i=new Map,t,a,u=s[2];const l=n=>n[8].id;for(let n=0;n<u.length;n+=1){let r=$e(s,u,n),o=l(r);i.set(o,e[n]=Ee(o,r))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=j()},l(n){for(let r=0;r<e.length;r+=1)e[r].l(n);t=j()},m(n,r){for(let o=0;o<e.length;o+=1)e[o].m(n,r);w(n,t,r),a=!0},p(n,r){r&4&&(u=n[2],Z(),e=ae(e,r,l,1,n,u,i,t.parentNode,Be,Ee,t,$e),K())},i(n){if(!a){for(let r=0;r<u.length;r+=1)v(e[r]);a=!0}},o(n){for(let r=0;r<e.length;r+=1)b(e[r]);a=!1},d(n){for(let r=0;r<e.length;r+=1)e[r].d(n);n&&m(t)}}}function Ee(s,e){let i,t,a;return t=new ze({props:{player:e[8]}}),{key:s,first:null,c(){i=j(),B(t.$$.fragment),this.h()},l(u){i=j(),M(t.$$.fragment,u),this.h()},h(){this.first=i},m(u,l){w(u,i,l),N(t,u,l),a=!0},p(u,l){e=u;const n={};l&4&&(n.player=e[8]),t.$set(n)},i(u){a||(v(t.$$.fragment,u),a=!0)},o(u){b(t.$$.fragment,u),a=!1},d(u){u&&m(i),S(t,u)}}}function at(s){var n;let e,i,t,a,u;e=new ue({props:{title:"\u0418\u0433\u0440\u043E\u043A\u0438",info:{text:s[3]?"":"\u041C\u0438\u043D. \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: 2",title:(n=s[2])==null?void 0:n.length}}});let l=s[2]&&we(s);return a=new xe({}),{c(){B(e.$$.fragment),i=I(),l&&l.c(),t=I(),B(a.$$.fragment)},l(r){M(e.$$.fragment,r),i=P(r),l&&l.l(r),t=P(r),M(a.$$.fragment,r)},m(r,o){N(e,r,o),w(r,i,o),l&&l.m(r,o),w(r,t,o),N(a,r,o),u=!0},p(r,o){var _;const c={};o&12&&(c.info={text:r[3]?"":"\u041C\u0438\u043D. \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: 2",title:(_=r[2])==null?void 0:_.length}),e.$set(c),r[2]?l?(l.p(r,o),o&4&&v(l,1)):(l=we(r),l.c(),v(l,1),l.m(t.parentNode,t)):l&&(Z(),b(l,1,1,()=>{l=null}),K())},i(r){u||(v(e.$$.fragment,r),v(l),v(a.$$.fragment,r),u=!0)},o(r){b(e.$$.fragment,r),b(l),b(a.$$.fragment,r),u=!1},d(r){S(e,r),r&&m(i),l&&l.d(r),r&&m(t),S(a,r)}}}function ut(s){var r;let e,i,t,a,u;e=new ue({props:{title:"\u0422\u0438\u043F \u0438\u0433\u0440\u044B",info:{text:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",href:(r=s[4])==null?void 0:r.rules}}});function l(o){s[7](o)}let n={id:"gameType",list:s[0]};return s[1]!==void 0&&(n.value=s[1]),t=new Te({props:n}),J.push(()=>Q(t,"value",l)),{c(){B(e.$$.fragment),i=I(),B(t.$$.fragment)},l(o){M(e.$$.fragment,o),i=P(o),M(t.$$.fragment,o)},m(o,c){N(e,o,c),w(o,i,c),N(t,o,c),u=!0},p(o,c){var d;const _={};c&16&&(_.info={text:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430",href:(d=o[4])==null?void 0:d.rules}),e.$set(_);const h={};c&1&&(h.list=o[0]),!a&&c&2&&(a=!0,h.value=o[1],W(()=>a=!1)),t.$set(h)},i(o){u||(v(e.$$.fragment,o),v(t.$$.fragment,o),u=!0)},o(o){b(e.$$.fragment,o),b(t.$$.fragment,o),u=!1},d(o){S(e,o),o&&m(i),S(t,o)}}}function ot(s){var u;let e,i,t,a;return e=new ue({props:{title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"}}),t=new st({props:{settings:(u=s[4])==null?void 0:u.settings,gameSettings:s[5]}}),{c(){B(e.$$.fragment),i=I(),B(t.$$.fragment)},l(l){M(e.$$.fragment,l),i=P(l),M(t.$$.fragment,l)},m(l,n){N(e,l,n),w(l,i,n),N(t,l,n),a=!0},p(l,n){var o;const r={};n&16&&(r.settings=(o=l[4])==null?void 0:o.settings),t.$set(r)},i(l){a||(v(e.$$.fragment,l),v(t.$$.fragment,l),a=!0)},o(l){b(e.$$.fragment,l),b(t.$$.fragment,l),a=!1},d(l){S(e,l),l&&m(i),S(t,l)}}}function ft(s){let e,i,t,a,u,l,n,r;return e=new ie({props:{$$slots:{default:[at]},$$scope:{ctx:s}}}),t=new ie({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),u=new ie({props:{$$slots:{default:[ot]},$$scope:{ctx:s}}}),n=new Ve({props:{value:"\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443",style:"min-width: 230px",disabled:!s[3]}}),n.$on("click",s[6]),{c(){B(e.$$.fragment),i=I(),B(t.$$.fragment),a=I(),B(u.$$.fragment),l=I(),B(n.$$.fragment)},l(o){M(e.$$.fragment,o),i=P(o),M(t.$$.fragment,o),a=P(o),M(u.$$.fragment,o),l=P(o),M(n.$$.fragment,o)},m(o,c){N(e,o,c),w(o,i,c),N(t,o,c),w(o,a,c),N(u,o,c),w(o,l,c),N(n,o,c),r=!0},p(o,[c]){const _={};c&2060&&(_.$$scope={dirty:c,ctx:o}),e.$set(_);const h={};c&2067&&(h.$$scope={dirty:c,ctx:o}),t.$set(h);const d={};c&2064&&(d.$$scope={dirty:c,ctx:o}),u.$set(d);const p={};c&8&&(p.disabled=!o[3]),n.$set(p)},i(o){r||(v(e.$$.fragment,o),v(t.$$.fragment,o),v(u.$$.fragment,o),v(n.$$.fragment,o),r=!0)},o(o){b(e.$$.fragment,o),b(t.$$.fragment,o),b(u.$$.fragment,o),b(n.$$.fragment,o),r=!1},d(o){S(e,o),o&&m(i),S(t,o),o&&m(a),S(u,o),o&&m(l),S(n,o)}}}function ct(s){return s==null?void 0:s.reduce((e,i)=>ne(F({},e),{[i.id]:i.default}),{})}function ye(s,e){return s==null?void 0:s.find(i=>i.id===e)}function _t(s,e,i){var _;let t;De(s,oe,h=>i(2,t=h));let{gameTypes:a=[]}=e,u=(_=a[0])==null?void 0:_.id,l=!1,n=ye(a,u),r=ct(n==null?void 0:n.settings);function o(){const h=n==null?void 0:n.settings.map(({id:p})=>p),d={id:Date.now(),gameId:u,settings:h==null?void 0:h.reduce((p,E)=>ne(F({},p),{[E]:r[E]||null}),{}),players:t==null?void 0:t.map(p=>F(F({},p),n.playersInitialData))};Ge.set(d)}function c(h){u=h,i(1,u)}return s.$$set=h=>{"gameTypes"in h&&i(0,a=h.gameTypes)},s.$$.update=()=>{s.$$.dirty&4&&i(3,l=(t==null?void 0:t.length)>1),s.$$.dirty&3&&i(4,n=ye(a,u))},[a,u,t,l,n,r,o,c]}class vt extends H{constructor(e){super(),C(this,e,_t,ft,O,{gameTypes:0})}}export{vt as default};
