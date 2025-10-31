import { Resolver, Query, Args } from '@nestjs/graphql';
import { ScheduleGamesSeries } from './Entities/schedule.entity';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';

@Resolver(() => ScheduleGamesSeries)
export class ScheduleResolver {
  constructor(private readonly scheduleGamesApp: ScheduleGamesApp) {}

  @Query(() => [ScheduleGamesSeries], { name: 'scheduleGames' })
  async scheduleGames(
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    return this.scheduleGamesApp.getScheduleGamesSeries(startDate, endDate);
  }
}
