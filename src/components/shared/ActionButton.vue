<template>
  <button :class="buttonType" @click="$emit('buttonClick', true)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonType: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button {
  @apply h-full p-3;
}

.primary {
  @apply bg-mark-orange;
  border-radius: 4px;
}
</style>
