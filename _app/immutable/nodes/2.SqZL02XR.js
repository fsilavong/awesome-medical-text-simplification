import{a as I,t as k,c as Na}from"../chunks/disclose-version.D8LEH9QI.js";import"../chunks/legacy.cXszXvKw.js";import{h as O,s as $,C as Ta,D as Ca,a as La,b as Ma,F as ka,G as ha,H as Da,r as la,c as aa,f as K,I as Ra,J as q,d as xa,e as ga,p as Sa,K as oa,L as va,M as Ha,N as Oa,O as Ba,P as Ya,Q as Pa,R as Va,S as fa,T as ta,V as ba,W as Wa,X as ra,Y as Fa,Z as Ka,_ as Ua,$ as Xa,a0 as qa,v as za,x as H,y as Ga,a1 as da,l as m,a2 as _a,z as g,B as M,A as h,a3 as Ja,w as Qa}from"../chunks/runtime.CkWKy498.js";import{s as R}from"../chunks/render.DZOYKIHv.js";import{i as U}from"../chunks/if.DCWD62RW.js";import{i as Za}from"../chunks/lifecycle.WSDK-kbb.js";import{o as ja}from"../chunks/index-client.BXtBqXlp.js";function pa(t,a){return a}function $a(t,a,e,o){for(var v=[],d=a.length,_=0;_<d;_++)Ha(a[_].e,v,!0);var E=d>0&&v.length===0&&e!==null;if(E){var y=e.parentNode;Oa(y),y.append(e),o.clear(),B(t,a[0].prev,a[d-1].next)}Ba(v,()=>{for(var N=0;N<d;N++){var u=a[N];E||(o.delete(u.k),B(t,u.prev,u.next)),Ya(u.e,!E)}})}function ca(t,a,e,o,v,d=null){var _=t,E={flags:a,items:new Map,first:null},y=(a&ba)!==0;if(y){var N=t;_=O?$(Ta(N)):N.appendChild(Ca())}O&&La();var u=null,T=!1;Ma(()=>{var C=e(),s=ka(C)?C:C==null?[]:ha(C),r=s.length;if(T&&r===0)return;T=r===0;let n=!1;if(O){var D=_.data===Da;D!==(r===0)&&(_=la(),$(_),aa(!1),n=!0)}if(O){for(var l=null,x,b=0;b<r;b++){if(K.nodeType===8&&K.data===Ra){_=K,n=!0,aa(!1);break}var A=s[b],i=o(A,b);x=ya(K,E,l,null,A,i,b,v,a),E.items.set(i,x),l=x}r>0&&$(la())}if(!O){var f=Pa;ae(s,E,_,v,a,(f.f&q)!==0,o)}d!==null&&(r===0?u?xa(u):u=ga(()=>d(_)):u!==null&&Sa(u,()=>{u=null})),n&&aa(!0),e()}),O&&(_=K)}function ae(t,a,e,o,v,d,_,E){var X,p,c,w;var y=(v&Ua)!==0,N=(v&(ra|ta))!==0,u=t.length,T=a.items,C=a.first,s=C,r,n=null,D,l=[],x=[],b,A,i,f;if(y)for(f=0;f<u;f+=1)b=t[f],A=_(b,f),i=T.get(A),i!==void 0&&((X=i.a)==null||X.measure(),(D??(D=new Set)).add(i));for(f=0;f<u;f+=1){if(b=t[f],A=_(b,f),i=T.get(A),i===void 0){var z=s?s.e.nodes_start:e;n=ya(z,a,n,n===null?a.first:n.next,b,A,f,o,v),T.set(A,n),l=[],x=[],s=n.next;continue}if(N&&ee(i,b,f,v),i.e.f&q&&(xa(i.e),y&&((p=i.a)==null||p.unfix(),(D??(D=new Set)).delete(i))),i!==s){if(r!==void 0&&r.has(i)){if(l.length<x.length){var P=x[0],L;n=P.prev;var V=l[0],W=l[l.length-1];for(L=0;L<l.length;L+=1)ua(l[L],P,e);for(L=0;L<x.length;L+=1)r.delete(x[L]);B(a,V.prev,W.next),B(a,n,V),B(a,W,P),s=P,n=W,f-=1,l=[],x=[]}else r.delete(i),ua(i,s,e),B(a,i.prev,i.next),B(a,i,n===null?a.first:n.next),B(a,n,i),n=i;continue}for(l=[],x=[];s!==null&&s.k!==A;)(d||!(s.e.f&q))&&(r??(r=new Set)).add(s),x.push(s),s=s.next;if(s===null)continue;i=s}l.push(i),n=i,s=i.next}if(s!==null||r!==void 0){for(var Y=r===void 0?[]:ha(r);s!==null;)(d||!(s.e.f&q))&&Y.push(s),s=s.next;var F=Y.length;if(F>0){var G=v&ba&&u===0?e:null;if(y){for(f=0;f<F;f+=1)(c=Y[f].a)==null||c.measure();for(f=0;f<F;f+=1)(w=Y[f].a)==null||w.fix()}$a(a,Y,G,T)}}y&&Wa(()=>{var S;if(D!==void 0)for(i of D)(S=i.a)==null||S.apply()}),oa.first=a.first&&a.first.e,oa.last=n&&n.e}function ee(t,a,e,o){o&ra&&va(t.v,a),o&ta?va(t.i,e):t.i=e}function ya(t,a,e,o,v,d,_,E,y,N){var u=(y&ra)!==0,T=(y&Fa)===0,C=u?T?Va(v):fa(v):v,s=y&ta?fa(_):_,r={i:s,v:C,k:d,a:null,e:null,prev:e,next:o};try{return r.e=ga(()=>E(t,C,s),O),r.e.prev=e&&e.e,r.e.next=o&&o.e,e===null?a.first=r:(e.next=r,e.e.next=r.e),o!==null&&(o.prev=r,o.e.prev=r.e),r}finally{}}function ua(t,a,e){for(var o=t.next?t.next.e.nodes_start:e,v=a?a.e.nodes_start:e,d=t.e.nodes_start;d!==o;){var _=Ka(d);v.before(d),d=_}}function B(t,a,e){a===null?t.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function ea(t,a,e,o){var v=t.__attributes??(t.__attributes={});O&&(v[a]=t.getAttribute(a),t.nodeName==="LINK")||v[a]!==(v[a]=e)&&(e==null?t.removeAttribute(a):typeof e!="string"&&te(t).includes(a)?t[a]=e:t.setAttribute(a,e))}var ma=new Map;function te(t){var a=ma.get(t.nodeName);if(a)return a;ma.set(t.nodeName,a=[]);for(var e,o=t,v=Element.prototype;v!==o;){e=qa(o);for(var d in e)e[d].set&&a.push(d);o=Xa(o)}return a}var re=k('<p class="font-semibold text-xs"> </p>'),se=k('<div class="mb-4"><!> <p class="text-sm"> </p></div>'),ie=k("<p>No abstract available</p>"),ne=k('<p><strong>DOI:</strong> <a target="_blank"> </a></p>'),le=k('<p><strong>URL:</strong> <a target="_blank"> </a></p>'),oe=k("<p><strong>Anthology ID:</strong> </p>"),ve=k("<p><strong>Pub Year:</strong> </p>"),fe=k('<div><div class="my-4 flex flex-col space-y-4"><a class="font-semibold"> </a></div> <!> <div class="metadata mb-4 text-sm"><!> <!></div></div>'),de=k('<div class="divide-y divide-slate-400"></div>'),_e=k("<p>Loading...</p>"),pe=k('<div class="flex flex-col items-center pt-24 text-white bg-slate-800"><div class="flex flex-col md:w-1/2 w-full items-center space-y-4 pb-8"><p class="text-xl">Awesome Medicial Text Simplification</p> <p class="text-sm"> </p> <p class="text-sm"> </p> <p class="text-sm">Found by <a href="https://github.com/fsilavong/litocate">Litocate</a></p></div> <div class="flex h-full md:w-1/2 w-full overflow-y-auto rounded-lg md:p-4 p-8 scrollbar text-slate-300"><!></div></div>');function ye(t,a){za(a,!1);let e=_a([]),o=_a("");ja(async()=>{const n=await(await fetch("./filtered_result.json")).json();da(e,n.results),m(e).sort((D,l)=>{const x=parseInt(D.metadata.pub_year,10)||0;return(parseInt(l.metadata.pub_year,10)||0)-x}),da(o,n.last_updated)}),Za();var v=pe(),d=g(v),_=M(g(d),2),E=g(_);h(_);var y=M(_,2),N=g(y);h(y),Ja(2),h(d);var u=M(d,2),T=g(u);{var C=r=>{var n=de();ca(n,5,()=>m(e),pa,(D,l)=>{var x=fe(),b=g(x),A=g(b),i=g(A);h(A),h(b);var f=M(b,2);{var z=p=>{var c=Na(),w=Qa(c);ca(w,1,()=>Object.entries(m(l).abstract),pa,(S,sa)=>{let J=()=>m(sa)[0],wa=()=>m(sa)[1];var Q=se(),ia=g(Q);{var Aa=Z=>{var j=re(),Ia=g(j,!0);h(j),H(()=>R(Ia,J())),I(Z,j)};U(ia,Z=>{J().startsWith("title")||J().startsWith("abstract")||Z(Aa)})}var na=M(ia,2),Ea=g(na,!0);h(na),h(Q),H(()=>R(Ea,wa())),I(S,Q)}),I(p,c)},P=p=>{var c=ie();I(p,c)};U(f,p=>{m(l).abstract&&typeof m(l).abstract=="object"?p(z):p(P,!1)})}var L=M(f,2),V=g(L);{var W=p=>{var c=ne(),w=M(g(c),2),S=g(w,!0);h(w),h(c),H(()=>{ea(w,"href",m(l).metadata.url),R(S,m(l).metadata.doi)}),I(p,c)},Y=p=>{var c=le(),w=M(g(c),2),S=g(w,!0);h(w),h(c),H(()=>{ea(w,"href",m(l).metadata.url),R(S,m(l).metadata.url)}),I(p,c)};U(V,p=>{m(l).metadata.doi?p(W):p(Y,!1)})}var F=M(V,2);{var G=p=>{var c=oe(),w=M(g(c));h(c),H(()=>R(w,` ${m(l).metadata.anthology_id??""}`)),I(p,c)},X=p=>{var c=ve(),w=M(g(c));h(c),H(()=>R(w,` ${m(l).metadata.pub_year??""}`)),I(p,c)};U(F,p=>{m(l).metadata.anthology_id?p(G):p(X,!1)})}h(L),h(x),H(()=>{ea(A,"href",m(l).metadata.url),R(i,`${m(l).title??""} 🔗`)}),I(D,x)}),h(n),I(r,n)},s=r=>{var n=_e();I(r,n)};U(T,r=>{m(e).length>0?r(C):r(s,!1)})}h(u),h(v),H(()=>{R(E,`Last updated: ${m(o)??""}`),R(N,`Number of Papers: ${m(e).length??""}`)}),I(t,v),Ga()}export{ye as component};