const db = require("../db")

const registerUrlCtrl = async (req, res) => {
    const { url } = req.query

    if(!url){ return res.sendStatus(400) }

    let urlId
    let isInserted = false
    try {
        const urlRows = await db.query("select id from urls where url = ?", [url])
        if(urlRows.length === 0){
            const result = await db.query("insert into urls(url) values(?)", [url])
            urlId = result.insertId
            isInserted = true
        } else {
            urlId = urlRows[0].id
        }
    } catch ( err ) {
        console.log(err)
        return res.sendStatus(500)
    }

    const statusCode = isInserted ? 201 : 200
    
    res.status(statusCode).json({
        url : `http://localhost:3000/${urlId}`
    })

}

module.exports = registerUrlCtrl