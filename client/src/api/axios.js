import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ec2-3-38-251-218.ap-northeast-2.compute.amazonaws.com:8080',
  headers: { 'Access-Control-Allow-Origin': '*' },
  withCredentials: true,
});

export default instance;
