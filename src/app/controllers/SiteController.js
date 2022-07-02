const product = require('../models/Product');

class SiteController {
    home(req, res) {
        product.getAll((data) => {
            product.getAll((data2) => {
                product.getAll((data3) => {
                    res.render('home', {
                        bestSeller: JSON.parse(data),
                        newProducts: JSON.parse(data2),
                        hotSale: JSON.parse(data)
                    });
                }, 8)
            }, 8)
        }, 8)
    }
}

module.exports = new SiteController();