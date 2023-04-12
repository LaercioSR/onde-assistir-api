import { Repository } from "typeorm";

import { ICreateGameDTO } from "@modules/teams/dtos/ICreateGameDTO";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";
import { AppDataSource } from "@shared/infra/typeorm/dataSource";

import { Game } from "../entities/Game";

class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = AppDataSource.getRepository(Game);
  }

  async create(data: ICreateGameDTO): Promise<Game> {
    const gameAlreadyExists = await this.repository.findOne({ where: data });
    if (gameAlreadyExists) {
      return gameAlreadyExists;
    }

    const game = this.repository.create(data);

    await this.repository.save(game);

    return game;
  }
}

export { GamesRepository };
