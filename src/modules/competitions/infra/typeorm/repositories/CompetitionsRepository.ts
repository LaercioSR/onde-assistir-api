import { Repository } from "typeorm";

import { ICreateCompetitionDTO } from "@modules/competitions/dtos/ICreateCompetitionDTO";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";
import { AppDataSource } from "@shared/infra/typeorm/dataSource";

import { Competition } from "../entities/Competition";

class CompetitionsRepository implements ICompetitionsRepository {
  private repository: Repository<Competition>;

  constructor() {
    this.repository = AppDataSource.getRepository(Competition);
  }

  async create({
    name,
    logo,
    region_level,
    origin,
  }: ICreateCompetitionDTO): Promise<Competition> {
    const competition = this.repository.create({
      name,
      logo,
      region_level,
      origin,
    });

    await this.repository.save(competition);

    return competition;
  }

  async findByName(name: string): Promise<Competition> {
    const competition = await this.repository.findOne({ where: { name } });

    return competition;
  }
}

export { CompetitionsRepository };