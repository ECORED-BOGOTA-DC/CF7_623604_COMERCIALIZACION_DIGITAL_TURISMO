<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Luego de la temática vista en este componente formativo, donde se explicó sobre la visión general del comercio electrónico y los procesos que ello implica, es importante que revise el siguiente mapa conceptual, el cual resume de manera precisa lo ya explicado en los temas tratados:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que contiene el mapa conceptual que resume la temática vista durante este componente formativo, la cual hace mención al comercio electrónico, incluyendo características, ventajas y desventajas; las plataformas tecnológicas que se conocen como son: tiendas online, redes sociales, pagos electrónicos, dropshiping, entre otros; el tráfico de comercio exterior: indicadores de rendimiento, métricas y herramientas de medición; por último, el contenido digital donde se encuentran los tipos de contenidos y las herramientas de programación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
