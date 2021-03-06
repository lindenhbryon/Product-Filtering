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

routes.get('/api/get-products', async (req, res) => {
    let query = {};
    //will need to modify this when more query params
    //loop query paranms and build query
    if(req.query.search !== ''){
        const search = req.query.search;
        query = {product_name: {$regex: search, $options: 'i'}};
    }
    try {
        await productModel.find(query, (err, data) => {
            res.send({
                success: true,
                products: data,
            });
        });
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong whilst fetching products, please try again.'
          });
    }
});

routes.delete('/api/delete-product/:productId', async (req, res) => {
    try {
        await productModel.deleteOne({_id: req.params.productId}, (err, data) => {
            res.send({
                success: true,
                message: 'Product deleted successfully'
            });
        });
    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong whilst deleting the product, please try again.'
          });
    }
});


module.exports = routes;