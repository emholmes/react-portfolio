(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),i=c.n(r),s=c(6),n=c.n(s),a=(c(12),c(2)),l=(c(13),c(0)),o=function(e){var t=e.currentPage,c=e.handlePageChange;return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"nav nav-tabs",children:["About me","Portfolio","Contact","Resume"].map((function(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#"+e.toLowerCase(),onClick:function(){c(e)},className:t===e?"nav-link navActive":"nav-link",children:e})},e)}))})})},j=function(e){return Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"h1-block",children:[Object(l.jsx)("h1",{children:"Erin Holmes"}),Object(l.jsx)("h2",{children:"Web Developer"})]}),Object(l.jsx)(o,{currentPage:e.currentPage,handlePageChange:e.handlePageChange})]})},h=c.p+"static/media/erin-h-square.3c7d6840.jpeg",d=function(){return Object(l.jsxs)("section",{className:"content",children:[Object(l.jsx)("h3",{children:"About Me"}),Object(l.jsxs)("div",{className:"about-me",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Hi, I'm Erin."}),Object(l.jsx)("p",{children:"I am a detail oriented front-end developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation."})]}),Object(l.jsx)("img",{src:h,alt:"headshot of Erin Holmes"})]})]})},b=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("section",{className:"footer-section",children:[Object(l.jsxs)("ul",{className:"footer-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/erin-holmes-26861945/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"icon icon-linkedin","aria-label":"linkedin profile link"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/emholmes",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"icon icon-github","aria-label":"github profile link"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://leetcode.com/erinholmes/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"icon icon-leetcode","aria-label":"leetcode profile link"})})})]}),Object(l.jsx)("p",{children:"Made by Erin Holmes."})]})})},m=function(e){var t=e.project;return Object(l.jsxs)("div",{className:"project-description",children:[Object(l.jsx)("a",{href:t.pageUrl,className:"project-title",target:"_blank",rel:"noreferrer",children:t.name}),Object(l.jsx)("a",{href:t.githubUrl,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"icon icon-github","aria-label":"github project link"})}),Object(l.jsx)("p",{children:t.description})]})},u=c(7),p=function(){return Object(l.jsxs)("section",{id:"my-work",className:"my-work content",children:[Object(l.jsx)("h3",{children:"Portfolio"}),Object(l.jsx)("ul",{className:"project-list",children:u.map((function(e){return Object(l.jsx)("li",{className:e.id,children:Object(l.jsx)(m,{project:e})},e.id)}))})]})},x=c(3),O=c(5);var g=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(a.a)(e,2),c=t[0],i=t[1],s=c.name,n=c.email,o=c.message,j=Object(r.useState)(""),h=Object(a.a)(j,2),d=h[0],b=h[1];function m(e){if("email"===e.target.name){var t=function(e){return/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(String(e).toLowerCase())}(e.target.value);b(t?"":"Enter a valid email")}else e.target.value.length?b(""):b("".concat(e.target.name," required"));d||i(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{className:"contact content",children:[Object(l.jsx)("h3",{children:"Contact"}),Object(l.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",defaultValue:s,onBlur:m,name:"name",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",defaultValue:n,onBlur:m,name:"email",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",defaultValue:o,onBlur:m,rows:"5",required:!0})]}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:d})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})},f=c.p+"static/media/ErinHolmes_Resume_Portfolio.88f66e28.pdf",v=function(){return Object(l.jsxs)("section",{className:"resume content",children:[Object(l.jsx)("h3",{children:"Resume"}),Object(l.jsxs)("p",{children:["Download my",Object(l.jsxs)("a",{href:f,download:!0,children:[" resume",Object(l.jsx)("span",{className:"icon icon-download","aria-label":"download icon"})]})]}),Object(l.jsxs)("section",{className:"proficiencies",children:[Object(l.jsxs)("div",{className:"frontEnd",children:[Object(l.jsx)("h4",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"Javascript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"}),Object(l.jsx)("li",{children:"Client-side APIs"}),Object(l.jsx)("li",{children:"Resposive Design"}),Object(l.jsx)("li",{children:"Accessibilty"})]})]}),Object(l.jsxs)("div",{className:"backEnd",children:[Object(l.jsx)("h4",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Server-side APIs"}),Object(l.jsx)("li",{children:"REST API"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL"}),Object(l.jsx)("li",{children:"Sequelize"}),Object(l.jsx)("li",{children:"MongoDB"}),Object(l.jsx)("li",{children:"Mongoose"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})]})]})};var k=function(){var e=Object(r.useState)("About"),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{currentPage:c,handlePageChange:i}),function(){switch(c){default:return Object(l.jsx)(d,{});case"Portfolio":return Object(l.jsx)(p,{});case"Contact":return Object(l.jsx)(g,{});case"Resume":return Object(l.jsx)(v,{})}}(),Object(l.jsx)(b,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),i(e),s(e),n(e)}))};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),N()},7:function(e){e.exports=JSON.parse('[{"id":"project-one","name":"Parktime 2.0","description":"MVC | Sequelize | Node.js | RESTful API","pageUrl":"https://parktime-2.herokuapp.com/","githubUrl":"https://github.com/emholmes/parktime-app"},{"id":"project-two","name":"Tech Blog","description":"MVC | Express | Sequelize","pageUrl":"https://tech-blog-mvc-eh.herokuapp.com/","githubUrl":"https://github.com/emholmes/tech-blog-mvc"},{"id":"project-three","name":"Note Taker","description":"Express.js","pageUrl":"https://notetaker-eh.herokuapp.com/","githubUrl":"https://github.com/emholmes/note-taker-expressjs"},{"id":"project-four","name":"Workday Scheduler","description":"Bootstrap | jQuery | Third-party API","pageUrl":"https://emholmes.github.io/eholmes-work-day-scheduler-api-challenge/","githubUrl":"https://github.com/emholmes/eholmes-work-day-scheduler-api-challenge"},{"id":"project-five","name":"Weather Dashboard","description":"Javascript | Server-side API","pageUrl":"https://emholmes.github.io/api-weather-dashboard/","githubUrl":"https://github.com/emholmes/api-weather-dashboard"},{"id":"project-six","name":"JS Fundamentals Quiz","description":"Javascript","pageUrl":"https://emholmes.github.io/eholmes-js-quiz-api-challenge/","githubUrl":"https://github.com/emholmes/eholmes-js-quiz-api-challenge"},{"id":"project-seven","name":"Password Generator","description":"Javascript","pageUrl":"https://emholmes.github.io/eholmes-password-generator-javascript-challenge","githubUrl":"https://github.com/emholmes/eholmes-password-generator-javascript-challenge"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.e1e96768.chunk.js.map