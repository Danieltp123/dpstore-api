import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ type: String, required: true })
  asked: string;

  @Prop({ type: String, required: true })
  answered: string;

  @Prop({ type: Number, required: true })
  order: number;
}