import express from "express";
import Joi from "joi";
import { NOTE_CATEGORIES } from "../../common/constants.js";
import { noteListService } from "../business/note-list.service.js";

export const router = express.Router();

router.get("/", (req, res) => {
  const notes = noteListService.getList();

  res.send(notes);
});

router.post("/", (req, res) => {
  const schema = Joi.object({
    content: Joi.string().min(1).required(),
    category: Joi.string()
      .valid(...Object.values(NOTE_CATEGORIES))
      .required(),
  });
  Joi.attempt(req.body, schema, {
    abortEarly: false,
  });

  const { content, category } = req.body;

  const note = noteListService.create({ content, category });

  res.send(note);
});
