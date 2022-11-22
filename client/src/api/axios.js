import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cd79-222-110-187-162.jp.ngrok.io',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default instance;
