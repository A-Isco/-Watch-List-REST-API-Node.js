const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  //checking the header for authorization
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authorization Invalid");
  }

  // grabbing the token from the header
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // adding user props to the req before going to the next middle ware
    req.user = { userID: payload.userID, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Failed ");
  }
};

module.exports = auth;
