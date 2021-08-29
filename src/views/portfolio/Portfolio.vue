<template>
  <article id="projects">
    <section id="first-project">
      <div class="project-img"></div>
      <div class="project-wrapper">
        <h1>Minimalist Portfolio</h1>
        <p>
          Meu portfolio pessoal, onde organizo e disponibilizo alguns dos meus
          principais projetos.
        </p>
        <router-link :to="{name: 'My Portfolio'}" class="type-two-link">ver projeto</router-link>
      </div>
    </section>
<!-- CRIAR UM OBJETO QUE RENDERIZA OS PROJETOS EM ORDEM  -->
    <div class="projects-border-divider"></div>

    <section id="second-project">
      <div class="project-wrapper">
        <h1>To-do app</h1>
        <p>
          Neste projeto eu precisei construir um app totalmente responsivo
          baseado no design fornecido. Eu usei HTML semântico, junto com CSS
          Grid e JavaScript em todas as partes interativas.
          <br />
          O usuário consegue adicionar, remover, marcar e filtrar as notas. Além
          de mudar o tema para escuro ou claro a medida que desejar.
        </p>
        <router-link :to="{ name: 'Todo App' }" class="type-two-link"
          >ver projeto</router-link
        >
      </div>
      <div class="project-img"></div>
    </section>

    <div class="projects-border-divider"></div>

    <section id="third-project">
      <div class="project-img"></div>
      <div class="project-wrapper">
        <h1>FAQ accordion card</h1>
        <p>
          Sessão de "Perguntas Frequentes" com layout responsivo. Também
          adicionei animações que são executadas (inclusive na imagem da versão
          mobile) a medida que o usuário clica nas perguntas.
        </p>
        <router-link :to="{name: 'Faq Card'}" class="type-two-link">ver projeto</router-link>
      </div>
    </section>

    <div class="projects-border-divider"></div>

    <section id="fourth-project">
      <div class="project-wrapper">
        <h1>Fylo</h1>
        <p>
          Neste projeto eu precisei construir uma página de conversão completa,
          o que foi uma ótima oportunidade para testar os meus conhecimentos de
          HTML e CSS de forma geral. <br />
          Layout responsivo e interativo.
        </p>
        <router-link :to="{name: 'Fylo'}" class="type-two-link">ver projeto</router-link>
      </div>
      <div class="project-img"></div>
    </section>

    <div class="projects-border-divider"></div>

    <section id="fifth-project">
      <div class="project-img"></div>
      <div class="project-wrapper">
        <h1>Testimonials grid section</h1>
        <p>
          Neste projeto eu precisei construir uma página de depoimentos
          responsiva. Devido a quantidade de elementos com diferentes tamanhos,
          este projeto foi excelente para desafiar os meus conhecimentos de Grid
          layout e Flexbox. <br />
          Também acrescentei algumas animações que são executadas quando o
          usuário passa o mouse por cima de cada card.
        </p>
        <router-link :to="{name: 'Testimonials'}" class="type-two-link">ver projeto</router-link>
      </div>
    </section>

    <div class="projects-border-divider"></div>

    <section id="full-repository">
      <h1>Quer ver mais projetos?</h1>
      <div class="custom-border" />
      <a
        href="https://github.com/Pedrohamoura-Git/Frontend-Mentor-Challenges"
        class="type-two-link"
        target="_blank"
        >Repositório completo</a
      >
    </section>

    <Cta />
  </article>
</template>

<script>
import Cta from "@/components/widgets/cta/Cta.vue";

export default {
  components: { Cta },
};
</script>

<style lang="scss" src="./_portfolio.scss" scoped />


// CRIAR UMA ARRAY DE OBJETOS COM AS INFORMAÇÕES DE CADA PROJETO: TÍTULO, IMAGEM, RESUMO, E LINK.