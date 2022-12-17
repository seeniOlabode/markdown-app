<template>
  <Teleport to="body" v-if="displayValue">
    <div
      id="modal-overlay"
      class="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 bg-mark-1000 bg-opacity-50 flex items-center justify-center dark:bg-mark-500 dark:bg-opacity-50"
      @click="handleClick($event)"
    >
      <div
        id="modal-content"
        class="bg-mark-100 p-6 rounded preview-container dark:bg-mark-900"
      >
        <h4>{{ heading }}</h4>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    displayValue: {
      type: Boolean,
      required: true,
    },
    heading: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleClick($event) {
      if ($event.target.id === "modal-overlay") {
        this.$emit("close-modal");
      }
    },
  },
};
</script>

<style scoped>
.preview-container h4 {
  font-size: 18px !important;
}

.preview-container {
  min-width: 343px;
  max-width: 400px;
}

.preview-container p {
  font-weight: 300;
}
</style>
