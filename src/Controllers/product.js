const products = {}
const model = require('../Models/product')


products.get = async (req, res) => {
    try {
        const result = await model.get()
        return res.status(200).send(result)
    } catch (error) {
        return res.send(error)
    }
}

products.add = (req, res) => {
    res.send("Hallo from controller")
}

products.getID = (req, res) => {
    res.send("Hallo from controller")
}

products.update = (req, res) => {
    res.send("Hallo from controller")
}

products.del = (req, res) => {
    res.send("Hallo from controller")
}


module.exports = products