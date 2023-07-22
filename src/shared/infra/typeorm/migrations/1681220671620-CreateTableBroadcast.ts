import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableBroadcast1681220671620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "broadcast",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "gen_random_uuid()",
          },
          {
            name: "game_id",
            type: "uuid",
          },
          {
            name: "channel_id",
            type: "uuid",
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
          },
          {
            name: "FKBroadcastChannel",
            referencedTableName: "channel",
            referencedColumnNames: ["id"],
            columnNames: ["channel_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("broadcast");
  }
}
