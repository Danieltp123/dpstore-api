import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, nullable: true })
  description?: string;
  
  @Prop({ type: Number, required: true })
  availableQty: number;
  
  @Prop({ type: Number, required: true })
  inShoppingCart: number;
  
  @Prop({ type: Number, required: true})
  price: number;
  
  @Prop({ type: String, required: true })
  imgUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
