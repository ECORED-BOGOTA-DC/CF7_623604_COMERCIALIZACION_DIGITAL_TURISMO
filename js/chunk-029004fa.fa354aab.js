(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-029004fa"],{5270:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header container-fluid"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?e("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:t.toggleMenu}},[e("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[e("div",{staticClass:"line-2"}),e("div",{staticClass:"line-1"}),e("div",{staticClass:"line-3"})]),e("span",[t._v("MENÚ")])]):t._e(),e("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:s("a00a")}}),t.isInicio?e("div",{staticClass:"d-none d-md-flex align-items-center"},[e("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):e("div",{staticClass:"header__componente-formativo"},[e("span",{domProps:{innerHTML:t._s(t.globalData.componenteFormativo)}})])]),t.isInicio?e("div",{staticClass:"col-auto"},[e("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[e("span",{staticClass:"me-1"},[t._v("Ver contenido")]),e("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},i=[],a=s("ecc5"),o={name:"Header",mixins:[a["a"]],computed:{globalData(){return this.$config&&this.$config.global},isInicio(){return"inicio"===this.$route.name},menuOpen(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu(){this.$store.dispatch("toggleMenu",!this.menuOpen)}}},c=o,l=(s("5ab6"),s("2877")),r=Object(l["a"])(c,n,i,!1,null,"7e5a4120",null);e["default"]=r.exports},"5ab6":function(t,e,s){"use strict";s("88b2")},"88b2":function(t,e,s){}}]);
//# sourceMappingURL=chunk-029004fa.fa354aab.js.map