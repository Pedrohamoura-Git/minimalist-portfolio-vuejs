<template>
  <article id="my-project">
    <div id="project-hero-img"></div>

    <section class="project-content custom-border-top">
      <div class="project-details">
        <h1>FAQ accordion card</h1>
        <div class="project-info">
          <p>
            Sessão de "Perguntas Frequentes" com layout responsivo. Também
            adicionei animações que são executadas (inclusive na imagem da
            versão mobile) a medida que o usuário clica nas perguntas.
          </p>
        </div>
        <p class="build-with">
          Design Interativo / Responsivo
          <br />
          HTML / CSS
        </p>
        <div class="project-details-links">
          <a
            href="https://pedro-faq-cards.netlify.app"
            class="type-two-link"
            target="_blank"
            >Ver site</a
          >
          <a
            href="https://github.com/Pedrohamoura-Git/Frontend-Mentor-Challenges/tree/main/Javascript%2C%20HTML%20%26%20CSS/Newbie/faq-accordion-card-main"
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
            => mostrar e ocultar as respostas ao clicar nas perguntas; <br />
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
    <ProjectsNavbar :previousComponent="'Todo App'" :nextComponent="'Fylo'"/>
  </article>
</template>

<script>
import ProjectsNavbar from '../../../components/widgets/projectsNavbar/ProjectsNavbar.vue'

export default {
  components: {ProjectsNavbar, }
}
</script>

<style lang="scss" src="./_faqCard.scss" scoped />

