const Hero = require("../models/hero-model");

const getHeroData = async (req, res) => {
  try {
    const [landingHero, highlights1, highlights2] = await Promise.all([
      Hero.find({ mark: "LandingHero" }).limit(5),
      Hero.find({ mark: "highlights1" }).limit(3),
      Hero.find({ mark: "highlights2" }).limit(3),
    ]);

    res.status(200).json({
      landingHero,
      highlights1,
      highlights2,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getHeroData };