const db = require("../Configs/db")
const products = {}

products.get = () => {
    return new Promise((resole, reject) => {
        db.query("SELECT * FROM public.product ORDER BY id ASC")
            .then((res) => {
                if (res.rows.length == 0) {
                    resole("Data kosong")
                } else {
                    resole(res.rows)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = products
