(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),i=c(2),r=c(1),s=(c(10),c(3)),l=c.n(s),o=c(0),j=function(e){for(var t=e.totalItems,c=e.itemsPerPage,a=e.onPageChange,n=e.currentPage,i=[],r=1;r<=Math.ceil(t/c);r+=1)i.push(r);return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:l()("page-item",{"page-item disabled":1===n}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(n),onClick:function(){return a(n-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:l()("page-item",{active:e===n}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return a(e)},children:e})},e)})),Object(o.jsx)("li",{className:l()("page-item",{"page-item disabled":n===i.length}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#".concat(n),onClick:function(){return a(n+1)},children:"\xbb"})})]})},u=function(e){var t=e.items;return e.loading?Object(o.jsx)("h2",{children:"loading..."}):Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})};var d=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(r.useState)([""]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!1),s=Object(i.a)(n,2),l=s[0],h=s[1],m=Object(r.useState)(1),p=Object(i.a)(m,2),b=p[0],g=p[1],O=Object(r.useState)(3),f=Object(i.a)(O,2),x=f[0],v=f[1];Object(r.useEffect)((function(){h(!0),a(d),h(!1)}),[]);var N=b*x,P=N-x,k=c.slice(P,N);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsxs)("p",{className:"lead","data-cy":"info",children:["Page"," ",b," ","(items"," ",P+1," ","-"," ",k.map((function(e){return e.split(" ").pop()})).pop()," ","of"," ",c.length,")"]}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:x,onChange:function(e){v(+e.target.value),g(1)},children:[Object(o.jsx)("option",{value:3,children:"3"}),Object(o.jsx)("option",{value:5,children:"5"}),Object(o.jsx)("option",{value:10,children:"10"}),Object(o.jsx)("option",{value:20,children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{totalItems:c.length,itemsPerPage:x,onPageChange:function(e){return g(e)},currentPage:b}),Object(o.jsx)(u,{items:k,loading:l})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.78507c58.chunk.js.map