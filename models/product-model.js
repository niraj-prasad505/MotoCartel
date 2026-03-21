const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        default: "#ffffff"
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);