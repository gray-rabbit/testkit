var at=Object.defineProperty,ot=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var x=(i,t,e)=>t in i?at(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,L=(i,t)=>{for(var e in t||(t={}))J.call(t,e)&&x(i,e,t[e]);if(C)for(var e of C(t))W.call(t,e)&&x(i,e,t[e]);return i},G=(i,t)=>ot(i,lt(t));var X=(i,t)=>{var e={};for(var s in i)J.call(i,s)&&t.indexOf(s)<0&&(e[s]=i[s]);if(i!=null&&C)for(var s of C(i))t.indexOf(s)<0&&W.call(i,s)&&(e[s]=i[s]);return e};import{S as ct,i as ut,s as ft,e as ht,c as dt,a as _t,d as k,b as D,f as S,t as pt,g as gt,h as mt,j as A,k as wt,l as y,m as H,n as bt,o as O,p as M,q as B,r as T,u as E,v as U,w as I,x as w,y as vt,z as yt,A as Et,B as K,C as Y}from"./chunks/vendor-6652a472.js";import{i as $t}from"./chunks/singletons-12a22614.js";function F(i){let t,e,s;const r=[i[2]||{}];var a=i[0][1];function n(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(n(i))),{c(){t&&A(t.$$.fragment),e=y()},l(o){t&&H(t.$$.fragment,o),e=y()},m(o,l){t&&O(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&4?M(r,[B(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){T();const u=t;E(u.$$.fragment,1,0,()=>{U(u,1)}),I()}a?(t=new a(n(o)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&U(t,o)}}}function Q(i){let t,e,s;const r=[i[3]||{}];var a=i[0][2];function n(o){let l={};for(let c=0;c<r.length;c+=1)l=K(l,r[c]);return{props:l}}return a&&(t=new a(n())),{c(){t&&A(t.$$.fragment),e=y()},l(o){t&&H(t.$$.fragment,o),e=y()},m(o,l){t&&O(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&8?M(r,[B(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){T();const u=t;E(u.$$.fragment,1,0,()=>{U(u,1)}),I()}a?(t=new a(n()),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&U(t,o)}}}function kt(i){let t,e,s=i[0][2]&&Q(i);return{c(){s&&s.c(),t=y()},l(r){s&&s.l(r),t=y()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&w(s,1)):(s=Q(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(T(),E(s,1,1,()=>{s=null}),I())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function Rt(i){let t,e,s=i[0][1]&&F(i);return{c(){s&&s.c(),t=y()},l(r){s&&s.l(r),t=y()},m(r,a){s&&s.m(r,a),S(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&w(s,1)):(s=F(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(T(),E(s,1,1,()=>{s=null}),I())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function Z(i){let t,e=i[5]&&tt(i);return{c(){t=ht("div"),e&&e.c(),this.h()},l(s){t=dt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=_t(t);e&&e.l(r),r.forEach(k),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),D(t,"class","svelte-1j55zn5")},m(s,r){S(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&k(t),e&&e.d()}}}function tt(i){let t;return{c(){t=pt(i[6])},l(e){t=gt(e,i[6])},m(e,s){S(e,t,s)},p(e,s){s&64&&mt(t,e[6])},d(e){e&&k(t)}}}function Lt(i){let t,e,s,r;const a=[i[1]||{}];var n=i[0][0];function o(c){let u={$$slots:{default:[Rt]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=K(u,a[h]);return{props:u}}n&&(t=new n(o(i)));let l=i[4]&&Z(i);return{c(){t&&A(t.$$.fragment),e=wt(),l&&l.c(),s=y()},l(c){t&&H(t.$$.fragment,c),e=bt(c),l&&l.l(c),s=y()},m(c,u){t&&O(t,c,u),S(c,e,u),l&&l.m(c,u),S(c,s,u),r=!0},p(c,[u]){const h=u&2?M(a,[B(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(t){T();const f=t;E(f.$$.fragment,1,0,()=>{U(f,1)}),I()}n?(t=new n(o(c)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else n&&t.$set(h);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&w(t.$$.fragment,c),r=!0)},o(c){t&&E(t.$$.fragment,c),r=!1},d(c){t&&U(t,c),c&&k(e),l&&l.d(c),c&&k(s)}}}function St(i,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;vt("__svelte__",s),yt(s.page.notify);let c=!1,u=!1,h=null;return Et(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),i.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,r=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,n=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},i.$$.update=()=>{i.$$.dirty&384&&s.page.set(r)},[a,n,o,l,c,u,h,s,r]}class jt extends ct{constructor(t){super();ut(this,t,St,Lt,ft,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const qt="modulepreload",et={},At="/build/_app/",$=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${At}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":qt,r||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),r)return new Promise((o,l)=>{n.addEventListener("load",o),n.addEventListener("error",l)})})).then(()=>t())},d=[()=>$(()=>import("./pages/__layout.svelte-9e760bb5.js"),["pages/__layout.svelte-9e760bb5.js","assets/pages/__layout.svelte-a8002965.css","chunks/vendor-6652a472.js","pages/components/navbar.svelte-77428121.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"]),()=>$(()=>import("./error.svelte-aa706f2a.js"),["error.svelte-aa706f2a.js","chunks/vendor-6652a472.js"]),()=>$(()=>import("./pages/index.svelte-595ba04f.js"),["pages/index.svelte-595ba04f.js","chunks/vendor-6652a472.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","pages/components/container.svelte-aa5cad09.js"]),()=>$(()=>import("./pages/components/container.svelte-aa5cad09.js"),["pages/components/container.svelte-aa5cad09.js","chunks/vendor-6652a472.js"]),()=>$(()=>import("./pages/components/navbar.svelte-77428121.js"),["pages/components/navbar.svelte-77428121.js","chunks/vendor-6652a472.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"]),()=>$(()=>import("./pages/project/index.svelte-a86b392d.js"),["pages/project/index.svelte-a86b392d.js","chunks/vendor-6652a472.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"]),()=>$(()=>import("./pages/project/stage1.svelte-425e1c90.js"),["pages/project/stage1.svelte-425e1c90.js","chunks/vendor-6652a472.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/projectStore-794dd0dc.js"]),()=>$(()=>import("./pages/project/stage2.svelte-f194bec5.js"),["pages/project/stage2.svelte-f194bec5.js","chunks/vendor-6652a472.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/projectStore-794dd0dc.js"]),()=>$(()=>import("./pages/project/stage3.svelte-1492babe.js"),["pages/project/stage3.svelte-1492babe.js","chunks/vendor-6652a472.js","chunks/projectStore-794dd0dc.js"]),()=>$(()=>import("./pages/about/index.svelte-2092a12d.js"),["pages/about/index.svelte-2092a12d.js","chunks/vendor-6652a472.js"])],Ot=[[/^\/$/,[d[0],d[2]],[d[1]]],[/^\/components\/container\/?$/,[d[0],d[3]],[d[1]]],[/^\/components\/navbar\/?$/,[d[0],d[4]],[d[1]]],[/^\/project\/?$/,[d[0],d[5]],[d[1]]],,[/^\/project\/stage1\/?$/,[d[0],d[6]],[d[1]]],[/^\/project\/stage2\/?$/,[d[0],d[7]],[d[1]]],[/^\/project\/stage3\/?$/,[d[0],d[8]],[d[1]]],,,[/^\/about\/?$/,[d[0],d[9]],[d[1]]]],Ut=[d[0](),d[1]()];function Pt(i){let t=i.baseURI;if(!t){const e=i.getElementsByTagName("base");t=e.length?e[0].href:i.URL}return t}let st="";function Tt(i){st=i.base,i.assets}function z(){return{x:pageXOffset,y:pageYOffset}}function rt(i){return i.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()==="A")}function nt(i){return i instanceof SVGAElement?new URL(i.href.baseVal,document.baseURI):new URL(i.href)}class It{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=G(L({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const n=rt(a);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(nt(n))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{var n;(n=a.target)==null||n.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("sveltekit:trigger_prefetch",e),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=rt(a);if(!n||!n.href)return;const o=nt(n),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||c&&c.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const u=n.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),v=h>=0?l.substring(0,h):l,g=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),v===g&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?z():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},n){const o=new URL(t,Pt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?z():null,r,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}await this.renderer.handle_navigation(n,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function it(i){return i instanceof Error||i&&i.name&&i.message?i:new Error(JSON.stringify(i))}function Vt(i){let t=5381,e=i.length;if(typeof i=="string")for(;e;)t=t*33^i.charCodeAt(--e);else for(;e;)t=t*33^i[--e];return(t>>>0).toString(36)}function Ct(i){const t=i.status&&i.status>=400&&i.status<=599&&!i.redirect;if(i.error||t){const e=i.status;if(!i.error&&t)return{status:e||500,error:new Error};const s=typeof i.error=="string"?new Error(i.error):i.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(i.redirect){if(!i.status||Math.floor(i.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof i.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(i.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return i}function Dt(i){const t=Y(i);let e=!0;function s(){e=!0,t.update(n=>n)}function r(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:r,subscribe:a}}function Nt(i,t){const e=typeof i=="string"?i:i.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Vt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:n}=a,o=X(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(i,t)}class Ht{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Dt({}),navigating:Y(null),session:Y(r)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let n={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:n,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(n=L(L({},n),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:it(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){var l;const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),r){const{hash:c,scroll:u,keepfocus:h}=r;h||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const f=Math.round(pageYOffset),v=document.documentElement.scrollHeight-innerHeight;await 0;const g=Math.round(pageYOffset),R=document.documentElement.scrollHeight-innerHeight;if(g===Math.min(f,R)||v-f==R-g){const j=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):j?j.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:L({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:r,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return n.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return n.uses.path=!0,r.path},get query(){return n.uses.query=!0,r.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,L({},a)},fetch(f,v){const g=typeof f=="string"?f:f.url,{href:R}=new URL(g,new URL(r.path,document.baseURI));return n.uses.dependencies.push(R),c?fetch(f,v):Nt(f,v)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;n.loaded=Ct(h),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const n=`${s}?${r}`;if(!a){const _=this.cache.get(n);if(_)return _}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(_=>this.current.page.params[_]!==h[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},v={host:this.host,path:e,query:r,params:h};let g=[],R={},N=!1,j=200,P;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const b=await l[_](),m=this.current.branch[_];if(!m||b!==m.module||f.path&&m.uses.path||f.params.some(q=>m.uses.params.has(q))||f.query&&m.uses.query||f.session&&m.uses.session||m.uses.dependencies.some(q=>this.invalid.has(q))||N&&m.uses.stuff){p=await this._load_node({module:b,page:v,stuff:R});const q=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(j=p.loaded.status,P=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(N=!0)}else if(q&&b.load)return}else p=m}catch(b){j=500,P=it(b)}if(P){for(;_--;)if(c[_]){let b,m,V=_;for(;!(m=g[V]);)V-=1;try{if(b=await this._load_node({status:j,error:P,module:await c[_](),page:v,stuff:m.stuff}),b&&b.loaded&&b.loaded.error)continue;g=g.slice(0,V+1).concat(b);break t}catch{continue}}return await this._load_error({status:j,error:P,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(R=L(L({},R),p.loaded.stuff)),g.push(p)}return await this._get_navigation_result_from_branch({page:v,branch:g})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Yt({paths:i,target:t,session:e,host:s,route:r,spa:a,trailing_slash:n,hydrate:o}){const l=new Ht({Root:jt,fallback:Ut,target:t,session:e,host:s}),c=r?new It({base:i.base,routes:Ot,trailing_slash:n,renderer:l}):null;$t(c),Tt(i),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Yt as start};