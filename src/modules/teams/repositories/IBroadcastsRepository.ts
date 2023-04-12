import { ICreateBroadcastDTO } from "../dtos/ICreateBroadcastDTO";
import { Broadcast } from "../infra/typeorm/entities/Broadcast";

interface IBroadcastsRepository {
  create(data: ICreateBroadcastDTO): Promise<Broadcast>;
}

export { IBroadcastsRepository };
