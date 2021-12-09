const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryId: mongoose.Types.ObjectId,
  categoryName: {
    type: String,
    require: true,
    unique:true
  },
});

module.exports = mongoose.model("category", categorySchema);
