import express from 'express';
import userRoutes from './routes/user.routes';
import connectDatabase from './config/database';

const app = express();

app.use(express.json())

app.use('/api', userRoutes)

connectDatabase()

export default app