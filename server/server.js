/* imports */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './mongo/db-connect.js';
import userRouter from './routes/user-routes.js';
import dadJokeRouter from './routes/dadjoke-routes.js';
import { printCyan, printMagenta } from './chalk/chalk-colors.js';

/* create express app */
const app = express();

/* load .env contents */
dotenv.config();

/* middleware */
app.use(express.json(), cors());

/* direct user api routes to user router */
app.use('/api/users', userRouter);
app.use('/api/dad-jokes', dadJokeRouter);

/* start server and connect to mongodb */
async function serverStart() {
  try {
    await dbConnect();
    const PORT = process.env.PORT;
    app.listen(PORT, () => printCyan(`Listening on port: ${PORT}`));
  } catch (err) {
    printMagenta(err);
  }
}

await serverStart();
