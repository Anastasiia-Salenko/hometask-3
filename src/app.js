import express from "express";
import { router } from "./layers/routes/note-list.routes.js";

export const app = express();

app.use(express.json());

app.use("/notes", router);
