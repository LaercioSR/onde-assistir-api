import { inject, injectable } from "tsyringe";

import nba from "../../../../assets/jsons/nbaTeams.json";
import { ITeamsRepository } from "../repositories/ITeamsRepository";

@injectable()
class NBASeeder {
  constructor(
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository
  ) {}

  async run() {
    nba.forEach((competition) => {
      console.log(competition.name);
      this.teamsRepository.create(competition);
    });
  }
}

export { NBASeeder };
