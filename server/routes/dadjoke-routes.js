import express from 'express';
import {
  createDadJoke,
  getAllDadJokes,
  getOneDadJoke,
  updateOneDadJoke,
  deleteOneDadJoke,
} from '../controllers/dadjoke-controller.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getAllDadJokes)
  .post(createDadJoke);

// prettier-ignore
router
  .route('/:id')
  .get(getOneDadJoke)
  .put(updateOneDadJoke)
  .delete(deleteOneDadJoke);

export default router;
