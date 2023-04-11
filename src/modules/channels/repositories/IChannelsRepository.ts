import { ICreateChannelDTO } from "../dtos/ICreateChannelDTO";
import { Channel } from "../infra/typeorm/entities/Channel";

interface IChannelsRepository {
  create(data: ICreateChannelDTO): Promise<Channel>;
  findByName(name: string): Promise<Channel>;
}

export { IChannelsRepository };
