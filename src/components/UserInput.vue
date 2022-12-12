<template>
  <div class="h-full input-div-container">
    <div class="bg-mark-200 flex items-center h-11 px-4 dark:bg-mark-900">
      <h3 class="app-heading-s text-mark-500 dark:text-mark-400">MARKDOWN</h3>
      <action-button @click="toggleMobile()" id="show-button" class="ml-auto">
        <img src="@/assets/icon-show-preview.svg" alt="" />
      </action-button>
    </div>
    <textarea
      class="w-full p-4 mark-down-code overflow-scroll mb-20 dark:bg-mark-1000 dark:text-mark-400"
      name="MarkDownInput"
      id=""
      @input="updatePreview()"
      v-model="markdown"
      resize="false"
    ></textarea>
  </div>
</template>
<script>
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "UserInput",
  components: { ActionButton },
  data() {
    return {
      markdown: "",
    };
  },
  methods: {
    updatePreview() {
      this.$store.dispatch("parseInput", this.markdown);
    },
    toggleMobile() {
      this.$store.commit("togglePreview");
      this.$store.commit("toggleInput");
    },
  },
};
</script>

<style scoped>
textarea:focus {
  outline: none;
}

textarea {
  resize: none;
}

#show-button {
  padding: 7px 0;
  height: auto;
}

.input-div-container {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
