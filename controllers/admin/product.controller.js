const Product = require("../../models/product.model");

const fillerStatusHelpers = require("../../helpers/fillerStatus")
const searchStatusHelpers = require("../../helpers/search")
// [GET] /admin/products


module.exports.index = async (req, res) => {

  let filerStatus = fillerStatusHelpers(req.query)

  let find = {
    deleted: false
  }



  if(req.query.status) {
    find.status = req.query.status
  }

  const objectSearch = searchStatusHelpers(req.query);
  if(objectSearch.regex) {
    find.title = objectSearch.regex
  }




  const products = await Product.find(find)

  res.render("admin/pages/products/index",{
    pageTitle: "Trang danh sách sản phẩm",
    products: products,
    fillerStatus: filerStatus,
    keyword: objectSearch.keyword
  })
}