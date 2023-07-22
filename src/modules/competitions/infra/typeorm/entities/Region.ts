import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("region")
export class Region {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  region_level!:
    | "WORLD"
    | "CONTINENT"
    | "COUNTRY"
    | "REGION"
    | "STATE"
    | "CITY";

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

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
