import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTransmition1681220671620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transmition",
        columns: [
          {
            name: "game_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "channel_id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "link",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKTransmitionGame",
            referencedTableName: "game",
            referencedColumnNames: ["id"],
            columnNames: ["game_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKTransmitionChannel",
            referencedTableName: "channel",
            referencedColumnNames: ["id"],
            columnNames: ["channel_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transmition");
  }
}
