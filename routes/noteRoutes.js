const express = require('express');
const { createNote, authMiddleware } = require('../controllers/noteController');

const router = express.Router();

router.post('/', authMiddleware, createNote);

module.exports = router;
