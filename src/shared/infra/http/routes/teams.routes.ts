import { Router } from "express";

import { ListGamesByTeamController } from "@modules/teams/useCases/listGamesByTeam/ListGamesByTeamController";
import { ListTeamsController } from "@modules/teams/useCases/listTeams/ListTeamsController";

const listGamesByTeamController = new ListGamesByTeamController();
const listTeamsController = new ListTeamsController();

const teamsRoutes = Router();

teamsRoutes.get("/games/:id", listGamesByTeamController.handle);
teamsRoutes.get("/", listTeamsController.handle);

export { teamsRoutes };
