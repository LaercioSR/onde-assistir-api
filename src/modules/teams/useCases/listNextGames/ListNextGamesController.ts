import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNextGamesService } from "./ListNextGamesService";

class ListNextGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listNextGamesService = container.resolve(ListNextGamesService);

    const games = await listNextGamesService.execute();

    return response.json(games);
  }
}

export { ListNextGamesController };
