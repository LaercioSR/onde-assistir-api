import { ICreateGameDTO } from "../dtos/ICreateGameDTO";
import { ISearchGamesDTO } from "../dtos/ISearchGamesDTO";
import { Game } from "../infra/typeorm/entities/Game";

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<Game>;
  findNext(data: ISearchGamesDTO): Promise<Game[]>;
}

export { IGamesRepository };
