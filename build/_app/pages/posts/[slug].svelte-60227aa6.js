import{_ as t}from"../../chunks/preload-helper-9f12a5fd.js";import{S as r,i as s,s as e,j as o,m as n,o as a,E as u,v as c,r as f,w as i}from"../../chunks/vendor-55eff8e9.js";function m(t){let r,s;return r=new t[0]({}),{c(){o(r.$$.fragment)},l(t){n(r.$$.fragment,t)},m(t,e){a(r,t,e),s=!0},p:u,i(t){s||(c(r.$$.fragment,t),s=!0)},o(t){f(r.$$.fragment,t),s=!1},d(t){i(r,t)}}}async function d({page:r}){try{return{props:{Post:(await function(r){switch(r){case"../../posts/goodbye.md":return t((()=>import("../../chunks/goodbye-0d870fae.js").then((function(t){return t._}))),["/_app/chunks/goodbye-0d870fae.js","/_app/chunks/vendor-55eff8e9.js"]);case"../../posts/hello.md":return t((()=>import("../../chunks/hello-b178bdd2.js").then((function(t){return t._}))),["/_app/chunks/hello-b178bdd2.js","/_app/chunks/vendor-55eff8e9.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+r))}}(`../../posts/${r.params.slug}.md`)).default}}}catch(s){return console.log("err",s),{status:404,error:"Post not found"}}}function p(t,r,s){let{Post:e}=r;return t.$$set=t=>{"Post"in t&&s(0,e=t.Post)},[e]}export default class extends r{constructor(t){super(),s(this,t,p,m,e,{Post:0})}}export{d as load};
