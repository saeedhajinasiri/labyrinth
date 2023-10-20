import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLabyrinthBlocksTable1697810807293
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'labyrinth_blocks',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'labyrinth_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'x',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'y',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'date',
            isNullable: true,
          },
        ],
      }),
      true,
      true,
    );

    const foreignKey = new TableForeignKey({
      columnNames: ['labyrinth_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'labyrinths',
      onDelete: 'CASCADE',
    });
    await queryRunner.createForeignKey('labyrinth_blocks', foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE labyrinth_blocks`);
  }
}
