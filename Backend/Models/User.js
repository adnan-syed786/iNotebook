const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// ✅ Yahan dikkat hoti hai: mongoose.Model ❌  (galat)
// ✅ Sahi likhna hai: mongoose.model ✔
const user=mongoose.model("User", UserSchema);
module.exports = user
