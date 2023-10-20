import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabyrinthModule } from './labyrinth/labyrinth.module';
import configuration from './config/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LabyrinthModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
