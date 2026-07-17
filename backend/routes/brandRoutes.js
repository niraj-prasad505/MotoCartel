const express = require("express");
const router = express.Router();

const { getAllBrands } = require("../controllers/brandController");

router.get("/all", getAllBrands);

module.exports = router;