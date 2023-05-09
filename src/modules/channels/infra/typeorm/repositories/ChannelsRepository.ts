import { Repository } from "typeorm";

import { ICreateChannelDTO } from "@modules/channels/dtos/ICreateChannelDTO";
import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";
import { AppDataSource } from "@shared/infra/typeorm/dataSource";

import { Channel } from "../entities/Channel";

class ChannelsRepository implements IChannelsRepository {
  private repository: Repository<Channel>;

  constructor() {
    this.repository = AppDataSource.getRepository(Channel);
  }

  async create({
    name,
    logo,
    source,
    link,
  }: ICreateChannelDTO): Promise<Channel> {
    const channelAlreadyExists = this.findByName(name);

    if (channelAlreadyExists) {
      return channelAlreadyExists;
    }

    const channel = this.repository.create({ name, logo, source, link });

    await this.repository.save(channel);

    return channel;
  }

  async findByName(name: string): Promise<Channel> {
    const channel = await this.repository.findOne({ where: { name } });

    return channel;
  }
}

export { ChannelsRepository };
