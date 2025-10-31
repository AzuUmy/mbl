import { ScheduleGames } from './Entities/schedule.entity';
import { Model } from 'mongoose';
import { ScheduleGameDocument } from 'src/schema/scheduleGames/scheduleGames.schema';
import { ScheduleGames as games } from '@my-mlb/shared/Types/gamesMLBTypes';
export declare class ScheduleService {
    private readonly scheduleGamesModel;
    constructor(scheduleGamesModel: Model<ScheduleGameDocument>);
    createScheduleGames(scheduleGames: ScheduleGames[]): Promise<void>;
    getScheduleGames(startDate: string, endDate: string): Promise<games[]>;
}
