import { Model } from 'mongoose';
import { ScheduleGameDocument, ScheduleGames } from 'src/schema/scheduleGames/scheduleGames.schema';
export declare class ScheduleGamesController {
    private readonly scheduleGames;
    constructor(scheduleGames: Model<ScheduleGameDocument>);
    createScheduledGames(scheduleGames: ScheduleGames[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, ScheduleGameDocument, {}, {}> & ScheduleGames & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, Omit<ScheduleGames, "_id">>[]>;
}
