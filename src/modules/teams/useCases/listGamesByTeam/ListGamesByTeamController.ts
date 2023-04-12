import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListGamesByTeamService } from "./ListGamesByTeamService";

class ListGamesByTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listGamesByTeamService = container.resolve(ListGamesByTeamService);

    const games = await listGamesByTeamService.execute(id);

    return response.json(games);
  }
}

export { ListGamesByTeamController };
