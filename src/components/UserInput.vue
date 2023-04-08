<template>
  <div class="h-full input-div-container grid relative grow" ref="userInput">
    <div
      class="bg-mark-200 flex items-center h-11 px-4 dark:bg-mark-900 select-none"
    >
      <h3 class="app-heading-s text-mark-500 dark:text-mark-400">MARKDOWN</h3>
      <action-button
        @click="toggleMobile()"
        id="show-button"
        class="ml-auto sm:hidden"
      >
        <img src="@/assets/icon-show-preview.svg" alt="" />
      </action-button>
    </div>
    <textarea
      class="w-full p-4 mark-down-code overflow-scroll mb-20 dark:bg-mark-1000 dark:text-mark-400 hide-scroll"
      name="MarkDownInput"
      id=""
      @input="updatePreview()"
      v-model="markdown"
      resize="false"
      :disabled="menu.menuOpen"
    ></textarea>
    <slot></slot>
  </div>
</template>
<script>
import ActionButton from "./shared/ActionButton.vue";

import { mobileMenu } from "@/App.vue";

export default {
  name: "UserInput",
  components: { ActionButton },
  data() {
    return {
      markdown:
        "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```",
      menu: mobileMenu,
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

  mounted() {
    this.updatePreview();
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
  grid-template-rows: auto 1fr;
}
</style>
