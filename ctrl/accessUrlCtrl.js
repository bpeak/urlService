const db = require("../db")

const accessUrlCtrl = async (req, res) => {
    const { urlId } = req.params

    let result
    try {
        result = await db.query("select id, url from urls where id = ?", [urlId])
    } catch (err){ 
        console.log(err)
        return res.sendStatus(500)
    }

    if(result.length === 0) { return res.sendStatus(204) }

    const url = result[0].url
    res.redirect(301, url)

    try {
        await db.query("insert into visits(url_id) values(?)", [urlId])
    } catch (err){
        console.log(err)
    }
}

module.exports = accessUrlCtrl