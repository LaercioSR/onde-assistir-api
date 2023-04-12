import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNextGamesService } from "./ListNextGamesService";

class ListNextGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { team: team_id, competition: competition_id } = request.query;

    const listNextGamesService = container.resolve(ListNextGamesService);

    const games = await listNextGamesService.execute({
      team_id: team_id as string,
      competition_id: competition_id as string,
    });

    return response.json(games);
  }
}

export { ListNextGamesController };
