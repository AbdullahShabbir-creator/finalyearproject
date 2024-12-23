const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Get token from header

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
