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
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKGameTeamAway",
            referencedTableName: "team",
            referencedColumnNames: ["id"],
            columnNames: ["team_away_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKGameCompetition",
            referencedTableName: "competition",
            referencedColumnNames: ["id"],
            columnNames: ["competition_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("game");
  }
}
