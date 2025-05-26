// const Note = require("../models/Note.js");
// const jwt = require("jsonwebtoken");

// const createNote = async (req, res) => {
//   try {
//     const note = new Note({
//       content: req.body.content,
//       userId: req.userId,
//     });
//     await note.save();
//     res.status(201).json(note);
//   } catch (err) {
//     res.status(500).json({ error: "Note creation failed" });
//   }
// };

// const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ error: "Unauthorized" });

//     const decoded = jwt.verify(token, "secret");
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// module.exports = {
//   createNote,
//   authMiddleware,
// };

// ✅ STEP 4: Controller Fix (controllers/noteController.js)
const jwt = require("jsonwebtoken");
const Note = require("../models/Note.js");

const createNote = async (req, res) => {
  try {
    const note = new Note({
      content: req.body.content,
      title: req.body.title,
      user: req.userId,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: "Note creation failed" });
  }
};

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, "secret");
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { createNote, authMiddleware };