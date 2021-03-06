import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'http://localhost',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  },
  withCredentials: true
});


