const express = require('express');

const router = express.Router();

// this is just a example should be removed
const examples = require('../examples');
const validateMovie = require('../utilites/validate');


router.get('/', (req, res) => {
  res.send({
    status: 'OK',
    status_message: 'movies fetched',
    data: examples,
  });
});

router.get('/:id', (req, res) => {
  const movie = examples[req.params.id];
  if (!movie) {
    return res.status(404).send({
      status: 'OK',
      status_message: 'no movie with this id',
      data: null,
    });
  }
  return res.send({
    status: 'OK',
    status_message: 'movies fetched',
    data: movie,
  });
});


router.post('/', (req, res) => {
  const movie = req.body;
  if (validateMovie(movie)) {
    examples.push(movie);
    res.send({
      status: 'OK',
      status_message: 'movie added',
      data: movie,
    });
  } else {
    res.status(400).send({
      status: 'ERROR',
      status_mesage: 'invalid movie',
      data: null,
    });
  }
});

module.exports = router;
