import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class League {
  @Prop()
  alias!: string;

  @Prop()
  name!: string;

  @Prop()
  id!: string;
}

export type LeagueDocument = League & Document;
export const LeagueSchema = SchemaFactory.createForClass(League);
