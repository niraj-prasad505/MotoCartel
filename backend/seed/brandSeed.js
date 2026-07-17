require("dotenv").config();

const connectDB = require("../config/mongoose-connection");
const Brand = require("../models/Brand-model");

const brands = [
  {
    name: "Axor",
    slug: "axor",
    logo: "https://images.seeklogo.com/logo-png/38/1/axor-helmets-logo-png_seeklogo-380928.png",
    description:
      "Axor is one of India's leading premium helmet manufacturers, known for stylish designs, ECE and DOT certified helmets, and rider safety.",
    foundedYear: 2015,
    country: "India",
  },
  {
    name: "SMK",
    slug: "smk",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOJBH_SebllLAyaBPzxO4J2Lxn7tY_u71hAAOx2LsQA&s=10",
    description:
      "SMK Helmets manufactures full-face, modular, and off-road helmets with global safety certifications and modern styling.",
    foundedYear: 1972,
    country: "India",
  },
  {
    name: "Steelbird",
    slug: "steelbird",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75bHJ9u9e5Sc2wDJroCpGtqH6kQdskBMFJI9W4LU1bVvl8K9aH5nHl2Sa&s=10",
    description:
      "Steelbird is one of India's largest helmet manufacturers, offering affordable and ISI-certified helmets for daily commuters.",
    foundedYear: 1964,
    country: "India",
  },
  {
    name: "Studds",
    slug: "studds",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2X8pU-G6i0SSend7fU2te_9_IMXwJTpu6w0FdqBoygZRSOMW1fiEfCcq2&s=10",
    description:
      "Studds is a globally recognized helmet brand offering ISI, ECE, and DOT certified helmets for motorcycles and scooters.",
    foundedYear: 1983,
    country: "India",
  },
  {
    name: "Vega",
    slug: "vega",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kCgIegZIy5GAOOnaRFSmvqmi15JuaL91tPPmDOoxEOFMUGjMymcaQWQ&s=10",
    description:
      "Vega manufactures stylish and lightweight helmets with a focus on urban commuting and rider comfort.",
    foundedYear: 1994,
    country: "India",
  },
  {
    name: "LS2",
    slug: "ls2",
    logo: "/brands/ls2.png",
    description:
      "LS2 is an international helmet brand known for premium full-face, modular, motocross, and touring helmets.",
    foundedYear: 2007,
    country: "Spain",
  },
  {
    name: "MT Helmets",
    slug: "mt-helmets",
    logo: "/brands/mthelmets.png",
    description:
      "MT Helmets is a Spanish brand producing high-performance helmets certified for professional racing and everyday riding.",
    foundedYear: 1968,
    country: "Spain",
  },
  {
    name: "Rynox",
    slug: "rynox",
    logo: "/brands/rynox.png",
    description:
      "Rynox is India's leading motorcycle riding gear brand specializing in jackets, gloves, luggage, and protective equipment.",
    foundedYear: 2012,
    country: "India",
  },
  {
    name: "Viaterra",
    slug: "viaterra",
    logo: "/brands/viaterra.png",
    description:
      "Viaterra designs premium motorcycle luggage, riding apparel, and touring accessories built for adventure riders.",
    foundedYear: 2010,
    country: "India",
  },
  {
    name: "Raida",
    slug: "raida",
    logo: "/brands/raida.png",
    description:
      "Raida manufactures premium riding jackets, gloves, boots, luggage, and motorcycle accessories for touring enthusiasts.",
    foundedYear: 2018,
    country: "India",
  },
  {
    name: "Royal Enfield",
    slug: "royal-enfield",
    logo: "/brands/royalenfield.png",
    description:
      "Royal Enfield is one of the world's oldest motorcycle manufacturers, also offering genuine riding gear and accessories.",
    foundedYear: 1901,
    country: "United Kingdom",
  },
  {
    name: "Solace",
    slug: "solace",
    logo: "/brands/solace.png",
    description:
      "Solace produces premium motorcycle riding gear including jackets, pants, gloves, and rainwear designed for Indian riders.",
    foundedYear: 2012,
    country: "India",
  },
]; // if brands are stored separately
// OR paste the brands array here directly

async function seedBrands() {
  try {
    await connectDB();

    console.log("MongoDB Connected");

    await Brand.deleteMany();

    await Brand.insertMany(brands);

    console.log("Brands inserted successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedBrands();