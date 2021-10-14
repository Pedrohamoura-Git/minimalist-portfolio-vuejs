<!-- @format -->

<template>
 <article id="my-project">
  <section class="project-content custom-border-top">
   <div class="project-details">
    <h1>Poke Shop</h1>

    <div class="project-info">
     <p>App que possibilita pesquisar os repositórios do usuário inserido. Repositórios obtidos através do consumo da RESTful API <a href="https://docs.github.com/pt/rest" alt="link para o site da API">GitHub</a>.
      <br />
     </p>
    </div>

    <p class="build-with">
     Design Interativo / Responsivo
     <br />
     HTML / CSS / SASS / JS / VUE.JS / VUEX / VUE-ROUTER / RESTful API / VITE
    </p>

    <div class="project-details-links">
     <a href="https://pedro-github-profiles.netlify.app" class="type-two-link" target="_blank">Ver site</a>
     <a href="https://github.com/Pedrohamoura-Git/github-profiles" class="type-two-link" target="_blank">Ver README</a>
    </div>
   </div>

   <div class="about-project custom-border-top">
    <div class="project-bg">
     <h1>Sobre o projeto</h1>
     <p>
      O usuário deve ser capaz de:
      <br />
      => ver os itens com layout otimizado de acordo com o tamanho da tela;
      <br />
      => ver os efeitos <em>hover</em> em todos os elementos interativos da página;
      <br />
      => navegar pelas páginas de projeto através da barra de navegação interna;
      <br />
      => adicionar um item no carrinho ao clique do botão "comprar";
      <br />
      => filtrar os respositórios por nome;
      <br />
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
  :nextComponent="'Poke Shop'" 
  :previousComponent="'My Portfolio'" 
  />
 </article>
</template>

<script>
import ProjectsNavbar from "../../../components/widgets/projectsNavbar/ProjectsNavbar.vue";

export default {
 components: { ProjectsNavbar },
};
</script>

<style lang="scss" src="./_githubProfiles.scss" scoped />
