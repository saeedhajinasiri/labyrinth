import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum blockType {
  'EMPTY' = 'empty',
  'FIELD' = 'field',
}

@Entity({ name: 'labyrinths' })
export class Labyrinth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  x: number;

  @Column({ nullable: true })
  y: number;

  @Column({ nullable: true })
  start_x: number;

  @Column({ nullable: true })
  start_y: number;

  @Column({ nullable: true })
  end_x: number;

  @Column({ nullable: true })
  end_y: number;

  @Column('datetime')
  created_at: Date;
}

@Entity({ name: 'labyrinth_blocks' })
export class LabyrinthBlock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  labyrinth_id: number;

  @Column()
  type: blockType;

  @Column({ nullable: true })
  x: number;

  @Column({ nullable: true })
  y: number;

  @Column('datetime')
  created_at: Date;
}
