import { container } from "tsyringe";

import { ChannelsRepository } from "@modules/channels/infra/typeorm/repositories/ChannelsRepository";
import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";

// ChannelRepository
container.registerSingleton<IChannelsRepository>(
  "ChannelsRepository",
  ChannelsRepository
);
