(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8a7823a"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b7c8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"linea-tiempo-e"},[t._l(t.elements,(function(s,i){return e("div",{key:"linea-tiempo-e-key-"+s.id,staticClass:"linea-tiempo-e__item"},[e("div",{staticClass:"linea-tiempo-e__item__header"},[e("h3",{staticClass:"mb-1"},[t._v(t._s(s.titulo))]),s.hasOwnProperty("subtitulo")?e("p",{staticClass:"mb-0"},[t._v(t._s(s.subtitulo))]):t._e()]),e("div",{directives:[{name:"child",rawName:"v-child",value:s.elm,expression:"item.elm"}],staticClass:"linea-tiempo-e__item__body"})])})),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],n=s("ab14"),d={name:"LineaTiempoE",mixins:[n["a"]]},r=d,l=s("2877"),o=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-e8a7823a.0ec785fa.js.map