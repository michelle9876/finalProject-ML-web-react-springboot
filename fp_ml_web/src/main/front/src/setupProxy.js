const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
           target: 'http://localhost:8080',	//
      // target: 'http://43.203.182.10:8080/',	// 최은서 aws 계정 인스턴스 ip 주소 (프리티어)
      changeOrigin: true,
    })
  );
};