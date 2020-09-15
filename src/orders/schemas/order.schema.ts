import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { ProductOrder } from '../dto/product-order';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({type: [raw({
    title: String,
    price: Number,
    imgUrl: String,
    productQty: Number
  })], required: true, default: [] })
  productsOrder: any[];
  
  @Prop({ type: String, required: true })
  creditCard: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
  