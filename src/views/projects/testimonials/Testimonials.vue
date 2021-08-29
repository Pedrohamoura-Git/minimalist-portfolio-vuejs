<template>
  <article id="my-project">

    <section class="project-content custom-border-top">
      <div class="project-details">
        <h1>Testmonials grid section</h1>
        <div class="project-info">
          <p>
            Neste projeto eu precisei construir uma página de depoimentos
            responsiva. Devido a quantidade de elementos com diferentes
            tamanhos, este projeto foi excelente para desafiar os meus
            conhecimentos de Grid layout e Flexbox. Também acrescentei algumas
            animações que são executadas quando o usuário passa o mouse por cima
            de cada card.
          </p>
        </div>
        <p class="build-with">
          Design Interativo / Responsivo
          <br />
          Semantic HTML5 markup / Mobile-first workflow / CSS Grid & Flexbox /
          CSS animations
        </p>
        <div class="project-details-links">
          <a
            href="https://pedro-testimonials-grid.netlify.app"
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
      <div class="about-project custom-border-top">
        <div class="project-bg">
          <h1>Sobre o projeto</h1>
          <p>
            O usuário deve ser capaz de: <br />
            => ver os itens com layout otimizado de acordo com o tamanho da
            tela; <br />
            => ver os efeitos <em>hover</em> em todos os elementos interativos
            da página; <br />
          </p>
        </div>
      </div>
      <div class="project-preview custom-border-top">
        <h1>Preview do projeto</h1>
        <div id="project-preview-img">
          <div class="static-preview-1"></div>
          <div class="static-preview-2"></div>
        </div>
      </div>
    </section>

    <ProjectsNavbar :previousComponent="'Fylo'" :nextComponent="''"/>
  </article>
</template>

<script>
import ProjectsNavbar from '../../../components/widgets/projectsNavbar/ProjectsNavbar.vue'

export default {
  components: {ProjectsNavbar, }
}
</script>

<style lang="scss" src="./_testimonials.scss" scoped />

