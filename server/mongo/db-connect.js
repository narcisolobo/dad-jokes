/* imports */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { printCyan, printMagenta } from '../chalk/chalk-colors.js';

/* load .env contents and pull uri */
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

/**
 * This function connects to a MongoDB database using
 * Mongoose and logs a message if the connection is
 * successful.
 */
async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: 'dadJjokesDb',
      retryWrites: true,
    });
    const dbName = mongoose.connection.db.databaseName;
    printCyan(`Connected to: ${dbName}`);

    mongoose.connection.on('error', () => {
      throw new Error('Could not connect to DB.');
    });
  } catch (err) {
    printMagenta(err);
  }
}

export default dbConnect;
