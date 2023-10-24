import { Module } from '@nestjs/common';
import configuration from './config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabyrinthsModule } from './labyrinths/labyrinths.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LabyrinthBlocksModule } from './labyrinths/labyrinth-blocks.module';

@Module({
  imports: [
    LabyrinthsModule,
    LabyrinthBlocksModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('database'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          migrations: ['dist/**/migrations/*{.ts,.js}'],
          migrationsTableName: 'migrations',
          migrationsRun: true,
          seeds: ['dist/**/seeds/*.seeder.{js,ts}'],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
