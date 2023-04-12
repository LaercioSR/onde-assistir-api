import { ICreateTeamDTO } from "../dtos/ICreateTeamDTO";
import { Team } from "../infra/typeorm/entities/Team";

interface ITeamsRepository {
  create(data: ICreateTeamDTO): Promise<Team>;
  findByName(name: string): Promise<Team>;
}

export { ITeamsRepository };
