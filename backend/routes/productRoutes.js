const router = require("express").Router()
const productCtrl = require("../controller/productCtrl")


// Route for create product
router.post("/create", productCtrl.createProduct)

// Route for read product
router.get("/read/:id", productCtrl.getProduct)

// Route for read all product
router.get("/readAll", productCtrl.getAllProducts)

// Route for update product
router.patch("/update/:id", productCtrl.updateProduct)

// Route for delete product
router.delete("/delete/:id", productCtrl.deleteProduct)


module.exports = router