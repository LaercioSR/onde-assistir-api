import { Router } from "express";

import { ListCompetitionsController } from "@modules/competitions/useCases/listCompetitions/ListCompetitionsController";

const listCompetitionsController = new ListCompetitionsController();

const competitionsRoutes = Router();

competitionsRoutes.get("/", listCompetitionsController.handle);

export { competitionsRoutes };
