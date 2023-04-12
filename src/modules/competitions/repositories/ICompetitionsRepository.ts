import { ICreateCompetitionDTO } from "../dtos/ICreateCompetitionDTO";
import { Competition } from "../infra/typeorm/entities/Competition";

interface ICompetitionsRepository {
  create(data: ICreateCompetitionDTO): Promise<Competition>;
  findByName(name: string): Promise<Competition>;
}

export { ICompetitionsRepository };
