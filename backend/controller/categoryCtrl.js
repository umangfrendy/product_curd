const Category = require("../models/categoryModel")

const categotyCtrl = {
//  create category
createCategory: async (req, res) => {
  try {
    const createCategoty = new Category(req.body);
    const newCategoty = await createCategoty.save();
    res.status(201).json({
      msg: "category created successfully",
      newCategoty,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
},

//update Category
updateCategory: async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (!updatedCategory) {
      res.json({
        msg: "Category not found",
      });
    } else {
      res.json({
        msg: "Category updated successfully",
        updatedCategory,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
},

//get all category
getAllCategorys: async (req, res) => {
  try {
    const category = await Category.find().populate();

    res.status(200).json({
      msg: "Read all data successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
},
// get single category
getCategory: async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      res.json({
        msg: "category not found",
      });
    } else {
      res.json({
        msg: "category read successfully",
        category,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
},

};

module.exports = categotyCtrl;
