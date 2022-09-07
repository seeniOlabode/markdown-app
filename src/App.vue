<template>
  <website-header />
</template>

<script>
import WebsiteHeader from "./components/WebsiteHeader.vue";

export default {
  name: "App",
  components: { WebsiteHeader },
};
</script>

<style>
#app {
  @apply font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
