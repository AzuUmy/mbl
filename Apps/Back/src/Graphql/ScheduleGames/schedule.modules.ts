import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleResolver } from './schedule.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleGames, ScheduleGamesSchema } from 'src/schema/scheduleGames/scheduleGames.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ScheduleGames.name, schema: ScheduleGamesSchema },
    ]),
  ],
  providers: [ScheduleService, ScheduleResolver],
  exports: [ScheduleService],
})
export class ScheduleModule {}
