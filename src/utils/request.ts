import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
})

request.interceptors.response.use(
  (res) => {
    const response = res.data ?? {}
    if (response.code === 0)
      return response.result

    return Promise.reject(response.message)
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default request
