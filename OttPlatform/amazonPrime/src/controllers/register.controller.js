const { Router } = require("express");
const User = require("../models/User.model");

const jwt = require("jsonwebtoken");
const router = Router();
const newToken = (user) => {
  return jwt.sign({ user }, "mahesh");
};

const register = async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        status: "failed",
        message: "User already registered please use another emailid",
      });
    }
    user = await User.create(req.body);
    // console.log(user.$__, "user doc");
    let token = newToken(user);
    res.status(201).json({ user, token });
  } catch (e) {
    console.log(e, "error");
    res
      .status(500)
      .json({ status: "failed", message: "something went wrong", error: e });
  }
};

router.post("", register);
module.exports = router;
