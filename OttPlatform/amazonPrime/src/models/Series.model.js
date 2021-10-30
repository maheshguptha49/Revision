const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    star_cast: { type: String, required: true },
    release: { type: String, required: false },
    episode: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Series = mongoose.model("series", seriesSchema);
module.exports = Series;
