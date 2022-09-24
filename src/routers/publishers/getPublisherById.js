const express = require('express');
const router = express.Router();

const { getPublishersbyIdController } = require('../../controllers')

router.get('/get-publisher-by-id/:id', getPublishersbyIdController);

module.exports = router;

