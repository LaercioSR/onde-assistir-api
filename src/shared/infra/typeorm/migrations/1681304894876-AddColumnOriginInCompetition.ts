import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnOriginInCompetition1681304894876
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "competition",
      new TableColumn({
        name: "origin",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("competition", "origin");
  }
}
