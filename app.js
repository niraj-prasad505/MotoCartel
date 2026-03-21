const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

// correct routers
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const userRouter = require("./routes/userRouter");

// DB connection
require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// routes
app.use("/owners", ownersRouter);
app.use("/user", userRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.send("hey");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});