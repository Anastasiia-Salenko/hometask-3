import express from "express";
import { router as noteListRouter } from "./layers/routes/note-list.routes.js";
import { router as noteItemRouter } from "./layers/routes/note-item.routes.js";

export const app = express();

app.use(express.json());

app.use("/notes", noteListRouter);
app.use("/notes", noteItemRouter);
