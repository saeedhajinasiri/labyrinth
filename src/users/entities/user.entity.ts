import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  full_name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('datetime')
  created_at: Date;
}
