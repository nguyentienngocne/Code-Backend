const Product = require("../../models/product.model");


// [GET] /admin/products


module.exports.index = async (req, res) => {

  let filerStatus = [
    {
      name: "Tất cả",
      status: "",
      class: ""
    },
    {
      name: "Hoạt động",
      status: "active",
      class: ""
    },
    {
      name: "Dừng hoạt động",
      status:"inactive",
      class: ""
    }
  ]

  if(req.query.status) {
    let index = filerStatus.findIndex(item => item.status == req.query.status)
    filerStatus[index].class = 'active';
  }else {
    const index = filerStatus.findIndex(item => item.status == "")
    filerStatus[index].class = 'active';
  }

  let find = {
    deleted: false
  }



  if(req.query.status) {
    find.status = req.query.status
  }
  const products = await Product.find(find)

  res.render("admin/pages/products/index",{
    pageTitle: "Trang danh sách sản phẩm",
    products: products,
    fillerStatus: filerStatus
  })
}