import { ScheduleGamesApp } from 'src/app/scheduleGames.app';
export declare class MlbServiceApi {
    private readonly scheduleGamesApp;
    constructor(scheduleGamesApp: ScheduleGamesApp);
    fetchDailyScheduleGames(): Promise<void>;
}
