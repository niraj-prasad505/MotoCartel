const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { getHomeData } = require("./controllers/home-controller");

// routers
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const userRouter = require("./routes/userRouter");
const cartRouter = require("./routes/cartRouter");
const orderRouter = require("./routes/orderRouter");


// DB connection
const connectDB = require("./config/mongoose-connection");
connectDB();


// ✅ CORS (MUST BE FIRST)
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true
}));

// ✅ body + cookie middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// static + view
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


// ✅ routes
app.use("/api/owners", ownersRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);
app.get("/api/home", getHomeData);

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});


// ✅ error handler (last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});