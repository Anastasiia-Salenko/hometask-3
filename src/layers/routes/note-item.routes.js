import express from "express";
import Joi from "joi";
import { noteItemService } from "../business/note-item.service.js";
import { EditNoteInputSchema } from "../models/edit-note-input.schema.js";

export const router = express.Router();

/**
 * @openapi
 * /notes/{id}:
 *  get:
 *    summary: Returns a note by id
 *    tags:
 *      - Note item operations
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Successful response
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const note = noteItemService.get(id);

  res.send(note);
});

/**
 * @openapi
 * /notes/{id}:
 *  patch:
 *    summary: Edit a note by id
 *    tags:
 *      - Note item operations
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/EditNoteInput'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Successful response
 */
router.patch("/:id", (req, res) => {
  Joi.attempt(req.body, EditNoteInputSchema, {
    abortEarly: false,
  });

  const { id } = req.params;
  const { content, category } = req.body;

  const note = noteItemService.update(id, { content, category });

  res.send(note);
});

/**
 * @openapi
 * /notes/{id}:
 *  delete:
 *    summary: Remove a note by id
 *    tags:
 *      - Note item operations
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      204:
 *        description: Successful response
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  noteItemService.delete(id);

  res.sendStatus(204);
});

/**
 * @openapi
 * /notes/{id}/archive:
 *  post:
 *    summary: Archive a note by id
 *    tags:
 *      - Note item operations
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Successful response
 */
router.post("/:id/archive", (req, res) => {
  const { id } = req.params;

  const note = noteItemService.archive(id);

  res.send(note);
});

/**
 * @openapi
 * /notes/{id}/unarchive:
 *  post:
 *    summary: Unarchive a note by id
 *    tags:
 *      - Note item operations
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Successful response
 */
router.post("/:id/unarchive", (req, res) => {
  const { id } = req.params;

  const note = noteItemService.unarchive(id);

  res.send(note);
});
