import axios from "axios"
import Tr from "@/plugins/i18n/translation"

const baseUrl = `${import.meta.env.VITE_API_URL}`
const acceptLanguage = Tr.currentLocale
const instance = axios.create({
  baseURL: baseUrl,
  header: {
    "Content-Type": "application/json",
    "Accept-Language": acceptLanguage,
  },
})

export default instance
