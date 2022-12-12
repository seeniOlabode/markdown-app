<template>
  <div class="preview-div-container h-full overflow-hidden pb-14">
    <div class="bg-mark-200 flex items-center h-11 px-4 dark:bg-mark-900">
      <h3 class="app-heading-s text-mark-500 dark:text-mark-400">PREVIEW</h3>
      <action-button @click="toggleMobile()" id="show-button" class="ml-auto">
        <img src="@/assets/icon-hide-preview.svg" alt="" />
      </action-button>
    </div>
    <div
      class="px-5 py-4 preview-container overflow-scroll mb-5"
      v-html="content"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "PreviewComponent",
  components: { ActionButton },
  computed: {
    ...mapState({
      content: (state) => state.markdown.preview,
    }),
  },
  methods: {
    toggleMobile() {
      this.$store.commit("togglePreview");
      this.$store.commit("toggleInput");
    },
  },
};
</script>

<style scoped>
#show-button {
  padding: 7px 0;
  height: auto;
}

.preview-div-container {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
