<template>
  <div class="h-full" :class="{ 'menu-open': menu.menuOpen }">
    <mobile-menu v-if="menu.menuOpen" />
    <div class="h-full">
      <website-header />
      <mark-down />
    </div>
  </div>
</template>

<script>
import WebsiteHeader from "./components/WebsiteHeader.vue";
import MarkDown from "./components/MarkDown.vue";
import MobileMenu from "./components/mobile/MobileMenu.vue";
import { reactive } from "vue";

export const mobileMenu = reactive({
  menuOpen: false,
  toggleMenu: function () {
    this.menuOpen = this.menuOpen ? false : true;
  },
});

export default {
  name: "App",
  components: { WebsiteHeader, MarkDown, MobileMenu },
  data() {
    return {
      menu: mobileMenu,
    };
  },
  created() {
    this.$store.dispatch("fetchDefaultTheme");
  },
};
</script>

<style>
@import url("./assets/mark-down.css");

#app {
  @apply font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.menu-open {
  display: grid;
  grid-template-columns: 300px 100vw;
  /* overflow: hidden; */
  animation: slide 0.2s;
  animation-timing-function: ease;
}

.menu-open div {
}

@keyframes slide {
  0% {
    transform: translate(-150px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
