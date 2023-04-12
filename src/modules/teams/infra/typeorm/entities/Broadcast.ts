import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Channel } from "@modules/channels/infra/typeorm/entities/Channel";

import { Game } from "./Game";

@Entity("broadcast")
export class Broadcast {
  @PrimaryColumn()
  id!: string;

  @Column()
  game_id!: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: "game_id" })
  game: Game;

  @Column()
  channel_id!: string;

  @ManyToOne(() => Channel)
  @JoinColumn({ name: "channel_id" })
  channel: Channel;

  @Column()
  link?: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at?: Date;

  @DeleteDateColumn({ select: false })
  deleted_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
