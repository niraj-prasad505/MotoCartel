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
    images: ["img1.jpg", "img2.jpg", "img3.jpg"],
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

    isFeatured: Boolean,
    isTrending: Boolean,

    bgcolor: {
        type: String,
        default: "#ffffff"
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);