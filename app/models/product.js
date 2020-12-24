let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
  product_name: {type: String, required: true},
  product_description: {type: String, required: true},
  product_price: {type: String, required: true},
})

module.exports = mongoose.model('products', productSchema)