const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://54.180.163.234:8080",
      changeOrigin: true,
    })
  );
};
