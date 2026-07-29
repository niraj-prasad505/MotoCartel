const express = require("express");
const router = express.Router();

const { getHeroData } = require("../controllers/hero-controller");
const { protect } = require("../middlewares/auth.middleware");

router.get("/Collections", protect, getCollectionData);

module.exports = router;