const express = require('express');
const router = express.Router();
const apiController = require('../app/controllers/APIController');

router.get('/product/list', (req, res) => {
    if (req.query.limit) {
        apiController.getAllProduct(req, res, req.query.limit);
    } else {
        apiController.getAllProduct(req, res);
    }
})

module.exports = router;