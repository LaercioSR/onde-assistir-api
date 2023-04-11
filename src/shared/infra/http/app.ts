import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express from "express";

import { router } from "./routes";

import "@shared/container";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export { app };
