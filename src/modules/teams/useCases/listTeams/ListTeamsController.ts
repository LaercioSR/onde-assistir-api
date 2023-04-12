import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTeamsService } from "./ListTeamsService";

class ListTeamsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTeamsService = container.resolve(ListTeamsService);

    const teams = await listTeamsService.execute();

    return response.json(teams);
  }
}

export { ListTeamsController };
