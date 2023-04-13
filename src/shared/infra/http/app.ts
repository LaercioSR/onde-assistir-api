import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerOptions from "@config/swagger";

import "@shared/container";
import "@shared/jobs";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerOptions)
);

export { app };
