const userId = sessionStorage.getItem('UserId');

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
    href: '/signup',
  },
]);

const NAV_LIST_LOGINED = Object.freeze([
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
    name: '마이페이지',
    href: `/userpage/${userId}`,
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
  {
    id: 1,
    text: '책은어떻게구매하나요?1',
  },
  {
    id: 2,
    text: '책은어떻게구매하나요?2',
  },
  {
    id: 3,
    text: '책은어떻게구매하나요?3',
  },
]);

const NOTICE_LIST = Object.freeze([
  {
    id: 1,
    text: '공지사항 입니다 1',
  },
  {
    id: 2,
    text: '공지사항 입니다 2',
  },
  {
    id: 3,
    text: '공지사항 입니다 3',
  },
]);

export { NAV_LIST, NAV_LIST_LOGINED, FAQ_TAB_BUTTON, FAQ_LIST, NOTICE_LIST };
