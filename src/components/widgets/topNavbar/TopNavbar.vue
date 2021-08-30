<template>
  <nav id="top-navbar">
    <div class="nav-logo">
      <router-link :to="{ name: 'Home' }" >
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#33323D"
            fill-rule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>
      </router-link>
    </div>
    <Burger v-if="showBurger" />
    <NavList />
  </nav>
</template>

<script>
import Burger from "./Burger.vue";
import NavList from "./NavList.vue";

export default {
  components: { Burger, NavList },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  created() {
    if (this.windowWidth >= 768) {
      this.changeShowNavList(true);
      this.changeShowBurger(false);
    } else {
      this.changeShowNavList(false);
      this.changeShowBurger(true);
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  computed: {
    showNavList() {
      return this.$store.state.showNavList;
    },
    showBurger() {
      return this.$store.state.showBurger;
    },
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth >= 768) {
        this.changeShowNavList(true);
        this.changeShowBurger(false);
      } else {
        this.changeShowNavList(false);
        this.changeShowBurger(true);
      }
    },
  },
  methods: {
    changeShowNavList(payload) {
      this.$store.commit("mutateShowNavList", payload);
    },
    changeShowBurger(payload) {
      this.$store.commit("mutateShowBurguer", payload);
    },
    responsiveNavbar() {},
  },
};
</script>

<style src="./_topNavbar.scss" lang="scss" scoped />
