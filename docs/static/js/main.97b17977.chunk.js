(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),i=n.n(c),r=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})},j=n(10),l=n(6),d=n.n(l),m=n(8),b=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=lqIiVjqEVduKby433b4DZR9QnlJse2Cm"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,image:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.image,a=t.split(" ").slice(0,2).join(" ");return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:a})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({images:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){i({images:e,loading:!1})}))}),[e]),c}(t),c=n.images,i=n.loading;return console.log(c),console.log(i),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn animate__delay-1s",children:t}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(p,Object(j.a)({},e),e.id)}))})]})},g=function(){var e=Object(a.useState)(["One Punch"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(f,{category:e},e)}))})]})};n(17);i.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.97b17977.chunk.js.map