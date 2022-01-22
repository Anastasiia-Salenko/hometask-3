import express from "express";
import Joi from "joi";
import { NOTE_CATEGORIES } from "../../common/constants.js";
import { noteItemService } from "../business/note-item.service.js";

export const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const note = noteItemService.get(id);

  res.send(note);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  noteItemService.delete(id);

  res.sendStatus(204);
});

router.patch("/:id", (req, res) => {
  const schema = Joi.object({
    content: Joi.string().min(1),
    category: Joi.string().valid(...Object.values(NOTE_CATEGORIES)),
  }).min(1);
  Joi.attempt(req.body, schema, {
    abortEarly: false,
  });

  const { id } = req.params;
  const { content, category } = req.body;

  const note = noteItemService.update(id, { content, category });

  res.send(note);
});

router.post("/:id/archive", (req, res) => {
  const { id } = req.params;

  const note = noteItemService.archive(id);

  res.send(note);
});

router.post("/:id/unarchive", (req, res) => {
  const { id } = req.params;

  const note = noteItemService.unarchive(id);

  res.send(note);
});
