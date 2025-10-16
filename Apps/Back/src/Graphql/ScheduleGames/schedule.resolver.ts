// graphql/ScheduleGames/schedule.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleGames } from './Entities/schedule.entity';

@Resolver(() => ScheduleGames)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Query(() => [ScheduleGames], { name: 'scheduleGames' })
  async scheduleGames(): Promise<ScheduleGames[]> {
    return this.scheduleService.getSchedule();
  }
}
