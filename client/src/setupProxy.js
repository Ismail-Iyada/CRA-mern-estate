// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Define the API path you want to proxy
    createProxyMiddleware({
      target: "http://localhost:5000", // Specify the target URL
      changeOrigin: true, // Change the origin of the host header to the target URL
      secure: false, // Disable certificate validation (useful for development)
    })
  );
};
