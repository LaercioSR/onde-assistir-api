/* eslint-disable no-restricted-syntax */
import axios from "axios";
import { inject, injectable } from "tsyringe";

import { IChannelsRepository } from "@modules/channels/repositories/IChannelsRepository";
import { ICompetitionsRepository } from "@modules/competitions/repositories/ICompetitionsRepository";
import { IBroadcastsRepository } from "@modules/teams/repositories/IBroadcastsRepository";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

interface IResponseNBA {
  leagueSchedule: {
    seasonYear: string;
    gameDates: {
      gameDate: string;
      games: {
        gameDateTimeUTC: string;
        ifNecessary: boolean;
        broadcasters: {
          intlTvBroadcasters: {
            broadcasterDisplay: string;
            broadcasterVideoLink: string;
          }[];
        };
        homeTeam: {
          teamId: number;
          teamName: string;
          teamCity: string;
        };
        awayTeam: {
          teamId: number;
          teamName: string;
          teamCity: string;
        };
      }[];
    }[];
  };
}

@injectable()
export class SaveNBABroadcastsJob {
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
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    const nba = await this.competitionsRepository.findByName("NBA");

    if (nba) {
      try {
        const response = await axios.get(
          "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_11.json"
        );
        const data = response.data as IResponseNBA;
        data.leagueSchedule.gameDates.forEach((gameDates) => {
          const gameDate = new Date(gameDates.gameDate);

          if (gameDate > todayDate) {
            gameDates.games.forEach(
              async ({
                homeTeam,
                awayTeam,
                broadcasters,
                gameDateTimeUTC,
                ifNecessary,
              }) => {
                if (!ifNecessary) {
                  const team_home = await this.teamsRepository.findByName(
                    `${homeTeam.teamCity} ${homeTeam.teamName}`
                  );
                  const team_away = await this.teamsRepository.findByName(
                    `${awayTeam.teamCity} ${awayTeam.teamName}`
                  );
                  const date = new Date(gameDateTimeUTC);
                  date.setHours(date.getHours() - 3);

                  if (team_home && team_away) {
                    const game = await this.gamesRepository.create({
                      team_home_id: team_home.id,
                      team_away_id: team_away.id,
                      competition_id: nba.id,
                      date,
                    });

                    broadcasters.intlTvBroadcasters.forEach(
                      async (broadcaster) => {
                        let channel_id: string;
                        const channelAlreadyExists =
                          await this.channelsRepository.findByName(
                            broadcaster.broadcasterDisplay
                          );
                        if (channelAlreadyExists) {
                          channel_id = channelAlreadyExists.id;
                        } else {
                          const channel = await this.channelsRepository.create({
                            name: broadcaster.broadcasterDisplay,
                          });
                          channel_id = channel.id;
                        }

                        await this.broadcastsRepository.create({
                          game_id: game.id,
                          channel_id,
                          link: broadcaster.broadcasterVideoLink,
                        });
                      }
                    );
                  }
                }
              }
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
