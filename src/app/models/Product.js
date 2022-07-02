const database = require('../../config/database/config');

class Product {
    parseProduct(item) {
        let colorArrayString = item.productColor;
        let colorArray = colorArrayString.split(',');
        
        let product = {
            productId: item.productId,
            productTypeId: item.productTypeId,
            productName: item.productName,
            productColor: colorArray,
            productPrice: item.productPrice,
            productImagePath: item.productImagePath,
            categoryId: item.categoryId
        };
        return product;
    }

    getAll(callback, limit = -1) {
        let productArray = [];
        if (limit < 0) {
            database.query(`SELECT * FROM product`, (err, rows, fields) => {
                for(let i = 0; i < rows.length; ++i) {
                    let item = rows[i];
                    let product = this.parseProduct(item);
                    productArray.push(product);
                }
                callback(JSON.stringify(productArray));
            });
        } else {
            database.query(`SELECT * FROM product LIMIT ${limit}`, (err, rows, fields) => {
                for(let i = 0; i < rows.length; ++i) {
                    let item = rows[i];
                    let product = this.parseProduct(item);
                    productArray.push(product);
                }
                callback(JSON.stringify(productArray));
            });
        }
    }
}

module.exports = new Product();