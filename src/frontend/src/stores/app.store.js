import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
  state: () => ({
    showPreloader: false,
  }),
  actions: {
    togglePreloader() {
      this.showPreloader = !this.showPreloader
    },
  },
})
