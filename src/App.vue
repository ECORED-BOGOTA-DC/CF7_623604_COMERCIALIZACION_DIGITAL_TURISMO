<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 150px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #B1DE19 !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #B1DE19 !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-interno__titulo__icono
  background-color: #12263F !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #12263F !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 0px !important
.banner-principal .tarjeta
  background-color: transparent !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 44% !important
  right: 82% !important
.banner-principal-decorativo-2
  animation: float1 2s ease-in-out infinite alternate !important
  top: 17% !important
  right: 70% !important
.banner-principal-decorativo-3
  animation: float1 2s ease-in-out infinite alternate !important
  top: 10% !important
  right: 20% !important
.banner-principal-decorativo-4
  animation: float1 2s ease-in-out infinite alternate !important
  top: 40% !important
  right: 12% !important
@media (min-width: 576px)
  .banner-principal__info
    padding-right: 6rem !important
.cont_gradiente1
  background: rgb(222,222,222)
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%)
  border-radius: 10px
  box-shadow: 0px 0px 8px rgba(0,0,0,0.3)
  margin-top: -50px
@media screen and (max-width: 992px)
  .cont_responsive1
    right: 0 !important
    width: 100% !important
  .cont_responsive2
    left: 0 !important
    width: 100% !important
  .cont_gradiente1
    margin-top: 0px !important
</style>
