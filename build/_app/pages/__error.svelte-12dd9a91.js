import{S as s,i as r,s as a,e,t,k as o,c as n,a as u,g as c,d as f,n as h,f as i,D as p,h as d,E as m}from"../chunks/vendor-55eff8e9.js";function g(s){let r,a,g,l,H,v,E,x,S=s[0].message+"";return{c(){r=e("h1"),a=t("Something Happened!"),g=o(),l=e("h3"),H=t(s[1]),v=o(),E=e("h3"),x=t(S)},l(e){r=n(e,"H1",{});var t=u(r);a=c(t,"Something Happened!"),t.forEach(f),g=h(e),l=n(e,"H3",{});var o=u(l);H=c(o,s[1]),o.forEach(f),v=h(e),E=n(e,"H3",{});var i=u(E);x=c(i,S),i.forEach(f)},m(s,e){i(s,r,e),p(r,a),i(s,g,e),i(s,l,e),p(l,H),i(s,v,e),i(s,E,e),p(E,x)},p(s,[r]){2&r&&d(H,s[1]),1&r&&S!==(S=s[0].message+"")&&d(x,S)},i:m,o:m,d(s){s&&f(r),s&&f(g),s&&f(l),s&&f(v),s&&f(E)}}}async function l({error:s,status:r}){return{props:{error:s,status:r}}}function H(s,r,a){let{error:e}=r,{status:t}=r;return s.$$set=s=>{"error"in s&&a(0,e=s.error),"status"in s&&a(1,t=s.status)},[e,t]}export default class extends s{constructor(s){super(),r(this,s,H,g,a,{error:0,status:1})}}export{l as load};
