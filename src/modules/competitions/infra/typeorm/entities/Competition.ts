import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("competition")
export class Competition {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  logo?: string;

  @Column()
  region_level?: string;

  @Column()
  origin?: string;

  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at?: Date;

  @DeleteDateColumn({ select: false })
  deleted_at?: Date;
}
