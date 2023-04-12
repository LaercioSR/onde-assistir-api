import { Router } from "express";

import { ListNextGamesController } from "@modules/teams/useCases/listNextGames/ListNextGamesController";

const listNextGamesController = new ListNextGamesController();

const gamesRoutes = Router();

gamesRoutes.get("/next", listNextGamesController.handle);

export { gamesRoutes };
