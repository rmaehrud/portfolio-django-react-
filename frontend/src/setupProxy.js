const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/index/portfolio", { target: "http://localhost:8000/" })
  );
};