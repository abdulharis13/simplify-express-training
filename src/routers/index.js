const booksRouter = require('./books');
const publishersRouter = require('./publishers');

routers = [
    ...booksRouter,
    ...publishersRouter
];

module.exports = (app) => {
    app.use(routers);
}


