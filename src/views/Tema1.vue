<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Direccionamiento IP
      
    .row.fondo-tema1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-4.col-10.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/temas/t1/img.png", alt="")
          .col-lg-8.mb-4(data-aos="fade-left")
            p Las conexiones de redes de datos implementan el protocolo #[b TCP/IP]; todos y cada uno de los #[em hosts], es decir, cualquier computador o dispositivo conectado en red, conectados a Internet, están compuestos de una dirección IP (en IPv4 o IPv6) y una máscara de red que ayuda a determinar la red a la que pertenecen.
            .bg-5.p-4
              .row.align-items-center.justify-content-center 
                .col-md-2.col-4.mb-3.mb-md-0
                  img.px-lg-3(src="@/assets/curso/temas/t1/ico.svg", alt="")
                .col-md-10
                  p.mb-0 Estas direcciones IP van incrementando o cambiando debido a las nuevas tecnologías de comunicación, como la adaptación del protocolo #[b IPv6].
          
          h5.mb-4(data-aos="fade") Sobre los #[em hosts], tenga en cuenta aspectos como estos:

          .row.mb-4
            .col-md-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/tarj-ico1.svg' alt='')
                .tarjeta.bg-8
                  .p-4.pt-2
                    p.mb-0 Cualquier #[em host] conectado a una red requiere, dentro de sus parámetros de comunicación, la configuración de la dirección IP.
            .col-md-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/tarj-ico2.svg' alt='')
                .tarjeta.bg-8
                  .p-4.pt-2
                    p.mb-0 La dirección IP forma parte del protocolo IP (#[em Internet Protocol]), el cual indica el uso, formato, tipos y demás características del direccionamiento IP.
            .col-md-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/tarj-ico3.svg' alt='')
                .tarjeta.bg-8
                  .p-4.pt-2
                    p.mb-0 La dirección IP corresponde a la identificación del dispositivo internamente en una red.
            .col-md-6.col-lg-3.mb-3.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/tarj-ico4.svg' alt='')
                .tarjeta.bg-8
                  .p-4.pt-2
                    p.mb-0 Dentro de los límites de una red, la dirección IP debe ser única.

          h5.mb-4(data-aos="fade") El siguiente video muestra cómo determinar o consultar una dirección IP en un equipo o dispositivo:

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ze9WnI0gADM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Direccionamiento IP

    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.1 Generalidades clave sobre las direcciones IP

    p.mb-4(data-aos="fade") Las direcciones IP se dividen en dos grandes grupos, IPv4 e IPv6. Estas direcciones son la identificación que cada uno de los #[em hosts] conectados en red tiene asociada para poder enviar y recibir datos; están compuestas por una porción de red y una porción de #[em host].

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 1.] Dirección IPv4
        figure
          img(src='@/assets/curso/temas/t1/fig1.svg', alt='Figura que detalla las porciones de red y las porciones de host de una dirección IPv4.')

    h5.mb-4(data-aos="fade") Comprenda, más y mejor, el concepto de dirección IP, haciendo su propia imagen mental de la siguiente analogía:

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-5.col-md-6.mb-5.pe-md-0.pb-5.pb-md-0
        .bg-6.p-4.p-lg-5.brl-8
          p.mb-4.m-h245 Piense, por ejemplo, la dirección de una casa, la cual está comprendida por una estructura: Calle 1 con carrera 1 – 01. En esta dirección, se puede analizar que la parte de #[b Calle 1 y Carrera 1] es un grupo en común para aquellas viviendas que coincidan, lo que vendría siendo la porción de red para la dirección IP; en ese mismo sentido, la nomenclatura del 01 (después del guion de la dirección), la cual representa una vivienda en específico de la #[b Calle 1 con carrera 1]. De ello se puede hacer analogía con la porción de #[em host] de la dirección IP.
          img.mb-n100(src='@/assets/curso/temas/t1/tarj2-img1.png' alt='')
      .col-lg-5.col-md-6.mb-5.ps-md-0
        .bg-9.p-4.p-lg-5.brr-8
          p.mb-4.m-h245 La misma dirección puede estar en otra ciudad y ahí es cuando entra en acción el concepto de la máscara de subred, que vendría siendo la ciudad para este ejemplo; por ende, con esa dirección IP (dirección de la casa) y máscara de subred (ciudad) se puede ubicar con facilidad, en un espacio, alguna empresa de envíos para entregar algún pedido o, en este caso, entregar/recibir datos de información.
          img.mb-n100(src='@/assets/curso/temas/t1/tarj2-img2.png' alt='')


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.2 Estructura de la dirección IP y clases de direccionamiento IP

    p.mb-4(data-aos="fade") La dirección IP corresponde a una dirección lógica de 32 #[em bits], se trata del identificador de la conexión del dispositivo a la red, dicha dirección es única para cada dispositivo conectado a la red, ya que esta se asocia a la dirección de la tarjeta de red.

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 2.] Identificador de conexión del dispositivo a la red
        figure
          img(src='@/assets/curso/temas/t1/fig2.svg', alt='Figura que muestra cómo la dirección IP está asociada a una dirección lógica de 32 bits.')

    p(data-aos="fade") Las clases se definen en el protocolo IP, de manera tal que permitan optimizar el uso del enrutamiento de las unidades de información, denominadas datagramas, ya que, al no usar clases, los enrutadores deberían almacenar un alto flujo de información en sus tablas de enrutamiento, lo cual no es eficiente para el funcionamiento de las redes de datos.
    h5.mb-4(data-aos="fade") Para cubrir las necesidades de las diferentes organizaciones, se establecieron varias clases:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 3.] Rango de las clases
        figure
          img(src='@/assets/curso/temas/t1/fig3.svg', alt='Esquema gráfico que detalla el rango de clases de direccionamiento IP.')
    
    p.mb-4(data-aos="fade") Las clases de direccionamiento, explicadas con más detalle, se muestran a continuación:

    .row.fondo2-tema1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-4.d-none.d-lg-flex 
            img(src='@/assets/curso/temas/t1/img2.png' alt='')
          .col-lg-4.col-md-6.mb-3.mb-md-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/tarj3-ico.svg' alt='')
              .tarjeta.bg-10
                .p-4.pt-2.text-white
                  h4 Clase A
                  p.mb-0 Este grupo de direcciones IP es el más grande del protocolo de Internet en su versión 4, donde el primer octeto empieza en 0 y termina en 127, el resto de los octetos están destinados para los #[em hosts]. Puede haber un máximo de 128 (2#[sup 7]) redes clase A. Cada red clase A puede contener un máximo de 16.777.216 (2#[sup 24]) #[em hosts].
          .col-lg-4.col-md-6.mb-3.mb-md-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/tarj3-ico.svg' alt='')
              .tarjeta.bg-10
                .p-4.pt-2.text-white
                  h4 Clase B
                  p.mb-0 Los octetos que se ocupan para este grupo son los dos primeros, empezando el primer octeto en el rango de 128 al 191 y los dos octetos restantes están disponibles para los #[em hosts]. La cantidad de redes de la clase B está compuesta por 2#[sup 14] = 16.384, puede contener un máximo de 65.536 (2#[sup 16]) #[em hosts].

    p.mb-1(data-aos="fade") Las direcciones IP, que se encargan de identificar los dispositivos conectados a una red en forma única, se pueden clasificar teniendo en cuenta el alcance y su función.
    h5.mb-4(data-aos="fade") Las siguientes dos tablas, resumen la clasificación de las direcciones IP:

    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Tabla 1.] Clasificación de las direcciones IP según alcance
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota: adaptada de Ariganello (2020).
        thead
          tr
            th Públicas
            th Privadas
        tbody
          tr
            td Dirección IP visible por los dispositivos conectados a Internet.
            td Dirección IP visible únicamente por los dispositivos de su propia red.
          tr
            td Son usadas en servicios de web, DNS o correo electrónico.
            td Pueden ser usadas en diferentes redes internas.

    .titulo-sexto.color-acento-contenido.mb-3
      p.mb-0 #[b Tabla 2.] Clasificación de las direcciones IP según su función
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota: adaptada de Ariganello (2020).
        thead
          tr
            th Públicas
            th Privadas
        tbody
          tr
            td Dirección IP asignada a un dispositivo de forma fija y permanente.
            td Dirección IP asignada aleatoriamente. Para cada conexión a la red, la dirección IP es diferente.
          tr
            td Se usan para los servicios que deben ser alcanzados en forma constante como la web.
            td Se configuran de forma automática a través de servidores.

    .row.justify-content-center 
      .col-lg-8.bg-2.b-r12.p-4
        .row.align-items-center
          .col-md-2.col-4.mb-3.mb-md-0
            img.px-lg-2(src="@/assets/curso/temas/t1/ico2.svg", alt="")
          .col-md-10
            p.text-white.mb-0 Los servidores de Internet usan las direcciones IP públicas estáticas, con el objeto de que se encuentren siempre localizables por los usuarios que se conectan a Internet. Por otro lado, los #[em modems] que se conectan a internet usan direcciones IP públicas dinámicas.

    
    Separador

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.3 Máscara de red y nombre de dominio

    .row.mb-3
      .col-lg-8.mb-4(data-aos="fade-right")
        p Cuando se conectan dos o más dispositivos mediante un #[em router], este debe enrutar los paquetes que van dirigidos a cada dispositivo, es así que la máscara de red corresponde a una dirección IP que efectúa el enrutamiento interno de paquetes.
        h5 Para cada clase de red, según su tamaño, se tiene su correspondiente máscara de red:
      .col-lg-4.col-10.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img3.png", alt="")

    .row.fondo3-tema1.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-8.mb-5(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 4.] Máscara de red según las clases
            figure
              img(src='@/assets/curso/temas/t1/fig4.svg', alt='Figura que muestra la máscara de red para cada clase de dirección IP, en este caso, Clases A, B y C.')
    
          .col-lg-10(data-aos="fade-down")
            .fondo4-tema1.p-4.p-lg-5
              p Como sugiere la figura, la máscara de red permite determinar la dirección de red a la cual pertenece un #[em host], ya que indica qué porción de la dirección IP es de red y así mismo cuál porción corresponde a #[em host]. Realizando una operación denominada AND lógica entre la dirección IP del #[em host] y la máscara de red, se puede determinar la dirección de red.
              p.mb-0 Como la estructura de la dirección IP en formato decimal o binario es difícil de recordar, a fin de facilitar el acceso, se optó por asignar un nombre de dominio a cada dirección IP. Un ejemplo es el nombre de dominio asignado a la dirección de Google que es #[b www.google.com.co], para no usar su correspondiente dirección IP expresada en forma decimal.


    Separador

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.4 ¿Cómo se direcciona desde la máquina?

    p(data-aos="fade") Cuando un #[em host] se comunica con uno o más #[em hosts] en la red, envía un conjunto de datos de origen a destino.
    h5.mb-4(data-aos="fade") A continuación, se describe lo que sucede con los datos enviados:

    .row.mb-2
      .col-lg-7.mb-4(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-11")
          .row.justify-content-center(titulo="Conversión a formato apropiado")
            .col-md-10.mb-0
              p.mb-0 En la capa de aplicación, los datos son convertidos al formato de red apropiado.
          .row.justify-content-center(titulo="División en segmentos numerados")
            .col-md-10.mb-0
              p.mb-0 En la capa de transporte, los datos se dividen en segmentos numerados para el reensamblaje adecuado en el #[em host] destino.
          .row.justify-content-center(titulo="Nominación del paquete")
            .col-md-10.mb-0
              p.mb-0 En la capa de red, se ingresan las direcciones IP del #[em host] emisor y el #[em host] receptor. Por lo tanto, el nombre del paquete hace referencia a la unidad resultante.
          .row.justify-content-center(titulo="Denominación de tramas")
            .col-md-10.mb-0
              p.mb-0 En la capa de enlace de datos, se agregan las direcciones correspondientes a la MAC de los dos #[em hosts] y un respectivo número determinado para verificar si hay errores en el envío de la información durante las transmisiones posteriores, pasando a recibir la denominación de tramas.
          .row.justify-content-center(titulo="Conversión a pulsos eléctricos u ondas")
            .col-md-10.mb-0
              p.mb-0 En la capa física, las tramas se empaquetan mediante un flujo de #[em bits] adecuado para su conversión a pulsos eléctricos u ondas que se envían a los medios. Cuando los pulsos u ondas llegan al #[em host] receptor, el proceso se invierte, obteniendo en la capa de aplicación receptora los datos en su formato original.
      .col-lg-5.col-10.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img4.png", alt="")

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .bg-4.p-4.b-r12
          p.mb-0 Aunque son pulsos eléctricos lo que se transmite a través del medio físico, se hace referencia a los paquetes transmitidos porque son unidades de información con entidad propia.

    h5.mb-4(data-aos="fade") El siguiente, es el modelo de capas OSI:

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 5.] Modelo de capas OSI
        figure
          img(src='@/assets/curso/temas/t1/fig5.png', alt='Esquema gráfico que muestra, en secuencia, las siete capas del modelo de capas OSI.')

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Comunicación entre #[em hosts] en red
    
    p.mb-4(data-aos="fade") Para establecer la comunicación en red TCP/IP, los dispositivos requieren tres datos sobre el #[em host] destino, al que se dirige el paquete de datos; estos son:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6.col-md-6.pe-md-0
        .bg-7.h-100.p-4.d-flex.align-items-center
          ul.lista-ul--color.mb-0.fa-ul
            li
              i.fas.fa-project-diagram
              | Dirección IP.
            li
              i.fas.fa-project-diagram
              | Máscara de subred.
            li
              i.fas.fa-project-diagram
              span.mb-0 Dirección MAC (#[em Media Access Control], Control de Acceso a Medios).
      .col-lg-2.col-md-6.ps-md-0
        .bg-2.h-100.p-4.px-lg-5.d-flex.align-items-center   
          img(src="@/assets/curso/temas/t1/ico3.svg")

    h5.mb-4(data-aos="fade") En el siguiente esquema, se muestra una red formada por varios #[em hosts] en una conexión directa de datos.

    .row.fondo5-tema1.align-items-center.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-8.mb-5(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 6.] Interconexión de #[em hosts]
            figure
              img(src='@/assets/curso/temas/t1/fig6.svg', alt='El esquema detalla la red formada por algunos hosts, en conexión directa de datos.')

          p(data-aos="fade") En la figura inmediatamente anterior, al #[em host] identificado como C se le configura la dirección IP 198.23.5.14. Este desea comunicarse con el #[em host] identificado como D, al cual se le configura la dirección IP 198.23.5.27. El conjunto de datos de origen a destino se integra en paquetes de datos, y la capa de red asigna las respectivas direcciones IP del #[em host] C (emisor) y del #[em host] D (destino), pasándose a la capa de enlace de datos, que desconoce la MAC (dirección física) del #[em host] D. Para realizar dicha consulta, el #[em host] C envía un mensaje a todas las máquinas interconectadas en red; esta petición es conocida como ARP (Protocolo de Resolución de Direcciones) y es de tipo #[em broadcast], que son enviadas como difusión a todos los equipos en la red, consultando por la MAC correspondiente a la IP 198.23.5.27.
          p(data-aos="fade") Para la petición ARP, solo el #[em host] D responde dicha petición, enviando como respuesta la dirección MAC. Es así que el #[em host] C incluye la dirección MAC de origen y destino a los paquetes ya en la capa física, y esta se encarga de transmitirlos al medio.

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Comunicación entre #[em hosts] en dos redes

    .bloque-texto-g.bg-12.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img5.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[em host] identificado como D, configurado con la dirección IP 190.200.23.5, no se ubica en la misma red que el #[em host] identificado como A, configurado con la dirección IP 200.23.5.14. El #[em host] A envía un mensaje #[em broadcast] consultando por la dirección MAC de D, pero no recibirá una respuesta. Por lo tanto, la comunicación entre ambos #[em hosts] se vuelve imposible. El dispositivo de red que se encarga de establecer dicha comunicación se conoce como #[em router], el cual permite la conexión de dos o más redes, su principal función es enrutar o encaminar paquetes de datos al #[em host] de redes diferentes.

    .row.mb-3
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon-b.color-acento-botones.mb-4
          p Cuando un paquete llega al #[em router], este examina la dirección del #[em host] destino y lo envía hacia este, enrutando por una ruta predeterminada. Si la dirección IP destino pertenece a una de las redes que están interconectadas mediante el #[em router], se envía el paquete directamente; si llegado el caso, no es así, el #[em router] envía el paquete al #[em router] más cercano a la dirección IP destino.
        p El enrutamiento se realiza a través de las tablas de enrutamiento que se configuran en el #[em router], cada segmento de red interconectado en red a través de un #[em router] tiene su respectiva dirección IP que identifica de forma única el enlace a la red.
        h5 La interconexión de redes a través de enrutadores puede ser representada mediante el siguiente esquema:
      .col-lg-4.col-10.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t1/img6.png", alt="")

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade")
      p.mb-0 #[b Figura 7.] Interconexión de redes a través de un #[em router]
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/fig7.svg', alt='Gráfica que muestra la forma en que se da la conexión entre dos redes: Red 1 y Red 2, mediante un Router.')

    .row.justify-content-center.mb-3
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/img7.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        .cajon-b.color-acento-botones.mb-4
          p Teniendo la conexión establecida entre las dos redes, el #[em host] emisor envía una petición ARP a fin de consultar la dirección MAC que pertenece a una IP asignada. Si no se tiene respuesta de los #[em hosts] conectados en su red, este envía los paquetes de datos a través de un #[em router] configurado para este tipo de envíos. Los paquetes se envían mediante el #[em gateway] (puerta de enlace) por defecto. Para que el #[em router] determine la dirección IP de la red a la que pertenece el #[em host] buscado, recurre a la máscara de red, en combinación con la dirección IP destino, realizando una operación conocida como AND binario.
        h5 Para esto, el #[em router] realiza una operación interna, donde se combinan los #[em bits] de la dirección IP binario y la máscara de red binario. Tal combinación está detallada en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Tabla 3.] Operación AND binario
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-26 Combinación de #[em bits]
                th.w-16 Resultado
                th Operación AND
            tbody
              tr
                td 1 1
                td.text-center 1
                td.text-center Dirección IP binario #[em host]  
                  p.mb-0 11001000 . 00010111 . 00000101 . 00001110
              tr
                td 1 0
                td.text-center 0
                td.text-center Máscara de red binario 
                  p.mb-0 11111111 . 11111111 . 11111111 . 00000000
              tr
                td 0 1
                td.text-center 0
                td.text-center Dirección de red binario 
                  p.mb-0 11001000 . 00010111 . 00000101 . 00000000
              tr
                td 0 0
                td.text-center 0
                td.text-center Dirección de red decimal 
                  p.mb-0 200. 23. 5. 0

    p(data-aos="fade") Realizada la operación AND, el #[em router] envía los paquetes de datos a la correspondiente red 2, a la que pertenece el #[em host] destino D. Luego, envía una petición #[em broadcast], a fin de consultar la dirección MAC del #[em host] destino D.

    p(data-aos="fade") Al obtener la respuesta, el #[em router] enruta finalmente los paquetes de forma directa. Si se establece una comunicación en sentido contrario, de #[em host] A al #[em host] D, el proceso a realizar por el #[em router] es el mismo. En el primer proceso realizado, el #[em router] almacenó en su tabla de enrutamiento las direcciones MAC-IP del #[em host] A y del D, las cuales pueden ser usadas para posteriores envíos de datos.


    Separador

    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.5 #[em Subnetting]

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img8.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Diseñar, implementar y administrar de forma eficaz el direccionamiento IP permite un uso eficiente de las direcciones IPv4 e IPv6. El #[em subnetting] consiste en la creación de múltiples redes, partiendo de una dirección IP de red. La estructura de la dirección IPv4 cuenta con dos niveles: ID de red y el ID de #[em host]. Los enrutadores reenvían paquetes según la porción de red de la dirección IP. Una vez que se encuentra la red, la parte de la dirección del #[em host] identifica el dispositivo de destino.

    p.mb-4(data-aos="fade") A medida que se expande la red y las organizaciones agregan cientos o miles de #[em hosts] a la red, la jerarquía de dos niveles se vuelve inadecuada. La subdivisión de red, mejor conocida como #[b #[em subnetting]], agrega mayor cantidad de niveles a la jerarquía de la red, básicamente, creando tres niveles: red, subred y #[em host].

    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 8.] Esquema #[em subnetting]
        figure
          img(src='@/assets/curso/temas/t1/fig8.svg', alt='Figura que expone los elementos conceptuales más importantes de la matemática de datos: bit y sus valores cero y uno.')

    p.mb-5(data-aos="fade") Como se sugiere en la figura inmediatamente anterior, la introducción de un nivel adicional a la jerarquía crea subgrupos adicionales dentro de una red IP, lo que facilita la entrega rápida de paquetes y proporciona un mayor filtrado, al contribuir a minimizar el tráfico local.

    .row.fondo6-tema1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          h5.mb-4(data-aos="fade") Algunos aspectos que, sobre el #[em subnetting] se debe tener en cuenta, son:
          
          .row.justify-content-between.align-items-center
            .col-lg-6(data-aos="fade-right")
              ul.lista-ul--color.mb-0.fa-ul
                li.bb-punt.pb-2
                  i.fas.fa-project-diagram
                  span.mb-0 Otra forma de realizar #[em subnetting] es aplicando el mecanismo VLSM (Máscara de subred de longitud variable).
                li.bb-punt.pb-2
                  i.fas.fa-project-diagram
                  | Así, se obtienen subredes de una longitud variable para las diferentes interfaces de conexión.
                li.bb-punt.pb-2
                  i.fas.fa-project-diagram
                  | El beneficio al crear diferentes identificadores de máscara de subred, es que se mejora la eficiencia del direccionamiento IP, optimizando recursos de direccionamiento IP, según convenga en el diseño de la red.
                li.bb-punt.pb-2
                  i.fas.fa-project-diagram
                  span.mb-0 Las superredes o #[em supernetting], por otro lado, permiten a los enrutadores enrutar de manera más eficiente. En otras palabras, pueden manejar más tráfico con menos recursos.
                li.bb-punt.pb-2
                  i.fas.fa-project-diagram
                  | El enrutador ya no usa las clases para el direccionamiento, sino que envía la máscara de red contiguo a la dirección. Esto permite que los enrutadores realicen la agrupación por subredes.
                li.mb-0
                  i.fas.fa-project-diagram
                  | Este método, conocido como enrutamiento entre dominios sin capas (CIDR), permite a los enrutadores agrupar y jerarquizar subredes comunes para simplificar el tráfico.
            .col-lg-5(data-aos="fade-left")
              img(src="@/assets/curso/temas/t1/img9.svg", alt="")


    Separador

    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.6  Matemática de red

    p(data-aos="fade") Las matemáticas permiten un entendimiento de las propiedades de la red, para acercarse al conocimiento y aplicación en ecosistemas de redes de datos. Para iniciar, se abordan los conceptos iniciales, que son un #[em bit] y un #[em byte] de información.
    h5.mb-4(data-aos="fade") Algunos elementos que deben estar claramente comprendidos, en la matemática de red, son:

    .bg-13.mb-4.py-4.py-lg-5
      .row.justify-content-center(data-aos="fade-down") 
        .col-lg-8.col-11
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/figura.svg', alt='Figura que expone los elementos conceptuales más importantes de la matemática de datos: bit y sus valores cero y uno.')

            .tarjeta.tarjeta-modal.p-3(x="4%" y="14%" numero="")
              p.mb-0 Un #[em bit] está compuesto por los valores 0 y 1. 0 para falso y 1 para verdadero.
            .tarjeta.tarjeta-modal.p-3(x="32%" y="51%" numero="")
              p.mb-0 El 0, indica que no hay comunicación. Cuando un #[em bit] se encuentra en cero, su N/A estado es falso, apagado.
            .tarjeta.tarjeta-modal.p-3(x="32%" y="91%" numero="")
              p.mb-0 El 1, indica que sí hay comunicación. Cuando un #[em bit] se encuentra en uno, su estado es verdadero, encendido.

    p.mb-5(data-aos="fade") Los computadores trabajan con grupos de 8 #[em bits], los cuales se llaman #[em bytes]. El intervalo de valores de un #[em byte] está en el rango de 0 a 255. De esta manera, cuando se menciona que una dirección IPv4 está compuesta de 4 octetos, quiere decir que se compone de 4 #[em bytes].

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Binario a decimal

    p(data-aos="fade") El sistema binario tiene como base el 2. Por esta razón, es ideal representar cada posición en potencias de 2. Las direcciones IPv4 se estructuran por cuatro #[em bytes], punteados tanto en binario o decimal.
    h5.mb-4(data-aos="fade") Por ejemplo:

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 9.] Notación de dirección IPv4
        figure
          img(src='@/assets/curso/temas/t1/fig9.svg', alt='Figura que muestra la notación de dirección IPv4.')

    p.mb-4(data-aos="fade") En el sistema de numeración base 2, las posiciones en los números binarios de 8 #[em bits] se presentan así:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Tabla 4.] Representación potencias de base 2
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-26 Potencia
                th.w-26 Equivalencia
            tbody.text-center     
              tr
                td 2#[sup 7]
                td 128
              tr
                td 2#[sup 6]
                td 64
              tr
                td 2#[sup 5]
                td 32
              tr
                td 2#[sup 4]
                td 16
              tr
                td 2#[sup 3]
                td 8
              tr
                td 2#[sup 2]
                td 4
              tr
                td 2#[sup 1]
                td 2
              tr
                td 2#[sup 0]
                td 1

    p.mb-4(data-aos="fade") El sistema de numeración de base 2 puede ser expresado usando solo dos dígitos: 0 y 1. Al realizar la conversión de binario a decimal, se ubican los 8 #[em bits] en cada posición, iniciando por el MSB (#[em bit] más significativo), que equivale a 128, luego se procede a sumar las equivalencias que se encuentren en 1, para obtener el valor del octeto de binario a decimal.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade") 
      p.mb-0 #[b Tabla 5.] Equivalencia binaria a decimal
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down") 
      table
        thead
          tr
            th Potencia
            th Equivalencia
            th Primer octeto
            th Operación
            th Decimal
        tbody.text-center     
        tbody.text-center     
              tr
                td 2#[sup 7]
                td 128
                td 1
                td(rowspan="8") 128 + 64
                td(rowspan="8") 192
              tr
                td 2#[sup 6]
                td 64
                td 1
              tr
                td 2#[sup 5]
                td 32
                td 0
              tr
                td 2#[sup 4]
                td 16
                td 0
              tr
                td 2#[sup 3]
                td 8
                td 0
              tr
                td 2#[sup 2]
                td 4
                td 0
              tr
                td 2#[sup 1]
                td 2
                td 0
              tr
                td 2#[sup 0]
                td 1
                td 0

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Decimal a binario

    .row.fondo7-tema1.align-items-center.pt-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-1.col-md-2.col-4.mb-3.mb-md-0(data-aos="fade-right")
            img(src="@/assets/curso/temas/t1/ico4.svg")
          .col-lg-11.col-md-10.mb-4(data-aos="fade-left")
            p El sistema binario tiene su correspondiente conversión al sistema decimal. Dado que las direcciones IPv4 se representan mediante el formato decimal punteado, solo es necesario analizar el proceso de conversión de valores binarios de 8 #[em bits] a valores decimales de 0 a 255, para cada agrupación de 8 #[em bits] (octeto) en una dirección IPv4.
            p En el siguiente video, se detallan los pasos respectivos para la conversión de direcciones IP decimales a direcciones IP binarias. Tenga en cuenta que, tal proceso se debe realizar para cada valor decimal a convertir, esto quiere decir que el proceso se debe realizar 4 veces, a fin de convertir la dirección IPv4.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/RVH5u_nImlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Dirección IPv4



    Separador

    #t_1_7
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.7 IPv6

    p.mb-4(data-aos="fade") Debido al crecimiento exponencial que tuvo la implementación del protocolo de Internet en su versión 4 y partiendo de que el diseño de este fue casi un experimento, sin llegar a imaginar el éxito comercial que iba a tener y que solo se dispone de 2#[sup 32] direcciones, no se planteó que en pocos meses iba a quedar corto en espacio. Por tal motivo, se contempló la implementación de una nueva versión llamada IPv6.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.col-md-8.pe-md-0
        .bg-7.h-100.p-4.brl-8
          p Esta dispone de 2#[sup 128] direcciones o, dicho de otra manera, 340 sextillones de direcciones. Esta versión fue trabajada por la organización de estandarización de los protocolos de Internet (IETF, #[em Internet Engineering Task Force]). El despliegue del direccionamiento IPv6 conserva una coexistencia ordenada con su antecesora versión 4; a medida que el ecosistema de las redes de datos se adapte, esta se irá desplazando a la nueva versión del protocolo de Internet.
          p Por esta razón, es importante comprender cómo se implementa la versión 6 del Protocolo de Internet, ya que su aplicación se extiende incluyendo a usuarios domésticos, empresas, proveedores de contenido, proveedores de servicios de Internet y los entes de regulación de Internet.
      .col-lg-4.col-md-4.ps-md-0
        .bg-2.h-100.p-4.d-flex.align-items-center.brr-8   
          img.px-lg-5(src="@/assets/curso/temas/t1/img10.svg")

    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
