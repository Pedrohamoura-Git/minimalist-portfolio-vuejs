<template>
  <section id="profile">
    <div id="mypicture">
      <a href="https://www.freepik.com/vectors/work" target="_blank">Work vector created by stories - www.freepik.com</a>        
      <!-- <a href='https://www.freepik.com/vectors/work' target="_blank">Work vector created by stories - www.freepik.com</a> -->
    </div>
    <section id="aboutme" class="custom-border">
      <h1>Sobre Mim</h1>
      <p>
        Sou um desenvolvedor júnior em busca de uma nova oportunidade no mercado de trabalho.<br>
        Eu procuro desenvolver os meus projetos respeitando as boas práticas: códigos de acordo com ás técnicas de acessibilidade, bem comentados e limpos.<br> 
        Atualmente uso HTML, CSS, SASS, BootStrap, JavaScript e Vue.js, 
        mas me adapto a qualquer outra ferramenta necessária para realizar o projeto.<br>
        Moro em Vitória da Conquista, BA, e estou disposto a trabalhar remotamente porque acredito que seria uma ótima oportunidade para aprender mais sobre <em><strong>Scrum, Lean, Kanban, Smart</strong></em> ou qualquer outra metodologia ágil que empresa se identifique.<br>
        Quando não estou <em>codando</em>, gosto de ler, escrever, práticar exercícios físicos e sair com os amigos.<br>
        Fique a vontade para conferir o meu trabalho.
      </p>
      <router-link class="type-two-link" :to="{name: 'Portfolio'}">Ver portfólio</router-link>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style src="./_profile.scss" lang="scss" scoped />