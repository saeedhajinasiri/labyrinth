import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateLabyrinthsTable1697810803831 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'labyrinths',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'x',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'y',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'start_x',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'start_y',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'end_x',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'end_y',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
      }),
      true,
      true,
    );

    const foreignKey = new TableForeignKey({
      name: 'labyrinths_user_id_foreign',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
    });
    await queryRunner.createForeignKey('labyrinths', foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE labyrinths`);
  }
}
