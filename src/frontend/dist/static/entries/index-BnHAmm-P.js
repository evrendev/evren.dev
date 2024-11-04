const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/chunks/common-DDBEUL_3.js","static/chunks/vendor-DBgJBiBR.js","assets/css/common.css-DTof8YAa.css","static/chunks/about-DXjNUzf4.js","static/chunks/works-DpTwlQ1R.js","static/chunks/contact-C5XL3arC.js","static/chunks/@meforma/vue-toaster-hxJz8vGD.js","assets/css/@meforma/vue-toaster.css-DedesP8H.css","assets/css/contact.css-C6niZ151.css"])))=>i.map(i=>d[i]);
import{o as m,d as u,p as n,u as i,b as g,F as _,i as L,j as s,N as f,_ as h,V as b,W as v,X as w}from"../chunks/vendor-DBgJBiBR.js";import{P as T,B as y,M as A,H as k,_ as S,F as E,i as r,b as D}from"../chunks/common-DDBEUL_3.js";const P={class:"wrapper"},R={__name:"App",setup(e){return(t,o)=>(m(),u(_,null,[n(i(T)),g("div",P,[n(i(y)),n(i(A)),n(i(k)),n(i(S)),n(i(E))])],64))}},a={get defaultLocale(){return localStorage.getItem("lang")||navigator.language.slice(0,2)||"en"},get supportedLocales(){return"de,en".split(",")},get currentLocale(){return r.global.locale.value},set currentLocale(e){r.global.locale.value=e},async switchLanguage(e){await a.loadLocaleMessages(e),a.currentLocale=e,document.querySelector("html").setAttribute("lang",e),document.querySelector("meta").setAttribute("lang",e),document.querySelector("meta[http-equiv='content-language']").setAttribute("content",e),localStorage.setItem("lang",e)},async loadLocaleMessages(e){if(!r.global.availableLocales.includes(e)){const t=await L(Object.assign({"./locales/de.json":()=>s(()=>import("../chunks/common-DDBEUL_3.js").then(o=>o.d),__vite__mapDeps([0,1,2])),"./locales/en.json":()=>s(()=>import("../chunks/common-DDBEUL_3.js").then(o=>o.e),__vite__mapDeps([0,1,2]))}),`./locales/${e}.json`,3);r.global.setLocaleMessage(e,t.default)}return f()},isLocaleSupported(e){return a.supportedLocales.includes(e)},getUserLocale(){const e=window.navigator.language||window.navigator.userLanguage||a.defaultLocale;return{locale:e,localeNoRegion:e.split("-")[0]}},getPersistedLocale(){const e=localStorage.getItem("lang");return a.isLocaleSupported(e)?e:null},guessDefaultLocale(){const e=a.getPersistedLocale();if(e)return e;const t=a.getUserLocale();return a.isLocaleSupported(t.locale)?t.locale:a.isLocaleSupported(t.localeNoRegion)?t.localeNoRegion:a.defaultLocale},async routeMiddleware(e,t,o){const c=e.params.locale;return a.isLocaleSupported(c)?(await a.switchLanguage(c),o()):o(a.guessDefaultLocale())},i18nRoute(e){return`/${a.currentLocale}/${e}`}},B={},I={class:"home"};function q(e,t){return m(),u("div",I,t[0]||(t[0]=[g("span",null,"Home",-1)]))}const M=h(B,[["render",q]]),$="evren.dev",d=b({history:v("/"),linkActiveClass:"active",linkExactActiveClass:"exact-active",routes:[{path:"",redirect:`/${a.defaultLocale}`},{path:"/:locale?",beforeEnter:a.routeMiddleware,children:[{path:"",name:"home",alias:["home","start-seite"],component:M,meta:{title:"page.home.meta.title",description:"page.home.meta.description",keywords:"page.home.meta.keywords",image:"page.home.meta.image",enterActiveClass:"animate__animated animate__fadeInLeftBig",enterLeaveClass:"animate__animated animate__fadeOutRightBig"}},{path:"about",name:"about",alias:["uber-mich"],component:()=>s(()=>import("../chunks/about-DXjNUzf4.js"),__vite__mapDeps([3,1])),meta:{title:"page.about.title",description:"page.about.meta.description",keywords:"page.about.meta.keywords",image:"page.about.meta.image",enterActiveClass:"animate__animated animate__fadeInLeftBig",enterLeaveClass:"animate__animated animate__fadeOutRightBig"}},{path:"works",name:"works",alias:["arbeiten"],component:()=>s(()=>import("../chunks/works-DpTwlQ1R.js"),__vite__mapDeps([4,1])),meta:{title:"page.works.title",description:"page.works.meta.description",keywords:"page.works.meta.keywords",image:"page.works.meta.image",enterActiveClass:"animate__animated animate__fadeInLeftBig",enterLeaveClass:"animate__animated animate__fadeOutRightBig"}},{path:"contact",name:"contact",alias:["kontakt"],component:()=>s(()=>import("../chunks/contact-C5XL3arC.js"),__vite__mapDeps([5,1,6,7,0,2,8])),meta:{title:"page.contact.title",description:"page.contact.meta.description",keywords:"page.contact.meta.keywords",image:"page.contact.meta.image",enterActiveClass:"animate__animated animate__fadeInLeftBig",enterLeaveClass:"animate__animated animate__fadeOutRightBig"}}]},{path:"/:pathMatch(.*)",redirect:"/"}],scrollBehavior(){window.scrollTo({top:0,behavior:"smooth"})}});d.afterEach(e=>{const t=r.global.t(e.meta.title),o=r.global.t(e.meta.description),c=r.global.t(e.meta.keywords);document.title=`${t} | ${$}`;const l=`https://evren.dev${e.fullPath}`;document.querySelector("link[rel='canonical']").setAttribute("href",l),document.querySelector("meta[property='og:url']").setAttribute("content",l),document.querySelector("meta[name='title']").setAttribute("content",t),document.querySelector("meta[name='twitter:title']").setAttribute("content",t),document.querySelector("meta[property='og:title']").setAttribute("content",t),document.querySelector("meta[name='description']").setAttribute("content",o),document.querySelector("meta[name='twitter:description']").setAttribute("content",o),document.querySelector("meta[property='og:description']").setAttribute("content",o),document.querySelector("meta[name='keywords']").setAttribute("content",c)});const p=w(R);p.config.globalProperties.applicationName="Evren.Dev";p.use(d).use(D).use(r).mount("#app");
