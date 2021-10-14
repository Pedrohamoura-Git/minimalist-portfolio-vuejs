<!-- @format -->

<template>
 <article id="my-project">
  <section class="project-content custom-border-top">
   <div class="project-details">
    <h1>Poke Shop</h1>

    <div class="project-info">
     <p>Esta loja de pokémons representa todo o ciclo de compra de um produto. Os dados dos pokémons são obtidos através do consumo da RESTful API <a href="https://pokeapi.co/" alt="link para o site da API">pokeapi</a>.
      <br />
     </p>
    </div>

    <p class="build-with">
     Design Interativo / Responsivo
     <br />
     HTML / CSS / SASS / JS / VUE.JS / VUEX / VUE-ROUTER / RESTful API
    </p>

    <div class="project-details-links">
     <a href="https://pedro-poke-shop.netlify.app" class="type-two-link" target="_blank">Ver site</a>
     <a href="https://github.com/Pedrohamoura-Git/poke-shop-vue" class="type-two-link" target="_blank">Ver README</a>
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
      => ver os itens no carrinho mesmo que a página seja recarregada;
      <br />
      => visualizar todos os items adicionados ao carrinho quando clicar no ícone da pokebola;
      <br />
      => modificar a quantidade de cada pokémon na página do carrinho;
      <br />
      => pesquisar por um pokémon específico;
      <br />
      => ver mensagem ao finalizar a compra;
      <br />
      => ver uma mensagem de erro se: <br />
      ==> o usuário tentar pesquisar por um pokémon sem selecionar o tipo antes;
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

  <ProjectsNavbar :previousComponent="'Github Profiles'" :nextComponent="''" />
 </article>
</template>

<script>
import ProjectsNavbar from "../../../components/widgets/projectsNavbar/ProjectsNavbar.vue";

export default {
 components: { ProjectsNavbar },
};
</script>

<style lang="scss" src="./_pokeShop.scss" scoped />
