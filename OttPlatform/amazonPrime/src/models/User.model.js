const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    premium: {
      type: String,
      required: false,
      default: false,
      enum: [true, false],
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  next();
});
userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return bcrypt.compareSync(password, passwordHash);
};
const User = mongoose.model("user", userSchema);
module.exports = User;
