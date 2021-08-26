<template>
  <transition v-if="burguerIsActive" mode="out-in"
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut" appear>
    <ul id="nav-list">
      <li><router-link :to="{name: 'Home'}">HOME</router-link></li>
      <li><router-link :to="{name: 'Portfolio'}">PORTFÓLIO</router-link></li>
      <li><router-link :to="{name: 'Contact'}">contatos</router-link></li>
    </ul>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    burguerIsActive() {
      return this.$store.state.burguerIsActive
    }
  }
}
</script>

<style src="./_topNavbar.scss" lang="scss" scoped />
