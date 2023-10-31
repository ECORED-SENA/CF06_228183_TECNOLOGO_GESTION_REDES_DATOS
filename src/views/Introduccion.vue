<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo-intro.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

        .row.align-items-center.p-3.pt-4.mb-4(data-aos="fade")
          .col-lg-1.col-md-2.col-3.mb-3.mb-md-0
            img(src="@/assets/curso/temas/intro/ico.svg", alt="")
          .col-lg-11.col-md-10
            p.mb-0 Usted se ha comenzado el estudio del componente formativo #[b “Configuración y gestión de dispositivos activos”]. Su estudio responsable del mismo, enriquecerá su proceso formativo en #[b Gestión de redes de datos]. Ahora, diríjase al contenido del video que se propone a continuación, el cual le contextualizará sobre los temas que aquí desarrollarán. ¡Éxitos!

        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/GdzveKof0Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Configuración y gestión de dispositivos activos



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
