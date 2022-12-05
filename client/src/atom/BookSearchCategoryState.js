import { atom } from 'recoil';

const bookSearchCategoryState = atom({
  key: 'bookSearchCategoryState',
  default: '',
});

export default bookSearchCategoryState;
