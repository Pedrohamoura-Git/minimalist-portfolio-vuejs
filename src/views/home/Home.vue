<template>
  <div id="home">
    <Hero />
    <Profile />
    <Cta />
  </div>
</template>

<script>
// @ is an alias to /src
import Cta from "@/components/widgets/cta/Cta.vue";
import Hero from "./hero/Hero.vue";
import Profile from "./profile/Profile.vue";

export default {
  name: "Home",
  components: { Cta, Hero, Profile },
};
</script>

<style lang="scss" src="./home.scss" scoped />
