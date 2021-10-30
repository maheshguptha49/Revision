const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());
app.use("/movies", require("./controllers/Movie.controller"));
app.use("/series", require("./controllers/Series.controller"));
app.use("/register", require("./controllers/register.controller"));
app.use("/login", require("./controllers/login.controller"));
app.use("/premium", require("./controllers/premium.controller"));
app.use("/music", require("./controllers/Music.controller"));
function start() {
  app.listen(8000, async () => {
    await connect();
    console.log("listening on port 8000 93.5fm");
  });
}

module.exports = start;
