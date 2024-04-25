const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.igdb.com',
            changeOrigin: true,
            pathRewrite: {'^/api' : ''},  // This removes '/api' from the URL before forwarding
            logLevel: 'debug'  // Add logging to help debug the issue
        })
    );
};