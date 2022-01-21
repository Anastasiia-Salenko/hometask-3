import express from "express";
import { noteListService } from "../business/note-list.service.js";

export const router = express.Router();

router.get("/", (req, res) => {
  const notes = noteListService.getList();

  res.send(notes);
});

router.post("/", (req, res) => {
  const { content, category } = req.body;
  const note = noteListService.create({ content, category });

  res.send(note);
});
