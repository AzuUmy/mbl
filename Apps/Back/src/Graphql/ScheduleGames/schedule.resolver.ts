import { Resolver, Query, Args } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleGames, ScheduleGamesSeries } from './Entities/schedule.entity';

@Resolver(() => ScheduleGamesSeries)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [ScheduleGamesSeries], { name: 'scheduleGames' })
  async scheduleGames(
    @Args('Year', { type: () => String }) Year: string,
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    return this.scheduleService.getSchedule(Year, startDate, endDate);
  }
}
