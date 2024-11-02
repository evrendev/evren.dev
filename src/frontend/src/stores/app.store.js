import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
  state: () => ({
    showPreloader: true,
  }),
  actions: {
    togglePreloader() {
      this.showPreloader = !this.showPreloader
    },
  },
})
