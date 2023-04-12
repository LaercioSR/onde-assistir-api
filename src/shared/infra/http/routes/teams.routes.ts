import { Router } from "express";

import { ListGamesByTeamController } from "@modules/teams/useCases/listGamesByTeam/ListGamesByTeamController";

const listGamesByTeamController = new ListGamesByTeamController();

const teamsRoutes = Router();

teamsRoutes.get("/games/:id", listGamesByTeamController.handle);

export { teamsRoutes };
