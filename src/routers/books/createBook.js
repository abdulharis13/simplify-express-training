const express = require('express');
const router = express.Router();

const { createBookController } = require('../../controllers')

router.post('/create-book', createBookController);

module.exports = router;
