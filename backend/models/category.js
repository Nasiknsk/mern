const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{type: 'string',required: true,unique: true},
});
module.exports = mongoose.model('Category', categorySchema);