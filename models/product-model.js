const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount:{
        typr: Number,
        default: 0
    },
    bgcolor: String,



})

module.exports = mongoose.model("product",productSchema);
