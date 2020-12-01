const express = require("express") //import module / atau file js
const server = express()
const routes = require("./src/main")
const db = require("./src/Configs/db")

server.use(routes)

db.connect()
    .then((res) => {
        console.log("Database Connect")
    })
    .catch((err) => {
        console.log("Database not Connected")
        console.log(err)
    })

server.listen(9000, () => {
    console.log("Service running on port 9000")
})
