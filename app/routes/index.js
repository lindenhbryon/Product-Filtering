const routes = require('express').Router();

routes.post('/api/create-product',  (req, res) => {
    res.send({
        data: 'linden'
    })
});

routes.get('/api/get-products',  (req, res) => {
    res.send({
        data: 'linden'
    })
});


module.exports = routes;