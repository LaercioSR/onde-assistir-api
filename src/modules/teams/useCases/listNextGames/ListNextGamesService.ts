import { inject, injectable } from "tsyringe";

import { IGameResponseDTO } from "@modules/teams/dtos/IGameResponseDTO";
import { ISearchGamesDTO } from "@modules/teams/dtos/ISearchGamesDTO";
import { IGamesRepository } from "@modules/teams/repositories/IGamesRepository";

@injectable()
class ListNextGamesService {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute({
    team_id,
    competition_id,
  }: ISearchGamesDTO): Promise<IGameResponseDTO[]> {
    const games = await this.gamesRepository.findNext({
      team_id,
      competition_id,
    });

    const response: IGameResponseDTO[] = games.map((game) => {
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

      return {
        id: game.id,
        date: game.date,
        team_home,
        team_away,
        competition,
        broadcasts,
      };
    });

    return response;
  }
}

export { ListNextGamesService };
