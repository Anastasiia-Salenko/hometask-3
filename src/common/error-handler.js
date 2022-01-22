import { ERROR_TYPE } from "./constants.js";

export const errorHandler = (err, req, res, next) => {
  if (err) {
    if (err.name === ERROR_TYPE.VALIDATION_ERROR) {
      res.status(422);
      res.send({
        error: {
          type: err.name,
          details: err.details.map((item) => item.message),
        },
      });
    } else {
      res.status(500);
      res.send({
        error: {
          type: ERROR_TYPE.SERVER_ERROR,
        },
      });
      return next(err);
    }
  }

  next();
};
