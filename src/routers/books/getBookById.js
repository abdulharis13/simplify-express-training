const express = require('express');
const router = express.Router();

const { getBookbyidController } = require('../../controllers')

router.get('/get-book-by-id/:id', getBookbyidController);

module.exports = router;

