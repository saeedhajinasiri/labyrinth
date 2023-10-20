import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabyrinthModule } from './labyrinth/labyrinth.module';
import configuration from './config/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LabyrinthModule,
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
