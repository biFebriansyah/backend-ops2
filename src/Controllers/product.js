const products = {}
const model = require("../Models/product")
const respon = require("../Helpers/respon")

products.get = async (req, res) => {
    try {
        const result = await model.get()
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 200, error)
    }
}

products.add = async (req, res) => {
    try {
        const result = await model.addProd(req.body)
        return respon(res, 201, result)
    } catch (error) {
        return respon(res, 200, error)
    }
}

products.getID = (req, res) => {
    res.send("Hallo from controller")
}

products.update = async (req, res) => {
    try {
        const result = await model.updateProd(req.body)
        return respon(res, 201, result)
    } catch (error) {
        return respon(res, 200, error)
    }
}

products.del = async (req, res) => {
    try {
        const result = await model.delProd(req.params.id)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(401).json(error)
    }
}

module.exports = products
