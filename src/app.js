import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router as noteListRouter } from "./layers/routes/note-list.routes.js";
import { router as noteItemRouter } from "./layers/routes/note-item.routes.js";
import { router as noteStatisticsRouter } from "./layers/routes/note-statistics.routes.js";
import { errorHandler } from "./common/error-handler.js";
import { setupSwagger } from "./docs/setup-swagger.js";

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", noteStatisticsRouter);
app.use("/", noteItemRouter);
app.use("/", noteListRouter);

app.use(errorHandler);

setupSwagger(app);
