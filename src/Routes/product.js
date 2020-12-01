const express = require("express") //import module / atau file js
const routes = express.Router()
const ctrl = require('../Controllers/product')

// /product/
routes.get('/', ctrl.get)


module.exports = routes
