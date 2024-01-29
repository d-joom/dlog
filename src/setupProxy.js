const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/user",
    createProxyMiddleware({
       target: "http://44.219.200.153:8080",
      changeOrigin: true,
    })
  );
};