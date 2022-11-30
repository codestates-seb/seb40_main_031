// 수정사항이 있으면 배열,객체 안에 요소를 수정하면 됩니다.
const NAV_LIST = Object.freeze([
  {
    name: '공지사항',
    href: '/notice',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: '문의하기',
    href: 'http://pf.kakao.com/_xexaxePxj/chat',
  },
  {
    name: '로그인',
    href: '/login',
  },
  {
    name: '회원가입',
    href: 'signup',
  },
]);

const FAQ_TAB_BUTTON = Object.freeze([
  '전체',
  '책관련',
  '댓글관련',
  '유저관련',
  '저작권관련',
  '회원탈퇴',
  '기타',
]);

const FAQ_LIST = Object.freeze([
  '책은어떻게 구매하나요?1',
  '책은어떻게 구매하나요?2',
  '책은어떻게 구매하나요?3',
  '책은어떻게 구매하나요?4',
  '책은어떻게 구매하나요?5',
  '책은어떻게 구매하나요?6',
  '책은어떻게 구매하나요?7',
  '책은어떻게 구매하나요?8',
  '책은어떻게 구매하나요?9',
  '책은어떻게 구매하나요?10',
]);

export { NAV_LIST, FAQ_TAB_BUTTON, FAQ_LIST };
