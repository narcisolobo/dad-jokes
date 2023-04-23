import DadJoke from '../models/dadjoke.model.js';

async function createDadJoke(req, res) {
  try {
    const newDadJoke = await DadJoke.create(req.body);
    res.status(201).json(newDadJoke);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getAllDadJokes(req, res) {
  try {
    const allDadJokes = await DadJoke.find();
    res.status(200).json(allDadJokes);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getOneDadJoke(req, res) {
  try {
    const { id } = req.params;
    const oneDadJoke = await DadJoke.findById(id);
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

export {
  createDadJoke,
  getAllDadJokes,
  getOneDadJoke,
  updateOneDadJoke,
  deleteOneDadJoke,
};
