import { Module } from '@nestjs/common';
import { ScheduleModule } from './ScheduleGames/schedule.modules';
import { TeamsModule } from './Teams/teams.modules';

@Module({
  imports: [ScheduleModule, TeamsModule],
  exports: [ScheduleModule, TeamsModule],
})
export class GraphQLModules {}
