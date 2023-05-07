import{o as Te,t as se}from"../chunks/index.b47f1510.js";import{S as Je,a as Ke,I as q,g as De,f as Ce,b as ge,c as ce,s as M,i as qe,d as Q,e as z,P as Fe,h as Ye}from"../chunks/singletons.4002a9b6.js";function We(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Xe(n){return n.split("%25").map(decodeURI).join("%25")}function Ze(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const Qe=["href","pathname","search","searchParams","toString","toJSON"];function et(n,o){const f=new URL(n);for(const c of Qe){let d=f[c];Object.defineProperty(f,c,{get(){return o(),d},enumerable:!0,configurable:!0})}return tt(f),f}function tt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const nt="/__data.json";function at(n){return n.replace(/\/$/,"")+nt}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Me(n,o){const f=JSON.stringify(o);try{sessionStorage[n]=f}catch{}}function rt(...n){let o=5381;for(const f of n)if(typeof f=="string"){let c=f.length;for(;c;)o=o*33^f.charCodeAt(--c)}else if(ArrayBuffer.isView(f)){const c=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let d=c.length;for(;d;)o=o*33^c[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(be(n)),le(n,o));const te=new Map;function ot(n,o){const f=be(n,o),c=document.querySelector(f);if(c!=null&&c.textContent){const{body:d,...h}=JSON.parse(c.textContent),L=c.getAttribute("data-ttl");return L&&te.set(f,{body:d,init:h,ttl:1e3*Number(L)}),Promise.resolve(new Response(d,h))}return le(n,o)}function it(n,o,f){if(te.size>0){const c=be(n,f),d=te.get(c);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(d.body,d.init);te.delete(c)}}return le(o,f)}function be(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),c+=`[data-hash="${rt(...d)}"]`}return c}const st=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ft(n).map(c=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const h=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(h)return o.push({name:h[1],matcher:h[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const L=c.split(/\[(.+?)\](?!\])/);return"/"+L.map((w,_)=>{if(_%2){if(w.startsWith("x+"))return ye(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ye(String.fromCharCode(...w.slice(2).split("-").map(I=>parseInt(I,16))));const p=st.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,A,v,O]=p;return o.push({name:v,matcher:O,optional:!!x,rest:!!A,chained:A?_===1&&L[0]==="":!1}),A?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return ye(w)}).join("")}).join("")}/?$`),params:o}}function lt(n){return!/^\([^)]+\)$/.test(n)}function ft(n){return n.slice(1).split("/").filter(lt)}function ut(n,o,f){const c={},d=n.slice(1);let h=0;for(let L=0;L<o.length;L+=1){const l=o[L],w=d[L-h];if(l.chained&&l.rest&&h){c[l.name]=d.slice(L-h,L+1).filter(_=>_).join("/"),h=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||f[l.matcher](w)){c[l.name]=w;const _=o[L+1],p=d[L+1];_&&!_.rest&&p&&(h=0);continue}if(l.optional&&l.chained){h++;continue}return}if(!h)return c}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function dt({nodes:n,server_loads:o,dictionary:f,matchers:c}){const d=new Set(o);return Object.entries(f).map(([l,[w,_,p]])=>{const{pattern:x,params:A}=ct(l),v={id:l,exec:O=>{const I=x.exec(O);if(I)return ut(I,A,c)},errors:[1,...p||[]].map(O=>n[O]),layouts:[0,..._||[]].map(L),leaf:h(w)};return v.errors.length=v.layouts.length=Math.max(v.errors.length,v.layouts.length),v});function h(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function L(l){return l===void 0?l:[d.has(l),n[l]]}}let ee=class{constructor(o,f){this.status=o,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},He=class{constructor(o,f){this.status=o,this.location=f}};async function ht(n){var o;for(const f in n)if(typeof((o=n[f])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,d])=>[c,await d])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const pt=-1,mt=-2,gt=-3,yt=-4,wt=-5,_t=-6;function bt(n,o){if(typeof n=="number")return d(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const f=n,c=Array(f.length);function d(h,L=!1){if(h===pt)return;if(h===gt)return NaN;if(h===yt)return 1/0;if(h===wt)return-1/0;if(h===_t)return-0;if(L)throw new Error("Invalid input");if(h in c)return c[h];const l=f[h];if(!l||typeof l!="object")c[h]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],_=o==null?void 0:o[w];if(_)return c[h]=_(d(l[1]));switch(w){case"Date":c[h]=new Date(l[1]);break;case"Set":const p=new Set;c[h]=p;for(let v=1;v<l.length;v+=1)p.add(d(l[v]));break;case"Map":const x=new Map;c[h]=x;for(let v=1;v<l.length;v+=2)x.set(d(l[v]),d(l[v+1]));break;case"RegExp":c[h]=new RegExp(l[1],l[2]);break;case"Object":c[h]=Object(l[1]);break;case"BigInt":c[h]=BigInt(l[1]);break;case"null":const A=Object.create(null);c[h]=A;for(let v=1;v<l.length;v+=2)A[l[v]]=d(l[v+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[h]=w;for(let _=0;_<l.length;_+=1){const p=l[_];p!==mt&&(w[_]=d(p))}}else{const w={};c[h]=w;for(const _ in l){const p=l[_];w[_]=d(p)}}return c[h]}return d(0)}function vt(n){return n.filter(o=>o!=null)}const K=ze(Je)??{},Z=ze(Ke)??{};function we(n){K[n]=Q()}function Et(n,o){var Ne;const f=dt(n),c=n.nodes[0],d=n.nodes[1];c(),d();const h=document.documentElement,L=[],l=[];let w=null;const _={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},x=!1,A=!1,v=!0,O=!1,I=!1,B=!1,H=!1,F,N=(Ne=history.state)==null?void 0:Ne[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const fe=K[N];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,ve,ne;async function Ee(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);w=null,await Le(e,t,[])}function ke(t){l.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=l.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Se(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,i;(i=(s=l[a])==null?void 0:s.snapshot)==null||i.restore(r)})}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},m,u){return typeof t=="string"&&(t=new URL(t,De(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:m,details:{state:s,replaceState:r},nav_token:u,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Re(t){return w={id:t.id,promise:Oe(t).then(e=>(e.type==="loaded"&&e.state.error&&(w=null),e))},w.promise}async function ae(...t){const r=f.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Le(t,e,r,a,s,i={},m){var y,g,R;ve=i;let u=t&&await Oe(t);if(u||(u=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)),e=(t==null?void 0:t.url)||e,ve!==i)return!1;if(u.type==="redirect")if(r.length>10||r.includes(e.pathname))u=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(u.location,e).href,{},[...r,e.pathname],i),!1;else((y=u.props.page)==null?void 0:y.status)>=400&&await M.updated.check()&&await W(e);if(L.length=0,H=!1,O=!0,a&&(we(a),ke(a)),(g=u.props.page)!=null&&g.url&&u.props.page.url.pathname!==e.pathname&&(e.pathname=(R=u.props.page)==null?void 0:R.url.pathname),s&&s.details){const{details:k}=s,P=k.replaceState?0:1;if(k.state[q]=N+=P,history[k.replaceState?"replaceState":"pushState"](k.state,"",e),!k.replaceState){let S=N+1;for(;Z[S]||K[S];)delete Z[S],delete K[S],S+=1}}if(w=null,A?(p=u.state,u.props.page&&(u.props.page.url=e),F.$set(u.props)):Ie(u),s){const{scroll:k,keepfocus:P}=s,{activeElement:S}=document;await se();const b=document.activeElement!==S&&document.activeElement!==document.body;if(!P&&!b&&await _e(),v){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):U?U.scrollIntoView():scrollTo(0,0)}}else await se();v=!0,u.props.page&&(V=u.props.page),m&&m(),O=!1}function Ie(t){var a;p=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,F=new n.root({target:o,props:{...t.props,stores:M,components:l},hydrate:!0}),Se(N);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};_.after_navigate.forEach(s=>s(r)),A=!0}async function G({url:t,params:e,branch:r,status:a,error:s,route:i,form:m}){let u="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(u=S.slash);t.pathname=We(t.pathname,u),t.search=t.search;const y={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:i},props:{constructors:vt(r).map(S=>S.node.component)}};m!==void 0&&(y.props.form=m);let g={},R=!V,k=0;for(let S=0;S<Math.max(r.length,p.branch.length);S+=1){const b=r[S],U=p.branch[S];(b==null?void 0:b.data)!==(U==null?void 0:U.data)&&(R=!0),b&&(g={...g,...b.data},R&&(y.props[`data_${k}`]=g),k+=1)}return(!p.url||t.href!==p.url.href||p.error!==s||m!==void 0&&m!==V.form||R)&&(y.props.page={error:s,params:e,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(t),form:m??null,data:R?g:V.data}),y}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:i}){var g,R,k;let m=null;const u={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await t();if((g=y.universal)!=null&&g.load){let P=function(...b){for(const U of b){const{href:D}=new URL(U,r);u.dependencies.add(D)}};const S={route:{get id(){return u.route=!0,s.id}},params:new Proxy(a,{get:(b,U)=>(u.params.add(U),b[U])}),data:(i==null?void 0:i.data)??null,url:et(r,()=>{u.url=!0}),async fetch(b,U){let D;b instanceof Request?(D=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):D=b;const C=new URL(D,r);return P(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),A?it(D,C.href,U):ot(D,U)},setHeaders:()=>{},depends:P,parent(){return u.parent=!0,e()}};m=await y.universal.load.call(null,S)??null,m=m?await ht(m):null}return{node:y,loader:t,server:i,universal:(R=y.universal)!=null&&R.load?{type:"data",data:m,uses:u}:null,data:m??(i==null?void 0:i.data)??null,slash:((k=y.universal)==null?void 0:k.trailingSlash)??(i==null?void 0:i.slash)}}function Ae(t,e,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(L.some(m=>m(new URL(i))))return!0;return!1}function he(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Oe({id:t,invalidating:e,url:r,params:a,route:s}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:i,layouts:m,leaf:u}=s,y=[...m,u];i.forEach(E=>E==null?void 0:E().catch(()=>{})),y.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const R=p.url?t!==p.url.pathname+p.url.search:!1,k=p.route?s.id!==p.route.id:!1;let P=!1;const S=y.map((E,T)=>{var J;const j=p.branch[T],$=!!(E!=null&&E[0])&&((j==null?void 0:j.loader)!==E[1]||Ae(P,k,R,(J=j.server)==null?void 0:J.uses,a));return $&&(P=!0),$});if(S.some(Boolean)){try{g=await Ve(r,S)}catch(E){return re({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const b=g==null?void 0:g.nodes;let U=!1;const D=y.map(async(E,T)=>{var pe;if(!E)return;const j=p.branch[T],$=b==null?void 0:b[T];if((!$||$.type==="skip")&&E[1]===(j==null?void 0:j.loader)&&!Ae(U,k,R,(pe=j.universal)==null?void 0:pe.uses,a))return j;if(U=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var xe;const $e={};for(let me=0;me<T;me+=1)Object.assign($e,(xe=await D[me])==null?void 0:xe.data);return $e},server_data_node:he($===void 0&&E[0]?{type:"skip"}:$??null,E[0]?j==null?void 0:j.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<y.length;E+=1)if(y[E])try{C.push(await D[E])}catch(T){if(T instanceof He)return{type:"redirect",location:T.location};let j=500,$;if(b!=null&&b.includes(T))j=T.status??j,$=T.error;else if(T instanceof ee)j=T.status,$=T.body;else{if(await M.updated.check())return await W(r);$=await X(T,{params:a,url:r,route:{id:s.id}})}const J=await Pe(E,C,i);return J?await G({url:r,params:a,branch:C.slice(0,J.idx).concat(J.node),status:j,error:$,route:s}):await je(r,{id:s.id},$,j)}else C.push(void 0);return await G({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function Pe(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let i=null;if(n.server_loads[0]===0)try{const g=await Ve(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||x)&&await W(r)}const u=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:he(i)}),y={node:await d(),loader:d,universal:null,server:null,data:null};return await G({url:r,params:s,branch:[u,y],status:t,error:e,route:null})}function Y(t,e){if(qe(t,z))return;const r=oe(t);for(const a of f){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ze(s),url:t}}}function oe(t){return Xe(t.pathname.slice(z.length)||"/")}function Ue({url:t,type:e,intent:r,delta:a}){var u,y;let s=!1;const i={from:{params:p.params,route:{id:((u=p.route)==null?void 0:u.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(i.delta=a);const m={...i,cancel:()=>{s=!0}};return I||_.before_navigate.forEach(g=>g(m)),s?null:i}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:i,delta:m,nav_token:u,accepted:y,blocked:g}){const R=Y(t,!1),k=Ue({url:t,type:i,delta:m,intent:R});if(!k){g();return}const P=N;y(),I=!0,A&&M.navigating.set(k),await Le(R,t,a,P,{scroll:e,keepfocus:r,details:s},u,()=>{I=!1,_.after_navigate.forEach(S=>S(k)),M.navigating.set(null)})}async function je(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!x?await re({status:a,error:r,url:t,route:e}):await W(t)}function W(t){return location.href=t.href,new Promise(()=>{})}function Ge(){let t;h.addEventListener("mousemove",i=>{const m=i.target;clearTimeout(t),t=setTimeout(()=>{a(m,2)},20)});function e(i){a(i.composedPath()[0],1)}h.addEventListener("mousedown",e),h.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(i=>{for(const m of i)m.isIntersecting&&(ae(oe(new URL(m.target.href))),r.unobserve(m.target))},{threshold:0});function a(i,m){const u=Ce(i,h);if(!u)return;const{url:y,external:g}=ge(u,z);if(g)return;const R=ce(u);if(!R.reload)if(m<=R.preload_data){const k=Y(y,!1);k&&Re(k)}else m<=R.preload_code&&ae(oe(y))}function s(){r.disconnect();for(const i of h.querySelectorAll("a")){const{url:m,external:u}=ge(i,z);if(u)continue;const y=ce(i);y.reload||(y.preload_code===Fe.viewport&&r.observe(i),y.preload_code===Fe.eager&&ae(oe(m)))}}_.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Te(()=>(_.after_navigate.push(t),()=>{const e=_.after_navigate.indexOf(t);_.after_navigate.splice(e,1)}))},before_navigate:t=>{Te(()=>(_.before_navigate.push(t),()=>{const e=_.before_navigate.indexOf(t);_.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(O||!A)&&(v=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")L.push(t);else{const{href:e}=new URL(t,location.href);L.push(r=>r.href===e)}return Ee()},invalidateAll:()=>(H=!0,Ee()),preload_data:async t=>{const e=new URL(t,De(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Re(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Pe(p.branch.length,r,a.errors);if(s){const i=await G({url:e,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});p=i.state,F.$set(i.props),se().then(_e)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&_e())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(!I){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};_.before_navigate.forEach(i=>i(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(we(N),Me(Je,K),ke(N),Me(Ke,Z))}),(t=navigator.connection)!=null&&t.saveData||Ge(),h.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Ce(e.composedPath()[0],h);if(!r)return;const{url:a,external:s,target:i}=ge(r,z);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const m=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||m.reload){Ue({url:a,type:"link"})||e.preventDefault(),I=!0;return}const[y,g]=a.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){B=!0,we(N),p.url=a,M.page.set({...V,url:a}),M.page.notify();return}ie({url:a,scroll:m.noscroll?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),h.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(qe(i,z))return;const m=e.target,{noscroll:u,reload:y}=ce(m);if(y)return;e.preventDefault(),e.stopPropagation();const g=new FormData(m),R=a==null?void 0:a.getAttribute("name");R&&g.append(R,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(g).toString(),ie({url:i,scroll:u?Q():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===N)return;const a=K[e.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){K[N]=Q(),N=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-N;let i=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=e.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Se(N)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:i,form:m})=>{x=!0;const u=new URL(location.href);({params:a={},route:s={id:null}}=Y(u,!1)||{});let y;try{const g=r.map(async(R,k)=>{const P=i[k];return P!=null&&P.uses&&(P.uses=Be(P.uses)),de({loader:n.nodes[R],url:u,params:a,route:s,parent:async()=>{const S={};for(let b=0;b<k;b+=1)Object.assign(S,(await g[b]).data);return S},server_data_node:he(P)})});y=await G({url:u,params:a,branch:await Promise.all(g),status:t,error:e,form:m,route:f.find(({id:R})=>R===s.id)??null})}catch(g){if(g instanceof He){await W(new URL(g.location,location.href));return}y=await re({status:g instanceof ee?g.status:500,error:await X(g,{url:u,params:a,route:s}),url:u,route:s})}Ie(y)}}}async function Ve(n,o){const f=new URL(n);f.pathname=at(n.pathname),f.searchParams.append("x-sveltekit-invalidated",o.map(d=>d?"1":"").join("_"));const c=await le(f.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async d=>{var p;const h=new Map,L=c.body.getReader(),l=new TextDecoder;function w(x){return bt(x,{Promise:A=>new Promise((v,O)=>{h.set(A,{fulfil:v,reject:O})})})}let _="";for(;;){const{done:x,value:A}=await L.read();if(x&&!_)break;for(_+=!A&&_?`
`:l.decode(A);;){const v=_.indexOf(`
`);if(v===-1)break;const O=JSON.parse(_.slice(0,v));if(_=_.slice(v+1),O.type==="redirect")return d(O);if(O.type==="data")(p=O.nodes)==null||p.forEach(I=>{(I==null?void 0:I.type)==="data"&&(I.uses=Be(I.uses),I.data=w(I.data))}),d(O);else if(O.type==="chunk"){const{id:I,data:B,error:H}=O,F=h.get(I);h.delete(I),H?F.reject(w(H)):F.fulfil(w(B))}}}})}function Be(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function _e(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,f=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),f!==null?o.setAttribute("tabindex",f):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var d;c((d=getSelection())==null?void 0:d.removeAllRanges())})})}}async function It(n,o,f){const c=Et(n,o);Ye({client:c}),f?await c._hydrate(f):c.goto(location.href,{replaceState:!0}),c._start_router()}export{It as start};
