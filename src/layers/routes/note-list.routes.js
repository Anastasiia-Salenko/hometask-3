import express from "express";
import Joi from "joi";
import { noteListService } from "../business/note-list.service.js";
import { CreateNoteInputSchema } from "../models/create-note-input.schema.js";

export const router = express.Router();

/**
 * @openapi
 * /notes:
 *  get:
 *    summary: Returns a list of notes
 *    tags:
 *      - Note list operations
 *    responses:
 *      200:
 *        description: Successful response
 */
router.get("/", (req, res) => {
  const notes = noteListService.getList();

  res.send(notes);
});

/**
 * @openapi
 * /notes:
 *  post:
 *    summary: Create a new note
 *    tags:
 *      - Note list operations
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/CreateNoteInput'
 *    responses:
 *      201:
 *        description: Successful response
 */
router.post("/", (req, res) => {
  Joi.attempt(req.body, CreateNoteInputSchema, {
    abortEarly: false,
  });

  const { content, category } = req.body;

  const note = noteListService.create({ content, category });

  res.status(201);
  res.send(note);
});
