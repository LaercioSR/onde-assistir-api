import { Repository } from "typeorm";

import { ICreateBroadcastDTO } from "@modules/teams/dtos/ICreateBroadcastDTO";
import { IBroadcastsRepository } from "@modules/teams/repositories/IBroadcastsRepository";
import { AppDataSource } from "@shared/infra/typeorm/dataSource";

import { Broadcast } from "../entities/Broadcast";

class BroadcastsRepository implements IBroadcastsRepository {
  private repository: Repository<Broadcast>;

  constructor() {
    this.repository = AppDataSource.getRepository(Broadcast);
  }

  async create({
    game_id,
    channel_id,
    link,
  }: ICreateBroadcastDTO): Promise<Broadcast> {
    let broadcast = await this.repository.findOne({
      where: { game_id, channel_id },
    });
    if (broadcast) {
      broadcast.link = link;
    } else {
      broadcast = this.repository.create({ game_id, channel_id, link });
    }

    await this.repository.save(broadcast);

    return broadcast;
  }
}

export { BroadcastsRepository };
