import { Router } from "express";

import { ListNextGamesController } from "@modules/teams/useCases/listNextGames/ListNextGamesController";
import { ListNextGamesByDateController } from "@modules/teams/useCases/listNextGamesByDate/ListNextGamesByDateController";
import { UpdateGamesController } from "@modules/teams/useCases/updateGames/UpdateGamesController";

const listNextGamesByDateController = new ListNextGamesByDateController();
const listNextGamesController = new ListNextGamesController();
const updateGamesController = new UpdateGamesController();

const gamesRoutes = Router();

gamesRoutes.get("/date", listNextGamesByDateController.handle);
gamesRoutes.get("/next", listNextGamesController.handle);
gamesRoutes.post("/update", updateGamesController.handle);

export { gamesRoutes };
