<template>
  <div class="flex items-center gap-3">
    <img src="@/assets/icon-dark-mode.svg" alt="" />
    <!-- Rounded switch -->
    <label for="darkmode" class="switch">
      <input
        id="darkmode"
        type="checkbox"
        @change="toggleDarkMode()"
        :checked="!dark"
      />
      <span class="slider round"></span>
    </label>
    <img src="@/assets/icon-light-mode.svg" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DarkmodeToggle",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dark: (state) => state.darkmode.dark,
    }),
  },
  methods: {
    darkmodeOn() {
      this.$store.commit("setDarkMode", { scheme: "dark", override: true });
    },
    darkmodeOff() {
      this.$store.commit("setDarkMode", { scheme: "light", override: true });
    },
    toggleDarkMode() {
      if (this.dark) {
        this.darkmodeOff();
      } else {
        this.darkmodeOn();
      }
    },
  },
};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  @apply bg-mark-600;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 5.5px;
  bottom: 5.5px;
  @apply bg-mark-100;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(23px);
  -ms-transform: translateX(23px);
  transform: translateX(23px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
