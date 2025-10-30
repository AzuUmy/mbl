import { ScheduleGamesSeries } from './Entities/schedule.entity';
import { Model } from 'mongoose';
import { ScheduleGameDocument } from 'src/schema/scheduleGames/scheduleGames.schema';
export declare class ScheduleService {
    private readonly scheduleGamesModel;
    constructor(scheduleGamesModel: Model<ScheduleGameDocument>);
    getSchedule(year: string, startDate: string, endDate: string): Promise<ScheduleGamesSeries[]>;
}
