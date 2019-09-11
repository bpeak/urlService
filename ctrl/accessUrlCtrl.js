const accessUrlCtrl = (req, res) => {
    const { urlId } = req.params
    res.send("accessUrlCtrl")
}

module.exports = accessUrlCtrl