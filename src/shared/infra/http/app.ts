import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import "@shared/jobs";

import swaggerOptions from "@config/swagger";
import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerOptions)
);

app.use("/api", router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    console.log(err);
    return response.status(500).json({
      status: "error",
      message: `Internal app error - ${err.message}`,
    });
  }
);

export { app };
