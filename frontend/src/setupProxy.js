
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',  // This is the API endpoint prefix
        createProxyMiddleware({
            target: 'https://api.igdb.com',
            changeOrigin: true,
            pathRewrite: {'^/api' : ''},  // Remove '/api' prefix when forwarding to IGDB,
            logger: console
        })
    );
};