import { ICreateGameDTO } from "../dtos/ICreateGameDTO";
import { Game } from "../infra/typeorm/entities/Game";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<Game>;
}

export { IGamesRepository };