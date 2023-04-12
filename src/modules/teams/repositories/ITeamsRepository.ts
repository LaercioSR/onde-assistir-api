import { ICreateTeamDTO } from "../dtos/ICreateTeamDTO";
import { Game } from "../infra/typeorm/entities/Game";
import { Team } from "../infra/typeorm/entities/Team";

interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<Team>;
  findByName(name: string): Promise<Team>;
  getGamesById(id: string): Promise<Game[]>;
  find(): Promise<Team[]>;
}

export { ITeamsRepository };
