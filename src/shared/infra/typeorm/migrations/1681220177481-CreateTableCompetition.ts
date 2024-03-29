import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCompetition1681220177481 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "competition",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: "gen_random_uuid()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "sport_id",
            type: "uuid",
          },
          {
            name: "logo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "region_id",
            type: "uuid",
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
            name: "FKCompetitionSport",
            referencedTableName: "sport",
            referencedColumnNames: ["id"],
            columnNames: ["sport_id"],
          },
          {
            name: "FKCompetitionRegion",
            referencedTableName: "region",
            referencedColumnNames: ["id"],
            columnNames: ["region_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("competition");
  }
}
