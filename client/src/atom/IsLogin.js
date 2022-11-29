import { atom } from 'recoil';

const isloginState = atom({
  key: 'isloginState',
  default: false,
});

export default isloginState;
