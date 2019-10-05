const express = require('express');

const router = express.Router();

// this is just a example should be removed
const examples = require('../examples');

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


module.exports = router;
