import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTableRegion1680037809991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "region",
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
            name: "region_level",
            type: "varchar",
          },
          {
            name: "logo",
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
      })
    );
    await queryRunner.dropColumns("competition", ["region_level", "origin"]);
    await queryRunner.addColumn(
      "competition",
      new TableColumn({
        name: "region_id",
        type: "uuid",
        isNullable: true,
      })
    );
    await queryRunner.createForeignKey(
      "competition",
      new TableForeignKey({
        name: "FKCompetitionRegion",
        referencedTableName: "region",
        referencedColumnNames: ["id"],
        columnNames: ["region_id"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("region");
    await queryRunner.addColumns("competition", [
      new TableColumn({
        name: "region_level",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "origin",
        type: "varchar",
        isNullable: true,
      }),
    ]);
    await queryRunner.dropColumn("competition", "region_id");
  }
}
