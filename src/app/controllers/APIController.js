const product = require('../models/Product');

class APIController {
    getAllProduct(req, res, limit = -1) {
        product.getAll((data) => {
            res.send({result: data})
        }, limit);
    }
}

module.exports = new APIController();