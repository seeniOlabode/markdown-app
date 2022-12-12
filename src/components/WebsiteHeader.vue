<template>
  <header class="pr-2 bg-mark-800 h-14 flex items-center">
    <button
      id="menu"
      class="h-full bg-mark-700 aspect-square flex items-center justify-center"
      @click="menu.toggleMenu()"
    >
      <img v-show="!menu.menuOpen" src="@/assets/icon-menu.svg" alt="" />
      <img v-show="menu.menuOpen" src="@/assets/icon-close.svg" alt="" />
    </button>
    <div class="flex items-center w-full">
      <div class="pl-6 flex items-center w-2/4">
        <img src="@/assets/icon-document.svg" alt="" />
        <input
          class="text-mark-100 ml-4 w-full"
          id="file-name"
          type="text"
          value="welcome.md"
        />
      </div>
      <div class="ml-auto flex items-center">
        <action-button
          class="flex items-center"
          @button-click="test()"
          buttonType="secondary"
        >
          <img width="18" src="@/assets/icon-delete.svg" alt="" />
        </action-button>
        <action-button
          @button-click="test()"
          class="ml-3 flex items-center"
          buttonType="primary"
        >
          <img width="16" src="@/assets/icon-save.svg" alt="" />
        </action-button>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

import { mobileMenu } from "@/App.vue";

export default {
  name: "WebsiteHeader",
  components: { ActionButton },
  data() {
    return {
      menu: mobileMenu,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
#file-name {
  background: none;
}
</style>
