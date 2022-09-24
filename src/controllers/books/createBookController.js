const createBookController = (req, res) => {
    const data = req.body;
    res.send(data)
}
module.exports = createBookController;