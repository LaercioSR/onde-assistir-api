import { MoreThanOrEqual, Repository } from "typeorm";

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

  async findNext(): Promise<Game[]> {
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() - 4);

    const games = await this.repository.find({
      relations: [
        "team_home",
        "team_away",
        "competition",
        "broadcasts",
        "broadcasts.channel",
      ],
      order: { date: { direction: "ASC" } },
      where: { date: MoreThanOrEqual(dateNow) },
    });

    return games;
  }
}

export { GamesRepository };
