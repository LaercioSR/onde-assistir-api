import { inject, injectable } from "tsyringe";

import channels from "../../../../assets/jsons/channels.json";
import { IChannelsRepository } from "../repositories/IChannelsRepository";

@injectable()
class ChannelsSeeder {
  constructor(
    @inject("ChannelsRepository")
    private channelsRepository: IChannelsRepository
  ) {}

  async run() {
    channels.forEach((channel) => {
      console.log(channel.name);
      this.channelsRepository.create(channel);
    });
  }
}

export { ChannelsSeeder };
