import { Router } from "express";

import { ListNextGamesController } from "@modules/teams/useCases/listNextGames/ListNextGamesController";
import { UpdateGamesController } from "@modules/teams/useCases/updateGames/UpdateGamesController";

const listNextGamesController = new ListNextGamesController();
const updateGamesController = new UpdateGamesController();

const gamesRoutes = Router();

gamesRoutes.get("/next", listNextGamesController.handle);
gamesRoutes.post("/update", updateGamesController.handle);

export { gamesRoutes };
