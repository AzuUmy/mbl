import { ScheduleService } from './schedule.service';
import { ScheduleGamesSeries } from './Entities/schedule.entity';
export declare class ScheduleResolver {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    scheduleGames(Year: string, startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
}
