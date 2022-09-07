<template>
  <main class="h-full">
    <div class="bg-mark-200 flex items-center h-11 px-4">
      <h3 class="app-heading-s text-mark-500">MARKDOWN</h3>
      <action-button id="show-button" class="ml-auto">
        <img src="@/assets/icon-show-preview.svg" alt="" />
      </action-button>
    </div>
    <user-input />
  </main>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";
import UserInput from "./UserInput.vue";

export default {
  name: "MarkDown",
  components: { ActionButton, UserInput },
};
</script>

<style>
#show-button {
  padding: 7px 0;
  height: auto;
}
</style>
