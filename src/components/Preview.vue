<template>
  <div
    class="preview-div-container h-full overflow-hidden pb-14 grid"
    :class="{
      'sm:border-l': input,
      'dark:sm:border-mark-600': input,
      'sm:border-mark-300': input,
      'col-span-2': !input,
    }"
  >
    <div class="bg-mark-200 flex items-center h-11 px-4 dark:bg-mark-900">
      <h3 class="app-heading-s text-mark-500 dark:text-mark-400">PREVIEW</h3>
      <action-button
        @click="toggleMobile()"
        id="toggle-button"
        class="ml-auto sm:hidden"
      >
        <img src="@/assets/icon-hide-preview.svg" alt="" />
      </action-button>

      <action-button
        @click="toggleMobile()"
        id="show-button"
        class="ml-auto hidden sm:block"
        v-if="input"
      >
        <img src="@/assets/icon-show-preview.svg" alt="" />
      </action-button>

      <action-button
        @click="toggleMobile()"
        id="hide-button"
        class="ml-auto hidden sm:block"
        v-else
      >
        <img src="@/assets/icon-hide-preview.svg" alt="" />
      </action-button>
    </div>
    <div class="overflow-scroll hide-scroll">
      <div
        class="px-5 py-4 preview-container overflow-scroll mb-5 hide-scroll"
        v-html="content"
      ></div>
    </div>
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
      input: (state) => state.markdown.displayInput,
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
#show-button,
#hide-button,
#toggle-button {
  padding: 7px 0;
  height: auto;
}

.preview-div-container {
  grid-template-rows: auto 1fr;
}

.preview-container {
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
:global(.hide-scroll::-webkit-scrollbar) {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
:global(.hide-scroll) {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media (min-width: 640px) {
  .preview-div-container {
    display: grid !important;
  }
}
</style>
