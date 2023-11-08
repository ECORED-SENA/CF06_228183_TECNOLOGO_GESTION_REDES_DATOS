<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Verificación de dispositivos

    .row.fondo-tema2.align-items-center.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-4.col-10.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/temas/t2/img.png", alt="")
          .col-lg-8.mb-4(data-aos="fade-left")
            p Para la verificación de dispositivos se debe establecer una distribución específica de las diferentes conexiones, mediante dominios o grupos de trabajo, configuraciones de las direcciones IP, recursos compartidos, gestión de cuentas de usuario y privilegios asociados, generalmente, bajo un sistema de archivo distribuido o directorio activo.
            .bg-1.p-3.p-lg-4
              p.mb-0 La implementación de diagramas de flujo para representar gráficamente los procedimientos sistemáticos, los métodos corporativos y las distintas técnicas a aplicar, es una manera idónea de documentar estos procesos.

          .mb-4

          .col-lg-9(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 10.] Diagramación de anomalías
            figure
              img(src='@/assets/curso/temas/t2/fig10.svg', alt='Imagen de un diagrama de una anomalía presentada en determinado proceso.')


    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Configuración IPv4 / IPv6

    p.mb-4(data-aos="fade") Para que el terminal, es decir, el dispositivo final, se comunique a través de la red, debe configurarse con la información de direccionamiento IP correcta. El terminal debe configurarse con una dirección IP y una máscara de subred.

    .row.mb-4
      .col-lg-6.mb-4(data-aos="fade-right")
        p Esta información se configura desde la PC. Todos estos parámetros deben configurarse para que el terminal se conecte correctamente a la red. Esta información consta de la configuración de red de su PC. Además de la dirección IP y la información de la máscara de subred, se puede configurar la puerta de enlace predeterminada y la información del servidor DNS, como se muestra a continuación.
      .col-lg-6.col-11.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t2/img2.png", alt="")

    .row.fondo2-tema2.align-items-center.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-8.mb-4(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 11.] Direccionamiento de dispositivos finales
            figure
              img(src='@/assets/curso/temas/t2/fig11.png', alt='Imagen que muestra una asignación de direccionamiento IPv4 estático, de forma manual en un dispositivo final con sistema operativo Windows.')

          p Como se muestra en la imagen anterior, la dirección de puerta de enlace predeterminada, o #[em gateway], es la dirección IP de la interfaz del enrutador utilizada para permitir que los paquetes salgan de la red local. El #[em gateway] es asignado normalmente por el administrador de la red, lo cual direcciona la salida del tráfico en la red cuando este debe enrutarse a otra red.

          .col-lg-2.col-md-3.col-5.mb-3.mb-md-0(data-aos="fade-right") 
            .b-r12.bg-3.p-4.h-100.d-flex.align-items-center
              img(src="@/assets/curso/temas/t2/img3.svg", alt="")
          .col-lg-10.col-md-9(data-aos="fade-left") 
            p El servidor DNS es la dirección IP que corresponde a un servidor conocido como DNS (Sistema de Nombres de Dominio). Este sistema asocia direcciones IP en red con nombres de dominio, o también conocidos como páginas web, como www.google.com o www.sena.edu.co.
            .cajon-b.color-acento-contenido
              p La información de la dirección IP se puede ingresar en la PC manualmente o usando el Protocolo de configuración dinámica de #[em host] (DHCP). Se puede utilizar DHCP para configurar automáticamente la información IP de su terminal. DHCP es una tecnología utilizada en la mayoría de las redes comerciales.

    .row.fondo2-tema2.align-items-center.pb-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-8.mb-4(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 12.] Direccionamiento dinámico
            figure
              img(src='@/assets/curso/temas/t2/fig12.png', alt='Imagen de la asignación de direcciones dinámicas IPv4, aplicando DHCP en un dispositivo final con sistema operativo Windows.')

          p DHCP permite configurar automáticamente la dirección IPv4 de cada terminal en una red habilitada para DHCP. Imagínese cuánto tiempo tomaría si tuviera que ingresar manualmente su dirección IP, máscara de subred, puerta de enlace predeterminada y servidor DNS, cada vez que se conecta a la red. Multiplique esto por cada usuario y cada dispositivo en su red, para encontrar el problema.

          .col-lg-2.col-md-3.col-5.mb-3.mb-md-0(data-aos="fade-right") 
            .b-r12.bg-3.p-4.h-100.d-flex.align-items-center
              img.px-lg-3(src="@/assets/curso/temas/t2/img4.svg", alt="")
          .col-lg-10.col-md-9(data-aos="fade-left") 
            .cajon-b.color-acento-contenido
              p DHCP es un ejemplo de la mejor tecnología. Uno de los principales objetivos de la tecnología es facilitar el trabajo que debe realizarse. Con DHCP, los usuarios finales pueden ingresar a un área cubierta por una red específica y recibir rápidamente la información IPv4 necesaria para conectar un cable Ethernet o habilitar una conexión inalámbrica y comunicarse correctamente a través de la red.

    h5(data-aos="fade") La figura siguiente, muestra el proceso de asignación de direcciones dinámicas:

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 13.] Direccionamiento IPv6
        figure
          img(src='@/assets/curso/temas/t2/fig13.png', alt='Imagen de la asignación de direcciones dinámicas IPv6 aplicando DHCP en un dispositivo final con sistema operativo Windows.')

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Plano de control IPv4/IPv6

    p.mb-4(data-aos="fade") Se asume, implícitamente, que el plano de control de enrutamiento reside y se ejecuta, completamente, en un procesador de enrutamiento dentro del #[em router]. Por lo tanto, el plano de control de enrutamiento de toda la red está descentralizado, con diferentes partes (por ejemplo, de un algoritmo de enrutamiento) que se ejecutan en diferentes #[em routers] e interactúan enviando mensajes de control entre sí.

    .row.justify-content-center.align-items-center
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t2/img5.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        .bg-4.p-3.p-lg-4.mb-4.b-r12
          p.mb-0 De hecho, los #[em routers] de Internet y los algoritmos de enrutamiento operan exactamente de esta manera. Además, los proveedores de #[em switches] y #[em routers] agrupan su plano de datos de #[em hardware] y el plano de control de #[em software] en plataformas cerradas (pero interoperables), en un producto integrado verticalmente.
        p Son varios los investigadores (como Caesar 2005, Casado 2009, McKeown 2008) quienes, recientemente, han comenzado a explorar nuevos controles de arquitecturas de plano en las que parte del plano de control se implementa en los #[em routers]. La medición (informe local del estado del enlace, instalación y mantenimiento de la tabla de reenvío) junto con el plano de datos, y parte del plano de control, se puede implementar de forma externa al enrutador (por ej; en un servidor centralizado, que podría realizar el cálculo de ruta).

    h5.mb-4(data-aos="fade") Para el tipo de plano de control, es importante considerar dos enfoques:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-down")
        img(src="@/assets/curso/temas/t2/figura.svg", alt="")

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Plano de datos IPv4/IPv6

    .row.mb-3
      .col-lg-8.mb-4(data-aos="fade-right")
        p El reenvió de paquetes es una de las funciones de la capa de red que mueve los paquetes desde la entrada del #[em router] hasta la salida correspondiente. Funciona localmente y es una característica de todos los #[em routers].
        .bg-4.p-3.p-lg-4.mb-4.b-r12
          p.mb-0 En una red de datos, existe un flujo constante de información que se envía de un extremo a otro. Los datagramas IP son las unidades principales que contienen la información de Internet. Un datagrama se estructura con toda la información necesaria sobre direcciones, enrutamiento, prioridad, entre otros.
      .col-lg-4.col-10.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/temas/t2/img6.png", alt="")

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 14.] Estructura datagrama
        figure
          img(src='@/assets/curso/temas/t2/fig14.svg', alt='Imagen que muestra la estructura de un datagrama IP.')
          figcaption.mt-1 Nota: tomada de Kurose y Ross (2013).  

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .tarjeta.bg-gradiente1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t2/cta-video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Configurar IPv6 Windows - Linux
                  p.mb-0 En el siguiente enlace, le lleva hasta un video donde se lleva a cabo una configuración de IPv6 en el sistema Linux. Preste atención al mismo y aprópiese tanto de los conceptos como de las acciones que se ejecutan para tal fin:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=F9RDmrCp_K8')" target="_blank")
                    span Ver Video
                    i.fab.fa-youtube 

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Verificación de problemas protocolo RIP y OSPF para IPv6

    p(data-aos="fade") El uso de comandos necesarios para la resolución de problemas en los protocolos RIP y OSPF toma importancia tanto para IPv4 como para IPv6, ya que las posibles causas son las mismas en ambos.
    h5.mb-4(data-aos="fade") El proceso de depuración de errores se logra con la implementación de los comandos adecuados, como son:

    .tarjeta.fondo-sliderTipoA.bx-sh4.mb-5.p-4.p-lg-5
      SlyderA(tipo="b")
        .row.justify-content-around.mb-4
          .col-md-5.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t2/slider-img1.png", alt="")
          .col-md-5
            h4.t-primario #[em Show IP Route]
            p Muestra contenido de una tabla de enrutamiento IP.
        .row.justify-content-around.mb-4
          .col-md-5.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t2/slider-img1.png", alt="")
          .col-md-5
            h4.t-primario #[em Show IP Protocols]
            p Muestra los parámetros de un protocolo en particular.
        .row.justify-content-around.mb-4
          .col-md-5.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t2/slider-img1.png", alt="")
          .col-md-5
            h4.t-primario #[em Debug IP RIP]
            p Depura anuncios RIP y actualizaciones.
            

    p(data-aos="fade") #[b El OSPF (#[em Open Shortest Path First])], por su parte, es un protocolo de enrutamiento de estado de enlace desarrollado para reemplazar el protocolo de enrutamiento por vector de distancia RIP. En los primeros días de la tecnología de redes e Internet, RIP era un protocolo de enrutamiento aceptado.

    .row.justify-content-center.mb-2
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t2/img7.png", alt="")
      .col-lg-8.mb-4(data-aos="fade-left")
        .bg-4.p-3.p-lg-4.mb-4.b-r12.h-100.d-flex.align-items-center
          p.mb-0 Sin embargo, el hecho de que el protocolo RIP se base en el número de saltos como única métrica para determinar la mejor ruta, se convierte rápidamente en un problema. El uso de conteos de saltos no es apropiado para redes grandes, con muchas rutas, a diferentes velocidades. OSPF tiene ventajas significativas sobre RIP, ya que proporciona una convergencia y escalabilidad más rápidas para implementaciones de red mucho más grandes. OSPF es un protocolo de enrutamiento sin clases, que utiliza el concepto de zonas para lograr escalabilidad.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .tarjeta.bg-gradiente1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t2/cta-video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Que es? ¿Como Funciona? Protocolo de Routing de Redes OSPF
                  p.mb-0 Explore el contenido del video que se muestra en el siguiente enlace y asimile con propiedad los conceptos y acciones del protocolo OSPF:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=wK24zn66Dbs')" target="_blank")
                    span Ver Video
                    i.fab.fa-youtube

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 Servicios para IPv6

    p(data-aos="fade") Los servicios de red con soporte IPv6 son de alta importancia para este mundo de transición, debido al cambio que se avecina en todo el mundo y, especialmente, en Colombia, donde el liderazgo lo lleva el ministerio de las TIC.
    h5.mb-4(data-aos="fade") Algunos de los servicios que se van a tratar son:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6.pe-md-0
        .bg-6.h-100.p-4.d-flex.align-items-center.brl-8
          ul.lista-ul--color.mb-0.fa-ul
            li
              i.fas.fa-project-diagram
              | Servicio web con HTTP y HTTPS.
            li
              i.fas.fa-project-diagram
              | DNS.
            li
              i.fas.fa-project-diagram
              | SSH.
            li
              i.fas.fa-project-diagram
              | DHCP.
            li
              i.fas.fa-project-diagram
              | Telefonía IP.
            li
              i.fas.fa-project-diagram
              | Servicio de base de datos.
            li
              i.fas.fa-project-diagram
              | Enrutamiento BGP.
            li.mb-0
              i.fas.fa-project-diagram
              | Enrutamiento OSPF.
      .col-lg-3.col-md-6.ps-md-0
        .bg-2.h-100.p-4.p-lg-5.d-flex.align-items-center.brr-8   
          img(src="@/assets/curso/temas/t2/img8.png")

    .bg-2.p-2.px-4.b-r4.w-fit.mb-4(data-aos="fade") 
      h3.text-white.mb-0 #[em Cisco Packet Tracer]

    p.mb-4(data-aos="fade") La herramienta #[b #[em Packet Tracer] de Cisco], corresponde a un #[em software] de simulación de redes, que permite hacer pruebas con diferentes dispositivos de red, pudiendo llevar un caso real al mundo de la simulación, donde se obtienen resultados favorables en cada una de las fases de una topología de red, comenzando por la planeación hasta la verificación de sus transmisiones.

    .row 
      .col-lg-3.col-md-5.mb-3.mb-md-0(data-aos="fade-right") 
        .bg-5.b-r12.h-100.px-3.d-flex.align-items-center
          img(src="@/assets/curso/temas/t2/img9.png")
      .col-lg-6.col-md-7(data-aos="fade-left") 
        .bg-5.b-r12.h-100.p-4.d-flex.align-items-center
          p.mb-0 Esta herramienta se utilizará en la mayor parte de los laboratorios propuestos de esta Tecnología en gestión de redes de datos.


</template>

<script>
export default {
  name: 'Tema2',
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
