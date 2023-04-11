import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: process.env.LOGGING ? process.env.LOGGING === "true" : false,
  entities:
    process.env.NODE_ENV === "migration"
      ? []
      : [
          "src/modules/**/entities/*.ts",
          "src/modules/**/entities/**/*.ts",
          "dist/modules/**/entities/*.js",
          "dist/modules/**/entities/**/*.js",
        ],
  migrations: ["src/shared/infra/typeorm/migrations/**/*.ts"],
  subscribers: [],
  uuidExtension: "pgcrypto",
});
