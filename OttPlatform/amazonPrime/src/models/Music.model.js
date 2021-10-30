const mongoose = require("mongoose");
const musicSchema = mongoose.Schema({
  singer: { type: String, required: true },
  genre: { type: String, required: true },
  music_director: { type: String, required: true },
  release: { type: String, required: true },
});
const Music = mongoose.model("music", musicSchema);
module.exports = Music;
