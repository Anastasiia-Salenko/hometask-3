import swaggerJSDoc from "swagger-jsdoc";
import j2s from "joi-to-swagger";
import { CreateNoteInputSchema } from "../layers/models/create-note-input.schema.js";
import { EditNoteInputSchema } from "../layers/models/edit-note-input.schema.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notes API",
      description: '<a href="/openapi-spec.json">OpenAPI specification</a>',
      version: "1.0.0",
    },
  },
  apis: ["./src/layers/routes/*.routes.js"],
};

export const apiSpecification = swaggerJSDoc(options);

apiSpecification.tags = [
  {
    name: "Note list operations",
  },
  {
    name: "Note item operations",
  },
];

apiSpecification.definitions = {
  CreateNoteInput: j2s(CreateNoteInputSchema).swagger,
  EditNoteInput: j2s(EditNoteInputSchema).swagger,
};
