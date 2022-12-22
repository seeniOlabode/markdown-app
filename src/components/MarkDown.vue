<template>
  <main
    class="h-full overflow-hidden dark:bg-mark-1000"
    :class="{ relative: menu.menuOpen }"
  >
    <div
      v-show="menu.menuOpen"
      class="absolute left-0 right-0 top-0 bottom-0 w-full overlay"
      @click="menu.toggleMenu()"
    ></div>
    <div id="app-holder" class="h-full overflow-hidden sm:grid">
      <user-input v-show="displayInput" />
      <preview-vue v-show="displayPreview" />
    </div>
  </main>
</template>

<script>
import UserInput from "./UserInput.vue";
import PreviewVue from "./Preview.vue";
import { mapState } from "vuex";

import { mobileMenu } from "@/App.vue";

export default {
  name: "MarkDown",
  components: { UserInput, PreviewVue },
  data() {
    return {
      menu: mobileMenu,
    };
  },
  computed: {
    ...mapState({
      displayPreview: (state) => state.markdown.displayPreview,
      displayInput: (state) => state.markdown.displayInput,
    }),
  },
};
</script>

<style>
#app-holder {
  grid-template-columns: 1fr 1fr;
}
</style>
