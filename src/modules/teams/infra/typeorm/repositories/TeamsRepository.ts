import { Repository } from "typeorm";

import { ICreateTeamDTO } from "@modules/teams/dtos/ICreateTeamDTO";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { AppDataSource } from "@shared/infra/typeorm/dataSource";

import { Team } from "../entities/Team";

class TeamsRepository implements ITeamsRepository {
  private repository: Repository<Team>;

  constructor() {
    this.repository = AppDataSource.getRepository(Team);
  }

  async create({ name, logo }: ICreateTeamDTO): Promise<Team> {
    const team = this.repository.create({ name, logo });

    await this.repository.save(team);

    return team;
  }

  async findByName(name: string): Promise<Team> {
    const team = await this.repository.findOne({ where: { name } });

    return team;
  }
}

export { TeamsRepository };
