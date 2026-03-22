const jwt = require("jsonwebtoken");

export const protect = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach user info

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const isOwner = (req, res, next) => {
  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};

module.exports = { protect, isOwner };