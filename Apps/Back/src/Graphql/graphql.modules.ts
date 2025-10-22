// apps/back/src/Graphql/graphql.modules.ts
import { Module } from '@nestjs/common';
import { ScheduleModule } from './ScheduleGames/schedule.modules';
// import other GraphQL modules here
// import { TeamsModule } from './Teams/teams.module';
// import { GamesModule } from './Games/games.module';

@Module({
  imports: [ScheduleModule],
  exports: [ScheduleModule],
})
export class GraphQLModules {}
