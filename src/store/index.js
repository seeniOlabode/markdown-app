import { createStore } from "vuex";
import markdownParser from "@/helper/markdownParser";

import getDefaultColorScheme from "@/helper/getDefaultTheme";

const auth = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
};

const markdown = {
  state: {
    preview: "",
    displayPreview: false,
    displayInput: true,
  },
  getters: {},
  mutations: {
    setPreview(state, payload) {
      state.preview = payload;
    },
    togglePreview(state) {
      if (state.displayPreview) {
        state.displayPreview = false;
      } else {
        state.displayPreview = true;
      }
    },
    toggleInput(state) {
      if (state.displayInput) {
        state.displayInput = false;
      } else {
        state.displayInput = true;
      }
    },
  },
  actions: {
    parseInput({ commit }, payload) {
      const HTML = markdownParser(payload);
      commit("setPreview", HTML);
    },
  },
};

const darkmode = {
  state: {
    dark: true,
  },
  getters: {},
  mutations: {
    setDarkMode(state, payload) {
      state.dark = payload.scheme === "dark" ? true : false;
      if (payload.override) {
        localStorage.setItem("markdown-theme", payload.scheme);
      }
      document.getElementsByTagName("HTML")[0].classList.remove("light");
      document.getElementsByTagName("HTML")[0].classList.remove("dark");
      document.getElementsByTagName("HTML")[0].classList.add(payload.scheme);
    },
  },
  actions: {
    fetchDefaultTheme({ commit }) {
      let savedScheme = localStorage.getItem("markdown-theme");
      let schemeObject = {};
      if (savedScheme) {
        schemeObject.scheme = savedScheme;
        schemeObject.override = false;
      } else {
        schemeObject.scheme = getDefaultColorScheme();
        schemeObject.override = false;
      }
      commit("setDarkMode", schemeObject);
    },
  },
};

export default createStore({
  modules: {
    auth: auth,
    markdown: markdown,
    darkmode: darkmode,
  },
});
