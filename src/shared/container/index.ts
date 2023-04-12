import { container } from "tsyringe";

import { ChannelsRepository } from "@modules/channels/infra/typeorm/repositories/ChannelsRepository";
import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";
import { CompetitionsRepository } from "@modules/competitions/infra/typeorm/repositories/CompetitionsRepository";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";

// ChannelRepository
container.registerSingleton<IChannelsRepository>(
  "ChannelsRepository",
  ChannelsRepository
);

// CompetitionRepository
container.registerSingleton<ICompetitionsRepository>(
  "CompetitionsRepository",
  CompetitionsRepository
);
