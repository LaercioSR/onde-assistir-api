import { inject, injectable } from "tsyringe";

import { IGameResponseDTO } from "@modules/teams/dtos/IGameResponseDTO";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class ListGamesByTeamService {
  constructor(
    @inject("TeamsRepository")
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(id: string): Promise<IGameResponseDTO[]> {
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() - 4);

    const games = await this.teamsRepository.getGamesById(id);

    const response: IGameResponseDTO[] = games
      .filter((game) => game.date >= dateNow)
      .map((game) => {
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

export { ListGamesByTeamService };
