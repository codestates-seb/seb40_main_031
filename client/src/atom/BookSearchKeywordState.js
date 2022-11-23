import { atom } from 'recoil';

const bookSearchKeywordState = atom({
  key: 'bookSearchKeywordState',
  default: '',
});

export default bookSearchKeywordState;
