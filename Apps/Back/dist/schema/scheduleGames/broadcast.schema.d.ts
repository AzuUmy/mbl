export declare class Broadcast {
    network: string;
    type: string;
    locale: string;
    channel?: string;
}
export type BroadcastDocument = Broadcast & Document;
export declare const BroadcastSchema: import("mongoose").Schema<Broadcast, import("mongoose").Model<Broadcast, any, any, any, import("mongoose").Document<unknown, any, Broadcast, any, {}> & Broadcast & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Broadcast, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Broadcast>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Broadcast> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
