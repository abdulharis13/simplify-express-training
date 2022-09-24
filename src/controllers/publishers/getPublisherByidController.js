const getPublishersController = (req, res) => {
    const id = req.query.id;
    const name = req.query.name;
    res.send({
        id,
        name,
        msg: 'ini get publisher by id'
    })
}

module.exports = getPublishersController