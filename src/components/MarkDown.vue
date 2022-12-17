<template>
  <main class="h-full overflow-hidden dark:bg-mark-1000">
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

export default {
  name: "MarkDown",
  components: { UserInput, PreviewVue },
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
