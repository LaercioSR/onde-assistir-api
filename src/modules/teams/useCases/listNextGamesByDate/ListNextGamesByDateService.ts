import { inject, injectable } from "tsyringe";

import { IGameTimeResponseDTO } from "@modules/teams/dtos/IGameResponseDTO";
import { ISearchGamesDTO } from "@modules/teams/dtos/ISearchGamesDTO";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";

interface IGamesByDate {
  date: string;
  games: IGameTimeResponseDTO[];
}

@injectable()
class ListNextGamesByDateService {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute({
    team_id,
    competition_id,
  }: ISearchGamesDTO): Promise<IGamesByDate[]> {
    const games = await this.gamesRepository.findNext({
      team_id,
      competition_id,
    });

    const gamesByDate = new Map<string, IGameTimeResponseDTO[]>();

    games.forEach((game) => {
      const year = game.date.getFullYear();
      const month = game.date.getMonth();
      const day = game.date.getDate();
      const date = new Date(year, month, day).toISOString().substring(0, 10);

      const team_home = {
        id: game.team_home.id,
        name: game.team_home.name,
        logo: game.team_home.logo,
      };
      const team_away = {
        id: game.team_away.id,
        name: game.team_away.name,
        logo: game.team_away.logo,
      };
      const competition = {
        id: game.competition.id,
        name: game.competition.name,
        logo: game.competition.logo,
      };
      const broadcasts = game.broadcasts.map((broadcast) => {
        return {
          channel_id: broadcast.channel.id,
          name: broadcast.channel.name,
          logo: broadcast.channel.logo,
          link: broadcast.link ?? broadcast.channel.link,
        };
      });

      const time = game.date.toLocaleTimeString("pt-BR").substring(0, 5);
      const gameWithTime = {
        id: game.id,
        time,
        team_home,
        team_away,
        competition,
        broadcasts,
      };

      if (gamesByDate.has(date)) {
        gamesByDate.get(date).push(gameWithTime);
      } else {
        gamesByDate.set(date, [gameWithTime]);
      }
    });

    const keys = [...gamesByDate.keys()];
    const response = keys.map((key) => {
      return {
        date: key,
        games: gamesByDate.get(key),
      };
    });

    return response;
  }
}

export { ListNextGamesByDateService };
