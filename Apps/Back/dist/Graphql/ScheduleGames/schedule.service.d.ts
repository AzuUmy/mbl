import { ScheduleGamesSeries } from './Entities/schedule.entity';
export declare class ScheduleService {
    getSchedule(year: string, startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
}
