import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTeamService } from "./GetTeamService";

class GetTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const getTeamService = container.resolve(GetTeamService);

    const team = await getTeamService.execute(name.replaceAll("_", "%"));

    return response.json(team);
  }
}

export { GetTeamController };
