const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    star_cast: { type: String, required: true },
    release: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
