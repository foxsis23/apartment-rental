import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://apartmentrental-api.site',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default instance;
