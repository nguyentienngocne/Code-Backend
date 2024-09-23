const Product = require("../../models/product.model");

// [GET] /products

module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false
  })
  
  const newProducts = products.map(item => {
    item.priceNew = item.price - (item.price / 1 * (item.discountPercentage * 0.01)).toFixed()
    return item;
  })

  res.render("client/pages/products/index",{
    pageTitle: "Trang danh sách sản phẩm",
    products: newProducts
  })
}