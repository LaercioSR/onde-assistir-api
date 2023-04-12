import { inject, injectable } from "tsyringe";

import { Team } from "@modules/teams/infra/typeorm/entities/Team";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class ListTeamsService {
  constructor(
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(): Promise<Team[]> {
    const teams = await this.teamsRepository.find();

    return teams;
  }
}

export { ListTeamsService };
