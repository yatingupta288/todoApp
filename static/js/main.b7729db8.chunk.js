(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{77:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(22),j=n.n(r),i=n(13),a=n(8),o=n(51),s=n.n(o),u=n(3);var l=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:[Object(u.jsx)(s.a,{}),"Keeper App"]})})};var b=function(){return Object(u.jsx)("footer",{children:"Made With \ud83d\udc96 by Yatin "})},O=n(54),d=n.n(O);var h=function(t){return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsx)("h1",{children:t.title}),Object(u.jsx)("p",{children:t.content}),Object(u.jsx)("button",{onClick:function(){t.delete(t.id)},children:Object(u.jsx)(d.a,{})})]})},x=n(6),f=n(45),v=n(55),p=n.n(v),m=n(101),C=n(102);var g=function(t){var e=Object(c.useState)({title:"",content:""}),n=Object(a.a)(e,2),r=n[0],j=n[1],i=Object(c.useState)(!1),o=Object(a.a)(i,2),s=o[0],l=o[1];function b(t){t.preventDefault();var e=t.target,n=e.name,c=e.value;j((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(x.a)({},n,c))})),l((function(t){return!0}))}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"createOne",children:[!0===s?Object(u.jsx)("input",{name:"title",placeholder:"title",value:r.title,onChange:b}):null,Object(u.jsx)("textarea",{placeholder:"Enter the Content...",name:"content",value:r.content,onChange:b,rows:!0===s?"3":"1"}),Object(u.jsx)(C.a,{in:!0===s,children:Object(u.jsx)(m.a,{size:"small",onClick:function(){t.onAdd(r),j({title:"",content:""})},children:Object(u.jsx)(p.a,{})})})]})})};var k=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function j(t){r((function(e){return e.filter((function(e,n){return t!==n}))}))}return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)(g,{onAdd:function(t){r((function(e){return[].concat(Object(i.a)(e),[t])}))}}),n.map((function(t,e){return Object(u.jsx)(h,{id:e,title:t.title,content:t.content,delete:j},e)})),Object(u.jsx)(b,{})]})};j.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.b7729db8.chunk.js.map