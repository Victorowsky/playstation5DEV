(this["webpackJsonpps5-checker-react"]=this["webpackJsonpps5-checker-react"]||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),c=n.n(i),s=n(10),o=n.n(s),r=n(42),l=(n(80),n(22)),d=n(11),j=(n(81),n(58)),b=n.n(j),u=function(e){var t=e.isPlaying;return Object(a.jsx)(b.a,{playing:t,style:{display:"none"},url:"https://www.youtube.com/watch?v=rN4Y7mGlH8c"})},h=function(e){var t=e.data,n=Object(i.useState)(!1),c=Object(l.a)(n,2),s=c[0],o=c[1],r=t.map((function(e,t){return Object(a.jsxs)("div",{className:"shop",children:[e.shop," :"," ",Object(a.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[" ",Object(a.jsx)("span",{style:"DOST\u0118PNY"!==e.availability?{color:"#f94144",fontWeight:"bold"}:{color:"#90be6d",fontWeight:"bold"},children:e.availability})," "]})," ",e.availabilityDE&&Object(a.jsx)("a",{href:e.linkDE,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsxs)("span",{style:"DOST\u0118PNY"!==e.availabilityDE?{color:"#f94144",fontWeight:"bold"}:{color:"#90be6d",fontWeight:"bold"},children:[" ",Object(a.jsx)("span",{style:{color:"white"},children:"|"})," ",e.availabilityDE]})})]},t)}));return t.forEach((function(e){"DOST\u0118PNY"===e.availability?document.title="Dost\u0119pny w ".concat(e.shop,"!"):document.title="Playstation 5"})),t.filter((function(e){if("DOST\u0118PNY"===e.availability||"DOST\u0118PNY"===e.availabilityDE)return e})).length>0?s||o(!0):s&&o(!1),Object(a.jsxs)(a.Fragment,{children:[r," ",Object(a.jsx)(u,{isPlaying:s})]})},p=n(159),O=n(160),f=n(152),x=n(147),g=Object(x.a)((function(e){return{root:{"& .MuiInputBase-input":{color:"white"}}}}));function y(e){var t=e.login,n=e.setLogin,i=e.password,c=e.setPassword,s=e.handleLogin,o=g();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"200px"},children:[Object(a.jsx)(O.a,{style:{margin:"15px",background:"#212121",borderRadius:"5px"},id:"outlined-required",label:"Login",variant:"outlined",onChange:function(e){n(e.target.value)},value:t}),Object(a.jsx)(O.a,{style:{margin:"15px",background:"#212121",borderRadius:"5px"},id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:function(e){c(e.target.value)},value:i}),Object(a.jsx)("button",{style:{display:"none"},onClick:s,type:"submit"})]})}),Object(a.jsx)(f.a,{onClick:s,variant:"contained",style:{width:"fit-content",alignSelf:"center"},children:"Log in"})]})}var m=n(59),v=n.n(m),k=function(e){var t=e.setIsValidate,n=Object(i.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(i.useState)(""),j=Object(l.a)(r,2),b=j[0],u=j[1],h=Object(i.useState)(!1),p=Object(l.a)(h,2),O=p[0],f=p[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(y,{login:s,setLogin:o,password:b,setPassword:u,handleLogin:function(e){e.preventDefault(),fetch("".concat("http://localhost:3001","/login/").concat(s,"/").concat(b),{method:"POST"}).then((function(e){return e.json()})).then((function(e){!0===e.success?(t(e.key),v.a.set("adminCode",e.key),f(!0)):u("")}))}}),O&&Object(a.jsx)(d.a,{to:"/"})]})},w=n(61),N=n(162),S=n(158),P=n(156),D=n(157),C=n(155),E=n(153),z=n(154),T=n(60),L=n.n(T),Y=c.a.forwardRef((function(e,t){return Object(a.jsx)(E.a,Object(w.a)({direction:"up",ref:t},e))}));function I(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=function(){i(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z.a,{color:"primary",onClick:function(){i(!0)},style:{color:"white",position:"fixed",top:"2%",left:"95%",transform:"translate(-50%,0%)"},children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(N.a,{}),Object(a.jsxs)(N.a,{open:n,TransitionComponent:Y,keepMounted:!0,onClose:s,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(a.jsx)(C.a,{style:{background:"#303030",color:"white"},id:"alert-dialog-slide-title",children:"Jak to dzia\u0142a?"}),Object(a.jsx)(P.a,{style:{background:"#303030",color:"white"},children:Object(a.jsx)(D.a,{style:{background:"#303030",color:"white"},id:"alert-dialog-slide-description",children:"Co 25 sekund serwer sprawdza czy Playstation 5 jest dost\u0119pne w sklepie. Nast\u0119pnie ty dostajesz t\u0105 informacje bez konieczno\u015bci od\u015bwie\u017cania strony. Je\u017celi produkt bedzie dost\u0119pny to bedzie alarm."})}),Object(a.jsx)(S.a,{style:{background:"#303030"},children:Object(a.jsx)(f.a,{onClick:s,color:"primary",children:"OK"})})]})]})}var F=function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(1),o=Object(l.a)(s,2),r=o[0],j=o[1];return Object(i.useEffect)((function(){fetch("".concat("https://shielded-inlet-52440.herokuapp.com","/dostepnosc")).then((function(e){return e.json()})).then((function(e){c(e)}))}),[r]),Object(i.useEffect)((function(){setInterval((function(){j((function(e){return e+1}))}),25e3)}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/",exact:!0,children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsxs)("div",{className:"playstation5",children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:"https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",alt:"Playstation 5"})}),Object(a.jsx)("div",{className:"shops",children:Object(a.jsx)(h,{data:n})})]}),Object(a.jsx)(I,{}),n[n.length-1]&&Object(a.jsxs)("div",{className:"update",children:["Ostatnia aktualizacja: ",n[n.length-1].lastUpdate]})]})}),Object(a.jsx)(d.b,{path:"/admin",exact:!0,component:k})]}):Object(a.jsx)("div",{className:"progress",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},children:Object(a.jsx)(p.a,{})})})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root"))}},[[96,13,14]]]);
//# sourceMappingURL=main.78217ab1.chunk.js.map