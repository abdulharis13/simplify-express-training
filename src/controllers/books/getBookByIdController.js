const getBookbyidController = (req, res) => {
    const id = req.params.id;
    res.send({
        id,
        msg: 'ini get book'
    })
}
module.exports = getBookbyidController;