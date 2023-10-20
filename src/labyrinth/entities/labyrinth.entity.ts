import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum blockType {
  'EMPTY' = 'empty',
  'FIELD' = 'field',
}

@Entity()
export class Labyrinths {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  x: number;

  @Column({ nullable: true })
  y: number;

  @Column('date')
  created_at: Date;
}

@Entity()
export class LabyrinthBlocks {
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

  @Column('date')
  created_at: Date;
}
