const Product = require("../models/productModel");

const productCtrl = {
  // create Product
  createProduct: async (req, res) => {
    try {
      const createProduct = new Product(req.body);
      const newProduct = await createProduct.save();
      res.status(201).json({
        msg: "product created successfully",
        newProduct,
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // get single Product
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate(
        "categoryId",
        "categoryName"
      );

      if (!product) {
        res.json({
          msg: "product not found",
        });
      } else {
        res.json({
          msg: "product read successfully",
          product,
        });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  //get all Product
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().populate(
        "categoryId",
        "categoryName"
      );

      res.status(200).json({
        msg: "Read all data successfully",
        products,
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  //update Product
  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const update = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(id, update, {
        new: true,
      });
      if (!updatedProduct) {
        res.json({
          msg: "product not found",
        });
      } else {
        res.json({
          msg: "product updated successfully",
          updatedProduct,
        });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  // delete Product
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;

      const products = await Product.findByIdAndDelete(id, { new: true });
      if (!products) {
        res.json({
          msg: "product not found",
        });
      } else {
        res.json({
          msg: "product deleted successfully",
          products,
        });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = productCtrl;
