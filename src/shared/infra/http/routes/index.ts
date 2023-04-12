import { Router } from "express";

import { competitionsRoutes } from "./competitions.routes";
import { gamesRoutes } from "./games.routes";
import { teamsRoutes } from "./teams.routes";

const router = Router();

router.use("/competitions", competitionsRoutes);
router.use("/games", gamesRoutes);
router.use("/teams", teamsRoutes);

export { router };
