const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/auth.middleware");
const { getCollectionData } = require("../controllers/Collection.controller");

router.get("/collections", protect, getCollectionData);

module.exports = router;