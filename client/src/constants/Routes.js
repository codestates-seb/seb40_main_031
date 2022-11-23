// 라우팅에 필요한 라우팅 컴포넌트에 대한 디테일들

const ROUTES = Object.freeze({
  INDEX: {
    path: '/',
    name: 'Index',
  },
  LOGIN: {
    path: '/login',
    name: 'Login',
  },
  NOTICE: {
    path: '/notice',
    name: 'Notice',
  },
});

export default ROUTES;
