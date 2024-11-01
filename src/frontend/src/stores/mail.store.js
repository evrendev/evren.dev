import { defineStore } from "pinia"
import { axios } from "@/plugins"

export const useMailStore = defineStore("mail", {
  state: () => ({
    response: {},
  }),
  actions: {
    async send(message) {
      this.response.loading = true
      try {
        await axios
          .post(`sendmail`, message, {
            headers: { "Accept-Language": localStorage.getItem("lang") },
          })
          .then(response => {
            this.response = response.data
            this.response.loading = false
          })
      } catch (error) {
        this.response.data = { error }
        this.response.loading = false
      }
    },
  },
})
