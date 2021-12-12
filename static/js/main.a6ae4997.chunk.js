(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),l=n.n(r),s=(n(30),n(0)),i=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"BL\u039b\u0186KPI\u0418K"}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(s.jsxs)("div",{className:"navbar-nav",children:[Object(s.jsx)("a",{className:"nav-link",href:"/myfirstreact",children:"Home"}),Object(s.jsx)("a",{className:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(s.jsx)("a",{className:"nav-link",href:"/myfirstreact/add",children:"Add Employee"}),Object(s.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},o=n.p+"static/media/logo.6ce24c58.svg";n(32);var d=n(20),j=n(21),b=n(25),m=n(24),h=(n(33),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={count:0},e}return Object(j.a)(n,[{key:"addCounter",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{id:"button",onClick:function(){return e.addCounter()},children:"Click all you can~"}),Object(s.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component)),u=n(22),p=n.n(u),O=n(3),f=n(23),x=n.n(f).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),y=n(9),v=function(){return x.get("/employees")},g=function(e){return x.post("/employees",e)},N=function(e){return x.put("/employees",e)},S=function(e){return x.get("/employees/".concat(e))},k=function(e){return x.get("/employees/".concat(e))},C=(n(54),function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}));var r=function(){v().then((function(e){a(e.data)})).catch((function(e){console.log("Something went wrong >:(")}))};return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h3",{children:"List of Employees"}),Object(s.jsx)("div",{children:Object(s.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"table-primary",children:[Object(s.jsx)("td",{children:"Name"}),Object(s.jsx)("td",{children:"Location"}),Object(s.jsx)("td",{children:"Department"}),Object(s.jsx)("td",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:n.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.location}),Object(s.jsx)("td",{children:e.department}),Object(s.jsx)("td",{children:Object(s.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(s.jsx)(y.b,{className:"btn btn-primary",to:"/myfirstreact/employees/edit/".concat(e.employeeId),children:"Update"}),Object(s.jsx)("div",{className:"btn btn-danger",onClick:function(){return t=e.employeeId,void k(t).then((function(e){console.log("Successfully deleted the employee!"),r()})).catch((function(e){console.error("Something went wrong >:(",e)}));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})});var w=function(){return Object(s.jsx)("div",{className:"Home",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(s.jsx)(p.a,{textStyle:{fontFamily:"Courier New",color:"white",fontWeight:5e3,fontSize:"2em"},startDelay:500,cursorColor:"white",multiText:["Hey there, everyone :)","This is made by Katrina","Welcome to my React","and hello Spring Boot!","Hope yall liked it, UWU"],multiTextDelay:1500,typeSpeed:150}),Object(s.jsx)(h,{}),Object(s.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"})]})})},I=n(2),F=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),l=Object(O.a)(r,2),i=l[0],o=l[1],d=Object(c.useState)(""),j=Object(O.a)(d,2),b=j[0],m=j[1],h=Object(c.useState)(""),u=Object(O.a)(h,2),p=u[0],f=u[1],x=Object(I.f)(),y=Object(I.g)().employeeId;Object(c.useEffect)((function(){y&&S(y).then((function(e){a(e.data.name),o(e.data.location),m(e.data.department)})).catch((function(e){console.error("Something went wrong >:(",e)}))}),[]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h3",{children:"Add employee"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{for:"nameField",className:"form-label",children:"Name"}),Object(s.jsx)("input",{type:"text",className:"form-control",value:n,id:"nameField",placeholder:"Input employee name",onChange:function(e){a(e.target.value)}})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{for:"locationField",className:"form-label",children:"Location"}),Object(s.jsx)("input",{type:"text",className:"form-control",value:i,id:"locationField",placeholder:"Input employee location",onChange:function(e){o(e.target.value)}})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{for:"departmentField",className:"form-label",children:"Department"}),Object(s.jsx)("input",{type:"text",className:"form-control",value:b,id:"departmentField",placeholder:"Input employee department",onChange:function(e){m(e.target.value)}})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),n&&i&&b?(f(""),y?N({employeeId:y,name:n,location:i,department:b}).then((function(e){console.log("Updated employee!",e.data),x("/myfirstreact/employees")})).catch((function(e){console.error("Something went wrong >:(",e)})):g({name:n,location:i,department:b}).then((function(e){console.log("Employee added!",e.data),x("/myfirstreact/employees")})).catch((function(e){console.log("something went wrong >:(",e)}))):(console.error("Kindly fill up each entry"),f("Kindly fill up each entry"))}(e)},children:"Save"}),Object(s.jsx)("p",{id:"error",children:p&&Object(s.jsx)("p",{className:"error",children:p})})]})]})},A=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"page not found :("})})},D=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(y.a,{children:Object(s.jsxs)(I.c,{children:[Object(s.jsx)(I.a,{exact:!0,path:"/myfirstreact",element:Object(s.jsx)(w,{})}),Object(s.jsx)(I.a,{exact:!0,path:"/myfirstreact/employees",element:Object(s.jsx)(C,{})}),Object(s.jsx)(I.a,{exact:!0,path:"/myfirstreact/add",element:Object(s.jsx)(F,{})}),Object(s.jsx)(I.a,{exact:!0,path:"/myfirstreact/employees/edit/:employeeId",element:Object(s.jsx)(F,{})}),Object(s.jsx)(I.a,{exact:!0,path:"*",element:Object(s.jsx)(A,{})})]})})})};var E=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{}),Object(s.jsx)(D,{})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};n(55);l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.a6ae4997.chunk.js.map