<template>
  <article id="my-project">
    <div id="project-hero-img"></div>

    <section class="project-content custom-border-top">
      <div class="project-details">
        <h1>TO-DO APP</h1>
        <div class="project-info">
          <p>
            Neste projeto eu precisei construir um app totalmente responsivo
            baseado no design fornecido. Eu usei HTML semântico, junto com CSS
            Grid e JavaScript em todas as partes interativas. O usuário consegue
            adicionar, remover, marcar e filtrar as notas. Além de mudar o tema
            para escuro ou claro a medida que desejar.
          </p>
        </div>
        <p class="build-with">
          Design Interativo / Responsivo
          <br />
          HTML / CSS / JS
        </p>
        <div class="project-details-links">
          <a
            href="https://pedro-todo-app.netlify.app"
            class="type-two-link"
            target="_blank"
            >Ver site</a
          >
          <a
            href="https://github.com/Pedrohamoura-Git/Frontend-Mentor-Challenges/tree/main/Javascript%2C%20HTML%20%26%20CSS/Intermediate/todo-app-main"
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
            => ver os efeitos <em>hover</em> em todos os elementos interativos
            da página; <br />
            => adicionar novo item à lista; <br />
            => remover os items da lista; <br />
            => marcar os items como "concluídos"; <br />
            => filtrar os items da lista; <br />
            => remover todos os items identificados como "concluído" da lista;
            <br />
            => alternar entre os temas claro e escuro; <br />
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

    <ProjectsNavbar :previousComponent="'My Portfolio'" :nextComponent="'Faq Card'"/>
  </article>
</template>

<script>
import ProjectsNavbar from '../../../components/widgets/projectsNavbar/ProjectsNavbar.vue'

export default {
  components: {ProjectsNavbar, }
};
</script>

<style lang="scss" src="./_todoApp.scss" scoped />
