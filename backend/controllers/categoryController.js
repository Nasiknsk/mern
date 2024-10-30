// backend/controllers/categoryController.js
const Category = require('../models/category');
const Product = require('../models/product');

exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
};

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    const products = await Product.findOne({ category: id });
    if (products) {
        return res.status(400).json({ message: "Cannot delete category with associated products" });
    }
    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted" });
};
