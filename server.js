const express = require("express")
const app = express()
const ctrl = require("./ctrl")
const PORT = 3000

app.get("/:urlId", ctrl.accessUrlCtrl)
app.get("/:urlId/stats", ctrl.getUrlStatsCtrl)
app.post("/register.json", ctrl.registerUrlCtrl)

app.listen(PORT, () => {
    console.log(`LISTEN ON PORT ${PORT}`)
})