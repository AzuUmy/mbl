import { ScheduleService } from './schedule.service';
import { ScheduleGames } from './Entities/schedule.entity';
export declare class ScheduleResolver {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    scheduleGames(): Promise<ScheduleGames[]>;
}
