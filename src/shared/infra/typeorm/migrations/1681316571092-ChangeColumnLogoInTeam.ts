import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ChangeColumnLogoInTeam1681316571092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "team",
      "logo",
      new TableColumn({
        name: "logo",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "team",
      "logo",
      new TableColumn({
        name: "logo",
        type: "varchar",
      })
    );
  }
}
