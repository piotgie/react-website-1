(this["webpackJsonpreact-website-1"]=this["webpackJsonpreact-website-1"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c.n(i),n=c(20),a=c.n(n),r=(c(28),c(18)),l=c(3),o=c(13),j=c(10),b=(c(29),c(1)),d=["btn--primary","btn--outline"],h=["btn--medium","btn--large","btn--mobile","btn--wide"],x=["primary","blue","red","green"],m=function(e){var t=e.children,c=e.type,i=e.onClick,s=e.buttonStyle,n=e.buttonSize,a=e.buttonColor,r=d.includes(s)?s:d[0],l=h.includes(n)?n:h[0],o=x.includes(a)?a:null;return Object(b.jsx)("button",{className:"\n        btn ".concat(r," \n        ").concat(l," \n        ").concat(o,"\n        "),onClick:i,type:c,children:t})},u=(c(31),c(0));var O=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!0),a=Object(r.a)(n,2),d=a[0],h=a[1],x=function(){return s(!1)},O=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(i.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.b.Provider,{value:{color:"#fff"},children:Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container container",children:[Object(b.jsxs)(l.b,{to:"/",className:"navbar-logo",onClick:x,children:[Object(b.jsx)(o.a,{className:"navbar-icon"}),"LAVISH"]}),Object(b.jsx)("div",{className:"menu-icon",onClick:function(){return s(!c)},children:c?Object(b.jsx)(j.f,{}):Object(b.jsx)(j.a,{})}),Object(b.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{to:"/",className:"nav-links",onClick:x,children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{to:"/services",className:"nav-links",onClick:x,children:"Services"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{to:"/products",className:"nav-links",onClick:x,children:"Products"})}),Object(b.jsx)("li",{className:"nav-btn",children:d?Object(b.jsx)(l.b,{to:"/sign-up",className:"btn-link",children:Object(b.jsx)(m,{buttonStyle:"btn--outline",children:"Sign Up"})}):Object(b.jsx)(l.b,{to:"/sign-up",className:"btn-link",onClick:x,children:Object(b.jsx)(m,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",children:"SIGN UP"})})})]})]})})})})},g=c(4),p=c(9);c(37);var v=function(e){var t=e.lightBg,c=e.topLine,i=e.lightText,s=e.lightTextDesc,n=e.headline,a=e.description,r=e.buttonLabel,o=e.img,j=e.alt,d=e.imgStart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"},children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(b.jsx)("div",{className:"top-line",children:c}),Object(b.jsx)("h1",{className:i?"heading":"heading dark",children:n}),Object(b.jsx)("p",{className:s?"home__hero-subtitle":"home__hero-subtitle dark",children:a}),Object(b.jsx)(l.b,{to:"/sign-up",children:Object(b.jsx)(m,{buttonSize:"btn--wide",buttonColor:"blue",children:r})})]})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"home__hero-img-wrapper",children:Object(b.jsx)("img",{src:o,alt:j,className:"home__hero-img"})})})]})})})})},N=c(22),f=c(23);c(38);var y=function(){return Object(b.jsx)(u.b.Provider,{value:{color:"#fff",size:64},children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"pricing__section",children:Object(b.jsxs)("div",{className:"pricing__wrapper",children:[Object(b.jsx)("h1",{className:"pricing__heading",children:"Pricing"}),Object(b.jsxs)("div",{className:"pricing__container",children:[Object(b.jsx)(l.b,{to:"/sign-up",className:"pricing__container-card",children:Object(b.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(j.c,{})}),Object(b.jsx)("h3",{children:"Gold"}),Object(b.jsx)("h4",{children:"$29.99"}),Object(b.jsx)("p",{children:"per month"}),Object(b.jsxs)("ul",{className:"pricing__container-features",children:[Object(b.jsx)("li",{children:"1000 transactions"}),Object(b.jsx)("li",{children:"2,5% cash back"}),Object(b.jsx)("li",{children:"$100,000 limit"})]}),Object(b.jsx)(m,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})}),Object(b.jsx)(l.b,{to:"/sign-up",className:"pricing__container-card",children:Object(b.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(N.a,{})}),Object(b.jsx)("h3",{children:"Starter"}),Object(b.jsx)("h4",{children:"$8.99"}),Object(b.jsx)("p",{children:"per month"}),Object(b.jsxs)("ul",{className:"pricing__container-features",children:[Object(b.jsx)("li",{children:"100 transactions"}),Object(b.jsx)("li",{children:"2% cash back"}),Object(b.jsx)("li",{children:"$10,000 limit"})]}),Object(b.jsx)(m,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})}),Object(b.jsx)(l.b,{to:"/sign-up",className:"pricing__container-card",children:Object(b.jsxs)("div",{className:"pricing__container-cardInfo",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(f.a,{})}),Object(b.jsx)("h3",{children:"Diamond"}),Object(b.jsx)("h4",{children:"$99.99"}),Object(b.jsx)("p",{children:"per month"}),Object(b.jsxs)("ul",{className:"pricing__container-features",children:[Object(b.jsx)("li",{children:"Unlimited transactions"}),Object(b.jsx)("li",{children:"5% cash back"}),Object(b.jsx)("li",{children:"unlimited spending"})]}),Object(b.jsx)(m,{buttonSize:"btn--wide",buttonColor:"primary",children:"Choose Plan"})]})})]})]})})})})},w={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg",alt:"Credit Card"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"images/svg-5.svg",alt:"Vault"},_={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"images/svg-7.svg",alt:"Vault"},k={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var T=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,Object(p.a)({},w)),Object(b.jsx)(v,Object(p.a)({},_)),Object(b.jsx)(v,Object(p.a)({},S)),Object(b.jsx)(y,{}),Object(b.jsx)(v,Object(p.a)({},k))]})};c(39);var C=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsxs)("section",{className:"footer-subscription",children:[Object(b.jsx)("p",{className:"footer-subscription-heading",children:"Join our exclusive membership to receive the latest news and trends"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(b.jsx)("div",{className:"input-areas",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(b.jsx)(m,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(b.jsxs)("div",{className:"footer-links",children:[Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"About Us"}),Object(b.jsx)(l.b,{to:"/sign-up",children:"How it works"}),Object(b.jsx)(l.b,{to:"/",children:"Testimonials"}),Object(b.jsx)(l.b,{to:"/",children:"Careers"}),Object(b.jsx)(l.b,{to:"/",children:"Investors"}),Object(b.jsx)(l.b,{to:"/",children:"Terms of Service"})]}),Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Contact Us"}),Object(b.jsx)(l.b,{to:"/",children:"Contact"}),Object(b.jsx)(l.b,{to:"/",children:"Support"}),Object(b.jsx)(l.b,{to:"/",children:"Destinations"}),Object(b.jsx)(l.b,{to:"/",children:"Sponsorships"})]})]}),Object(b.jsxs)("div",{className:"footer-link-wrapper",children:[Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Videos"}),Object(b.jsx)(l.b,{to:"/",children:"Submit Video"}),Object(b.jsx)(l.b,{to:"/",children:"Ambassadors"}),Object(b.jsx)(l.b,{to:"/",children:"Agency"}),Object(b.jsx)(l.b,{to:"/",children:"Influencer"})]}),Object(b.jsxs)("div",{className:"footer-link-items",children:[Object(b.jsx)("h2",{children:"Social Media"}),Object(b.jsx)(l.b,{to:"/",children:"Instagram"}),Object(b.jsx)(l.b,{to:"/",children:"Facebook"}),Object(b.jsx)(l.b,{to:"/",children:"Youtube"}),Object(b.jsx)(l.b,{to:"/",children:"Twitter"})]})]})]}),Object(b.jsx)("section",{className:"social-media",children:Object(b.jsxs)("div",{className:"social-media-wrap",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsxs)(l.b,{to:"/",className:"social-logo",children:[Object(b.jsx)(o.a,{className:"navbar-icon"}),"LAVISH"]})}),Object(b.jsx)("small",{className:"website-rights",children:"LAVISH \xa9 2020"}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)(l.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook",children:Object(b.jsx)(j.b,{})}),Object(b.jsx)(l.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(b.jsx)(j.d,{})}),Object(b.jsx)(l.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube",children:Object(b.jsx)(j.h,{})}),Object(b.jsx)(l.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(b.jsx)(j.g,{})}),Object(b.jsx)(l.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(b.jsx)(j.e,{})})]})]})})]})},L={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"images/svg-1.svg",alt:"Credit Card"};var A=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(v,Object(p.a)({},L))]})},I={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"images/svg-8.svg",alt:"Vault"};var E=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,Object(p.a)({},I))})},D={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"images/svg-7.svg",alt:"Vault"};var U=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,Object(p.a)({},D))})};var B=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/",exact:!0,component:T}),Object(b.jsx)(g.a,{path:"/services",exact:!0,component:A}),Object(b.jsx)(g.a,{path:"/products",exact:!0,component:E}),Object(b.jsx)(g.a,{path:"/signup",exact:!0,component:U})]}),Object(b.jsx)(C,{})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b5e5c10d.chunk.js.map