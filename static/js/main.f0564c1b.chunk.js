(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(11),r=c.n(s),i=(c(18),c(19),c(20),c(5)),l=c(2),j=(c(21),c(1));function o(e){var t=e.data,c=e.isPending,n=e.error;return Object(j.jsxs)(j.Fragment,{children:[c&&Object(j.jsx)("h1",{children:"Loading..."}),n&&Object(j.jsx)("h1",{children:"Error"}),Object(j.jsxs)("div",{className:"recipe__single",children:[Object(j.jsx)("h1",{className:"recipe__title",children:t.title}),Object(j.jsxs)("h4",{className:"recipe__time",children:[t.cookingTime," to cook"]}),Object(j.jsxs)("p",{className:"recipe__description",children:[t.method.substring(0,100),"..."]}),Object(j.jsx)(i.b,{to:"/recipe/".concat(t.id),children:"More Details"})]})]})}c(23);var b=c(9),u=c.n(b),d=c(10),h=c(12),O=c(3),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),a=Object(O.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(O.a)(i,2),j=l[0],o=l[1],b=Object(n.useState)(null),p=Object(O.a)(b,2),x=p[0],m=p[1],_=Object(n.useState)(""),g=Object(O.a)(_,2),f=g[0],v=g[1],N=function(e){v({method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),console.log("updated")};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(h.a)(u.a.mark((function t(n){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.prev=1,t.next=4,fetch(e,Object(d.a)(Object(d.a)({},n),{},{signal:c.signal}));case 4:if((a=t.sent).ok){t.next=7;break}throw new Error(a.statusText);case 7:return t.next=9,a.json();case 9:s=t.sent,o(!1),r(s),m(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(o(!1),m("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&f&&n(f),function(){c.abort()}}),[e,f,t]),{data:s,isPending:j,error:x,postData:N}};function x(){var e=p("http://localhost:3000/recipes"),t=e.data,c=e.isPending,n=e.error;return Object(j.jsx)("div",{className:"recipe__grid",children:t&&t.map((function(e){return Object(j.jsx)(o,{data:e,isPending:c,error:n},e.id)}))})}function m(){var e=Object(l.g)().id,t=p("http://localhost:3000/recipes/"+e),c=t.data,n=t.isPending,a=t.error;return Object(j.jsxs)("div",{children:[n&&Object(j.jsx)("h1",{children:"Loading..."}),a&&Object(j.jsx)("h1",{children:"Error"}),c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"recipe__title",children:c.title}),Object(j.jsxs)("h4",{className:"recipe__time",children:[c.cookingTime," to cook"]}),Object(j.jsx)("p",{className:"recipe__description",children:c.method}),Object(j.jsx)("h3",{children:c.ingredients.map((function(e){return e}))})]})]})}var _=c(13);c(25);function g(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(O.a)(s,2),i=r[0],o=r[1],b=Object(n.useState)(""),u=Object(O.a)(b,2),d=u[0],h=u[1],x=Object(n.useState)(""),m=Object(O.a)(x,2),g=m[0],f=m[1],v=Object(n.useState)([]),N=Object(O.a)(v,2),k=N[0],S=N[1],y=(Object(l.f)(),p("http://localhost:3000/recipes","POST").postData);return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(i,c,d),y({title:c,method:d,cookingTime:i+"minutes",ingredients:k}),a(""),o(""),h("")},children:[Object(j.jsxs)("label",{className:"create__label",children:[Object(j.jsx)("span",{className:"create__title",children:"Title"}),Object(j.jsx)("input",{type:"text",className:"create__input",value:c,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(j.jsxs)("label",{className:"create__label",children:[Object(j.jsx)("span",{className:"create__title",children:"cooking Time"}),Object(j.jsx)("input",{type:"number",className:"create__input",value:i,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(j.jsxs)("label",{className:"create__label",children:[Object(j.jsx)("span",{className:"create__title",children:"Ingredients"}),Object(j.jsxs)("div",{className:"create__ingredients",children:[Object(j.jsx)("input",{type:"text",className:"create__input",value:g,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),k.includes(g)||S((function(e){return[].concat(Object(_.a)(e),[g])})),f("")},children:" add "})]}),Object(j.jsxs)("span",{style:{marginTop:"10px",color:"gray",display:"block"},children:["ingredients : ",k.map((function(e,t,c){return e+"".concat(c[c.length-1]==e?" . ":" , ")})),"  "]})]}),Object(j.jsxs)("label",{className:"create__label",children:[Object(j.jsx)("span",{className:"create__title",children:"Method"}),Object(j.jsx)("textarea",{className:"create__input",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-submit",children:"submit"})]})})}c(26);function f(){return Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"nav__content",children:[Object(j.jsx)(i.b,{to:"/",className:"nav__logo",children:"Cooking-ninja"}),Object(j.jsx)(i.b,{to:"/create",className:"nav__link btn btn-success",children:"create"})]})})})}var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",element:Object(j.jsx)(x,{})}),Object(j.jsx)(l.a,{path:"/recipe/:id",element:Object(j.jsx)(m,{})}),Object(j.jsx)(l.a,{path:"/create",element:Object(j.jsx)(g,{})})]})})]})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f0564c1b.chunk.js.map