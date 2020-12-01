const express = require("express") //import module / atau file js
const server = express()

// localhost:9000
server.get("/hello", (req, res) => {
    // reuqets data dari client
    // respone obejct yg kita gunakan untuk memberikan feedback
    res.send("Hallo world")
})

// request query
server.get("/check/namadoi", (req, res) => {
    const { names } = req.query
    res.send(`nama doi kamu ${names}`)
})

// request params
server.get("/check/umur/:age", (req, res) => {
    const umur = req.params.age
    let kata = ""

    if (umur < 10) {
        kata = "anda masih bayi"
    } else if (umur < 20) {
        kata = "anda masih muda"
    } else if (umur > 20) {
        kata = "anda sudah dewasa"
    } else {
        kata = "umur tidak ditemukan"
    }

    res.send(kata)
})

server.listen(9000, () => {
    console.log("Service running on port 9000")
})
