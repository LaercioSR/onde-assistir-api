/* eslint-disable no-restricted-syntax */
import fs from "fs";
import path from "path";
import { inject, injectable } from "tsyringe";

import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";
import { IBroadcastsRepository } from "@modules/teams/repositories/IBroadcastsRepository";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

interface IBroadcast {
  competition: string;
  date: string;
  team_home_name: string;
  team_home_image: string;
  team_away_name: string;
  team_away_image: string;
  transmissions: string[];
}

@injectable()
export class SaveBroadcastsJob {
  constructor(
    @inject("BroadcastsRepository")
    private broadcastsRepository: IBroadcastsRepository,
    @inject("ChannelsRepository")
    private channelsRepository: IChannelsRepository,
    @inject("CompetitionsRepository")
    private competitionsRepository: ICompetitionsRepository,
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository,
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository
  ) {}

  async run() {
    const footballBroadcastsFile = path.resolve(
      __dirname,
      "../../../assets/exports/football.json"
    );

    if (fs.existsSync(footballBroadcastsFile)) {
      const fileData = fs.readFileSync(footballBroadcastsFile);
      const footballBroadcasts: IBroadcast[] = JSON.parse(
        fileData as unknown as string
      );
      const dateNow = new Date();
      const yearNow = dateNow.getFullYear();

      for await (const broadcast of footballBroadcasts) {
        const gameMonth = broadcast.date.substring(8, 10);
        const gameDay = broadcast.date.substring(5, 7);
        const gameHour = broadcast.date.substring(13, 15);
        const gameMinute = broadcast.date.substring(16, 18);
        const gameDate = new Date(
          yearNow,
          Number(gameMonth) - 1,
          Number(gameDay),
          Number(gameHour),
          Number(gameMinute)
        );

        if (gameDate > dateNow) {
          let competition_id: string;
          if (broadcast.competition) {
            const competitionAlreadyExists =
              await this.competitionsRepository.findByName(
                broadcast.competition
              );
            if (competitionAlreadyExists) {
              competition_id = competitionAlreadyExists.id;
            } else {
              const competition = await this.competitionsRepository.create({
                name: broadcast.competition,
              });
              competition_id = competition.id;
            }
          }

          let team_home_id: string;
          const teamHomeAlreadyExists = await this.teamsRepository.findByName(
            broadcast.team_home_name
          );
          if (teamHomeAlreadyExists) {
            team_home_id = teamHomeAlreadyExists.id;
          } else {
            const teamHome = await this.teamsRepository.create({
              name: broadcast.team_home_name,
              logo: broadcast.team_home_image,
            });
            team_home_id = teamHome.id;
          }

          let team_away_id: string;
          const teamAwayAlreadyExists = await this.teamsRepository.findByName(
            broadcast.team_away_name
          );
          if (teamAwayAlreadyExists) {
            team_away_id = teamAwayAlreadyExists.id;
          } else {
            const teamAway = await this.teamsRepository.create({
              name: broadcast.team_away_name,
              logo: broadcast.team_away_image,
            });
            team_away_id = teamAway.id;
          }

          if (team_home_id && team_away_id) {
            const game = await this.gamesRepository.create({
              team_home_id,
              team_away_id,
              competition_id,
              date: gameDate,
            });

            // broadcast.transmissions.forEach(async (channel_name: string) => {
            for await (const channel_name of broadcast.transmissions) {
              let channel_id: string;
              const channelAlreadyExists =
                await this.channelsRepository.findByName(channel_name);
              if (channelAlreadyExists) {
                channel_id = channelAlreadyExists.id;
              } else {
                const channel = await this.channelsRepository.create({
                  name: channel_name,
                });
                channel_id = channel.id;
              }

              await this.broadcastsRepository.create({
                game_id: game.id,
                channel_id,
              });
            }
          }
        }
      }
    }
  }
}
