import { ScheduleGamesSeries } from './Entities/schedule.entity';
import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
export declare class ScheduleResolver {
    private readonly scheduleGamesApp;
    constructor(scheduleGamesApp: ScheduleGamesApp);
    scheduleGames(startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
}
