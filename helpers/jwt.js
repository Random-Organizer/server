const jwt = require("jsonwebtoken");

module.exports = {
  generateToken(payload) {
    return jwt.sign(payload, process.env.SECREu);
  }
};
