const express = require('express');
const router = require('../routers');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

router(app);

app.listen(port, () => {
    console.log(`App run at http://localhost:${port}`);
})