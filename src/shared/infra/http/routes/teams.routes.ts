import { Router } from "express";

import { GetTeamController } from "@modules/teams/useCases/getTeam/GetTeamController";
import { ListGamesByTeamController } from "@modules/teams/useCases/listGamesByTeam/ListGamesByTeamController";
import { ListTeamsController } from "@modules/teams/useCases/listTeams/ListTeamsController";

const getTeamController = new GetTeamController();
const listGamesByTeamController = new ListGamesByTeamController();
const listTeamsController = new ListTeamsController();

const teamsRoutes = Router();

teamsRoutes.get("/games/:id", listGamesByTeamController.handle);
teamsRoutes.get("/:name", getTeamController.handle);
teamsRoutes.get("/", listTeamsController.handle);

export { teamsRoutes };
