function P(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(G)}function Z(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return P;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(et(e,n))}function xt(t,e,n,i){if(t){const s=J(t,e,n,i);return t[0](s)}}function J(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function $t(t,e,n,i,s,u){if(s){const r=J(e,n,i,u);t.p(r,s)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let N=!1;function nt(){N=!0}function it(){N=!1}function ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:ct(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(r[c],f)}}function st(t,e){if(N){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){N&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Et(){return I(" ")}function St(){return I("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return t===""?null:+t}function at(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,i,s=!1){ft(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Q(t,e,n,i){return K(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Mt(t,e,n){return Q(t,e,n,lt)}function Ct(t,e,n){return Q(t,e,n,ut)}function dt(t,e){return K(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function qt(t){return dt(t," ")}function Lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e){t.value=e==null?"":e}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ot(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Pt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function It(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function x(t){w=t}function z(){if(!w)throw new Error("Function called outside component initialization");return w}function Dt(t){z().$$.on_mount.push(t)}function Ft(t){z().$$.after_update.push(t)}function Ht(t,e){z().$$.context.set(t,e)}function Wt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],W=[],S=[],T=[],R=Promise.resolve();let B=!1;function U(){B||(B=!0,R.then(V))}function Gt(){return U(),R}function O(t){S.push(t)}function Jt(t){T.push(t)}const L=new Set;let E=0;function V(){const t=w;do{for(;E<b.length;){const e=b[E];E++,x(e),_t(e.$$)}for(x(null),b.length=0,E=0;W.length;)W.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];L.has(n)||(L.add(n),n())}S.length=0}while(b.length);for(;T.length;)T.pop()();B=!1,L.clear(),x(t)}function _t(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const A=new Set;let g;function Kt(){g={r:0,c:[],p:g}}function Qt(){g.r||$(g.c),g=g.p}function X(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Rt(t,e){t.d(1),e.delete(t.key)}function Ut(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Vt(t,e,n,i,s,u,r,o,c,l,f,_){let d=t.length,m=u.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const k=[],M=new Map,C=new Map;for(h=m;h--;){const a=_(s,u,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),M.set(p,k[h]=y),p in j&&C.set(p,Math.abs(h-j[p]))}const D=new Set,F=new Set;function q(a){X(a,1),a.m(o,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=k[m-1],p=t[d-1],y=a.key,v=p.key;a===p?(f=a.first,d--,m--):M.has(v)?!r.has(y)||D.has(y)?q(a):F.has(v)?d--:C.get(y)>C.get(v)?(F.add(y),q(a)):(D.add(v),d--):(c(p,r),d--)}for(;d--;){const a=t[d];M.has(a.key)||c(a,r)}for(;m;)q(k[m-1]);return k}function Xt(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Yt(t){return typeof t=="object"&&t!==null?t:{}}function Zt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const c=u.map(G).filter(Z);r?r.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(O)}function pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(b.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,s,u,r,o=[-1]){const c=w;x(t);const l=t.$$={fragment:null,ctx:null,props:u,update:P,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&s(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&yt(t,_)),d}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=at(e.target);l.fragment&&l.fragment.l(_),_.forEach(ot)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),V()}x(c)}class ie{$destroy(){pt(this,1),this.$destroy=P}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Pt as $,Yt as A,pt as B,Y as C,Gt as D,P as E,xt as F,$t as G,kt as H,wt as I,st as J,It as K,Vt as L,Ut as M,At as N,W as O,Zt as P,Jt as Q,bt as R,ie as S,Wt as T,ut as U,Ct as V,Tt as W,jt as X,O as Y,Ot as Z,Rt as _,at as a,zt as a0,Nt as b,Mt as c,ot as d,lt as e,Bt as f,vt as g,dt as h,ne as i,Lt as j,Et as k,St as l,qt as m,Kt as n,ht as o,Qt as p,X as q,Ht as r,gt as s,I as t,Ft as u,Dt as v,te as w,ee as x,mt as y,Xt as z};
