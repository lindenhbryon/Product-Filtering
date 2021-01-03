const routes = require('express').Router();
const productModel = require('../models/product');
var sanitizer = require('sanitizer');
routes.post('/api/create-product',  async (req, res) => {
    const product = new productModel({
        product_name: sanitizer.escape(req.body.productName),
        product_description: sanitizer.escape(req.body.productDesc),
        product_price: sanitizer.escape(req.body.productPrice)
      });
    try {
        await product.save();
        res.send({
          success: true,
          message: 'product created successfully.'
        });
    }catch {
        res.send({
            success: false,
            message: 'Something went wrong whilst creating the product, please try again.'
          });
    }
});

routes.get('/api/get-products',  (req, res) => {
    res.send({
        data: 'linden'
    })
});


module.exports = routes;