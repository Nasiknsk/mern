const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type: 'string', required: true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category',required:true},
    // price:{type:Number,required:true},
    // quantity:{type:Number,required:true},
    // description:{type:'string',required:true},
    // date :{type:mongoose.Schema.Types.Date}
});
module.exports = mongoose.model('Product', productSchema);