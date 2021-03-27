"use strict";

import express from "express";
import createLocaleMiddleware from "express-locale";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swagger as swaggerDocument } from "./config/swagger.js";
import { router as rest } from "./routes/index.js";
import { startPolyglot } from "./middleware/startPolyglot.middleware.js";

const app = express();

// Add data parsing to express.
app.use(express.json());

// Translation. Spanish (Paraguay) default language.
app.use(
  createLocaleMiddleware({
    priority: ["accept-language", "default"],
    default: "es-PY",
  })
);

// Set the language in the req with the phrases
// to be used.
app.use(startPolyglot);

// Security.
app.use(helmet());
app.use(cors());

// Documentation.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register the API REST routes.
app.use("/api/", rest);

export { app };