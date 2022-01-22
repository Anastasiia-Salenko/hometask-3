import express from "express";
import { noteStatisticsService } from "../business/note-statistics.service.js";

export const router = express.Router();

/**
 * @openapi
 * /notes/statistics:
 *  get:
 *    summary: Return notes statistics
 *    tags:
 *      - Note statistics
 *    responses:
 *      200:
 *        description: Successful response
 */
router.get("/notes/statistics", (req, res) => {
  const statistics = noteStatisticsService.get();

  res.send(statistics);
});
