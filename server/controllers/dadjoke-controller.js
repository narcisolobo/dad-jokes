import DadJoke from '../models/dadjoke.model.js';
import User from '../models/user-model.js';

async function createDadJoke(req, res) {
  try {
    const newDadJoke = await DadJoke.create(req.body);
    res.status(201).json(newDadJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllDadJokesPopCreatorPopLikes(req, res) {
  try {
    const allDadJokes = await DadJoke.find()
      .populate('creator')
      .populate('likes')
      .sort({ createdAt: 'desc' });
    res.status(200).json(allDadJokes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllDadJokesPopCreator(req, res) {
  try {
    const allDadJokes = await DadJoke.find()
      .populate('creator')
      .sort({ createdAt: 'desc' });
    res.status(200).json(allDadJokes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneDadJoke(req, res) {
  try {
    const { id } = req.params;
    const oneDadJoke = await DadJoke.findById(id).populate('creator');
    res.status(200).json(oneDadJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function updateOneDadJoke(req, res) {
  try {
    const { id } = req.params;
    const updatedDadJoke = await DadJoke.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedDadJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function deleteOneDadJoke(req, res) {
  try {
    const { id } = req.params;
    const deletedDadJoke = await DadJoke.findByIdAndDelete(id);
    res.status(200).json(deletedDadJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function likeJoke(req, res) {
  try {
    const { jokeId, userId } = req.body;
    const joke = await DadJoke.findByIdAndUpdate(
      jokeId,
      {
        $push: { likes: userId },
      },
      { new: true }
    );
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { likes: jokeId },
      },
      { new: true }
    );
    res.status(200).json({ joke, user });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export {
  createDadJoke,
  getAllDadJokesPopCreator,
  getAllDadJokesPopCreatorPopLikes,
  getOneDadJoke,
  updateOneDadJoke,
  deleteOneDadJoke,
  likeJoke,
};
