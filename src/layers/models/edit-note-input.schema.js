import Joi from "joi";
import { NOTE_CATEGORIES } from "../../common/constants.js";

export const EditNoteInputSchema = Joi.object({
  content: Joi.string().min(1),
  category: Joi.string().valid(...Object.values(NOTE_CATEGORIES)),
}).min(1);
