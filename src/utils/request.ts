import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
})

const NO_ERROR_CODE = 0

request.interceptors.response.use(
  (res) => {
    const response = res.data ?? {}
    if (response.code === NO_ERROR_CODE)
      return response.result

    return Promise.reject(response.message)
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default request
