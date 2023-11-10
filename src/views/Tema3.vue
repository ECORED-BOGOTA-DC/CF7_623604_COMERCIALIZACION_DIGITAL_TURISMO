<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 3
      h1 Tráfico en comercio exterior
    
    .bloque-texto-g.color-secundario.bloque1.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el mercado existen más empresas que pueden llegar a ofrecer experiencias turísticas iguales o similares que las suyas, por eso es necesario desarrollar una estrategia que permita diferenciarse e incluso hacerse únicos para que los clientes nos elijan por encima de los competidores. Estas estrategias se construyen desde la planeación estratégica y debe ser única, potente para captar la atención del público objetivo y fácil de transmitir. Esto se conoce como la propuesta única de valor (USP: Unique Selling Proposition).
    
    p.mt-5(data-aos="zoom-in") Partiendo de la propuesta de valor, se debe dar a conocer la tienda #[em online] para que los clientes conozcan el tipo de experiencias turísticas que se ofrecen y finalicen las transacciones con el mayor gasto medio posible.
    p.mt-4(data-aos="zoom-in") Si bien no existe la receta perfecta que asegure el éxito de ventas en línea, se puede partir de una fórmula que ayuda a comprender algunas de las acciones que contribuyen a incrementar las ventas en Internet:

    .mt-5.p-3.m-auto(style="max-width:fit-content;background-color:#B4E6FF;border-radius:20px;" data-aos="zoom-in")
      h4.text-center.mb-0.ps-md-4.pe-md-4.ps-lg-5.pe-lg-5 Venta = Visitas * Tasa conversión * Pedido medio
    
    p.mt-5(data-aos="zoom-in") En esta fórmula hay tres acciones que se pueden realizar para aumentar las ventas, a saber:

    .row.mt-5.justify-content-center
      .col-xl-4.mb-4.mb-xl-0.col-lg-6.col-md-8.col-10
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="background-color:#FFE4B9;")
              .p-3.d-flex.align-content-center.flex-wrap(style="background-color:#FFCF82;min-height:250px;")
                figure
                  img(src="@/assets/curso/tema3/2.svg" alt="Imagen decorativa")
              .p-4(style="background-color:#FFE4B9;")
                h5 Incrementar las visitas
                p.mb-0 Cuantas más personas visiten el sitio web, hay más oportunidades de venta.
            .tarjeta-flip__contenido.p-4(style="background-color:#FFE4B9;")
              h4 Incrementar las visitas
              ul.lista-ul--color.mt-4.mb-0
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Para incrementar el número de visitantes del sitio web, es necesario invertir en publicidad en línea y fuera de línea. 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Realizar una estrategia de construcción y gestión de marca para que los clientes potenciales reconozcan y recuerden la empresa turística por medio de diferentes acciones publicitarias que comuniquen la propuesta de valor y los diferenciales de las experiencias turísticas.
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Lograr conseguir #[em leads]. Clientes que se registren, suscriban, soliciten información y autoricen que la empresa turística se comunique con ellos.
      .col-xl-4.mb-4.mb-xl-0.col-lg-6.col-md-8.col-10
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="background-color:#D9ECFF;")
              .p-3.d-flex.align-content-center.flex-wrap(style="background-color:#AFD8FE;min-height:250px;")
                figure
                  img(src="@/assets/curso/tema3/3.svg" alt="Imagen decorativa")
              .p-4(style="background-color:#D9ECFF;")
                h5 Incrementar la tasa de conversión
                p.mb-0 La tasa de conversión es el porcentaje de visitas que se convierten en ventas.
            .tarjeta-flip__contenido.p-4(style="background-color:#D9ECFF;")
              h4 Incrementar la tasa de conversión
              ul.lista-ul--color.mt-4.mb-0
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Para mejorar la tasa de conversión es necesario que, con el mismo tráfico, se incrementen las ventas. 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Mejorar la calidad de los visitantes del sitio web.
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Medir la tasa de rebote. 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Revisar la propuesta de valor (USP). 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Mejorar la experiencia de usuario. 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Promocionar las experiencias turísticas destacadas.
      .col-xl-4.mb-4.mb-xl-0.col-lg-6.col-md-8.col-10
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(style="background-color:#E4F4AE;")
              .p-3.d-flex.align-content-center.flex-wrap(style="background-color:#CEEA6D;min-height:250px;")
                figure
                  img(src="@/assets/curso/tema3/4.svg" alt="Imagen decorativa")
              .p-4(style="background-color:#E4F4AE;")
                h5 Aumentar el pedido medio
                p.mb-0 Cuanto más compra cada cliente, más alto será nuestro valor del volumen ventas.
            .tarjeta-flip__contenido.p-4(style="background-color:#E4F4AE;")
              h4 Aumentar el pedido medio
              ul.lista-ul--color.mt-4.mb-0
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Para mejorar el pedido promedio se debe lograr aumentar el valor de las ventas con el mismo número de pedidos.
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Conseguir que el cliente incorpore más productos o servicios en su pedido.
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Lograr que el cliente compre una experiencia turística superior a la prevista. 
                li.d-flex
                  i.lista-ul__vineta(style="color:#EB6F2D;")
                  div Conseguir que el cliente adicione un servicio o producto complementario, a la experiencia turística que compró.
    
    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center;")
        .cajon.color-primario.p-4(style="background-color:#FFF3D6;")
          p.mb-0 Otro factor importante cuando hablamos de tráfico en el comercio electrónico, es el embudo de ventas (#[em funnel]). El embudo representa las diferentes fases del proceso comercial por el que transita un cliente potencial, hasta convertirse en un cliente fidelizado. Se necesita que los usuarios que navegan en Internet visiten el sitio web de la empresa, permanezcan en la página y compren alguna de las experiencias turísticas, para esto se necesita desarrollar técnicas de promoción y ventas diferentes para cada fase. 
      .col-md-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in-left" alt="Imagen que muestra un grupo de personas en el borde cayendo hacia embudo dividido por categorías como atracción, interacción, conversión y al final en fidelización quedan algunas personas.")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1  Indicadores claves de rendimiento (KPI) aplicados al comercio electrónico
    
    p(data-aos="zoom-in") La empresa turística debe medir y analizar la efectividad del sitio web y/o la tienda en línea, para esto debe definir una serie de métricas que reflejen de forma cuantitativa el rendimiento del negocio. Las mediciones en Internet son un tema de constante revisión y básicamente se pueden realizar desde dos puntos de vista, sin embargo, el objetivo de estos enfoques es determinar la audiencia del sitio en Internet, como se verá a continuación:

    .tarjeta.tarjeta_slyder2.tarjeta--azul.p-4.p-lg-5.pb-lg-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Enfocado a los usuarios
            p.mt-4 Es decir, medir el comportamiento de un grupo de usuarios por medio de una muestra y cuyos resultados se aplican a la totalidad del grupo de usuarios de estudio. 
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema3/7.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Enfocado en el sitio
            p.mt-4 De manera censal enfocado en el sitio, que consiste en medir todo el tráfico que registra el sitio.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema3/8.png' alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Adicional a los datos de audiencia, existen métricas e indicadores importantes que se deben tener en cuenta para mejorar los resultados del sitio web; los siguientes serían los más relevantes:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Ventas (carritos de compra completados).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Porcentaje de compradores sobre total de visitantes únicos.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Promedio de carritos abandonados.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Porcentaje de conversión desde campañas.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Permanencia, porcentaje de tiempo inferior a 60 segundos.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Porcentaje de usuarios leales.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Captación, porcentaje de nuevas visitas.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Palabras clave.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Dominios de procedencia desde donde acceden.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Porcentaje de conversión desde búsqueda desestructurada.
    
    p.mt-5(data-aos="zoom-in") A continuación, se presentan algunos de los informes más utilizados que permiten tener datos para mejorar la gestión del sitio web de experiencias turísticas:

    figure.mt-5
      img(src="@/assets/curso/tema3/9.svg" data-aos="zoom-in-up" alt="Imagen que muestra los informes mas utilizados que permiten tener datos para sitios web y se describen parte inferior.")

    Separador.mt-5

    .titulo-segundo 
      h2#t_3_2 3.2  Principales métricas aplicadas al comercio exterior
    
    p(data-aos="zoom-in") Para realizar la medición del sitio web turístico, primero es necesario que estén definidos los estándares del sector sobre cómo realizar esas mediciones y cómo se reportan los datos de audiencia. Es por esto que se definen las métricas y las prácticas aceptables.
    p.mt-4(data-aos="zoom-in") A continuación, se presentan las principales métricas que se utilizan en las mediciones de audiencias en sitios de Internet y cómo se obtienen.

    .row.mt-5
      .col-md-6.mb-4.mb-md-0 
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Visitas") Es la métrica más común para medir el tráfico de un sitio en Internet.  Se refiere al número de visitantes únicos (usuario diferente) que recibe el sitio.
          p.text-small(numero="2" titulo="Páginas vistas") Total de visualizaciones de páginas registradas.
          p.text-small(numero="3" titulo="Duración de las visitas") Tiempo medio de las visitas realizadas.
          p.text-small(numero="4" titulo="Duración de las páginas vistas") Tiempo medio de las páginas realizadas.
          p.text-small(numero="5" titulo="Páginas vistas por sesión") Es el resultado de dividir el número de páginas vistas por el número de visitas.
      .col-md-6
        figure
          img(src="@/assets/curso/tema3/10.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Es importante definir las métricas y analizar los resultados para poder tomar las decisiones de #[em marketing] adecuadas y lograr que nuestra tienda virtual tenga un buen desempeño.
    p.mt-4(data-aos="zoom-in") Adicionalmente, hay otras métricas para medir la publicidad #[em online], como se observa a continuación:

    .row.mt-5
      .col-md-6.mb-4.mb-md-0 
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Impresiones") Total de veces que un formato publicitario fue mostrado en una página web en un período de tiempo. 
          p.text-small(numero="2" titulo="Clic") Total de veces que el usuario hizo clic en dicho formato publicitario.
          p.text-small(numero="3" titulo="Tasa de clic") Porcentaje de veces que un usuario expuesto a un formato publicitario hizo clic en el mismo.
          p.text-small(numero="4" titulo="Coste por clic (CPC)") Producto de dividir el dinero invertido en una determinada campaña entre el número de clics obtenido. 
      .col-md-6
        figure
          img(src="@/assets/curso/tema3/11.png" data-aos="zoom-in-left" alt="Imagen decorativa")

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3  Herramientas de medición de comercio electrónico
    
    p(data-aos="zoom-in") Para obtener los datos de audiencia, se utilizan distintas herramientas estadísticas de analítica web disponibles en el mercado; algunas son de pago y otras gratuitas. A continuación, se mencionan algunas de las herramientas más utilizadas.

    .col-xl-10.m-auto.mt-5
      ImagenInfograficaB.infografiab5.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/12.svg' data-aos="zoom-in-up" alt="Imagen decorativa")
        div(x="27.5%" y="16.5%" tooltip="Ver más" numero="1")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 At Internet
              p.mt-4 Empresa francesa creada en 1996 especialista en la medición de audiencia y en el rendimiento de los sitios web, móviles, aplicaciones y redes sociales. 
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/13.svg" alt="Logo comercial que representa a At Internet.")
        div(x="68%" y="36%" tooltip="Ver más" numero="2")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 Omniture SiteCatalyst
              p.mt-4 Unidad comercial de #[em marketing] en línea y análisis #[em web] en Orem, Utah, EE. UU. Fue adquirido por Adobe Systems en 2009.
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/14.svg" alt="Logo que representa a Omniture SiteCatalyst.")
        div(x="92%" y="38.5%" tooltip="Ver más" numero="3")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 Webtrends
              p.mt-4 Empresa privada con sede en Portland, Oregón, Estados Unidos. Proporciona análisis digital, optimización y software relacionado con el #[em marketing] digital y comercio electrónico. Brinda servicios a aproximadamente 2.000 empresas.
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/15.svg" alt="Logo que representa a Webtrends.")
        div(x="39.5%" y="59%" tooltip="Ver más" numero="4")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 Weboscope
              p.mt-4 Empresa francesa diseñada no tanto para ofrecer una simple medición del tráfico de los sitios web para su reconocimiento público, como para realizar un análisis exhaustivo, integral y personalizado de la actividad de los internautas dentro de cada web, al servicio de los intereses particulares de las empresas usuarias de la herramienta.
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/16.svg" alt="Logo que representa la empresa a Weboscope.")
        div(x="8.8%" y="70.5%" tooltip="Ver más" numero="5")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 Google Analytics
              p.mt-4 Herramienta de analítica web de la empresa Google lanzada el 14 de noviembre de 2005. Ofrece información agrupada del tráfico que llega a los sitios web según la audiencia, la adquisición, el comportamiento y las conversiones que se llevan a cabo en el sitio web.
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/17.svg" alt="Logo que representa a Google Analytics.")
        div(x="78.2%" y="83.5%" tooltip="Ver más" numero="6")
          .row
            .col-lg-8.col-md-6.mb-4.mb-md-0
              h5 Yahoo web Analytics
              p.mt-4 Herramienta de analítica web de la empresa Google lanzada el 14 de noviembre de 2005. Ofrece información agrupada del tráfico que llega a los sitios web según la audiencia, la adquisición, el comportamiento y las conversiones que se llevan a cabo en el sitio web.
            .col-lg-4.col-md-6  
              figure
                img(src="@/assets/curso/tema3/18.svg" alt="Logo que representa a Yahoo Web Analytics.")

    p.mt-5(data-aos="zoom-in") Realizar mediciones es un aspecto clave para mejorar el desempeño del sitio en Internet de experiencias turísticas, las herramientas de analítica web, proporcionan datos que permiten implementar un proceso de mejora continua, lo importante es poder identificar la herramienta que se ajusta a la necesidad de la empresa turística. 
 



    
   





      
      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
<style lang="sass">
.tarjeta_slyder2
  background: url(../assets/curso/tema3/6.png)
  background-size: cover
  background-position: center
.slyder-a__bullets__item
  background-color: #F1B488
  border: 1px solid #F1B488
.slyder-a__bullets__item--active
  background-color: #E44E00
  border: 1px solid #E44E00 !important
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #DBEDF8
.linea-tiempo-d__item--selected  .linea-tiempo-d__item__number.tarjeta.tarjeta--gris
  background-color: #DBEDF8
.linea-tiempo-d__item--selected  .linea-tiempo-d__item__number.tarjeta.tarjeta--gris span
  color: #12263F
.infografiab5 .img-infografica-b__item__dot
  padding: 1.5rem
  left: -11px
.infografiab5 .img-infografica-b__modal
  background-color: #004E99
.infografiab5 .img-infografica-b__modal__btn-cerrar i
  color: #fff
</style>
