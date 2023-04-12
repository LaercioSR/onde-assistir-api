import { Router } from "express";

import { gamesRoutes } from "./games.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router();

router.use("/games", gamesRoutes);
router.use("/teams", teamsRoutes);

export { router };
