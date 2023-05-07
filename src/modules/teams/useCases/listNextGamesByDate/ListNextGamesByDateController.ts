import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNextGamesByDateService } from "./ListNextGamesByDateService";

class ListNextGamesByDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { team: team_id, competition: competition_id } = request.query;

    const listNextGamesByDateService = container.resolve(
      ListNextGamesByDateService
    );

    const games = await listNextGamesByDateService.execute({
      team_id: team_id as string,
      competition_id: competition_id as string,
    });

    return response.json(games);
  }
}

export { ListNextGamesByDateController };
