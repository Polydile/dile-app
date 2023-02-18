import Axios from 'axios';

let backendUrl = import.meta.env.VITE_BACKEND_URL ? import.meta.env.VITE_BACKEND_URL : 'http://localhost';

export const axios = Axios.create({
  baseURL: backendUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  },
  withCredentials: true
});


