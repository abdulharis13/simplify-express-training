const express = require('express');
const router = express.Router();

const { getBooksControlller } = require('../../controllers');

router.get('/get-books', getBooksControlller );

module.exports = router;

