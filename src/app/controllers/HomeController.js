const product = require('../models/Product');

class HomeController {
    listAll(req, res) {
        console.log(product.getAll((data) => {
            console.log(data);
        }));
        res.send('Done');
    }
}

module.exports = new HomeController();