<template>
  <nav class="bg-mark-900 py-7 px-6 relative h-screen">
    <img src="@/assets/logo.svg" width="150" alt="" />
    <div class="mt-7">
      <h2 class="text-mark-500 font-medium text-sm">MY DOCUMENTS</h2>
      <action-button class="text-mark-100 w-full mt-5" buttonType="primary"
        >+ New Document</action-button
      >
      <ul class="mt-6">
        <li
          v-for="(file, index) in files"
          :key="file.name + index"
          class="flex items-center gap-4 mb-6"
        >
          <img src="@/assets/icon-document.svg" alt="" />
          <div>
            <p class="text-mark-500 font-light">{{ file.date }}</p>
            <p class="text-mark-100 font-normal">{{ file.name }}</p>
          </div>
        </li>
      </ul>
    </div>

    <toggle-component class="absolute bottom-6" />
  </nav>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";
import ToggleComponent from "./ToggleComponent.vue";

export default {
  name: "MobileMenu",
  components: {
    ActionButton,
    ToggleComponent,
  },
  data() {
    return {
      files: [
        {
          name: "untitled-document.md",
          date: "01 April 2022",
        },
        {
          name: "welcome.md",
          date: "01 April 2022",
        },
      ],
    };
  },
};
</script>
