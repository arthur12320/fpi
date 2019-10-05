const express = require('express');

const router = express.Router();

const example = ['bacurau', 'joker', 'a silent voice'];

router.get('/', (req, res) => {
  res.send({
    status: 'OK',
    status_message: 'movies fetched',
    data: example,
  });
});


module.exports = router;
