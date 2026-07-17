const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    slug: {
        type: String,
        unique: true
    },

    logo: String,

    description: String,

    foundedYear: Number,

    country: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Brand", brandSchema);