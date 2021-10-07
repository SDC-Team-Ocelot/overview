const {queryProducts, querySingleProduct, queryRelatedProducts, queryStyles} = require('../model/model.js')

const getProducts = async (req, res) => {
  try {
    const result = await queryProducts(req.query)
    res.status(200).send(result)
  } catch (error) {
    res.status(418).send(err)
  }
}

const getProduct = async (req, res) => {
  try {
    const result = await querySingleProduct(req.params.id)
    res.status(200).send(result[0])
  } catch (error) {
    res.status(418).send(error)
  }
}

const getRelatedProducts = async (req, res) => {
  try {
    const result = await queryRelatedProducts(req.params.id);
    res.status(200).send(result)
  } catch (error) {
    res.status(418).send(error)
  }

}

const getStyles = async (req, res) => {
  try {
    const result = await queryStyles(req.params.id)
    res.status(200).send(result)
  } catch (error) {
    res.status(418).send(error)
  }
}

module.exports = {getProducts, getProduct, getRelatedProducts, getStyles}