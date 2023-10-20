import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";

const OrmModule = TypeOrmModule.forFeature([User]);

@Module({
  imports: [OrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
