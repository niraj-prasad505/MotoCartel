require("dotenv").config();
const connectDB = require("../config/mongoose-connection");

const Product = require("../models/product-model");
const products = require("./products");

async function seed() {
  try {
    await connectDB();


    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();