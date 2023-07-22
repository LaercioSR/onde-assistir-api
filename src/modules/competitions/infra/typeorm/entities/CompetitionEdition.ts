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

import { Competition } from "./Competition";

@Entity("competition_edition")
export class CompetitionEdition {
  @PrimaryColumn()
  id!: string;

  @Column()
  competition_id?: string;

  @ManyToOne(() => Competition, { eager: true })
  @JoinColumn({ name: "competition_id" })
  competition?: Competition;

  @Column()
  detail!: string;

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
