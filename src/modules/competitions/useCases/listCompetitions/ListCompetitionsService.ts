import { inject, injectable } from "tsyringe";

import { Competition } from "@modules/competitions/infra/typeorm/entities/Competition";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";

@injectable()
class ListCompetitionsService {
  constructor(
    @inject("CompetitionsRepository")
    private competitionsRepository: ICompetitionsRepository
  ) {}

  async execute(): Promise<Competition[]> {
    const competitions = await this.competitionsRepository.find();

    return competitions;
  }
}

export { ListCompetitionsService };
