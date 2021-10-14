<template>
  <article id="my-project">

    <section class="project-content custom-border-top">
      <div class="project-details">
        <h1>Fylo dark theme landing page</h1>
        <div class="project-info">
          <p>
            Neste projeto eu precisei construir uma página de conversão
            completa, o que foi uma ótima oportunidade para testar os meus
            conhecimentos de HTML e CSS de forma geral. Layout responsivo e
            interativo.
          </p>
        </div>
        <p class="build-with">
          Design Interativo / Responsivo
          <br />
          HTML / CSS
        </p>
        <div class="project-details-links">
          <a
            href="https://pedro-fylo-landing-page.netlify.app"
            class="type-two-link"
            target="_blank"
            >Ver site</a
          >
          <a
            href="https://github.com/Pedrohamoura-Git/Frontend-Mentor-Challenges/tree/main/HTML%20%26%20CSS/Junior/fylo-dark-theme-landing-page-master"
            class="type-two-link"
            target="_blank"
            >Ver README</a
          >
        </div>
      </div>
      <div class="project-description custom-border-top">
        <div class="project-bg">
          <h1>Sobre o projeto</h1>
          <p>
            O usuário deve ser capaz de: <br />
            => ver os itens com layout otimizado de acordo com o tamanho da
            tela; <br />
            => ver os efeitos <em>hover</em> em todos os elementos interativos
            da página; <br />
            => interagir com a barra de navegaçao superior; <br />
          </p>
        </div>
      </div>
      <div class="project-preview custom-border-top">
        <h1>Preview do projeto</h1>
        <div id="project-preview-img">
          <div class="static-preview-1" />
          <div class="static-preview-2" />
        </div>
      </div>
    </section>

    <ProjectsNavbar :previousComponent="'Testimonials'" :nextComponent="'Faq Card'"/>
  </article>
</template>

<script>
import ProjectsNavbar from '../../../components/widgets/projectsNavbar/ProjectsNavbar.vue'

export default {
  components: {ProjectsNavbar, }
}
</script>

<style lang="scss" src="./_fylo.scss" scoped />

