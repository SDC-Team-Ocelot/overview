const pool = require('../../database/index.js');

const queryProducts = async (requestQuery, callback) => {
  try {
    requestQuery.page = (requestQuery.page - 1) * requestQuery.count;
    const result = await pool.query(`SELECT product.product_id as id, name, slogan, description, category, default_price FROM product LIMIT ${requestQuery.count || 5} OFFSET ${requestQuery.page || 0}`)

    callback(null, result.rows);
  } catch (error) {
    callback(error)
  }
}

const querySingleProduct = async (id, callback) => {
  try {
    const product = await pool.query(
    `SELECT product.product_id as id, product.name, \
      product.slogan, product.description, product.category, product.default_price, \
      json_agg(json_build_object('feature',features.feature, 'value',features.value)) as features \
      FROM features \
      INNER JOIN product \
        ON features.product_id = product.product_id \
          WHERE product.product_id = ${id} \
              GROUP BY product.product_id`
    )

    callback(null, product.rows);
  } catch (error) {
    callback(error)
  }
}

const queryStyles = async (id, callback) => {
  try {
    const result = await pool.query(`SELECT s.style_id, s.name,to_char(s.original_price,'FM999D00') as original_price, s.sale_price, s."default?", \
    CASE WHEN count(p) = 0 THEN ARRAY[]::json[] ELSE ARRAY_AGG(p.photos) END AS photos \
    FROM styles AS s \
      LEFT JOIN (
        SELECT photos.style_id, json_build_object('url', photos.url, 'thumbnail_url', photos.thumbnail_url) AS photos \
        FROM photos \
      ) AS p \
        ON s.style_id = p.style_id \
    WHERE s.product_id = ${id} \
    GROUP BY s.style_id \
    ORDER BY s.style_id ASC`)

    const skus = await pool.query(`SELECT CASE WHEN count(sku) = 0 THEN '{}'::json ELSE json_object_agg(sku.sku_id, sku.sk) FILTER (WHERE sku.sku_id IS NOT NULL) END AS skus \
    FROM styles s \
         LEFT JOIN \
         ( \
           SELECT skus.style_id, skus.sku_id, json_build_object('style_id', skus.style_id,'size', size, 'quantity', quantity) AS sk \
           FROM skus \
         ) sku \
           ON sku.style_id = s.style_id  \
    WHERE s.product_id = '${id}' \
    GROUP BY s.style_id \
    ORDER BY s.style_id ASC`)

    const styles = result.rows
    styles.forEach((style, idx) => {
      style.skus = skus.rows[idx].skus
    })

    const formatResult = {
      product_id: id,
      results: result.rows,
    }

    callback(null, formatResult);
  } catch (error) {
    callback(error)
  }
}

const queryRelatedProducts = async (id, callback) => {
  try {
    const result = await pool.query(`SELECT related_product_id FROM related_items WHERE product_id = ${id}`)
    const formatResult = result.rows.map(result => result.related_product_id)
    callback(null, formatResult);
  } catch (error) {
    callback(error)
  }
}


module.exports = {queryProducts, querySingleProduct, queryRelatedProducts, queryStyles}