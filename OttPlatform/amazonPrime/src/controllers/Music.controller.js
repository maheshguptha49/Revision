const { Router } = require("express");
const Music = require("../models/Music.model");
const router = Router();

router.get("", async (req, res) => {
  try {
    const musics = await Music.find().lean().exec();
    res.status(200).json({ musics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("", async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(201).json({ music });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("", async (req, res) => {
  try {
    const music = await Music.find().lean().exec();
    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("", async (req, res) => {
  try {
    const music = await Music.find().lean().exec();
    res.status(200).json({ music });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
