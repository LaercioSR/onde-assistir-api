import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Game } from "./Game";

@Entity("team")
export class Team {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  logo?: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at?: Date;

  @DeleteDateColumn({ select: false })
  deleted_at?: Date;

  @OneToMany(() => Game, (game) => game.team_home)
  games_home: Game[];

  @OneToMany(() => Game, (game) => game.team_away)
  games_away: Game[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
