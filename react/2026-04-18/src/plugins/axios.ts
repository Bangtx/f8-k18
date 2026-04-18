import axios from 'axios'

const api = axios.create({
  baseURL: 'https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com'
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  }
)

export default api
