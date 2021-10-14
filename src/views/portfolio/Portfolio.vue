<!-- @format -->

<template>
 <article id="projects">
  <div v-for="project in projects" :key="project.id">
   <section class="project-wrapper">
    <img v-if="isOdd(project.id)" class="project-img" :id="project.idName + '-project-img'" />

    <div class="about-project">
     <h1>{{ project.title }}</h1>
     <p>{{ project.about }}</p>
     <router-link :to="{ name: project.routeSlugName }" class="type-two-link">ver projeto</router-link>
    </div>

    <img v-if="!isOdd(project.id)" class="project-img" :id="project.idName + '-project-img'" />
   </section>
   <div class="projects-border-divider"></div>
  </div>

  <section id="full-repository">
   <h1>Quer ver mais projetos?</h1>
   <div class="custom-border" />
   <a href="https://github.com/Pedrohamoura-Git/Frontend-Mentor-Challenges" class="type-two-link" target="_blank">Repositório completo</a>
  </section>
  <Cta />
 </article>
</template>

<script>
import Cta from "@/components/widgets/cta/Cta.vue";

export default {
 components: { Cta },
 data() {
  return {
   projects: [
    {
     id: 7,
     idName: "seventh",
     title: "Poke Shop",
     about: "Loja de pokémons que consume uma RESTful API - PokeApi.",
     routeSlugName: "Poke Shop",
    },
    {
     id: 6,
     idName: "sixth",
     title: "Github Profiles",
     about: "Um App que pesquisa e mostra todos os repositórios públicos do usuário informado.",
     routeSlugName: "Github Profiles",
    },
    {
     id: 5,
     idName: "fifth",
     title: "Minimalist Portfolio",
     about: "Meu portfolio pessoal, onde organizo e disponibilizo alguns dos meus principais projetos.",
     routeSlugName: "My Portfolio",
    },
    {
     id: 4,
     idName: "fourth",
     title: "To-do app",
     about:
      "Neste projeto eu precisei construir um app totalmente responsivo baseado no design fornecido. Eu usei HTML semântico, junto com CSS Grid e JavaScript em todas as partes interativas. O usuário consegue adicionar, remover, marcar e filtrar as notas. Além de mudar o tema para escuro ou claro a medida que desejar.",
     routeSlugName: "Todo App",
    },
    {
     id: 3,
     idName: "third",
     title: "FAQ accordion card",
     about:
      'Sessão de "Perguntas Frequentes" layout responsivo. Também adicionei animações que são executadas (inclusive na imagem da versão mobile) a medida que o usuário clica nas perguntas.',
     routeSlugName: "Faq Card",
    },
    {
     id: 2,
     idName: "second",
     title: "Fylo",
     about:
      "Neste projeto eu precisei construir uma página de conversão completa, o que foi uma ótima oportunidade para testar os meus conhecimentos de HTML e CSS de forma geral. Layout responsivo e interativo.",
     routeSlugName: "Fylo",
    },
    {
     id: 1,
     idName: "first",
     title: "Testimonials grid section",
     about:
      "Neste projeto eu precisei construir uma página de depoimentos responsiva. Devido a quantidade de elementos com diferentes tamanhos, este projeto foi excelente para desafiar os meus conhecimentos de Grid layout e Flexbox. Também acrescentei algumas animações que são executadas quando o usuário passa o mouse por cima de cada card.",
     routeSlugName: "Testimonials",
    },
   ],
  };
 },
 computed: {
  projectId() {
   return this.$store.state.projectId;
  },
 },
 methods: {
  newId() {
   this.$store.commit("mutateProjectId", this.projectId + 1);
  },
  isOdd(value) {
   if (value % 2 == 0) return true;
   else return false;
  },
 },
};
</script>

<style lang="scss" src="./_portfolio.scss" scoped />
