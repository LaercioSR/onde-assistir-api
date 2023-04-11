import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";

import "@shared/container";

import swaggerFile from "../../../swagger.json";

import swaggerOptions from "@config/swagger";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerOptions)
);

export { app };
