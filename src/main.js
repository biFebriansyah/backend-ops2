const express = require("express") //import module / atau file js
const routes = express.Router()
const product = require('./Routes/product')

routes.use("/product", product)



module.exports = routes