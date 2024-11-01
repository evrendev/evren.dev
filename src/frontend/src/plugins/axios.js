import axios from "axios"

const baseUrl = `${import.meta.env.VITE_API_URL}`
const instance = axios.create({
  baseURL: baseUrl,
  header: { "Content-Type": "application/json" },
})

export default instance
