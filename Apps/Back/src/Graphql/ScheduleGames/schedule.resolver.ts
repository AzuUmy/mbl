import { Resolver, Query, Args } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleGames } from './Entities/schedule.entity';

@Resolver(() => ScheduleGames)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => ScheduleGames, { name: 'scheduleGames' })
  async scheduleGames(
    @Args('Year', { type: () => String }) year: string,
    @Args('Month', { type: () => String }) month: string,
    @Args('Day', { type: () => String }) day: string,
  ): Promise<ScheduleGames> {
    return this.scheduleService.getSchedule(year, month, day);
  }
}
