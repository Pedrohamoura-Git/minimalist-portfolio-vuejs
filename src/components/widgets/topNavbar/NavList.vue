<template>
  <transition
    v-if="showNavList">
    <ul id="nav-list">
      <li>
        <router-link 
        :to="{ name: 'Home' }">HOME</router-link>
      </li>
      <li>
        <router-link 
        :to="{ name: 'Portfolio' }">PORTFÓLIO</router-link>
      </li>
      <li>
        <router-link 
        :to="{ name: 'Contact' }">contatos</router-link>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    showNavList() {
      return this.$store.state.showNavList;
    },
  },
};
</script>

<style src="./_topNavbar.scss" lang="scss" scoped />
