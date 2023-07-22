import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("sport")
export class Sport {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({
    transformer: {
      to: (value: string) => value,
      from: (value: string) => {
        if (value) return value;
        return `${process.env.API_URL}/image/sports_score.svg`;
      },
    },
  })
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
