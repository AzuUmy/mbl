export declare class League {
    alias: string;
    name: string;
    id: string;
}
export type LeagueDocument = League & Document;
export declare const LeagueSchema: import("mongoose").Schema<League, import("mongoose").Model<League, any, any, any, import("mongoose").Document<unknown, any, League, any, {}> & League & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, League, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<League>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<League> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
