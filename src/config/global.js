export default {
  global: {
    componenteFormativo: 'Visión general del comercio electrónico',
    descripcionCurso:
      'El comercio electrónico básicamente es el proceso de compra y venta de productos por medios electrónicos. El creciente uso de la tecnología propició un desarrollo acelerado de este tipo de transacciones, este fenómeno está presente en los diferentes sectores económicos y la industria del turismo no puede ser la excepción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ventajas y desventajas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plataformas tecnológicas aplicadas al turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generalidades de redes sociales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Perfiles de los usuarios de las redes sociales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características de la tienda <em>online</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'El pago en comercio electrónico',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Logística en comercio exterior',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: '<em>Dropshipping</em>',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Legislación del comercio electrónico',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Legislación del comercio electrónico',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tráfico en comercio exterior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Indicadores clave de rendimiento (KPI) aplicados al comercio electrónico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principales métricas aplicadas al comercio exterior',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas de medición en comercio electrónico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de contenido digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Herramientas de programación de contenidos en redes sociales',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comercio electrónico',
      referencia:
        'SENA. (2021). <em>Diferentes maneras de hacer e-commerce</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=5079y-YZe7A',
    },
    {
      tema: 'Generalidades de redes sociales',
      referencia: 'SENA. (2021). <em>Redes sociales</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=mATxSe_h5r4',
    },
    {
      tema: 'Tipos de redes sociales',
      referencia:
        'SENA. (2022). <em>Tipos de redes sociales</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=Vu_jQSLPGnk',
    },
    {
      tema: 'Características de la tienda <em>online</em>',
      referencia:
        'Sofía Web. (2020). <em>Cómo crear una tienda <em>online</em> en WordPress</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PV1hF2ER_Ws',
    },
    {
      tema: 'Características de la tienda <em>online</em>',
      referencia:
        'Cómo hacer una página. (2017). <em>Añadir el carrito de la compra en la cabecera de WordPress</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vToi7lvmXuo',
    },
    {
      tema: 'Características de la tienda <em>online</em>',
      referencia:
        'Grafiweb. (2021). <em>Cómo configurar el carrito de compra y el checkout en Wordpress</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vwyTwn_XsR0',
    },
    {
      tema: 'Pago comercio electrónico',
      referencia:
        'Porta, M. (2022). <em>Recibir pagos en Wordpress</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IshCcbJExc8',
    },
    {
      tema: '<em>Dropshipping</em>',
      referencia:
        'CDN Shopify. (2022). <em>Guía interactiva de 7 pasos para abrir una tienda online con Shopify</em>.',
      tipo: 'Documento',
      link:
        'https://cdn.shopify.com/s/files/1/0229/0839/files/Guia_interactiva_de_7_pasos_para_abrir_una_tienda_online_con_Shopify_4_mayo_B.pdf?v=1620156595',
    },
    {
      tema: 'Legislación del comercio electrónico',
      referencia:
        'Congreso de Colombia. (2011). Ley 1480 de 2011. Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=44306',
    },
    {
      tema: 'Legislación del comercio electrónico',
      referencia:
        'Congreso de Colombia. (1999). Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación.',
      tipo: 'Documento',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      tema: 'Legislación del comercio electrónico',
      referencia:
        'Superintendencia de Industria y Comercio. (2019). <em>Guía sobre el tratamiento de datos personales para fines de comercio electrónico</em>. Superintendencia de Industria y Comercio. Colombia.',
      tipo: 'Documento',
      link:
        'https://www.sic.gov.co/sites/default/files/files/pdf/Guia%20SIC%20Tratamiento%20Datos%20Personales%20ComercioElectronico(1).pdf',
    },
    {
      tema: 'Legislación del comercio electrónico',
      referencia:
        'Congreso de Colombia. (2012). Ley estatutaria 1581 de octubre de 2012, Reglamentada parcialmente por el Decreto Nacional 1377 de 2013, reglamentada parcialmente por el Decreto 1081 de 2015. Por la cual se dictan disposiciones generales para la protección de datos personales.',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },
    {
      tema: 'Legislación del comercio electrónico',
      referencia:
        'Presidencia de la República de Colombia. (2013). Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012, Derogado Parcialmente por el Decreto 1081 de 2015.',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646',
    },
    {
      tema: 'Contenido digital',
      referencia:
        'SENA. (2021). <em>Conceptos básicos y características del contenido digital</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=1p9t9ymdH6Y',
    },
    {
      tema: 'Contenido digital',
      referencia:
        'Google Ads. (s. f.). <em>Utilice el Planificador de palabras clave</em>.',
      tipo: 'Página web',
      link:
        'https://support.google.com/google-ads/answer/7337243?hl=es-419#zippy=%2Cagregue-palabras-clave-al-plan-y-consulte-las-previsiones',
    },
    {
      tema: 'Tipos de contenido digital',
      referencia:
        'SENA. (2021). <em>Diseño de contenidos digitales</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=dGvw8reGgNg',
    },
    {
      tema: 'Herramientas de programación de contenidos digitales',
      referencia:
        'SENA. (2021). <em>Planeación de contenidos digitales</em>. [Video]. YouTube.',
      tipo: 'Video SENA',
      link: 'https://www.youtube.com/watch?v=p7ZwZhSjqTM&t=65s',
    },
  ],
  glosario: [
    {
      termino: 'Comercio electrónico',
      significado:
        'proceso de compra, venta o intercambio de bienes, servicios e información por medio de comunicación electrónicos, en donde la mayoría de las transacciones se realizan mediante pagos en línea y sin que exista una relación física entre las partes implicadas.',
    },
    {
      termino: '<em>Dropshipping</em>',
      significado:
        'modelo de negocio electrónico en el que el vendedor solo debe encargarse de promocionar el producto, realizar ventas y procesar el pedido. La logística para las entregas es por cuenta del mayorista o por medio de una empresa especializada.',
    },
    {
      termino: '<em>Hosting</em>',
      significado:
        'servicio en línea que permite publicar un sitio o aplicación web en internet. Cuando se realiza el registro en un servicio de <em>hosting</em>, lo que se hace es alquilar un espacio en un servidor en el que se pueden almacenar todos los archivos y datos necesarios para que el sitio web funcione correctamente.',
    },
    {
      termino: 'Red social',
      significado:
        'estructura en donde interactúan diferentes actores que se relacionan de acuerdo a algún objetivo. En internet, las redes sociales son sitios diseñados para favorecer la interrelación de sus miembros, que tienen intereses o actividades comunes y el intercambio de información.',
    },
  ],
  referencias: [
    {
      referencia:
        'AECEM, (2012). <em>Libro blanco del comercio electrónico: guía práctica de comercio electrónico para pymes</em>. AECEM.',
      link: '',
    },
    {
      referencia: 'Somalo, I, (2017). <em>El comercio electrónico</em>. ESIC.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013). Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012, Derogado Parcialmente por el Decreto 1081 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley estatutaria 1581 de octubre de 2012, Reglamentada parcialmente por el Decreto Nacional 1377 de 2013, reglamentada parcialmente por el Decreto 1081 de 2015. Por la cual se dictan disposiciones generales para la protección de datos personales.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2019). <em>Guía sobre el tratamiento de datos personales para fines de marketing y publicidad</em>. Superintendencia de Industria y Comercio.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1999). Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1480 de 2011. Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=44306',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eddy Cárdenas',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Luisa Fernanda Posada Hincapié',
          cargo: 'Experto temático',
          centro: 'Regional Quindío. Centro de Comercio, Industria y Turismo',
        },
        {
          nombre: 'Fabio Alberto Ramírez Ayala',
          cargo: 'Experto temático',
          centro: 'Regional Tolima. Centro Comercio y Servicios',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseño web e ilustración',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
