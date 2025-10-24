import { Resolver, Query, Args } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleGames } from './Entities/schedule.entity';

@Resolver(() => ScheduleGames)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [ScheduleGames], { name: 'scheduleGames' })
  async scheduleGames(
    @Args('Year', { type: () => String }) Year: string,
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ): Promise<ScheduleGames[]> {
    return this.scheduleService.getSchedule(Year, startDate, endDate);
  }
}
