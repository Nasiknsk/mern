// backend/controllers/productController.js
const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    const products = await Product.find().populate('category');
    res.json(products);
};

exports.createProduct = async (req, res) => {
    const { name, category } = req.body;
    const product = new Product({ name, category });
    await product.save();
    res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category } = req.body;
    const product = await Product.findByIdAndUpdate(id, { name, category }, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
};
