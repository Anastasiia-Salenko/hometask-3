import swaggerUi from "swagger-ui-express";
import { apiSpecification } from "./api-specification.js";

export const setupSwagger = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiSpecification));

  app.get("/openapi-spec.json", (req, res) => {
    res.send(apiSpecification);
  });
};
