import express from "express";
import { noteListService } from "../business/note-list.service.js";

export const router = express.Router();

router.get("/", (req, res) => {
  const notes = noteListService.getList();

  res.send(JSON.stringify(notes, null, 2));
});
