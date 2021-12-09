const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: mongoose.Types.ObjectId,

  productName: { 
    type: String,
    required: true,
  },

  qtyPerUnit: {
    type: Number,
    required: true,
  },

  unitPrice: {
    type: Number,
    required: true,
  },

  unitInStock: {
    type: Number,
    required: true,
  },

  discontinued: {
    type: Boolean,
    required: true,
  },

  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "category",
  },
});


module.exports = mongoose.model("product", productSchema)