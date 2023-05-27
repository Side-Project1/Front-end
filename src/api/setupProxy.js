const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.35.131.7:8080",
      changeOrigin: true,
    })
  );
};
