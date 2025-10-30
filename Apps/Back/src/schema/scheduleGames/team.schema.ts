import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Team {
  @Prop()
  name!: string;

  @Prop()
  market!: string;

  @Prop()
  abbr!: string;

  @Prop()
  id!: string;

  @Prop()
  seed!: number;

  @Prop()
  win!: number;

  @Prop()
  loss!: number;
}

export type TeamDocument = Team & Document;
export const TeamSchema = SchemaFactory.createForClass(Team);
