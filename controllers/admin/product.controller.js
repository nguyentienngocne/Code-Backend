const Product = require("../../models/product.model");

const fillerStatusHelpers = require("../../helpers/fillerStatus")
// [GET] /admin/products


module.exports.index = async (req, res) => {

  let filerStatus = fillerStatusHelpers(req.query)

  let find = {
    deleted: false
  }



  if(req.query.status) {
    find.status = req.query.status
  }

  let keyword = "";
  if(req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword,'i')
    find.title = regex;
  }

  const products = await Product.find(find)

  res.render("admin/pages/products/index",{
    pageTitle: "Trang danh sách sản phẩm",
    products: products,
    fillerStatus: filerStatus,
    keyword: keyword
  })
}