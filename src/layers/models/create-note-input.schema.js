import Joi from "joi";
import { NOTE_CATEGORIES } from "../../common/constants.js";

export const CreateNoteInputSchema = Joi.object({
  content: Joi.string().min(1).required(),
  category: Joi.string()
    .valid(...Object.values(NOTE_CATEGORIES))
    .required(),
});
