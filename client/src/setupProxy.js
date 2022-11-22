const { SIGNUP_URL, LOGIN_URL } = require('api');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [SIGNUP_URL, LOGIN_URL],
    createProxyMiddleware({
      target: 'https://cd79-222-110-187-162.jp.ngrok.io',
      changeOrigin: true,
    }),
  );
};
