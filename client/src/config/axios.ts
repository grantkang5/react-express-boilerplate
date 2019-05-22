import Axios from 'axios'

const axiosConfig = () => {
  if (process.env.NODE_ENV === 'development') Axios.defaults.proxy = {
    host: '127.0.0.1',
    port: 4000
  }

  return Axios
}

export default axiosConfig