<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1 Plataformas tecnológicas aplicadas al turismo
    
    p(data-aos="zoom-in") Cada día son más los usuarios que utilizan las plataformas tecnológicas para programar sus experiencias turísticas. En muchos casos, estas experiencias se programan de acuerdo con la información que otros usuarios proponen u opinan por medio de estas herramientas.
    p.mt-4(data-aos="zoom-in") Como recordará, en el componente formativo 01, denominado “Estructuración de la experiencia turística”, ya se ha revisado lo correspondiente a las OTA, ahora se invita a consultar el numeral 1.11.1 Online Travel Agency – OTA. Sin embargo, a continuación, presentamos una breve descripción al respecto:

    .col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#EBF7C5;" data-aos="flip-up")
        p.mb-0 Las Agencias de Viaje conocidas como OTA por su definición en inglés (#[em Online Travel Agency]). Son sitios web dedicados principalmente a la venta de servicios dentro del sector de viajes. Estos servicios son ofrecidos por sus socios o proveedores entre los cuales podemos encontrar: hoteles, hostales, aerolíneas, empresas de alquiler de automóviles, organizadores de eventos y más; quienes le pagan una comisión a la OTA al momento de recibir una reserva por parte del cliente a través de su portal.
    
    p.mt-5(data-aos="zoom-in") Internet les permite reunir la oferta mundial de viajes en un solo lugar para que los turistas reserven sus propios viajes #[em online]. Son una herramienta de autoservicio que ha cambiado la manera en que se buscan y reservan los viajes, porque en vez de tener que recurrir a una agencia en físico, los viajeros tienen mayor facilidad para planear y reservar vuelos, alojamiento y visitas guiadas por su cuenta.
    p.mt-4(data-aos="zoom-in") La mayoría de las OTA actúan como una red social donde los turistas aportan experiencias de viajes, imágenes y opiniones de lo que vivieron. 
    p.mt-4(data-aos="zoom-in") El proceso de compra en este tipo de sitios ocurre la mayoría de las veces mediante el canal de reservas por Internet; es el mismo usuario el que busca la mejor opción al precio que más le convenga. Las principales OTA son:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 1.
        span Principales OTA en el mundo
      figure.mt-4
        img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up" alt="Figura que muestra los  principales OTA en el mundo como son: Agoda, Airbnb, Booking.com, Expedia, HostelWorld, Despegar, Price Travel, Tiquetes Baratos, entre otros.")
        p.text-small Nota. Elaboración propia con base en Hotelmize.com y Cludbeds.com
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-5.mb-4.mb-lg-0.pe-lg-0
          figure
            img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-right" alt="Imagen que muestra herramientas tecnológicas del sector turístico como son: trivago, Tripadvisor, Hipmunk, Google, Skyscanner, Kayak, Hotels Combined, entre otras.")
        .col-lg-7.ps-lg-0
          .h-100.p-4.d-flex.align-content-center(style="background-color:#B6E1FD;" data-aos="zoom-in-left")
            p.mb-0 Otra de las herramientas tecnológicas disponibles para las empresas del sector turístico son los metabuscadores que son herramientas de búsqueda avanzada que utilizan los datos originados en la combinación de los motores de búsqueda como Google y sitios web de OTA, de reservas y páginas web de hoteles, para agrupar y exhibir las tarifas actualizadas de muchos hoteles diferentes en un destino determinado y ofrecer al huésped la posibilidad de comparar las tarifas de diferentes opciones de alojamiento.
    
    p.mt-5(data-aos="zoom-in") Estos resultados exhiben precios según el producto o servicio buscado. En última instancia, esto hace que el proceso de reserva sea más cómodo para los viajeros y su proceso de viaje más ágil y sencillo; así, en lugar de ir al sitio web de varias agencias de viajes en línea para buscar y comparar precios, los viajeros pueden usar solamente una herramienta que es el metabuscador; los principales dispuestos en la web son:

    ImagenInfografica.color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" alt="Imagen que muestra 3 metabuscadores en turismo, los cuales son:  trivago, Kayak y Google Hotel Ads, descritos en la parte inferior de dicha imagen.")
      .tarjeta.color-acento-botones.p-4(x="12%" y="93%" numero="+")
        p.mb-0.text-white Es uno de los metabuscadores hoteleros por excelencia en España.
      .tarjeta.color-acento-botones.p-4(x="50%" y="93%" numero="+")
        p.mb-0.text-white Busca en cientos de webs de viajes a la vez y muestra a los viajeros la información que necesitan para elegir el vuelo, hotel, carro de alquiler o paquete de viaje perfectos.
      .tarjeta.color-acento-botones.p-4(x="89%" y="93%" numero="+")
        p.mb-0.text-white Es una plataforma #[em.text-white online], como una evolución de Google Hotel Finder, especialmente para la distribución hotelera que dirige la audiencia en busca por alojamiento directamente para las reservas o ventas directas.
    
    p.mt-5(data-aos="zoom-in") Adicionalmente a lo anterior, también se debe tener en cuenta que se ha incrementado el uso de herramientas tecnológicas en el sector gastronómico y de eventos, como, por ejemplo, para presentar un menú virtual a través de códigos QR, los pedidos a domicilio o realizar un evento virtual. A continuación, se presentan algunas de las herramientas digitales más utilizadas en Colombia:

    .row.mt-5(@click="mostrarIndicador = false")
      .col-lg-3.mb-4.col-md-6
        a.indicador__container(@click="modal1 = true")
          figure
            img(src="@/assets/curso/tema2/4.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-md-6.col-lg-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/8.svg' alt="Logo comercial que representa a Rappi.")
            .col-md-6.col-lg-8
              p.text-white Nació en el año 2015, cuenta con más de 4.000 establecimientos en su plataforma digital de los cuales la mayoría hace parte del sector gastronómico; algunos de esos establecimientos son cocinas ocultas que solo comercializan comidas a domicilio. Le permite al usuario hacer seguimiento de su pedido y tener mayor eficiencia del uso del tiempo. Opera en Colombia, México, Argentina, Uruguay, Chile y Perú.
      .col-lg-3.mb-4.col-md-6
        a.indicador__container(@click="modal2 = true")
          figure
            img(src="@/assets/curso/tema2/5.svg" data-aos="flip-up" alt="Imagen decorativa")
          .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-md-6.col-lg-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/9.svg' alt="Logo comercial que representa a iFood.")
            .col-md-6.col-lg-8
              p.text-white Creada en el año 2011 en Brasil, llegó a Colombia a principios del año 2018 y tiene servicio en 7 ciudades principales como Bogotá, Cali, Medellín, Bucaramanga, Cartagena, Barranquilla, Manizales, Santa Marta, Pereira, entre otras. Actualmente, está prestando sus servicios en países de América Latina, como Argentina y México.
              p.mt-4.text-white Cuenta con más de 4.000 establecimientos en Colombia en su plataforma digital. #[br] El objetivo de esta aplicación es brindar oportunidades a los negocios que no cuentan con una gran infraestructura para revolucionar la gastronomía a través de un canal comercial diferente a la venta presencial.
      .col-lg-3.mb-4.col-md-6
        a.indicador__container(@click="modal3 = true")
          figure
            img(src="@/assets/curso/tema2/6.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-md-6.col-lg-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/10.svg' alt="Logo comercial que representa a Uber Eats.")
            .col-md-6.col-lg-8
              p.text-white Llegó a Colombia en el año 2016 y tiene actualmente más de 3.000 restaurantes en su plataforma digital. Uber Eats ofrece a los usuarios eficacia, eficiencia y velocidad. El plus de esta aplicación es la inmediatez, ya que los repartidores o domiciliarios realizan el 50 % de sus entregas en un tiempo de 30 minutos o menos, consiguiendo clientes felices y satisfechos con el servicio.
      .col-lg-3.mb-4.col-md-6
        a.indicador__container(@click="modal4 = true")
          figure
            img(src="@/assets/curso/tema2/7.svg" data-aos="flip-up" alt="Imagen decorativa")
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-md-6.col-lg-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/11.svg' alt="Logo comercial que representa a DiDi Food.")
            .col-md-6.col-lg-8
              p.text-white Es una plataforma profesional de entrega de comida que conecta clientes, tiendas y repartidores. Didi Food se ha enfocado en apoyar pequeños y medianos negocios en tiempos de reactivación económica.
              p.mt-4.text-white  Uno de los objetivos de la marca es que los usuarios encuentren, a través de la app, una amplia variedad de restaurantes, opciones que nunca antes habían estado disponibles en plataformas digitales y con una de las tasas de servicio más bajas del mercado.
    
    .col-xl-8.m-auto.mt-5.col-lg-10
      figure
        img(src="@/assets/curso/tema2/12.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Además, se dispone de varias plataformas digitales para llevar a cabo eventos virtuales, tal como se ha revisado durante este mismo programa anteriormente; las principales son:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 2.
      span Principales plataformas para desarrollar eventos virtuales

    .row.mt-5
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em Zoom]
        figure
          img(src="@/assets/curso/tema2/13.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a zoom.")
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em Google Meet]
        figure
          img(src="@/assets/curso/tema2/14.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a Google Meet.")
    .row.mt-md-5
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em Microsoft Teams]
        figure
          img(src="@/assets/curso/tema2/15.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a Microsoft Teams.")
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em CrowdCast]
        figure
          img(src="@/assets/curso/tema2/16.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a cowdcast.")
    .row.mt-md-5
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em LiveStorm]
        figure
          img(src="@/assets/curso/tema2/17.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a livestorm.")
      .col-md-6.mb-4.mb-md-0
        p.text-center #[em StreamYard]
        figure
          img(src="@/assets/curso/tema2/18.svg" data-aos="zoom-in-up" style="max-height:200px;max-width:450px;" alt="Imagen que muestra el logo comercial que representa a StreamYard.")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1  Generalidades de redes sociales
    
    p(data-aos="zoom-in") Una red social es una estructura en donde interactúan diferentes actores que se relacionan de acuerdo con algún objetivo común (relación profesional, amistad, negocios, parentesco, etc.), En Internet las redes sociales son sitios diseñados para favorecer la interrelación de sus miembros, que tienen intereses o actividades comunes y el intercambio de información.

    .col-xl-10.m-auto.mt-5
      .row(style="background-color:#D4EAFE;" data-aos="flip-up")
        .col-md-2.col-2.text-center
          i.fas.fa-quote-left(style="color:#FFB338;font-size:28px;top:-15px;position:relative;")
        .col-md-8.col-8
          .p-4
            p.mb-0.text-center #[em Social media] es diferente a la red social. Social media se refiere a los medios sociales utilizados, como por ejemplo canales como Facebook, LinkedIn, Instagram, entre otros en donde se puede publicar contenido para conversar y socializar. En cambio, red social, es el acto de construir comunidad, audiencias, seguidores, usuarios o grupos de personas.
        .col-md-2.col-2.text-center(style="place-self:end;")
          i.fas.fa-quote-right(style="color:#FFB338;font-size:28px;bottom:-16px;position:relative;")
    
    p.mt-5(data-aos="zoom-in") Para los usuarios de los canales de social media, es importante poder identificar cuáles son las temáticas, contenidos, formatos o medios utilizados porque estos elementos son los que les permiten generar una afinidad, de acuerdo con el objetivo común y se convierten en los espacios mediante los cuales se encuentra o comparte información. Estas afinidades son las que llevan a que se diferencien categorías en las redes sociales convirtiendo a los usuarios en productores y consumidores de contenidos, lo que se conoce como #[em prosumers].

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small El tema de las redes sociales es de interés para la visión general del comercio electrónico. Por ello, te invitamos a ver el siguiente video del SENA que trata sobre perfiles digitales en comunidades en línea y redes sociales:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=mATxSe_h5r4" target="_blank")
              span Ver video
              i.fas.fa-play
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .row
        .col-lg-8.col-md-6.pe-md-0
          .h-100.p-4(style="background-color:#FFECBE;" data-aos="zoom-in-right")
            p Las redes sociales y sus audiencias están clasificadas por tipos, de esta forma se puede decidir cuáles son las más aptas para nuestras necesidades y requerimientos, de acuerdo con el interés y los objetivos que tengamos. 
            p.mt-4.mb-0 Algunos de estos tipos se encuentran descritos en el siguiente recurso, le invitamos a consultarlo a continuación:
        .col-lg-4.col-md-6.ps-md-0
          .h-100.p-4(style="background-color:#FFF9EB;" data-aos="zoom-in-left")
            figure
              img(src="@/assets/curso/tema2/19.svg" alt="Imagen que muestra logos de las diferentes redes sociales como Facebook, Messenger, Instagram, WhatsApp, Twitter, Pinterest, TikTok, YouTube, LinkedIn, Spotify, entre otras.")
    
    .col-xl-10.m-auto.mt-5
      ImagenInfograficaB.infografiab1.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/20.svg' data-aos="zoom-in-up" alt="Imagen decorativa")
        div(x="9.5%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/21.png" alt="Imagen que muestra logos de las redes sociales masivas como YouTube, Friendster, Huenti, Facebook, Orkut, Myspace.com, entre otras.")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales masivas
              p(style="color:#12263F !important;") Dirigidas al público masivo en general, no se centran en un tema específico. Son las más comunes entre la población. Su principal función es la de establecer relaciones entre sus miembros, que pueden o no conocerse previamente. Las más comunes son Facebook o Twitter.
        div(x="25.5%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/22.svg" alt="Imagen que muestra logos de las redes sociales profesionales como Viadeo, LinkedIn, Xing, Neurona.com, Myspace.com, Flickr, entre otras.")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales profesionales
              p(style="color:#12263F !important;") Se estructuran a través de contenidos orientados a temas laborales o empresariales, son útiles para desarrollar relaciones, recomendaciones y búsqueda de oportunidades laborales o de negocios. Algunas de las más conocidas son LinkedIn o Xing.
        div(x="41.5%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/23.png" alt="Imagen que muestra aspectos que hacen alusión a las rede sociales de nicho o temáticas.")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales de nicho o temáticas
              p(style="color:#12263F !important;") Se basan en un tema concreto y establecen relaciones entre usuarios interesados en él. Algunos ejemplos son Flickr, Dribble o Tripwolf.
        div(x="57.5%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/24.png" alt="Imagen que muestra logos de las redes sociales de geolocalización como Foursquare, Facebook Places, Gowalfa, Google places, entre otras.")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales de geolocalización
              p(style="color:#12263F !important;") Llevan a socializar por medio de la localización física de los usuarios. Algunas de las más conocidas son Waze o Foursquare.
        div(x="73%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/25.png" alt="Imagen que muestra logos de redes sociales de contenidos como Twitter, Facebook, YouTube, Google, entre otras.")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales de contenidos
              p(style="color:#12263F !important;") En esta categoría los elementos principales para los usuarios son la generación de contenidos y formatos para compartir. Las más importantes son YouTube, Instagram, Vimeo, Pinterest.
        div(x="90%" y="70%" tooltip="Ver más" numero="+")
          .row
            .col-lg-4.col-md-6.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema2/26.png" alt="Imagen que muestra logos de redes de entretenimiento como Instagram, Facebook, YouTube, entre otras. ")
            .col-lg-8.col-md-6
              h5(style="color:#12263F !important;") Redes sociales de entretenimiento y ocio
              p(style="color:#12263F !important;") En esta categoría las relaciones de los usuarios, se basan en sus gustos y afinidades, podemos mencionar a Tripadvisor, Runtastic, Strava o Tinder.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small  El tema relacionado con los tipos de redes sociales es de interés para la visión general del comercio electrónico. Por ello, te invitamos a ver el siguiente video del SENA que trata sobre perfiles digitales en comunidades en línea y tipos de redes sociales:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Vu_jQSLPGnk" target="_blank")
              span Ver video
              i.fas.fa-play
  
    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2  Perfiles de los usuarios de las redes sociales
    
    .row
      .col-md-6.mb-4.mb-md-0
        .cajon.color-acento-contenido.p-4(style="background-color:#EBF7C5;" data-aos="zoom-in-right")
          p.mb-0 Al igual que en la sociedad, en las redes sociales se encuentran todo tipo de personas, cada una con sus propios gustos, preferencias y personalidades; para las empresas del sector turístico es conveniente conocer estos perfiles pues así identifican los tipos de usuarios a los que les interesa llegar.
        p.mt-4(data-aos="zoom-in") En la siguiente tabla se encuentran descritos los principales perfiles de usuarios de las redes sociales, que son necesarios de identificar cuando se trata de establecer negocios a nivel de #[em e-commerce], a saber:
      .col-md-6
        figure
          img(src="@/assets/curso/tema2/27.svg" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 1.
      span Perfiles de usuarios en las redes sociales
    
    figure.mt-4.col-lg-6.col-md-8.col-10.m-auto
      img(src="@/assets/curso/tema2/28.svg" data-aos="zoom-in" alt="Imagen decorativa")
    
    .tabla-a.color-acento-contenido.mt-4 
      table
        caption.text-regular.mt-3(style="background-color:#F6F6F6;") Nota. Adaptada de puromarketing.com 
        thead
          tr
            th(width="30%") Perfil
            th Descripción
        tbody
          tr
            td.fw-bold.p-4 Círculo de confianza
            td.p-4 Están interesados en mantener una relación con familiares y amigos, no en desarrollar nuevas relaciones. Como clientes, es difícil captar su atención, no son propensos a recibir e-mail de marcas y no les gusta cuando les envían mensajes por Facebook o Twitter.
          tr
            td.fw-bold.p-4 Cauteloso
            td.p-4 Suelen ser muy selectivos sobre con quién se comunican y sobre el tipo de información que comparten en la red. Para ellos es muy importante que su información personal sea tratada con respeto por las marcas. Son muy poco activos en las redes sociales.
          tr
            td.fw-bold.p-4 Solicitantes de información
            td.p-4 Este grupo va a la red para encontrar y consumir información, no están interesados en crear contenido nuevo sino en recolectar opiniones a través de análisis de productos y comentarios de otros consumidores. Un buen contenido en el perfil de la marca en las redes sociales y los e-mails es la mejor forma de captar su atención. 
          tr
            td.fw-bold.p-4 Entusiastas
            td.p-4 Este grupo lleva a la red sus intereses #[em offline] y buscan conectar con gente que tengan los mismos intereses. Son fundamentalmente jóvenes y bastante activos en las redes sociales. Les gusta ser los primeros en recibir información de las marcas, pero exigen que sea de calidad e interesante.
          tr
            td.fw-bold.p-4 Solicitantes de ofertas
            td.p-4 Se caracterizan por buscar ofertas y descuentos a través de los canales #[em online], no son activos en crear contenido propio, pero sí participan con comentarios en artículos sobre productos o empresas.
          tr
            td.fw-bold.p-4 Compradores
            td.p-4 Son los más interesados en comprar por la red, pero sus intereses no están limitados a las transacciones #[em online]. Pasan mucho tiempo investigando y preparando sus compras, están más interesados en la calidad que en el precio.
          tr
            td.fw-bold.p-4 Adictos a las noticias
            td.p-4 Se caracterizan por utilizar la red como fuente primaria de información para noticias y eventos. Son activos publicando artículos, comentando y dando votos a noticias y comentarios.
          tr
            td.fw-bold.p-4 Jugadores
            td.p-4 Están interesados en las novedades de los videojuegos. Utilizan las redes sociales para jugar y compartir experiencias, están poco interesados en seguir a las marcas en las redes sociales.
          tr
            td.fw-bold.p-4 Mariposas sociales
            td.p-4 La prioridad es hacer y mantener muchos amigos. Utilizan las redes sociales para hablar con sus amigos, pero no con colegas de trabajo. Están interesados en las ofertas y prefieren recibirlas por #[em e-mail]. 
          tr
            td.fw-bold.p-4 Los negocios primero
            td.p-4 Están en Internet para hacer negocios, buscando las últimas tendencias y abriendo oportunidades de trabajo. Usan #[em e-mail] frecuentemente, es fácil captarlos como fan o seguidores mediante la promesa de actualizaciones de producto o de información educativa.
          tr
            td.fw-bold.p-4 Amplificadores
            td.p-4 Quieren conectarse, educarse y compartir recursos e información con otros, se toman sus interacciones sociales muy en serio.
          tr
            td.fw-bold.p-4 Libro abierto
            td.p-4 Se caracterizan por mostrar en la red sus gustos, sus opiniones negativas, etc. Se sienten libres en la red y pueden llegar a dejar comentarios inapropiados o muy polémicos, quieren divulgar sus experiencias y encontrar gente para contárselas. Pueden ser los máximos defensores o detractores de las marcas.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3  Características de la tienda #[em online]
    
    p(data-aos="zoom-in") Una tienda #[em online], es un sitio diseñado en la red para vender productos o servicios mediante el comercio electrónico. Es una forma para alcanzar a más clientes, les da mayor visibilidad a las empresas y permite que las ventas aumenten.
    p.mt-4(data-aos="zoom-in") Para la creación de una tienda virtual que ofrezca productos o servicios del sector turístico, se deben tener en cuenta varios aspectos, pero ante todo se debe garantizar una buena experiencia para los visitantes, por este motivo se inicia por estos tres aspectos: diseño, usabilidad y accesibilidad.

    .col-xl-10.m-auto.mt-5
      ImagenInfograficaB.infografiab2.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/29.svg' data-aos="zoom-in-up" alt="Imagen de tres personas frente a un celular, dos de las personas se encuentran  escogiendo productos y la otra persona va con un carro de compras. En dicha imagen se identifica el diseño, usabilidad y accesibilidad, los cuales se describen en la parte inferior.")
        div(x="44%" y="32%" tooltip="Ver más" numero="1")
          .row
            .col-lg-8.col-md-6.mb-md-0.mb-4
              p.fw-bold 1. Diseño
              p.mt-3 El diseño de la página debe ser intuitivo y accesible.
              p.mt-3 - En la tienda en línea los productos y/o servicios son los que deben destacar. 
              p.mt-3 - Es conveniente combinar colores para crear una visión cálida y agradable.
              p.mt-3 - Los menús de navegación deben tener un orden lógico y orientado a cumplir con el objetivo establecido para no distraer al usuario.
              p.mt-3 - En el diseño de la tienda en línea, se debe considerar la optimización de buscadores, el contenido debe facilitar que los buscadores puedan localizar la página. 
            .col-lg-4.col-md-6
              figure
                img(src="@/assets/curso/tema2/30.png" alt="Imagen decorativa")
        div(x="62%" y="39%" tooltip="Ver más" numero="2")
          .row
            .col-lg-8.col-md-6.mb-md-0.mb-4
              p.fw-bold 2. Usabilidad
              p.mt-3 La tienda virtual debe mostrar el contenido de una forma clara y sencilla, y que el usuario la entienda de una manera fácil.
              p.mt-3 - El catálogo de experiencias turísticas debe estar visible desde el ingreso al sitio.
              p.mt-3 - Organizar el catálogo por categorías y subcategorías, con una navegación sencilla para el visitante.
              p.mt-3 - El carrito de la compra siempre debe estar visible.
              p.mt-3 - El proceso de la compra debe ser sencillo y rápido, sin tantos pasos y enfocado en la experiencia turística.
              p.mt-3 - La Información sobre canales de contacto, medios de compra y condiciones generales, debe ser fácil de encontrar.
              p.mt-3 - Las fichas de las experiencias turísticas deben ser detalladas y asociarlas con productos y/o servicios similares o complementarios para potenciar otra compra.
            .col-lg-4.col-md-6
              figure
                img(src="@/assets/curso/tema2/31.png" alt="Imagen decorativa")
        div(x="57%" y="80%" tooltip="Ver más" numero="3")
          .row
            .col-lg-8.col-md-6.mb-md-0.mb-4
              p.fw-bold 3. Accesibilidad
              p.mt-3 En la tienda virtual, las experiencias turísticas y los contenidos deben poder ser consultados por el mayor número de usuarios posible.
              p.mt-3 - El catálogo de experiencias turísticas se debe organizar por categorías, subcategorías y vitrinas comerciales.
              p.mt-3 - Las experiencias turísticas destacadas, las ofertas o lo que se quiera promocionar en determinado momento, se debería diferenciar por medio de un diseño especial en donde se destaque la información más importante (nombre, tipo de experiencia, botón comprar, precio, etc.).
              p.mt-3 - Es importante realizar el etiquetado de las imágenes, para favorecer la indexación en los motores de búsqueda.
            .col-lg-4.col-md-6
              figure
                img(src="@/assets/curso/tema2/32.png" alt="Imagen decorativa")

    p.mt-5(data-aos="zoom-in") Una vez analizados estos aspectos, es importante saber que para crear una tienda en línea se necesita realizar una inversión económica, aunque no es tan alta como la que se necesita para un sitio físico. A continuación, se verán otros aspectos a tener en cuenta para la creación de una tienda virtual.

    .tarjeta.tarjeta_slyder1.tarjeta--azul.p-4.p-lg-5.pb-lg-4.mt-5
      SlyderA(tipo="b")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Escoger el nombre y el dominio de la tienda en línea. 
            p.mt-4 El dominio es el nombre que se da a un sitio web. 
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/34.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Elegir una buena empresa de #[em hosting]. 
            p.mt-4 El #[em hosting] es un servicio en línea que permite publicar un sitio o aplicación #[em web] en Internet. Cuando se realiza el registro en un servicio de #[em hosting], lo que se hace es alquilar un espacio en un servidor en el que se pueden almacenar todos los archivos y datos necesarios para que el sitio #[em web] funcione correctamente.
            p.mt-3 El proveedor de #[em hosting] es responsable de mantener el servidor en funcionamiento, protegerlo de ataques maliciosos y transferir el contenido (imágenes, textos, archivos, etc.) desde el servidor a los navegadores de los visitantes.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/35.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Personalizar las experiencias turísticas.
            p.mt-4 Es recomendable personalizar el catálogo o la descripción de las experiencias turísticas, de modo que la tienda tenga un toque más personal y genere una imagen de marca que la diferencie de los competidores.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/36.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Añadir todos los métodos de pago posibles.
            p.mt-4 Es recomendable incluir todos los métodos de pago posibles. Contemplar el pago con tarjeta, el pago mediante transferencia bancaria, el pago contra reembolso, el pago mediante plataformas y métodos de pago ágiles.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/37.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Crear un #[em blog].
            p.mt-4 En algunos casos, es recomendable abrir un #[em blog] que sirva como complemento de la tienda #[em online], para presentar los productos y/o servicios de manera más detallada y descriptiva, añadiendo fotos y videos.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/38.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Crear campañas de publicidad en línea.
            p.mt-4 Por medio de la publicidad #[em online], se puede dar a conocer la tienda de manera económica y escalonada. De hecho, en la red existen una serie de herramientas de análisis que permiten saber con exactitud qué campañas publicitarias nos favorecen y cuáles no, de modo que ello nos permitirá rectificar al momento y evitar pérdidas innecesarias.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/39.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5.fw-bold Generar estrategias de mercadeo digital.
            p.mt-4 Es importante realizar estrategias de mercadeo digital que contribuyan a lograr los objetivos de ventas, y ayuden en el posicionamiento y en la creación de una imagen de marca.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/40.png' alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Para seleccionar el nombre del perfil y el dominio de la tienda en línea son necesarias estas recomendaciones:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Debe ser fácil de escribir, verbalizar o deletrear, fácil de recordar y lo más corto posible.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Comprar un dominio con antigüedad.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Si el dominio contiene alguna palabra clave relevante, tendrá más oportunidades de aparecer en las primeras búsquedas de esa palabra clave.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | El nombre escogido debe tener alguna relación con la actividad turística de la empresa.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Si la empresa turística ya dispone de una marca o nombre original, utilizar el nombre para el dominio y para el sitio en general.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Evitar los guiones medios y bajos y los números, así como las palabras de ortografía poco claras o términos poco comunes y las letras mayúsculas; además, evitar la letra Ñ y las letras dobles en el nombre.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Registrar el dominio para evitar que otra empresa lo pueda utilizar.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Como primera opción, elegir un dominio .com, ya que ello permitirá un mejor posicionamiento a nivel mundial.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Es preferible que el dominio esté alojado en el mismo país que el sitio web y la empresa turística, sobre todo para el posicionamiento en ese país.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | En el momento del registro, este deberá hacerse a nombre propio o a nombre de la empresa turística para evitar futuros problemas legales.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Antes de proceder al registro, es recomendable pedir la opinión de otras personas y contemplar diferentes puntos de vista.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Es importante utilizar herramientas especializadas para estudiar las diferentes posibilidades. Algunos ejemplos de dichas herramientas son Domain Name Generator o Domain Typo Generator.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | En el caso de operar a nivel internacional, se recomienda revisar que el nombre escogido no tiene otro significado en otro idioma.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Por ningún motivo se debe utilizar un dominio de marcas registradas o nombres de otras empresas con el fin de aprovechar su clientela, aunque el dominio esté libre y disponible.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | No se debe cambiar de dominio de manera constante, ya que todo el posicionamiento e imagen de marca que haya logrado no servirán de nada.
      li(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Una vez registrado el dominio, se debe estar pendiente de la fecha de caducidad y renovarlo de inmediato.
    
    p.mt-5(data-aos="zoom-in") Así mismo, cuando se va a elegir una tienda de hosting, debe buscarse una de calidad y confianza, teniendo en cuenta algunos elementos como los que se presentan en la siguiente figura.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 3.
        span Tienda #[em hosting], elementos de selección
      figure.mt-4
        img(src="@/assets/curso/tema2/41.svg" data-aos="zoom-in-up" alt="Figura que muestra los elementos claves que se debe tener en cuenta al seleccionar una tienda de hosting como es el espacio web, la transparencia, copias de seguridad, soporte, precio, seguridad y el certificado SSl gratuito.")
    
    p.mt-5(data-aos="zoom-in") La velocidad de la tienda en línea es clave, tanto para los usuarios como para el posicionamiento en los buscadores. La empresa de hosting escogida debe garantizar el espacio suficiente para la tienda en línea, así como una buena velocidad de conexión. Lo importante es disponer de un buen servicio que garantice estar disponibles las 24 horas del día. 
    p.mt-4(data-aos="zoom-in") Se necesitará un CMS o sistema de gestión de contenidos, un programa informático que permita crear un entorno de trabajo para la creación y administración de contenidos. Actualmente existen muchos CMS para comercio electrónico que son gratuitos y fiables. Además, están diseñados para que puedan ser utilizados por personas sin conocimientos técnicos muy avanzados.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small Cómo crear una tienda #[em online] en #[em WordPress] es un tutorial muy fácil de entender y práctico para el tema que nos ocupa con relación al comercio electrónico, por lo que te invitamos a ver el siguiente video:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PV1hF2ER_Ws" target="_blank")
              span Ver video
              i.fas.fa-play
    
    p.mt-5(data-aos="zoom-in") Por otra parte, se tiene el carrito de compras, que es un elemento clave en una tienda virtual. Debe estar configurado para permitir añadir, eliminar o modificar las experiencias turísticas que han sido seleccionadas.
    p.mt-4(data-aos="zoom-in") Es recomendable que siempre esté visible en todas las páginas de la tienda para que el usuario no pierda de vista lo que lleva comprado y tenga la posibilidad de seguir incluyendo productos o servicios. Además, es necesario que se pueda visualizar la siguiente información:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Referencias compradas y la cantidad.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Gastos de envío.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Impuestos.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Políticas.
      li(data-aos="zoom-in")
        i.fas.fa-caret-right.fa-li(style="color:#FFB338;")
        | Costo total del pedido.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small El proceso para añadir el carrito de compras de Wordpress, así como la configuración de dicho carrito y el #[em checkout] de Wordpress, puedes consultarlos en los siguientes videos tutoriales:
            p.mt-3.text-small Añadir el carrito de la compra en la cabecera de WordPress.
            p.mt-3.text-small.mb-0 Cómo configurar el carrito de compra y el #[em checkout] en Wordpress.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=vToi7lvmXuo" target="_blank")
              span Ver video
              i.fas.fa-play
            a.boton.color-acento-botones.mt-4(href="https://www.youtube.com/watch?v=vwyTwn_XsR0" target="_blank")
              span Ver video
              i.fas.fa-play
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4  El pago en comercio electrónico
    
    p(data-aos="zoom-in") Durante el último año se han incrementado las transacciones electrónicas, permitiendo la consolidación de Internet como canal comercial y los usuarios están teniendo más confianza para realizar pagos en línea.
    p.mt-4(data-aos="zoom-in") Para una empresa del sector turístico que venda en línea sus productos y/o servicios, es clave ofrecerles a sus clientes la mayor flexibilidad, comodidad y confianza a la hora de realizar el pago, entre más opciones disponga, mejor. Estas formas de pago pueden estar agrupadas en dos:

    p.mt-5.fw-bold(data-aos="zoom-in") Métodos fuera de línea

    p.mt-3(data-aos="fade-right") En estos métodos el pago no se efectúa durante la compra; se realiza después o de forma diferida. Dentro de esta clasificación están los siguientes medios de pago:

    .row.mt-5
      .col-md-6.mb-4.mb-md-0 
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Contra entrega o contra reembolso") El pago se realiza cuando el producto adquirido llega al usuario. O cuando el usuario llega al sitio donde podrá disfrutar la experiencia turística.
          p.text-small(numero="2" titulo="Transferencia bancaria") Con este método, el comercio informa al usuario una cuenta bancaria donde el cliente debe realizar una transferencia para que se gestione su pedido una vez se tenga la confirmación del pago.
          p.text-small(numero="3" titulo="Domiciliación bancaria") Con este método, el cliente informa al comercio un número de cuenta bancaria para que este le haga un cobro con una periodicidad determinada.
          p.text-small(numero="4" titulo="Financiación de la compra") Con esta opción, el cliente tiene la posibilidad de pagar su compra acordando un número de cuotas y fijando los plazos de la financiación con algunas de las plataformas financieras que actualmente cubren este servicio para comercios en línea. Cuando el cliente escoge financiar su compra, el pedido comienza a ser procesado debido a que la tienda virtual recibe la totalidad del valor de la compra de manera automática.
      .col-md-6
        figure
          img(src="@/assets/curso/tema2/42.png" data-aos="zoom-in-left" alt="Imagen decorativa")

    p.mt-5.fw-bold(data-aos="zoom-in") Métodos en línea

    p.mt-3(data-aos="fade-right") En estos métodos el pago se realiza en el mismo momento de la compra mediante conexión directa a por medio de una pasarela de pago o similar. Dentro de esta clasificación figuran los siguientes medios de pago:

    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones.p-4(titulo="Pasarelas de pago" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Es una plataforma que le permite a los usuarios de la tienda en línea, realizar el pago de los productos o servicios de forma segura, funciona como un enlace entre el sitio web y los diferentes medios de pago existentes, cada pasarela maneja varios medios de pago. Los datos financieros de los clientes son tratados con altos estándares de seguridad y una vez el pago está confirmado, llega una notificación para procesar la solicitud.
      .tarjeta.color-acento-botones.p-4(titulo="Tarjeta de crédito/débito <br> (TPV virtual)" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Es el medio de pago electrónico más utilizado y aceptado debido al uso generalizado de las tarjetas. El pago se realiza mediante conexión directa con la pasarela de pago de una entidad bancaria.
      .tarjeta.color-acento-botones.p-4(titulo="Monedas virtuales" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Las monedas virtuales fueron diseñadas como medio de intercambio y están siendo utilizadas para comprar productos y/o servicios de forma digital. La revolución que causó la aparición de las monedas virtuales es muy fuerte, el #[em(style="color:#12263F;") bitcoin] es la más reconocida, pero existen otras como por ejemplo Ethereum, Tether, Dogecoin, Litecoin, Dash, entre otras. El #[em(style="color:#12263F;") blockchain] es la tecnología que le da soporte al #[em(style="color:#12263F;") bitcoin] y esta revolución en el sistema económico, poco a poco se va convirtiendo en un medio de pago.
      .tarjeta.color-acento-botones.p-4(titulo="Apps de pago" style="background-color:#FFF3E0;")
        p(style="color:#12263F;") Son aplicaciones que se descargan en el teléfono celular para poder realizar transacciones comerciales. Permiten enviar y solicitar dinero y pagar compras en comercios físicos y en línea. Se puede realizar el pago por medio de una billetera electrónica, en donde el usuario acerca su teléfono al lector y automáticamente se abre la app para que escoja la tarjeta para que se realice el débito del valor a pagar y la operación se valida con un código o con la huella dactilar. O mediante un código QR que proporciona el comercio electrónico, el cliente escanea el código y toda la información para el pago aparece en la pantalla del teléfono, el cliente valida la información y luego pasa a una pasarela para conectar con el banco.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small La recepción de pagos en Wordpress, es un tema muy importante dentro de las transacciones de #[em e-commerce], por esta razón te invitamos a consultar el siguiente video:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=IshCcbJExc8" target="_blank")
              span Ver video
              i.fas.fa-play
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_5 2.5  Logística en comercio exterior
    
    p(data-aos="zoom-in") La logística es una actividad muy importante en el comercio electrónico de experiencias turísticas tanto para la distribución de productos físicos, digitales o mixtos. En ocasiones, el único contacto con el cliente es por medio de la persona que entrega el pedido, en este sentido, el cliente debe tener la posibilidad de conocer en cual etapa está su pedido.

    .col-xl-8.m-auto.col-lg-10.mt-4
      .cajon.color-acento-contenido.p-4(style="background-color:#EBF7C5;" data-aos="flip-up")
        p.mb-0 La logística es tan importante que se convierte en una herramienta de mercadeo. Es por esto que se tienen en cuenta todos detalles, desde cómo es el diseño del paquete hasta la información que va a contener para propiciar nuevas compras.
    
    p.mt-4(data-aos="zoom-in") El proceso de gestionar los pedidos es complejo e intervienen varias tareas que deben estar orientadas a un objetivo doble.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        AcordionA.acordionb1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Eficacia")
            p Conseguir entregar el pedido a tiempo y en las condiciones comprometidas.
          .row(titulo="Eficiencia")
            p Conseguir que el costo no supere los márgenes comerciales y que, de un modo u otro, el consumidor asuma el costo de comprar en línea para que la actividad pueda ser rentable.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/44.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="zoom-in") Se deben tener en cuenta los siguientes factores:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/45.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-6
        .tarjeta.tarjeta--azul.p-4.p-lg-5.pb-lg-4.h-100(style="background-color:#F6F6F6;box-shadow:0px 4px 10px rgba(0,0,0,0.1);")
          SlyderA.slydera1(tipo="b")
            .row
              p.fw-bold Informar al cliente sobre las formas de envío y los plazos de entrega: 
              p.mt-3 Cuanta más completa sea la información que le damos al cliente, menor será la frustración que tendrá, ya que podrá conocer qué tipo de servicio puede esperar y cuánto le va a costar.
            .row
              p.fw-bold Calidad y fiabilidad en las entregas: 
              p.mt-3 Si las entregas no se producen en el momento acordado o no tiene la calidad esperada, puede generar una devolución. Adicional a los costos económicos de una devolución, se debe considerar la insatisfacción de los clientes que por lo general no vuelven a comprar.
            .row
              p.fw-bold Servicio al cliente:  
              p.mt-3 Es clave tener un servicio de atención al cliente con un horario de atención amplio y que cuente con diferentes canales de comunicación: teléfono, formulario web, chat, atención al cliente en redes sociales, etc.
            .row
              p.fw-bold Opciones de personalización del envío:
              p.mt-3 Brindar a los clientes más opciones de envío como, por ejemplo, un envío para regalo, en donde se da la opción de enviar el pedido a una dirección diferente a la del cliente, sin factura de compra para el destinatario del regalo y la posibilidad de una dedicatoria en una tarjeta especialmente diseñada.
   
    p.mt-5(data-aos="zoom-in") El proceso para hacer funcionar un comercio electrónico en su parte operativa se puede dividir en cuatro etapas, a saber:

    .col-xl-10.m-auto.mt-5
      ImagenInfograficaB.infografiab3.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/47.png' data-aos="zoom-in-up" alt="Imagen decorativa")
        div(x="9.5%" y="72%" tooltip="Ver más" numero="")
          .row
            .col-md-6.mb-4.mb-md-0
              p(style="color:#12263F !important;") Es una fase fundamental para dar un buen nivel de servicio y alcanzar una buena eficiencia operativa. Dentro de esta fase se incluyen los procesos de gestión de proveedores, gestión de pedidos, codificación de productos y la gestión de devoluciones al proveedor.
            .col-md-6
              figure
                img(src="@/assets/curso/tema2/48.png" alt="Imagen decorativa")
        div(x="25.5%" y="41.5%" tooltip="Ver más" numero="")
          .row
            .col-md-6.mb-4.mb-md-0
              p(style="color:#12263F !important;") Esta fase inicia cuando el proveedor entrega un pedido y comprende procesos como la recepción de mercancías, verificación de pedidos, verificación de productos, ubicación y control de #[em(style="color:#12263F !important;") stock] e inventarios.
            .col-md-6
              figure
                img(src="@/assets/curso/tema2/49.png" alt="Imagen decorativa")
        div(x="51.4%" y="54%" tooltip="Ver más" numero="")
          .row
            .col-md-6.mb-4.mb-md-0
              p(style="color:#12263F !important;") En esta fase se desarrollan las actividades cuando recibimos un pedido del cliente para que este llegue a su destino, como el control y reserva de #[em(style="color:#12263F !important;") stock, picking, handling, packing], facturación y envío.
            .col-md-6
              figure
                img(src="@/assets/curso/tema2/50.png" alt="Imagen decorativa")
        div(x="59%" y="92.2%" tooltip="Ver más" numero="")
          .row
            .col-md-6.mb-4.mb-md-0
              p(style="color:#12263F !important;") En el comercio electrónico los costes de una devolución son mayores debido a que lleva asociado un coste de transporte y si, adicionalmente, se requiere un cambio debido a un error, un producto defectuoso o un cambio de talla, los costes serán mayores. En esta fase se incluyen los procesos de devoluciones de cliente, recogidas con sustitución, verificación de pedidos, relación con transporte, relación con compras y relación con CRM.
            .col-md-6
              figure
                img(src="@/assets/curso/tema2/51.png" alt="Imagen decorativa")
    
    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 4.
        span Esquema de procesos relacionados con las cuatro etapas de las operaciones en comercio electrónico
    .col-xl-8.col-lg-10.m-auto.mt-5
      figure.mt-4
        img(src="@/assets/curso/tema2/52.svg" data-aos="zoom-in-up" alt="Figura que muestra un esquema de procesos dividido en 4 etapas de las operaciones en comercio electrónico relacionados en la parte inferior.")
        p.text-small.mt-4 Nota. Tomada de Aecem (2012). 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_6 2.6  #[em Dropshipping]

    .col-xl-10.m-auto
      .row
        .col-md-6.mb-4.mb-md-0
          p(data-aos="zoom-in") El #[em dropshipping] es un modelo de negocio electrónico en el que por lo general participan tres actores principales; el cliente, el vendedor y el mayorista. En este modelo, el vendedor solo debe encargarse de promocionar el producto, realizar ventas y procesar el pedido. La logística para las entregas es por cuenta del mayorista o por medio de una empresa especializada.
          p.mt-4(data-aos="zoom-in") A continuación, se analizarán algunas de las principales ventajas e inconvenientes de esta forma de comercio electrónico.
        .col-md-6
          figure
            img(src="@/assets/curso/tema2/53.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .col-xl-8.m-auto.mt-5.col-lg-10
      ImagenInfografica.infografia4.color-primario.mt-5
        template(v-slot:imagen)
          figure
            img(src="@/assets/curso/tema2/54.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
        .tarjeta.color-acento-botones.p-4(x="14%" y="15%" numero="+" style="background-color:#F4E8CD;")
          ul.lista-ul.mb-0
            li.mb-1.d-flex
              i.lista-ul__vineta
              | La inversión inicial necesaria es mínima.
            li.mb-1.d-flex
              i.lista-ul__vineta
              | No se necesita disponer de infraestructuras para el almacenaje y envío de los productos.
            li.mb-1.d-flex
              i.lista-ul__vineta
              div El manejo del #[em stock] corre por cuenta de los mayoristas.
            li.mb-1.d-flex
              i.lista-ul__vineta
              | El catálogo de productos estará siempre actualizado.
            li.mb-1.d-flex
              i.lista-ul__vineta
              | El proceso logístico es responsabilidad del mayorista.
        .tarjeta.color-acento-botones.p-4(x="86%" y="15%" numero="+" style="background-color:#F4E8CD;")
          ul.lista-ul.mb-0
            li.mb-1.d-flex
              i.lista-ul__vineta
              | El precio de los productos puede ser más elevado, debido a los costos asociados al proceso de distribución.
            li.mb-1.d-flex
              i.lista-ul__vineta
              | Cuando se trabaja con proveedores que no están en el país, se pueden tener inconvenientes con las aduanas, los tiempos de entrega o impuestos extra.
            li.mb-1.d-flex
              i.lista-ul__vineta
              | Se debe comprobar la legalidad de los proveedores con los que se trabaja.
    
    p.mt-5(data-aos="zoom-in") Actualmente existen varias plataformas para comercio electrónico gratuitas y confiables; y están diseñadas para que cualquier persona las pueda utilizar, sin importar sus conocimientos técnicos (Escuela de Negocios. Universidad de Barcelona, s. f.). 

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small El #[em dropshipping], es un tema que concierne a todos los involucrados en el comercio electrónico. Podrás consultar el documento Guía interactiva de 7 pasos para abrir una tienda #[em online] con #[em Shopify] y enterarte un poco más al respecto, se encuentra disponible en el enlace:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://cdn.shopify.com/s/files/1/0229/0839/files/Guia_interactiva_de_7_pasos_para_abrir_una_tienda_online_con_Shopify_4_mayo_B.pdf?v=1620156595" target="_blank")
              span Ir a enlace
              i.fas.fa-link
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_7 2.7  Legislación del comercio electrónico
    
    p(data-aos="zoom-in") En cuanto a la legislación, las empresas del sector turístico que realicen ventas por medios electrónicos deben tener en cuenta que prestan servicios de ventas a distancia. Este tipo de ventas están contempladas en la Ley 1480 de 2011 del Estatuto del Consumidor (artículo 5°, numeral 16) que indica que este tipo de ventas son las realizadas sin que el consumidor tenga contacto directo con el producto que adquiere, que se dan por medios, tales como correo, teléfono, catálogo o vía comercio electrónico. En este estatuto existe un capítulo en donde se establecen los deberes que se deben cumplir en la tienda en línea (Capítulo V: De las ventas que utilizan métodos no tradicionales o a distancia).

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small El comercio #[em online] se encuentra regularizado y normado por la Ley 1480 de 2011 del Estatuto del Consumidor, en el siguiente enlace podrás consultar la respectiva ley y tener más información al respecto:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306" target="_blank")
              span Ir a enlace
              i.fas.fa-link

    p.mt-5(data-aos="zoom-in") Una vez revisado el Estatuto del Consumidor es necesario analizar las normas que se establecen en la Ley 527 de 1999 por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small Otra norma que regula comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación es la Ley 527 de 1999, en el siguiente enlace podrás consultar la respectiva ley, y así tener más información al respecto:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html" target="_blank")
              span Ir a enlace
              i.fas.fa-link
    
    p.mt-5(data-aos="zoom-in") Adicionalmente se deben considerar las funciones de control y vigilancia que cumple la Superintendencia de Industria y Comercio sobre las actividades de comercio electrónico.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small Para el control y la vigilancia que lleva a cabo la Superintendencia de Industria y Comercio, en relación con las actividades del comercio electrónico, se ha expedido la Guía sobre el tratamiento de datos personales para fines de comercio electrónico, en el siguiente enlace:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.sic.gov.co/sites/default/files/files/pdf/Guia%20SIC%20Tratamiento%20Datos%20Personales%20ComercioElectronico(1).pdf" target="_blank")
              span Ir a enlace
              i.fas.fa-link
    
    p.mt-5(data-aos="zoom-in") Finalmente, se deben tener en cuenta dos normativas más, una es la Ley 1581 del 17 de octubre de 2012, que regula disposiciones generales para la protección de datos personales, y el Decreto 1377 de 2013, mediante el cual se reglamenta de forma parcial la Ley 1581 de 2012.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background-color:#FCC52E;border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:80px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4 Conoce un poco más...
            p.mb-0.text-small La Ley 1581 del 17 de octubre de 2012 regula las disposiciones generales para la protección de datos personales y en el siguiente enlace podrás consultarla en totalidad:
            p.mt-4.text-small El Decreto 1377 de 2013, que reglamenta de forma parcial la Ley 1581 del 17 de octubre de 2012 por la cual se dictan disposiciones generales para la protección de datos personales, podrás consultarla en el enlace:
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981" target="_blank")
              span Ir a enlace
              i.fas.fa-link
            a.boton.color-acento-botones.mt-4(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646" target="_blank")
              span Ir a enlace
              i.fas.fa-link
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_8 2.8 Términos y condiciones de uso
    
    .bloque-texto-g.color-secundario.bloque1.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/55.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los clientes deben saber cuáles son las reglas que la empresa tiene sobre las políticas de devolución, desistimiento o cancelación. Es por esto que los términos y condiciones son tan importantes en comercio electrónico de experiencias turísticas, porque establecen la forma en la que se pueden usar los productos, servicios o contenidos.

    .col-xl-9.m-auto.mt-5
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          figure.m-auto.col-6.col-md-6.col-lg-12
            img(src="@/assets/curso/tema2/56.svg" alt="Imagen decorativa" style="position:relative;z-index:2;")
        .col-lg-7(data-aos="fade-left" style="place-self:center;")
          .cont_2_2
            .p-4.p-lg-5
              p.mb-0.text-white Los términos y condiciones normalmente contienen información legal relacionada con las condiciones de la venta y los medios de pago, envío, entrega, condiciones de cancelación y desistimiento, etc.


    
    p.mt-5(data-aos="zoom-in") Tener claras estas reglas, protege a las empresas turísticas sobre posibles responsabilidades; un documento de términos y condiciones debería contener las siguientes cláusulas:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Identificación de la empresa (datos de contacto del vendedor).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Descripción del servicio que proporciona tu #[em web/app].
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Condiciones de venta.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Información sobre asignación de riesgos, responsabilidad y descargos de responsabilidad.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Información sobre la garantía (en su caso).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | La existencia del derecho de desistimiento (en su caso).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Las condiciones de envío y entrega del producto/servicio.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Las condiciones de uso/compra (por ejemplo, requisitos de edad, restricciones geográficas).
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Información relativa a la política de reembolsos, cambios o cese del servicio.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Información relativa a los métodos de pago.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Propiedad intelectual.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Descargo de responsabilidad.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Enlaces externos.
      li.mb-2(data-aos="zoom-in")
        i.fas.fa-check.fa-li(style="color:#3BC192;")
        | Programas de promociones y fidelización.
  



   





      
      
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
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
.modal_1_1 .modal-a__content
  background-color: #12263F
.modal-a__content
  background-color: #004E99
.modal-a__close-btn i
  color: #fff
.img-infografica-b__modal
  background-color: #fff
.img-infografica-b__modal__btn-cerrar i
  color: #2B95F9
.infografiab1 .img-infografica-b__item__dot
  padding: 1.5rem
  left: -11px
.infografiab2 .img-infografica-b__item__dot
  padding: 1.5rem
  left: -11px
.infografiab2 .img-infografica-b__modal
  background-color: #004E99
.infografiab2 .img-infografica-b__modal__btn-cerrar i
  color: #fff
.tarjeta_slyder1
  background: url(../assets/curso/tema2/33.png)
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
.acordionb1 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #FFF4E1 !important
  border-bottom: 0px !important
  background: url(../assets/curso/tema2/43.png)
  background-size: cover
  background-position: center
.acordionb1 .acordion__accion__btn--b
  border: 1px solid #12263F
  background-color: transparent
.acordionb1 .acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: #12263F
.acordionb1.acordion .tarjeta.tarjeta--azul
  background-color: #FFF5DD
.slydera1 .slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #EB6F2D
  border: 1px solid #EB6F2D
  background-image: url(../assets/curso/tema2/46.svg)
.infografiab3 .img-infografica-b__item__dot
  padding: 1.5rem
  left: -11px
.infografiab3 .img-infografica-b__modal
  background-color: #BFBFBF
.infografiab3 .img-infografica-b__modal__btn-cerrar i
  color: #707070
.infografia4 .img-infografica__item__dot
  padding: 1.5rem
  left: -14px
.infografia4 *
  color: #12263F !important
.bloque1.bloque-texto-g.color-secundario
  background-color: #3D672F
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  left: -15%
  height: 100%
  top: 0
  width: 125%
  background-color: #12263F
</style>
