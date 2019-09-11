const db = require("../db")

const getUrlStatsCtrl = async (req, res) => {
    const { urlId } = req.params

    let rows
    try {
        rows = await db.query("SELECT * FROM visits WHERE url_id = ?", [urlId])
    } catch (err) {
        res.sendStatus(500)
    }
    
    const urlUsageForTime = {}

    for(let i = 0; i < rows.length; i++){
        const hour = new Date(rows[i].visited_at).getHours()
        if(urlUsageForTime[hour]){
            urlUsageForTime[hour]++
        } else {
            urlUsageForTime[hour] = 1
        }
    }

    const stats = []

    for(let key in urlUsageForTime) {
        const today = new Date()
        stats.push({
            at : `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${key}:00:00`,
            visits : urlUsageForTime[key],
        })
    }

    res.status(200).json(stats)

}

module.exports = getUrlStatsCtrl