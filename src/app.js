import express from "express";
import morgan from "morgan";
import { router as noteListRouter } from "./layers/routes/note-list.routes.js";
import { router as noteItemRouter } from "./layers/routes/note-item.routes.js";
import { errorHandler } from "./common/error-handler.js";
import { setupSwagger } from "./docs/setup-swagger.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/notes", noteListRouter);
app.use("/notes", noteItemRouter);

app.use(errorHandler);

setupSwagger(app);
