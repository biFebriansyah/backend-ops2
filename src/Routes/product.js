const express = require("express") //import module / atau file js
const routes = express.Router()
const ctrl = require('../Controllers/product')

routes.get('/', ctrl.get)
routes.post("/", ctrl.add)
routes.put("/", ctrl.update)
routes.delete("/:id", ctrl.del)


module.exports = routes
