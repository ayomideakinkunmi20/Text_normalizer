import express from 'express';
import cors from 'cors';
import normalizeRoutes from './routes/normalize.route.js';
import {errorHandler} from './middlewares/errorHandler.js';
import {rateLimiter} from './middlewares/rateLimiter.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(rateLimiter);
app.use('/api/v1/normalize', normalizeRoutes);
app.use(errorHandler);


export default app;