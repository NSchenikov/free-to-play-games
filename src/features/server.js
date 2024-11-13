const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 8080;
app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
});
app.use('/api', createProxyMiddleware({
    target: 'https://www.freetogame.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/api',
    },
}));
app.use('/assets', express.static('public/assets')); 
app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});

   //node '/Users/nikitasenikov/Работа/устройство/lesson 6/hw/free-to-play-games/src/features/server.js'