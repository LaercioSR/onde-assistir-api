import "reflect-metadata";
import "@shared/container";
import { container } from "tsyringe";

import { ChannelsSeeder } from "@modules/channels/seeders/ChannelsSeeder";
import { CompetitionsSeeder } from "@modules/competitions/seeders/CompetitionsSeeder";
import { NBASeeder } from "@modules/teams/seeders/NBASeeder";

import { AppDataSource } from "../dataSource";

async function start() {
  await AppDataSource.initialize();

  // CHANNEL
  const channelsSeeder = container.resolve(ChannelsSeeder);
  await channelsSeeder.run();
  // COMPETITION
  const competitionsSeeder = container.resolve(CompetitionsSeeder);
  await competitionsSeeder.run();
  // NBA
  const nbaSeeder = container.resolve(NBASeeder);
  await nbaSeeder.run();
}

start();
