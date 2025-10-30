import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Broadcast {
  @Prop()
  network!: string;

  @Prop()
  type!: string;

  @Prop()
  locale!: string;

  @Prop()
  channel?: string;
}

export type BroadcastDocument = Broadcast & Document;
export const BroadcastSchema = SchemaFactory.createForClass(Broadcast);
