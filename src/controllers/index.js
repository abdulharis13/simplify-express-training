const booksController = require('./books');
const publisherController = require('./publishers')

module.exports = {
    ...booksController,
    ...publisherController
};