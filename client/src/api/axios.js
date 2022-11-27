import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://80ed-222-110-187-162.jp.ngrok.io/',
  headers: { 'Access-Control-Allow-Origin': '*' },
  withCredentials: true,
});

const getUser = async () => {
  const resposne = await apiClient.get('/member/users/1');
};
// const createUser = async (registerInfo) => {
//   const resposne = await apiClient.post('/members/signup', registerInfo);
// };

export default apiClient;
