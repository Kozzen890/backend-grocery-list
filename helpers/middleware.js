// const jwt = require("jsonwebtoken");
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.sendStatus(403).json({ message: "Gagal" });
    }
    req.id = decoded.id;
    next();
  });
  // var decoded = jwt.verify(token, process.env.TOKEN_KEY);
  // if (decoded) {
  //   var email = User.findOne({ id: decoded.id });
  //   if (email) {
  //     req.email = email;
  //     next();
  //   }
  // }
};
