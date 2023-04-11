import "reflect-metadata";
import "@shared/container";
import { container } from "tsyringe";

import { ChannelsSeeder } from "@modules/channels/seeders/ChannelsSeeder";

import { AppDataSource } from "../dataSource";

async function start() {
  await AppDataSource.initialize();

  const channelsSeeder = container.resolve(ChannelsSeeder);
  await channelsSeeder.run();
}

start();
