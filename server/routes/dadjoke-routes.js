import express from 'express';
import {
  createDadJoke,
  getAllDadJokesPopCreator,
  getAllDadJokesPopCreatorPopLikes,
  getOneDadJoke,
  updateOneDadJoke,
  deleteOneDadJoke,
  likeJoke,
} from '../controllers/dadjoke-controller.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

// prettier-ignore
router
  .route('/')
  .get(getAllDadJokesPopCreator)
  .post(authorize, createDadJoke);

// prettier-ignore
router
  .route('/:id')
  .get(getOneDadJoke)
  .put(updateOneDadJoke)
  .delete(deleteOneDadJoke);

router.post('/like', likeJoke);

router.get('/pop/likes', getAllDadJokesPopCreatorPopLikes);

export default router;
