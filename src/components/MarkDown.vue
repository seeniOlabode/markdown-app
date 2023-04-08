<template>
  <main
    class="h-full overflow-hidden dark:bg-mark-1000"
    :class="{ relative: menu.menuOpen, 'select-none': resizeMouseDown }"
  >
    <div
      v-show="menu.menuOpen"
      class="absolute left-0 right-0 top-0 bottom-0 w-full overlay"
      @click="menu.toggleMenu()"
    ></div>
    <div
      id="app-holder"
      :style="appHolderGridStyles"
      class="h-full overflow-hidden flex"
      @mousemove="handleResize"
      @mouseup="turnoffMouseDown"
    >
      <user-input
        v-show="displayInput"
        :style="fieldsWidthStyles.markdown"
        ref="userInput"
      >
        <div id="preview-overlay" v-show="markOverlay"></div>
      </user-input>
      <div
        v-show="displayInput"
        class="resize-div h-full cursor-col-resize hover:w-1 w-[1px] hidden sm:block"
        :class="[
          {
            'dark:sm:bg-mark-600': displayInput,
            'sm:bg-mark-300': displayInput,
            'w-1': resizeMouseDown,
            guide: !newVisit,
          },
        ]"
        @mousedown="resizeMouseDown = true"
      ></div>
      <preview-vue
        v-show="displayPreview"
        :style="fieldsWidthStyles.preview"
        ref="preview"
      >
        <div id="preview-overlay" v-show="prevOverlay"></div>
      </preview-vue>
    </div>
  </main>
</template>

<script>
import UserInput from "./UserInput.vue";
import PreviewVue from "./Preview.vue";
import { mapState } from "vuex";

import { mobileMenu } from "@/App.vue";

export default {
  name: "MarkDown",
  components: { UserInput, PreviewVue },
  data() {
    return {
      menu: mobileMenu,
      resizeMouseDown: false,
      centerPosition: null,
      markOverlay: false,
      prevOverlay: false,
      newVisit: JSON.parse(localStorage.getItem("mark-new-visit")),
    };
  },
  watch: {
    displayInput(value) {
      if (value) {
        this.centerPosition = null;
        this.markOverlay = false;
        this.prevOverlay = false;
      }
    },
    newVisit(value) {
      if (value) {
        localStorage.setItem("mark-new-visit", true);
      }
    },
  },
  methods: {
    handleResize($event) {
      if (this.resizeMouseDown) {
        this.newVisit = true;
        this.centerPosition = {
          clientX: $event.clientX,
          screenWidth: window.innerWidth,
        };
      }
    },
    turnoffMouseDown() {
      if (this.resizeMouseDown && this.markOverlay) {
        this.$store.commit("togglePreview");
        this.$store.commit("toggleInput");
      }
      this.resizeMouseDown = false;
    },
    setOverlay(element, value) {
      this[`${element}Overlay`] = value;
    },
  },
  computed: {
    ...mapState({
      displayPreview: (state) => state.markdown.displayPreview,
      displayInput: (state) => state.markdown.displayInput,
    }),
    fieldsWidthStyles() {
      if (this.centerPosition === null) {
        return {
          markdown: {
            width: "50%",
          },
          preview: {
            width: "50%",
          },
        };
      } else {
        let mousePosition = this.centerPosition.clientX;
        let screenWidth = this.centerPosition.screenWidth;

        let firstWidth = (mousePosition / screenWidth) * 100;
        let secondWidth = 100 - firstWidth;

        const userInput = this.$refs.userInput.$refs.userInput;

        if (screenWidth - mousePosition < 376) {
          secondWidth = (376 / screenWidth) * 100;
          firstWidth = 100 - secondWidth;
        }

        if (userInput.clientWidth < 300) {
          this.setOverlay("mark", true);
        } else {
          this.setOverlay("mark", false);
          this.setOverlay("prev", false);
        }
        return {
          markdown: {
            width: `${firstWidth}%`,
          },
          preview: {
            width: `${secondWidth}%`,
          },
        };
      }
    },
    // appHolderGridStyles() {
    //   if (this.centerPosition === null) {
    //     return { "grid-template-columns": "50fr auto 50fr" };
    //   } else {
    //     let mousePosition = this.centerPosition.clientX;
    //     let screenXWidth = this.centerPosition.screenX;

    //     let firstWidth = (mousePosition / screenXWidth) * 100;
    //     let secondWidth = 100 - firstWidth;
    //     return {
    //       "grid-template-columns": `${firstWidth}fr auto ${secondWidth}fr`,
    //     };
    //   }
    // },
  },
};
</script>

<style scoped>
/* #app-holder {
  grid-template-columns: 1fr 1px 1fr;
} */
.resize-div {
  @apply active:bg-mark-orange;
}

div[id*="overlay"] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @apply bg-mark-orange-hover bg-opacity-20;
}

.guide {
  animation: guideAnimation 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes guideAnimation {
  from {
    @apply bg-mark-orange;
  }
  to {
  }
}
</style>
