import{_ as h,o as p,c as m,w as d,a as f,v as T,b as v,n as B,T as O}from"../vendor-DBgJBiBR.js";const y=e=>{typeof e.remove<"u"?e.remove():e.parentNode.removeChild(e)};class b{constructor(t,s){this.startedAt=Date.now(),this.callback=t,this.delay=s,this.timer=setTimeout(t,s)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const o={TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"},r=Object.freeze(o);function u(e,t,s){let i=null;switch(e){case o.TOP:case o.TOP_RIGHT:case o.TOP_LEFT:i=t;break;case o.BOTTOM:case o.BOTTOM_RIGHT:case o.BOTTOM_LEFT:i=s;break}return i}class C{constructor(){this.queue={}}$on(t,s){this.queue[t]=this.queue[t]||[],this.queue[t].push(s)}$off(t,s){if(this.queue[t]){for(var i=0;i<this.queue[t].length;i++)if(this.queue[t][i]===s){this.queue[t].splice(i,1);break}}}$emit(t,s){this.queue[t]&&this.queue[t].forEach(function(i){i(s)})}}const l=new C,g={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"default"},position:{type:String,default:r.BOTTOM_RIGHT,validator(e){return Object.values(r).includes(e)}},maxToasts:{type:[Number,Boolean],default:!1},duration:{type:[Number,Boolean],default:4e3},dismissible:{type:Boolean,default:!0},queue:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},useDefaultCss:{type:Boolean,default:!0},onClose:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1,timer:null}},beforeMount(){this.createParents(),this.setDefaultCss(),this.setupContainer()},mounted(){this.showNotice(),l.$on("toast-clear",this.close)},methods:{createParents(){this.parentTop=document.querySelector(".c-toast-container--top"),this.parentBottom=document.querySelector(".c-toast-container--bottom"),!(this.parentTop&&this.parentBottom)&&(this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="c-toast-container c-toast-container--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="c-toast-container c-toast-container--bottom"))},setDefaultCss(){const e=this.useDefaultCss?"add":"remove";this.parentTop.classList[e]("v--default-css"),this.parentBottom.classList[e]("v--default-css")},setupContainer(){const e=document.body;e.appendChild(this.parentTop),e.appendChild(this.parentBottom)},shouldQueue(){return!this.queue&&this.maxToasts===!1?!1:this.maxToasts!==!1?this.maxToasts<=this.parentTop.childElementCount+this.parentBottom.childElementCount:this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=this.duration!==!1?new b(this.close,this.duration):null},click(){this.onClick.apply(null,arguments),this.dismissible&&this.close()},toggleTimer(e){this.timer&&this.pauseOnHover&&(e?this.timer.pause():this.timer.resume())},stopTimer(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer)},close(){this.stopTimer(),this.isActive=!1,setTimeout(()=>{this.onClose.apply(null,arguments),y(this.$el)},150)}},computed:{correctParent(){return u(this.position,this.parentTop,this.parentBottom)},transition(){return u(this.position,{enter:"fadeInDown",leave:"fadeOut"},{enter:"fadeInUp",leave:"fadeOut"})}},beforeUnmount(){l.$off("toast-clear",this.close)}},q=["innerHTML"];function _(e,t,s,i,c,a){return p(),m(O,{"enter-active-class":a.transition.enter,"leave-active-class":a.transition.leave},{default:d(()=>[f(v("div",{class:B(["c-toast",`c-toast--${s.type}`,`c-toast--${s.position}`]),onMouseover:t[0]||(t[0]=n=>a.toggleTimer(!0)),onMouseleave:t[1]||(t[1]=n=>a.toggleTimer(!1)),onClick:t[2]||(t[2]=(...n)=>a.click&&a.click(...n)),role:"alert",innerHTML:s.message},null,42,q),[[T,c.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}const E=h(g,[["render",_]]);export{E as T,l as e};
