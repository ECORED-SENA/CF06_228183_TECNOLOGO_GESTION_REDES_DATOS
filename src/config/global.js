export default {
  global: {
    componenteFormativo: 'Configuración y gestión de dispositivos activos',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves del direccionamiento IP y la verificación de dispositivos activos, como parte del proceso de la gestión de redes de datos. Con su estudio responsable de los temas, el aprendiz estará más y mejor capacitado para apropiar saberes en la configuración y gestión de dispositivos activos requeridos, de acuerdo con la arquitectura planteada en la fase de planeación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Direccionamiento IP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades clave sobre las direcciones IP',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Estructura de la dirección IP y clases de direccionamiento IP',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Máscara de red y nombre de dominio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '¿Cómo se direcciona desde la máquina?',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: '<em>Subnetting</em>',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Matemática de red',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'IPv6',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificación de dispositivos',
        desarrolloContenidos: true,
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
      tema: '1. Direccionamiento IP',
      referencia:
        'Ariganello, E. (2020). <em>REDES CISCO Guía de estudio para la certificación CCNA 200–301</em>. Editorial Ra-Ma.',
      tipo: 'Documento',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.se na.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/publication/redes-cisco-guia-de-estudio-para-la-certificacion-ccna-200-301',
    },
    {
      tema: '1. Direccionamiento IP',
      referencia:
        'Cortés, A. (s. f.). <em>Introducción a redes. Capítulo 8: Direccionamiento IP</em>. Cisco Networking Academy.',
      tipo: 'Documento',
      link:
        'https://silo.tips/download/introduccion-a-redes-ing-anibal-coto-cortes',
    },
    {
      tema: '2. Verificación de dispositivos',
      referencia:
        'Tárrega, J. (2020, 5 abril). <em>Configurar IPv6 Windows - Linux</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F9RDmrCp_K8',
    },
    {
      tema: '2. Verificación de dispositivos',
      referencia:
        'Lopez, M. [Guerreros de la Red Mic hely Lopez]. (2018, 26 mayo). <em>¿Qué es? ¿Cómo funciona? Protocolo de Routing de Redes OSPF (Open Shortest Path First) Cisco, Huawei<e/m> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wK24zn66Dbs',
    },
  ],
  glosario: [
    {
      termino: 'Datagrama',
      significado:
        'hace referencia a un paquete de datos que se transmite como un bloque de información mediante la capa de red.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'corresponde a un grupo de valores numéricos que identifican de manera lógica y a su vez jerárquica a la conexión en red de un <em>host</em>.',
    },
    {
      termino: 'Estación de trabajo',
      significado: 'es una forma de referirse a “computadora en red”.',
    },
    {
      termino: '<em>Host</em>',
      significado:
        'hace referencia a los computadores u otro dispositivo que está conectado en red.',
    },
    {
      termino: 'Modelo OSI',
      significado:
        'modelo de estandarización internacional establecido por ISO e UITT, permite desarrollar estándares para redes de datos, los cuales facilitan la interoperabilidad de equipos desarrollados por diferentes fabricantes.',
    },
    {
      termino: 'LAN',
      significado:
        ' <em>Local Area Network</em>, corresponde a la Red de Área Local. Es una red de datos con alcance reducido a un área como la de una oficina, una casa o un edificio.',
    },
    {
      termino: 'Paquete',
      significado:
        'indica una pequeña agrupación de información de longitud variable, que generalmente tiene de 256 a 2,000 <em>bytes</em> de longitud.',
    },
    {
      termino: 'Protocolo',
      significado:
        'reglas de comunicación para el funcionamiento de la red. Los protocolos especifican cómo se formatean y envían las solicitudes, los mensajes y otras señales a través de la red.',
    },
    {
      termino: '<em>Router</em>',
      significado:
        'es un dispositivo de <em>hardware</em> que permite la interconexión de hosts en redes de datos.',
    },
    {
      termino: 'Servidor',
      significado:
        'dispositivo conectado a la red que permite dar asistencia, brindando información u otros servicios solicitados por los clientes en la red.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        'corresponde al <em>software</em> que gestiona las características de <em>hardware<e/m>. Se encarga de establecer una interfaz de comunicación con el usuario e interviene en el almacenamiento de los datos en los dispositivos.',
    },
    {
      termino: '<em>Switch</em>',
      significado:
        'es un dispositivo de hardware que se utiliza para interconectar varios hosts a través de la red de datos.',
    },
    {
      termino: 'WAN',
      significado:
        ' <em>Wide Area Network</em>, corresponde a la Red de Área Amplia, que sobrepasa extensas regiones geográficas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariganello, E. (2020). <em>REDES CISCO Guía de estudio para la certificación CCNA 200–301 (Spanish Edition)</em>. Editorial Ra-Ma.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/library/publication/redes-cisco-guia-de-estudio-para-la-certificacion-ccna-200-301',
    },
    {
      referencia:
        'Cisco Networking Academy. (2013). <em>Principios básicos de enrutamiento y switching. CCNA1</em> V5.',
      link:
        'https://juliorestrepo.files.wordpress.com/2015/03/pdf_ccna1_v5.pdf',
    },
    {
      referencia:
        'Guevara, L. (2018). <em>Tutoría y Orientación</em>. Universidad Nacional de Educación Enrique Guzmán y Valle.',
      link:
        'https://repositorio.une.edu.pe/bitstream/handle/20.500.14039/3448/MONOGRAF%c3%8dA%20-%20GUEVARA%20FLORES%20-.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Kurose, J. y Ross, K. (2013). <em>Computer networking. A top-down approach</em>. Pearson.',
      link:
        'https://www.ucg.ac.me/skladiste/blog_44233/objava_64433/fajlovi/Computer%20Networking%20_%20A%20Top%20Down%20Approach,%207th,%20converted.pdf',
    },
    {
      referencia:
        'Mora, P. (2016). <em>Equipos de interconexión y servicios de red</em>. Elearning S.L.',
    },
    {
      referencia:
        'Vilás, P. (2014). <em>Supernetting o sumarización de rutas</em>. Estribancus.',
      link:
        'http://pvilas.com/2014/12/supernetting-o-sumarizacion-de-rutas.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cinthia Rocío Trejos Chacón',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial- Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Fabian Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
