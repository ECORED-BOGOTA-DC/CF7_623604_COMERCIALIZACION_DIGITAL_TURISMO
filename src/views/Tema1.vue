<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 1
      h1 Comercio electrónico
    
    .bloque-texto-g.color-secundario.bloque1.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El uso de Internet y de las redes sociales se ha acelerado durante los últimos años. La gran mayoría de las personas ha realizado alguna compra de productos o servicios por medios electrónicos; comprando regalos, medicamentos, ropa, pasajes, reservas en hoteles, electrodomésticos, etc. La lista es interminable y los motivos por los que lo se hace por medios electrónicos también. Desde el punto de vista de las organizaciones, el comercio electrónico ofrece una nueva forma para organizar sus actividades y hacer negocios; tener presencia en medios digitales es una ventaja para las empresas de todos los sectores económicos que les permite llegar a un mercado en crecimiento y alcanzar a una comunidad a la que difícilmente podrían llegar con un local físico.
    
    p.mt-5(data-aos="zoom-in") En la actualidad se ha identificado la importancia que ha tomado el comercio electrónico, cada día más gente ha optado por esta forma de comprar y, más empresas lo utilizan como estrategia de comercialización. El desarrollo de las TIC ha facilitado nuevas formas de concebir los negocios, empresas que no cuentan con el capital suficiente para invertir en un sitio físico han encontrado un espacio para poder promocionar y comercializar sus productos y/o servicios, obteniendo muy buenos resultados y hasta el negocio más pequeño ha encontrado una ventaja al tener presencia en Internet.	

    p.mt-4(data-aos="zoom-in") Este crecimiento del comercio electrónico se podrá conocer en el siguiente recurso: 

    .tarjeta.tarjeta--gris.p-4.p-lg-5.mt-5(style="background-color:#F8F8F8;")
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1920")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/2.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p A principios de 1920 apareció en EE. UU. la venta por catálogo, impulsada por empresas mayoristas. Este sistema de venta, revolucionario para la época, consistía en un catálogo con fotos ilustrativas de los productos a vender.
            p.mt-4 El sistema permitía tener mejor llegada a las personas (evitaba la necesidad de tener que atraer a los clientes hasta los locales de venta), lo que posibilitó a las tiendas tener clientes en zonas rurales (gran masa de personas dedicadas al campo).
        .row(titulo="1951")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/12.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p La venta por catálogo tomó mayor impulso con la aparición de las tarjetas de crédito; las cuales permitirían determinar un tipo de relación de mayor anonimato entre el cliente y el vendedor.
            p.mt-4 Esto fue posible gracias a la iniciativa de algunas empresas financieras que crearon este producto en los años 50. Actualmente, el mayor porcentaje de transacciones en línea se realizan utilizando esta forma de pago.
        .row(titulo="1960")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/13.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p En el año 1960 se desarrolló el sistema EDI (Electronic Data Interchange), este se podría considerar como el inicio del comercio electrónico y permitía las transacciones electrónicas y el intercambio de información comercial entre empresas.
        .row(titulo="1970")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/14.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p En ese momento aún no habían aparecido las computadoras como tal. No fue hasta la década de los años 1970 que surgieron las primeras relaciones comerciales que utilizaban un ordenador, pero aún tenían un servicio muy limitado. No fue hasta el 1980 que se modernizó el comercio por catálogo con la ayuda de la televisión con las “televentas”.
        .row(titulo="1981")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/15.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p En 1981, se realiza la primera venta por Internet. La empresa Thompsons Holidays interconectó a sus agentes de viajes para que tuvieran acceso al catálogo y ofrecieran a sus clientes los servicios disponibles.
        .row(titulo="1983")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/16.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p En 1983, se acuñó el término #[em electronic e-commerce].
        .row(titulo="1991")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/17.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p A partir del año 1991 la NSF (National Science Foundation) permite el uso de Internet con fines comerciales. Es durante esta década cuando empiezan a surgir importantes portales de venta #[em online] tales como Amazon o Ebay. Adicionalmente, Netscape desarrollaría el protocolo SSL, implicando ello un gran avance en términos de seguridad a la hora de compartir datos e información personal.
        .row(titulo="1995")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/18.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p El proceso de globalización en el que estamos inmersos lleva a las Naciones Unidas a la aprobación de una Ley Modelo y de una guía para su incorporación a los ordenamientos jurídicos internos de los diferentes países. El carácter gremial del derecho mercantil ha sido reemplazado por un comercio electrónico de ámbito mundial. En 1995 se crea la Organización Mundial de Comercio (OMC), a fin de normar y regular los procesos de intercambio comercial entre los países.
        .row(titulo="1997")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/19.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p Es recién a fines del siglo XX cuando se puede hablar del inicio del comercio electrónico, cuando las primeras empresas introdujeron un nuevo canal de ventas basado en Internet, y donde nuevas empresas surgen como un modelo alternativo de negocios, siendo no las primeras pero sí las más exitosas hasta ahora Amazon.com, eBay, y otras.
            p.mt-4 En 1997, Coca-Cola desarrolla la posibilidad de comprar productos por medio de móviles y SMS.
        .row(titulo="1998")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/20.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p En 1998 aparece Google, se funda PayPal y aparece la opción de compra y descarga de música a través de la Ritmoteca.
        .row(titulo="2000")
          .col-md-6.col-lg-5.mb-4.mb-md-0(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema1/21.svg' alt="Imagen decorativa")
          .col-md-6.col-lg-7(style="place-self:center;")
            p El impulso a este nuevo modelo de negocios se vio bruscamente frenado por los eventos financieros ocurridos a finales del año 2000. El problema fue una corriente especulativa muy fuerte que se dio entre 1997 y 2001, en la cual las bolsas de valores de naciones occidentales vieron un rápido aumento de su valor debido al avance de las empresas vinculadas al nuevo sector de Internet y a la llamada Nueva Economía.
    
    p.mt-5(data-aos="zoom-in") Con el inicio del siglo XXI, llegaron nuevas tendencias que se convirtieron en herramientas para fortalecer el desarrollo del comercio electrónico. La aparición de las redes sociales, iTunes y el desarrollo de dispositivos iPhone y Android, han cambiado la forma de comunicarnos, entretenernos y simplificado la forma de comprar y hacer negocios. 
    p.mt-4(data-aos="zoom-in") Actualmente la gran mayoría de las tiendas físicas tienen una versión en línea, incluso algunas solo tienen presencia en línea, permitiéndonos poder comprar todo tipo de productos con tan solo un par de clics.

    .col-xl-5.m-auto.col-lg-6.mt-5
      .cont_cita1.d-flex(data-aos="flip-up")
        i.fas.fa-quote-left(style="color:#3BC192;font-size:28px;")
        h5.mt-2.p-2 El comercio electrónico es un proceso de compra, venta o intercambio de bienes servicios e información por medio de comunicación electrónicos, en donde la mayoría de las transacciones se realizan mediante pagos en línea y sin que exista una relación física, entre las partes implicadas. 
        .text-end(style="align-self:end;")
          i.fas.fa-quote-right(style="color:#3BC192;font-size:28px;")
    
    p.mt-5(data-aos="zoom-in") Con la actual infraestructura que ofrece Internet, en donde se pueden interconectar una gran variedad de herramientas (páginas web, redes sociales, #[em emails], chats, servicios de audio y videoconferencia, grupos de noticias e información, transferencia de archivos, etc.), las organizaciones del sector turístico tienen una gran variedad de medios para conectar con clientes y realizar transacciones. 

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small Podrás conocer un poco más sobre este interesante tema  en el video realizado por el SENA, que se encuentra en el enlace: 
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5079y-YZe7A" target="_blank")
              span Ver video
              i.fas.fa-play
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Características
    
    .col-xl-10.m-auto
      .row
        .col-lg-4.d-none.d-lg-block.pe-0
          .h-100(style="background-color:#E9F6FF;")
        .col-lg-8.ps-lg-0
          .h-100.p-4.p-md-5(style="background-color:#FFB338;")
            p.mb-0(data-aos="zoom-in") El comercio electrónico se da mediante plataformas virtuales, por lo que no requerir de un espacio físico es una gran ventaja y, además, baja los costos, las anteriores son algunas de sus características, sin embargo, en el siguiente recurso se explicarán algunas otras:
    
    .row.mt-5
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Ubicuidad
              p Podemos realizar la compra desde cualquier parte del mundo y a cualquier hora del día.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/5.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Alcance global
              p Cada empresa establece el total de usuarios o clientes que su negocio en línea puede obtener de acuerdo con sus límites y normas.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/6.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Estándares
              p Los estándares de Internet son mundiales, por lo que ello disminuye los costos de entrada de las empresas en el mercado, así como el esfuerzo de búsqueda por parte de los consumidores.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/7.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Multimedia en la web
              p La red permite incluir más recursos, con el fin de propiciar la acción de comprar, de modo que los productos y servicios se acompañan de imágenes, descripciones, vídeos explicativos, opiniones de los compradores, etc.
    .row.mt-xl-4
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/8.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Interactividad
              p Permite una comunicación en ambos sentidos entre el vendedor y el comprador.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/9.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Densidad de la información
              p Se refiere a la cantidad y calidad de la información que está disponible para todos los participantes en el mercado.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Personalización
              p Permite personalizar la información que se muestra al consumidor en función de aspectos tales como sus preferencias, compras anteriores, búsquedas recientes, etc.
      .col-xl-3.mb-4.mb-xl-0.col-md-6
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/11.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5.text-center(style="background-color:#FEBBAC;")
              h5 Adecuación
              p Es la capacidad de cambiar el producto o servicio entregado, considerando las preferencias de comportamiento del consumidor.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Ventajas y desventajas
    
    p(data-aos="zoom-in") El comercio electrónico ofrece a las empresas del sector turístico la posibilidad de llegar a un gran mercado utilizando un dispositivo que permite conexión a Internet. Claro que esta posibilidad implica una variedad de ventajas y desventajas que se deben tener en cuenta.
    p.mt-4(data-aos="zoom-in") Dentro de las principales ventajas, se pueden resaltar:

    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Abierto 7/24")
        p Por estar en un medio en línea, no existe un horario de apertura y cierre.
      .row(titulo="Menos costo de mantenimiento")
        p Una tienda #[em online] no requiere de un espacio físico, aunque sí necesita de otro tipo de infraestructura, el costo es mínimo en comparación con los de una tienda física.
      .row(titulo="Inventario automatizado")
        p Esto permite ahorrar costos de mano de obra, ya que estará todo digitalizado.
      .row(titulo="Ubicación")
        p En Internet no existen fronteras, por eso no importa desde cuál punto estemos ofreciendo las experiencias turísticas.
      .row(titulo="Portafolio de productos")
        p En el comercio electrónico podemos ordenar los productos y servicios en diferentes categorías, con la opción de realizar una búsqueda.
      .row(titulo="Ahorro de tiempo")
        p Comprar en línea, permite ganar tiempo, ya que no tenemos que desplazarnos hasta un lugar físico.
      .row(titulo="Mejor información al consumidor")
        p En el sitio web, el cliente tiene la descripción del producto y/o servicio acompañado, videos, reseñas y opiniones realizadas por otros compradores.
 
    p.mt-5(data-aos="zoom-in") Estos son algunas de las desventajas que se deben considerar:

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones.p-4(titulo="Competencia" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Internet permite poder contactar clientes de cualquier parte del mundo, por lo que hay mucha competencia.
      .tarjeta.color-acento-botones.p-4(titulo="Desconfianza" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Hay personas que desconfían a la hora de suministrar los datos de su tarjeta bancaria para realizar las compras o reservas en línea.
      .tarjeta.color-acento-botones.p-4(titulo="Probar el producto <br> antes de la compra" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Algunos clientes prefieren ver o probar el producto antes de comprarlo. Lo que es imposible por Internet.
      .tarjeta.color-acento-botones.p-4(titulo="Comparar precios" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") En la red existen muchos comparadores y con una buena búsqueda se podría encontrar la experiencia turística deseada a un menor precio. 
      .tarjeta.color-acento-botones.p-4(titulo="Entrega del producto" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Cuando se contrata una empresa de mensajería externa, los problemas que se puedan presentar en las entregas (demora, pérdida o daños) son, en su mayoría, asumidos por la empresa que vende el producto
      .tarjeta.color-acento-botones.p-4(titulo="Fallas técnicas" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") El sitio web puede fallar, colapsar o puede ser atacado. Esto puede provocar la pérdida de clientes.
      .tarjeta.color-acento-botones.p-4(titulo="Disponer de un <br> dispositivo electrónico" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Si los clientes no tienen acceso a un dispositivo con conexión a Internet, no podrán comprar en un sitio web.
      .tarjeta.color-acento-botones.p-4(titulo="Servicio posventa" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Si el servicio posventa no es de calidad ni rápido y efectivo, puede ocasionar una experiencia negativa en los clientes.







    
   





      
      
</template>

<script>
export default {
  name: 'Tema1',
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
.bloque1.bloque-texto-g.color-secundario
  background-color: #3D672F
.cont_cita1, .cont_cita1 *
  position: relative
.cont_cita1:before
  content: ''
  position: absolute
  width: 70%
  right: 0
  bottom: 13%
  height: 47%
  background-color: #C3E2FD
.tarjeta-flip__img
  background-size: 100% 100%
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #FFF4E1 !important
  border-bottom: 0px !important
.acordion__accion__btn--b
  border: 1px solid #2B95F9
  background-color: #fff
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: #2B95F9
.acordion .tarjeta.tarjeta--azul
  border-bottom: 1px #FFE4B9 solid
  background-color: transparent
.tarjeta-flip.color-primario .tarjeta-flip__img
  background-color: #B6E1FD
</style>
