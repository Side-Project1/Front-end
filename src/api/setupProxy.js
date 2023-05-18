const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.209.81.190:8080',
      changeOrigin: true,
    })
  );
};