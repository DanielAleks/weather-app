import * as express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
 
const app = express();
 
app.use('/api', createProxyMiddleware({ target: 'https://maps.googleapis.com', changeOrigin: true }));
app.listen(3000);