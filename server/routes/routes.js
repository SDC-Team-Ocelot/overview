const express = require('express');
const router = express.Router();
const {getProducts, getProduct, getRelatedProducts, getStyles} = require('../controller/controller.js')

// Get Products with page (default 1) and count (default 5)
router.get('/products', getProducts)

// Get Products with specific id
router.get('/products/:id', getProduct)

// Get Styles by Product id
router.get('/products/:id/styles', getStyles)

// Get Related Products
router.get('/products/:id/related', getRelatedProducts)

module.exports = router;