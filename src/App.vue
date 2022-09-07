<template>
  <website-header />
  <mark-down />
</template>

<script>
import WebsiteHeader from "./components/WebsiteHeader.vue";
import MarkDown from "./components/MarkDown.vue";

export default {
  name: "App",
  components: { WebsiteHeader, MarkDown },
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
}
</style>
