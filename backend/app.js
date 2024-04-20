import express from 'express'
import { config } from 'dotenv'
import morgan  from 'morgan'

import cookieParser from 'cookie-parser';
import cors from 'cors'
import appRouter from './src/routes/routes.js';
config();
const PORT = 5001;
const app = express();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
app.use(cors())
app.options('*', cors());
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

//remove for prod
app.use(morgan('dev'))

app.use("/api/v1", appRouter)

export default app;