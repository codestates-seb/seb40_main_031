import apiClient from './axios';

const getUserById = async (memberId) => {
  const resposne = await apiClient.get(`/users/${memberId}`);
};

const getCurrentUser = async () => {
  const accessToken = localStorage.getItem('token');
  const resposne = await apiClient.get(`/members/users/`);
};
const getUser = async () => {
  const resposne = await apiClient.get('/member/users/1');
};

export { getUserById, getCurrentUser, getUser };
