<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="zoom-in") Le damos la bienvenida al componente formativo “Visión general del comercio electrónico”. Para comenzar el recorrido por el mismo, se invita a observar el siguiente video.
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KM-RhabB6qs" title="Visión general del comercio electrónico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
