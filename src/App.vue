<!-- @format -->

<template>
 <div id="container">
  <main id="wrapper">
   <TopNavbar />
   <router-view v-slot="{ Component }">
    <transition
     enter-active-class="animate__animated animate__fadeIn animate__faster"
     leave-active-class="animate__animated animate__fadeOut animate__faster"
     mode="out-in"
    >
     <component :is="Component" />
    </transition>
   </router-view>
  </main>
  <Footer />
 </div>
</template>

<script>
// widgets
import TopNavbar from "./components/widgets/topNavbar/TopNavbar.vue";
import Footer from "./components/widgets/footer/Footer.vue";
export default {
 components: { TopNavbar, Footer },
 created() {
  let html = document.documentElement;
  html.className = "light";
 },
};
</script>

<style lang="scss" src="./_app.scss" />
