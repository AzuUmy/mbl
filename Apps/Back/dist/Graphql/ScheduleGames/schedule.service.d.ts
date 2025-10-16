import { ScheduleGames } from './Entities/schedule.entity';
export declare class ScheduleService {
    getSchedule(): Promise<ScheduleGames[]>;
}
