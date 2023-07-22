import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTransmition1681220324181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "game",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "gen_random_uuid()",
          },
          {
            name: "team_home_id",
            type: "uuid",
          },
          {
            name: "team_away_id",
            type: "uuid",
          },
          {
            name: "competition_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "detail",
            type: "string",
            isNullable: true,
          },
          {
            name: "localization",
            type: "string",
            isNullable: true,
          },
          {
            name: "external_id",
            type: "string",
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
            name: "FKGameTeamHome",
            referencedTableName: "team",
            referencedColumnNames: ["id"],
            columnNames: ["team_home_id"],
          },
          {
            name: "FKGameTeamAway",
            referencedTableName: "team",
            referencedColumnNames: ["id"],
            columnNames: ["team_away_id"],
          },
          {
            name: "FKGameCompetition",
            referencedTableName: "competition_edition",
            referencedColumnNames: ["id"],
            columnNames: ["competition_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("game");
  }
}
