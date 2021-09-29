const {queryProducts, querySingleProduct, queryRelatedProducts, queryStyles} = require('../model/model.js')

const getProducts = (req, res) => {
  queryProducts(req.query, (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(418)
    } else {
      res.send(result)
    }
  })
}

const getProduct = (req, res) => {
  querySingleProduct(req.params.id, (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(418)
    } else {
      res.send(result)
    }
  })
}

const getRelatedProducts = (req, res) => {
  queryRelatedProducts(req.params.id, (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(418)
    } else {
      res.send(result)
    }
  })
}

const getStyles = (req, res) => {
  queryStyles(req.params.id, (err, result) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(418)
    } else {
      res.send(result)
    }
  })
}

module.exports = {getProducts, getProduct, getRelatedProducts, getStyles}