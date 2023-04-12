import { inject, injectable } from "tsyringe";

import competitions from "../../../../assets/jsons/competitions.json";
import { ICompetitionsRepository } from "../repositories/ICompetitionsRepository";

@injectable()
class CompetitionsSeeder {
  constructor(
    @inject("CompetitionsRepository")
    private competitionsRepository: ICompetitionsRepository
  ) {}

  async run() {
    competitions.forEach((competition) => {
      console.log(competition.name);
      this.competitionsRepository.create(competition);
    });
  }
}

export { CompetitionsSeeder };
