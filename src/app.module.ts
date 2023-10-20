import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabyrinthModule } from './labyrinths/labyrinth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    LabyrinthModule,
    UsersModule,
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
