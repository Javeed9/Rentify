const jwt = require('jsonwebtoken');
const token = require('../utils/token');

const verifyTokenMiddleware = (req, res, next) => {
  try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
          return res.status(401).json({ message: "Unauthorized: Token missing" });
      }
      const userId = token.verifyToken(authorizationHeader);
      if (userId === "Unauthorized: Token expired" || userId === "Unauthorized: Invalid token") {
          return res.status(401).json({ message: userId });
      }
      req.userId = userId;
      next();
  } catch (error) {
      // It's a good practice to use 401 for authentication errors
      res.status(401).json({ message: error.message });
  }
};

module.exports = verifyTokenMiddleware;
