import { container } from "tsyringe";

import { ChannelsRepository } from "@modules/channels/infra/typeorm/repositories/ChannelsRepository";
import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";
import { CompetitionsRepository } from "@modules/competitions/infra/typeorm/repositories/CompetitionsRepository";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";
import { BroadcastsRepository } from "@modules/teams/infra/typeorm/repositories/BroadcastsRepository";
import { GamesRepository } from "@modules/teams/infra/typeorm/repositories/GamesRepository";
import { TeamsRepository } from "@modules/teams/infra/typeorm/repositories/TeamsRepository";
import { IBroadcastsRepository } from "@modules/teams/repositories/IBroadcastsRepository";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

// BroadcastRepository
container.registerSingleton<IBroadcastsRepository>(
  "BroadcastsRepository",
  BroadcastsRepository
);

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

// GameRepository
container.registerSingleton<IGamesRepository>(
  "GamesRepository",
  GamesRepository
);

// TeamRepository
container.registerSingleton<ITeamsRepository>(
  "TeamsRepository",
  TeamsRepository
);
