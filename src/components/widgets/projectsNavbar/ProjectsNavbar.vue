<template>
  <section class="projects-navbar">
    <div class="previous-project">
      <router-link :to="{ name: previousComponent }" class="previous-link">
        <div class="previous-icon" />
        <h3>{{ previousComponent }}</h3>
        <p>anterior</p>
      </router-link>
    </div>
    <div class="nav-divider" />
    <div class="next-project">
      <router-link :to="{ name: nextComponent }" class="next-link">
        <div class="next-icon" />
        <h3>{{ nextComponent }}</h3>
        <p>próximo</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["previousComponent", "nextComponent"],
};
</script>

<style lang="scss" src="./_projectsNavbar.scss" scoped />
