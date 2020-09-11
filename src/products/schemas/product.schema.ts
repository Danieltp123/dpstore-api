import { SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface';

export const ProductSchema = SchemaFactory.createForClass(Product);
