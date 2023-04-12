import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCompetitionsService } from "./ListCompetitionsService";

class ListCompetitionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCompetitionsService = container.resolve(ListCompetitionsService);

    const competitions = await listCompetitionsService.execute();

    return response.json(competitions);
  }
}

export { ListCompetitionsController };
