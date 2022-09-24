const express = require('express');
const router = express.Router();

const { getPublishersController } = require('../../controllers');

router.get('/get-publishers',getPublishersController);

module.exports = router;

