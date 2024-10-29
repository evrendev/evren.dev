import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    showLoader: false,
  }),
  actions: {
    toggleLoader() {
      this.showLoader = !this.showLoader;
    },
  },
});
