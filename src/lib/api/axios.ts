import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://164.92.230.113:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default instance;
