// const mongoose = require('mongoose');

// const noteSchema = new mongoose.Schema({
//   content: String,
//   userId: mongoose.Schema.Types.ObjectId,
// });

// module.exports = mongoose.model('Note', noteSchema);

// ✅ STEP 2: Note Model (models/Note.js)
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Note", noteSchema);

