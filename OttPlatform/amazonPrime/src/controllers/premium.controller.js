const { Router } = require("express");
const User = require("../models/User.model");
const router = Router();
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { premium: true },
      { new: true }
    );
    res.status(201).json({ message: "changed", user });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("", async (req, res) => {
  res.status(200).json({ got: "got it" });
});
module.exports = router;
