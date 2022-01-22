import Joi from "joi";

export const FilterNotesQuerySchema = Joi.object({
  isArchived: Joi.string().valid("true", "false"),
});
