import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableBroadcast1681220671620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "broadcast",
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
            name: "FKBroadcastGame",
            referencedTableName: "game",
            referencedColumnNames: ["id"],
            columnNames: ["game_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKBroadcastChannel",
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
    await queryRunner.dropTable("broadcast");
  }
}
