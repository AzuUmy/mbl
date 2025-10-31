import { Resolver, Query, Args } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleGamesSeries } from './Entities/schedule.entity';

@Resolver(() => ScheduleGamesSeries)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [ScheduleGamesSeries], { name: 'scheduleGames' })
  async scheduleGames(
    @Args('startDate', { type: () => String }) startDate: string,
    @Args('endDate', { type: () => String }) endDate: string,
  ): Promise<ScheduleGamesSeries[]> {
    return this.scheduleService.getSchedule(startDate, endDate);
  }
}
