import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { CompetitionEdition } from "@modules/competitions/infra/typeorm/entities/CompetitionEdition";

import { Broadcast } from "./Broadcast";
import { Team } from "./Team";

@Entity("game")
export class Game {
  @PrimaryColumn()
  id: string;

  @Column()
  team_home_id!: string;

  @ManyToOne(() => Team, { eager: true })
  @JoinColumn({ name: "team_home_id" })
  team_home: Team;

  @Column()
  team_away_id!: string;

  @ManyToOne(() => Team, { eager: true })
  @JoinColumn({ name: "team_away_id" })
  team_away: Team;

  @Column()
  competition_id?: string;

  @ManyToOne(() => CompetitionEdition, { eager: true })
  @JoinColumn({ name: "competition_id" })
  competition?: CompetitionEdition;

  @Column()
  date?: Date;

  @Column()
  detail?: string;

  @Column()
  localization?: string;

  @Column()
  external_id?: string;

  @OneToMany(() => Broadcast, (broadcast) => broadcast.game, { eager: true })
  broadcasts: Broadcast[];

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
