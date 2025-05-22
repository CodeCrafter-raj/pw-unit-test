import express from "express";
import { createNote, authMiddleware } from "../controllers/noteController.js";

const router = express.Router();

router.post("/", authMiddleware, createNote);

export default router;
