import { ERROR_TYPE } from "./constants.js";

export const errorHandler = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case ERROR_TYPE.VALIDATION_ERROR:
        {
          res.status(422);
          res.send({
            error: {
              type: err.name,
              details: err.details.map((item) => item.message),
            },
          });
        }
        break;
      case ERROR_TYPE.NOT_FOUND_ERROR:
        {
          res.status(404);
          res.send({
            error: {
              type: err.name,
            },
          });
        }
        break;
      default: {
        res.status(500);
        res.send({
          error: {
            type: ERROR_TYPE.SERVER_ERROR,
          },
        });
        return next(err);
      }
    }
  }

  next();
};
