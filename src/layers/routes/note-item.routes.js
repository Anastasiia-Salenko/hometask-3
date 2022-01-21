import express from "express";
import { noteItemService } from "../business/note-item.service.js";

export const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const note = noteItemService.get(id);

  res.send(note);
});
