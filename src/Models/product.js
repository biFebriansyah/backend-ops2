const db = require("../Configs/db")
const products = {}

products.get = () => {
    return new Promise((resole, reject) => {
        db.query("SELECT * FROM public.product ORDER BY id ASC")
            .then((res) => {
                if (res.rows.length == 0) {
                    resole({msg : "Data kosong"})
                } else {
                    resole(res.rows)
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.addProd = (data) => {
    return new Promise((resole, reject) => {
        db.query(`INSERT INTO public.product(name, harga) VALUES ('${data.name}', ${data.harga})`)
            .then((res) => {
                resole(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.updateProd = (data) => {
    return new Promise((resole, reject) => {
        db.query(`UPDATE public.product SET name='${data.name}', harga=${data.harga} WHERE id=${data.id}`)
            .then((res) => {
                resole(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

products.delProd = (id) => {
    return new Promise((resole, reject) => {
        db.query(`DELETE FROM public.product WHERE id=${id}`)
            .then((res) => {
                resole(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = products
