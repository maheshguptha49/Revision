const { Router } = require("express");
const Series = require("../models/Series.model");
const router = Router();
router.get("", async (req, res) => {
  try {
    const data = await Series.find().lean().exec();
    res.status(200).json({ serieses: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);
    res.status(200).json({ series: series });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const series = await Series.create(req.body);
    res.status(201).json({ series: series });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const series = await Series.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ series: series });
  } catch (error) {}
});
router.delete("/:id", async (req, res) => {
  try {
    const series = await Series.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "succesfully deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
