const { createProxyMiddleware } = require('http-proxy-middleware');
// const { SIGNUP_URL, LOGIN_URL } = require('api');

module.exports = function (app) {
  app.use(
    ['/members'], // 여기가 문제!
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
