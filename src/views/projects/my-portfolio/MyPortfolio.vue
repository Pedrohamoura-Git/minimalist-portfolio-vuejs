<template>
  <article id="my-project">

    <section class="project-content custom-border-top">
      <div class="project-details">
        <h1>Minimalist Portfolio</h1>

        <div class="project-info">
          <p>
            Meu portfolio pessoal, onde organizo e disponibilizo alguns dos meus
            principais projetos. <br />
          </p>
        </div>

        <p class="build-with">
          Design Interativo / Responsivo
          <br />
          HTML / CSS / SASS / VUE.JS / VUEX / VUE-ROUTER
        </p>

        <div class="project-details-links">
          <a
            href="https://github.com/Pedrohamoura-Git/minimalist-portfolio-vuejs"
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
            O usuário deve ser capaz de:
            <br />
            => ver os itens com layout otimizado de acordo com o tamanho da
            tela;
            <br />
            => ver os efeitos <em>hover</em> em todos os elementos interativos
            da página;
            <br />
            => navegar pelas páginas de projeto através da barra de navegação
            interna;
            <br />
            => ver uma mensagem de erro se: <br />
            ==> os campos "Nome", "Email" "Messagem" estiverem vazios. A
            mensagem deve ser "Este campo é necessário";
            <br />
            ==> o e-mail não estiver formatado corretamente. A mensagem deve
            ser"Insira um endereço de e-mail válido";
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

    <ProjectsNavbar
      :previousComponent="'Testimonials'"
      :nextComponent="'Todo App'"
    />
  </article>
</template>

<script>
import ProjectsNavbar from "../../../components/widgets/projectsNavbar/ProjectsNavbar.vue";

export default {
  components: { ProjectsNavbar },
};
</script>

<style lang="scss" src="./_myPortfolio.scss" scoped />
