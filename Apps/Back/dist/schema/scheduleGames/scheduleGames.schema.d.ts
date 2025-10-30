import { Document } from 'mongoose';
import { Games } from './games.schema';
import { League } from './league.schema';
export declare class ScheduleGames {
    league?: League;
    date?: string;
    games: Games[];
}
export type ScheduleGameDocument = ScheduleGames & Document;
export declare const ScheduleGamesSchema: import("mongoose").Schema<ScheduleGames, import("mongoose").Model<ScheduleGames, any, any, any, Document<unknown, any, ScheduleGames, any, {}> & ScheduleGames & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ScheduleGames, Document<unknown, {}, import("mongoose").FlatRecord<ScheduleGames>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ScheduleGames> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
