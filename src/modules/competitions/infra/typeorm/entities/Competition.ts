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

import { Region } from "./Region";
import { Sport } from "./Sport";

@Entity("competition")
export class Competition {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  logo?: string;

  @Column()
  sport_id?: string;

  @ManyToOne(() => Sport, { eager: true })
  @JoinColumn({ name: "sport_id" })
  sport?: Sport;

  @Column()
  region_id?: string;

  @ManyToOne(() => Region, { eager: true })
  @JoinColumn({ name: "region_id" })
  region?: Region;

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
