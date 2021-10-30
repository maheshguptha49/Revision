const { Router } = require("express");
const Movie = require("../models/Movie.model");
const router = Router();
router.get("", async (req, res) => {
  try {
    const data = await Movie.find().lean().exec();
    res.status(200).json({ movies: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({ movie: movie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({ movie: movie });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ movie: movie });
  } catch (error) {}
});
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "succesfully deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
