<template>
  <action-button
    class="flex items-center"
    @button-click="toggleModal()"
    buttonType="secondary"
  >
    <img width="18" src="@/assets/icon-delete.svg" alt="" />
  </action-button>

  <modal-component
    :displayValue="showDeleteModal"
    heading="Delete this document?"
    @close-modal="toggleModal()"
  >
    <p>
      Are you sure you want to delete the 'welcome.md' document and its
      contents? This action cannot be reversed.
    </p>

    <action-button buttonType="primary" class="text-mark-100 w-full mt-4"
      >Confirm & Delete</action-button
    >
  </modal-component>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

import ModalComponent from "./shared/ModalComponent.vue";

export default {
  name: "DeleteComponent",
  components: { ActionButton, ModalComponent },
  data() {
    return {
      showDeleteModal: true,
    };
  },
  methods: {
    toggleModal() {
      this.showDeleteModal = this.showDeleteModal ? false : true;
    },
  },
};
</script>

<style scoped>
.preview-container p {
  font-weight: 300;
}
</style>
